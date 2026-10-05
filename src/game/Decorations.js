// Farm Buildings & Pets using Crisp PixelArtSystem Sprites
import { TILE_SIZE } from './Constants.js';
import { pixelArt } from './PixelArtSystem.js';
import { sounds } from './SoundFX.js';

export class Decorations {
  constructor(particleSystem) {
    this.particles = particleSystem;
    this.smokePuffs = [];
    this.smokeTimer = 0;
    this.windmillAngle = 0;

    // Farm Cat on Porch
    this.cat = {
      x: 7.2 * TILE_SIZE,
      y: 4.8 * TILE_SIZE,
      tailWag: 0
    };

    // Farm Dog (Golden Retriever) in yard
    this.dog = {
      x: 10 * TILE_SIZE,
      y: 6.2 * TILE_SIZE,
      tailWag: 0,
      targetX: 10 * TILE_SIZE,
      targetY: 6.2 * TILE_SIZE,
      moveTimer: 2
    };
  }

  update(dt) {
    // Windmill blade rotation
    this.windmillAngle += dt * 1.2;

    // Chimney Smoke from farmhouse
    this.smokeTimer += dt;
    if (this.smokeTimer > 0.35) {
      this.smokeTimer = 0;
      this.smokePuffs.push({
        x: 3.2 * TILE_SIZE,
        y: 0.8 * TILE_SIZE,
        vx: (Math.random() - 0.2) * 12,
        vy: -22 - Math.random() * 10,
        size: 5 + Math.random() * 4,
        alpha: 0.65,
        life: 2.2,
        maxLife: 2.2
      });
    }

    for (let i = this.smokePuffs.length - 1; i >= 0; i--) {
      const s = this.smokePuffs[i];
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.size += dt * 6;
      s.life -= dt;
      s.alpha = Math.max(0, (s.life / s.maxLife) * 0.65);
      if (s.life <= 0) {
        this.smokePuffs.splice(i, 1);
      }
    }

    this.cat.tailWag += dt * 3.5;
    this.dog.tailWag += dt * 6;

    // Dog wandering in front yard
    this.dog.moveTimer -= dt;
    if (this.dog.moveTimer <= 0) {
      this.dog.moveTimer = 2.5 + Math.random() * 3.5;
      this.dog.targetX = (8 + Math.random() * 4) * TILE_SIZE;
      this.dog.targetY = (5.5 + Math.random() * 2) * TILE_SIZE;
    }
    const ddx = this.dog.targetX - this.dog.x;
    const ddy = this.dog.targetY - this.dog.y;
    const ddist = Math.hypot(ddx, ddy);
    if (ddist > 4) {
      this.dog.x += (ddx / ddist) * 35 * dt;
      this.dog.y += (ddy / ddist) * 35 * dt;
    }
  }

  interactPets(playerX, playerY) {
    // Cat
    if (Math.hypot(playerX - this.cat.x, playerY - this.cat.y) < 60) {
      sounds.meow();
      this.particles.addHeart(this.cat.x, this.cat.y - 18);
      this.particles.addFloatingText('مياو! 🐱❤️', this.cat.x, this.cat.y - 25, '#ff85a1', 18);
      return { type: 'cat' };
    }
    // Dog
    if (Math.hypot(playerX - this.dog.x, playerY - this.dog.y) < 60) {
      sounds.animal('dog');
      this.particles.addHeart(this.dog.x, this.dog.y - 18);
      this.particles.addFloatingText('هاو هاو! 🐶❤️', this.dog.x, this.dog.y - 25, '#ffd166', 18);
      return { type: 'dog' };
    }
    return null;
  }

  render(ctx, timeElapsed = 0, isNight = false) {
    // 1. Chimney Smoke
    for (const s of this.smokePuffs) {
      ctx.save();
      ctx.fillStyle = `rgba(235, 235, 245, ${s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 2. Farmhouse (Cols 2-7, Rows 1-4)
    const houseSprite = pixelArt.get('farmhouse');
    if (houseSprite) {
      // Soft building shadow
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(5 * TILE_SIZE, 4.8 * TILE_SIZE, 3 * TILE_SIZE, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.drawImage(houseSprite, 2 * TILE_SIZE, 0.6 * TILE_SIZE, 5.5 * TILE_SIZE, 4.4 * TILE_SIZE);
    }

    // 3. Windmill (Cols 9-11, Rows 1-4) with ROTATING BLADES!
    const wmTower = pixelArt.get('windmillTower');
    const wmBlades = pixelArt.get('windmillBlades');
    if (wmTower) {
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(10.5 * TILE_SIZE, 4.8 * TILE_SIZE, 1.8 * TILE_SIZE, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.drawImage(wmTower, 9 * TILE_SIZE, 0.8 * TILE_SIZE, 3 * TILE_SIZE, 4 * TILE_SIZE);

      if (wmBlades) {
        ctx.save();
        // Pivot point at windmill hub
        const hubX = 10.5 * TILE_SIZE;
        const hubY = 2.0 * TILE_SIZE;
        ctx.translate(hubX, hubY);
        ctx.rotate(this.windmillAngle);
        ctx.drawImage(wmBlades, -1.8 * TILE_SIZE, -1.8 * TILE_SIZE, 3.6 * TILE_SIZE, 3.6 * TILE_SIZE);
        ctx.restore();
      }
    }

    // 4. Chicken Coop Building (Cols 17-20, Rows 2-4)
    const coopSprite = pixelArt.get('coop');
    if (coopSprite) {
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(19 * TILE_SIZE, 4.8 * TILE_SIZE, 2.2 * TILE_SIZE, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.drawImage(coopSprite, 16.8 * TILE_SIZE, 1.4 * TILE_SIZE, 4.2 * TILE_SIZE, 3.5 * TILE_SIZE);
    }

    // 5. Red Dairy Barn (Cols 27-31, Rows 2-4)
    const barnSprite = pixelArt.get('barn');
    if (barnSprite) {
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(29.5 * TILE_SIZE, 4.9 * TILE_SIZE, 2.8 * TILE_SIZE, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.drawImage(barnSprite, 26.5 * TILE_SIZE, 1.0 * TILE_SIZE, 5.5 * TILE_SIZE, 4.2 * TILE_SIZE);
    }

    // 6. Horse Stable Building (Cols 27-30, Rows 12-14)
    const stableSprite = pixelArt.get('stable');
    if (stableSprite) {
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(29 * TILE_SIZE, 14.8 * TILE_SIZE, 2.4 * TILE_SIZE, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.drawImage(stableSprite, 26.8 * TILE_SIZE, 11.4 * TILE_SIZE, 4.4 * TILE_SIZE, 3.5 * TILE_SIZE);
    }

    // 7. Cat on Porch
    const catSprite = pixelArt.get('cat');
    if (catSprite) {
      ctx.drawImage(catSprite, this.cat.x - 16, this.cat.y - 14, 32, 28);
    }

    // 8. Dog in Yard
    const dogSprite = pixelArt.get('dog');
    if (dogSprite) {
      ctx.drawImage(dogSprite, this.dog.x - 22, this.dog.y - 18, 44, 36);
    }
  }
}
