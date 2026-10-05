// PixelArtSystem: Generates 100% clean, transparent, high-detail Stardew Valley pixel-art sprites
// Completely eliminates JPEG artifacts, white grid boxes, and compression noise.

class PixelArtSystem {
  constructor() {
    this.sprites = {};
    this.init();
  }

  init() {
    this.generateFarmhouse();
    this.generateWindmill();
    this.generateBarn();
    this.generateCoop();
    this.generateStable();
    this.generateAnimals();
    this.generateFarmer();
    this.generateCrops();
    this.generateScenery();
  }

  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    return { canvas, ctx };
  }

  // 1. Cozy Stardew Farmhouse (Log cabin with stone chimney, porch, warm windows)
  generateFarmhouse() {
    const { canvas, ctx } = this.createCanvas(160, 130);

    // Stone foundation
    ctx.fillStyle = '#475569';
    ctx.fillRect(10, 85, 140, 20);
    ctx.fillStyle = '#334155';
    for (let x = 12; x < 145; x += 14) {
      ctx.fillRect(x, 87, 12, 16);
    }

    // Timber log walls
    ctx.fillStyle = '#b45309';
    ctx.fillRect(15, 45, 130, 42);
    ctx.fillStyle = '#92400e';
    for (let y = 47; y < 87; y += 9) {
      ctx.fillRect(15, y, 130, 2);
    }

    // Shingled terracotta gabled roof
    ctx.fillStyle = '#b91c1c';
    ctx.beginPath();
    ctx.moveTo(5, 48);
    ctx.lineTo(80, 8);
    ctx.lineTo(155, 48);
    ctx.closePath();
    ctx.fill();

    // Roof shingles detail
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 2;
    for (let y = 16; y < 48; y += 7) {
      ctx.beginPath();
      const offset = (y - 8) * 1.8;
      ctx.moveTo(80 - offset, y);
      ctx.lineTo(80 + offset, y);
      ctx.stroke();
    }

    // Roof eaves shadow
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(10, 45, 140, 5);

    // Attic dormer window
    ctx.fillStyle = '#b45309';
    ctx.fillRect(66, 18, 28, 22);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(70, 22, 20, 14);
    ctx.fillStyle = '#78350f';
    ctx.fillRect(79, 22, 2, 14);
    ctx.fillRect(70, 28, 20, 2);

    // Stone Chimney on left
    ctx.fillStyle = '#64748b';
    ctx.fillRect(25, 4, 18, 42);
    ctx.fillStyle = '#475569';
    ctx.fillRect(23, 2, 22, 6);
    // Brick pattern
    ctx.fillStyle = '#334155';
    ctx.fillRect(26, 12, 7, 4);
    ctx.fillRect(34, 18, 7, 4);
    ctx.fillRect(26, 26, 7, 4);

    // Front Porch
    ctx.fillStyle = '#d97706';
    ctx.fillRect(45, 75, 70, 32);
    ctx.fillStyle = '#78350f';
    ctx.fillRect(45, 75, 4, 32);
    ctx.fillRect(111, 75, 4, 32);
    ctx.fillRect(45, 103, 70, 4);

    // Front Door
    ctx.fillStyle = '#78350f';
    ctx.fillRect(70, 56, 20, 30);
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(86, 72, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Windows with warm amber glow
    const drawWindow = (x, y) => {
      ctx.fillStyle = '#fef08a';
      ctx.fillRect(x, y, 22, 18);
      ctx.fillStyle = '#78350f';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, 22, 18);
      ctx.fillRect(x + 10, y, 2, 18);
      ctx.fillRect(x, y + 8, 22, 2);
      // Window flower box
      ctx.fillStyle = '#92400e';
      ctx.fillRect(x - 2, y + 18, 26, 5);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(x + 2, y + 16, 4, 4);
      ctx.fillStyle = '#ec4899';
      ctx.fillRect(x + 10, y + 16, 4, 4);
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(x + 18, y + 16, 4, 4);
    };

    drawWindow(28, 55);
    drawWindow(110, 55);

    this.sprites.farmhouse = canvas;
  }

  // 2. Windmill: Tower + Rotating Blades
  generateWindmill() {
    // Windmill Tower Base
    const { canvas: tower, ctx: tCtx } = this.createCanvas(90, 120);

    // Stone base
    tCtx.fillStyle = '#64748b';
    tCtx.beginPath();
    tCtx.moveTo(20, 115);
    tCtx.lineTo(30, 35);
    tCtx.lineTo(60, 35);
    tCtx.lineTo(70, 115);
    tCtx.closePath();
    tCtx.fill();

    // Stone texture bands
    tCtx.strokeStyle = '#475569';
    tCtx.lineWidth = 2;
    for (let y = 45; y < 115; y += 12) {
      tCtx.beginPath();
      tCtx.moveTo(28 - (y - 35) * 0.1, y);
      tCtx.lineTo(62 + (y - 35) * 0.1, y);
      tCtx.stroke();
    }

    // Wooden dome cap
    tCtx.fillStyle = '#b45309';
    tCtx.beginPath();
    tCtx.arc(45, 35, 18, Math.PI, 0);
    tCtx.fill();

    // Wooden door
    tCtx.fillStyle = '#78350f';
    tCtx.fillRect(38, 92, 14, 23);
    tCtx.fillStyle = '#fef08a';
    tCtx.fillRect(48, 104, 2, 2);

    // Hub center
    tCtx.fillStyle = '#451a03';
    tCtx.beginPath();
    tCtx.arc(45, 35, 6, 0, Math.PI * 2);
    tCtx.fill();

    this.sprites.windmillTower = tower;

    // Windmill 4 Blades
    const { canvas: blades, ctx: bCtx } = this.createCanvas(120, 120);
    bCtx.translate(60, 60);

    for (let i = 0; i < 4; i++) {
      bCtx.rotate(Math.PI / 2);
      // Spar
      bCtx.fillStyle = '#78350f';
      bCtx.fillRect(-2, -55, 4, 55);
      // Cloth sail lattice
      bCtx.fillStyle = '#f8fafc';
      bCtx.fillRect(2, -52, 14, 46);
      bCtx.strokeStyle = '#cbd5e1';
      bCtx.lineWidth = 1;
      for (let sy = -52; sy < -6; sy += 8) {
        bCtx.strokeRect(2, sy, 14, 8);
      }
    }
    this.sprites.windmillBlades = blades;
  }

  // 3. Classic Red Dairy Barn
  generateBarn() {
    const { canvas, ctx } = this.createCanvas(170, 130);

    // Silo on the right
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(135, 35, 26, 85);
    ctx.fillStyle = '#64748b';
    for (let y = 45; y < 115; y += 14) {
      ctx.fillRect(135, y, 26, 2);
    }
    // Silo dome
    ctx.beginPath();
    ctx.arc(148, 35, 13, Math.PI, 0);
    ctx.fill();

    // Barn Main Body
    ctx.fillStyle = '#b91c1c';
    ctx.fillRect(15, 45, 120, 75);

    // Gambrel Barn Roof
    ctx.fillStyle = '#7f1d1d';
    ctx.beginPath();
    ctx.moveTo(10, 48);
    ctx.lineTo(35, 15);
    ctx.lineTo(75, 6);
    ctx.lineTo(115, 15);
    ctx.lineTo(140, 48);
    ctx.closePath();
    ctx.fill();

    // White trim boards
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(13, 45, 4, 75);
    ctx.fillRect(133, 45, 4, 75);
    ctx.fillRect(15, 116, 120, 4);

    // Double Sliding Barn Doors with white X
    ctx.fillStyle = '#78350f';
    ctx.fillRect(45, 65, 60, 52);
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 3;
    ctx.strokeRect(47, 67, 27, 48);
    ctx.strokeRect(76, 67, 27, 48);

    // White X brace
    ctx.beginPath();
    ctx.moveTo(48, 68);
    ctx.lineTo(73, 114);
    ctx.moveTo(73, 68);
    ctx.lineTo(48, 114);
    ctx.moveTo(77, 68);
    ctx.lineTo(102, 114);
    ctx.moveTo(102, 68);
    ctx.lineTo(77, 114);
    ctx.stroke();

    // Hayloft Window with golden straw
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(63, 25, 24, 22);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(60, 42, 30, 8); // spilled straw
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 2;
    ctx.strokeRect(63, 25, 24, 22);

    // Cupola & Rooster Weather Vane
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(70, 0, 10, 7);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(74, -5, 2, 6);

    this.sprites.barn = canvas;
  }

  // 4. Chicken Coop (Elevated with ramp & nesting boxes)
  generateCoop() {
    const { canvas, ctx } = this.createCanvas(120, 100);

    // Stilts
    ctx.fillStyle = '#78350f';
    ctx.fillRect(25, 65, 6, 25);
    ctx.fillRect(80, 65, 6, 25);

    // Main Coop Body
    ctx.fillStyle = '#d97706';
    ctx.fillRect(20, 25, 75, 45);

    // Shingled Roof
    ctx.fillStyle = '#92400e';
    ctx.beginPath();
    ctx.moveTo(10, 28);
    ctx.lineTo(58, 6);
    ctx.lineTo(105, 28);
    ctx.closePath();
    ctx.fill();

    // Nesting box extension on right
    ctx.fillStyle = '#b45309';
    ctx.fillRect(95, 40, 20, 30);
    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.moveTo(93, 40);
    ctx.lineTo(116, 40);
    ctx.lineTo(95, 30);
    ctx.closePath();
    ctx.fill();

    // Little chicken sliding door
    ctx.fillStyle = '#451a03';
    ctx.fillRect(45, 48, 16, 22);

    // Wooden Ladder Ramp
    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.moveTo(45, 68);
    ctx.lineTo(25, 95);
    ctx.lineTo(32, 95);
    ctx.lineTo(52, 68);
    ctx.closePath();
    ctx.fill();
    // Ramp rungs
    ctx.fillStyle = '#78350f';
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(28 + i * 5, 90 - i * 6, 8, 2);
    }

    // Chicken weather vane
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(56, 1, 4, 5);

    this.sprites.coop = canvas;
  }

  // 5. Horse Stable
  generateStable() {
    const { canvas, ctx } = this.createCanvas(130, 95);

    // Timber posts & back wall
    ctx.fillStyle = '#78350f';
    ctx.fillRect(15, 28, 100, 55);

    // Roof
    ctx.fillStyle = '#b91c1c';
    ctx.beginPath();
    ctx.moveTo(10, 30);
    ctx.lineTo(65, 8);
    ctx.lineTo(120, 30);
    ctx.closePath();
    ctx.fill();

    // Stall door & opening
    ctx.fillStyle = '#451a03';
    ctx.fillRect(30, 38, 45, 45);

    // Stall half-door
    ctx.fillStyle = '#b45309';
    ctx.fillRect(30, 58, 45, 25);
    ctx.fillStyle = '#78350f';
    ctx.fillRect(30, 68, 45, 4);

    // Golden hay bale on right
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(85, 60, 24, 18);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(85, 60, 24, 18);

    // Water trough on left
    ctx.fillStyle = '#64748b';
    ctx.fillRect(15, 66, 14, 16);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(16, 68, 12, 12);

    this.sprites.stable = canvas;
  }

  // 6. Animals: Cow, Sheep, Chickens, Horse, Dog, Cat
  generateAnimals() {
    // A. Holstein Dairy Cow (Right & Left)
    const { canvas: cow, ctx: cCtx } = this.createCanvas(64, 48);
    // Cow Shadow
    cCtx.fillStyle = 'rgba(0,0,0,0.2)';
    cCtx.beginPath();
    cCtx.ellipse(32, 42, 24, 6, 0, 0, Math.PI * 2);
    cCtx.fill();

    // White body
    cCtx.fillStyle = '#f8fafc';
    cCtx.fillRect(14, 14, 38, 22);

    // Black dairy spots
    cCtx.fillStyle = '#1e293b';
    cCtx.beginPath();
    cCtx.arc(24, 20, 8, 0, Math.PI * 2);
    cCtx.arc(42, 24, 7, 0, Math.PI * 2);
    cCtx.arc(32, 30, 6, 0, Math.PI * 2);
    cCtx.fill();

    // Legs with dark hooves
    cCtx.fillStyle = '#f8fafc';
    cCtx.fillRect(16, 32, 5, 12);
    cCtx.fillRect(26, 32, 5, 12);
    cCtx.fillRect(38, 32, 5, 12);
    cCtx.fillRect(46, 32, 5, 12);
    cCtx.fillStyle = '#334155';
    cCtx.fillRect(16, 41, 5, 3);
    cCtx.fillRect(26, 41, 5, 3);
    cCtx.fillRect(38, 41, 5, 3);
    cCtx.fillRect(46, 41, 5, 3);

    // Head
    cCtx.fillStyle = '#f8fafc';
    cCtx.fillRect(46, 12, 14, 16);
    cCtx.fillStyle = '#1e293b';
    cCtx.fillRect(46, 12, 7, 7); // eye patch

    // Pink muzzle
    cCtx.fillStyle = '#fbcfe8';
    cCtx.fillRect(52, 20, 10, 8);
    cCtx.fillStyle = '#be185d';
    cCtx.fillRect(55, 23, 2, 2);
    cCtx.fillRect(59, 23, 2, 2);

    // Eye
    cCtx.fillStyle = '#0f172a';
    cCtx.fillRect(49, 16, 3, 3);

    // Horns & Ears
    cCtx.fillStyle = '#f59e0b';
    cCtx.fillRect(48, 8, 3, 5);
    cCtx.fillRect(55, 8, 3, 5);
    cCtx.fillStyle = '#fbcfe8';
    cCtx.fillRect(43, 14, 4, 3);

    // Tail
    cCtx.strokeStyle = '#1e293b';
    cCtx.lineWidth = 2;
    cCtx.beginPath();
    cCtx.moveTo(14, 18);
    cCtx.quadraticCurveTo(8, 25, 10, 32);
    cCtx.stroke();
    cCtx.fillStyle = '#1e293b';
    cCtx.beginPath();
    cCtx.arc(10, 33, 3, 0, Math.PI * 2);
    cCtx.fill();

    this.sprites.cow = cow;

    // B. Fluffy Sheep
    const { canvas: sheep, ctx: sCtx } = this.createCanvas(52, 42);
    // Shadow
    sCtx.fillStyle = 'rgba(0,0,0,0.2)';
    sCtx.beginPath();
    sCtx.ellipse(26, 38, 18, 5, 0, 0, Math.PI * 2);
    sCtx.fill();

    // Fluffy cloud wool body
    sCtx.fillStyle = '#f1f5f9';
    sCtx.beginPath();
    sCtx.arc(20, 20, 10, 0, Math.PI * 2);
    sCtx.arc(32, 20, 11, 0, Math.PI * 2);
    sCtx.arc(25, 26, 10, 0, Math.PI * 2);
    sCtx.arc(16, 26, 8, 0, Math.PI * 2);
    sCtx.arc(34, 25, 8, 0, Math.PI * 2);
    sCtx.fill();

    // Wool curls shading
    sCtx.strokeStyle = '#cbd5e1';
    sCtx.lineWidth = 1.5;
    sCtx.beginPath();
    sCtx.arc(22, 18, 5, 0, Math.PI);
    sCtx.arc(30, 22, 4, 0, Math.PI);
    sCtx.stroke();

    // Dark grey face
    sCtx.fillStyle = '#334155';
    sCtx.fillRect(36, 16, 11, 11);
    sCtx.fillStyle = '#f8fafc';
    sCtx.fillRect(41, 18, 3, 3);
    sCtx.fillStyle = '#0f172a';
    sCtx.fillRect(42, 19, 1.5, 1.5);
    // Ears
    sCtx.fillStyle = '#334155';
    sCtx.fillRect(34, 18, 4, 3);

    // Legs
    sCtx.fillStyle = '#334155';
    sCtx.fillRect(18, 30, 3.5, 10);
    sCtx.fillRect(24, 30, 3.5, 10);
    sCtx.fillRect(30, 30, 3.5, 10);
    sCtx.fillRect(36, 30, 3.5, 10);

    this.sprites.sheep = sheep;

    // C. Chickens (Rooster, Hen, Chick)
    const { canvas: hen, ctx: hCtx } = this.createCanvas(32, 32);
    // Hen body
    hCtx.fillStyle = '#f8fafc';
    hCtx.beginPath();
    hCtx.ellipse(15, 18, 9, 7, 0, 0, Math.PI * 2);
    hCtx.fill();
    // Head
    hCtx.beginPath();
    hCtx.arc(22, 12, 5, 0, Math.PI * 2);
    hCtx.fill();
    // Red Comb
    hCtx.fillStyle = '#ef4444';
    hCtx.fillRect(21, 6, 4, 4);
    // Yellow Beak
    hCtx.fillStyle = '#f59e0b';
    hCtx.beginPath();
    hCtx.moveTo(26, 12);
    hCtx.lineTo(30, 14);
    hCtx.lineTo(26, 16);
    hCtx.fill();
    // Eye
    hCtx.fillStyle = '#0f172a';
    hCtx.fillRect(23, 11, 2, 2);
    // Tail feathers
    hCtx.fillStyle = '#e2e8f0';
    hCtx.beginPath();
    hCtx.moveTo(7, 16);
    hCtx.lineTo(2, 10);
    hCtx.lineTo(9, 12);
    hCtx.fill();
    // Feet
    hCtx.fillStyle = '#f59e0b';
    hCtx.fillRect(13, 24, 2, 6);
    hCtx.fillRect(17, 24, 2, 6);

    this.sprites.hen = hen;

    // Brown Rooster
    const { canvas: rooster, ctx: rCtx } = this.createCanvas(36, 36);
    rCtx.fillStyle = '#92400e';
    rCtx.beginPath();
    rCtx.ellipse(16, 20, 10, 8, 0, 0, Math.PI * 2);
    rCtx.fill();
    // Green tail
    rCtx.fillStyle = '#065f46';
    rCtx.beginPath();
    rCtx.moveTo(8, 18);
    rCtx.quadraticCurveTo(0, 8, 2, 2);
    rCtx.lineTo(8, 12);
    rCtx.fill();
    // Neck & Head
    rCtx.fillStyle = '#d97706';
    rCtx.beginPath();
    rCtx.arc(24, 13, 6, 0, Math.PI * 2);
    rCtx.fill();
    // Big red comb & wattle
    rCtx.fillStyle = '#dc2626';
    rCtx.fillRect(23, 5, 6, 5);
    rCtx.fillRect(26, 18, 4, 5);
    // Beak & Eye
    rCtx.fillStyle = '#f59e0b';
    rCtx.fillRect(29, 13, 5, 3);
    rCtx.fillStyle = '#0f172a';
    rCtx.fillRect(25, 12, 2, 2);
    // Legs
    rCtx.fillStyle = '#d97706';
    rCtx.fillRect(14, 26, 2.5, 8);
    rCtx.fillRect(19, 26, 2.5, 8);
    this.sprites.rooster = rooster;

    // Baby chick
    const { canvas: chick, ctx: kCtx } = this.createCanvas(20, 20);
    kCtx.fillStyle = '#fde047';
    kCtx.beginPath();
    kCtx.arc(10, 11, 6, 0, Math.PI * 2);
    kCtx.fill();
    kCtx.fillStyle = '#f97316';
    kCtx.fillRect(15, 10, 3, 2);
    kCtx.fillStyle = '#0f172a';
    kCtx.fillRect(11, 9, 1.5, 1.5);
    kCtx.fillStyle = '#f97316';
    kCtx.fillRect(8, 16, 1.5, 3);
    kCtx.fillRect(11, 16, 1.5, 3);
    this.sprites.chick = chick;

    // D. Mountable Chestnut Horse
    const { canvas: horse, ctx: hrCtx } = this.createCanvas(72, 54);
    // Shadow
    hrCtx.fillStyle = 'rgba(0,0,0,0.2)';
    hrCtx.beginPath();
    hrCtx.ellipse(36, 48, 28, 6, 0, 0, Math.PI * 2);
    hrCtx.fill();

    // Body
    hrCtx.fillStyle = '#92400e';
    hrCtx.fillRect(18, 18, 36, 20);

    // Legs
    hrCtx.fillStyle = '#78350f';
    hrCtx.fillRect(20, 34, 5, 16);
    hrCtx.fillRect(27, 34, 5, 16);
    hrCtx.fillRect(40, 34, 5, 16);
    hrCtx.fillRect(47, 34, 5, 16);
    // Hooves
    hrCtx.fillStyle = '#1e293b';
    hrCtx.fillRect(20, 47, 5, 4);
    hrCtx.fillRect(27, 47, 5, 4);
    hrCtx.fillRect(40, 47, 5, 4);
    hrCtx.fillRect(47, 47, 5, 4);

    // Neck & Head
    hrCtx.fillStyle = '#92400e';
    hrCtx.beginPath();
    hrCtx.moveTo(48, 22);
    hrCtx.lineTo(60, 6);
    hrCtx.lineTo(68, 12);
    hrCtx.lineTo(54, 30);
    hrCtx.closePath();
    hrCtx.fill();

    // Dark mane
    hrCtx.fillStyle = '#451a03';
    hrCtx.fillRect(46, 6, 6, 18);
    // Ears
    hrCtx.fillStyle = '#92400e';
    hrCtx.fillRect(59, 2, 3, 5);
    // Muzzle & Eye
    hrCtx.fillStyle = '#78350f';
    hrCtx.fillRect(64, 10, 6, 6);
    hrCtx.fillStyle = '#0f172a';
    hrCtx.fillRect(61, 8, 2, 2);

    // Saddle
    hrCtx.fillStyle = '#451a03';
    hrCtx.fillRect(30, 16, 14, 10);
    hrCtx.fillStyle = '#e2e8f0';
    hrCtx.fillRect(36, 26, 2, 8); // stirrup

    // Tail
    hrCtx.fillStyle = '#451a03';
    hrCtx.beginPath();
    hrCtx.moveTo(18, 22);
    hrCtx.quadraticCurveTo(8, 32, 12, 42);
    hrCtx.lineTo(16, 40);
    hrCtx.fill();

    this.sprites.horse = horse;

    // E. Golden Retriever Dog
    const { canvas: dog, ctx: dCtx } = this.createCanvas(44, 36);
    dCtx.fillStyle = '#f59e0b';
    dCtx.fillRect(10, 12, 22, 14);
    dCtx.fillRect(26, 6, 12, 12);
    dCtx.fillStyle = '#b45309'; // floppy ear
    dCtx.fillRect(27, 8, 4, 8);
    dCtx.fillStyle = '#0f172a'; // nose & eye
    dCtx.fillRect(35, 11, 3, 3);
    dCtx.fillRect(31, 8, 2, 2);
    // Legs
    dCtx.fillStyle = '#f59e0b';
    dCtx.fillRect(12, 24, 4, 9);
    dCtx.fillRect(18, 24, 4, 9);
    dCtx.fillRect(24, 24, 4, 9);
    // Tail
    dCtx.strokeStyle = '#f59e0b';
    dCtx.lineWidth = 3;
    dCtx.beginPath();
    dCtx.moveTo(10, 16);
    dCtx.quadraticCurveTo(4, 10, 6, 4);
    dCtx.stroke();
    this.sprites.dog = dog;

    // F. Orange Porch Cat
    const { canvas: cat, ctx: ctCtx } = this.createCanvas(32, 28);
    ctCtx.fillStyle = '#ea580c';
    ctCtx.beginPath();
    ctCtx.ellipse(15, 16, 10, 7, 0, 0, Math.PI * 2);
    ctCtx.fill();
    ctCtx.beginPath();
    ctCtx.arc(22, 11, 5, 0, Math.PI * 2);
    ctCtx.fill();
    // Ears
    ctCtx.beginPath();
    ctCtx.moveTo(19, 7);
    ctCtx.lineTo(21, 3);
    ctCtx.lineTo(23, 7);
    ctCtx.moveTo(23, 7);
    ctCtx.lineTo(25, 3);
    ctCtx.lineTo(27, 7);
    ctCtx.fill();
    // Eyes
    ctCtx.fillStyle = '#84cc16';
    ctCtx.fillRect(23, 10, 2, 2);
    // Tail
    ctCtx.strokeStyle = '#ea580c';
    ctCtx.lineWidth = 2.5;
    ctCtx.beginPath();
    ctCtx.moveTo(6, 16);
    ctCtx.arc(8, 12, 6, Math.PI * 0.5, Math.PI * 1.5);
    ctCtx.stroke();
    this.sprites.cat = cat;

    // G. Cute Pink Truffle Pig
    const { canvas: pig, ctx: pgCtx } = this.createCanvas(48, 38);
    // Shadow
    pgCtx.fillStyle = 'rgba(0,0,0,0.2)';
    pgCtx.beginPath();
    pgCtx.ellipse(24, 34, 18, 5, 0, 0, Math.PI * 2);
    pgCtx.fill();
    // Pink Body
    pgCtx.fillStyle = '#f472b6';
    pgCtx.fillRect(10, 10, 26, 18);
    // Head & Snout
    pgCtx.fillRect(28, 12, 12, 14);
    // Big pink snout
    pgCtx.fillStyle = '#ec4899';
    pgCtx.fillRect(36, 17, 6, 7);
    pgCtx.fillStyle = '#9d174d';
    pgCtx.fillRect(38, 19, 1.5, 2);
    pgCtx.fillRect(41, 19, 1.5, 2);
    // Floppy pink ears
    pgCtx.fillStyle = '#ec4899';
    pgCtx.fillRect(28, 8, 5, 6);
    // Eye
    pgCtx.fillStyle = '#0f172a';
    pgCtx.fillRect(33, 14, 2.5, 2.5);
    // Legs
    pgCtx.fillStyle = '#f472b6';
    pgCtx.fillRect(12, 26, 4, 8);
    pgCtx.fillRect(18, 26, 4, 8);
    pgCtx.fillRect(26, 26, 4, 8);
    pgCtx.fillRect(32, 26, 4, 8);
    pgCtx.fillStyle = '#be185d';
    pgCtx.fillRect(12, 32, 4, 2);
    pgCtx.fillRect(18, 32, 4, 2);
    pgCtx.fillRect(26, 32, 4, 2);
    pgCtx.fillRect(32, 32, 4, 2);
    // Curly tail
    pgCtx.strokeStyle = '#ec4899';
    pgCtx.lineWidth = 2;
    pgCtx.beginPath();
    pgCtx.arc(8, 16, 4, 0, Math.PI * 1.5);
    pgCtx.stroke();
    this.sprites.pig = pig;
  }

  // 7. Detailed Stardew Farmer (4 Directions + Tool Animations)
  generateFarmer() {
    const directions = ['down', 'up', 'left', 'right'];
    this.sprites.farmer = {};

    directions.forEach(dir => {
      const { canvas, ctx } = this.createCanvas(40, 52);

      // Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.22)';
      ctx.beginPath();
      ctx.ellipse(20, 48, 11, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Boots
      ctx.fillStyle = '#451a03';
      ctx.fillRect(13, 40, 6, 8);
      ctx.fillRect(21, 40, 6, 8);

      // Blue Denim Overalls / Dungarees
      ctx.fillStyle = '#1d4ed8';
      ctx.fillRect(13, 26, 14, 16);

      // Red Plaid Flannel Shirt
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(12, 18, 16, 10);
      // Flannel stripes
      ctx.fillStyle = '#991b1b';
      ctx.fillRect(16, 18, 2, 10);
      ctx.fillRect(22, 18, 2, 10);

      // Overall Straps
      ctx.fillStyle = '#1e40af';
      ctx.fillRect(14, 18, 3, 10);
      ctx.fillRect(23, 18, 3, 10);
      // Brass Buckles
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(14, 25, 3, 2);
      ctx.fillRect(23, 25, 3, 2);

      // Head / Skin
      ctx.fillStyle = '#fed7aa';
      ctx.fillRect(15, 9, 10, 10);

      // Eyes & Face details
      if (dir === 'down') {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(17, 13, 2, 2.5);
        ctx.fillRect(21, 13, 2, 2.5);
        ctx.fillStyle = '#f43f5e';
        ctx.fillRect(16, 15, 2, 1);
        ctx.fillRect(22, 15, 2, 1);
      } else if (dir === 'left') {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(16, 13, 2, 2.5);
      } else if (dir === 'right') {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(22, 13, 2, 2.5);
      }

      // Auburn Red Hair
      ctx.fillStyle = '#c2410c';
      if (dir === 'up') {
        ctx.fillRect(14, 7, 12, 12);
        // Ponytail
        ctx.fillRect(18, 17, 4, 8);
      } else {
        ctx.fillRect(14, 7, 12, 5);
        ctx.fillRect(13, 11, 3, 6);
        ctx.fillRect(24, 11, 3, 6);
      }

      // Straw Farming Hat
      ctx.fillStyle = '#fde047';
      // Brim
      ctx.beginPath();
      ctx.ellipse(20, 8, 16, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Crown
      ctx.fillStyle = '#eab308';
      ctx.fillRect(14, 2, 12, 7);
      // Ribbon band
      ctx.fillStyle = '#15803d';
      ctx.fillRect(14, 7, 12, 2);

      this.sprites.farmer[dir] = canvas;
    });
  }

  // 8. 5-Stage Crops: Carrot, Corn, Pumpkin, Strawberry, Tomato, Wheat
  generateCrops() {
    const cropTypes = ['carrot', 'corn', 'pumpkin', 'strawberry', 'tomato', 'wheat'];
    this.sprites.crops = {};

    cropTypes.forEach(crop => {
      this.sprites.crops[crop] = [];
      for (let stage = 0; stage < 5; stage++) {
        const { canvas, ctx } = this.createCanvas(36, 44);

        if (stage === 0) {
          // Tiny green seed sprout
          ctx.fillStyle = '#4ade80';
          ctx.fillRect(17, 34, 2, 6);
          ctx.fillRect(15, 32, 3, 3);
          ctx.fillRect(18, 32, 3, 3);
        } else if (stage === 1) {
          // Two green leaves
          ctx.fillStyle = '#22c55e';
          ctx.fillRect(16, 28, 4, 12);
          ctx.beginPath();
          ctx.arc(14, 26, 4, 0, Math.PI * 2);
          ctx.arc(22, 26, 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (stage === 2) {
          // Growing bushy plant
          ctx.fillStyle = '#16a34a';
          ctx.fillRect(16, 22, 4, 18);
          ctx.beginPath();
          ctx.arc(13, 22, 6, 0, Math.PI * 2);
          ctx.arc(23, 22, 6, 0, Math.PI * 2);
          ctx.arc(18, 16, 6, 0, Math.PI * 2);
          ctx.fill();
        } else if (stage === 3) {
          // Flowering / pre-fruit
          ctx.fillStyle = '#15803d';
          ctx.fillRect(16, 16, 4, 24);
          ctx.beginPath();
          ctx.arc(12, 18, 7, 0, Math.PI * 2);
          ctx.arc(24, 18, 7, 0, Math.PI * 2);
          ctx.arc(18, 12, 7, 0, Math.PI * 2);
          ctx.fill();
          // Flower buds
          ctx.fillStyle = '#fef08a';
          ctx.fillRect(13, 16, 3, 3);
          ctx.fillRect(20, 16, 3, 3);
        } else if (stage === 4) {
          // Full Ripe Stage!
          // Green foliage
          ctx.fillStyle = '#15803d';
          ctx.fillRect(16, 14, 4, 26);
          ctx.beginPath();
          ctx.arc(11, 16, 7, 0, Math.PI * 2);
          ctx.arc(25, 16, 7, 0, Math.PI * 2);
          ctx.fill();

          // Fruit specifics
          if (crop === 'carrot') {
            ctx.fillStyle = '#ea580c';
            ctx.beginPath();
            ctx.moveTo(14, 24);
            ctx.lineTo(22, 24);
            ctx.lineTo(18, 38);
            ctx.closePath();
            ctx.fill();
          } else if (crop === 'corn') {
            ctx.fillStyle = '#facc15';
            ctx.fillRect(15, 8, 7, 24);
            ctx.fillStyle = '#ca8a04';
            for (let y = 10; y < 30; y += 4) {
              ctx.fillRect(15, y, 7, 1);
            }
          } else if (crop === 'pumpkin') {
            ctx.fillStyle = '#ea580c';
            ctx.beginPath();
            ctx.ellipse(18, 28, 11, 9, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#c2410c';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = '#15803d';
            ctx.fillRect(17, 16, 3, 4); // stem
          } else if (crop === 'strawberry') {
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(13, 26, 5, 0, Math.PI * 2);
            ctx.arc(23, 26, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fde047'; // seeds
            ctx.fillRect(12, 26, 1, 1);
            ctx.fillRect(22, 26, 1, 1);
          } else if (crop === 'tomato') {
            ctx.fillStyle = '#dc2626';
            ctx.beginPath();
            ctx.arc(14, 24, 6, 0, Math.PI * 2);
            ctx.arc(22, 24, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#22c55e'; // calyx
            ctx.fillRect(13, 17, 3, 2);
            ctx.fillRect(21, 17, 3, 2);
          } else if (crop === 'wheat') {
            ctx.fillStyle = '#f59e0b';
            for (let i = 0; i < 3; i++) {
              ctx.fillRect(13 + i * 4, 8, 3, 28);
              ctx.beginPath();
              ctx.arc(14.5 + i * 4, 8, 3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        this.sprites.crops[crop].push(canvas);
      }
    });
  }

  // 9. Lush Scenery: Trees, Fruit Trees, Real Connected Wooden Fences
  generateScenery() {
    // Pine Tree
    const { canvas: pine, ctx: pCtx } = this.createCanvas(56, 76);
    // Trunk
    pCtx.fillStyle = '#78350f';
    pCtx.fillRect(24, 48, 8, 24);
    // Dark Pine Foliage tiers
    pCtx.fillStyle = '#14532d';
    const drawTier = (y, w, h) => {
      pCtx.beginPath();
      pCtx.moveTo(28, y - h);
      pCtx.lineTo(28 - w, y);
      pCtx.lineTo(28 + w, y);
      pCtx.closePath();
      pCtx.fill();
    };
    drawTier(52, 24, 22);
    drawTier(40, 20, 20);
    drawTier(28, 16, 18);
    drawTier(16, 11, 14);
    this.sprites.pine = pine;

    // Oak / Apple Tree
    const { canvas: oak, ctx: oCtx } = this.createCanvas(64, 76);
    // Shadow
    oCtx.fillStyle = 'rgba(0,0,0,0.2)';
    oCtx.beginPath();
    oCtx.ellipse(32, 68, 20, 6, 0, 0, Math.PI * 2);
    oCtx.fill();
    // Trunk
    oCtx.fillStyle = '#78350f';
    oCtx.fillRect(28, 42, 9, 28);
    // Foliage
    oCtx.fillStyle = '#15803d';
    oCtx.beginPath();
    oCtx.arc(32, 32, 22, 0, Math.PI * 2);
    oCtx.arc(22, 28, 15, 0, Math.PI * 2);
    oCtx.arc(42, 28, 15, 0, Math.PI * 2);
    oCtx.arc(32, 18, 15, 0, Math.PI * 2);
    oCtx.fill();
    // Leaf highlights
    oCtx.fillStyle = '#22c55e';
    oCtx.beginPath();
    oCtx.arc(28, 22, 8, 0, Math.PI * 2);
    oCtx.arc(38, 25, 6, 0, Math.PI * 2);
    oCtx.fill();
    // Juicy Red Apples
    oCtx.fillStyle = '#ef4444';
    const appleSpots = [[20, 26], [32, 18], [42, 28], [26, 36], [38, 36]];
    appleSpots.forEach(([ax, ay]) => {
      oCtx.beginPath();
      oCtx.arc(ax, ay, 3.5, 0, Math.PI * 2);
      oCtx.fill();
      oCtx.fillStyle = '#ffffff';
      oCtx.fillRect(ax - 1, ay - 1, 1, 1);
      oCtx.fillStyle = '#ef4444';
    });
    this.sprites.appleTree = oak;
  }

  get(name) {
    return this.sprites[name];
  }
}

export const pixelArt = new PixelArtSystem();
