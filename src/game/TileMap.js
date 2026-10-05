// Expansive Stardew Valley Farm: 44x30 Map, Dedicated Animal Zones, Infinite Scenic Meadow
import { TILE_SIZE, MAP_COLS, MAP_ROWS } from './Constants.js';
import { pixelArt } from './PixelArtSystem.js';

export const TILE_TYPES = {
  GRASS: 0,
  TILLED: 1,
  WATERED: 2,
  WATER: 3,
  DIRT_PATH: 4,
  FENCE: 5,
  BUILDING: 6,
  DOCK: 7,
  MUD: 8
};

export class TileMap {
  constructor() {
    this.cols = MAP_COLS;
    this.rows = MAP_ROWS;
    this.tiles = [];
    this.trees = [];
    this.flowers = [];

    this.initMap();
  }

  initMap() {
    this.tiles = Array(this.rows).fill(null).map(() => Array(this.cols).fill(TILE_TYPES.GRASS));

    // 1. Main Dirt Highways & Connecting Paths
    // North-South Highway
    for (let r = 0; r < this.rows; r++) {
      this.tiles[r][15] = TILE_TYPES.DIRT_PATH;
      this.tiles[r][16] = TILE_TYPES.DIRT_PATH;
    }
    // East-West Crossroads
    for (let c = 0; c < this.cols; c++) {
      this.tiles[9][c] = TILE_TYPES.DIRT_PATH;
      this.tiles[10][c] = TILE_TYPES.DIRT_PATH;
    }
    // Farmhouse front porch walkway
    for (let c = 2; c <= 15; c++) {
      this.tiles[6][c] = TILE_TYPES.DIRT_PATH;
    }

    // 2. Farmhouse Footprint (Cols 2-7, Rows 1-5)
    for (let r = 1; r <= 5; r++) {
      for (let c = 2; c <= 7; c++) {
        this.tiles[r][c] = TILE_TYPES.BUILDING;
      }
    }

    // 3. Windmill Footprint (Cols 9-12, Rows 1-5)
    for (let r = 1; r <= 5; r++) {
      for (let c = 9; c <= 12; c++) {
        this.tiles[r][c] = TILE_TYPES.BUILDING;
      }
    }

    // 4. Crop Fields (Southwest):
    // Left Mature Crop Field (Cols 2-7, Rows 13-22)
    for (let r = 13; r <= 22; r++) {
      for (let c = 2; c <= 7; c++) {
        this.tiles[r][c] = TILE_TYPES.WATERED;
      }
    }

    // Middle Open Fertile Field - EMPTY TILLED SOIL READY FOR PLAYER! (Cols 9-14, Rows 13-18)
    for (let r = 13; r <= 18; r++) {
      for (let c = 9; c <= 14; c++) {
        this.tiles[r][c] = TILE_TYPES.TILLED;
      }
    }

    // 5. ANIMAL FARM 1: Chicken Coop Yard (Cols 17-25, Rows 1-8)
    for (let c = 17; c <= 25; c++) {
      this.tiles[1][c] = TILE_TYPES.FENCE;
      this.tiles[8][c] = TILE_TYPES.FENCE;
    }
    for (let r = 1; r <= 8; r++) {
      this.tiles[r][17] = TILE_TYPES.FENCE;
      this.tiles[r][25] = TILE_TYPES.FENCE;
    }
    this.tiles[8][21] = TILE_TYPES.DIRT_PATH; // Chicken gate
    // Coop building footprint (Cols 18-21, Rows 2-4)
    for (let r = 2; r <= 4; r++) {
      for (let c = 18; c <= 21; c++) {
        this.tiles[r][c] = TILE_TYPES.BUILDING;
      }
    }

    // 6. ANIMAL FARM 2: Dairy Cow Pasture & Barn (Cols 27-37, Rows 1-8)
    for (let c = 27; c <= 37; c++) {
      this.tiles[1][c] = TILE_TYPES.FENCE;
      this.tiles[8][c] = TILE_TYPES.FENCE;
    }
    for (let r = 1; r <= 8; r++) {
      this.tiles[r][27] = TILE_TYPES.FENCE;
      this.tiles[r][37] = TILE_TYPES.FENCE;
    }
    this.tiles[8][32] = TILE_TYPES.DIRT_PATH; // Barn pasture gate
    // Barn building footprint (Cols 28-32, Rows 2-4)
    for (let r = 2; r <= 4; r++) {
      for (let c = 28; c <= 32; c++) {
        this.tiles[r][c] = TILE_TYPES.BUILDING;
      }
    }

    // 7. ANIMAL FARM 3: Sheep Meadow (Cols 17-26, Rows 12-19)
    for (let c = 17; c <= 26; c++) {
      this.tiles[12][c] = TILE_TYPES.FENCE;
      this.tiles[19][c] = TILE_TYPES.FENCE;
    }
    for (let r = 12; r <= 19; r++) {
      this.tiles[r][17] = TILE_TYPES.FENCE;
      this.tiles[r][26] = TILE_TYPES.FENCE;
    }
    this.tiles[12][21] = TILE_TYPES.DIRT_PATH; // Sheep meadow gate

    // 8. ANIMAL FARM 4: Horse Stable & Paddock (Cols 28-37, Rows 12-19)
    for (let c = 28; c <= 37; c++) {
      this.tiles[12][c] = TILE_TYPES.FENCE;
      this.tiles[19][c] = TILE_TYPES.FENCE;
    }
    for (let r = 12; r <= 19; r++) {
      this.tiles[r][28] = TILE_TYPES.FENCE;
      this.tiles[r][37] = TILE_TYPES.FENCE;
    }
    this.tiles[12][32] = TILE_TYPES.DIRT_PATH; // Stable paddock gate
    // Stable building footprint (Cols 29-32, Rows 13-15)
    for (let r = 13; r <= 15; r++) {
      for (let c = 29; c <= 32; c++) {
        this.tiles[r][c] = TILE_TYPES.BUILDING;
      }
    }

    // 9. ANIMAL FARM 5: Pig Pen Mud Wallow (Cols 39-43, Rows 12-19)
    for (let c = 39; c <= 43; c++) {
      this.tiles[12][c] = TILE_TYPES.FENCE;
      this.tiles[19][c] = TILE_TYPES.FENCE;
    }
    for (let r = 12; r <= 19; r++) {
      this.tiles[r][39] = TILE_TYPES.FENCE;
      this.tiles[r][43] = TILE_TYPES.FENCE;
    }
    this.tiles[12][41] = TILE_TYPES.DIRT_PATH; // Pig pen gate
    // Mud wallow in pig pen
    for (let r = 14; r <= 18; r++) {
      for (let c = 40; c <= 42; c++) {
        this.tiles[r][c] = TILE_TYPES.MUD;
      }
    }

    // 10. Large Serene Fishing Lake & Wooden Dock (Cols 20-36, Rows 23-28)
    for (let r = 23; r <= 28; r++) {
      for (let c = 20; c <= 36; c++) {
        this.tiles[r][c] = TILE_TYPES.WATER;
      }
    }
    // Wooden fishing dock extending into the lake
    for (let c = 30; c <= 34; c++) {
      this.tiles[24][c] = TILE_TYPES.DOCK;
    }

    // 11. Orchard & Perimeter Trees
    this.trees = [];
    // Apple Orchard trees in northwest garden
    this.trees.push({ col: 1, row: 1, type: 'apple', health: 4, maxHealth: 4 });
    this.trees.push({ col: 1, row: 4, type: 'apple', health: 4, maxHealth: 4 });
    this.trees.push({ col: 1, row: 7, type: 'apple', health: 4, maxHealth: 4 });
    this.trees.push({ col: 8, row: 7, type: 'apple', health: 4, maxHealth: 4 });
    this.trees.push({ col: 13, row: 7, type: 'apple', health: 4, maxHealth: 4 });

    // Decorative Pines
    this.trees.push({ col: 26, row: 1, type: 'pine', health: 3, maxHealth: 3 });
    this.trees.push({ col: 38, row: 1, type: 'pine', health: 3, maxHealth: 3 });
    this.trees.push({ col: 1, row: 11, type: 'pine', health: 3, maxHealth: 3 });
    this.trees.push({ col: 1, row: 24, type: 'pine', health: 3, maxHealth: 3 });
    this.trees.push({ col: 38, row: 21, type: 'pine', health: 3, maxHealth: 3 });

    // Wildflowers scattered across grassy pastures
    this.flowers = [];
    const colors = ['#f43f5e', '#fbbf24', '#38bdf8', '#c084fc', '#ffffff'];
    for (let i = 0; i < 45; i++) {
      this.flowers.push({
        x: Math.random() * (this.cols * TILE_SIZE),
        y: Math.random() * (this.rows * TILE_SIZE),
        color: colors[i % colors.length],
        size: 2.5 + Math.random() * 2
      });
    }
  }

  isInBounds(col, row) {
    return col >= 0 && col < this.cols && row >= 0 && row < this.rows;
  }

  getTile(col, row) {
    if (!this.isInBounds(col, row)) return TILE_TYPES.GRASS;
    return this.tiles[row][col];
  }

  setTile(col, row, type) {
    if (this.isInBounds(col, row)) {
      this.tiles[row][col] = type;
    }
  }

  isWalkable(col, row) {
    if (!this.isInBounds(col, row)) return true; // Can walk on outer scenic meadow
    const tile = this.tiles[row][col];
    if (tile === TILE_TYPES.WATER || tile === TILE_TYPES.FENCE || tile === TILE_TYPES.BUILDING) {
      return false;
    }
    for (const tree of this.trees) {
      if (tree.col === col && tree.row === row && tree.health > 0) {
        return false;
      }
    }
    return true;
  }

  till(col, row) {
    if (!this.isInBounds(col, row)) return false;
    if (this.tiles[row][col] === TILE_TYPES.GRASS) {
      this.tiles[row][col] = TILE_TYPES.TILLED;
      return true;
    }
    return false;
  }

  water(col, row) {
    if (!this.isInBounds(col, row)) return false;
    if (this.tiles[row][col] === TILE_TYPES.TILLED) {
      this.tiles[row][col] = TILE_TYPES.WATERED;
      return true;
    }
    return false;
  }

  waterAll() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.tiles[r][c] === TILE_TYPES.TILLED) {
          this.tiles[r][c] = TILE_TYPES.WATERED;
        }
      }
    }
  }

  dryOvernight() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.tiles[r][c] === TILE_TYPES.WATERED) {
          this.tiles[r][c] = TILE_TYPES.TILLED;
        }
      }
    }
  }

  // Renders the entire visible screen area seamlessly - ZERO black voids!
  render(ctx, timeElapsed = 0, camera = { x: 0, y: 0 }, viewW = 1920, viewH = 1080) {
    const camX = Number.isFinite(camera.x) ? camera.x : 0;
    const camY = Number.isFinite(camera.y) ? camera.y : 0;
    const vW = Number.isFinite(viewW) && viewW > 0 ? viewW : 1920;
    const vH = Number.isFinite(viewH) && viewH > 0 ? viewH : 1080;

    const startCol = Math.max(-12, Math.floor(camX / TILE_SIZE) - 2);
    const endCol = Math.min(this.cols + 12, Math.ceil((camX + vW) / TILE_SIZE) + 2);
    const startRow = Math.max(-12, Math.floor(camY / TILE_SIZE) - 2);
    const endRow = Math.min(this.rows + 12, Math.ceil((camY + vH) / TILE_SIZE) + 2);

    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        const x = c * TILE_SIZE;
        const y = r * TILE_SIZE;
        const inside = this.isInBounds(c, r);
        const tile = inside ? this.tiles[r][c] : TILE_TYPES.GRASS;

        // 1. Lush Green Grass (Rich multi-tone checker pattern)
        const isChecker = Math.abs(c + r) % 2 === 0;
        ctx.fillStyle = isChecker ? '#65b836' : '#5ba82f';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

        // Subtle grass blade tufts
        if ((Math.abs(c * 7 + r * 13) % 5 === 0) && tile === TILE_TYPES.GRASS) {
          ctx.fillStyle = '#78c843';
          ctx.fillRect(x + 12, y + 16, 2, 6);
          ctx.fillRect(x + 15, y + 14, 2, 8);
          ctx.fillRect(x + 28, y + 32, 2, 6);
        }

        // 2. Specific Farm Tiles
        if (tile === TILE_TYPES.DIRT_PATH) {
          // Warm earthy dirt path
          ctx.fillStyle = '#dfa552';
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = '#c88c39';
          ctx.fillRect(x + 6, y + 10, 5, 3);
          ctx.fillRect(x + 24, y + 26, 6, 3);
          ctx.fillStyle = '#eed09d';
          ctx.fillRect(x + 18, y + 8, 3, 2);
        } else if (tile === TILE_TYPES.MUD) {
          // Rich mud wallow for truffle pigs
          ctx.fillStyle = '#6b4226';
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = '#54321b';
          ctx.beginPath();
          ctx.arc(x + 24, y + 24, 18, 0, Math.PI * 2);
          ctx.fill();
        } else if (tile === TILE_TYPES.TILLED) {
          // Rich tilled brown soil furrows
          ctx.fillStyle = '#784315';
          ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
          ctx.strokeStyle = '#572f0c';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(x + 4, y + 14);
          ctx.lineTo(x + TILE_SIZE - 4, y + 14);
          ctx.moveTo(x + 4, y + 26);
          ctx.lineTo(x + TILE_SIZE - 4, y + 26);
          ctx.moveTo(x + 4, y + 38);
          ctx.lineTo(x + TILE_SIZE - 4, y + 38);
          ctx.stroke();
        } else if (tile === TILE_TYPES.WATERED) {
          // Glossy dark chocolate watered soil
          ctx.fillStyle = '#3f1f0a';
          ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
          ctx.strokeStyle = '#271103';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(x + 4, y + 14);
          ctx.lineTo(x + TILE_SIZE - 4, y + 14);
          ctx.moveTo(x + 4, y + 26);
          ctx.lineTo(x + TILE_SIZE - 4, y + 26);
          ctx.moveTo(x + 4, y + 38);
          ctx.lineTo(x + TILE_SIZE - 4, y + 38);
          ctx.stroke();
          // Water sheen reflection
          ctx.fillStyle = 'rgba(190, 230, 255, 0.38)';
          ctx.fillRect(x + 8, y + 18, 9, 3);
          ctx.fillRect(x + 26, y + 30, 11, 3);
        } else if (tile === TILE_TYPES.WATER) {
          // Crystal clear animated water
          const wave = Math.sin(timeElapsed * 2.8 + c * 1.5 + r) * 2.5;
          const grad = ctx.createLinearGradient(x, y, x, y + TILE_SIZE);
          grad.addColorStop(0, '#38bdf8');
          grad.addColorStop(1, '#0284c7');
          ctx.fillStyle = grad;
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);

          // Caustic shimmer
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(x + 24 + wave, y + 24, 12, 0.2, Math.PI - 0.2);
          ctx.stroke();

          // Blooming Water Lily
          if ((c * 7 + r * 11) % 5 === 0) {
            ctx.fillStyle = '#15803d';
            ctx.beginPath();
            ctx.arc(x + 22, y + 22, 10, 0, Math.PI * 1.85);
            ctx.lineTo(x + 22, y + 22);
            ctx.fill();
            ctx.fillStyle = '#f43f5e';
            ctx.beginPath();
            ctx.arc(x + 22, y + 22, 4.5, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (tile === TILE_TYPES.DOCK) {
          // Wooden dock planks
          ctx.fillStyle = '#b45309';
          ctx.fillRect(x, y + 8, TILE_SIZE, 32);
          ctx.strokeStyle = '#78350f';
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y + 8, TILE_SIZE, 32);
          for (let px = x + 10; px < x + TILE_SIZE; px += 11) {
            ctx.beginPath();
            ctx.moveTo(px, y + 8);
            ctx.lineTo(px, y + 40);
            ctx.stroke();
          }
        } else if (tile === TILE_TYPES.FENCE) {
          // Sturdy Wooden Farm Fence (Rails + Posts + Shadows)
          // Shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          ctx.fillRect(x + 4, y + 36, TILE_SIZE, 6);

          // Horizontal Rails
          ctx.fillStyle = '#92400e';
          ctx.fillRect(x, y + 14, TILE_SIZE, 6);
          ctx.fillRect(x, y + 28, TILE_SIZE, 6);

          // Vertical Post
          ctx.fillStyle = '#b45309';
          ctx.fillRect(x + 8, y + 4, 11, 38);
          ctx.strokeStyle = '#78350f';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(x + 8, y + 4, 11, 38);

          // Pointy post cap
          ctx.beginPath();
          ctx.moveTo(x + 8, y + 4);
          ctx.lineTo(x + 13.5, y - 2);
          ctx.lineTo(x + 19, y + 4);
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    // Flowers
    for (const f of this.flowers) {
      ctx.fillStyle = f.color;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  renderTrees(ctx) {
    for (const tree of this.trees) {
      if (tree.health <= 0) continue;

      const tx = tree.col * TILE_SIZE;
      const ty = tree.row * TILE_SIZE;

      if (tree.type === 'apple') {
        const oakSprite = pixelArt.get('appleTree');
        if (oakSprite) {
          ctx.drawImage(oakSprite, tx - 8, ty - 28, 64, 76);
        }
      } else {
        const pineSprite = pixelArt.get('pine');
        if (pineSprite) {
          ctx.drawImage(pineSprite, tx - 4, ty - 28, 56, 76);
        }
      }
    }
  }
}
