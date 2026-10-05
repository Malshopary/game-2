// Crops Manager: Planting, Multi-Stage Growth, and Harvesting with Confetti & Pixel Art
import { TILE_SIZE, CROPS } from './Constants.js';
import { TILE_TYPES } from './TileMap.js';
import { pixelArt } from './PixelArtSystem.js';
import confetti from 'canvas-confetti';

export class CropsManager {
  constructor(tileMap, particleSystem) {
    this.tileMap = tileMap;
    this.particles = particleSystem;
    this.crops = {}; // key: "c,r" -> Crop Object

    this.initDefaultFields();
  }

  initDefaultFields() {
    // 1. Left Field: Pre-grown Mature Crops Ready for Immediate Harvest! (Cols 2-7, Rows 13-22)
    for (let r = 13; r <= 22; r++) {
      for (let c = 2; c <= 3; c++) {
        this.plantInstantly(c, r, 'carrot', true);
      }
      for (let c = 4; c <= 5; c++) {
        this.plantInstantly(c, r, 'corn', true);
      }
      for (let c = 6; c <= 7; c++) {
        this.plantInstantly(c, r, 'strawberry', true);
      }
    }

    // 2. Middle Field (Cols 9-14, Rows 13-18):
    // Pre-tilled and empty so the player can immediately plant seeds or till more!
  }

  plantInstantly(col, row, type, isMature = true) {
    const key = `${col},${row}`;
    const cropDef = CROPS[type];
    if (!cropDef) return;

    this.crops[key] = {
      col,
      row,
      type,
      def: cropDef,
      progress: isMature ? 1.0 : 0,
      growthTime: cropDef.growthTime,
      stage: isMature ? 4 : 0,
      isMature,
      swayOffset: Math.random() * Math.PI * 2
    };
  }

  plant(col, row, cropType) {
    const key = `${col},${row}`;
    const tile = this.tileMap.getTile(col, row);

    // Can plant on tilled or watered soil
    if ((tile === TILE_TYPES.TILLED || tile === TILE_TYPES.WATERED) && !this.crops[key]) {
      const cropDef = CROPS[cropType];
      if (!cropDef) return false;

      this.crops[key] = {
        col,
        row,
        type: cropType,
        def: cropDef,
        progress: 0,
        growthTime: cropDef.growthTime,
        stage: 0,
        isMature: false,
        swayOffset: Math.random() * Math.PI * 2
      };

      this.particles.addDirtBurst(col * TILE_SIZE + TILE_SIZE / 2, row * TILE_SIZE + TILE_SIZE / 2);
      this.particles.addFloatingText(`زرعت ${cropDef.name}! 🌱`, col * TILE_SIZE + 24, row * TILE_SIZE, '#6ee7b7', 16);
      return true;
    }
    return false;
  }

  harvest(col, row) {
    const key = `${col},${row}`;
    const crop = this.crops[key];
    if (crop && crop.isMature) {
      delete this.crops[key];
      const cx = col * TILE_SIZE + TILE_SIZE / 2;
      const cy = row * TILE_SIZE + TILE_SIZE / 2;

      this.particles.addHarvestBurst(cx, cy, crop.def.color);
      this.particles.addFloatingText(`+1 ${crop.def.icon} ${crop.def.name}!`, cx, cy - 15, crop.def.color, 18);

      // Trigger colorful canvas confetti!
      try {
        confetti({
          particleCount: 28,
          spread: 65,
          origin: { x: 0.5, y: 0.6 }
        });
      } catch (e) {}

      return {
        type: crop.type,
        def: crop.def,
        xp: crop.def.xp,
        price: crop.def.sellPrice
      };
    }
    return null;
  }

  getCrop(col, row) {
    return this.crops[`${col},${row}`] || null;
  }

  update(dt, isRaining = false) {
    for (const key of Object.keys(this.crops)) {
      const crop = this.crops[key];
      if (crop.isMature) continue;

      const tile = this.tileMap.getTile(crop.col, crop.row);
      const isWatered = tile === TILE_TYPES.WATERED || isRaining;

      if (isWatered) {
        // Grow faster when soil is properly watered
        crop.progress += dt / crop.growthTime;
        if (crop.progress >= 1.0) {
          crop.progress = 1.0;
          crop.isMature = true;
          crop.stage = 4;
          this.particles.addSparkle(
            crop.col * TILE_SIZE + TILE_SIZE / 2,
            crop.row * TILE_SIZE + TILE_SIZE / 2,
            '#ffd166'
          );
        } else {
          crop.stage = Math.min(3, Math.floor(crop.progress * 4));
        }
      }
    }
  }

  render(ctx, timeElapsed = 0) {
    for (const key of Object.keys(this.crops)) {
      const crop = this.crops[key];
      const cx = crop.col * TILE_SIZE + TILE_SIZE / 2;
      const cy = crop.row * TILE_SIZE + TILE_SIZE / 2;
      const windSway = Math.sin(timeElapsed * 2.8 + crop.swayOffset) * 1.5;

      ctx.save();

      // Retrieve procedural pixel-art crop stage sprite
      const cropSprites = pixelArt.sprites.crops ? pixelArt.sprites.crops[crop.type] : null;
      const stageSprite = cropSprites ? cropSprites[crop.stage || 0] : null;

      if (stageSprite) {
        const sw = 36;
        const sh = 44;
        ctx.drawImage(stageSprite, cx - sw / 2 + windSway, cy - sh / 2 + 2, sw, sh);
      }

      // Sparkle halo on ripe crops
      if (crop.isMature) {
        const sparkle = Math.sin(timeElapsed * 5 + crop.swayOffset);
        if (sparkle > 0.25) {
          ctx.fillStyle = '#fde047';
          const sx = cx + windSway + Math.cos(crop.swayOffset * 3) * 10;
          const sy = cy - 10 + Math.sin(crop.swayOffset * 2) * 8;
          ctx.beginPath();
          ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    }
  }
}
