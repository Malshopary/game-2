// Farmer Character matching the Stardew Valley Red-Haired Farmer in the screenshot
import { TILE_SIZE } from './Constants.js';
import { pixelArt } from './PixelArtSystem.js';

export class Farmer {
  constructor(tileMap, startCol = 11, startRow = 11) {
    this.tileMap = tileMap;
    this.x = startCol * TILE_SIZE + TILE_SIZE / 2;
    this.y = startRow * TILE_SIZE + TILE_SIZE / 2;
    this.baseSpeed = 150;
    this.speedMultiplier = 1.0;
    this.facing = 'down'; // 'down', 'up', 'left', 'right'
    this.isMoving = false;
    this.walkTimer = 0;
    this.walkCycle = 0;

    // Action animation state
    this.isActing = false;
    this.actionTimer = 0;
    this.actionDuration = 0.28;
    this.currentTool = 'water';

    // Click to move target
    this.moveTarget = null;
  }

  setSpeedMultiplier(m) {
    this.speedMultiplier = m;
  }

  getSpeed() {
    return this.baseSpeed * this.speedMultiplier;
  }

  getTargetTile() {
    const col = Math.floor(this.x / TILE_SIZE);
    const row = Math.floor(this.y / TILE_SIZE);

    if (this.facing === 'down') return { col, row: row + 1 };
    if (this.facing === 'up') return { col, row: row - 1 };
    if (this.facing === 'left') return { col: col - 1, row };
    if (this.facing === 'right') return { col: col + 1, row };

    return { col, row };
  }

  setMoveTarget(worldX, worldY) {
    this.moveTarget = { x: worldX, y: worldY };
  }

  triggerAction(toolId) {
    if (this.isActing) return;
    this.currentTool = toolId;
    this.isActing = true;
    this.actionTimer = this.actionDuration;
  }

  update(dt, input) {
    // 1. Tool action animation
    if (this.isActing) {
      this.actionTimer -= dt;
      if (this.actionTimer <= 0) {
        this.isActing = false;
      }
      return;
    }

    let dx = 0;
    let dy = 0;

    // 2. Keyboard Input
    if (input.keys['ArrowUp'] || input.keys['KeyW']) dy -= 1;
    if (input.keys['ArrowDown'] || input.keys['KeyS']) dy += 1;
    if (input.keys['ArrowLeft'] || input.keys['KeyA']) dx -= 1;
    if (input.keys['ArrowRight'] || input.keys['KeyD']) dx += 1;

    // 3. Mouse click-to-move
    if (dx === 0 && dy === 0 && this.moveTarget) {
      const dist = Math.hypot(this.moveTarget.x - this.x, this.moveTarget.y - this.y);
      if (dist > 6) {
        dx = (this.moveTarget.x - this.x) / dist;
        dy = (this.moveTarget.y - this.y) / dist;
      } else {
        this.moveTarget = null;
      }
    } else if (dx !== 0 || dy !== 0) {
      this.moveTarget = null;
    }

    this.isMoving = dx !== 0 || dy !== 0;

    if (this.isMoving) {
      const len = Math.hypot(dx, dy);
      if (len > 0) {
        dx /= len;
        dy /= len;
      }

      if (Math.abs(dx) > Math.abs(dy)) {
        this.facing = dx > 0 ? 'right' : 'left';
      } else {
        this.facing = dy > 0 ? 'down' : 'up';
      }

      const speed = this.getSpeed();
      const nextX = this.x + dx * speed * dt;
      const nextY = this.y + dy * speed * dt;

      const r = 11;
      const checkCol = (x, y) => this.tileMap.isWalkable(Math.floor(x / TILE_SIZE), Math.floor(y / TILE_SIZE));

      if (checkCol(nextX - r, this.y) && checkCol(nextX + r, this.y)) {
        this.x = nextX;
      }
      if (checkCol(this.x, nextY - r) && checkCol(this.x, nextY + r)) {
        this.y = nextY;
      }

      this.walkTimer += dt * 10 * this.speedMultiplier;
      this.walkCycle = Math.sin(this.walkTimer);
    } else {
      this.walkCycle = 0;
    }
  }

  render(ctx, timeElapsed = 0, isRidingHorse = false) {
    ctx.save();
    ctx.translate(this.x, this.y);

    if (isRidingHorse) {
      // 1. Draw Galloping Horse underneath the player
      const horseSprite = pixelArt.get('horse');
      if (horseSprite) {
        ctx.save();
        if (this.facing === 'left') {
          ctx.scale(-1, 1);
        }
        const gallopBob = Math.sin(timeElapsed * 12) * 2;
        ctx.drawImage(horseSprite, -36, -26 + gallopBob, 72, 54);
        ctx.restore();
      }
      // Offset farmer to sit directly in the saddle
      ctx.translate(0, -18);
    }

    // Drop Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
    ctx.beginPath();
    ctx.ellipse(0, 10, 14, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    const bob = Math.abs(this.walkCycle) * 3;
    const actionProgress = this.isActing ? (1 - this.actionTimer / this.actionDuration) : 0;
    const toolSwing = Math.sin(actionProgress * Math.PI) * 35;

    // 1. Boots (Sturdy brown leather)
    ctx.fillStyle = '#6f421c';
    const legOffset = this.walkCycle * 6;
    if (this.facing === 'left' || this.facing === 'right') {
      ctx.fillRect(-6 + legOffset, 4, 5, 8);
      ctx.fillRect(2 - legOffset, 4, 5, 8);
    } else {
      ctx.fillRect(-7, 4 + legOffset, 5, 8);
      ctx.fillRect(2, 4 - legOffset, 5, 8);
    }

    // 2. Forest Green Overalls / Dungarees (matching screenshot)
    ctx.fillStyle = '#2d6a4f';
    ctx.beginPath();
    ctx.roundRect(-8, -10 - bob, 16, 16, 4);
    ctx.fill();
    ctx.strokeStyle = '#1b4332';
    ctx.lineWidth = 1;
    ctx.stroke();

    // White rolled shirt underneath
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-7, -14 - bob, 14, 5);

    // Brass buttons on straps
    ctx.fillStyle = '#ffd166';
    ctx.beginPath();
    ctx.arc(-4, -7 - bob, 1.5, 0, Math.PI * 2);
    ctx.arc(4, -7 - bob, 1.5, 0, Math.PI * 2);
    ctx.fill();

    // 3. Vibrant Red Hair (falling down shoulders)
    ctx.fillStyle = '#c1121f';
    // Back hair
    ctx.beginPath();
    ctx.ellipse(0, -16 - bob, 10, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    // Ponytail / side hair locks
    ctx.fillRect(-8, -14 - bob, 4, 10);
    ctx.fillRect(4, -14 - bob, 4, 10);

    // 4. Face & Skin Tone
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(0, -18 - bob, 7, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    if (this.facing !== 'up') {
      ctx.fillStyle = '#1e293b';
      const eyeX = this.facing === 'left' ? -3 : (this.facing === 'right' ? 3 : 0);
      ctx.beginPath();
      ctx.arc(-2.5 + eyeX, -19 - bob, 1.3, 0, Math.PI * 2);
      ctx.arc(2.5 + eyeX, -19 - bob, 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Cheerful blush
      ctx.fillStyle = 'rgba(244, 63, 94, 0.4)';
      ctx.beginPath();
      ctx.arc(-4 + eyeX, -17 - bob, 1.8, 0, Math.PI * 2);
      ctx.arc(4 + eyeX, -17 - bob, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Front hair bangs
    ctx.fillStyle = '#c1121f';
    ctx.beginPath();
    ctx.arc(0, -21 - bob, 6, 0, Math.PI);
    ctx.fill();

    // 5. Straw Hat (Yellow straw with reddish band)
    ctx.fillStyle = '#eab308';
    ctx.beginPath();
    ctx.ellipse(0, -23 - bob, 15, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Hat Crown
    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    ctx.ellipse(0, -26 - bob, 9, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Red hat band
    ctx.fillStyle = '#b91c1c';
    ctx.fillRect(-8, -25 - bob, 16, 2.5);

    // 6. Tools in Hand & Watering Animation
    if (this.isActing) {
      ctx.save();
      const handX = this.facing === 'left' ? -10 : 10;
      const handY = -6 - bob;
      ctx.translate(handX, handY);
      ctx.rotate((this.facing === 'left' ? -1 : 1) * (toolSwing * Math.PI / 180));

      if (this.currentTool === 'water') {
        // Galvanized blue watering can
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.roundRect(-4, -6, 14, 12, 3);
        ctx.fill();
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Spout
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(20, 8);
        ctx.stroke();

        // Water Spray Droplet Arc (matching screenshot!)
        ctx.fillStyle = '#38bdf8';
        for (let i = 0; i < 5; i++) {
          const dropX = 22 + i * 5 + Math.random() * 4;
          const dropY = 6 + i * 4 + Math.random() * 4;
          ctx.beginPath();
          ctx.arc(dropX, dropY, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (this.currentTool === 'axe') {
        // Woodcutting Axe
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-4, -14);
        ctx.lineTo(8, 12);
        ctx.stroke();
        // Steel axe blade
        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.moveTo(6, 6);
        ctx.lineTo(16, 10);
        ctx.lineTo(14, 18);
        ctx.lineTo(6, 12);
        ctx.closePath();
        ctx.fill();
      } else if (this.currentTool === 'pickaxe') {
        // Pickaxe
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-4, -14);
        ctx.lineTo(8, 12);
        ctx.stroke();
        // Pickaxe curved head
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(6, 12, 10, -0.6, 0.8);
        ctx.stroke();
      } else if (this.currentTool === 'hoe') {
        // Hoe
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(8, 12);
        ctx.stroke();
        ctx.fillStyle = '#64748b';
        ctx.fillRect(6, 10, 9, 5);
      } else if (this.currentTool === 'rod') {
        // Fishing Rod line
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(24, -20);
        ctx.stroke();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(24, -20);
        ctx.lineTo(40, 16);
        ctx.stroke();
      } else if (this.currentTool === 'sword') {
        // Steel sword
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(18, -18);
        ctx.stroke();
      }
      ctx.restore();
    }

    ctx.restore();
  }
}
