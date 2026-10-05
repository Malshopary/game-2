// Animals Manager: Dedicated Enclosures for Chickens, Cows, Sheep, Horses, and Truffle Pigs
import { TILE_SIZE, ANIMALS } from './Constants.js';
import { pixelArt } from './PixelArtSystem.js';
import { sounds } from './SoundFX.js';

export class AnimalsManager {
  constructor(tileMap, particleSystem) {
    this.tileMap = tileMap;
    this.particles = particleSystem;
    this.animals = [];
    this.droppedProducts = [];

    this.isRidingHorse = false;

    this.initFarms();
  }

  initFarms() {
    // 1. CHICKEN COOP YARD (Cols 17-24, Rows 2-7)
    this.addAnimal('chicken', 19, 5, 'rooster');
    this.addAnimal('chicken', 21, 5, 'hen');
    this.addAnimal('chicken', 23, 6, 'hen');
    this.addAnimal('chicken', 20, 6, 'chick');

    // 2. COW PASTURE (Cols 27-36, Rows 2-7)
    this.addAnimal('cow', 30, 5);
    this.addAnimal('cow', 33, 5);
    this.addAnimal('cow', 35, 6);

    // 3. SHEEP MEADOW (Cols 17-25, Rows 12-18)
    this.addAnimal('sheep', 20, 14);
    this.addAnimal('sheep', 23, 15);
    this.addAnimal('sheep', 21, 16);

    // 4. HORSE PADDOCK (Cols 27-36, Rows 12-18)
    this.addAnimal('horse', 31, 15);

    // 5. PIG PEN (Cols 38-42, Rows 12-18)
    this.addAnimal('pig', 39, 15);
    this.addAnimal('pig', 41, 16);
  }

  addAnimal(type, tileCol, tileRow, variant = null) {
    const def = ANIMALS[type];
    if (!def) return;

    this.animals.push({
      id: Math.random().toString(36).substring(2, 9),
      type,
      variant,
      def,
      x: tileCol * TILE_SIZE + TILE_SIZE / 2,
      y: tileRow * TILE_SIZE + TILE_SIZE / 2,
      targetX: tileCol * TILE_SIZE + TILE_SIZE / 2,
      targetY: tileRow * TILE_SIZE + TILE_SIZE / 2,
      moveTimer: 2 + Math.random() * 3,
      productTimer: def.productInterval,
      direction: Math.random() > 0.5 ? 1 : -1,
      hasProductReady: false,
      grazeTimer: 0,
      bounds: this.getAnimalBounds(type)
    });
  }

  getAnimalBounds(type) {
    if (type === 'chicken') return { minC: 17, maxC: 24, minR: 4, maxR: 7 };
    if (type === 'cow') return { minC: 27, maxC: 36, minR: 4, maxR: 7 };
    if (type === 'sheep') return { minC: 17, maxC: 25, minR: 13, maxR: 18 };
    if (type === 'horse') return { minC: 27, maxC: 36, minR: 14, maxR: 18 };
    if (type === 'pig') return { minC: 38, maxC: 42, minR: 13, maxR: 18 };
    return { minC: 10, maxC: 20, minR: 10, maxR: 20 };
  }

  interactWithNearest(playerX, playerY, maxDist = 65) {
    // 1. Collect dropped products on ground (Eggs, Milk, Wool, Truffles)
    for (let i = this.droppedProducts.length - 1; i >= 0; i--) {
      const p = this.droppedProducts[i];
      const dist = Math.hypot(playerX - p.x, playerY - p.y);
      if (dist < maxDist) {
        this.droppedProducts.splice(i, 1);
        sounds.harvest();
        this.particles.addHarvestBurst(p.x, p.y, '#ffd166');
        this.particles.addFloatingText(`+1 ${p.icon} ${p.name}!`, p.x, p.y - 15, '#ffd166', 18);
        return { type: 'product', item: p };
      }
    }

    // 2. Interact with Animal
    for (const a of this.animals) {
      const dist = Math.hypot(playerX - a.x, playerY - a.y);
      if (dist < maxDist) {
        if (a.type === 'horse') {
          // Mount / Dismount Horse!
          this.isRidingHorse = !this.isRidingHorse;
          sounds.animal('horse');
          const msg = this.isRidingHorse ? 'ركبت الحصان السريع! 🏇 (سرعة مضاعفة)' : 'نزلت عن الحصان 🐎';
          this.particles.addFloatingText(msg, a.x, a.y - 25, '#ffd166', 18);
          return { type: 'ride', horse: a, isRiding: this.isRidingHorse };
        }

        // Milk Cow, Shear Sheep, or Collect Truffle when ready
        if (a.hasProductReady) {
          a.hasProductReady = false;
          a.productTimer = a.def.productInterval;
          sounds.harvest();
          this.particles.addHarvestBurst(a.x, a.y, '#ffffff');
          this.particles.addFloatingText(`+1 ${a.def.productIcon} ${a.def.productName}!`, a.x, a.y - 20, '#ffffff', 18);
          return {
            type: 'product',
            item: {
              id: a.def.product,
              name: a.def.productName,
              icon: a.def.productIcon,
              price: a.def.productPrice,
              xp: a.def.xp
            }
          };
        }

        // Petting Animal
        sounds.animal(a.type);
        this.particles.addHeart(a.x, a.y - 22);
        this.particles.addFloatingText(`❤️ ${a.def.name}`, a.x, a.y - 26, '#ff85a1', 16);
        return { type: 'pet', animal: a };
      }
    }

    return null;
  }

  update(dt) {
    for (const a of this.animals) {
      // If horse is currently ridden, it stays with the player
      if (a.type === 'horse' && this.isRidingHorse) {
        continue;
      }

      // Production Timer
      if (a.def.productInterval > 0) {
        a.productTimer -= dt;
        if (a.productTimer <= 0 && !a.hasProductReady) {
          a.hasProductReady = true;

          // Chickens drop eggs directly onto the grass!
          if (a.type === 'chicken') {
            a.hasProductReady = false;
            a.productTimer = a.def.productInterval;
            this.droppedProducts.push({
              id: 'egg',
              name: 'بيض طازج',
              icon: '🥚',
              price: 30,
              xp: 25,
              x: a.x + (Math.random() - 0.5) * 16,
              y: a.y + (Math.random() - 0.5) * 12
            });
            sounds.animal('chicken');
          }
        }
      }

      // Grazing & Wandering AI
      a.grazeTimer += dt;
      a.moveTimer -= dt;
      if (a.moveTimer <= 0) {
        a.moveTimer = 3 + Math.random() * 4;
        const b = a.bounds;
        const targetC = b.minC + Math.random() * (b.maxC - b.minC);
        const targetR = b.minR + Math.random() * (b.maxR - b.minR);
        a.targetX = targetC * TILE_SIZE + TILE_SIZE / 2;
        a.targetY = targetR * TILE_SIZE + TILE_SIZE / 2;
        a.direction = a.targetX > a.x ? 1 : -1;
      }

      // Smooth interpolation
      const dx = a.targetX - a.x;
      const dy = a.targetY - a.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 3) {
        const speed = a.type === 'chicken' ? 22 : (a.type === 'horse' ? 38 : 18);
        a.x += (dx / dist) * speed * dt;
        a.y += (dy / dist) * speed * dt;
      }
    }
  }

  render(ctx, timeElapsed = 0) {
    // 1. Dropped Products on Grass (Fresh Eggs)
    for (const p of this.droppedProducts) {
      const bounce = Math.sin(timeElapsed * 4 + p.x) * 2;
      ctx.save();
      // Drop Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.beginPath();
      ctx.ellipse(p.x, p.y + 4, 8, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Egg
      ctx.fillStyle = '#fffdf0';
      ctx.beginPath();
      ctx.ellipse(p.x, p.y - 4 + bounce, 7, 9, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    // 2. Animals
    for (const a of this.animals) {
      if (a.type === 'horse' && this.isRidingHorse) continue;

      ctx.save();
      ctx.translate(a.x, a.y);
      if (a.direction === -1) {
        ctx.scale(-1, 1);
      }

      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
      ctx.beginPath();
      const sRadius = a.type === 'chicken' ? 10 : (a.type === 'cow' ? 24 : 20);
      ctx.ellipse(0, 4, sRadius, sRadius * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Get high-res crisp sprite from PixelArtSystem
      let sprite = null;
      if (a.type === 'cow') sprite = pixelArt.get('cow');
      else if (a.type === 'sheep') sprite = pixelArt.get('sheep');
      else if (a.type === 'horse') sprite = pixelArt.get('horse');
      else if (a.type === 'pig') sprite = pixelArt.get('pig');
      else if (a.type === 'chicken') {
        if (a.variant === 'rooster') sprite = pixelArt.get('rooster');
        else if (a.variant === 'chick') sprite = pixelArt.get('chick');
        else sprite = pixelArt.get('hen');
      }

      // Grazing bob
      const grazeBob = Math.sin(timeElapsed * 3 + a.x) * 1.5;

      if (sprite) {
        const w = sprite.width;
        const h = sprite.height;
        ctx.drawImage(sprite, -w / 2, -h + 6 + grazeBob, w, h);
      }

      // Product Ready Bubble (Milk, Wool, Truffle)
      if (a.hasProductReady) {
        const bounce = Math.sin(timeElapsed * 5) * 3;
        ctx.save();
        ctx.scale(a.direction === -1 ? -1 : 1, 1);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.beginPath();
        ctx.roundRect(-15, -50 + bounce, 30, 22, 6);
        ctx.fill();
        ctx.strokeStyle = '#ffd166';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.font = '15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(a.def.productIcon, 0, -34 + bounce);
        ctx.restore();
      }

      ctx.restore();
    }
  }
}
