// Particle System for visual punch ("Game Juice")

export class ParticleSystem {
  constructor() {
    this.particles = [];
    this.floatingTexts = [];
    this.rainDrops = [];
    this.fireflies = [];
    this.initFireflies(18);
  }

  initFireflies(count) {
    for (let i = 0; i < count; i++) {
      this.fireflies.push({
        x: Math.random() * 1200,
        y: Math.random() * 900,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseAlpha: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        size: 1.5 + Math.random() * 2
      });
    }
  }

  // Add floating text (+15 🪙, +10 XP, etc.)
  addFloatingText(text, x, y, color = '#ffd700', size = 18) {
    this.floatingTexts.push({
      text,
      x: x + (Math.random() - 0.5) * 10,
      y,
      vy: -1.2,
      alpha: 1.0,
      life: 1.0,
      maxLife: 1.0,
      color,
      size
    });
  }

  // Dirt particles when tilling
  addDirtBurst(x, y) {
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 1.8;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        gravity: 0.12,
        size: 2.5 + Math.random() * 2.5,
        color: Math.random() > 0.5 ? '#7c4f2d' : '#5a361a',
        life: 0.4 + Math.random() * 0.3,
        maxLife: 0.7
      });
    }
  }

  // Water splash particles
  addWaterSplash(x, y) {
    for (let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        gravity: 0.15,
        size: 2 + Math.random() * 2,
        color: '#64b5f6',
        life: 0.35 + Math.random() * 0.25,
        maxLife: 0.6
      });
    }
  }

  // Harvest confetti / sparkles
  addHarvestBurst(x, y, cropColor = '#ffb703') {
    const colors = [cropColor, '#ffffff', '#ffd166', '#06d6a0'];
    for (let i = 0; i < 16; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 2.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.0,
        gravity: 0.14,
        size: 3 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0.6 + Math.random() * 0.4,
        maxLife: 1.0,
        shape: Math.random() > 0.5 ? 'circle' : 'star'
      });
    }
  }

  // Heart particle when petting animals
  addHeart(x, y) {
    this.floatingTexts.push({
      text: '❤️',
      x,
      y,
      vy: -1.0,
      alpha: 1.0,
      life: 0.9,
      maxLife: 0.9,
      color: '#ff4d6d',
      size: 20
    });
  }

  // Update all particles
  update(dt, isRaining, nightAlpha = 0, mapWidth = 1200, mapHeight = 900) {
    // 1. Regular particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.gravity) p.vy += p.gravity;
      p.life -= dt;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // 2. Floating text
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy;
      ft.life -= dt;
      ft.alpha = Math.max(0, ft.life / ft.maxLife);
      if (ft.life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    // 3. Raindrops
    if (isRaining) {
      // Spawn new rain drops
      for (let i = 0; i < 8; i++) {
        this.rainDrops.push({
          x: Math.random() * (mapWidth + 200) - 100,
          y: -20,
          length: 12 + Math.random() * 10,
          speed: 12 + Math.random() * 6,
          targetY: Math.random() * mapHeight
        });
      }
    }

    for (let i = this.rainDrops.length - 1; i >= 0; i--) {
      const r = this.rainDrops[i];
      r.x -= 2;
      r.y += r.speed;
      if (r.y >= r.targetY) {
        // Small splash ripple
        if (Math.random() < 0.25) {
          this.particles.push({
            x: r.x,
            y: r.y,
            vx: 0,
            vy: 0,
            size: 2,
            maxSize: 6,
            isRipple: true,
            color: 'rgba(255, 255, 255, 0.4)',
            life: 0.2,
            maxLife: 0.2
          });
        }
        this.rainDrops.splice(i, 1);
      }
    }

    // 4. Fireflies at night
    if (nightAlpha > 0.15) {
      for (const f of this.fireflies) {
        f.phase += dt * 3;
        f.x += f.vx;
        f.y += f.vy;

        // Wrap around bounds
        if (f.x < 0) f.x = mapWidth;
        if (f.x > mapWidth) f.x = 0;
        if (f.y < 0) f.y = mapHeight;
        if (f.y > mapHeight) f.y = 0;

        // Randomly drift velocity
        if (Math.random() < 0.02) {
          f.vx = (Math.random() - 0.5) * 0.5;
          f.vy = (Math.random() - 0.5) * 0.5;
        }
      }
    }
  }

  // Draw particles in world coordinates
  render(ctx) {
    // 1. Particles
    for (const p of this.particles) {
      const alpha = Math.max(0, p.life / p.maxLife);
      ctx.save();
      ctx.globalAlpha = alpha;
      if (p.isRipple) {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        const radius = p.maxSize * (1 - p.life / p.maxLife);
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, radius, radius * 0.5, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (p.life / p.maxLife), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // 2. Rain
    if (this.rainDrops.length > 0) {
      ctx.save();
      ctx.strokeStyle = 'rgba(190, 225, 255, 0.65)';
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (const r of this.rainDrops) {
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x - 3, r.y + r.length);
      }
      ctx.stroke();
      ctx.restore();
    }

    // 3. Fireflies
    for (const f of this.fireflies) {
      const flicker = Math.sin(f.phase) * 0.3 + 0.7;
      const alpha = f.baseAlpha * flicker;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#fffa65';
      ctx.shadowColor = '#ffeaa7';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 4. Floating texts with crisp drop-shadow
    for (const ft of this.floatingTexts) {
      ctx.save();
      ctx.globalAlpha = ft.alpha;
      ctx.font = `bold ${ft.size}px 'Outfit', 'Cairo', sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = ft.color;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }
}
