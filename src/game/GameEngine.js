// GameEngine with Adaptive Fullscreen Viewport, Seamless Meadow, Pixel Art Sprites, and Camera Zoom
import { TILE_SIZE, MAP_COLS, MAP_ROWS, CROPS } from './Constants.js';
import { TileMap, TILE_TYPES } from './TileMap.js';
import { CropsManager } from './CropsManager.js';
import { AnimalsManager } from './AnimalsManager.js';
import { Farmer } from './Farmer.js';
import { Decorations } from './Decorations.js';
import { ParticleSystem } from './ParticleSystem.js';
import { TimeWeather } from './TimeWeather.js';
import { GameState } from './GameState.js';
import { sounds } from './SoundFX.js';
import { pixelArt } from './PixelArtSystem.js';

export class GameEngine {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;

    this.worldWidth = MAP_COLS * TILE_SIZE;
    this.worldHeight = MAP_ROWS * TILE_SIZE;

    // Camera zoom (Default 1.6x so tiles are large, crisp, and fill the screen)
    this.zoom = 1.6;

    this.particles = new ParticleSystem();
    this.state = new GameState(this.particles);
    this.tileMap = new TileMap();
    this.cropsManager = new CropsManager(this.tileMap, this.particles);
    this.animalsManager = new AnimalsManager(this.tileMap, this.particles);
    this.decorations = new Decorations(this.particles);
    this.farmer = new Farmer(this.tileMap, 11, 11);

    this.timeWeather = new TimeWeather((newDay, weather) => {
      this.state.dayOfSeason = (this.state.dayOfSeason % 28) + 1;
      this.state.dayOfWeekIndex = (this.state.dayOfWeekIndex + 1) % 7;
      if (this.state.dayOfSeason === 1) {
        this.state.seasonIndex = (this.state.seasonIndex + 1) % 4;
      }
      this.state.notify();
      this.particles.addFloatingText(`صباح يوم جديد ☀️ (يوم ${this.state.dayOfSeason})`, this.farmer.x, this.farmer.y - 40, '#ffd166', 22);

      if (weather === 'rainy') {
        this.tileMap.waterAll();
      } else {
        this.tileMap.dryOvernight();
      }
    });
    this.timeWeather.time = 11 * 60 + 45; // 11:45 AM

    this.camera = { x: 0, y: 0 };
    this.input = {
      keys: {},
      mouseWorldX: 0,
      mouseWorldY: 0,
      hoverCol: 0,
      hoverRow: 0,
      screenX: 0,
      screenY: 0
    };

    this.lastTime = performance.now();
    this.isRunning = false;

    this.initEvents();
    this.resizeCanvas();
  }

  resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;

    this.canvas.width = this.viewportWidth * dpr;
    this.canvas.height = this.viewportHeight * dpr;

    this.ctx.resetTransform();
    this.ctx.scale(dpr, dpr);
    this.ctx.imageSmoothingEnabled = false;

    // Adaptive zoom: calculate ideal zoom to ensure farm looks cozy and fills screen
    if (this.viewportWidth > 1800) {
      this.zoom = 1.65;
    } else if (this.viewportWidth > 1200) {
      this.zoom = 1.5;
    } else {
      this.zoom = 1.25;
    }
  }

  initEvents() {
    window.addEventListener('resize', () => this.resizeCanvas());
    document.addEventListener('fullscreenchange', () => this.resizeCanvas());

    // Mouse wheel zoom in/out
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.zoom = Math.min(2.4, this.zoom + 0.1);
      } else {
        this.zoom = Math.max(1.15, this.zoom - 0.1);
      }
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
      if (document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      this.input.keys[e.code] = true;

      // Hotbar selection 1-9, 0
      if (e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key, 10) - 1;
        this.state.selectedSlot = index;
        this.state.notify();
        sounds.click();
      } else if (e.key === '0') {
        this.state.selectedSlot = 9;
        this.state.notify();
        sounds.click();
      }

      // Space or 'E' key for context action
      if (e.code === 'Space' || e.code === 'KeyE') {
        e.preventDefault();
        const target = this.farmer.getTargetTile();
        this.smartInteract(target.col, target.row);
      }
    });

    window.addEventListener('keyup', (e) => {
      this.input.keys[e.code] = false;
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.input.screenX = e.clientX - rect.left;
      this.input.screenY = e.clientY - rect.top;

      // Accurate World coordinate calculation with zoom and camera
      this.input.mouseWorldX = (this.input.screenX / this.zoom) + this.camera.x;
      this.input.mouseWorldY = (this.input.screenY / this.zoom) + this.camera.y;

      this.input.hoverCol = Math.floor(this.input.mouseWorldX / TILE_SIZE);
      this.input.hoverRow = Math.floor(this.input.mouseWorldY / TILE_SIZE);
    });

    this.canvas.addEventListener('mousedown', (e) => {
      sounds.init();
      if (e.button !== 0) return;

      const col = this.input.hoverCol;
      const row = this.input.hoverRow;

      // 1. Pets (Dog & Cat)
      const pet = this.decorations.interactPets(this.input.mouseWorldX, this.input.mouseWorldY);
      if (pet) {
        this.state.restoreEnergy(1);
        return;
      }

      // 2. Animals & Dropped Products
      const animalResult = this.animalsManager.interactWithNearest(this.input.mouseWorldX, this.input.mouseWorldY, 55);
      if (animalResult) {
        if (animalResult.type === 'product') {
          this.state.addCoins(animalResult.item.price);
          this.state.addXp(animalResult.item.xp);
        } else if (animalResult.type === 'ride') {
          this.farmer.setSpeedMultiplier(animalResult.isRiding ? 2.2 : 1.0);
          this.state.checkQuests('ride', 1);
        } else {
          this.state.checkQuests('pet', 1);
        }
        return;
      }

      // 3. Apple Tree Shake
      for (const tree of this.tileMap.trees) {
        if (tree.col === col && tree.row === row && tree.type === 'apple') {
          sounds.harvest();
          this.state.addHarvestedItem('apple', 1);
          this.state.addCoins(25);
          this.particles.addHarvestBurst(col * TILE_SIZE + 24, row * TILE_SIZE + 24, '#ef4444');
          this.particles.addFloatingText('+1 تفاح طازج! 🍎', col * TILE_SIZE + 24, row * TILE_SIZE, '#ef4444', 18);
          return;
        }
      }

      // 4. Smart Direct Interaction or Move
      const farmerCol = Math.floor(this.farmer.x / TILE_SIZE);
      const farmerRow = Math.floor(this.farmer.y / TILE_SIZE);
      const dist = Math.hypot(col - farmerCol, row - farmerRow);

      if (dist <= 3.5) {
        this.smartInteract(col, row);
      } else {
        // Move towards clicked tile
        this.farmer.setMoveTarget(this.input.mouseWorldX, this.input.mouseWorldY);
      }
    });

    this.canvas.addEventListener('touchstart', (e) => {
      sounds.init();
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        this.input.screenX = touch.clientX - rect.left;
        this.input.screenY = touch.clientY - rect.top;
        this.input.mouseWorldX = (this.input.screenX / this.zoom) + this.camera.x;
        this.input.mouseWorldY = (this.input.screenY / this.zoom) + this.camera.y;

        const col = Math.floor(this.input.mouseWorldX / TILE_SIZE);
        const row = Math.floor(this.input.mouseWorldY / TILE_SIZE);
        this.smartInteract(col, row);
      }
    }, { passive: true });
  }

  // SMART CONTEXTUAL INTERACTION
  smartInteract(col, row) {
    if (!this.tileMap.isInBounds(col, row)) return;

    const tile = this.tileMap.getTile(col, row);
    const crop = this.cropsManager.getCrop(col, row);
    const currentItem = this.state.getSelectedItem();

    // 1. If clicking on MATURE CROP -> ALWAYS HARVEST IMMEDIATELY!
    if (crop && crop.isMature) {
      this.farmer.triggerAction('hoe');
      const harvested = this.cropsManager.harvest(col, row);
      if (harvested) {
        sounds.harvest();
        this.state.addHarvestedItem(harvested.type, 1);
        this.state.addCoins(harvested.sellPrice || 50);
        this.state.addXp(harvested.xp || 30);
      }
      return;
    }

    // 2. If clicking on WATER -> Refill Watering Can or Fish!
    if (tile === TILE_TYPES.WATER || tile === TILE_TYPES.DOCK) {
      if (currentItem && currentItem.id === 'rod') {
        this.farmer.triggerAction('rod');
        sounds.fish();
        this.state.useEnergy(0.5);
        this.particles.addWaterSplash(col * TILE_SIZE + 24, row * TILE_SIZE + 24);
        setTimeout(() => {
          sounds.harvest();
          this.state.addCoins(45);
          this.state.addXp(30);
          this.particles.addFloatingText('+1 سمكة نادرة! 🐟 (45 G)', this.farmer.x, this.farmer.y - 30, '#38bdf8', 18);
        }, 600);
        return;
      }

      if (this.state.refillWater()) {
        this.particles.addWaterSplash(col * TILE_SIZE + 24, row * TILE_SIZE + 24);
        this.particles.addFloatingText('تم ملء المرشة بالكامل! 💧', col * TILE_SIZE + 24, row * TILE_SIZE, '#64b5f6', 16);
      }
      return;
    }

    // 3. If clicking on a TREE -> Chop it with Axe!
    for (const tree of this.tileMap.trees) {
      if (tree.col === col && tree.row === row && tree.health > 0) {
        this.farmer.triggerAction('axe');
        sounds.axe();
        tree.health--;
        this.state.useEnergy(0.5);
        this.particles.addDirtBurst(col * TILE_SIZE + 24, row * TILE_SIZE + 24);

        if (tree.health <= 0) {
          sounds.harvest();
          this.state.addWood(6);
          this.state.addCoins(25);
          this.particles.addFloatingText('+6 خشب بناء! 🪵', col * TILE_SIZE + 24, row * TILE_SIZE, '#d97706', 18);
          this.state.checkQuests('axe', 1);
        }
        return;
      }
    }

    // 4. If current item is SEED and soil is TILLED/WATERED -> Plant it!
    if (currentItem && currentItem.type === 'seed' && (tile === TILE_TYPES.TILLED || tile === TILE_TYPES.WATERED) && !crop) {
      this.farmer.triggerAction('water');
      const planted = this.cropsManager.plant(col, row, currentItem.cropId);
      if (planted) {
        sounds.plant();
        this.state.useSelectedItem();
        this.state.useEnergy(0.2);
        this.state.checkQuests('plant', 1);
      }
      return;
    }

    // 5. If current item is WATERING CAN and soil is TILLED -> Water it!
    if (currentItem && currentItem.id === 'water' && tile === TILE_TYPES.TILLED) {
      if (this.state.useWater()) {
        this.farmer.triggerAction('water');
        sounds.water();
        this.tileMap.water(col, row);
        this.state.useEnergy(0.3);
        this.particles.addWaterSplash(col * TILE_SIZE + 24, row * TILE_SIZE + 24);
        this.particles.addFloatingText('سقيت التربة 💧', col * TILE_SIZE + 24, row * TILE_SIZE, '#60a5fa', 14);
        this.state.checkQuests('water', 1);
      } else {
        this.particles.addFloatingText('المرشة فارغة! اذهب للبحيرة لتعبئتها 💧', this.farmer.x, this.farmer.y - 25, '#f87171', 16);
      }
      return;
    }

    // 6. If current item is HOE and tile is GRASS -> Till the soil!
    if ((currentItem && (currentItem.id === 'hoe' || currentItem.id === 'pickaxe')) && tile === TILE_TYPES.GRASS) {
      this.farmer.triggerAction('hoe');
      sounds.till();
      this.tileMap.till(col, row);
      this.state.useEnergy(0.4);
      this.particles.addDirtBurst(col * TILE_SIZE + 24, row * TILE_SIZE + 24);
      this.particles.addFloatingText('حرثت الأرض! ⛏️', col * TILE_SIZE + 24, row * TILE_SIZE, '#a16207', 15);
      this.state.checkQuests('till', 1);
      return;
    }

    // 7. Auto-assist: If player clicked an empty tilled plot with no tool selected, auto-plant first seed
    if (tile === TILE_TYPES.TILLED && !crop) {
      const seedIndex = this.state.hotbar.findIndex(item => item && item.type === 'seed' && item.count > 0);
      if (seedIndex !== -1) {
        this.state.selectedSlot = seedIndex;
        this.state.notify();
        this.smartInteract(col, row);
        return;
      }
    }

    // 8. Auto-assist: If player clicked green grass, auto-select Hoe and till!
    if (tile === TILE_TYPES.GRASS) {
      const hoeIndex = this.state.hotbar.findIndex(item => item && item.id === 'hoe');
      if (hoeIndex !== -1) {
        this.state.selectedSlot = hoeIndex;
        this.state.notify();
        this.smartInteract(col, row);
        return;
      }
    }
  }

  // Floating Action Pill tooltip
  getHoverAction(col, row) {
    if (!this.tileMap.isInBounds(col, row)) return null;

    const tile = this.tileMap.getTile(col, row);
    const crop = this.cropsManager.getCrop(col, row);
    const currentItem = this.state.getSelectedItem();

    if (crop && crop.isMature) {
      return { text: `احصد ${crop.def.name}!`, icon: '🌾', color: '#ffd166' };
    }

    if (tile === TILE_TYPES.WATER || tile === TILE_TYPES.DOCK) {
      if (currentItem && currentItem.id === 'rod') {
        return { text: 'اصطد سمكاً', icon: '🎣', color: '#38bdf8' };
      }
      return { text: 'املأ المرشة بالماء', icon: '💧', color: '#60a5fa' };
    }

    for (const tree of this.tileMap.trees) {
      if (tree.col === col && tree.row === row && tree.health > 0) {
        if (tree.type === 'apple') {
          return { text: 'اقطف التفاح', icon: '🍎', color: '#ef4444' };
        }
        return { text: 'اقطع الشجرة للحطب', icon: '🪓', color: '#d97706' };
      }
    }

    if (tile === TILE_TYPES.TILLED) {
      if (!crop) {
        if (currentItem && currentItem.type === 'seed') {
          return { text: `ازرع ${currentItem.name}`, icon: '🌱', color: '#4ade80' };
        }
        return { text: 'اسقِ أو ازرع هنا', icon: '💧', color: '#60a5fa' };
      } else {
        return { text: `ينمو: ${crop.def.name}`, icon: '⏳', color: '#facc15' };
      }
    }

    if (tile === TILE_TYPES.WATERED) {
      if (!crop) {
        return { text: 'ازرع البذور هنا', icon: '🌱', color: '#4ade80' };
      }
    }

    if (tile === TILE_TYPES.GRASS) {
      return { text: 'احرث الأرض', icon: '⛏️', color: '#d97706' };
    }

    return null;
  }

  start() {
    this.isRunning = true;
    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  stop() {
    this.isRunning = false;
  }

  loop(currentTime) {
    if (!this.isRunning) return;

    try {
      const dt = Math.min((currentTime - this.lastTime) / 1000, 0.1);
      this.lastTime = currentTime;

      this.update(dt);
      this.render(currentTime / 1000);
    } catch (err) {
      console.error("Game loop error safely handled:", err);
    } finally {
      requestAnimationFrame((t) => this.loop(t));
    }
  }

  update(dt) {
    this.timeWeather.update(dt);
    const isRaining = this.timeWeather.weather === 'rainy';

    this.farmer.update(dt, this.input);
    this.cropsManager.update(dt, isRaining);
    this.animalsManager.update(dt);
    this.decorations.update(dt);

    const nightAlpha = this.timeWeather.getAmbientColor().alpha;
    this.particles.update(dt, isRaining, nightAlpha, this.worldWidth, this.worldHeight);

    // Effective Viewport in world coordinates with zoom
    const effectiveViewW = this.viewportWidth / this.zoom;
    const effectiveViewH = this.viewportHeight / this.zoom;

    // Camera follow player smoothly
    let targetCamX = this.farmer.x - effectiveViewW / 2;
    let targetCamY = this.farmer.y - effectiveViewH / 2;

    // Center farm if screen is wider/taller than farm world
    if (effectiveViewW >= this.worldWidth) {
      targetCamX = (this.worldWidth - effectiveViewW) / 2;
    } else {
      targetCamX = Math.max(0, Math.min(targetCamX, this.worldWidth - effectiveViewW));
    }

    if (effectiveViewH >= this.worldHeight) {
      targetCamY = (this.worldHeight - effectiveViewH) / 2;
    } else {
      targetCamY = Math.max(0, Math.min(targetCamY, this.worldHeight - effectiveViewH));
    }

    this.camera.x += (targetCamX - this.camera.x) * 0.14;
    this.camera.y += (targetCamY - this.camera.y) * 0.14;
  }

  render(timeElapsed) {
    this.ctx.clearRect(0, 0, this.viewportWidth, this.viewportHeight);

    this.ctx.save();
    // 1. Apply Zoom & Camera translation
    this.ctx.scale(this.zoom, this.zoom);
    this.ctx.translate(-Math.floor(this.camera.x), -Math.floor(this.camera.y));

    const effectiveViewW = this.viewportWidth / this.zoom;
    const effectiveViewH = this.viewportHeight / this.zoom;

    // 2. Terrain & Infinite Meadow (Zero black voids anywhere!)
    this.tileMap.render(this.ctx, timeElapsed, this.camera, effectiveViewW, effectiveViewH);

    // 3. Crops
    this.cropsManager.render(this.ctx, timeElapsed);

    // 4. Orchard & Perimeter Trees
    this.tileMap.renderTrees(this.ctx);

    // 5. Farm Buildings & Pets
    const isNight = this.timeWeather.getAmbientColor().alpha > 0.4;
    this.decorations.render(this.ctx, timeElapsed, isNight);

    // 6. Animals in Dedicated Enclosures
    this.animalsManager.render(this.ctx, timeElapsed);

    // 7. Farmer Character (with Horse Riding support)
    this.farmer.render(this.ctx, timeElapsed, this.animalsManager.isRidingHorse);

    // 8. Hover Cursor & Smart Action Tooltip
    this.renderTileCursor(this.ctx);

    // 9. Dynamic Ambient & Porch Lighting
    this.timeWeather.renderLighting(this.ctx, this.camera, effectiveViewW, effectiveViewH, [
      { x: 5 * TILE_SIZE, y: 3.5 * TILE_SIZE, radius: 180, intensity: 0.9 },
      { x: this.farmer.x, y: this.farmer.y, radius: 130, intensity: 0.85 }
    ]);

    // 10. Particles, Rain, and Pollen
    this.particles.render(this.ctx);

    this.ctx.restore();
  }

  renderTileCursor(ctx) {
    const col = this.input.hoverCol;
    const row = this.input.hoverRow;

    if (this.tileMap.isInBounds(col, row)) {
      const x = col * TILE_SIZE;
      const y = row * TILE_SIZE;

      ctx.save();
      ctx.strokeStyle = '#ffd166';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(x + 2, y + 2, TILE_SIZE - 4, TILE_SIZE - 4);
      ctx.fillStyle = 'rgba(255, 209, 102, 0.2)';
      ctx.fillRect(x + 2, y + 2, TILE_SIZE - 4, TILE_SIZE - 4);

      // Smart Floating Action Pill above tile
      const action = this.getHoverAction(col, row);
      if (action) {
        ctx.font = 'bold 12px "Cairo", sans-serif';
        const text = `${action.icon} ${action.text}`;
        const metrics = ctx.measureText(text);
        const pillW = metrics.width + 16;
        const pillH = 22;
        const pillX = x + TILE_SIZE / 2 - pillW / 2;
        const pillY = y - 14;

        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 11);
        ctx.fill();
        ctx.strokeStyle = '#ffd166';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(text, x + TILE_SIZE / 2, pillY + 15);
      }

      ctx.restore();
    }
  }
}
