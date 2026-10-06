// 3D Angled Isometric Farm Game Engine using Three.js
// Features: Central Expandable Farming Area, Side Level-Locked Animal Enclosures, 3D Models, Real Shadows, and BGM

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPixelatedPass } from 'three/addons/postprocessing/RenderPixelatedPass.js';
import gsap from 'gsap';
import { TILE_SIZE, CROPS, ANIMAL_FARMS, LAND_EXPANSIONS } from './Constants.js';
import { GameState } from './GameState.js';
import { ParticleSystem } from './ParticleSystem.js';
import { sounds } from './SoundFX.js';
import { bgm } from './AudioPlayer.js';
import { TimeWeather } from './TimeWeather.js';
import confetti from 'canvas-confetti';

export class GameEngine3D {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.particles = new ParticleSystem();
    this.state = new GameState(this.particles);

    // Dynamic Time & Weather system
    this.timeWeather = new TimeWeather((day, weather) => {
      this.state.nextDay();
      this.particles.addFloatingText('يوم جديد أشرق في المزرعة! ☀️', 0, 30, '#ffd166', 22);
    });

    // Initial unlocked central plots: Exactly 20 plots (Expandable)
    this.unlockedPlotCount = (this.state && this.state.unlockedPlotCount) || 20;
    this.currentExpansionIndex = (this.state && this.state.currentExpansionIndex !== undefined) ? this.state.currentExpansionIndex : 0;

    // Animal farm unlocked states (7 dedicated separate pens - all locked on fresh game)
    this.unlockedFarms = (this.state && this.state.unlockedFarms) ? { ...this.state.unlockedFarms } : {
      chicken: false,
      duck: false,
      sheep: false,
      rabbit: false,
      cow: false,
      goat: false,
      horse: false
    };

    // Farming plot arrangement layout mode (twin_blocks, grid_5x4, quad_blocks, long_terraces)
    this.farmingPlotLayout = (this.state && this.state.farmingPlotLayout) || 'twin_blocks';

    // Interactive Plot Moving & Organization Mode
    this.isMovingPlotMode = false;
    this.selectedPlotToMove = null;
    this.plotGhostBox = null;
    this.plotMoveHighlight = null;

    // Single-Plot Placement & Expansion Mode (50 Gold each, unlimited quantity)
    this.isPlacingNewPlotMode = false;
    this.plotPlacementGhost = null;

    // Touch & Drag Panning System for Mobile, Tablet and Desktop
    this.panVelocity = new THREE.Vector2(0, 0);
    this.touchPanActive = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchLastX = 0;
    this.touchLastY = 0;
    this.touchStartTime = 0;
    this.touchTotalDist = 0;
    this.isTouchDraggingFarm = false;
    this.isPinchZooming = false;
    this.pinchStartDist = 0;
    this.pinchStartFrustum = 34;
    this.pinchStartDistance = 32;
    this.mouseDragPanActive = false;
    this.mouseDragLastX = 0;
    this.mouseDragLastY = 0;

    // Autonomous Farmer AI and Speech System
    this.initFarmerAutonomousAI();
    this.initFarmerSpeech();

    // Modular Road Squares & Road Edit System (Move, Erase, Add)
    this.roadTiles = new Map();
    this.isRoadEditMode = false;
    this.roadEditTool = 'move';
    this.selectedRoadTile = null;
    this.roadGhostBox = null;
    this.roadHighlightBox = null;

    // Screen Edge Pan / Scrolling System
    this.edgePanMargin = 38; // Pixels from screen edge to trigger pan
    this.edgePanSpeed = 24; // Movement speed units per second
    this.edgePanDir = new THREE.Vector2(0, 0); // (x: -1..1, y: -1..1)
    this.isEdgePanning = false;
    this.cameraFocusPoint = new THREE.Vector3(0, 0, 0);

    this.troughStations = new Map();
    this.staticColliders = [];
    this.buildings3D = new Map();

    this.initThree();
    this.createWorld();
    this.createCentralFarmingPlots();
    this.createSideAnimalZones();
    this.createBuildings();
    this.createFarmer();
    this.createDecorations();
    this.createAtmosphericEffects();
    this.initEvents();
    this.initBuilderMode();
    this.loadFarmLayout();

    this.isRunning = false;
    this.lastTime = performance.now();
    this.elapsedTime = 0;

    // Start background music
    bgm.play();
  }

  initThree() {
    // 1. WebGL Renderer with Filmic Tone Mapping
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    // 2. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#78c850'); // Vibrant meadow background
    this.scene.fog = new THREE.FogExp2('#78c850', 0.007);

    // 3. True 3D Isometric Stereoscopic Camera (Classic 35.264° pitch & 45° azimuth)
    this.isIsometric = true;
    this.isOrthographic = true;
    this.isoAngle = Math.PI / 4; // 45° azimuth (diagonal side view)
    this.targetIsoAngle = Math.PI / 4;
    this.frustumSize = 34; // Field of view size for orthographic view
    this.cameraDistance = 32; // Horizontal diagonal distance
    this.cameraHeight = 26;   // Golden 35.26° elevation angle

    const aspect = window.innerWidth / window.innerHeight;
    this.orthoCamera = new THREE.OrthographicCamera(
      -this.frustumSize * aspect / 2,
      this.frustumSize * aspect / 2,
      this.frustumSize / 2,
      -this.frustumSize / 2,
      -200,
      400
    );

    this.perspCamera = new THREE.PerspectiveCamera(35, aspect, 1, 350);

    this.camera = this.isOrthographic ? this.orthoCamera : this.perspCamera;

    const initCamX = Math.sin(this.isoAngle) * this.cameraDistance;
    const initCamZ = Math.cos(this.isoAngle) * this.cameraDistance;
    this.camera.position.set(initCamX, this.cameraHeight, initCamZ);
    this.camera.lookAt(0, 1.0, 0);

    // 4. Pixel Art Post-Processing Pipeline (RenderPixelatedPass)
    this.pixelSize = 2; // Ultra-crisp HD-2D retro pixel scale (2x) - fine features remain distinct & sharp!
    this.composer = new EffectComposer(this.renderer);

    this.pixelPass = new RenderPixelatedPass(this.pixelSize, this.scene, this.camera, {
      normalEdgeStrength: 0.28,
      depthEdgeStrength: 0.34
    });
    this.pixelPass.setSize(window.innerWidth, window.innerHeight);
    this.composer.addPass(this.pixelPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.14, // Subtle warm bloom for magic crops & lanterns without blurring pixel edges
      0.40,
      0.90
    );
    this.composer.addPass(this.bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);

    // 4. Lighting & Shadows
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.75);
    this.scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xdcfce7, 0x365314, 0.45);
    this.scene.add(hemiLight);

    // Sun directional light casting soft 3D shadows
    this.sunLight = new THREE.DirectionalLight(0xfffaf0, 1.25);
    this.sunLight.position.set(30, 48, 25);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 160;
    this.sunLight.shadow.camera.left = -45;
    this.sunLight.shadow.camera.right = 45;
    this.sunLight.shadow.camera.top = 45;
    this.sunLight.shadow.camera.bottom = -45;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);

    // Raycaster for 3D mouse interaction
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-1000, -1000);
    this.hoveredTile = null;

    // Movement Direction Indicator Ring on the ground (for click-and-hold movement)
    const indicatorGroup = new THREE.Group();
    const ringGeo = new THREE.RingGeometry(0.35, 0.65, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    indicatorGroup.add(ringMesh);

    const centerDotGeo = new THREE.CircleGeometry(0.16, 16);
    centerDotGeo.rotateX(-Math.PI / 2);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xfffbeb,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });
    const dotMesh = new THREE.Mesh(centerDotGeo, dotMat);
    indicatorGroup.add(dotMesh);

    this.moveIndicator = indicatorGroup;
    this.moveIndicator.position.y = 0.08;
    this.moveIndicator.visible = false;
    this.scene.add(this.moveIndicator);

    // Sleek glowing 3D hover frame with corner brackets (hugs plots cleanly without hiding crops)
    const cursorGroup = new THREE.Group();
    const boxGeo = new THREE.BoxGeometry(2.45, 0.32, 2.45);
    const edges = new THREE.EdgesGeometry(boxGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xffd166,
      linewidth: 3,
      transparent: true,
      opacity: 0.95
    });
    const frameMesh = new THREE.LineSegments(edges, lineMat);
    cursorGroup.add(frameMesh);

    // Subtle soft amber floor glow plane
    const glowPlaneGeo = new THREE.PlaneGeometry(2.35, 2.35);
    glowPlaneGeo.rotateX(-Math.PI / 2);
    const glowPlaneMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide
    });
    const glowMesh = new THREE.Mesh(glowPlaneGeo, glowPlaneMat);
    glowMesh.position.y = 0.05;
    cursorGroup.add(glowMesh);

    // Exclude cursor meshes from raycasting completely so they never intercept mouse clicks
    cursorGroup.raycast = () => {};
    frameMesh.raycast = () => {};
    glowMesh.raycast = () => {};

    cursorGroup.visible = false;
    this.cursorMesh = cursorGroup;
    this.cursorFrameMesh = frameMesh;
    this.cursorGlowMesh = glowMesh;
    this.scene.add(cursorGroup);

    // Active tool and selected seed state (Controlled via top action bar & bottom seed bar)
    this.activeTool = 'hoe';
    this.selectedSeed = 'corn';

    // Initialize procedural realistic textures (Cow hide, flannel, denim)
    this.initProceduralTextures();
  }

  initProceduralTextures() {
    this.textures = {};

    // 1. Holstein Cow Hide (Creamy white with soft organic black patches)
    const cowCanvas = document.createElement('canvas');
    cowCanvas.width = 512;
    cowCanvas.height = 512;
    const cCtx = cowCanvas.getContext('2d');
    cCtx.fillStyle = '#fdfbf7';
    cCtx.fillRect(0, 0, 512, 512);
    cCtx.fillStyle = '#1e293b';

    const cowSpots = [
      { x: 120, y: 150, r: 85 },
      { x: 180, y: 120, r: 60 },
      { x: 370, y: 190, r: 90 },
      { x: 330, y: 270, r: 65 },
      { x: 240, y: 390, r: 80 },
      { x: 90, y: 370, r: 65 },
      { x: 440, y: 390, r: 55 },
      { x: 260, y: 80, r: 45 }
    ];
    cowSpots.forEach(s => {
      cCtx.beginPath();
      cCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      cCtx.fill();
      for (let j = 0; j < 6; j++) {
        const a = (j / 6) * Math.PI * 2;
        const ox = s.x + Math.cos(a) * (s.r * 0.7);
        const oy = s.y + Math.sin(a) * (s.r * 0.7);
        cCtx.beginPath();
        cCtx.arc(ox, oy, s.r * 0.4, 0, Math.PI * 2);
        cCtx.fill();
      }
    });
    this.textures.cow = new THREE.CanvasTexture(cowCanvas);

    // Fluffy Curly Merino Sheep Wool Texture
    const woolCanvas = document.createElement('canvas');
    woolCanvas.width = 256;
    woolCanvas.height = 256;
    const wCtx = woolCanvas.getContext('2d');
    wCtx.fillStyle = '#f8f5ee';
    wCtx.fillRect(0, 0, 256, 256);
    wCtx.strokeStyle = 'rgba(215, 205, 185, 0.4)';
    wCtx.lineWidth = 3;
    for (let i = 0; i < 90; i++) {
      const cx = Math.random() * 256;
      const cy = Math.random() * 256;
      const r = 6 + Math.random() * 10;
      wCtx.beginPath();
      wCtx.arc(cx, cy, r, 0, Math.PI * 1.5);
      wCtx.stroke();
    }
    this.textures.wool = new THREE.CanvasTexture(woolCanvas);
    this.textures.wool.wrapS = THREE.RepeatWrapping;
    this.textures.wool.wrapT = THREE.RepeatWrapping;
    this.textures.wool.repeat.set(3, 3);

    // Chestnut Arabian Horse Coat Texture
    const horseCanvas = document.createElement('canvas');
    horseCanvas.width = 256;
    horseCanvas.height = 256;
    const hCtx = horseCanvas.getContext('2d');
    hCtx.fillStyle = '#7c3f15';
    hCtx.fillRect(0, 0, 256, 256);
    hCtx.fillStyle = '#8f4a1a';
    for (let y = 0; y < 256; y += 4) {
      hCtx.fillRect(0, y, 256, 2);
    }
    this.textures.horse = new THREE.CanvasTexture(horseCanvas);

    // Calico Cat Coat Texture (tricolor white, orange, and charcoal)
    const calicoCanvas = document.createElement('canvas');
    calicoCanvas.width = 256;
    calicoCanvas.height = 256;
    const calCtx = calicoCanvas.getContext('2d');
    calCtx.fillStyle = '#fcfbf7';
    calCtx.fillRect(0, 0, 256, 256);
    // Orange patches
    calCtx.fillStyle = '#ea580c';
    calCtx.beginPath();
    calCtx.arc(60, 80, 50, 0, Math.PI * 2);
    calCtx.arc(190, 180, 55, 0, Math.PI * 2);
    calCtx.fill();
    // Charcoal black patches
    calCtx.fillStyle = '#1e293b';
    calCtx.beginPath();
    calCtx.arc(170, 70, 42, 0, Math.PI * 2);
    calCtx.arc(70, 200, 48, 0, Math.PI * 2);
    calCtx.fill();
    this.textures.calico = new THREE.CanvasTexture(calicoCanvas);

    // 2. Plaid Checkered Farmer Shirt Texture (Classic Orange & Dark Red)
    const shirtCanvas = document.createElement('canvas');
    shirtCanvas.width = 256;
    shirtCanvas.height = 256;
    const sCtx = shirtCanvas.getContext('2d');
    sCtx.fillStyle = '#dc582a'; // Base warm vibrant orange
    sCtx.fillRect(0, 0, 256, 256);
    // Dark burgundy red broad plaid stripes
    sCtx.fillStyle = '#8f2317';
    for (let x = 0; x < 256; x += 64) sCtx.fillRect(x, 0, 28, 256);
    for (let y = 0; y < 256; y += 64) sCtx.fillRect(0, y, 256, 28);
    // Darker intersecting squares
    sCtx.fillStyle = '#5c130b';
    for (let x = 0; x < 256; x += 64) {
      for (let y = 0; y < 256; y += 64) {
        sCtx.fillRect(x, y, 28, 28);
      }
    }
    // Fine golden-yellow accent lines
    sCtx.strokeStyle = 'rgba(251, 191, 36, 0.85)';
    sCtx.lineWidth = 3;
    for (let x = 32; x < 256; x += 64) {
      sCtx.beginPath(); sCtx.moveTo(x, 0); sCtx.lineTo(x, 256); sCtx.stroke();
    }
    for (let y = 32; y < 256; y += 64) {
      sCtx.beginPath(); sCtx.moveTo(0, y); sCtx.lineTo(256, y); sCtx.stroke();
    }
    this.textures.farmerShirt = new THREE.CanvasTexture(shirtCanvas);
    this.textures.farmerShirt.wrapS = THREE.RepeatWrapping;
    this.textures.farmerShirt.wrapT = THREE.RepeatWrapping;
    this.textures.farmerShirt.repeat.set(2, 2);
    this.textures.flannel = this.textures.farmerShirt;

    // 2b. Alternative Charcoal Gray Plaid Shirt Texture
    const shirtAltCanvas = document.createElement('canvas');
    shirtAltCanvas.width = 256;
    shirtAltCanvas.height = 256;
    const saCtx = shirtAltCanvas.getContext('2d');
    saCtx.fillStyle = '#475569'; // Slate dark gray
    saCtx.fillRect(0, 0, 256, 256);
    saCtx.fillStyle = '#1e293b'; // Deep charcoal stripes
    for (let x = 0; x < 256; x += 64) saCtx.fillRect(x, 0, 28, 256);
    for (let y = 0; y < 256; y += 64) saCtx.fillRect(0, y, 256, 28);
    saCtx.fillStyle = '#0f172a';
    for (let x = 0; x < 256; x += 64) {
      for (let y = 0; y < 256; y += 64) {
        saCtx.fillRect(x, y, 28, 28);
      }
    }
    saCtx.strokeStyle = 'rgba(148, 163, 184, 0.75)';
    saCtx.lineWidth = 2.5;
    for (let x = 32; x < 256; x += 64) {
      saCtx.beginPath(); saCtx.moveTo(x, 0); saCtx.lineTo(x, 256); saCtx.stroke();
    }
    for (let y = 32; y < 256; y += 64) {
      saCtx.beginPath(); saCtx.moveTo(0, y); saCtx.lineTo(256, y); saCtx.stroke();
    }
    this.textures.farmerShirtAlt = new THREE.CanvasTexture(shirtAltCanvas);
    this.textures.farmerShirtAlt.wrapS = THREE.RepeatWrapping;
    this.textures.farmerShirtAlt.wrapT = THREE.RepeatWrapping;
    this.textures.farmerShirtAlt.repeat.set(2, 2);

    // 3. Dark Indigo Denim Texture (Overalls)
    const denimCanvas = document.createElement('canvas');
    denimCanvas.width = 128;
    denimCanvas.height = 128;
    const dCtx = denimCanvas.getContext('2d');
    dCtx.fillStyle = '#223854';
    dCtx.fillRect(0, 0, 128, 128);
    dCtx.strokeStyle = 'rgba(25, 41, 62, 0.7)';
    dCtx.lineWidth = 2;
    for (let i = -128; i < 256; i += 5) {
      dCtx.beginPath(); dCtx.moveTo(i, 0); dCtx.lineTo(i + 128, 128); dCtx.stroke();
    }
    this.textures.farmerDenim = new THREE.CanvasTexture(denimCanvas);
    this.textures.farmerDenim.wrapS = THREE.RepeatWrapping;
    this.textures.farmerDenim.wrapT = THREE.RepeatWrapping;
    this.textures.farmerDenim.repeat.set(3, 3);
    this.textures.denim = this.textures.farmerDenim;

    // 3b. Faded Blue Denim Texture (Alternative Color)
    const denimAltCanvas = document.createElement('canvas');
    denimAltCanvas.width = 128;
    denimAltCanvas.height = 128;
    const daCtx = denimAltCanvas.getContext('2d');
    daCtx.fillStyle = '#4c6c8e';
    daCtx.fillRect(0, 0, 128, 128);
    daCtx.strokeStyle = 'rgba(43, 67, 92, 0.65)';
    daCtx.lineWidth = 2;
    for (let i = -128; i < 256; i += 5) {
      daCtx.beginPath(); daCtx.moveTo(i, 0); daCtx.lineTo(i + 128, 128); daCtx.stroke();
    }
    this.textures.farmerDenimAlt = new THREE.CanvasTexture(denimAltCanvas);
    this.textures.farmerDenimAlt.wrapS = THREE.RepeatWrapping;
    this.textures.farmerDenimAlt.wrapT = THREE.RepeatWrapping;
    this.textures.farmerDenimAlt.repeat.set(3, 3);

    // 4. Woven Golden Straw Hat Texture
    const strawCanvas = document.createElement('canvas');
    strawCanvas.width = 128;
    strawCanvas.height = 128;
    const stCtx = strawCanvas.getContext('2d');
    stCtx.fillStyle = '#deb06c';
    stCtx.fillRect(0, 0, 128, 128);
    stCtx.strokeStyle = '#c5954c';
    stCtx.lineWidth = 2;
    for (let i = 0; i < 128; i += 8) {
      stCtx.beginPath(); stCtx.moveTo(i, 0); stCtx.lineTo(i, 128); stCtx.stroke();
      stCtx.beginPath(); stCtx.moveTo(0, i); stCtx.lineTo(128, i); stCtx.stroke();
    }
    this.textures.strawHat = new THREE.CanvasTexture(strawCanvas);
    this.textures.strawHat.wrapS = THREE.RepeatWrapping;
    this.textures.strawHat.wrapT = THREE.RepeatWrapping;
    this.textures.strawHat.repeat.set(4, 4);

    // 5. Lush Meadow Green Grass Texture (512x512)
    const grassCanvas = document.createElement('canvas');
    grassCanvas.width = 512;
    grassCanvas.height = 512;
    const gCtx = grassCanvas.getContext('2d');
    const grad = gCtx.createLinearGradient(0, 0, 512, 512);
    grad.addColorStop(0, '#5cb82e');
    grad.addColorStop(0.5, '#4ea624');
    grad.addColorStop(1, '#55aa28');
    gCtx.fillStyle = grad;
    gCtx.fillRect(0, 0, 512, 512);

    // Natural grass blade strokes & lawn texture
    for (let i = 0; i < 4000; i++) {
      const gx = Math.random() * 512;
      const gy = Math.random() * 512;
      const len = 3 + Math.random() * 5;
      gCtx.strokeStyle = Math.random() > 0.5 ? '#6ec539' : '#3e8c1b';
      gCtx.lineWidth = 1 + Math.random();
      gCtx.beginPath();
      gCtx.moveTo(gx, gy);
      gCtx.lineTo(gx + (Math.random() - 0.5) * 2, gy - len);
      gCtx.stroke();
    }
    // Clover specks
    for (let c = 0; c < 140; c++) {
      const cx = Math.random() * 512;
      const cy = Math.random() * 512;
      gCtx.fillStyle = '#68be32';
      for (let p = 0; p < 3; p++) {
        const ang = (p / 3) * Math.PI * 2;
        gCtx.beginPath();
        gCtx.arc(cx + Math.cos(ang) * 2.8, cy + Math.sin(ang) * 2.8, 2.2, 0, Math.PI * 2);
        gCtx.fill();
      }
    }
    this.textures.grass = new THREE.CanvasTexture(grassCanvas);
    this.textures.grass.wrapS = THREE.RepeatWrapping;
    this.textures.grass.wrapT = THREE.RepeatWrapping;
    this.textures.grass.repeat.set(40, 40);

    // 6. Cobblestone Road Texture (256x256)
    const cobbleCanvas = document.createElement('canvas');
    cobbleCanvas.width = 256;
    cobbleCanvas.height = 256;
    const cbCtx = cobbleCanvas.getContext('2d');
    cbCtx.fillStyle = '#dfa552';
    cbCtx.fillRect(0, 0, 256, 256);
    cbCtx.strokeStyle = '#b87c33';
    cbCtx.lineWidth = 2;
    for (let y = 0; y < 256; y += 24) {
      const offset = (y / 24) % 2 === 0 ? 0 : 16;
      for (let x = -16; x < 272; x += 32) {
        cbCtx.strokeRect(x + offset, y, 30, 22);
      }
    }
    this.textures.cobblestone = new THREE.CanvasTexture(cobbleCanvas);
    this.textures.cobblestone.wrapS = THREE.RepeatWrapping;
    this.textures.cobblestone.wrapT = THREE.RepeatWrapping;
    this.textures.cobblestone.repeat.set(2, 2);
  }

  // Base 3D Terrain
  createWorld() {
    // Large ground plane (All lush green lawn/grass meadow)
    const groundGeo = new THREE.PlaneGeometry(320, 320, 32, 32);
    const groundMat = new THREE.MeshLambertMaterial({
      map: this.textures.grass,
      color: '#ffffff'
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    ground.userData = { isGroundTerrain: true };
    this.groundMesh = ground;
    this.scene.add(ground);

    // Roads group (customizable and editable in builder mode)
    this.roadsGroup = new THREE.Group();
    this.scene.add(this.roadsGroup);

    // Custom waters group (placed ponds in builder mode)
    this.customWatersGroup = new THREE.Group();
    this.scene.add(this.customWatersGroup);

    this.customRoadTiles = new Map();
    this.customWaterTiles = new Map();

    // Default stone roads and walkways connecting center to side farms
    this.createRoads();
    this.createRealisticMeadowGrass();
    this.createPlotMoveHelpers();
  }

  createPlotMoveHelpers() {
    // Semi-transparent ghost box previewing placement location
    const ghostGeo = new THREE.BoxGeometry(2.4, 0.32, 2.4);
    const ghostMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.45
    });
    this.plotGhostBox = new THREE.Mesh(ghostGeo, ghostMat);
    this.plotGhostBox.position.set(0, 0.16, 0);
    this.plotGhostBox.visible = false;

    // Add wireframe border edge to the ghost box for crisp visual feedback
    const edges = new THREE.EdgesGeometry(ghostGeo);
    const edgeLine = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }));
    this.plotGhostBox.add(edgeLine);
    this.scene.add(this.plotGhostBox);

    // Selection highlight indicator box around selected plot
    const selGeo = new THREE.BoxGeometry(2.5, 0.36, 2.5);
    const selEdges = new THREE.EdgesGeometry(selGeo);
    this.plotMoveHighlight = new THREE.LineSegments(selEdges, new THREE.LineBasicMaterial({ color: 0xfbbf24, linewidth: 3 }));
    this.plotMoveHighlight.visible = false;
    this.scene.add(this.plotMoveHighlight);
  }

  createRealisticMeadowGrass() {
    this.grassTuftsGroup = new THREE.Group();
    const bladeGeo = new THREE.PlaneGeometry(0.18, 0.45);
    bladeGeo.translate(0, 0.225, 0);
    const grassMat1 = new THREE.MeshLambertMaterial({ color: '#4da624', side: THREE.DoubleSide });
    const grassMat2 = new THREE.MeshLambertMaterial({ color: '#68bd36', side: THREE.DoubleSide });

    this.grassTufts = [];

    // Scatter 420 lush 3D grass tufts organically across the meadow
    for (let i = 0; i < 420; i++) {
      const x = (Math.random() - 0.5) * 115;
      const z = (Math.random() - 0.5) * 115;

      // Avoid placing right in central farming plot fields
      if (Math.abs(x) < 17 && Math.abs(z) < 15) continue;
      // Avoid inside lake
      if (z > 17 && z < 39 && Math.abs(x) < 20) continue;

      const tuft = new THREE.Group();
      tuft.position.set(x, 0, z);

      const blades = 3 + Math.floor(Math.random() * 3);
      for (let b = 0; b < blades; b++) {
        const blade = new THREE.Mesh(bladeGeo, Math.random() > 0.5 ? grassMat1 : grassMat2);
        blade.rotation.y = (b / blades) * Math.PI + (Math.random() - 0.5) * 0.4;
        blade.rotation.z = (Math.random() - 0.5) * 0.35;
        const s = 0.8 + Math.random() * 0.5;
        blade.scale.set(s, s, s);
        tuft.add(blade);
      }

      this.grassTuftsGroup.add(tuft);
      this.grassTufts.push({ group: tuft, baseX: x, baseZ: z, swayOffset: Math.random() * Math.PI * 2 });
    }

    this.scene.add(this.grassTuftsGroup);
  }

  updateMeadowGrass(time) {
    if (!this.grassTufts) return;
    for (let i = 0; i < this.grassTufts.length; i++) {
      const g = this.grassTufts[i];
      g.group.rotation.z = Math.sin(time * 2.2 + g.swayOffset) * 0.08;
    }
  }

  generateDefaultRoadCoordinates() {
    const coords = new Set();

    // 1. North-South Highway (from Z = -26 to Z = 18, 2 tiles wide at X = -1 and X = 1)
    for (let z = -26; z <= 18; z += 2) {
      coords.add(`-1,${z}`);
      coords.add(`1,${z}`);
    }

    // 2. East-West Grand Crossroads (from X = -19 to X = 19, 2 tiles wide at Z = -1 and Z = 1)
    for (let x = -19; x <= 19; x += 2) {
      coords.add(`${x},-1`);
      coords.add(`${x},1`);
    }

    // 3. West Pen Boardwalk: Along Western Animal Pens at X = -19, Z from -22 to 20
    for (let z = -22; z <= 20; z += 2) {
      coords.add(`-19,${z}`);
    }

    // 4. East Pen Boardwalk: Along Eastern Animal Pens at X = 19, Z from -22 to 14
    for (let z = -22; z <= 14; z += 2) {
      coords.add(`19,${z}`);
    }

    // 5. Northern Promenade: Across North Area at Z = -22, X from -19 to 19
    for (let x = -19; x <= 19; x += 2) {
      coords.add(`${x},-22`);
    }

    // 6. Southern Lake Walkway: Connecting along water at Z = 16, X from -19 to 19
    for (let x = -19; x <= 19; x += 2) {
      coords.add(`${x},16`);
    }

    // 7. Walkway to North Farmhouse Porch
    for (let x = -6; x <= 0; x += 2) {
      coords.add(`${x},-24`);
    }

    return Array.from(coords).map(str => {
      const [x, z] = str.split(',').map(Number);
      return { x, z };
    });
  }

  createRoads() {
    if (this.roadsGroup) {
      while (this.roadsGroup.children.length > 0) {
        this.roadsGroup.remove(this.roadsGroup.children[0]);
      }
    } else {
      this.roadsGroup = new THREE.Group();
      this.scene.add(this.roadsGroup);
    }
    this.roadTiles = new Map();

    // Check if player has saved customized roads
    const savedLayout = this.state && this.state.farmCustomLayout;
    let tileCoords = null;
    if (savedLayout && Array.isArray(savedLayout.roads) && savedLayout.roads.length > 0) {
      tileCoords = savedLayout.roads;
    } else {
      tileCoords = this.generateDefaultRoadCoordinates();
    }

    // Build each independent modular square tile
    tileCoords.forEach(pos => {
      this.createSingleRoadTileMesh(pos.x, pos.z);
    });
  }

  createSingleRoadTileMesh(x, z, key) {
    const tileKey = key || `${Math.round(x)},${Math.round(z)}`;
    if (this.roadTiles.has(tileKey)) return this.roadTiles.get(tileKey);

    const group = new THREE.Group();
    group.position.set(x, 0.02, z);

    const tileSize = 2.0;

    // A. Outer stone/timber border
    const borderGeo = new THREE.BoxGeometry(tileSize, 0.05, tileSize);
    const borderMat = new THREE.MeshLambertMaterial({ color: '#8c5a24' });
    const border = new THREE.Mesh(borderGeo, borderMat);
    border.position.y = 0.01;
    border.receiveShadow = true;
    group.add(border);

    // B. Inner textured cobblestone surface
    const surfaceGeo = new THREE.BoxGeometry(tileSize - 0.16, 0.06, tileSize - 0.16);
    const surfaceMat = new THREE.MeshLambertMaterial({
      map: this.textures.cobblestone || null,
      color: '#dfa552'
    });
    const surface = new THREE.Mesh(surfaceGeo, surfaceMat);
    surface.position.y = 0.03;
    surface.receiveShadow = true;
    group.add(surface);

    group.userData = {
      isRoadTile: true,
      key: tileKey,
      posX: x,
      posZ: z,
      rootRoadTile: group
    };

    group.traverse((c) => {
      c.userData = { isRoadTilePart: true, rootRoadTile: group, isRoadTile: true, key: tileKey };
    });

    this.roadsGroup.add(group);
    this.roadTiles.set(tileKey, group);
    return group;
  }

  deleteRoadTile(key) {
    const tile = this.roadTiles.get(key);
    if (!tile) return;
    this.roadsGroup.remove(tile);
    this.roadTiles.delete(key);
    if (this.roadHighlightBox) this.roadHighlightBox.visible = false;
    sounds.till();
    this.particles.addDirtBurst(tile.position.x, tile.position.z);
    this.particles.addFloatingText('تم مسح مربع الطريق وإعادة العشب! 🌱', tile.position.x, 25, '#84cc16', 18);
    this.saveFarmLayout();
  }

  moveRoadTile(oldKey, newX, newZ) {
    const tile = this.roadTiles.get(oldKey);
    if (!tile) return;

    const newKey = `${newX},${newZ}`;
    if (newKey !== oldKey && this.roadTiles.has(newKey)) {
      sounds.click();
      this.particles.addFloatingText('⚠️ يوجد مربع طريق آخر هنا بالفعل!', newX, 25, '#ef4444', 18);
      return;
    }

    tile.position.set(newX, 0.02, newZ);
    tile.userData.key = newKey;
    tile.userData.posX = newX;
    tile.userData.posZ = newZ;
    tile.traverse((c) => {
      if (c.userData) {
        c.userData.key = newKey;
      }
    });

    this.roadTiles.delete(oldKey);
    this.roadTiles.set(newKey, tile);

    sounds.place();
    this.particles.addDirtBurst(newX, newZ);
    this.particles.addFloatingText('✅ تم نقل مربع الطريق بنجاح!', newX, 25, '#f59e0b', 18);
    this.saveFarmLayout();
  }

  addRoadTile(newX, newZ) {
    const newKey = `${newX},${newZ}`;
    if (this.roadTiles.has(newKey)) {
      sounds.click();
      this.particles.addFloatingText('⚠️ يوجد مربع طريق هنا بالفعل!', newX, 25, '#ef4444', 18);
      return;
    }

    this.createSingleRoadTileMesh(newX, newZ, newKey);
    sounds.place();
    this.particles.addDirtBurst(newX, newZ);
    this.particles.addFloatingText('+1 مربع طريق جديد! 🛣️', newX, 25, '#22c55e', 18);
    this.saveFarmLayout();
  }

  resetDefaultRoads() {
    for (const mesh of this.roadTiles.values()) {
      this.roadsGroup.remove(mesh);
    }
    this.roadTiles.clear();
    this.deselectRoadTile();

    const defCoords = this.generateDefaultRoadCoordinates();
    defCoords.forEach(p => {
      this.createSingleRoadTileMesh(p.x, p.z);
    });

    this.saveFarmLayout();
    sounds.levelUp();
    confetti({ particleCount: 40, spread: 70, origin: { x: 0.5, y: 0.5 } });
    this.particles.addFloatingText('تمت استعادة شبكة الطرق الأصلية بنجاح! 📐', 0, 25, '#ffd166', 22);
  }

  toggleRoadEditMode(forceState) {
    if (forceState !== undefined) {
      this.isRoadEditMode = forceState;
    } else {
      this.isRoadEditMode = !this.isRoadEditMode;
    }

    if (this.isRoadEditMode) {
      if (this.isPlacingNewPlotMode) this.stopPlacingNewPlotMode();
      if (this.isMovingPlotMode) this.toggleMovePlotMode(false);
      this.roadEditTool = 'move';
    } else {
      this.deselectRoadTile();
    }

    // Helper highlight & ghost boxes
    if (!this.roadHighlightBox) {
      const geo = new THREE.BoxGeometry(2.05, 0.12, 2.05);
      const mat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true });
      this.roadHighlightBox = new THREE.Mesh(geo, mat);
      this.roadHighlightBox.userData = { isHelper: true };
      this.roadHighlightBox.raycast = () => {};
      this.scene.add(this.roadHighlightBox);
    }
    if (!this.roadGhostBox) {
      const geo = new THREE.BoxGeometry(2.0, 0.08, 2.0);
      const mat = new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.45 });
      this.roadGhostBox = new THREE.Mesh(geo, mat);
      this.roadGhostBox.userData = { isHelper: true };
      this.roadGhostBox.raycast = () => {};
      this.scene.add(this.roadGhostBox);
    }

    const banner = document.getElementById('road-edit-mode-banner');
    const btn = document.getElementById('btn-action-road-mode');

    if (this.isRoadEditMode) {
      if (banner) banner.classList.remove('hidden');
      if (btn) btn.classList.add('active');
      this.setRoadEditTool(this.roadEditTool || 'move');
      sounds.click();
      this.particles.addFloatingText('🛣️ وضع تعديل الطريق: اختر أداة (نقل، مسح، أو رصف)', 0, 25, '#fbbf24', 20);
    } else {
      if (banner) banner.classList.add('hidden');
      if (btn) btn.classList.remove('active');
      if (this.roadHighlightBox) this.roadHighlightBox.visible = false;
      if (this.roadGhostBox) this.roadGhostBox.visible = false;
      this.saveFarmLayout();
      sounds.pop();
      this.particles.addFloatingText('تم حفظ تخطيط الطرق بنجاح ✓', 0, 25, '#22c55e', 18);
    }
  }

  setRoadEditTool(tool) {
    this.roadEditTool = tool;
    this.deselectRoadTile();

    document.querySelectorAll('.road-tool-btn').forEach(btn => {
      if (btn.getAttribute('data-tool') === tool) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const hint = document.getElementById('road-edit-status-hint');
    if (hint) {
      if (tool === 'move') hint.textContent = '✋ انقر على أي مربع طريق لاختياره، ثم انقر في المكان الجديد لنقله';
      else if (tool === 'erase') hint.textContent = '🧹 انقر على أي مربع طريق لمسحه فوراً وإعادة العشب الأخضر';
      else if (tool === 'add') hint.textContent = '➕ انقر على أي مساحة خضراء لإضافة ورصف مربع طريق جديد';
    }
    sounds.click();
  }

  selectRoadTileToMove(tileGroup) {
    if (this.selectedRoadTile === tileGroup) {
      this.deselectRoadTile();
      sounds.pop();
      return;
    }
    if (this.selectedRoadTile) {
      this.selectedRoadTile.position.y = 0.02;
    }
    this.selectedRoadTile = tileGroup;
    tileGroup.position.y = 0.35; // Elevate to indicate selection

    sounds.click();
    this.particles.addFloatingText('📍 تم تحديد المربع: انقر في أي مكان جديد لنقله', tileGroup.position.x, 25, '#fbbf24', 18);
  }

  deselectRoadTile() {
    if (this.selectedRoadTile) {
      this.selectedRoadTile.position.y = 0.02;
      this.selectedRoadTile = null;
    }
    if (this.roadGhostBox) this.roadGhostBox.visible = false;
    if (this.roadHighlightBox) this.roadHighlightBox.visible = false;
  }

  updateRoadEditHover() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);

    let hoveredTile = null;
    for (const h of hits) {
      const obj = h.object;
      if (obj === this.roadGhostBox || obj === this.roadHighlightBox || obj?.userData?.isHelper) continue;
      if (obj.userData?.rootRoadTile) {
        hoveredTile = obj.userData.rootRoadTile;
        break;
      }
      if (obj.userData?.isRoadTile) {
        hoveredTile = obj;
        break;
      }
    }

    if (this.roadEditTool === 'erase') {
      if (this.roadGhostBox) this.roadGhostBox.visible = false;
      if (hoveredTile && this.roadHighlightBox) {
        this.roadHighlightBox.position.set(hoveredTile.position.x, 0.05, hoveredTile.position.z);
        this.roadHighlightBox.material.color.setHex(0xef4444); // Red outline for erase
        this.roadHighlightBox.visible = true;
      } else if (this.roadHighlightBox) {
        this.roadHighlightBox.visible = false;
      }
      return;
    }

    if (this.roadEditTool === 'move') {
      if (this.selectedRoadTile) {
        if (this.roadHighlightBox) this.roadHighlightBox.visible = false;
        if (this.planeIntersection && this.roadGhostBox) {
          const gx = Math.round(this.planeIntersection.x);
          const gz = Math.round(this.planeIntersection.z);
          const snappedX = Math.round((gx - 1) / 2) * 2 + 1;
          const snappedZ = Math.round((gz - 1) / 2) * 2 + 1;
          this.roadGhostBox.position.set(snappedX, 0.04, snappedZ);
          this.roadGhostBox.material.color.setHex(0x22c55e);
          this.roadGhostBox.visible = true;
        }
      } else {
        if (this.roadGhostBox) this.roadGhostBox.visible = false;
        if (hoveredTile && this.roadHighlightBox) {
          this.roadHighlightBox.position.set(hoveredTile.position.x, 0.05, hoveredTile.position.z);
          this.roadHighlightBox.material.color.setHex(0xf59e0b);
          this.roadHighlightBox.visible = true;
        } else if (this.roadHighlightBox) {
          this.roadHighlightBox.visible = false;
        }
      }
      return;
    }

    if (this.roadEditTool === 'add') {
      if (this.roadHighlightBox) this.roadHighlightBox.visible = false;
      if (this.planeIntersection && this.roadGhostBox) {
        const gx = Math.round(this.planeIntersection.x);
        const gz = Math.round(this.planeIntersection.z);
        const snappedX = Math.round((gx - 1) / 2) * 2 + 1;
        const snappedZ = Math.round((gz - 1) / 2) * 2 + 1;
        this.roadGhostBox.position.set(snappedX, 0.04, snappedZ);
        this.roadGhostBox.material.color.setHex(0x22c55e);
        this.roadGhostBox.visible = true;
      }
      return;
    }
  }

  handleRoadEditClick(e) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);

    let clickedRoadTile = null;
    for (const h of hits) {
      const obj = h.object;
      if (obj === this.roadGhostBox || obj === this.roadHighlightBox || obj?.userData?.isHelper) continue;
      if (obj.userData?.rootRoadTile) {
        clickedRoadTile = obj.userData.rootRoadTile;
        break;
      }
      if (obj.userData?.isRoadTile) {
        clickedRoadTile = obj;
        break;
      }
    }

    if (this.roadEditTool === 'erase') {
      if (clickedRoadTile) {
        this.deleteRoadTile(clickedRoadTile.userData.key);
      }
      return;
    }

    if (this.roadEditTool === 'add') {
      const groundHits = this.raycaster.intersectObject(this.groundMesh);
      if (groundHits.length > 0) {
        const pt = groundHits[0].point;
        const gx = Math.round(pt.x);
        const gz = Math.round(pt.z);
        const snappedX = Math.round((gx - 1) / 2) * 2 + 1;
        const snappedZ = Math.round((gz - 1) / 2) * 2 + 1;
        this.addRoadTile(snappedX, snappedZ);
      }
      return;
    }

    if (this.roadEditTool === 'move') {
      if (this.selectedRoadTile) {
        const groundHits = this.raycaster.intersectObject(this.groundMesh);
        if (groundHits.length > 0) {
          const pt = groundHits[0].point;
          const gx = Math.round(pt.x);
          const gz = Math.round(pt.z);
          const snappedX = Math.round((gx - 1) / 2) * 2 + 1;
          const snappedZ = Math.round((gz - 1) / 2) * 2 + 1;
          this.moveRoadTile(this.selectedRoadTile.userData.key, snappedX, snappedZ);
          this.deselectRoadTile();
        }
      } else {
        if (clickedRoadTile) {
          this.selectRoadTileToMove(clickedRoadTile);
        }
      }
    }
  }

  addCustomRoadTile(gridX, gridZ) {
    const key = `${gridX},${gridZ}`;
    if (this.customRoadTiles.has(key)) return;

    if (this.customWaterTiles.has(key)) {
      this.removeCustomTile(gridX, gridZ);
    }

    const roadGeo = new THREE.BoxGeometry(2.1, 0.08, 2.1);
    const roadMat = new THREE.MeshLambertMaterial({
      map: this.textures.cobblestone,
      color: '#dfa552'
    });
    const tile = new THREE.Mesh(roadGeo, roadMat);
    tile.position.set(gridX, 0.03, gridZ);
    tile.receiveShadow = true;

    const borderMat = new THREE.MeshLambertMaterial({ color: '#8c5a24' });
    const border = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.06, 2.2), borderMat);
    border.position.set(gridX, 0.01, gridZ);
    border.receiveShadow = true;

    const group = new THREE.Group();
    group.add(border);
    group.add(tile);
    group.userData = { isCustomRoad: true, key, gridX, gridZ };

    this.roadsGroup.add(group);
    this.customRoadTiles.set(key, group);
    this.saveFarmLayout();
  }

  addCustomWaterTile(gridX, gridZ) {
    const key = `${gridX},${gridZ}`;
    if (this.customWaterTiles.has(key)) return;

    if (this.customRoadTiles.has(key)) {
      this.removeCustomTile(gridX, gridZ);
    }

    const group = new THREE.Group();
    group.position.set(gridX, 0, gridZ);

    const rimMat = new THREE.MeshLambertMaterial({ color: '#dfb06f' });
    const rim = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.06, 2.3), rimMat);
    rim.position.y = 0.01;
    group.add(rim);

    const waterGeo = new THREE.PlaneGeometry(2.1, 2.1, 4, 4);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMat = new THREE.MeshStandardMaterial({
      color: '#0284c7',
      roughness: 0.08,
      metalness: 0.4,
      transparent: true,
      opacity: 0.85
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.y = 0.04;
    group.add(waterMesh);

    // Baby fish swimming inside custom pond
    const tinyFish = this.createFishMesh({
      isBig: false,
      bodyColor: '#f97316',
      scale: 0.35,
      speed: 1.2,
      tailSpeed: 9.0,
      depth: -0.05
    });
    group.add(tinyFish.group);
    if (this.lakeFish) this.lakeFish.push(tinyFish);

    group.userData = { isCustomWater: true, key, gridX, gridZ };
    this.customWatersGroup.add(group);
    this.customWaterTiles.set(key, group);
    this.saveFarmLayout();
  }

  removeCustomTile(gridX, gridZ) {
    const key = `${gridX},${gridZ}`;
    if (this.customRoadTiles.has(key)) {
      const mesh = this.customRoadTiles.get(key);
      this.roadsGroup.remove(mesh);
      this.customRoadTiles.delete(key);
    }
    if (this.customWaterTiles.has(key)) {
      const mesh = this.customWaterTiles.get(key);
      this.customWatersGroup.remove(mesh);
      this.customWaterTiles.delete(key);
    }
    this.saveFarmLayout();
  }

  // ==========================================================
  // CENTRAL FARMING AREA: Exactly 20 plots at Start (Expandable)
  // ==========================================================
  createCentralFarmingPlots() {
    this.plots = [];
    this.plotObjects = new Map(); // key -> 3D Mesh
    this.crops = new Map();       // key -> 3D Crop Group
    this.fieldBedsGroup = new THREE.Group();
    this.scene.add(this.fieldBedsGroup);

    this.rebuildFarmingPlots();
  }

  // Calculate coordinates for farming plots based on selected layout style
  // Strictly on lush green meadow lawns — never touching roads or crossroads!
  calculatePlotCoordinates(layout, count = 20) {
    const coords = [];
    const spacing = 2.6; // Clean spacing between plot centers

    if (layout === 'twin_blocks') {
      // ----------------------------------------------------
      // Twin Blocks (المصطبتان المتقابلتان):
      // Symmetrical West Field & East Field on the green meadow lawn
      // North Field: Z in [-14.6, -4.2] | South Field: Z in [4.2, 14.6]
      // ----------------------------------------------------
      const half = Math.ceil(count / 2);
      const cols = half > 20 ? 4 : (half > 10 ? 3 : 2);
      const rows = Math.min(5, Math.ceil(half / cols));

      let added = 0;
      // Pass 1: North green meadow quadrants (Z <= -4.2, completely clear of East-West road)
      for (let r = 0; r < rows; r++) {
        const northZ = -4.2 - r * spacing;
        for (let c = 0; c < cols; c++) {
          const eastX = 4.2 + c * spacing;
          const westX = -4.2 - c * spacing;

          if (added < count) {
            coords.push({ col: c + 1, row: -(r + 1), posX: eastX, posZ: northZ });
            added++;
          }
          if (added < count) {
            coords.push({ col: -(c + 1), row: -(r + 1), posX: westX, posZ: northZ });
            added++;
          }
        }
      }

      // Pass 2: South green meadow quadrants (Z >= 4.2) for expansions beyond 20 plots
      if (added < count) {
        for (let r = 0; r < rows; r++) {
          const southZ = 4.2 + r * spacing;
          for (let c = 0; c < cols; c++) {
            const eastX = 4.2 + c * spacing;
            const westX = -4.2 - c * spacing;

            if (added < count) {
              coords.push({ col: c + 1, row: r + 1, posX: eastX, posZ: southZ });
              added++;
            }
            if (added < count) {
              coords.push({ col: -(c + 1), row: r + 1, posX: westX, posZ: southZ });
              added++;
            }
          }
        }
      }
    } else if (layout === 'quad_blocks') {
      // ----------------------------------------------------
      // Quad Blocks (المربعات الأربعة):
      // 4 Quadrants symmetrically arranged around the Grand Crossroads on green lawns
      // ----------------------------------------------------
      const perQuad = Math.ceil(count / 4);
      let cols = 3, rows = 2;
      if (perQuad > 25) { cols = 5; rows = Math.ceil(perQuad / cols); }
      else if (perQuad > 20) { cols = 5; rows = 5; }
      else if (perQuad > 15) { cols = 5; rows = 4; }
      else if (perQuad > 10) { cols = 5; rows = 3; }
      else if (perQuad > 5)  { cols = 5; rows = 2; }
      else { cols = 3; rows = 2; }

      const quads = [
        { signX: 1,  signZ: -1 }, // North-East
        { signX: -1, signZ: -1 }, // North-West
        { signX: 1,  signZ: 1 },  // South-East
        { signX: -1, signZ: 1 }   // South-West
      ];

      let added = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          for (let q = 0; q < 4; q++) {
            if (added >= count) break;
            const targetQ = quads[q];
            const posX = targetQ.signX * (4.2 + c * spacing);
            const posZ = targetQ.signZ * (4.2 + r * spacing);
            const colIdx = targetQ.signX * (c + 1);
            const rowIdx = targetQ.signZ * (r + 1);
            coords.push({ col: colIdx, row: rowIdx, posX, posZ });
            added++;
          }
        }
      }
    } else if (layout === 'long_terraces') {
      // ----------------------------------------------------
      // Long Terraces (المدرجات الطولية الممتدة):
      // Long parallel columns running along the green lawn
      // ----------------------------------------------------
      const half = Math.ceil(count / 2);
      const rows = Math.min(5, Math.max(3, Math.ceil(half / 2)));
      const cols = Math.ceil(half / rows);

      let added = 0;
      for (let c = 0; c < cols; c++) {
        const eastX = 4.2 + c * spacing;
        const westX = -4.2 - c * spacing;
        for (let r = 0; r < rows; r++) {
          const z = -4.2 - r * spacing;
          if (added < count) {
            coords.push({ col: c + 1, row: -(r + 1), posX: eastX, posZ: z });
            added++;
          }
          if (added < count) {
            coords.push({ col: -(c + 1), row: -(r + 1), posX: westX, posZ: z });
            added++;
          }
        }
      }
    } else {
      // ----------------------------------------------------
      // Default: grid_5x4 (الشبكة المنتظمة):
      // Classic 5 columns x 4 rows garden blocks placed strictly on green lawns
      // ----------------------------------------------------
      const blocks = [
        // Block 1: Northeast Lawn (Z <= -4.2)
        { baseX: 4.2,  baseZ: -8.2, signX: 1 },
        // Block 2: Northwest Lawn (Z <= -4.2)
        { baseX: -4.2, baseZ: -8.2, signX: -1 },
        // Block 3: Southeast Lawn (Z >= 4.2)
        { baseX: 4.2,  baseZ: 8.2, signX: 1 },
        // Block 4: Southwest Lawn (Z >= 4.2)
        { baseX: -4.2, baseZ: 8.2, signX: -1 }
      ];

      const blockCount = Math.ceil(count / 20);
      let added = 0;

      for (let b = 0; b < Math.max(1, blockCount); b++) {
        const blk = blocks[b % blocks.length];

        for (let r = 0; r < 4; r++) {
          const z = blk.baseZ + (r - 1.5) * spacing;
          for (let c = 0; c < 5; c++) {
            if (added >= count) break;
            const x = blk.baseX + blk.signX * (c * spacing);
            const colIdx = blk.signX * (c + 1) + (b * 10);
            const rowIdx = r + 1 + (b * 10);
            coords.push({ col: colIdx, row: rowIdx, posX: x, posZ: z });
            added++;
          }
        }
      }
    }

    return coords.slice(0, count);
  }

  createFieldBedMeshes(coords) {
    // Intentionally empty: removed large dark brown ground slab so green meadow lawn stays clean and pristine.
    // Each plot is an independent raised wooden planter box.
  }

  createSinglePlotMesh(key, posX, posZ, state = 'grass', col = 0, row = 0) {
    const tileSize = 2.4;
    let soilMat = state === 'watered' ? this.soilWetMat : (state === 'tilled' ? this.soilDryMat : this.soilGrassMat);

    // Root container group for this plot
    const plotGroup = new THREE.Group();
    plotGroup.position.set(posX, 0, posZ);

    // A. Outer wooden container box (Honey oak timber from reference image)
    const outerBoxGeo = new THREE.BoxGeometry(tileSize, 0.28, tileSize);
    const outerBox = new THREE.Mesh(outerBoxGeo, this.woodBoxMat);
    outerBox.position.set(0, 0.14, 0);
    outerBox.receiveShadow = true;
    outerBox.castShadow = true;
    plotGroup.add(outerBox);

    // B. Recessed inner soil mound/plate
    const soilGeo = new THREE.BoxGeometry(tileSize - 0.36, 0.14, tileSize - 0.36);
    const soilMesh = new THREE.Mesh(soilGeo, soilMat);
    soilMesh.position.set(0, 0.19, 0);
    soilMesh.receiveShadow = true;
    plotGroup.add(soilMesh);

    // C. Top wooden rim framing the recessed soil
    const rimHeight = 0.08;
    const rimThick = 0.18;
    const rimPlanks = [
      { x: 0, z: -tileSize / 2 + rimThick / 2, sx: tileSize, sz: rimThick },
      { x: 0, z: tileSize / 2 - rimThick / 2, sx: tileSize, sz: rimThick },
      { x: -tileSize / 2 + rimThick / 2, z: 0, sx: rimThick, sz: tileSize - rimThick * 2 },
      { x: tileSize / 2 - rimThick / 2, z: 0, sx: rimThick, sz: tileSize - rimThick * 2 }
    ];
    rimPlanks.forEach(r => {
      const plank = new THREE.Mesh(new THREE.BoxGeometry(r.sx, rimHeight, r.sz), this.woodTrimMat);
      plank.position.set(r.x, 0.28, r.z);
      plank.castShadow = true;
      plank.receiveShadow = true;
      plotGroup.add(plank);
    });

    // D. 4 Corner wooden joint pegs
    const cornerPegGeo = new THREE.BoxGeometry(0.20, 0.34, 0.20);
    for (const cx of [-tileSize / 2 + 0.10, tileSize / 2 - 0.10]) {
      for (const cz of [-tileSize / 2 + 0.10, tileSize / 2 - 0.10]) {
        const peg = new THREE.Mesh(cornerPegGeo, this.pegMat);
        peg.position.set(cx, 0.17, cz);
        peg.castShadow = true;
        plotGroup.add(peg);
      }
    }

    // E. Furrows running across the soil bed
    const furrows = [];
    const furrowGeo = new THREE.CylinderGeometry(0.06, 0.06, tileSize - 0.48, 6);
    for (let f = -1; f <= 1; f++) {
      const furrow = new THREE.Mesh(furrowGeo, soilMat);
      furrow.rotation.z = Math.PI / 2;
      furrow.position.set(0, 0.26, f * 0.55);
      furrow.visible = (state === 'tilled' || state === 'watered');
      plotGroup.add(furrow);
      furrows.push(furrow);
    }

    plotGroup.userData = {
      isPlot: true,
      isPlotRoot: true,
      plotGroup,
      col,
      row,
      key,
      state,
      furrows,
      soilMesh,
      outerBox
    };

    // Raycast back-references: all child meshes point directly to root plotGroup
    plotGroup.traverse((child) => {
      if (child !== plotGroup) {
        child.userData = { isPlotPart: true, rootPlot: plotGroup };
      }
    });

    this.scene.add(plotGroup);
    this.plotObjects.set(key, plotGroup);

    // If a crop was planted on this key or plot index, reposition it on top of the soil bed
    if (this.crops && this.crops.has(key)) {
      const crop = this.crops.get(key);
      if (crop && crop.group) {
        crop.group.position.set(posX, 0.26, posZ);
      }
    }

    return plotGroup;
  }

  setLayout(layoutType) {
    this.farmingPlotLayout = layoutType;
    if (this.state) {
      this.state.farmingPlotLayout = layoutType;
      this.state.save();
    }
    this.rebuildFarmingPlots();
  }

  rebuildFarmingPlots() {
    // Remove existing plot meshes
    for (const mesh of this.plotObjects.values()) {
      this.scene.remove(mesh);
    }
    this.plotObjects.clear();

    // Clear old field bed meshes
    if (this.fieldBedsGroup) {
      while (this.fieldBedsGroup.children.length > 0) {
        const obj = this.fieldBedsGroup.children[0];
        this.fieldBedsGroup.remove(obj);
      }
    } else {
      this.fieldBedsGroup = new THREE.Group();
      this.scene.add(this.fieldBedsGroup);
    }

    // Planter Box and Soil Materials (Matching the isometric wooden raised bed in the reference image)
    this.woodBoxMat = new THREE.MeshLambertMaterial({ color: '#c28b50' }); // Warm honey oak timber
    this.woodTrimMat = new THREE.MeshLambertMaterial({ color: '#965b25' }); // Darker timber rim/posts
    this.pegMat = new THREE.MeshLambertMaterial({ color: '#784315' }); // Corner peg accents
    this.soilDryMat = new THREE.MeshLambertMaterial({ color: '#3d1f0a' }); // Rich dark loam fertile soil
    this.soilWetMat = new THREE.MeshStandardMaterial({
      color: '#1f0d03',
      roughness: 0.18,
      metalness: 0.12
    }); // Moist glossy watered soil
    this.soilGrassMat = new THREE.MeshLambertMaterial({ color: '#4a8c2a' }); // Grassy untilled turf

    // Active unlocked plots according to selected layout
    const count = this.unlockedPlotCount || 20;
    const layout = this.farmingPlotLayout || 'twin_blocks';
    const coords = this.calculatePlotCoordinates(layout, count);

    // Sanitize any legacy saved customPlotPositions that might have been on roads
    if (this.state && this.state.customPlotPositions) {
      let layoutDirty = false;
      for (const k of Object.keys(this.state.customPlotPositions)) {
        const pos = this.state.customPlotPositions[k];
        if (pos && (Math.abs(pos.posX) < 3.45 || Math.abs(pos.posZ) < 3.25 || pos.posZ > 15.2 || pos.posZ < -18.6)) {
          delete this.state.customPlotPositions[k];
          layoutDirty = true;
        }
      }
      if (layoutDirty && typeof this.saveFarmLayout === 'function') {
        this.saveFarmLayout();
      }
    }

    // 1. Build initial layout garden plots
    coords.forEach((p, idx) => {
      const key = `${p.col},${p.row}`;
      let posX = p.posX;
      let posZ = p.posZ;
      if (this.state && this.state.customPlotPositions && this.state.customPlotPositions[key]) {
        const saved = this.state.customPlotPositions[key];
        if (this.canPlacePlotAt(saved.posX, saved.posZ, key)) {
          posX = saved.posX;
          posZ = saved.posZ;
        } else {
          delete this.state.customPlotPositions[key];
        }
      }
      let state = idx < 4 ? 'tilled' : 'grass';
      this.createSinglePlotMesh(key, posX, posZ, state, p.col, p.row);
    });

    // 2. Build any additional custom-placed plots from state
    if (this.state && this.state.customPlotPositions) {
      for (const [key, pos] of Object.entries(this.state.customPlotPositions)) {
        if (!this.plotObjects.has(key) && pos && this.canPlacePlotAt(pos.posX, pos.posZ, key)) {
          this.createSinglePlotMesh(key, pos.posX, pos.posZ, 'grass');
        }
      }
    }

    // Central Expansion Signpost
    this.createExpansionSignpost();
  }

  createExpansionSignpost() {
    if (this.expansionSign) {
      this.scene.remove(this.expansionSign);
      this.expansionSign = null;
    }

    const group = new THREE.Group();

    // Wooden post
    const postGeo = new THREE.CylinderGeometry(0.12, 0.12, 2.2, 8);
    const postMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const post = new THREE.Mesh(postGeo, postMat);
    post.position.y = 1.1;
    post.castShadow = true;
    group.add(post);

    // Wooden board
    const boardGeo = new THREE.BoxGeometry(2.4, 1.2, 0.2);
    const boardMat = new THREE.MeshLambertMaterial({ color: '#b45309' });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.set(0, 1.8, 0);
    board.castShadow = true;
    group.add(board);

    // Glowing Expansion Icon (🌾+)
    const starGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const starMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
    const star = new THREE.Mesh(starGeo, starMat);
    star.position.set(0, 2.7, 0);
    group.add(star);

    // Place on the green meadow lawn corner clear of the central crossroads
    group.position.set(3.8, 0, 3.8);
    group.rotation.y = -Math.PI / 4;
    group.userData = { isExpansionSign: true };
    group.traverse((c) => {
      if (c !== group) c.userData = group.userData;
    });
    this.scene.add(group);
    this.expansionSign = group;
  }

  // Expand farming plots: opens single-plot placement mode (50 Gold each, unlimited quantity)
  expandFarmingPlots() {
    this.startPlacingNewPlotMode();
  }

  startPlacingNewPlotMode() {
    this.isPlacingNewPlotMode = true;
    this.isMovingPlotMode = false;
    if (this.isRoadEditMode) this.toggleRoadEditMode(false);
    this.deselectPlotToMove();

    if (!this.plotPlacementGhost) {
      const tileSize = 2.4;
      const ghostGeo = new THREE.BoxGeometry(tileSize, 0.35, tileSize);
      const ghostMat = new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.45
      });
      this.plotPlacementGhost = new THREE.Mesh(ghostGeo, ghostMat);
      this.plotPlacementGhost.userData = { isHelper: true };
      this.plotPlacementGhost.raycast = () => {};
      this.scene.add(this.plotPlacementGhost);
    }
    this.plotPlacementGhost.visible = true;

    const banner = document.getElementById('plot-place-mode-banner');
    if (banner) banner.classList.remove('hidden');
    const moveBanner = document.getElementById('plot-move-mode-banner');
    if (moveBanner) moveBanner.classList.add('hidden');
    const btn = document.getElementById('btn-action-expand');
    if (btn) btn.classList.add('active');

    sounds.click();
    this.particles.addFloatingText('🪵 وضع إضافة الأحواض: انقر في المكان المراد لوضع حوض (50 ذهب)', 0, 25, '#38bdf8', 20);
  }

  stopPlacingNewPlotMode() {
    this.isPlacingNewPlotMode = false;
    if (this.plotPlacementGhost) {
      this.plotPlacementGhost.visible = false;
    }
    const banner = document.getElementById('plot-place-mode-banner');
    if (banner) banner.classList.add('hidden');
    const btn = document.getElementById('btn-action-expand');
    if (btn) btn.classList.remove('active');
    sounds.pop();
  }

  togglePlacingNewPlotMode() {
    if (this.isPlacingNewPlotMode) {
      this.stopPlacingNewPlotMode();
    } else {
      this.startPlacingNewPlotMode();
    }
  }

  buyAndPlacePlotAt(gx, gz) {
    const cost = 50;
    if (this.state.coins < cost) {
      sounds.click();
      this.particles.addFloatingText(`الذهب غير كافٍ! الحوض بـ 50 ذهب 🪙`, gx, 25, '#ef4444', 20);
      return false;
    }

    const newKey = `plot_custom_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    if (!this.canPlacePlotAt(gx, gz, newKey)) {
      sounds.click();
      this.particles.addFloatingText('⚠️ لا يمكن وضع الحوض هنا! اختر مكاناً خالياً على العشب', gx, 25, '#ef4444', 18);
      return false;
    }

    // Deduct 50 coins
    this.state.useCoins(cost);

    // Save position in state
    if (typeof this.state.setPlotPosition === 'function') {
      this.state.setPlotPosition(newKey, gx, gz);
    }
    this.unlockedPlotCount = (this.unlockedPlotCount || 20) + 1;
    if (this.state) {
      this.state.unlockedPlotCount = this.unlockedPlotCount;
      this.state.save();
    }

    // Create 3D plot mesh immediately
    this.createSinglePlotMesh(newKey, gx, gz, 'grass');

    sounds.till();
    confetti({ particleCount: 30, spread: 60, origin: { x: 0.5, y: 0.5 } });
    this.particles.addDirtBurst(gx, gz);
    this.particles.addFloatingText(`+1 حوض زراعي جديد! (-50 G) 🪵`, gx, 25, '#4ade80', 20);

    return true;
  }

  // Smoothly re-centers the camera onto the farm center
  recenterCamera() {
    if (!this.cameraFocusPoint) return;
    sounds.click();
    gsap.to(this.cameraFocusPoint, {
      x: 0,
      z: 0,
      duration: 0.65,
      ease: 'power2.out'
    });
    this.panVelocity.set(0, 0);
  }

  // Autonomous Farmer AI Setup (Roams freely and randomly without player control)
  initFarmerAutonomousAI() {
    this.farmerAI = {
      state: 'IDLE',
      timer: 2.2,
      targetX: 0,
      targetZ: 0,
      speed: 3.2
    };
  }

  pickRandomFarmerTarget() {
    const candidates = [];

    // 1. Central open farm zones
    for (let i = 0; i < 6; i++) {
      candidates.push({
        x: (Math.random() - 0.5) * 34,
        z: (Math.random() - 0.5) * 30
      });
    }

    // 2. Near plots if any exist
    if (this.plotObjects && this.plotObjects.size > 0) {
      const plots = Array.from(this.plotObjects.values());
      const randomPlot = plots[Math.floor(Math.random() * plots.length)];
      if (randomPlot) {
        const angle = Math.random() * Math.PI * 2;
        candidates.push({
          x: randomPlot.position.x + Math.cos(angle) * 1.8,
          z: randomPlot.position.z + Math.sin(angle) * 1.8
        });
      }
    }

    // 3. Near roads if any exist
    if (this.roadTiles && this.roadTiles.size > 0) {
      const roads = Array.from(this.roadTiles.values());
      const randomRoad = roads[Math.floor(Math.random() * roads.length)];
      if (randomRoad) {
        candidates.push({
          x: randomRoad.position.x + (Math.random() - 0.5) * 0.8,
          z: randomRoad.position.z + (Math.random() - 0.5) * 0.8
        });
      }
    }

    // Filter candidate targets through collision detection
    for (let i = candidates.length - 1; i >= 0; i--) {
      const c = candidates[i];
      if (!this.isBlocked(c.x, c.z, 0.6)) {
        return c;
      }
    }

    return { x: 0, z: 0 };
  }

  // Character Dialogue Bubble & Farming Atmosphere Speech
  initFarmerSpeech() {
    this.speechBoxEl = document.getElementById('farmer-speech-box');
    this.speechTextEl = document.getElementById('farmer-speech-text');
    this.speechTimer = 3.5; // First thought appears after 3.5 seconds
    this.speechDuration = 0;
    this.isSpeechVisible = false;

    this.farmQuotes = [
      // أجواء المزرعة والطبيعة والطقس
      "ما أجمل نسيم الصباح العليل في مروجنا الخضراء! 🌾",
      "أشعر أن هذا الموسم سيكون مليئاً بالخيرات والبركة 🌻",
      "التربة خصبة ورائحة الأرض تملأ القلب راحة وانتعاشاً 🌿",
      "سماء صافية وهواء نقي.. لا شيء يضاهي العيش في الريف! ☀️",
      "يا له من يوم مشرق ومناسب للعمل والإنجاز في الحقل! 🚜",
      "رائحة الأرض بعد السقي بالماء تنعش الروح والوجدان 💧",
      "الهدوء هنا والابتعاد عن صخب المدينة نعمة لا تُقدّر بثمن 🍃",
      "كوب شاي دافئ بالنعناع بعد جولة في الحقول يجدد النشاط ☕",
      "سبحان الخالق، انظر كيف تخرج الثمار اليانعة من حبة صغيرة! 🌱",
      "الشمس تشرق بدفء وحنان على محاصيلنا المباركة 🌅",

      // المحاصيل والزراعة
      "حان وقت تفقد شتلات الطماطم والذرة ورعايتها بعناية 🍅",
      "الري المنتظم في الصباح الباكر سر المحصول السليم والوفير 💧",
      "يا ترى، أي نوع من المحاصيل سنزرع في الأحواض الجديدة؟ 🤔",
      "ثمار الفراولة تبدو كأنها حبات ياقوت حمراء لامعة وشهية! 🍓",
      "سنابل القمح تتمايل بلطف مع النسيم، منظر يسر الخاطر 🌾",
      "البذور الجيدة والتربة الطيبة تصنع أروع المحاصيل دائماً 🌱",
      "الحصاد الوفير ينتظر دائماً من يعتني بأرضه بحب وإخلاص! 🌽",
      "انظر كم كبرت النباتات منذ الأمس، تبارك الله ما أحلاها! 🌿",
      "الأرض تعطي بسخاء كلما أعطيتها من وقتك وحسن رعايتك 🌻",

      // الحيوانات والبهجة
      "أحب الاستيقاظ على أصوات الدجاج وزقزقة الطيور في الصباح 🐔",
      "سأمر على الحظيرة لأطمئن على الخراف والأبقار والخيول 🐑",
      "الأرانب تقفز بسعادة وتبحث عن حبات الجزر الطازجة 🐰",
      "حيوانات المزرعة تشعر بالمحبة حين نطعمها ونداعبها برفق 🐄",
      "صوت خرير الماء في البحيرة يبعث على الراحة والسكينة 🐟",
      "البط يسبح بمرح في البحيرة، ما ألطف هذا المنظر الجميل! 🦆",

      // التشجيع والفخر بالمزرعة
      "مزرعتنا أصبحت أجمل وأوسع بفضل اهتمامك المستمر وعملك الدؤوب! ✨",
      "سمعت أن التجار في السوق متشوقون لشراء خضرواتنا الطازجة اليوم 💰",
      "كل محصول نحصده يقربنا من خطوة جديدة لتوسيع المزرعة 🏆",
      "العمل في الأرض بركة وسعادة حقيقية لا تضاهيها أي وظيفة 🌾",
      "الصبر والعمل الدؤوب يصنعان أجمل بستان على الإطلاق 🌸"
    ];
  }

  showFarmerSpeech(customText) {
    if (!this.speechBoxEl || !this.speechTextEl) {
      this.speechBoxEl = document.getElementById('farmer-speech-box');
      this.speechTextEl = document.getElementById('farmer-speech-text');
    }
    if (!this.speechBoxEl || !this.speechTextEl) return;

    const quote = customText || this.farmQuotes[Math.floor(Math.random() * this.farmQuotes.length)];
    this.speechTextEl.textContent = quote;
    this.speechBoxEl.classList.remove('hidden');
    this.speechBoxEl.classList.add('visible');
    this.isSpeechVisible = true;
    this.speechDuration = 5.0; // display for 5.0 seconds

    if (sounds.pop) sounds.pop();
  }

  hideFarmerSpeech() {
    if (!this.speechBoxEl) return;
    this.speechBoxEl.classList.remove('visible');
    this.speechBoxEl.classList.add('hidden');
    this.isSpeechVisible = false;
    this.speechDuration = 0;
  }

  updateFarmerSpeech(dt) {
    if (this.isSpeechVisible) {
      this.speechDuration -= dt;
      if (this.speechDuration <= 0) {
        this.hideFarmerSpeech();
        this.speechTimer = 9.0 + Math.random() * 8.0; // Next quote in 9-17s
      }
    } else {
      this.speechTimer -= dt;
      if (this.speechTimer <= 0) {
        this.showFarmerSpeech();
      }
    }

    // Position speech bubble directly over the farmer's head in screen space
    if (this.isSpeechVisible && this.speechBoxEl && this.farmerGroup) {
      const headWorldPos = new THREE.Vector3(
        this.farmerGroup.position.x,
        this.farmerGroup.position.y + 2.5,
        this.farmerGroup.position.z
      );
      headWorldPos.project(this.camera);

      // Check if behind camera
      if (headWorldPos.z > 1.0) {
        this.speechBoxEl.style.display = 'none';
        return;
      }

      const screenX = (headWorldPos.x * 0.5 + 0.5) * window.innerWidth;
      const screenY = (-headWorldPos.y * 0.5 + 0.5) * window.innerHeight;

      // Check screen bounds
      if (screenX < -150 || screenX > window.innerWidth + 150 || screenY < -150 || screenY > window.innerHeight + 150) {
        this.speechBoxEl.style.display = 'none';
        return;
      }

      this.speechBoxEl.style.display = 'flex';
      this.speechBoxEl.style.left = `${screenX}px`;
      this.speechBoxEl.style.top = `${screenY}px`;
    }
  }

  // Tapping or clicking the farmer triggers joyful reaction & speech
  onFarmerClicked() {
    sounds.click();
    if (sounds.pop) sounds.pop();

    if (this.farmerGroup) {
      // 1. Spurt hearts
      this.particles.addHeart(this.farmerGroup.position.x, this.farmerGroup.position.z);

      // 2. Playful GSAP jump
      gsap.killTweensOf(this.farmerGroup.position);
      gsap.to(this.farmerGroup.position, {
        y: 0.45,
        duration: 0.16,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });

      // 3. Face the player/camera
      const targetAngle = this.isoAngle !== undefined ? this.isoAngle : 0;
      this.farmerGroup.rotation.y = targetAngle;
    }

    // 4. Cheerful speech
    const greetings = [
      "أهلاً بك يا صديقي! المزرعة بين يديك وبأفضل حال 👨‍🌾❤️",
      "يوم رائع وممتع نقضيه معاً بين الحقول والحيوانات! 🌾",
      "أنا أتجول لأطمئن على أحوال المزرعة، كل شيء على ما يرام! ✨",
      "مرحباً بك! هل حان وقت الحصاد أم السقي؟ 🥕",
      "أشعر بالسعادة لرؤية مزرعتنا تكبر وتزدهر كل يوم! 🌟"
    ];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    this.showFarmerSpeech(greeting);
  }

  isInteractiveObject(obj) {
    if (!obj || !obj.userData) return false;
    const d = obj.userData;
    return !!(d.isFarmer || d.rootFarmer || d.isPlot || d.isPlotPart || d.rootPlot || d.plotGroup || d.isLockTrigger || d.isExpansionSign || d.isPet || d.isTrough || d.isAnimal);
  }

  // ==========================================================
  // INTERACTIVE PLOT MOVING & ORGANIZING (Strict Collision Prevention)
  // ==========================================================
  toggleMovePlotMode(forceState) {
    if (forceState !== undefined) {
      this.isMovingPlotMode = forceState;
    } else {
      this.isMovingPlotMode = !this.isMovingPlotMode;
    }

    const banner = document.getElementById('plot-move-mode-banner');
    const btn = document.getElementById('btn-action-move-plot');

    if (this.isMovingPlotMode) {
      if (this.isPlacingNewPlotMode) this.stopPlacingNewPlotMode();
      if (this.isRoadEditMode) this.toggleRoadEditMode(false);
      if (banner) banner.classList.remove('hidden');
      if (btn) btn.classList.add('active');
      sounds.click();
      this.particles.addFloatingText('🪴 وضع نقل الأحواض: انقر على أي حوض لاختياره', 0, 25, '#34d399', 20);
    } else {
      this.deselectPlotToMove();
      if (banner) banner.classList.add('hidden');
      if (btn) btn.classList.remove('active');
      sounds.pop();
      this.particles.addFloatingText('تم حفظ مواضع الأحواض ✓', 0, 25, '#ffd166', 18);
    }
  }

  // ==========================================================
  // ISOMETRIC CAMERA & PIXEL ART CONTROLS
  // ==========================================================
  setPixelArtScale(size) {
    this.pixelSize = size;
    if (this.pixelPass) {
      if (size <= 1) {
        this.pixelPass.setPixelSize(1);
        this.pixelPass.normalEdgeStrength = 0.12;
        this.pixelPass.depthEdgeStrength = 0.18;
      } else if (size === 2) {
        this.pixelPass.setPixelSize(2);
        this.pixelPass.normalEdgeStrength = 0.28;
        this.pixelPass.depthEdgeStrength = 0.34;
      } else {
        this.pixelPass.setPixelSize(size);
        this.pixelPass.normalEdgeStrength = 0.35;
        this.pixelPass.depthEdgeStrength = 0.40;
      }
    }
    const label = size <= 1 ? 'عالي الدقة (HD)' : size === 2 ? 'بكسل متوازن فائق الوضوح (2x)' : `بكسل ريترو (${size}x)`;
    this.particles.addFloatingText(`👾 أسلوب العرض: ${label}`, 0, 25, '#38bdf8', 20);
    sounds.click();
    return this.pixelSize;
  }

  cyclePixelArtScale() {
    const scales = [2, 1, 3, 4];
    const currentIndex = scales.indexOf(this.pixelSize);
    const nextScale = scales[(currentIndex + 1) % scales.length];
    return this.setPixelArtScale(nextScale);
  }

  toggleCameraProjection() {
    this.isOrthographic = !this.isOrthographic;
    this.camera = this.isOrthographic ? this.orthoCamera : this.perspCamera;
    if (this.pixelPass) {
      this.pixelPass.camera = this.camera;
    }
    this.onResize();
    const modeName = this.isOrthographic ? 'مجسم أيزومترك 📐 (Orthographic)' : 'منظور حر 🎥 (Perspective)';
    this.particles.addFloatingText(`كاميرا: ${modeName}`, 0, 25, '#fbbf24', 20);
    sounds.click();
    return this.isOrthographic;
  }

  rotateIsometricAngle(direction = 1) {
    this.targetIsoAngle += (Math.PI / 2) * direction;
    gsap.to(this, {
      isoAngle: this.targetIsoAngle,
      duration: 0.45,
      ease: 'power2.out',
      onComplete: () => {
        sounds.click();
      }
    });
    this.particles.addFloatingText('🔄 تدوير الزاوية الأيزومترية 90°', 0, 25, '#a7f3d0', 18);
  }

  updateCameraFrustum() {
    const aspect = window.innerWidth / window.innerHeight;
    if (this.orthoCamera) {
      this.orthoCamera.left = -this.frustumSize * aspect / 2;
      this.orthoCamera.right = this.frustumSize * aspect / 2;
      this.orthoCamera.top = this.frustumSize / 2;
      this.orthoCamera.bottom = -this.frustumSize / 2;
      this.orthoCamera.updateProjectionMatrix();
    }
    if (this.perspCamera) {
      this.perspCamera.aspect = aspect;
      this.perspCamera.updateProjectionMatrix();
    }
  }

  selectPlotToMove(plotMesh) {
    if (!plotMesh) return;

    // Deselect if already selected
    if (this.selectedPlotToMove === plotMesh) {
      this.deselectPlotToMove();
      sounds.pop();
      return;
    }

    // Restore previously selected plot before selecting new one
    if (this.selectedPlotToMove) {
      this.selectedPlotToMove.position.y = 0;
      const oldKey = this.selectedPlotToMove.userData.key;
      const oldCrop = this.crops.get(oldKey);
      if (oldCrop && oldCrop.group) oldCrop.group.position.y = 0.26;
    }

    this.selectedPlotToMove = plotMesh;
    const key = plotMesh.userData.key;

    // Elevate plot slightly with animation to signal selection
    plotMesh.position.y = 0.35;

    // Lift crop if exists
    const crop = this.crops.get(key);
    if (crop && crop.group) {
      crop.group.position.y = 0.61;
    }

    if (this.plotMoveHighlight) {
      this.plotMoveHighlight.position.set(plotMesh.position.x, 0.40, plotMesh.position.z);
      this.plotMoveHighlight.visible = true;
    }

    sounds.click();
    this.particles.addFloatingText('اختر مكاناً خالياً لنقل الحوض 📍', plotMesh.position.x, 25, '#fbbf24', 18);
  }

  deselectPlotToMove() {
    if (this.selectedPlotToMove) {
      this.selectedPlotToMove.position.y = 0;
      const key = this.selectedPlotToMove.userData.key;
      const crop = this.crops.get(key);
      if (crop && crop.group) crop.group.position.y = 0.26;
      this.selectedPlotToMove = null;
    }
    if (this.plotGhostBox) this.plotGhostBox.visible = false;
    if (this.plotMoveHighlight) this.plotMoveHighlight.visible = false;
  }

  canPlacePlotAt(x, z, plotKey) {
    // 1. Strict overlap check with ALL other plots ("عشان ميجوش على بعض")
    // Each plot is 2.4 wide, so minimum center distance must be >= 2.38
    for (const [key, plot] of this.plotObjects.entries()) {
      if (key === plotKey) continue;
      const dist = Math.hypot(x - plot.position.x, z - plot.position.z);
      if (dist < 2.38) {
        return false; // Collision with another plot!
      }
    }

    // 2. Dynamic check against active modular road squares in this.roadTiles!
    // Since roads are modular square tiles (2.0m x 2.0m), erasing a road tile allows
    // farming on that cleared grass, while existing road tiles prevent planting on them.
    if (this.roadTiles && this.roadTiles.size > 0) {
      for (const road of this.roadTiles.values()) {
        const dx = Math.abs(x - road.position.x);
        const dz = Math.abs(z - road.position.z);
        if (dx < 2.1 && dz < 2.1) {
          return false; // Overlaps with an active road square tile!
        }
      }
    }

    // 4. Perimeter Animal Pens & Boardwalks check (Walkways at X = +/- 18.6m, width 2.8m)
    if (x < -16.0 || x > 16.0) {
      return false; // In animal pen area or perimeter boardwalk
    }

    // 5. Northern Promenade & Farmhouse Porch (Walkway at Z = -21m)
    if (z < -18.6) {
      return false; // In northern building or promenade area
    }

    // 6. Southern Lake & Fishing Beach (Walkway at Z = 17m)
    if (z > 15.2) {
      return false; // In southern lake area
    }

    // 7. Builder Mode Custom Road & Water Tiles
    if (this.customRoadTiles) {
      for (const tile of this.customRoadTiles.values()) {
        if (Math.hypot(x - tile.position.x, z - tile.position.z) < 2.2) {
          return false;
        }
      }
    }
    if (this.customWaterTiles) {
      for (const tile of this.customWaterTiles.values()) {
        if (Math.hypot(x - tile.position.x, z - tile.position.z) < 2.2) {
          return false;
        }
      }
    }

    // 8. Playable Farm Boundaries
    if (Math.abs(x) > 36 || Math.abs(z) > 34) {
      return false; // Outside farm boundary
    }

    return true;
  }

  moveSelectedPlotTo(targetX, targetZ) {
    if (!this.selectedPlotToMove) return;

    const key = this.selectedPlotToMove.userData.key;

    // Strict collision check
    if (!this.canPlacePlotAt(targetX, targetZ, key)) {
      sounds.click();
      this.particles.addFloatingText('⚠️ لا يمكن نقل الحوض هنا! اختر مكاناً خالياً لمنع التداخل', targetX, 25, '#ef4444', 18);
      return;
    }

    const plot = this.selectedPlotToMove;
    plot.position.set(targetX, 0, targetZ);

    // Reposition crop if one is planted on this plot
    const crop = this.crops.get(key);
    if (crop && crop.group) {
      crop.group.position.set(targetX, 0.26, targetZ);
    }

    // Save custom coordinates in GameState with persistence
    if (this.state && typeof this.state.setPlotPosition === 'function') {
      this.state.setPlotPosition(key, targetX, targetZ);
    }

    sounds.till();
    this.particles.addDirtBurst(targetX, targetZ);
    this.particles.addFloatingText('✅ تم نقل الحوض وثباته بنجاح!', targetX, 25, '#22c55e', 20);

    this.deselectPlotToMove();
  }

  resetAllPlotPositions() {
    if (this.state && typeof this.state.resetPlotPositions === 'function') {
      this.state.resetPlotPositions();
    }
    this.deselectPlotToMove();
    this.rebuildFarmingPlots();
    sounds.till();
    confetti({ particleCount: 40, spread: 70, origin: { x: 0.5, y: 0.6 } });
    this.particles.addFloatingText('تمت إعادة المحاذاة التلقائية للأحواض بنجاح! 📐', 0, 25, '#ffd166', 22);
  }

  handlePlotMoveInteraction() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);

    // If a plot is currently selected to move:
    if (this.selectedPlotToMove) {
      // Check if user clicked the currently selected plot to deselect
      for (const h of hits) {
        let obj = h.object;
        while (obj && !obj.userData.isPlot && obj.parent) obj = obj.parent;
        if (obj === this.selectedPlotToMove) {
          this.deselectPlotToMove();
          sounds.pop();
          return;
        }
      }

      // Intersect ground to place plot
      const groundHits = this.raycaster.intersectObject(this.groundMesh);
      if (groundHits.length > 0) {
        const pt = groundHits[0].point;
        const gx = Math.round(pt.x / 1.3) * 1.3;
        const gz = Math.round(pt.z / 1.3) * 1.3;
        this.moveSelectedPlotTo(gx, gz);
        return;
      }
    } else {
      // No plot selected: check if clicked on any plot
      for (const h of hits) {
        let obj = h.object;
        while (obj && !obj.userData.isPlot && obj.parent) obj = obj.parent;
        if (obj && obj.userData && obj.userData.isPlot) {
          this.selectPlotToMove(obj);
          return;
        }
      }
    }
  }

  // Construct a new farm building
  constructBuildingAction(buildingId) {
    if (!this.state) return false;
    const ok = this.state.constructBuilding(buildingId);
    if (ok) {
      this.syncConstructedBuildings();
      confetti({ particleCount: 45, spread: 85, origin: { x: 0.5, y: 0.5 } });
      this.particles.addFloatingText('تم تشييد المبنى بنجاح! 🏛️', 0, 30, '#4ade80', 22);
      return true;
    }
    return false;
  }

  // ==========================================================
  // ==========================================================
  // SIDE ANIMAL ENCLOSURES: 7 Dedicated Separate Pens
  // ==========================================================
  createSideAnimalZones() {
    this.animalZoneObjects = new Map();
    this.troughStations = new Map();
    this.animals3D = [];

    // 1. WEST SIDE PENS (Chicken, Duck, Sheep, Rabbit)
    // A. Chicken Coop & Scratch Yard (West Upper)
    this.createZone('chicken', -27, -21, ANIMAL_FARMS.chicken, 14, 10, 'east');

    // B. Duck Pond & Water Pen (West Mid)
    this.createZone('duck', -27, -8, ANIMAL_FARMS.duck, 14, 10, 'east');

    // C. Fluffy Sheep Meadow (West Lower)
    this.createZone('sheep', -27, 6, ANIMAL_FARMS.sheep, 14, 10, 'east');

    // D. Rabbit Garden & Warren (West Bottom)
    this.createZone('rabbit', -27, 19, ANIMAL_FARMS.rabbit, 14, 10, 'east');

    // 2. EAST SIDE PENS (Cow, Goat, Horse)
    // E. Dairy Cow Pasture & Red Barn (East Upper)
    this.createZone('cow', 27, -21, ANIMAL_FARMS.cow, 15, 11, 'west');

    // F. Mountain Goat Hills (East Mid)
    this.createZone('goat', 27, -8, ANIMAL_FARMS.goat, 14, 10, 'west');

    // G. Royal Horse Stables & Paddock (East Lower)
    this.createZone('horse', 27, 12, ANIMAL_FARMS.horse, 16, 15, 'west');
  }

  createZone(type, posX, posZ, config, width = 14, depth = 10, gateSide = 'east') {
    const group = new THREE.Group();
    group.position.set(posX, 0, posZ);

    const isUnlocked = Boolean(this.unlockedFarms && this.unlockedFarms[type] === true);

    // Fences around the pen with opening gate facing the road
    this.create3DFencePerimeter(group, width, depth, isUnlocked, gateSide, posX, posZ);

    if (!isUnlocked) {
      const signGroup = this.createLockedSign(config, gateSide, width, depth);
      group.add(signGroup);
    } else {
      // Unlocked active pen: Shelter, Trough, and Animals!
      this.populateUnlockedFarm(group, type, posX, posZ, width, depth, gateSide);
    }

    group.userData = { isAnimalZone: true, type, config, isUnlocked, width, depth, gateSide };
    this.scene.add(group);
    this.animalZoneObjects.set(type, group);
  }

  create3DTroughStation(parentGroup, type, worldX, worldZ, localX, localZ) {
    const group = new THREE.Group();
    group.position.set(localX, 0, localZ);

    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const metalMat = new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.5, metalness: 0.6 });
    const feedMat = new THREE.MeshStandardMaterial({ color: '#eab308', roughness: 0.8 });
    const waterMat = new THREE.MeshStandardMaterial({ color: '#38bdf8', roughness: 0.1, metalness: 0.4, transparent: true, opacity: 0.88 });

    // Sturdy wooden framing box
    const frame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.55, 1.0), woodMat);
    frame.position.y = 0.28;
    frame.castShadow = true;
    group.add(frame);

    // Left Basin: Food / Grains
    const foodMesh = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.15, 0.75), feedMat);
    foodMesh.position.set(-0.55, 0.52, 0);
    group.add(foodMesh);

    // Right Basin: Fresh Water
    const waterMesh = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.15, 0.75), waterMat);
    waterMesh.position.set(0.55, 0.52, 0);
    group.add(waterMesh);

    // Corner iron braces
    for (let bx of [-1.15, 1.15]) {
      for (let bz of [-0.45, 0.45]) {
        const brace = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), metalMat);
        brace.position.set(bx, 0.3, bz);
        group.add(brace);
      }
    }

    // Overhead Signpost / Status Indicator
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 6), woodMat);
    post.position.set(0, 1.05, -0.45);
    post.castShadow = true;
    group.add(post);

    const signBoard = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 0.1), woodMat);
    signBoard.position.set(0, 1.7, -0.45);
    signBoard.castShadow = true;
    group.add(signBoard);

    // Glowing status sphere
    const statusMat = new THREE.MeshBasicMaterial({ color: 0x4ade80 });
    const statusSphere = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), statusMat);
    statusSphere.position.set(0, 2.05, -0.45);
    group.add(statusSphere);

    // Trough Station Data
    const stationData = {
      isTrough: true,
      penType: type,
      worldX: worldX + localX,
      worldZ: worldZ + localZ,
      group,
      foodMesh,
      waterMesh,
      statusSphere,
      statusMat,
      hasFood: true,
      hasWater: true
    };

    group.userData = stationData;
    parentGroup.add(group);
    this.troughStations.set(type, stationData);

    // Collider for farmer
    if (this.staticColliders) {
      this.staticColliders.push({
        type: 'box',
        minX: worldX + localX - 1.4,
        maxX: worldX + localX + 1.4,
        minZ: worldZ + localZ - 0.7,
        maxZ: worldZ + localZ + 0.7
      });
    }

    return stationData;
  }

  fillTroughStation(stationData) {
    if (!stationData) return;
    stationData.hasFood = true;
    stationData.hasWater = true;

    // Visual pop animation
    gsap.to(stationData.foodMesh.scale, { y: 1.25, duration: 0.15, yoyo: true, repeat: 1 });
    gsap.to(stationData.waterMesh.scale, { y: 1.25, duration: 0.15, yoyo: true, repeat: 1 });
    stationData.statusMat.color.setHex(0x4ade80);

    sounds.water ? sounds.water() : sounds.click();
    confetti({ particleCount: 30, spread: 60, origin: { x: 0.5, y: 0.5 } });

    const penName = ANIMAL_FARMS[stationData.penType]?.name || 'المزرعة';
    this.particles.addFloatingText(`تم ملء المعلفة وحوض الماء في ${penName}! 🌾💧 الحيوانات تتجه للأكل!`, stationData.worldX, 25, '#22c55e', 22);

    // Alert all animals in this pen to walk over and eat/drink
    this.animals3D.forEach(a => {
      if (a.penType === stationData.penType) {
        a.state = 'HEADING_TO_FEED';
        a.timer = 15;
      }
    });
  }

  createLockedSign(config, gateSide = 'east', width = 14, depth = 10) {
    const group = new THREE.Group();
    const hw = width / 2;
    const hd = depth / 2;
    const signX = gateSide === 'east' ? (hw - 0.5) : (-hw + 0.5);
    group.position.set(signX, 0, 0);

    // Wooden Construction Barrier & Signpost
    const postMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 8), postMat);
    p1.position.set(0, 1.1, -1.2);
    p1.castShadow = true;
    group.add(p1);

    const p2 = p1.clone();
    p2.position.set(0, 1.1, 1.2);
    group.add(p2);

    // Red striped barrier board
    const boardMat = new THREE.MeshLambertMaterial({ color: '#b91c1c' });
    const board = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.1, 3.0), boardMat);
    board.position.set(0, 1.5, 0);
    board.castShadow = true;
    group.add(board);

    // Lock icon / sphere
    const lockMat = new THREE.MeshLambertMaterial({ color: '#fbbf24' });
    const lock = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 10), lockMat);
    lock.position.set(0, 2.3, 0);
    group.add(lock);

    group.userData = { isLockTrigger: true, farmType: config.id, config };
    return group;
  }

  unlockAnimalFarm(type) {
    const config = ANIMAL_FARMS[type];
    if (!config) return;

    if (this.state.coins < config.cost) {
      this.particles.addFloatingText(`الذهب غير كافٍ! مطلوب ${config.cost} G 🪙`, 0, 25, '#ef4444', 20);
      sounds.click();
      return;
    }

    if (this.state.level < config.minLevel) {
      this.particles.addFloatingText(`مطلوب مستوى ${config.minLevel}! 🔒`, 0, 25, '#ef4444', 20);
      sounds.click();
      return;
    }

    this.state.useCoins(config.cost);
    this.unlockedFarms[type] = true;
    if (this.state) {
      this.state.unlockedFarms = { ...this.unlockedFarms };
      this.state.save();
    }

    sounds.levelUp();
    confetti({ particleCount: 60, spread: 90, origin: { x: 0.5, y: 0.5 } });
    this.particles.addFloatingText(`تهانينا! تم بناء ${config.name}! 🎉`, 0, 25, '#ffd166', 22);

    // Rebuild the zone in unlocked state
    const oldZone = this.animalZoneObjects.get(type);
    if (oldZone) {
      const pos = oldZone.position.clone();
      const u = oldZone.userData;
      this.scene.remove(oldZone);
      this.createZone(type, pos.x, pos.z, config, u.width || 14, u.depth || 10, u.gateSide || 'east');
    }
  }

  populateUnlockedFarm(group, type, posX, posZ, width = 14, depth = 10, gateSide = 'east') {
    const hw = width / 2;
    const hd = depth / 2;

    // Animal interior roaming bounds (margin 1.8 inside fences)
    const penBounds = {
      minX: posX - hw + 1.8,
      maxX: posX + hw - 1.8,
      minZ: posZ - hd + 1.8,
      maxZ: posZ + hd - 1.8
    };

    const localBounds = {
      minX: -hw + 1.8,
      maxX: hw - 1.8,
      minZ: -hd + 1.8,
      maxZ: hd - 1.8
    };

    // Trough position: opposite to gate side for clean accessibility
    const troughLocalX = gateSide === 'east' ? (-hw + 2.4) : (hw - 2.4);
    const troughLocalZ = 0;
    const troughLocalPos = { x: troughLocalX, z: troughLocalZ };
    const troughWorldPos = { x: posX + troughLocalX, z: posZ + troughLocalZ };

    // Create 3D double trough station
    this.create3DTroughStation(group, type, posX, posZ, troughLocalX, troughLocalZ);

    // Pen interior obstacles (buildings, shelters, troughs)
    const localObstacles = [
      {
        minX: troughLocalX - 1.5,
        maxX: troughLocalX + 1.5,
        minZ: -0.85,
        maxZ: 0.85,
        id: 'trough'
      }
    ];

    if (type === 'chicken') {
      // 3D Chicken Coop on stilts
      const coop = this.create3DCoop();
      coop.position.set(-hw + 3.2, 0, -hd + 3.0);
      group.add(coop);

      localObstacles.push({
        minX: -hw + 1.0,
        maxX: -hw + 5.4,
        minZ: -hd + 1.0,
        maxZ: -hd + 5.0,
        id: 'coop'
      });

      this.staticColliders.push({
        type: 'box',
        minX: posX - hw + 1.2,
        maxX: posX - hw + 5.2,
        minZ: posZ - hd + 1.2,
        maxZ: posZ - hd + 4.8
      });

      // 3 Roaming Chickens (1 Rooster, 2 Hens)
      const cPositions = [
        [0.5, 0, -1.5, 0.4, 'rooster'],
        [-0.8, 0, 1.8, -1.2, 'hen'],
        [2.2, 0, 0.5, 2.1, 'hen']
      ];
      cPositions.forEach(([cx, cy, cz, rotY, variant], idx) => {
        const chicken = this.create3DChicken(variant);
        chicken.position.set(cx, cy, cz);
        chicken.rotation.y = rotY;
        chicken.userData.isAnimal = true;
        group.add(chicken);
        this.animals3D.push({
          mesh: chicken,
          type: 'chicken',
          penType: 'chicken',
          speed: 1.4,
          timer: 2.5 + idx * 1.2,
          state: 'IDLE',
          penBounds,
          localBounds,
          localObstacles,
          troughLocalPos,
          troughWorldPos,
          radius: 0.55
        });
      });

    } else if (type === 'duck') {
      // 3D Duck Pond & Shelter
      const shelter = this.create3DDuckShelter();
      shelter.position.set(0, 0, 0);
      group.add(shelter);

      localObstacles.push({
        minX: -4.4,
        maxX: -1.2,
        minZ: -3.6,
        maxZ: -0.8,
        id: 'shed'
      });

      // 3 Roaming Ducks
      const duckPositions = [
        [-1.8, 0, 1.6, 0.8],
        [1.5, 0, -1.8, -0.5],
        [2.0, 0, 1.8, 1.4]
      ];
      duckPositions.forEach(([dx, dy, dz, rotY], idx) => {
        const duck = this.create3DDuck();
        duck.position.set(dx, dy, dz);
        duck.rotation.y = rotY;
        duck.userData.isAnimal = true;
        group.add(duck);
        this.animals3D.push({
          mesh: duck,
          type: 'duck',
          penType: 'duck',
          speed: 1.2,
          timer: 2.2 + idx * 1.1,
          state: 'IDLE',
          penBounds,
          localBounds,
          localObstacles,
          troughLocalPos,
          troughWorldPos,
          radius: 0.55
        });
      });

    } else if (type === 'cow') {
      // 3D Classic Red Barn
      const barn = this.create3DRedBarn();
      barn.position.set(hw - 3.8, 0, -hd + 3.2);
      group.add(barn);

      localObstacles.push({
        minX: hw - 7.6,
        maxX: hw + 0.5,
        minZ: -hd - 0.5,
        maxZ: -hd + 6.6,
        id: 'barn'
      });

      this.staticColliders.push({
        type: 'box',
        minX: posX + hw - 7.5,
        maxX: posX + hw - 0.5,
        minZ: posZ - hd + 0.5,
        maxZ: posZ - hd + 6.0
      });

      // 2 Dairy Cows (Spawned safely in the open pasture)
      const cowPositions = [
        [-3.2, 0, 1.8, 0.5],
        [-3.0, 0, -1.5, -0.8]
      ];
      cowPositions.forEach(([cx, cy, cz, rotY], idx) => {
        const cow = this.create3DCow();
        cow.position.set(cx, cy, cz);
        cow.rotation.y = rotY;
        cow.userData.isAnimal = true;
        group.add(cow);
        this.animals3D.push({
          mesh: cow,
          type: 'cow',
          penType: 'cow',
          speed: 0.95,
          timer: 3.5 + idx * 1.5,
          state: 'IDLE',
          penBounds,
          localBounds,
          localObstacles,
          troughLocalPos,
          troughWorldPos,
          radius: 1.15
        });
      });

    } else if (type === 'goat') {
      // 3D Mountain Goat Shelter with climbing platform
      const shelter = this.create3DGoatShelter();
      shelter.position.set(hw - 3.2, 0, -hd + 2.8);
      group.add(shelter);

      localObstacles.push({
        minX: hw - 5.8,
        maxX: hw + 0.5,
        minZ: -hd - 0.5,
        maxZ: -hd + 5.2,
        id: 'goat_shelter'
      });

      this.staticColliders.push({
        type: 'box',
        minX: posX + hw - 5.5,
        maxX: posX + hw - 1.0,
        minZ: posZ - hd + 0.8,
        maxZ: posZ - hd + 4.8
      });

      // 2 Playful Goats
      const goatPositions = [
        [-1.6, 0, 1.2, 1.1],
        [-1.0, 0, -1.5, -1.4]
      ];
      goatPositions.forEach(([gx, gy, gz, rotY], idx) => {
        const goat = this.create3DGoat();
        goat.position.set(gx, gy, gz);
        goat.rotation.y = rotY;
        goat.userData.isAnimal = true;
        group.add(goat);
        this.animals3D.push({
          mesh: goat,
          type: 'goat',
          penType: 'goat',
          speed: 1.4,
          timer: 2.8 + idx * 1.3,
          state: 'IDLE',
          penBounds,
          localBounds,
          localObstacles,
          troughLocalPos,
          troughWorldPos,
          radius: 0.75
        });
      });

    } else if (type === 'sheep') {
      // 3D Timber Wool Shelter
      const shelter = this.create3DSheepShelter();
      shelter.position.set(-hw + 3.2, 0, -hd + 2.8);
      group.add(shelter);

      localObstacles.push({
        minX: -hw - 0.5,
        maxX: -hw + 5.8,
        minZ: -hd - 0.5,
        maxZ: -hd + 5.2,
        id: 'sheep_shelter'
      });

      this.staticColliders.push({
        type: 'box',
        minX: posX - hw + 1.0,
        maxX: posX - hw + 5.5,
        minZ: posZ - hd + 0.8,
        maxZ: posZ - hd + 4.8
      });

      // 3 Fluffy Sheep
      const sheepPositions = [
        [-0.5, 0, 1.5, 0.6],
        [1.8, 0, -0.8, -0.7],
        [0.8, 0, 2.2, 1.9]
      ];
      sheepPositions.forEach(([sx, sy, sz, rotY], idx) => {
        const sheep = this.create3DSheep();
        sheep.position.set(sx, sy, sz);
        sheep.rotation.y = rotY;
        sheep.userData.isAnimal = true;
        group.add(sheep);
        this.animals3D.push({
          mesh: sheep,
          type: 'sheep',
          penType: 'sheep',
          speed: 1.05,
          timer: 3.0 + idx * 1.2,
          state: 'IDLE',
          penBounds,
          localBounds,
          localObstacles,
          troughLocalPos,
          troughWorldPos,
          radius: 0.85
        });
      });

    } else if (type === 'rabbit') {
      // 3D Rabbit Warren & Hutch
      const hutch = this.create3DRabbitHutch();
      hutch.position.set(-hw + 3.0, 0, -hd + 2.8);
      group.add(hutch);

      localObstacles.push({
        minX: -hw - 0.5,
        maxX: -hw + 5.4,
        minZ: -hd - 0.5,
        maxZ: -hd + 4.8,
        id: 'rabbit_hutch'
      });

      this.staticColliders.push({
        type: 'box',
        minX: posX - hw + 1.0,
        maxX: posX - hw + 5.0,
        minZ: posZ - hd + 0.8,
        maxZ: posZ - hd + 4.5
      });

      // 3 Hopping Rabbits
      const rabbitPositions = [
        [0.8, 0, -0.8, 1.2],
        [-0.5, 0, 1.8, -0.6],
        [2.0, 0, 1.2, 2.3]
      ];
      rabbitPositions.forEach(([rx, ry, rz, rotY], idx) => {
        const rabbit = this.create3DRabbit();
        rabbit.position.set(rx, ry, rz);
        rabbit.rotation.y = rotY;
        rabbit.userData.isAnimal = true;
        group.add(rabbit);
        this.animals3D.push({
          mesh: rabbit,
          type: 'rabbit',
          penType: 'rabbit',
          speed: 1.6,
          timer: 1.8 + idx * 0.9,
          state: 'IDLE',
          penBounds,
          localBounds,
          localObstacles,
          troughLocalPos,
          troughWorldPos,
          radius: 0.45
        });
      });

    } else if (type === 'horse') {
      // 3D Royal Horse Stable
      const stable = this.create3DStable();
      stable.position.set(hw - 3.8, 0, -hd + 3.5);
      group.add(stable);

      localObstacles.push({
        minX: hw - 7.5,
        maxX: hw + 0.5,
        minZ: -hd - 0.5,
        maxZ: -hd + 6.8,
        id: 'stable'
      });

      this.staticColliders.push({
        type: 'box',
        minX: posX + hw - 7.0,
        maxX: posX + hw - 0.5,
        minZ: posZ - hd + 0.8,
        maxZ: posZ - hd + 6.2
      });

      // 2 Arabian Horses (Spawned safely in the open corral)
      const horsePositions = [
        [-3.0, 0, 1.8, -0.4],
        [-3.2, 0, -2.0, 0.8]
      ];
      horsePositions.forEach(([hx, hy, hz, rotY], idx) => {
        const horse = this.create3DHorse();
        horse.position.set(hx, hy, hz);
        horse.rotation.y = rotY;
        horse.userData.isAnimal = true;
        group.add(horse);
        this.animals3D.push({
          mesh: horse,
          type: 'horse',
          penType: 'horse',
          speed: 2.2,
          timer: 4.0 + idx * 1.5,
          state: 'IDLE',
          penBounds,
          localBounds,
          localObstacles,
          troughLocalPos,
          troughWorldPos,
          radius: 1.3
        });
        if (idx === 0) this.horseMesh = horse;
      });
    }
  }

  create3DFencePerimeter(parentGroup, width, depth, isUnlocked, gateSide = 'east', worldX = 0, worldZ = 0) {
    const postMat = new THREE.MeshLambertMaterial({ color: isUnlocked ? '#92400e' : '#78350f' });
    const railMat = new THREE.MeshLambertMaterial({ color: isUnlocked ? '#b45309' : '#9a3412' });

    const hw = width / 2;
    const hd = depth / 2;

    const addPost = (x, z) => {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.4, 8), postMat);
      p.position.set(x, 0.7, z);
      p.castShadow = true;
      parentGroup.add(p);
    };

    const addRail = (x1, z1, x2, z2) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dz, dx);

      const r1 = new THREE.Mesh(new THREE.BoxGeometry(len, 0.12, 0.08), railMat);
      r1.position.set((x1 + x2) / 2, 0.5, (z1 + z2) / 2);
      r1.rotation.y = -angle;
      r1.castShadow = true;
      parentGroup.add(r1);

      const r2 = r1.clone();
      r2.position.y = 0.95;
      parentGroup.add(r2);
    };

    // Posts along 4 edges (leave gate gap)
    for (let x = -hw; x <= hw; x += 3.0) {
      addPost(x, -hd);
      addPost(x, hd);
    }
    for (let z = -hd; z <= hd; z += 3.0) {
      if (gateSide !== 'west' || Math.abs(z) > 1.8) addPost(-hw, z);
      if (gateSide !== 'east' || Math.abs(z) > 1.8) addPost(hw, z);
    }

    // North and South closed rails
    addRail(-hw, -hd, hw, -hd);
    addRail(-hw, hd, hw, hd);

    // West rail
    if (gateSide === 'west') {
      addRail(-hw, -hd, -hw, -1.8);
      addRail(-hw, 1.8, -hw, hd);
    } else {
      addRail(-hw, -hd, -hw, hd);
    }

    // East rail
    if (gateSide === 'east') {
      addRail(hw, -hd, hw, -1.8);
      addRail(hw, 1.8, hw, hd);
    } else {
      addRail(hw, -hd, hw, hd);
    }

    // Register colliders so farmer cannot walk through solid fence rails
    if (this.staticColliders) {
      // North fence
      this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.2, maxX: worldX + hw + 0.2, minZ: worldZ - hd - 0.3, maxZ: worldZ - hd + 0.3 });
      // South fence
      this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.2, maxX: worldX + hw + 0.2, minZ: worldZ + hd - 0.3, maxZ: worldZ + hd + 0.3 });

      if (gateSide === 'west') {
        // East fence solid
        this.staticColliders.push({ type: 'box', minX: worldX + hw - 0.3, maxX: worldX + hw + 0.3, minZ: worldZ - hd, maxZ: worldZ + hd });
        // West fence has gate opening between -1.8 and +1.8
        this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.3, maxX: worldX - hw + 0.3, minZ: worldZ - hd, maxZ: worldZ - 1.8 });
        this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.3, maxX: worldX - hw + 0.3, minZ: worldZ + 1.8, maxZ: worldZ + hd });
      } else {
        // West fence solid
        this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.3, maxX: worldX - hw + 0.3, minZ: worldZ - hd, maxZ: worldZ + hd });
        // East fence has gate opening between -1.8 and +1.8
        this.staticColliders.push({ type: 'box', minX: worldX + hw - 0.3, maxX: worldX + hw + 0.3, minZ: worldZ - hd, maxZ: worldZ - 1.8 });
        this.staticColliders.push({ type: 'box', minX: worldX + hw - 0.3, maxX: worldX + hw + 0.3, minZ: worldZ + 1.8, maxZ: worldZ + hd });
      }
    }
  }

  // ==========================================================
  // 3D MODELS: Buildings, Animals, Character, Crops
  // ==========================================================
  create3DRedBarn() {
    const group = new THREE.Group();

    // Red timber barn body
    const bodyMat = new THREE.MeshLambertMaterial({ color: '#b91c1c' });
    const body = new THREE.Mesh(new THREE.BoxGeometry(7, 4.5, 6), bodyMat);
    body.position.y = 2.25;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // Gambrel roof
    const roofMat = new THREE.MeshLambertMaterial({ color: '#7f1d1d' });
    const roofGeo = new THREE.ConeGeometry(5.2, 2.5, 4);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 5.6;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    // White sliding double doors
    const doorMat = new THREE.MeshLambertMaterial({ color: '#f8fafc' });
    const door = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.8, 0.2), doorMat);
    door.position.set(0, 1.4, 3.05);
    group.add(door);

    // Grain Silo on right
    const siloMat = new THREE.MeshLambertMaterial({ color: '#94a3b8' });
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 6, 16), siloMat);
    silo.position.set(4.6, 3, 0);
    silo.castShadow = true;
    group.add(silo);

    const domeMat = new THREE.MeshLambertMaterial({ color: '#64748b' });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
    dome.position.set(4.6, 6, 0);
    group.add(dome);

    return group;
  }

  create3DCoop() {
    const group = new THREE.Group();
    const coopMat = new THREE.MeshLambertMaterial({ color: '#d97706' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#92400e' });

    // Raised stilts
    const legMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    for (let x of [-1.5, 1.5]) {
      for (let z of [-1.2, 1.2]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.2, 0.25), legMat);
        leg.position.set(x, 0.6, z);
        leg.castShadow = true;
        group.add(leg);
      }
    }

    // Coop body
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.4, 2.8), coopMat);
    body.position.y = 2.2;
    body.castShadow = true;
    group.add(body);

    // Roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(3, 1.6, 4), roofMat);
    roof.position.y = 3.9;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    // Ladder ramp
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.08, 2.2), coopMat);
    ramp.position.set(0, 0.7, 1.9);
    ramp.rotation.x = -0.55;
    group.add(ramp);

    return group;
  }

  create3DStable() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#b91c1c' });

    // Open timber shelter
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(5.5, 3.2, 0.3), woodMat);
    backWall.position.set(0, 1.6, -1.8);
    backWall.castShadow = true;
    group.add(backWall);

    // Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(6, 0.25, 4.4), roofMat);
    roof.position.set(0, 3.3, 0);
    roof.rotation.x = 0.12;
    roof.castShadow = true;
    group.add(roof);

    // Pillars
    for (let x of [-2.4, 2.4]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.2, 0.3), woodMat);
      p.position.set(x, 1.6, 1.8);
      p.castShadow = true;
      group.add(p);
    }

    // Hay bale inside
    const hayMat = new THREE.MeshLambertMaterial({ color: '#fbbf24' });
    const hay = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.0, 1.2), hayMat);
    hay.position.set(1.4, 0.5, -0.6);
    hay.castShadow = true;
    group.add(hay);

    return group;
  }

  // 3D Duck Pond, Reeds & Wooden Duck Shelter
  create3DDuckShelter() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#065f46' });
    const waterMat = new THREE.MeshStandardMaterial({
      color: '#0284c7',
      roughness: 0.1,
      metalness: 0.5,
      transparent: true,
      opacity: 0.88
    });
    const stoneMat = new THREE.MeshLambertMaterial({ color: '#64748b' });
    const reedMat = new THREE.MeshLambertMaterial({ color: '#15803d' });

    // Duck Pond
    const pondGeo = new THREE.CircleGeometry(2.4, 16);
    const pond = new THREE.Mesh(pondGeo, waterMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(0, 0.04, 0);
    group.add(pond);

    // Stone border around pond
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2;
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3, 0), stoneMat);
      stone.position.set(Math.cos(angle) * 2.45, 0.15, Math.sin(angle) * 2.45);
      stone.scale.set(1.1, 0.7, 1.1);
      group.add(stone);
    }

    // Cattails / Reeds along pond edge
    for (let i = 0; i < 6; i++) {
      const reed = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2, 5), reedMat);
      reed.position.set(1.8 + Math.cos(i) * 0.4, 0.6, 1.4 + Math.sin(i) * 0.4);
      group.add(reed);
    }

    // Cozy Duck House at the rear bank
    const shed = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 2.0), woodMat);
    shed.position.set(-2.8, 0.8, -2.2);
    shed.castShadow = true;
    group.add(shed);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.0, 1.2, 4), roofMat);
    roof.position.set(-2.8, 2.1, -2.2);
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    return group;
  }

  // 3D Mountain Goat Shelter with Climbing Platform
  create3DGoatShelter() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const stoneMat = new THREE.MeshLambertMaterial({ color: '#57534e' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#b45309' });

    // Rocky Climbing Mound / Tiered Platform
    const baseRock = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.8, 2.8), stoneMat);
    baseRock.position.y = 0.4;
    baseRock.castShadow = true;
    group.add(baseRock);

    const midRock = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.7, 2.0), stoneMat);
    midRock.position.set(0.4, 1.15, 0);
    midRock.castShadow = true;
    group.add(midRock);

    // Wooden climbing ramp
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.12, 1.8), woodMat);
    ramp.position.set(-1.6, 0.6, 0);
    ramp.rotation.z = -0.45;
    ramp.castShadow = true;
    group.add(ramp);

    // Mountain Shelter House
    const house = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.8, 2.0), woodMat);
    house.position.set(0.4, 2.4, 0);
    house.castShadow = true;
    group.add(house);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 1.1, 4), roofMat);
    roof.position.set(0.4, 3.8, 0);
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    return group;
  }

  // 3D Timber Wool Shelter with Hay & Wool Bales
  create3DSheepShelter() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#a16207' });
    const woolMat = new THREE.MeshLambertMaterial({ color: '#f8fafc' });
    const hayMat = new THREE.MeshLambertMaterial({ color: '#eab308' });

    // Back & side walls
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.6, 0.25), woodMat);
    backWall.position.set(0, 1.3, -1.4);
    backWall.castShadow = true;
    group.add(backWall);

    for (let s of [-1, 1]) {
      const sideWall = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.6, 2.8), woodMat);
      sideWall.position.set(s * 2.0, 1.3, 0);
      sideWall.castShadow = true;
      group.add(sideWall);
    }

    // Slanted timber shingle roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.18, 3.4), roofMat);
    roof.position.set(0, 2.7, 0.1);
    roof.rotation.x = 0.18;
    roof.castShadow = true;
    group.add(roof);

    // Bedding of fresh yellow straw
    const bedding = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.15, 2.4), hayMat);
    bedding.position.set(0, 0.08, 0);
    group.add(bedding);

    // Wool bales stacked inside
    const wool1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 0.9), woolMat);
    wool1.position.set(1.2, 0.45, -0.6);
    wool1.castShadow = true;
    group.add(wool1);

    const wool2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.8), woolMat);
    wool2.position.set(1.2, 1.15, -0.6);
    wool2.castShadow = true;
    group.add(wool2);

    return group;
  }

  // 3D Raised Rabbit Hutch on Stilts & Burrow Mound
  create3DRabbitHutch() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#dc2626' });
    const wireMat = new THREE.MeshBasicMaterial({ color: '#94a3b8', wireframe: true });
    const earthMat = new THREE.MeshLambertMaterial({ color: '#713f12' });

    // 4 Stilts
    for (let x of [-1.1, 1.1]) {
      for (let z of [-0.8, 0.8]) {
        const stilt = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.1, 6), woodMat);
        stilt.position.set(x, 0.55, z);
        stilt.castShadow = true;
        group.add(stilt);
      }
    }

    // Wooden Raised Hutch
    const hutchBody = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.4, 1.8), woodMat);
    hutchBody.position.y = 1.7;
    hutchBody.castShadow = true;
    group.add(hutchBody);

    // Wire mesh front door window
    const wireDoor = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.9), wireMat);
    wireDoor.position.set(-0.4, 1.7, 0.92);
    group.add(wireDoor);

    // Gabled Red Roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.2, 1.2, 4), roofMat);
    roof.position.y = 2.9;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    // Earthy Burrow Mound on side
    const mound = new THREE.Mesh(new THREE.SphereGeometry(1.1, 8, 8), earthMat);
    mound.scale.set(1.3, 0.55, 1.1);
    mound.position.set(2.2, 0.35, 0.5);
    group.add(mound);

    return group;
  }

  create3DCow() {
    const group = new THREE.Group();
    const cowMat = new THREE.MeshStandardMaterial({
      map: this.textures ? this.textures.cow : null,
      color: '#fdfbf7',
      roughness: 0.65
    });
    const pinkMat = new THREE.MeshStandardMaterial({ color: '#fbcfe8', roughness: 0.5 });
    const darkMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.7 });
    const hornMat = new THREE.MeshStandardMaterial({ color: '#fef08a', roughness: 0.3, metalness: 0.1 });
    const hoofMat = new THREE.MeshStandardMaterial({ color: '#0f172a', roughness: 0.5 });
    const tagMat = new THREE.MeshStandardMaterial({ color: '#facc15', roughness: 0.4 });

    // 1. Organic Barrel Torso (Smooth Capsule)
    const torsoGeo = new THREE.CapsuleGeometry(0.9, 1.4, 12, 16);
    torsoGeo.rotateZ(Math.PI / 2);
    const torso = new THREE.Mesh(torsoGeo, cowMat);
    torso.position.y = 1.45;
    torso.castShadow = true;
    torso.receiveShadow = true;
    group.add(torso);

    // Shoulder withers bump & Rump
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.88, 12, 12), cowMat);
    shoulder.position.set(0.65, 1.5, 0);
    shoulder.scale.set(0.9, 1.05, 0.95);
    group.add(shoulder);

    const rump = new THREE.Mesh(new THREE.SphereGeometry(0.85, 12, 12), cowMat);
    rump.position.set(-0.65, 1.45, 0);
    rump.scale.set(0.9, 1.02, 0.95);
    group.add(rump);

    // 2. Pink Udder with 4 distinct teats positioned between rear legs
    const udder = new THREE.Mesh(new THREE.SphereGeometry(0.38, 10, 10), pinkMat);
    udder.position.set(-0.45, 0.85, 0);
    udder.scale.set(1.1, 0.75, 1.0);
    group.add(udder);

    for (let tx of [-0.14, 0.14]) {
      for (let tz of [-0.14, 0.14]) {
        const teat = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.22, 8), pinkMat);
        teat.position.set(-0.45 + tx, 0.65, tz);
        group.add(teat);
      }
    }

    // 3. Neck & Head Group
    const headGroup = new THREE.Group();
    headGroup.position.set(1.25, 1.65, 0);

    // Tapered Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.65, 0.9, 12), cowMat);
    neck.position.set(-0.15, 0.25, 0);
    neck.rotation.z = -0.55;
    neck.castShadow = true;
    headGroup.add(neck);

    // Sculpted Bovine Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 14), cowMat);
    head.position.set(0.35, 0.45, 0);
    head.scale.set(1.1, 1.0, 0.92);
    head.castShadow = true;
    headGroup.add(head);

    // Muzzle & Pink Nose with nostrils
    const muzzle = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.4, 10, 12), pinkMat);
    muzzle.rotation.x = Math.PI / 2;
    muzzle.position.set(0.85, 0.32, 0);
    muzzle.scale.set(0.95, 0.85, 1.05);
    headGroup.add(muzzle);

    // Nostrils
    for (let s of [-1, 1]) {
      const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), darkMat);
      nostril.position.set(1.05, 0.35, s * 0.14);
      headGroup.add(nostril);
    }

    // Large gentle bovine eyes (Sclera + Pupil)
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#1e293b' });
    for (let s of [-1, 1]) {
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10), eyeWhiteMat);
      sclera.position.set(0.5, 0.58, s * 0.42);
      headGroup.add(sclera);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), eyePupilMat);
      pupil.position.set(0.56, 0.58, s * 0.45);
      headGroup.add(pupil);
    }

    // Curved Ivory Horns with darkened tips
    for (let s of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.55, 10), hornMat);
      horn.position.set(0.25, 0.98, s * 0.4);
      horn.rotation.x = s * 0.45;
      horn.rotation.z = -0.35;
      horn.castShadow = true;
      headGroup.add(horn);

      // Floppy soft ears
      const ear = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.4, 8, 8), cowMat);
      ear.position.set(0.08, 0.65, s * 0.58);
      ear.rotation.z = -0.25;
      ear.rotation.x = s * 0.65;
      headGroup.add(ear);

      const innerEar = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.3, 8, 8), pinkMat);
      innerEar.position.set(0.12, 0.65, s * 0.58);
      innerEar.rotation.z = -0.25;
      innerEar.rotation.x = s * 0.65;
      headGroup.add(innerEar);
    }

    // Yellow Dairy Ear Tag on left ear
    const tag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.14), tagMat);
    tag.position.set(0.12, 0.55, 0.72);
    headGroup.add(tag);

    group.add(headGroup);

    // 4. Swishing Rope Tail with Fluffy Tuft
    const tailGroup = new THREE.Group();
    tailGroup.position.set(-1.15, 1.8, 0);

    const tailRope = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.1, 8), cowMat);
    tailRope.position.set(-0.2, -0.5, 0);
    tailRope.rotation.z = 0.35;
    tailGroup.add(tailRope);

    const tailTuft = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.4, 8), darkMat);
    tailTuft.position.set(-0.45, -1.05, 0);
    tailTuft.rotation.z = 0.35;
    tailGroup.add(tailTuft);
    group.add(tailGroup);

    // 5. 4 Sturdy Legs with defined knees and black hooves
    const legs = [];
    for (let x of [-0.65, 0.65]) {
      for (let z of [-0.42, 0.42]) {
        const legGroup = new THREE.Group();
        legGroup.position.set(x, 1.0, z);

        // Upper Thigh
        const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.6, 10), cowMat);
        thigh.position.y = -0.2;
        thigh.castShadow = true;
        legGroup.add(thigh);

        // Lower Leg
        const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.11, 0.55, 10), cowMat);
        shank.position.y = -0.65;
        shank.castShadow = true;
        legGroup.add(shank);

        // Dark dual-toed hoof
        const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 0.22, 10), hoofMat);
        hoof.position.y = -0.92;
        legGroup.add(hoof);

        group.add(legGroup);
        legs.push(legGroup);
      }
    }

    group.userData = { headGroup, tailGroup, legs, type: 'cow' };
    return group;
  }

  create3DSheep() {
    const group = new THREE.Group();
    const woolMat = new THREE.MeshStandardMaterial({
      color: '#fdfbf7',
      roughness: 0.95,
      metalness: 0.0,
      flatShading: true
    });
    const faceMat = new THREE.MeshStandardMaterial({ color: '#2d3748', roughness: 0.7 });
    const pinkMat = new THREE.MeshStandardMaterial({ color: '#fbcfe8', roughness: 0.6 });
    const hoofMat = new THREE.MeshStandardMaterial({ color: '#0f172a', roughness: 0.6 });

    // 1. Organic Base Torso (Smooth Capsule)
    const fleeceGroup = new THREE.Group();
    fleeceGroup.position.y = 1.25;

    const baseGeo = new THREE.CapsuleGeometry(0.8, 1.2, 12, 16);
    baseGeo.rotateZ(Math.PI / 2);
    const baseBody = new THREE.Mesh(baseGeo, woolMat);
    baseBody.castShadow = true;
    fleeceGroup.add(baseBody);

    // 2. Luscious Cloud Fleece (Arranged around body like a real fluffy sheep)
    const puffCoords = [
      // Top spine puffs
      [-0.6, 0.55, 0], [-0.2, 0.65, 0], [0.2, 0.65, 0], [0.6, 0.55, 0],
      // Left flank
      [-0.5, 0.35, 0.55], [-0.1, 0.45, 0.65], [0.3, 0.45, 0.65], [0.6, 0.35, 0.55],
      // Right flank
      [-0.5, 0.35, -0.55], [-0.1, 0.45, -0.65], [0.3, 0.45, -0.65], [0.6, 0.35, -0.55],
      // Rear rump
      [-0.85, 0.25, 0.25], [-0.85, 0.25, -0.25], [-0.95, 0.4, 0],
      // Front chest
      [0.85, 0.25, 0.25], [0.85, 0.25, -0.25], [0.95, 0.4, 0]
    ];

    puffCoords.forEach(([px, py, pz], idx) => {
      const radius = 0.42 + (idx % 3) * 0.05;
      const puff = new THREE.Mesh(new THREE.SphereGeometry(radius, 10, 10), woolMat);
      puff.position.set(px, py, pz);
      puff.castShadow = true;
      fleeceGroup.add(puff);
    });
    group.add(fleeceGroup);

    // 3. Sculpted Sheep Head
    const headGroup = new THREE.Group();
    headGroup.position.set(1.2, 1.35, 0);

    // Tapered dark face
    const headGeo = new THREE.CapsuleGeometry(0.35, 0.6, 10, 12);
    headGeo.rotateZ(-Math.PI / 3);
    const head = new THREE.Mesh(headGeo, faceMat);
    head.position.set(0.15, 0, 0);
    head.castShadow = true;
    headGroup.add(head);

    // Fluffy Wool Bonnet / Crown on forehead
    const crownWool = new THREE.Mesh(new THREE.SphereGeometry(0.36, 10, 10), woolMat);
    crownWool.position.set(0.08, 0.35, 0);
    crownWool.scale.set(1.1, 0.85, 1.05);
    headGroup.add(crownWool);

    // Soft gentle eyes
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#0f172a' });
    for (let s of [-1, 1]) {
      const eyeW = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), eyeWhiteMat);
      eyeW.position.set(0.25, 0.12, s * 0.32);
      headGroup.add(eyeW);

      const eyeP = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), eyePupilMat);
      eyeP.position.set(0.3, 0.12, s * 0.34);
      headGroup.add(eyeP);
    }

    // Floppy ears drooping sideways
    for (let s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.4, 8, 8), faceMat);
      ear.position.set(-0.05, 0.15, s * 0.42);
      ear.rotation.z = -0.4;
      ear.rotation.x = s * 0.75;
      headGroup.add(ear);

      const inner = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.3, 8, 8), pinkMat);
      inner.position.set(-0.02, 0.15, s * 0.42);
      inner.rotation.z = -0.4;
      inner.rotation.x = s * 0.75;
      headGroup.add(inner);
    }
    group.add(headGroup);

    // 4. Little Woolly Bobtail
    const tail = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), woolMat);
    tail.position.set(-1.3, 1.35, 0);
    tail.scale.set(1.2, 0.9, 0.9);
    group.add(tail);

    // 5. 4 Slender Legs with black hooves
    const legs = [];
    for (let x of [-0.55, 0.55]) {
      for (let z of [-0.34, 0.34]) {
        const legGroup = new THREE.Group();
        legGroup.position.set(x, 0.75, z);

        // Wool cuff at top
        const cuff = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), woolMat);
        cuff.position.y = 0;
        legGroup.add(cuff);

        // Slender dark leg
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.7, 8), faceMat);
        leg.position.y = -0.35;
        leg.castShadow = true;
        legGroup.add(leg);

        // Hoof
        const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.15, 8), hoofMat);
        hoof.position.y = -0.7;
        legGroup.add(hoof);

        group.add(legGroup);
        legs.push(legGroup);
      }
    }

    group.userData = { headGroup, tail, legs, fleeceGroup, type: 'sheep' };
    return group;
  }

  create3DChicken(variant = 'hen') {
    const group = new THREE.Group();
    const isRooster = variant === 'rooster';
    const bodyColor = isRooster ? '#9a3412' : '#fdfbf7';
    const bodyMat = new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.65 });
    const redMat = new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.4 });
    const goldBeakMat = new THREE.MeshStandardMaterial({ color: '#f59e0b', roughness: 0.3 });
    const sickleTailMat = new THREE.MeshStandardMaterial({
      color: isRooster ? '#14532d' : '#f8fafc',
      roughness: 0.4,
      metalness: isRooster ? 0.3 : 0.0
    });

    // 1. Plump Tear-Drop Body
    const bodyGeo = new THREE.SphereGeometry(0.52, 14, 12);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.65;
    body.scale.set(1.3, 1.1, 0.95);
    body.castShadow = true;
    group.add(body);

    // Rounded chest
    const chest = new THREE.Mesh(new THREE.SphereGeometry(0.38, 10, 10), bodyMat);
    chest.position.set(0.35, 0.68, 0);
    group.add(chest);

    // 2. Layered Feather Wings on sides
    const leftWing = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.45, 8, 8), bodyMat);
    leftWing.position.set(0, 0.68, 0.46);
    leftWing.rotation.x = 0.2;
    leftWing.rotation.z = -Math.PI / 4;
    leftWing.scale.set(1, 1, 0.3);
    group.add(leftWing);

    const rightWing = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.45, 8, 8), bodyMat);
    rightWing.position.set(0, 0.68, -0.46);
    rightWing.rotation.x = -0.2;
    rightWing.rotation.z = -Math.PI / 4;
    rightWing.scale.set(1, 1, 0.3);
    group.add(rightWing);

    // 3. Curved Neck & Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0.45, 0.9, 0);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12), bodyMat);
    head.position.y = 0.15;
    head.castShadow = true;
    headGroup.add(head);

    // Distinct Crown Comb with serrated points
    const combGeo = new THREE.BoxGeometry(0.35, isRooster ? 0.35 : 0.2, 0.06);
    const comb = new THREE.Mesh(combGeo, redMat);
    comb.position.set(-0.02, isRooster ? 0.42 : 0.32, 0);
    headGroup.add(comb);

    // Double Wattle under chin
    for (let s of [-1, 1]) {
      const wattle = new THREE.Mesh(new THREE.ConeGeometry(0.06, isRooster ? 0.28 : 0.16, 6), redMat);
      wattle.rotation.x = Math.PI;
      wattle.position.set(0.18, -0.06, s * 0.05);
      headGroup.add(wattle);
    }

    // Curved Golden Beak
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 8), goldBeakMat);
    beak.rotation.z = -Math.PI / 2;
    beak.position.set(0.35, 0.14, 0);
    headGroup.add(beak);

    // Expressive Eyes
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#1e293b' });
    for (let s of [-1, 1]) {
      const ew = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), eyeWhiteMat);
      ew.position.set(0.18, 0.22, s * 0.22);
      headGroup.add(ew);

      const ep = new THREE.Mesh(new THREE.SphereGeometry(0.038, 6, 6), eyePupilMat);
      ep.position.set(0.22, 0.22, s * 0.23);
      headGroup.add(ep);
    }
    group.add(headGroup);

    // 4. Tail Feathers
    const tailGroup = new THREE.Group();
    tailGroup.position.set(-0.55, 0.8, 0);

    if (isRooster) {
      // Magnificent arching sickle feathers
      for (let i = 0; i < 4; i++) {
        const sickle = new THREE.Mesh(new THREE.TorusGeometry(0.45 + i * 0.08, 0.06, 6, 16, Math.PI * 0.7), sickleTailMat);
        sickle.rotation.z = Math.PI / 4 + i * 0.12;
        sickle.position.set(-0.15 - i * 0.08, i * 0.08, (i - 1.5) * 0.05);
        sickle.castShadow = true;
        tailGroup.add(sickle);
      }
    } else {
      // Cute upright hen tail fan
      for (let i = 0; i < 3; i++) {
        const fan = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.45, 0.06), bodyMat);
        fan.rotation.z = Math.PI / 3 + (i - 1) * 0.15;
        fan.position.set(-0.15, 0.15 + i * 0.05, (i - 1) * 0.08);
        tailGroup.add(fan);
      }
    }
    group.add(tailGroup);

    // 5. Golden Legs with Toes
    for (let z of [-0.18, 0.18]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.45, 6), goldBeakMat);
      leg.position.set(0.08, 0.25, z);
      leg.castShadow = true;
      group.add(leg);

      // Foot with 3 front toes
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 0.16), goldBeakMat);
      foot.position.set(0.14, 0.04, z);
      group.add(foot);
    }

    group.userData = { headGroup, leftWing, rightWing, tailGroup, type: 'chicken' };
    return group;
  }

  create3DHorse() {
    const group = new THREE.Group();
    const coatMat = new THREE.MeshStandardMaterial({ color: '#854d0e', roughness: 0.5 });
    const darkCoatMat = new THREE.MeshStandardMaterial({ color: '#3f1f0a', roughness: 0.7 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.6 });
    const leatherMat = new THREE.MeshStandardMaterial({ color: '#451a03', roughness: 0.4 });
    const saddlePadMat = new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.6 });
    const goldMat = new THREE.MeshStandardMaterial({ color: '#fbbf24', roughness: 0.2, metalness: 0.8 });
    const hoofMat = new THREE.MeshStandardMaterial({ color: '#0f172a', roughness: 0.5, metalness: 0.3 });

    // 1. Muscular Equine Torso (Aerodynamic Barrel Chest, Slender Loin & Sloping Quarters)
    const barrelGeo = new THREE.CapsuleGeometry(0.7, 1.45, 12, 16);
    barrelGeo.rotateZ(Math.PI / 2);
    const barrel = new THREE.Mesh(barrelGeo, coatMat);
    barrel.position.set(0, 1.78, 0);
    barrel.scale.set(1.0, 1.05, 0.92);
    barrel.castShadow = true;
    group.add(barrel);

    // Front Chest
    const chest = new THREE.Mesh(new THREE.SphereGeometry(0.68, 12, 12), coatMat);
    chest.position.set(0.65, 1.82, 0);
    chest.scale.set(0.95, 1.08, 0.88);
    chest.castShadow = true;
    group.add(chest);

    // Sloping muscular quarters / croup (smoothly blended, not protruding upwards)
    const croup = new THREE.Mesh(new THREE.SphereGeometry(0.68, 12, 12), coatMat);
    croup.position.set(-0.65, 1.76, 0);
    croup.scale.set(0.95, 1.02, 0.9);
    croup.castShadow = true;
    group.add(croup);

    // 2. Red Saddle Pad & Leather Saddle with Golden Stirrups
    const pad = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.1, 1.3), saddlePadMat);
    pad.position.set(0, 2.38, 0);
    group.add(pad);

    const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.22, 1.05), leatherMat);
    saddle.position.set(0, 2.48, 0);
    group.add(saddle);

    // Stirrups hanging on leather straps
    for (let s of [-1, 1]) {
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.8, 0.04), leatherMat);
      strap.position.set(0, 2.1, s * 0.72);
      group.add(strap);

      const stirrup = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.03, 8, 16), goldMat);
      stirrup.position.set(0, 1.68, s * 0.72);
      group.add(stirrup);
    }

    // 3. Arched Muscular Neck & Detailed Head
    const headGroup = new THREE.Group();
    headGroup.position.set(1.0, 2.1, 0);

    // Arched Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.72, 1.6, 12), coatMat);
    neck.position.set(0.35, 0.65, 0);
    neck.rotation.z = -0.55;
    neck.scale.set(0.85, 1.0, 0.75);
    neck.castShadow = true;
    headGroup.add(neck);

    // Sculpted Head with tapered muzzle
    const head = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 0.95, 10, 14), coatMat);
    head.rotation.z = -Math.PI / 3;
    head.position.set(0.95, 1.25, 0);
    head.scale.set(1.0, 1.0, 0.85);
    head.castShadow = true;
    headGroup.add(head);

    // White Star Blaze marking on forehead
    const blaze = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.55, 8, 8), whiteMat);
    blaze.rotation.z = -Math.PI / 3;
    blaze.position.set(0.98, 1.35, 0);
    headGroup.add(blaze);

    // Alert Pointed Ears
    for (let s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.38, 8), coatMat);
      ear.position.set(0.72, 1.75, s * 0.22);
      ear.rotation.z = -0.2;
      ear.rotation.x = s * 0.15;
      headGroup.add(ear);
    }

    // Warm Dark Eyes
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#0f172a' });
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    for (let s of [-1, 1]) {
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), eyeWhiteMat);
      sclera.position.set(0.88, 1.38, s * 0.28);
      headGroup.add(sclera);

      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), eyePupilMat);
      eye.position.set(0.92, 1.38, s * 0.3);
      headGroup.add(eye);
    }

    // Flowing Dark Mane along the neck
    for (let m = 0; m < 5; m++) {
      const maneClump = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.45, 6, 8), darkCoatMat);
      maneClump.position.set(0.15 + m * 0.18, 0.35 + m * 0.28, 0);
      maneClump.rotation.z = 0.4;
      headGroup.add(maneClump);
    }
    group.add(headGroup);

    // 4. Elegant Flowing Tail
    const tailGroup = new THREE.Group();
    tailGroup.position.set(-1.3, 2.3, 0);

    for (let t = 0; t < 3; t++) {
      const tailSegment = new THREE.Mesh(new THREE.ConeGeometry(0.18 - t * 0.03, 1.5, 8), darkCoatMat);
      tailSegment.position.set(-0.25 - t * 0.08, -0.65 - t * 0.15, (t - 1) * 0.06);
      tailSegment.rotation.z = 0.35;
      tailSegment.castShadow = true;
      tailGroup.add(tailSegment);
    }
    group.add(tailGroup);

    // 5. 4 Athletic Muscular Legs with White Socks & Shiny Hooves
    const legs = [];
    for (let x of [-0.85, 0.75]) {
      for (let z of [-0.38, 0.38]) {
        const legGroup = new THREE.Group();
        legGroup.position.set(x, 1.25, z);

        // Upper thigh
        const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.13, 0.75, 10), coatMat);
        thigh.position.y = -0.3;
        thigh.castShadow = true;
        legGroup.add(thigh);

        // Lower leg (White socks on front legs)
        const isWhiteSock = x > 0;
        const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.7, 10), isWhiteSock ? whiteMat : coatMat);
        shank.position.y = -0.85;
        shank.castShadow = true;
        legGroup.add(shank);

        // Hoof with silver shoe
        const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 0.22, 10), hoofMat);
        hoof.position.y = -1.25;
        legGroup.add(hoof);

        group.add(legGroup);
        legs.push(legGroup);
      }
    }

    group.userData = { headGroup, tailGroup, legs, type: 'horse' };
    return group;
  }

  // 3D Mallard / Farm Duck
  create3DDuck() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: '#78350f', roughness: 0.7 });
    const greenHeadMat = new THREE.MeshStandardMaterial({ color: '#065f46', roughness: 0.4 });
    const billMat = new THREE.MeshStandardMaterial({ color: '#ea580c', roughness: 0.3 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.5 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: '#0f172a' });

    // 1. Plump Body
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 10), bodyMat);
    body.position.y = 0.45;
    body.scale.set(1.2, 0.9, 0.85);
    body.castShadow = true;
    group.add(body);

    // Wings
    const wingL = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.35, 6, 6), bodyMat);
    wingL.position.set(0, 0.48, 0.36);
    wingL.rotation.z = -Math.PI / 4;
    group.add(wingL);

    const wingR = wingL.clone();
    wingR.position.set(0, 0.48, -0.36);
    group.add(wingR);

    // 2. Neck with white ring
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.35, 8), whiteMat);
    neck.position.set(0.32, 0.72, 0);
    group.add(neck);

    // 3. Head & Bill
    const headGroup = new THREE.Group();
    headGroup.position.set(0.35, 0.92, 0);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), greenHeadMat);
    headGroup.add(head);

    const bill = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.16), billMat);
    bill.position.set(0.22, -0.04, 0);
    headGroup.add(bill);

    // Eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), eyeMat);
    eyeL.position.set(0.08, 0.08, 0.16);
    headGroup.add(eyeL);

    const eyeR = eyeL.clone();
    eyeR.position.set(0.08, 0.08, -0.16);
    headGroup.add(eyeR);

    group.add(headGroup);

    // 4. Feet
    const footL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.14), billMat);
    footL.position.set(0, 0.04, 0.15);
    group.add(footL);

    const footR = footL.clone();
    footR.position.set(0, 0.04, -0.15);
    group.add(footR);

    group.userData = { headGroup, type: 'duck' };
    return group;
  }

  // 3D Playful Meadow Goat
  create3DGoat() {
    const group = new THREE.Group();
    const coatMat = new THREE.MeshStandardMaterial({ color: '#e7e5e4', roughness: 0.75 });
    const hornMat = new THREE.MeshStandardMaterial({ color: '#44403c', roughness: 0.4 });
    const darkMat = new THREE.MeshStandardMaterial({ color: '#292524', roughness: 0.5 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: '#0f172a' });

    // 1. Torso
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 1.4, 8), coatMat);
    body.rotation.z = Math.PI / 2;
    body.position.set(0, 0.95, 0);
    body.castShadow = true;
    group.add(body);

    // 2. Head with beard & horns
    const headGroup = new THREE.Group();
    headGroup.position.set(0.75, 1.35, 0);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 10), coatMat);
    head.scale.set(1.2, 0.9, 0.85);
    headGroup.add(head);

    // Horns (Curved back)
    for (let side of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.55, 6), hornMat);
      horn.position.set(-0.1, 0.35, side * 0.16);
      horn.rotation.z = -0.55;
      horn.rotation.x = side * 0.15;
      headGroup.add(horn);

      // Floppy Ears
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.32, 5), coatMat);
      ear.position.set(-0.15, 0.12, side * 0.32);
      ear.rotation.z = -1.1;
      headGroup.add(ear);
    }

    // Goatee Beard
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.28, 4), coatMat);
    beard.position.set(0.35, -0.3, 0);
    beard.rotation.z = 0.4;
    headGroup.add(beard);

    group.add(headGroup);

    // 3. Legs
    const legs = [];
    for (let x of [-0.5, 0.5]) {
      for (let z of [-0.25, 0.25]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.85, 6), coatMat);
        leg.position.set(x, 0.42, z);
        leg.castShadow = true;
        group.add(leg);
        legs.push(leg);
      }
    }

    // Little Tail
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.25, 5), coatMat);
    tail.position.set(-0.75, 1.1, 0);
    tail.rotation.z = 1.1;
    group.add(tail);

    group.userData = { headGroup, legs, type: 'goat' };
    return group;
  }

  // 3D Cute Fluffy Rabbit
  create3DRabbit() {
    const group = new THREE.Group();
    const furMat = new THREE.MeshStandardMaterial({ color: '#fafaf9', roughness: 0.85 });
    const pinkMat = new THREE.MeshStandardMaterial({ color: '#f472b6', roughness: 0.4 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: '#e11d48' }); // Ruby pink eyes

    // 1. Plump Body
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.38, 10, 10), furMat);
    body.position.y = 0.38;
    body.scale.set(1.15, 0.9, 0.85);
    body.castShadow = true;
    group.add(body);

    // 2. Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0.32, 0.62, 0);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), furMat);
    headGroup.add(head);

    // Long Upright Ears with Pink Inside
    for (let side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.42, 6, 6), furMat);
      ear.position.set(-0.06, 0.35, side * 0.12);
      ear.rotation.x = side * 0.15;
      ear.rotation.z = -0.2;
      headGroup.add(ear);

      const earInner = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.32, 4, 4), pinkMat);
      earInner.position.set(-0.04, 0.35, side * 0.12);
      earInner.rotation.x = side * 0.15;
      earInner.rotation.z = -0.2;
      headGroup.add(earInner);
    }

    // Pink Nose Dot
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), pinkMat);
    nose.position.set(0.22, -0.02, 0);
    headGroup.add(nose);

    // Eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), eyeMat);
    eyeL.position.set(0.12, 0.08, 0.14);
    headGroup.add(eyeL);

    const eyeR = eyeL.clone();
    eyeR.position.set(0.12, 0.08, -0.14);
    headGroup.add(eyeR);

    group.add(headGroup);

    // 3. Puffy Cotton Tail
    const tail = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), furMat);
    tail.position.set(-0.42, 0.38, 0);
    group.add(tail);

    group.userData = { headGroup, type: 'rabbit' };
    return group;
  }

  // 3D Farm Pets: Golden Retriever Dog & Calico Cat with 4 Articulated Walking Legs
  create3DDog() {
    const group = new THREE.Group();
    // Position on green lawn near the farmhouse porch
    group.position.set(-3.6, 0, -15);
    group.rotation.y = 0; // Facing south

    const furGoldenMat = new THREE.MeshStandardMaterial({ color: '#d97706', roughness: 0.65 });
    const furCreamMat = new THREE.MeshStandardMaterial({ color: '#fffbeb', roughness: 0.6 });
    const earBrownMat = new THREE.MeshStandardMaterial({ color: '#4a220a', roughness: 0.65 });
    const noseBlackMat = new THREE.MeshStandardMaterial({ color: '#09090b', roughness: 0.25 });
    const collarRedMat = new THREE.MeshStandardMaterial({ color: '#e11d48', roughness: 0.35 });
    const goldTagMat = new THREE.MeshStandardMaterial({ color: '#facc15', roughness: 0.2, metalness: 0.85 });
    const tonguePinkMat = new THREE.MeshStandardMaterial({ color: '#f43f5e', roughness: 0.45 });
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#09090b' });
    const pawPadMat = new THREE.MeshBasicMaterial({ color: '#1e293b' });

    // 1. Athletic Standing Torso with Cream Underbelly
    const chestGeo = new THREE.CapsuleGeometry(0.32, 0.50, 10, 10);
    chestGeo.rotateZ(Math.PI / 2);
    const chest = new THREE.Mesh(chestGeo, furGoldenMat);
    chest.position.set(0, 0.68, 0.12);
    chest.scale.set(0.96, 1.12, 1.0);
    chest.castShadow = true;
    group.add(chest);

    // Fluffy Cream Chest Bib (distinct contrast against golden coat)
    const bibGeo = new THREE.CapsuleGeometry(0.24, 0.36, 8, 8);
    bibGeo.rotateZ(Math.PI / 2);
    const bib = new THREE.Mesh(bibGeo, furCreamMat);
    bib.position.set(0, 0.66, 0.24);
    bib.scale.set(0.85, 1.05, 0.7);
    group.add(bib);

    const loin = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.38, 10), furGoldenMat);
    loin.rotation.x = Math.PI / 2;
    loin.position.set(0, 0.66, -0.22);
    loin.scale.set(0.9, 1.0, 1.0);
    loin.castShadow = true;
    group.add(loin);

    // Cream Belly Underbelly Plate
    const belly = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.08, 0.42), furCreamMat);
    belly.position.set(0, 0.48, -0.08);
    group.add(belly);

    const hips = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), furGoldenMat);
    hips.position.set(0, 0.65, -0.38);
    hips.scale.set(0.92, 1.05, 1.05);
    hips.castShadow = true;
    group.add(hips);

    // Vibrant Red Collar with Golden Bell / Star Medal
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.27, 0.10, 14), collarRedMat);
    collar.rotation.x = 0.45;
    collar.position.set(0, 0.94, 0.32);
    group.add(collar);

    const medal = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.025, 12), goldTagMat);
    medal.rotation.x = Math.PI / 2;
    medal.position.set(0, 0.86, 0.46);
    group.add(medal);

    // 2. Expressive Head & Neck
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.14, 0.42);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 14, 14), furGoldenMat);
    head.scale.set(1.0, 0.96, 1.06);
    head.castShadow = true;
    headGroup.add(head);

    // Fluffy Cream Forehead Blaze
    const blaze = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.12), furCreamMat);
    blaze.position.set(0, 0.12, 0.24);
    blaze.rotation.x = -0.35;
    headGroup.add(blaze);

    // Cream Muzzle with Dark Bridge
    const muzzle = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.26, 10, 10), furCreamMat);
    muzzle.rotation.x = Math.PI / 2;
    muzzle.position.set(0, -0.06, 0.29);
    headGroup.add(muzzle);

    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.18), earBrownMat);
    bridge.position.set(0, 0.03, 0.32);
    headGroup.add(bridge);

    // Glossy Jet-Black Button Nose with Specular Gleam
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.068, 10, 10), noseBlackMat);
    nose.position.set(0, 0.02, 0.46);
    headGroup.add(nose);

    const noseGleam = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), eyeWhiteMat);
    noseGleam.position.set(0.02, 0.045, 0.51);
    headGroup.add(noseGleam);

    // Happy Open Smile & Pink Tongue
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 0.12), noseBlackMat);
    mouth.position.set(0, -0.11, 0.36);
    headGroup.add(mouth);

    const tongue = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.03, 0.18), tonguePinkMat);
    tongue.position.set(0, -0.13, 0.39);
    tongue.rotation.x = 0.28;
    headGroup.add(tongue);

    // Big Sparkling Anime/Puppy Eyes
    for (let s of [-1, 1]) {
      // Eye White sclera
      const ew = new THREE.Mesh(new THREE.SphereGeometry(0.062, 8, 8), eyeWhiteMat);
      ew.position.set(s * 0.13, 0.08, 0.26);
      headGroup.add(ew);

      // Large Glossy Pupil
      const ep = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), eyePupilMat);
      ep.position.set(s * 0.13, 0.08, 0.30);
      headGroup.add(ep);

      // Bright Specular Catchlight Sparkle Dot
      const sparkle = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), eyeWhiteMat);
      sparkle.position.set(s * 0.12 + 0.012, 0.095, 0.33);
      headGroup.add(sparkle);

      // Chocolate Brown Floppy Ears (high contrast against golden head)
      const earGroup = new THREE.Group();
      earGroup.position.set(s * 0.28, 0.12, 0.02);

      const ear = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.38, 8, 8), earBrownMat);
      ear.position.set(0, -0.14, 0);
      ear.rotation.z = -s * 0.32;
      ear.rotation.x = 0.22;
      earGroup.add(ear);
      headGroup.add(earGroup);
    }
    group.add(headGroup);

    // 3. Bushy Wagging Plume Tail with White Tip
    const tailGroup = new THREE.Group();
    tailGroup.position.set(0, 0.72, -0.46);

    const tailBase = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.52, 10), furGoldenMat);
    tailBase.rotation.x = -0.85;
    tailBase.position.set(0, 0.20, -0.16);
    tailGroup.add(tailBase);

    // Fluffy White Cream Tip on Tail
    const tailTip = new THREE.Mesh(new THREE.SphereGeometry(0.10, 8, 8), furCreamMat);
    tailTip.position.set(0, 0.44, -0.34);
    tailGroup.add(tailTip);
    group.add(tailGroup);

    // 4. Four Articulated Legs with Adorable White Sock Paws
    const createDogLeg = (lx, lz) => {
      const legPivot = new THREE.Group();
      legPivot.position.set(lx, 0.62, lz);

      // Golden thigh
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.075, 0.35, 10), furGoldenMat);
      thigh.position.y = -0.16;
      thigh.castShadow = true;
      legPivot.add(thigh);

      // Golden shank
      const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.28, 10), furGoldenMat);
      shank.position.y = -0.42;
      shank.castShadow = true;
      legPivot.add(shank);

      // White Sock Paw (Cream fur for feet!)
      const paw = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.10, 0.20), furCreamMat);
      paw.position.set(0, -0.57, 0.04);
      legPivot.add(paw);

      // Dark Toe Paw Pad details on bottom
      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.02, 0.12), pawPadMat);
      pad.position.set(0, -0.62, 0.04);
      legPivot.add(pad);

      group.add(legPivot);
      return legPivot;
    };

    const legFL = createDogLeg(0.22, 0.22);
    const legFR = createDogLeg(-0.22, 0.22);
    const legBL = createDogLeg(0.22, -0.32);
    const legBR = createDogLeg(-0.22, -0.32);

    group.userData = {
      isPet: true,
      petType: 'dog',
      headGroup,
      tailGroup,
      legFL,
      legFR,
      legBL,
      legBR,
      state: 'WANDER',
      targetX: -3.6,
      targetZ: -14,
      timer: 3.0,
      speed: 2.6,
      isMoving: false,
      sitProgress: 0
    };

    this.scene.add(group);
    this.petDog = group;
  }

  create3DCat() {
    const group = new THREE.Group();
    // Front garden near porch facing south
    group.position.set(-2.0, 0, -20);
    group.rotation.y = 0; // Facing south

    const calicoOrange = new THREE.MeshStandardMaterial({ color: '#ea580c', roughness: 0.6 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.6 });
    const darkMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.6 });
    const pinkMat = new THREE.MeshStandardMaterial({ color: '#fbcfe8', roughness: 0.5 });
    const eyeGreenMat = new THREE.MeshBasicMaterial({ color: '#10b981' });
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#0f172a' });

    // 1. Sleek Calico Feline Body (Standing freely on ground!)
    const bodyGeo = new THREE.CapsuleGeometry(0.19, 0.5, 8, 8);
    bodyGeo.rotateZ(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, calicoOrange);
    body.position.set(0, 0.44, 0);
    body.scale.set(0.92, 1.05, 1.0);
    body.castShadow = true;
    group.add(body);

    const chestWhite = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), whiteMat);
    chestWhite.position.set(0, 0.42, 0.22);
    group.add(chestWhite);

    const darkPatch = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), darkMat);
    darkPatch.position.set(-0.1, 0.5, -0.12);
    group.add(darkPatch);

    // 2. Head with Alert Triangular Ears & Green Eyes
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.65, 0.34);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), calicoOrange);
    head.scale.set(1.05, 0.95, 0.95);
    head.castShadow = true;
    headGroup.add(head);

    const muzzle = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.12, 6, 6), whiteMat);
    muzzle.rotation.x = Math.PI / 2;
    muzzle.position.set(0, -0.04, 0.16);
    headGroup.add(muzzle);

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.04, 6), pinkMat);
    nose.rotation.z = Math.PI;
    nose.position.set(0, 0.01, 0.24);
    headGroup.add(nose);

    // Almond Green Eyes
    for (let s of [-1, 1]) {
      const iris = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 6), eyeGreenMat);
      iris.position.set(s * 0.09, 0.06, 0.16);
      headGroup.add(iris);

      const pupil = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.06, 0.03), eyePupilMat);
      pupil.position.set(s * 0.09, 0.06, 0.19);
      headGroup.add(pupil);

      // Alert triangular ears with pink inside
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.18, 6), darkMat);
      ear.position.set(s * 0.12, 0.2, -0.01);
      ear.rotation.z = -s * 0.25;
      headGroup.add(ear);

      const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.13, 6), pinkMat);
      innerEar.position.set(s * 0.12, 0.19, 0.01);
      innerEar.rotation.z = -s * 0.25;
      headGroup.add(innerEar);
    }
    group.add(headGroup);

    // 3. Graceful Curled Tail
    const tailGroup = new THREE.Group();
    tailGroup.position.set(0, 0.48, -0.32);

    const tail = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.04, 8, 16, Math.PI * 0.85), darkMat);
    tail.rotation.y = Math.PI / 2;
    tail.rotation.z = -0.4;
    tailGroup.add(tail);
    group.add(tailGroup);

    // 4. Four Articulated Walking Legs
    const createCatLeg = (lx, lz) => {
      const legPivot = new THREE.Group();
      legPivot.position.set(lx, 0.42, lz);

      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, 0.38, 8), whiteMat);
      leg.position.y = -0.19;
      leg.castShadow = true;
      legPivot.add(leg);

      const paw = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), whiteMat);
      paw.position.set(0, -0.37, 0.03);
      legPivot.add(paw);

      group.add(legPivot);
      return legPivot;
    };

    const legFL = createCatLeg(0.14, 0.16);
    const legFR = createCatLeg(-0.14, 0.16);
    const legBL = createCatLeg(0.14, -0.22);
    const legBR = createCatLeg(-0.14, -0.22);

    group.userData = {
      isPet: true,
      petType: 'cat',
      headGroup,
      tailGroup,
      legFL,
      legFR,
      legBL,
      legBR,
      state: 'WANDER',
      targetX: 2.0,
      targetZ: -16,
      timer: 4.0,
      speed: 1.8,
      isMoving: false,
      sitProgress: 0
    };

    this.scene.add(group);
    this.petCat = group;
  }

  // ==========================================================
  // STYLIZED 3D FARMER CHARACTER (Reference: Age 32, Height 178cm, Friendly & Adventurous)
  // Features: Wide Straw Hat, Plaid Shirt, Denim Overalls, Green Rain Boots, Empty Open Hands, T-Pose & Alt Colors
  // ==========================================================
  createFarmer() {
    this.farmerGroup = new THREE.Group();
    this.farmerPos = new THREE.Vector3(0, 0, 0);
    if (this.cameraFocusPoint) this.cameraFocusPoint.copy(this.farmerPos);
    this.farmerSpeed = 11;
    this.isRiding = false;
    this.isTPose = false;
    this.farmerOutfit = (this.state && this.state.farmerOutfit) || 'default';

    // Body sub-group for natural walk bounce
    this.farmerBodyGroup = new THREE.Group();
    this.farmerGroup.add(this.farmerBodyGroup);

    // 1. Materials setup with runtime palette switching support
    this.farmerMaterials = {
      skin: new THREE.MeshStandardMaterial({ color: '#f7c6a5', roughness: 0.55 }),
      hair: new THREE.MeshStandardMaterial({ color: '#5c2e0b', roughness: 0.65 }),
      shirt: new THREE.MeshStandardMaterial({
        map: this.farmerOutfit === 'alternative' ? this.textures.farmerShirtAlt : this.textures.farmerShirt,
        roughness: 0.65
      }),
      overalls: new THREE.MeshStandardMaterial({
        map: this.farmerOutfit === 'alternative' ? this.textures.farmerDenimAlt : this.textures.farmerDenim,
        roughness: 0.65
      }),
      strawHat: new THREE.MeshStandardMaterial({
        map: this.textures.strawHat,
        color: this.farmerOutfit === 'alternative' ? '#f1d29d' : '#e2b36e',
        roughness: 0.6
      }),
      hatBand: new THREE.MeshStandardMaterial({ color: '#542d13', roughness: 0.5 }),
      boot: new THREE.MeshStandardMaterial({
        color: this.farmerOutfit === 'alternative' ? '#254737' : '#1f4e38',
        roughness: 0.28,
        metalness: 0.08
      }),
      sole: new THREE.MeshStandardMaterial({ color: '#141816', roughness: 0.9 }),
      metal: new THREE.MeshStandardMaterial({ color: '#cbd5e1', roughness: 0.25, metalness: 0.85 }),
      brass: new THREE.MeshStandardMaterial({ color: '#d97706', roughness: 0.35, metalness: 0.7 }),
      eyeWhite: new THREE.MeshBasicMaterial({ color: '#ffffff' }),
      iris: new THREE.MeshBasicMaterial({ color: '#5a381e' }),
      pupil: new THREE.MeshBasicMaterial({ color: '#111827' }),
      blush: new THREE.MeshBasicMaterial({ color: '#f87171', transparent: true, opacity: 0.65 }),
      smile: new THREE.MeshBasicMaterial({ color: '#8f2d21' }),
      collar: new THREE.MeshStandardMaterial({ color: '#fef3c7', roughness: 0.7 })
    };

    const mats = this.farmerMaterials;

    // ==========================================================
    // 2. HEAD & FRIENDLY FACIAL FEATURES (32 yrs, friendly, adventurous)
    // ==========================================================
    this.farmerHeadGroup = new THREE.Group();
    this.farmerHeadGroup.position.set(0, 1.96, 0);
    this.farmerBodyGroup.add(this.farmerHeadGroup);

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.13, 0.16, 12), mats.skin);
    neck.position.y = -0.16;
    neck.castShadow = true;
    this.farmerHeadGroup.add(neck);

    // Stylized Head Mesh
    const headGeo = new THREE.SphereGeometry(0.38, 18, 18);
    headGeo.scale(0.95, 1.06, 0.98);
    const head = new THREE.Mesh(headGeo, mats.skin);
    head.castShadow = true;
    this.farmerHeadGroup.add(head);

    // Cute 3D Button Nose
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 10), mats.skin);
    nose.position.set(0, 0.02, 0.38);
    nose.scale.set(1.0, 0.85, 1.1);
    nose.castShadow = true;
    this.farmerHeadGroup.add(nose);

    // Friendly Smiling Mouth (Curved 3D upward smile)
    const mouthCurve = new THREE.Mesh(
      new THREE.TorusGeometry(0.085, 0.018, 8, 14, Math.PI * 0.72),
      mats.smile
    );
    mouthCurve.rotation.z = Math.PI * 1.14; // Curve upward!
    mouthCurve.position.set(0, -0.12, 0.35);
    this.farmerHeadGroup.add(mouthCurve);

    // Expressive Eyes (Left & Right)
    for (let s of [-1, 1]) {
      // Sclera (White of eye)
      const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.072, 10, 10), mats.eyeWhite);
      eyeWhite.scale.set(1.15, 0.95, 0.75);
      eyeWhite.position.set(s * 0.155, 0.09, 0.34);
      eyeWhite.rotation.y = s * 0.12;
      this.farmerHeadGroup.add(eyeWhite);

      // Iris (Warm Hazel-Brown)
      const iris = new THREE.Mesh(new THREE.SphereGeometry(0.048, 8, 8), mats.iris);
      iris.position.set(s * 0.155, 0.09, 0.38);
      this.farmerHeadGroup.add(iris);

      // Pupil (Deep dark)
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.034, 6, 6), mats.pupil);
      pupil.position.set(s * 0.155, 0.09, 0.405);
      this.farmerHeadGroup.add(pupil);

      // Specular Light Sparkle (Animated Disney/Pixar gleam)
      const sparkle = new THREE.Mesh(new THREE.SphereGeometry(0.014, 4, 4), mats.eyeWhite);
      sparkle.position.set(s * 0.155 + 0.016, 0.108, 0.425);
      this.farmerHeadGroup.add(sparkle);

      // Friendly curved brown eyebrow
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.028, 0.035), mats.hair);
      brow.position.set(s * 0.155, 0.20, 0.36);
      brow.rotation.z = s * -0.12; // Friendly gentle arch
      brow.rotation.y = s * 0.15;
      this.farmerHeadGroup.add(brow);

      // Rosy cheek blush
      const blush = new THREE.Mesh(new THREE.CircleGeometry(0.065, 10), mats.blush);
      blush.position.set(s * 0.22, -0.04, 0.33);
      blush.rotation.y = s * 0.35;
      this.farmerHeadGroup.add(blush);

      // 3D Ear
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), mats.skin);
      ear.position.set(s * 0.37, 0.02, -0.02);
      ear.scale.set(0.4, 1.1, 0.8);
      this.farmerHeadGroup.add(ear);
    }

    // Chestnut Brown Hair (Sideburns, Forehead Bangs, Back Taper)
    const bangs = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.16, 0.32), mats.hair);
    bangs.position.set(0, 0.24, 0.22);
    this.farmerHeadGroup.add(bangs);

    for (let s of [-1, 1]) {
      const sideburn = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.22), mats.hair);
      sideburn.position.set(s * 0.35, 0.06, 0.08);
      this.farmerHeadGroup.add(sideburn);
    }

    const backHair = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 10), mats.hair);
    backHair.position.set(0, 0.02, -0.20);
    backHair.scale.set(1.0, 1.05, 0.85);
    this.farmerHeadGroup.add(backHair);

    // ==========================================================
    // 3. WIDE-BRIMMED STRAW HAT (Beige/Mustard with Leather Band)
    // ==========================================================
    this.farmerHatGroup = new THREE.Group();
    this.farmerHatGroup.position.set(0, 0.25, -0.04);
    this.farmerHatGroup.rotation.x = -0.16; // Tilted slightly back to reveal face
    this.farmerHeadGroup.add(this.farmerHatGroup);

    // Wide Circular Brim
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.88, 0.045, 24), mats.strawHat);
    brim.castShadow = true;
    brim.receiveShadow = true;
    this.farmerHatGroup.add(brim);

    // Upturned Outer Lip on Brim
    const brimLip = new THREE.Mesh(new THREE.TorusGeometry(0.84, 0.035, 8, 24), mats.strawHat);
    brimLip.rotation.x = Math.PI / 2;
    brimLip.position.y = 0.025;
    this.farmerHatGroup.add(brimLip);

    // Tapered Crown
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.45, 0.34, 20), mats.strawHat);
    crown.position.y = 0.18;
    crown.castShadow = true;
    this.farmerHatGroup.add(crown);

    // Dome on top of crown
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mats.strawHat);
    dome.position.y = 0.35;
    this.farmerHatGroup.add(dome);

    // Dark Leather Hat Band
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.08, 20), mats.hatBand);
    band.position.y = 0.07;
    this.farmerHatGroup.add(band);

    // ==========================================================
    // 4. TORSO & OVERALLS (Checkered Plaid Shirt + Denim Dungarees)
    // ==========================================================
    // Shirt Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.70, 0.88, 0.48), mats.shirt);
    torso.position.set(0, 1.35, 0);
    torso.castShadow = true;
    this.farmerBodyGroup.add(torso);

    // Open V-Neck Shirt Collar
    const collarLeft = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.04), mats.collar);
    collarLeft.position.set(-0.16, 1.76, 0.25);
    collarLeft.rotation.z = 0.4;
    this.farmerBodyGroup.add(collarLeft);

    const collarRight = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.04), mats.collar);
    collarRight.position.set(0.16, 1.76, 0.25);
    collarRight.rotation.z = -0.4;
    this.farmerBodyGroup.add(collarRight);

    // Denim Overalls Bib (Front Chest)
    const overallsBib = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.58, 0.10), mats.overalls);
    overallsBib.position.set(0, 1.30, 0.22);
    overallsBib.castShadow = true;
    this.farmerBodyGroup.add(overallsBib);

    // Front Chest Pocket with stitch line
    const bibPocket = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.04), mats.overalls);
    bibPocket.position.set(0, 1.28, 0.28);
    this.farmerBodyGroup.add(bibPocket);

    // Denim Overalls Lower Section (Hips / Pelvis)
    const overallsHips = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.38, 0.50), mats.overalls);
    overallsHips.position.set(0, 0.98, 0);
    overallsHips.castShadow = true;
    this.farmerBodyGroup.add(overallsHips);

    // Shoulder Straps (Going from chest over shoulders to back)
    for (let s of [-1, 1]) {
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.80, 0.04), mats.overalls);
      strap.position.set(s * 0.21, 1.45, 0);
      strap.rotation.x = 0;
      this.farmerBodyGroup.add(strap);

      // Silver Metallic Clasp Buckles on front
      const buckle = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.016, 6, 12), mats.metal);
      buckle.position.set(s * 0.21, 1.54, 0.28);
      this.farmerBodyGroup.add(buckle);

      // Brass Button / Rivet
      const button = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 8), mats.brass);
      button.rotation.x = Math.PI / 2;
      button.position.set(s * 0.21, 1.50, 0.29);
      this.farmerBodyGroup.add(button);

      // Side waist buttons
      const sideBtn = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 8), mats.brass);
      sideBtn.rotation.z = Math.PI / 2;
      sideBtn.position.set(s * 0.37, 1.05, 0.05);
      this.farmerBodyGroup.add(sideBtn);
    }

    // ==========================================================
    // 5. ARMS & OPEN HANDS (Empty Hands, Rolled Sleeves, T-Pose Support)
    // ==========================================================
    // Helper to create an articulated arm with rolled cuff and open hand
    const createArm = (side) => {
      const armGroup = new THREE.Group();
      armGroup.position.set(side * 0.46, 1.66, 0);

      // Upper arm: Plaid shirt sleeve
      const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.13, 0.38, 12), mats.shirt);
      upperArm.position.y = -0.19;
      upperArm.castShadow = true;
      armGroup.add(upperArm);

      // Rolled-up sleeve cuff at elbow
      const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.035, 8, 16), mats.shirt);
      cuff.rotation.x = Math.PI / 2;
      cuff.position.y = -0.38;
      cuff.castShadow = true;
      armGroup.add(cuff);

      // Forearm: Bare sun-tanned skin
      const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.105, 0.38, 10), mats.skin);
      forearm.position.y = -0.58;
      forearm.castShadow = true;
      armGroup.add(forearm);

      // Open Hand (Completely EMPTY, no tools!)
      const handGroup = new THREE.Group();
      handGroup.position.set(0, -0.80, 0);

      // Palm
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.07, 0.15), mats.skin);
      palm.castShadow = true;
      handGroup.add(palm);

      // Thumb
      const thumb = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.10, 6), mats.skin);
      thumb.position.set(side * -0.065, -0.01, 0.05);
      thumb.rotation.z = side * 0.5;
      thumb.rotation.x = 0.3;
      handGroup.add(thumb);

      // 4 Open Relaxed Fingers (Index, Middle, Ring, Pinky)
      const fingerOffsets = [-0.045, -0.015, 0.015, 0.045];
      fingerOffsets.forEach((xOff, fIdx) => {
        const fingerLen = fIdx === 1 ? 0.11 : (fIdx === 2 ? 0.10 : 0.085);
        const finger = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.025, fingerLen, 6), mats.skin);
        finger.position.set(side * xOff, -0.07, 0);
        finger.rotation.z = side * (xOff * 1.5);
        finger.castShadow = true;
        handGroup.add(finger);
      });

      armGroup.add(handGroup);
      return armGroup;
    };

    this.leftArm = createArm(-1);
    this.farmerBodyGroup.add(this.leftArm);

    this.rightArm = createArm(1);
    this.farmerBodyGroup.add(this.rightArm);

    // Initial natural rest angle (not stiff, empty hands at side)
    this.leftArm.rotation.z = -0.16;
    this.rightArm.rotation.z = 0.16;

    // Tool Holder maintained as empty group for engine compatibility (NO tools added!)
    this.toolHolder = new THREE.Group();
    this.rightArm.add(this.toolHolder);

    // ==========================================================
    // 6. LEGS & TALL GREEN RAIN BOOTS (Black Rubber Soles)
    // ==========================================================
    const createLeg = (side) => {
      const legGroup = new THREE.Group();
      legGroup.position.set(side * 0.22, 0.88, 0);

      // Denim Pants Leg
      const pants = new THREE.Mesh(new THREE.CylinderGeometry(0.165, 0.175, 0.48, 12), mats.overalls);
      pants.position.y = -0.24;
      pants.castShadow = true;
      legGroup.add(pants);

      // Tall Rain Boot Shaft (Dark Green Rubber)
      const bootShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.185, 0.175, 0.42, 12), mats.boot);
      bootShaft.position.y = -0.54;
      bootShaft.castShadow = true;
      legGroup.add(bootShaft);

      // Boot Top Collar Ring
      const bootCollar = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 8, 16), mats.boot);
      bootCollar.rotation.x = Math.PI / 2;
      bootCollar.position.y = -0.33;
      legGroup.add(bootCollar);

      // Boot Foot (Curved rain boot toe)
      const bootFoot = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 0.40), mats.boot);
      bootFoot.position.set(0, -0.73, 0.08);
      bootFoot.castShadow = true;
      legGroup.add(bootFoot);

      // Rounded Toe Cap
      const toeCap = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), mats.boot);
      toeCap.position.set(0, -0.73, 0.24);
      toeCap.scale.set(1.0, 0.75, 1.0);
      legGroup.add(toeCap);

      // Heavy Black Rubber Sole
      const sole = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.07, 0.44), mats.sole);
      sole.position.set(0, -0.83, 0.08);
      sole.castShadow = true;
      sole.receiveShadow = true;
      legGroup.add(sole);

      return legGroup;
    };

    this.leftLeg = createLeg(-1);
    this.farmerGroup.add(this.leftLeg);

    this.rightLeg = createLeg(1);
    this.farmerGroup.add(this.rightLeg);

    this.farmerGroup.position.set(0, 0, 0);
    this.farmerGroup.userData = { isFarmer: true, rootFarmer: this.farmerGroup };
    this.farmerGroup.traverse(child => {
      child.userData = { isFarmer: true, rootFarmer: this.farmerGroup };
    });
    this.scene.add(this.farmerGroup);
  }

  // Switch between Primary (Orange Checkered & Navy Denim) and Alternative (Charcoal & Faded Blue Denim)
  setFarmerOutfit(outfitName) {
    this.farmerOutfit = outfitName === 'alternative' ? 'alternative' : 'default';
    if (this.state) {
      this.state.farmerOutfit = this.farmerOutfit;
      this.state.save();
    }

    if (this.farmerMaterials) {
      const isAlt = this.farmerOutfit === 'alternative';
      if (this.farmerMaterials.shirt) {
        this.farmerMaterials.shirt.map = isAlt ? this.textures.farmerShirtAlt : this.textures.farmerShirt;
        this.farmerMaterials.shirt.needsUpdate = true;
      }
      if (this.farmerMaterials.overalls) {
        this.farmerMaterials.overalls.map = isAlt ? this.textures.farmerDenimAlt : this.textures.farmerDenim;
        this.farmerMaterials.overalls.needsUpdate = true;
      }
      if (this.farmerMaterials.strawHat) {
        this.farmerMaterials.strawHat.color.setHex(isAlt ? 0xf1d29d : 0xe2b36e);
        this.farmerMaterials.strawHat.needsUpdate = true;
      }
      if (this.farmerMaterials.boot) {
        this.farmerMaterials.boot.color.setHex(isAlt ? 0x254737 : 0x1f4e38);
        this.farmerMaterials.boot.needsUpdate = true;
      }
    }
  }

  toggleFarmerOutfit() {
    const next = this.farmerOutfit === 'default' ? 'alternative' : 'default';
    this.setFarmerOutfit(next);
    return this.farmerOutfit;
  }

  // Toggle between Normal Gameplay and Reference Model T-Pose
  toggleTPose() {
    this.isTPose = !this.isTPose;
    if (this.isTPose) {
      // Outstretched T-Pose: Horizontal arms at 90 degrees with empty open hands
      if (this.leftArm) {
        this.leftArm.rotation.set(0, 0, Math.PI / 2);
      }
      if (this.rightArm) {
        this.rightArm.rotation.set(0, 0, -Math.PI / 2);
      }
      if (this.leftLeg) this.leftLeg.rotation.set(0, 0, 0);
      if (this.rightLeg) this.rightLeg.rotation.set(0, 0, 0);
      if (this.farmerBodyGroup) this.farmerBodyGroup.position.y = 0;
    } else {
      // Natural relaxed stance
      if (this.leftArm) this.leftArm.rotation.set(0, 0, -0.16);
      if (this.rightArm) this.rightArm.rotation.set(0, 0, 0.16);
    }
    return this.isTPose;
  }

  // Tools are deliberately omitted so the character's hands remain completely empty and free!
  buildFarmerHeldTools() {
    this.tools3D = {};
    if (this.toolHolder) {
      this.toolHolder.clear();
    }
  }

  updateFarmerToolDisplay() {
    // Hands remain open and free without holding any tools
  }

  // 3D Crops: Matches Reference Planter Image across all growth stages & 11 vegetable/fruit crops
  plantCrop3D(key, x, z, cropType, stage = 0) {
    const group = new THREE.Group();
    // Position directly on the surface of the recessed soil bed inside the planter box
    group.position.set(x, 0.26, z);

    const greenLeafMat = new THREE.MeshLambertMaterial({ color: '#16a34a' });
    const brightSproutMat = new THREE.MeshLambertMaterial({ color: '#22c55e', side: THREE.DoubleSide });
    const stemMat = new THREE.MeshLambertMaterial({ color: '#4ade80' });

    if (stage === 0 || stage === 1) {
      // ==========================================================
      // STAGE 0/1: SCATTERED SEEDS ON SOIL (مرحلة البذور كما بالصورة تماماً)
      // ==========================================================
      const seedMat = new THREE.MeshLambertMaterial({ color: '#d4a373' });
      const seedGeo = new THREE.SphereGeometry(0.07, 6, 6);
      seedGeo.scale(1.2, 0.6, 0.9);
      const seedOffsets = [
        { x: 0.12, z: 0.08, r: 0.4 },
        { x: -0.14, z: 0.10, r: -0.7 },
        { x: -0.06, z: -0.12, r: 1.2 },
        { x: 0.15, z: -0.07, r: -0.3 }
      ];
      seedOffsets.forEach(s => {
        const seed = new THREE.Mesh(seedGeo, seedMat);
        seed.position.set(s.x, 0.02, s.z);
        seed.rotation.y = s.r;
        seed.castShadow = true;
        group.add(seed);
      });

      if (stage === 1) {
        // First tiny green shoot breaking out of the soil
        const shoot = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.12, 5), stemMat);
        shoot.position.set(0, 0.06, 0);
        group.add(shoot);
      }
    } else if (stage === 2) {
      // ==========================================================
      // STAGE 2: SPROUT WITH 2 COTYLEDON LEAVES (مرحلة البرعم الصغير ذو الورقتين)
      // ==========================================================
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.32, 6), stemMat);
      stem.position.y = 0.16;
      stem.castShadow = true;
      group.add(stem);

      const leafGeo = new THREE.ConeGeometry(0.09, 0.28, 5);
      leafGeo.scale(1, 0.35, 1);

      // Left Leaf
      const leftLeaf = new THREE.Mesh(leafGeo, brightSproutMat);
      leftLeaf.position.set(-0.11, 0.28, 0);
      leftLeaf.rotation.z = Math.PI / 3.2;
      group.add(leftLeaf);

      // Right Leaf
      const rightLeaf = new THREE.Mesh(leafGeo, brightSproutMat);
      rightLeaf.position.set(0.11, 0.28, 0);
      rightLeaf.rotation.z = -Math.PI / 3.2;
      group.add(rightLeaf);
    } else if (stage === 3) {
      // ==========================================================
      // STAGE 3: VEGETATIVE FOLIAGE BUSH (مرحلة شجيرة الأوراق الخضراء النامية)
      // ==========================================================
      const baseStem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.24, 6), greenLeafMat);
      baseStem.position.y = 0.12;
      group.add(baseStem);

      for (let i = 0; i < 7; i++) {
        const angle = (i / 7) * Math.PI * 2;
        const leafGeo = new THREE.ConeGeometry(0.14, 0.44, 5);
        leafGeo.scale(1, 0.35, 1);
        const leaf = new THREE.Mesh(leafGeo, greenLeafMat);
        leaf.position.set(Math.cos(angle) * 0.18, 0.26 + (i % 2) * 0.06, Math.sin(angle) * 0.18);
        leaf.rotation.y = angle;
        leaf.rotation.x = 0.48;
        leaf.castShadow = true;
        group.add(leaf);
      }
    } else if (stage === 4) {
      // ==========================================================
      // STAGE 4: MATURE HARVEST (محصول ناضج بارز من التربة مع أوراقه كالصورة)
      // ==========================================================
      if (cropType === 'carrot') {
        // 1. CARROT (جزر): Tapered orange root top protruding from dark soil + lush feathery fronds
        const carrotMat = new THREE.MeshLambertMaterial({ color: '#ea580c' });
        const carrotBody = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.14, 0.45, 12), carrotMat);
        carrotBody.position.y = 0.18;
        carrotBody.castShadow = true;
        group.add(carrotBody);

        const carrotTop = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), carrotMat);
        carrotTop.position.y = 0.40;
        group.add(carrotTop);

        // Lush green leafy plume fountain
        for (let i = 0; i < 7; i++) {
          const ang = (i / 7) * Math.PI * 2;
          const frond = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.65, 5), greenLeafMat);
          frond.position.set(Math.cos(ang) * 0.10, 0.65, Math.sin(ang) * 0.10);
          frond.rotation.y = ang;
          frond.rotation.x = 0.35 + (i % 2) * 0.15;
          frond.castShadow = true;
          group.add(frond);
        }
      } else if (cropType === 'tomato') {
        // 2. TOMATO (طماطم): Lush green vine bush + 3 glossy red tomato globes with star sepals
        const tomatoMat = new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.22, metalness: 0.1 });
        const sepalMat = new THREE.MeshLambertMaterial({ color: '#166534' });

        const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), greenLeafMat);
        bush.position.y = 0.48;
        bush.castShadow = true;
        group.add(bush);

        const tomatoPositions = [
          { x: 0.24, y: 0.44, z: 0.20, r: 0.22 },
          { x: -0.22, y: 0.48, z: 0.16, r: 0.24 },
          { x: 0.05, y: 0.62, z: -0.22, r: 0.20 }
        ];
        tomatoPositions.forEach(tp => {
          const t = new THREE.Mesh(new THREE.SphereGeometry(tp.r, 10, 10), tomatoMat);
          t.position.set(tp.x, tp.y, tp.z);
          t.castShadow = true;
          group.add(t);

          const sepal = new THREE.Mesh(new THREE.ConeGeometry(tp.r * 0.8, 0.06, 5), sepalMat);
          sepal.position.set(tp.x, tp.y + tp.r + 0.02, tp.z);
          sepal.rotation.x = Math.PI;
          group.add(sepal);
        });
      } else if (cropType === 'corn') {
        // 3. CORN (ذرة): Tall leafy green stalk + 4 arched leaves + 2 golden cobs with peeling husks
        const cobMat = new THREE.MeshLambertMaterial({ color: '#facc15' });
        const huskMat = new THREE.MeshLambertMaterial({ color: '#86efac' });

        const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 1.8, 8), greenLeafMat);
        stalk.position.y = 0.9;
        stalk.castShadow = true;
        group.add(stalk);

        for (let i = 0; i < 4; i++) {
          const ang = (i / 4) * Math.PI * 2;
          const leaf = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.75), greenLeafMat);
          leaf.position.set(Math.cos(ang) * 0.32, 0.7 + i * 0.25, Math.sin(ang) * 0.32);
          leaf.rotation.y = ang;
          leaf.rotation.x = 0.45;
          group.add(leaf);
        }

        [-1, 1].forEach((dir, idx) => {
          const cob = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.52, 6, 8), cobMat);
          cob.position.set(dir * 0.22, 0.95 + idx * 0.2, 0);
          cob.rotation.z = -dir * 0.35;
          cob.castShadow = true;
          group.add(cob);

          const husk = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.6, 5), huskMat);
          husk.position.copy(cob.position);
          husk.rotation.copy(cob.rotation);
          group.add(husk);
        });
      } else if (cropType === 'wheat') {
        // 4. WHEAT (قمح): Golden wheat sheaf with 6 stalks and ripe grain ears
        const wheatMat = new THREE.MeshLambertMaterial({ color: '#eab308' });
        const earMat = new THREE.MeshLambertMaterial({ color: '#ca8a04' });
        for (let i = 0; i < 6; i++) {
          const ang = (i / 6) * Math.PI * 2;
          const dist = 0.16 + (i % 2) * 0.08;
          const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 1.5, 6), wheatMat);
          stalk.position.set(Math.cos(ang) * dist, 0.75, Math.sin(ang) * dist);
          stalk.rotation.z = Math.cos(ang) * 0.18;
          stalk.rotation.x = Math.sin(ang) * 0.18;
          stalk.castShadow = true;
          group.add(stalk);

          const ear = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.58, 6), earMat);
          ear.position.copy(stalk.position);
          ear.position.y += 0.68;
          ear.rotation.copy(stalk.rotation);
          group.add(ear);
        }
      } else if (cropType === 'strawberry') {
        // 5. STRAWBERRY (فراولة): Spreading bush + 3 ruby-red strawberries with leafy calyx caps
        const berryMat = new THREE.MeshStandardMaterial({ color: '#e11d48', roughness: 0.28 });
        const sepalMat = new THREE.MeshLambertMaterial({ color: '#15803d' });

        const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.52, 1), greenLeafMat);
        bush.position.y = 0.38;
        bush.scale.set(1.2, 0.7, 1.2);
        bush.castShadow = true;
        group.add(bush);

        const berryPositions = [
          { x: 0.22, y: 0.34, z: 0.22 },
          { x: -0.24, y: 0.32, z: 0.14 },
          { x: 0.04, y: 0.38, z: -0.24 }
        ];
        berryPositions.forEach(bp => {
          const berry = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.32, 7), berryMat);
          berry.position.set(bp.x, bp.y, bp.z);
          berry.rotation.x = Math.PI;
          berry.castShadow = true;
          group.add(berry);

          const sepal = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.05, 5), sepalMat);
          sepal.position.set(bp.x, bp.y + 0.18, bp.z);
          group.add(sepal);
        });
      } else if (cropType === 'pumpkin') {
        // 6. PUMPKIN (قرع عسل): Plump ribbed orange pumpkin on soil + woody stem
        const pumpMat = new THREE.MeshLambertMaterial({ color: '#ea580c' });
        const stemMatWood = new THREE.MeshLambertMaterial({ color: '#5c3d18' });

        const pumpGroup = new THREE.Group();
        for (let i = 0; i < 6; i++) {
          const lobe = new THREE.Mesh(new THREE.SphereGeometry(0.48, 8, 8), pumpMat);
          lobe.scale.set(1.15, 0.85, 1.15);
          lobe.rotation.y = (i / 6) * Math.PI;
          pumpGroup.add(lobe);
        }
        pumpGroup.position.y = 0.44;
        pumpGroup.castShadow = true;
        group.add(pumpGroup);

        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.35, 6), stemMatWood);
        stem.position.y = 0.86;
        stem.rotation.z = 0.3;
        group.add(stem);
      } else if (cropType === 'sunflower') {
        // 7. SUNFLOWER (عباد الشمس): Thick stalk + radiant flower head with golden petals & seed disk
        const diskMat = new THREE.MeshLambertMaterial({ color: '#3b1803' });
        const petalMat = new THREE.MeshLambertMaterial({ color: '#fbbf24' });

        const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 1.9, 8), greenLeafMat);
        stalk.position.y = 0.95;
        stalk.castShadow = true;
        group.add(stalk);

        const headGroup = new THREE.Group();
        headGroup.position.set(0, 1.88, 0.15);
        headGroup.rotation.x = Math.PI / 4.5;

        const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.12, 14), diskMat);
        disk.rotation.x = Math.PI / 2;
        headGroup.add(disk);

        for (let i = 0; i < 14; i++) {
          const ang = (i / 14) * Math.PI * 2;
          const petal = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.38, 5), petalMat);
          petal.position.set(Math.cos(ang) * 0.48, Math.sin(ang) * 0.48, 0);
          petal.rotation.z = ang - Math.PI / 2;
          headGroup.add(petal);
        }
        group.add(headGroup);
      } else if (cropType === 'eggplant') {
        // 8. EGGPLANT (باذنجان): Bushy green foliage + 2 glossy deep-purple eggplants with calyx hoods
        const eggMat = new THREE.MeshStandardMaterial({ color: '#4c1d95', roughness: 0.22 });
        const calyxMat = new THREE.MeshLambertMaterial({ color: '#166534' });

        const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), greenLeafMat);
        bush.position.y = 0.52;
        bush.castShadow = true;
        group.add(bush);

        [-0.22, 0.22].forEach((xOff, idx) => {
          const egg = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 10), eggMat);
          egg.scale.set(0.9, 1.6, 0.9);
          egg.position.set(xOff, 0.48 + idx * 0.1, 0.18);
          egg.castShadow = true;
          group.add(egg);

          const cap = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.25, 5), calyxMat);
          cap.position.set(xOff, 0.92 + idx * 0.1, 0.18);
          group.add(cap);
        });
      } else if (cropType === 'watermelon') {
        // 9. WATERMELON (بطيخ): Large oblong striped watermelon resting on soil
        const melonMat = new THREE.MeshLambertMaterial({ color: '#16a34a' });
        const stripeMat = new THREE.MeshLambertMaterial({ color: '#052e16' });

        const melon = new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 12), melonMat);
        melon.scale.set(1.35, 0.95, 0.95);
        melon.position.y = 0.50;
        melon.castShadow = true;
        group.add(melon);

        for (let s = -2; s <= 2; s++) {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(0.63, 0.05, 5, 16), stripeMat);
          ring.scale.set(1.35, 0.95, 0.95);
          ring.position.set(s * 0.22, 0.50, 0);
          ring.rotation.y = Math.PI / 2;
          group.add(ring);
        }
      } else if (cropType === 'grape') {
        // 10. GRAPES (عنب): Wooden vineyard trellis + hanging royal purple grape clusters
        const woodMatTrellis = new THREE.MeshLambertMaterial({ color: '#78350f' });
        const grapeMat = new THREE.MeshStandardMaterial({ color: '#7e22ce', roughness: 0.3 });

        const post1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.8, 0.12), woodMatTrellis);
        post1.position.set(-0.45, 0.9, 0);
        group.add(post1);

        const post2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.8, 0.12), woodMatTrellis);
        post2.position.set(0.45, 0.9, 0);
        group.add(post2);

        const beam = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.12, 0.12), woodMatTrellis);
        beam.position.set(0, 1.75, 0);
        group.add(beam);

        [-0.22, 0.22].forEach(gx => {
          for (let row = 0; row < 4; row++) {
            const countInRow = 4 - row;
            for (let b = 0; b < countInRow; b++) {
              const berry = new THREE.Mesh(new THREE.SphereGeometry(0.10, 6, 6), grapeMat);
              berry.position.set(gx + (b - (countInRow - 1) / 2) * 0.14, 1.45 - row * 0.16, 0.08);
              group.add(berry);
            }
          }
        });
      } else if (cropType === 'pineapple') {
        // 11. PINEAPPLE (أناناس): Golden-amber textured body + dramatic spiky emerald crown
        const pineMat = new THREE.MeshStandardMaterial({ color: '#d97706', roughness: 0.4 });

        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.42, 1.0, 10), pineMat);
        body.position.y = 0.58;
        body.castShadow = true;
        group.add(body);

        for (let i = 0; i < 8; i++) {
          const ang = (i / 8) * Math.PI * 2;
          const spike = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.75, 4), greenLeafMat);
          spike.position.set(Math.cos(ang) * 0.16, 1.35, Math.sin(ang) * 0.16);
          spike.rotation.y = ang;
          spike.rotation.x = 0.38 + (i % 2) * 0.12;
          spike.castShadow = true;
          group.add(spike);
        }
      } else {
        // Default Lush Berry Bush
        const berryMat = new THREE.MeshLambertMaterial({ color: '#e63946' });
        const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), greenLeafMat);
        bush.position.y = 0.5;
        bush.castShadow = true;
        group.add(bush);

        const berry = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), berryMat);
        berry.position.set(0.3, 0.6, 0.3);
        group.add(berry);
      }
    }

    this.scene.add(group);
    this.crops.set(key, { group, cropType, stage, isMature: stage === 4 });
  }

  // North Buildings: Cozy Farmhouse, Windmill & Fishing Pier
  createBuildings() {
    // 1. Cozy Farmhouse on North Hill (Z = -26, X = -6)
    const houseGroup = new THREE.Group();
    houseGroup.position.set(-6, 0, -26);
    houseGroup.userData = { isMovableBuilding: true, id: 'farmhouse', name: 'البيت الريفي (Farmhouse)' };
    this.houseGroup = houseGroup;
    this.buildings3D.set('farmhouse', houseGroup);

    const logMat = new THREE.MeshLambertMaterial({ color: '#b45309' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#b91c1c' });
    const stoneMat = new THREE.MeshLambertMaterial({ color: '#475569' });
    const windowMat = new THREE.MeshBasicMaterial({ color: '#fef08a' }); // Glowing window

    // House walls
    const houseBody = new THREE.Mesh(new THREE.BoxGeometry(9, 5, 7), logMat);
    houseBody.position.y = 2.5;
    houseBody.castShadow = true;
    houseGroup.add(houseBody);

    // Gabled Roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(6.5, 3.5, 4), roofMat);
    roof.position.y = 6.4;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    houseGroup.add(roof);

    // Stone Chimney with smoke
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(1.2, 5.5, 1.2), stoneMat);
    chimney.position.set(3.2, 4.5, -1.8);
    chimney.castShadow = true;
    houseGroup.add(chimney);

    // Warm Glowing Windows
    const win1 = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), windowMat);
    win1.position.set(-2, 2.8, 3.52);
    houseGroup.add(win1);

    const win2 = win1.clone();
    win2.position.set(2, 2.8, 3.52);
    houseGroup.add(win2);

    this.scene.add(houseGroup);

    // 2. 3D Windmill with Real Rotating Blades (Z = -26, X = 8)
    const millGroup = new THREE.Group();
    millGroup.position.set(8, 0, -26);
    millGroup.userData = { isMovableBuilding: true, id: 'windmill', name: 'طاحونة الهواء (Windmill)' };
    this.millGroup = millGroup;
    this.buildings3D.set('windmill', millGroup);

    const millTower = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 8, 8), stoneMat);
    millTower.position.y = 4;
    millTower.castShadow = true;
    millGroup.add(millTower);

    // Rotating Blades
    this.bladesGroup = new THREE.Group();
    this.bladesGroup.position.set(0, 7.2, 2.3);

    const bladeMat = new THREE.MeshLambertMaterial({ color: '#f8fafc' });
    for (let i = 0; i < 4; i++) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 4.5, 0.08), bladeMat);
      arm.position.y = 2.25;
      const pivot = new THREE.Group();
      pivot.rotation.z = (Math.PI / 2) * i;
      pivot.add(arm);
      this.bladesGroup.add(pivot);
    }
    millGroup.add(this.bladesGroup);
    this.scene.add(millGroup);

    // 3. Realistic Living Animated Lake & Fishing Pier with Big and Small Fish
    this.createLivingLake();

    // Register colliders for permanent farm landmarks
    if (this.staticColliders) {
      // Cozy Farmhouse on North Hill
      this.staticColliders.push({ type: 'box', minX: -10.8, maxX: -1.2, minZ: -29.8, maxZ: -22.2, id: 'farmhouse' });
      // 3D Windmill
      this.staticColliders.push({ type: 'circle', x: 8, z: -26, radius: 3.2, id: 'windmill' });
    }

    // Sync initial constructed buildings
    this.syncConstructedBuildings();
  }

  // Realistic Living Animated Lake with Dynamic Waves, Rocks, Lily Pads & Swimming Fish
  createLivingLake() {
    this.lakeGroup = new THREE.Group();

    // 1. Lake Bed (dark sunken basin)
    const bedGeo = new THREE.PlaneGeometry(37, 21);
    bedGeo.rotateX(-Math.PI / 2);
    const bedMat = new THREE.MeshStandardMaterial({
      color: '#0f172a',
      roughness: 0.9,
      metalness: 0.1
    });
    const bed = new THREE.Mesh(bedGeo, bedMat);
    bed.position.set(0, -0.45, 28);
    bed.receiveShadow = true;
    this.lakeGroup.add(bed);

    // 2. High-resolution Water Surface for Dynamic Waves (37 wide, 21 deep, 48x32 segments)
    const waterGeo = new THREE.PlaneGeometry(37, 21, 48, 32);
    waterGeo.rotateX(-Math.PI / 2);

    // Store original positions for multi-sine vertex displacement
    const posAttr = waterGeo.attributes.position;
    const initialY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      initialY[i] = posAttr.getY(i);
    }
    waterGeo.userData = { initialY, posAttr };

    const waterMat = new THREE.MeshStandardMaterial({
      color: '#0284c7',
      roughness: 0.05,
      metalness: 0.35,
      transparent: true,
      opacity: 0.86
    });
    const lakeMesh = new THREE.Mesh(waterGeo, waterMat);
    lakeMesh.position.set(0, 0.04, 28);
    lakeMesh.receiveShadow = true;
    this.lakeMesh = lakeMesh;
    this.lakeGroup.add(lakeMesh);

    // 3. Sandy Shore & Natural Rocks Bordering the Lake
    const rockMat1 = new THREE.MeshLambertMaterial({ color: '#78716c' });
    const rockMat2 = new THREE.MeshLambertMaterial({ color: '#57534e' });
    const rockMat3 = new THREE.MeshLambertMaterial({ color: '#94a3b8' });

    // Perimeter rock clusters
    const perimeterCoords = [];
    for (let x = -18.5; x <= 18.5; x += 2.5) {
      perimeterCoords.push({ x, z: 17.5 + (Math.random() - 0.5) * 0.8 }); // North shore
      perimeterCoords.push({ x, z: 38.5 + (Math.random() - 0.5) * 0.8 }); // South shore
    }
    for (let z = 18.5; z <= 37.5; z += 2.5) {
      perimeterCoords.push({ x: -18.5 + (Math.random() - 0.5) * 0.8, z }); // West shore
      perimeterCoords.push({ x: 18.5 + (Math.random() - 0.5) * 0.8, z });  // East shore
    }

    perimeterCoords.forEach((p, idx) => {
      // Don't place rocks right where dock connects
      if (Math.abs(p.x) < 3.2 && p.z < 21) return;

      const rGeo = new THREE.DodecahedronGeometry(0.45 + Math.random() * 0.45, 0);
      const mats = [rockMat1, rockMat2, rockMat3];
      const rMesh = new THREE.Mesh(rGeo, mats[idx % mats.length]);
      rMesh.position.set(p.x, 0.22, p.z);
      rMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      rMesh.scale.set(1 + Math.random() * 0.5, 0.6 + Math.random() * 0.4, 1 + Math.random() * 0.5);
      rMesh.castShadow = true;
      rMesh.receiveShadow = true;
      this.lakeGroup.add(rMesh);
    });

    // 4. Wooden Fishing Pier & Dock with Pilings and Lantern
    const dockGroup = new THREE.Group();
    dockGroup.position.set(0, 0, 24);

    const dockPlankMat = new THREE.MeshLambertMaterial({ color: '#b45309' });
    const postMat = new THREE.MeshLambertMaterial({ color: '#78350f' });

    // Main dock walkway
    const dockMain = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.22, 10.5), dockPlankMat);
    dockMain.position.y = 0.24;
    dockMain.castShadow = true;
    dockMain.receiveShadow = true;
    dockGroup.add(dockMain);

    // Support Pilings (stilts) plunged into water
    for (const px of [-1.8, 1.8]) {
      for (const pz of [-4, -1, 2, 4.8]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 1.8, 8), postMat);
        post.position.set(px, -0.2, pz);
        post.castShadow = true;
        dockGroup.add(post);
      }
    }

    // Dock End Posts with Warm Lantern
    const lanternPost = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 2.2, 8), postMat);
    lanternPost.position.set(1.7, 1.1, 4.8);
    dockGroup.add(lanternPost);

    const lanternMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.5, 0.35),
      new THREE.MeshBasicMaterial({ color: '#fef08a' })
    );
    lanternMesh.position.set(1.7, 2.1, 4.8);
    dockGroup.add(lanternMesh);

    const lanternLight = new THREE.PointLight(0xffedd5, 1.2, 8);
    lanternLight.position.set(1.7, 2.1, 4.8);
    dockGroup.add(lanternLight);

    this.lakeGroup.add(dockGroup);

    // 5. Floating Lily Pads with Lotus Blossoms
    this.lilyPads = [];
    const padMat = new THREE.MeshLambertMaterial({ color: '#16a34a', side: THREE.DoubleSide });
    const flowerMat = new THREE.MeshStandardMaterial({ color: '#f43f5e', roughness: 0.3 });
    const centerMat = new THREE.MeshBasicMaterial({ color: '#fef08a' });

    const lilyCoords = [
      { x: -11, z: 23 },
      { x: -13, z: 32 },
      { x: -6, z: 35 },
      { x: 7, z: 34 },
      { x: 12, z: 25 },
      { x: 10, z: 31 },
      { x: -7, z: 22 }
    ];

    lilyCoords.forEach((lc, i) => {
      const padGroup = new THREE.Group();
      padGroup.position.set(lc.x, 0.06, lc.z);

      const padGeo = new THREE.CircleGeometry(0.65, 12, 0, Math.PI * 1.8);
      padGeo.rotateX(-Math.PI / 2);
      const pad = new THREE.Mesh(padGeo, padMat);
      padGroup.add(pad);

      // Pink Lotus Blossom on some pads
      if (i % 2 === 0) {
        for (let p = 0; p < 6; p++) {
          const petal = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 5), flowerMat);
          const ang = (p / 6) * Math.PI * 2;
          petal.position.set(Math.cos(ang) * 0.15, 0.1, Math.sin(ang) * 0.15);
          petal.rotation.x = Math.PI / 5;
          petal.rotation.y = -ang;
          padGroup.add(petal);
        }
        const center = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), centerMat);
        center.position.y = 0.12;
        padGroup.add(center);
      }

      this.lakeGroup.add(padGroup);
      this.lilyPads.push({ group: padGroup, baseX: lc.x, baseZ: lc.z, phase: i * 1.1 });
    });

    // 6. Realistic Swimming Fish: Big Fish & Small Fish
    this.lakeFish = [];

    // A. 4 Big Fish (Golden Koi & River Carp)
    const bigFishConfigs = [
      { isBig: true, bodyColor: '#ea580c', secondaryColor: '#fef08a', scale: 1.25, speed: 1.1, tailSpeed: 3.8, depth: -0.18, startX: -8, startZ: 26 },
      { isBig: true, bodyColor: '#d97706', secondaryColor: '#ffffff', scale: 1.2, speed: 1.2, tailSpeed: 4.0, depth: -0.22, startX: 6, startZ: 32 },
      { isBig: true, bodyColor: '#15803d', secondaryColor: '#ca8a04', scale: 1.35, speed: 0.95, tailSpeed: 3.4, depth: -0.28, startX: 10, startZ: 24 },
      { isBig: true, bodyColor: '#c2410c', secondaryColor: '#fed7aa', scale: 1.28, speed: 1.05, tailSpeed: 3.6, depth: -0.20, startX: -5, startZ: 33 }
    ];

    bigFishConfigs.forEach(cfg => {
      const fish = this.createFishMesh(cfg);
      fish.group.position.set(cfg.startX, cfg.depth, cfg.startZ);
      this.lakeGroup.add(fish.group);
      this.lakeFish.push(fish);
    });

    // B. 12 Small Fish (Neon Minnows, Golden Guppies, Coral Minnows)
    const smallColors = [
      { body: '#0284c7', fin: '#38bdf8' },
      { body: '#eab308', fin: '#fef08a' },
      { body: '#ef4444', fin: '#fca5a5' },
      { body: '#06b6d4', fin: '#a5f3fc' },
      { body: '#f97316', fin: '#fed7aa' },
      { body: '#10b981', fin: '#6ee7b7' }
    ];

    for (let s = 0; s < 12; s++) {
      const c = smallColors[s % smallColors.length];
      const fish = this.createFishMesh({
        isBig: false,
        bodyColor: c.body,
        secondaryColor: c.fin,
        scale: 0.35 + Math.random() * 0.12,
        speed: 1.4 + Math.random() * 0.7,
        tailSpeed: 7.5 + Math.random() * 3.0,
        depth: -0.10 - Math.random() * 0.18
      });
      const sx = (Math.random() - 0.5) * 26;
      const sz = 21 + Math.random() * 14;
      fish.group.position.set(sx, fish.depth, sz);
      this.lakeGroup.add(fish.group);
      this.lakeFish.push(fish);
    }

    this.scene.add(this.lakeGroup);
  }

  createFishMesh({ isBig = false, bodyColor = '#ea580c', secondaryColor = '#fef08a', scale = 1.0, speed = 1.0, tailSpeed = 4.0, depth = -0.15 }) {
    const group = new THREE.Group();

    // Body: Tapered hydrodynamic form
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.18,
      metalness: 0.35
    });

    const bodyGeo = new THREE.ConeGeometry(0.32, 1.15, 8);
    bodyGeo.rotateX(Math.PI / 2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    group.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.32, 8, 8);
    headGeo.scale(0.85, 0.85, 1.1);
    const head = new THREE.Mesh(headGeo, bodyMat);
    head.position.set(0, 0, 0.48);
    group.add(head);

    // Realistic Eyes (White sclera + black pupil)
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: '#f8fafc' });
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: '#0f172a' });

    for (const side of [-1, 1]) {
      const white = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 6), eyeWhiteMat);
      white.position.set(side * 0.24, 0.08, 0.62);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), eyePupilMat);
      pupil.position.set(side * 0.26, 0.08, 0.66);
      group.add(white);
      group.add(pupil);
    }

    // Top Dorsal Fin
    const dorsal = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.24, 0.42), bodyMat);
    dorsal.position.set(0, 0.26, 0.05);
    dorsal.rotation.x = -0.25;
    group.add(dorsal);

    // Pectoral Side Fins
    for (const side of [-1, 1]) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.16), bodyMat);
      fin.position.set(side * 0.3, -0.05, 0.28);
      fin.rotation.z = side * 0.4;
      fin.rotation.y = side * 0.2;
      group.add(fin);
    }

    // Articulated Swishing Tail
    const tailGroup = new THREE.Group();
    tailGroup.position.set(0, 0, -0.5);

    const rearBody = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.2, 0.35, 6), bodyMat);
    rearBody.rotation.x = Math.PI / 2;
    rearBody.position.set(0, 0, -0.14);
    tailGroup.add(rearBody);

    // Caudal Fan Fin
    const finMat = new THREE.MeshStandardMaterial({
      color: secondaryColor || bodyColor,
      roughness: 0.25,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.92
    });

    const finGeo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0, 0, 0,
      0, 0.28, -0.42,
      0, -0.28, -0.42,
      0, 0, 0,
      0, 0.18, -0.52,
      0, -0.18, -0.52
    ]);
    finGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    const caudalFin = new THREE.Mesh(finGeo, finMat);
    caudalFin.position.set(0, 0, -0.32);
    tailGroup.add(caudalFin);

    group.add(tailGroup);

    group.scale.set(scale, scale, scale);

    return {
      group,
      tailGroup,
      isBig,
      scale,
      speed,
      tailSpeed,
      depth,
      swimPhase: Math.random() * Math.PI * 2,
      targetX: (Math.random() - 0.5) * 26,
      targetZ: 21 + Math.random() * 14,
      heading: Math.random() * Math.PI * 2,
      turnTimer: Math.random() * 2
    };
  }

  updateLakeWaterAndFish(dt, time) {
    // 1. Dynamic Water Waves with multi-sine vertex displacement
    if (this.lakeMesh && this.lakeMesh.geometry && this.lakeMesh.geometry.userData) {
      const { initialY, posAttr } = this.lakeMesh.geometry.userData;
      if (posAttr && initialY) {
        for (let i = 0; i < posAttr.count; i++) {
          const x = posAttr.getX(i);
          const z = posAttr.getZ(i);
          // Realistic multi-wave formula
          const wave = Math.sin(x * 0.42 + time * 2.2) * 0.15
                     + Math.cos(z * 0.52 + time * 1.8) * 0.11
                     + Math.sin((x + z) * 0.32 + time * 2.7) * 0.07;
          posAttr.setY(i, initialY[i] + wave);
        }
        posAttr.needsUpdate = true;
        this.lakeMesh.geometry.computeVertexNormals();
      }
    }

    // 2. Lily Pads Bobbing with Water Waves
    if (this.lilyPads) {
      for (let i = 0; i < this.lilyPads.length; i++) {
        const lp = this.lilyPads[i];
        const bob = Math.sin(time * 2.0 + lp.phase) * 0.06;
        lp.group.position.y = 0.06 + bob;
        lp.group.rotation.z = Math.sin(time * 1.6 + lp.phase) * 0.05;
        lp.group.rotation.x = Math.cos(time * 1.4 + lp.phase) * 0.04;
      }
    }

    // 3. Swimming Fish AI & Swishing Tails (Big & Small)
    if (this.lakeFish && this.lakeFish.length > 0) {
      for (let i = 0; i < this.lakeFish.length; i++) {
        const fish = this.lakeFish[i];
        const p = fish.group.position;

        // Tail Swish Animation
        if (fish.tailGroup) {
          fish.tailGroup.rotation.y = Math.sin(time * fish.tailSpeed + fish.swimPhase) * 0.46;
        }
        // Subtle body rolling while swimming
        fish.group.rotation.z = Math.sin(time * fish.tailSpeed + fish.swimPhase) * 0.08;

        // Vertical gliding in water
        fish.group.position.y = fish.depth + Math.sin(time * 1.6 + fish.swimPhase) * 0.05;

        // Steering towards target
        fish.turnTimer -= dt;
        const dx = fish.targetX - p.x;
        const dz = fish.targetZ - p.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 1.8 || fish.turnTimer <= 0) {
          fish.targetX = (Math.random() - 0.5) * 28;
          fish.targetZ = 20.5 + Math.random() * 15;
          // Avoid dock posts
          if (Math.abs(fish.targetX) < 3.0 && fish.targetZ < 28) {
            fish.targetX = (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 8);
          }
          fish.turnTimer = 3.0 + Math.random() * 4.0;
        }

        // Steer angle
        const targetAngle = Math.atan2(dx, dz);
        let angleDiff = targetAngle - fish.group.rotation.y;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        fish.group.rotation.y += angleDiff * Math.min(1, dt * 2.8);

        // Move forward in current facing direction
        const fSpeed = fish.speed * (fish.isBig ? 1.0 : 1.35);
        p.x += Math.sin(fish.group.rotation.y) * fSpeed * dt;
        p.z += Math.cos(fish.group.rotation.y) * fSpeed * dt;

        // Stay within lake bounds
        p.x = Math.max(-16.5, Math.min(16.5, p.x));
        p.z = Math.max(19.5, Math.min(36.5, p.z));
      }
    }
  }

  // ==========================================================
  // FARM BUILDER / CUSTOMIZER MODE
  // ==========================================================
  initBuilderMode() {
    this.isBuilderMode = false;
    this.builderTool = 'road'; // 'road', 'erase', 'water', 'move_building', 'move_farm'
    this.selectedBuilderObject = null;
    this.builderCamFocus = new THREE.Vector3(0, 0, 0);

    // Selection highlight indicator box
    const selGeo = new THREE.BoxGeometry(1, 1, 1);
    const selMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    this.builderHighlightMesh = new THREE.Mesh(selGeo, selMat);
    this.builderHighlightMesh.visible = false;
    this.scene.add(this.builderHighlightMesh);
  }

  toggleBuilderMode(force) {
    this.isBuilderMode = typeof force === 'boolean' ? force : !this.isBuilderMode;
    const bar = document.getElementById('farm-builder-bar');

    if (this.isBuilderMode) {
      if (bar) bar.style.display = 'flex';
      sounds.click();
      this.particles.addFloatingText('🏗️ وضع تخطيط وترتيب المزرعة نشط!', 0, 30, '#ffd166', 22);
      this.selectedBuilderObject = null;
      if (this.builderHighlightMesh) this.builderHighlightMesh.visible = false;
      this.setBuilderTool(this.builderTool || 'road');
    } else {
      if (bar) bar.style.display = 'none';
      sounds.click();
      this.selectedBuilderObject = null;
      if (this.builderHighlightMesh) this.builderHighlightMesh.visible = false;
      this.saveFarmLayout();
      this.particles.addFloatingText('✅ تم حفظ التخطيط بنجاح!', 0, 30, '#22c55e', 22);
    }
  }

  setBuilderTool(tool) {
    this.builderTool = tool;
    this.selectedBuilderObject = null;
    if (this.builderHighlightMesh) this.builderHighlightMesh.visible = false;

    // Update UI active buttons
    document.querySelectorAll('.b-tool-btn').forEach(btn => {
      if (btn.getAttribute('data-tool') === tool) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const hint = document.getElementById('builder-status-hint');
    if (hint) {
      if (tool === 'road') hint.textContent = '🛣️ انقر أو اسحب لرصف طرق حجرية بين الحقول';
      else if (tool === 'erase') hint.textContent = '🧹 انقر على الطريق أو الماء لمسحه وإعادة النجيله الخضراء';
      else if (tool === 'water') hint.textContent = '💧 انقر على الأرض لحفر بركة مياه حقيقية بأسماك صغيرة';
      else if (tool === 'move_building') hint.textContent = '🏠 انقر على أي مبنى (البيت، الطاحونة، البئر..) ثم انقر لنقله';
      else if (tool === 'move_farm') hint.textContent = '🐄 انقر على أي حظيرة حيوانات ثم انقر لنقلها بالكامل';
    }
  }

  handleBuilderClick(worldPoint, hitObject) {
    const gx = Math.round(worldPoint.x / 2) * 2;
    const gz = Math.round(worldPoint.z / 2) * 2;

    if (this.builderTool === 'road') {
      this.addCustomRoadTile(gx, gz);
      sounds.tap();
      this.particles.addFloatingText('🛣️ رصف طريق', gx, gz, '#f59e0b', 16);
      return;
    }

    if (this.builderTool === 'erase') {
      this.removeCustomTile(gx, gz);
      sounds.tap();
      this.particles.addFloatingText('🌱 إرجاع نجيله', gx, gz, '#84cc16', 16);
      return;
    }

    if (this.builderTool === 'water') {
      this.addCustomWaterTile(gx, gz);
      sounds.water();
      this.particles.addFloatingText('💧 بركة مياه', gx, gz, '#0284c7', 16);
      return;
    }

    if (this.builderTool === 'move_building') {
      if (!this.selectedBuilderObject) {
        // Find building under cursor
        let curr = hitObject;
        while (curr && !curr.userData?.isMovableBuilding && curr.parent) {
          curr = curr.parent;
        }
        if (curr && curr.userData?.isMovableBuilding) {
          this.selectedBuilderObject = curr;
          if (this.builderHighlightMesh) {
            this.builderHighlightMesh.visible = true;
            this.builderHighlightMesh.position.copy(curr.position);
            this.builderHighlightMesh.position.y += 2.5;
            this.builderHighlightMesh.scale.set(10, 6, 8);
          }
          sounds.click();
          this.particles.addFloatingText(`📍 تم تحديد: ${curr.userData.name || 'المبنى'}`, curr.position.x, curr.position.z, '#fbbf24', 18);
          const hint = document.getElementById('builder-status-hint');
          if (hint) hint.textContent = `📍 تم تحديد [${curr.userData.name}] - انقر الآن على أي مكان في الأرض لنقله إليه!`;
        }
      } else {
        // Move building to (gx, gz)
        const b = this.selectedBuilderObject;
        b.position.set(gx, 0, gz);
        this.updateBuildingColliders();
        this.saveFarmLayout();
        sounds.place();
        this.particles.addFloatingText('✅ تم نقل المبنى بنجاح!', gx, gz, '#22c55e', 22);
        this.selectedBuilderObject = null;
        if (this.builderHighlightMesh) this.builderHighlightMesh.visible = false;
        const hint = document.getElementById('builder-status-hint');
        if (hint) hint.textContent = '🏠 تم النقل! يمكنك تحديد مبنى آخر أو اختيار أداة ثانية.';
      }
      return;
    }

    if (this.builderTool === 'move_farm') {
      if (!this.selectedBuilderObject) {
        // Find animal zone under cursor
        let curr = hitObject;
        while (curr && !curr.userData?.isAnimalZone && curr.parent) {
          curr = curr.parent;
        }
        if (curr && curr.userData?.isAnimalZone) {
          this.selectedBuilderObject = curr;
          if (this.builderHighlightMesh) {
            this.builderHighlightMesh.visible = true;
            this.builderHighlightMesh.position.copy(curr.position);
            this.builderHighlightMesh.position.y += 1.5;
            this.builderHighlightMesh.scale.set(curr.userData.width || 14, 3, curr.userData.depth || 10);
          }
          sounds.click();
          this.particles.addFloatingText(`📍 تم تحديد مزرعة: ${curr.userData.name || curr.userData.type}`, curr.position.x, curr.position.z, '#fbbf24', 18);
          const hint = document.getElementById('builder-status-hint');
          if (hint) hint.textContent = `📍 تم تحديد [مزرعة ${curr.userData.name || curr.userData.type}] - انقر الآن على الأرض لنقلها!`;
        }
      } else {
        // Move animal farm to (gx, gz)
        const zone = this.selectedBuilderObject;
        zone.position.set(gx, 0, gz);
        this.updateAnimalZoneAfterMove(zone, gx, gz);
        this.updateBuildingColliders();
        this.saveFarmLayout();
        sounds.place();
        this.particles.addFloatingText('✅ تم نقل الحظيرة بنجاح!', gx, gz, '#22c55e', 22);
        this.selectedBuilderObject = null;
        if (this.builderHighlightMesh) this.builderHighlightMesh.visible = false;
        const hint = document.getElementById('builder-status-hint');
        if (hint) hint.textContent = '🐄 تم النقل! يمكنك نقل مزرعة أخرى أو اختيار أداة ثانية.';
      }
      return;
    }
  }

  updateAnimalZoneAfterMove(zoneGroup, newX, newZ) {
    const penType = zoneGroup.userData.type;
    zoneGroup.userData.worldX = newX;
    zoneGroup.userData.worldZ = newZ;

    // Update trough station
    const station = this.troughStations ? this.troughStations.get(penType) : null;
    if (station && station.localPos) {
      station.worldX = newX + station.localPos.x;
      station.worldZ = newZ + station.localPos.z;
    }

    // Update animals belonging to this pen
    if (this.animals3D) {
      this.animals3D.filter(a => a.penType === penType).forEach(a => {
        if (a.troughLocalPos) {
          a.troughWorldPos = { x: newX + a.troughLocalPos.x, z: newZ + a.troughLocalPos.z };
        }
      });
    }
  }

  updateBuildingColliders() {
    // Rebuild static colliders for buildings and fences dynamically
    this.staticColliders = [];

    // Permanent & Movable Buildings
    if (this.houseGroup) {
      const hx = this.houseGroup.position.x;
      const hz = this.houseGroup.position.z;
      this.staticColliders.push({ type: 'box', minX: hx - 4.8, maxX: hx + 4.8, minZ: hz - 3.8, maxZ: hz + 3.8, id: 'farmhouse' });
    }
    if (this.millGroup) {
      const mx = this.millGroup.position.x;
      const mz = this.millGroup.position.z;
      this.staticColliders.push({ type: 'circle', x: mx, z: mz, radius: 3.2, id: 'windmill' });
    }

    // Constructed 3D buildings (Well, Silo, Bakery, Greenhouse, Beehive)
    if (this.buildings3D) {
      this.buildings3D.forEach((mesh, id) => {
        if (id === 'farmhouse' || id === 'windmill') return;
        const bx = mesh.position.x;
        const bz = mesh.position.z;
        if (id === 'well') this.staticColliders.push({ type: 'circle', x: bx, z: bz, radius: 1.8, id });
        else if (id === 'silo') this.staticColliders.push({ type: 'circle', x: bx, z: bz, radius: 2.2, id });
        else if (id === 'beehive') this.staticColliders.push({ type: 'circle', x: bx, z: bz, radius: 1.2, id });
        else if (id === 'bakery') this.staticColliders.push({ type: 'box', minX: bx - 3.2, maxX: bx + 3.2, minZ: bz - 2.8, maxZ: bz + 2.8, id });
        else if (id === 'greenhouse') this.staticColliders.push({ type: 'box', minX: bx - 4.2, maxX: bx + 4.2, minZ: bz - 3.2, maxZ: bz + 3.2, id });
      });
    }

    // Animal pen perimeter fences
    if (this.animalZoneObjects) {
      this.animalZoneObjects.forEach((group, type) => {
        const u = group.userData;
        const worldX = group.position.x;
        const worldZ = group.position.z;
        const hw = (u.width || 14) / 2;
        const hd = (u.depth || 10) / 2;

        this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.2, maxX: worldX + hw + 0.2, minZ: worldZ - hd - 0.3, maxZ: worldZ - hd + 0.3 });
        this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.2, maxX: worldX + hw + 0.2, minZ: worldZ + hd - 0.3, maxZ: worldZ + hd + 0.3 });

        if (u.gateSide === 'west') {
          this.staticColliders.push({ type: 'box', minX: worldX + hw - 0.3, maxX: worldX + hw + 0.3, minZ: worldZ - hd, maxZ: worldZ + hd });
          this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.3, maxX: worldX - hw + 0.3, minZ: worldZ - hd, maxZ: worldZ - 1.8 });
          this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.3, maxX: worldX - hw + 0.3, minZ: worldZ + 1.8, maxZ: worldZ + hd });
        } else {
          this.staticColliders.push({ type: 'box', minX: worldX - hw - 0.3, maxX: worldX - hw + 0.3, minZ: worldZ - hd, maxZ: worldZ + hd });
          this.staticColliders.push({ type: 'box', minX: worldX + hw - 0.3, maxX: worldX + hw + 0.3, minZ: worldZ - hd, maxZ: worldZ - 1.8 });
          this.staticColliders.push({ type: 'box', minX: worldX + hw - 0.3, maxX: worldX + hw + 0.3, minZ: worldZ + 1.8, maxZ: worldZ + hd });
        }
      });
    }
  }

  saveFarmLayout() {
    if (!this.state) return;

    const roads = [];
    if (this.roadTiles && this.roadTiles.size > 0) {
      this.roadTiles.forEach((_, key) => {
        const [x, z] = key.split(',').map(Number);
        roads.push({ x, z });
      });
    } else if (this.customRoadTiles) {
      this.customRoadTiles.forEach((_, key) => {
        const [x, z] = key.split(',').map(Number);
        roads.push({ x, z });
      });
    }

    const waters = [];
    this.customWaterTiles.forEach((_, key) => {
      const [x, z] = key.split(',').map(Number);
      waters.push({ x, z });
    });

    const buildings = {};
    if (this.houseGroup) buildings.farmhouse = { x: this.houseGroup.position.x, z: this.houseGroup.position.z };
    if (this.millGroup) buildings.windmill = { x: this.millGroup.position.x, z: this.millGroup.position.z };
    if (this.buildings3D) {
      this.buildings3D.forEach((mesh, id) => {
        buildings[id] = { x: mesh.position.x, z: mesh.position.z };
      });
    }

    const animalZones = {};
    if (this.animalZoneObjects) {
      this.animalZoneObjects.forEach((group, type) => {
        animalZones[type] = { x: group.position.x, z: group.position.z };
      });
    }

    this.state.saveFarmCustomLayout({ roads, waters, buildings, animalZones });
  }

  loadFarmLayout() {
    const layout = this.state && this.state.farmCustomLayout;
    if (!layout) return;

    // 1. Restore Custom Roads
    if (Array.isArray(layout.roads) && layout.roads.length > 0) {
      if (!this.roadTiles || this.roadTiles.size === 0) {
        layout.roads.forEach(r => this.createSingleRoadTileMesh(r.x, r.z));
      }
    }

    // 2. Restore Custom Waters
    if (Array.isArray(layout.waters)) {
      layout.waters.forEach(w => this.addCustomWaterTile(w.x, w.z));
    }

    // 3. Restore Buildings Positions
    if (layout.buildings) {
      if (layout.buildings.farmhouse && this.houseGroup) {
        this.houseGroup.position.set(layout.buildings.farmhouse.x, 0, layout.buildings.farmhouse.z);
      }
      if (layout.buildings.windmill && this.millGroup) {
        this.millGroup.position.set(layout.buildings.windmill.x, 0, layout.buildings.windmill.z);
      }
      if (this.buildings3D) {
        for (const [id, pos] of Object.entries(layout.buildings)) {
          const mesh = this.buildings3D.get(id);
          if (mesh && pos) {
            mesh.position.set(pos.x, 0, pos.z);
          }
        }
      }
    }

    // 4. Restore Animal Zones Positions
    if (layout.animalZones && this.animalZoneObjects) {
      for (const [type, pos] of Object.entries(layout.animalZones)) {
        const group = this.animalZoneObjects.get(type);
        if (group && pos) {
          group.position.set(pos.x, 0, pos.z);
          this.updateAnimalZoneAfterMove(group, pos.x, pos.z);
        }
      }
    }

    this.updateBuildingColliders();
  }

  resetFarmLayout() {
    // Clear custom roads and waters
    const rKeys = Array.from(this.customRoadTiles.keys());
    rKeys.forEach(k => {
      const [x, z] = k.split(',').map(Number);
      this.removeCustomTile(x, z);
    });

    const wKeys = Array.from(this.customWaterTiles.keys());
    wKeys.forEach(k => {
      const [x, z] = k.split(',').map(Number);
      this.removeCustomTile(x, z);
    });

    // Reset default building positions
    if (this.houseGroup) this.houseGroup.position.set(-6, 0, -26);
    if (this.millGroup) this.millGroup.position.set(8, 0, -26);

    const defaultBuildings = {
      well: { x: 5.5, z: -19 },
      silo: { x: -12.5, z: -25.5 },
      beehive: { x: 13.5, z: -22 },
      bakery: { x: -16, z: -21 },
      greenhouse: { x: 16.5, z: -25.5 }
    };
    if (this.buildings3D) {
      this.buildings3D.forEach((mesh, id) => {
        if (defaultBuildings[id]) {
          mesh.position.set(defaultBuildings[id].x, 0, defaultBuildings[id].z);
        }
      });
    }

    // Reset default animal zones
    const defaultZones = {
      chicken: { x: -27, z: -21 },
      duck: { x: -27, z: -8 },
      sheep: { x: -27, z: 6 },
      rabbit: { x: -27, z: 19 },
      cow: { x: 27, z: -21 },
      goat: { x: 27, z: -8 },
      horse: { x: 27, z: 12 }
    };
    if (this.animalZoneObjects) {
      for (const [type, pos] of Object.entries(defaultZones)) {
        const group = this.animalZoneObjects.get(type);
        if (group) {
          group.position.set(pos.x, 0, pos.z);
          this.updateAnimalZoneAfterMove(group, pos.x, pos.z);
        }
      }
    }

    this.updateBuildingColliders();
    this.saveFarmLayout();
    this.particles.addFloatingText('🔄 تم استرجاع التخطيط الافتراضي للمزرعة!', 0, 30, '#ffd166', 22);
    sounds.click();
  }

  syncConstructedBuildings() {
    if (!this.state || !this.state.buildings) return;

    for (const [id, isBuilt] of Object.entries(this.state.buildings)) {
      if (isBuilt && !this.buildings3D.has(id)) {
        let mesh = null;
        if (id === 'well') mesh = this.create3DWell(5.5, -19);
        else if (id === 'silo') mesh = this.create3DSilo(-12.5, -25.5);
        else if (id === 'beehive') mesh = this.create3DBeehive(13.5, -22);
        else if (id === 'bakery') mesh = this.create3DBakery(-16, -21);
        else if (id === 'greenhouse') mesh = this.create3DGreenhouse(16.5, -25.5);

        if (mesh) {
          this.scene.add(mesh);
          this.buildings3D.set(id, mesh);
          // Lively appearance bounce
          mesh.scale.set(0.1, 0.1, 0.1);
          gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.6, ease: 'back.out(1.7)' });
        }
      }
    }
  }

  constructBuildingAction(buildingId) {
    if (!this.state) return false;
    const ok = this.state.constructBuilding(buildingId);
    if (ok) {
      this.syncConstructedBuildings();
      confetti({ particleCount: 65, spread: 85, origin: { x: 0.5, y: 0.5 } });
      this.particles.addFloatingText('تم تشييد المبنى بنجاح! 🏛️✨', 0, 30, '#ffd166', 22);
      return true;
    }
    return false;
  }

  // 1. 3D Freshwater Well
  create3DWell(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const stoneMat = new THREE.MeshLambertMaterial({ color: '#64748b' });
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#b45309' });
    const waterMat = new THREE.MeshStandardMaterial({ color: '#38bdf8', roughness: 0.1, metalness: 0.6 });

    // Cobblestone ground apron
    const apron = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 1.75, 0.12, 16), stoneMat);
    apron.position.y = 0.06;
    apron.receiveShadow = true;
    group.add(apron);

    // Stone cylinder well wall
    const wellWall = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 1.2, 12), stoneMat);
    wellWall.position.y = 0.6;
    wellWall.castShadow = true;
    group.add(wellWall);

    // Sparkling water disc inside
    const water = new THREE.Mesh(new THREE.CircleGeometry(1.05, 12), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.95;
    group.add(water);

    // Wooden pillars
    for (let side of [-0.9, 0.9]) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.4, 6), woodMat);
      pillar.position.set(side, 1.5, 0);
      pillar.castShadow = true;
      group.add(pillar);
    }

    // Wooden gabled canopy roof
    const canopy = new THREE.Mesh(new THREE.ConeGeometry(1.6, 0.9, 4), roofMat);
    canopy.position.y = 2.9;
    canopy.rotation.y = Math.PI / 4;
    canopy.castShadow = true;
    group.add(canopy);

    // Hanging rope & bucket
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.1, 4), woodMat);
    rope.position.set(0, 2.0, 0);
    group.add(rope);

    const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.35, 8), woodMat);
    bucket.position.set(0, 1.4, 0);
    group.add(bucket);

    if (this.staticColliders) {
      this.staticColliders.push({ type: 'circle', x: x, z: z, radius: 1.6, id: 'well' });
    }

    group.userData = { buildingType: 'well' };
    return group;
  }

  // 2. 3D Grain Silo
  create3DSilo(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const siloMat = new THREE.MeshLambertMaterial({ color: '#94a3b8' });
    const metalMat = new THREE.MeshLambertMaterial({ color: '#475569' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#dc2626' });

    // Tower
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.2, 9.5, 16), siloMat);
    tower.position.y = 4.75;
    tower.castShadow = true;
    group.add(tower);

    // Metal Rings
    for (let y of [2.5, 5.0, 7.5]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.06, 6, 16), metalMat);
      ring.position.y = y;
      ring.rotation.x = Math.PI / 2;
      group.add(ring);
    }

    // Domed Conical Roof
    const dome = new THREE.Mesh(new THREE.ConeGeometry(2.4, 2.2, 16), roofMat);
    dome.position.y = 10.4;
    dome.castShadow = true;
    group.add(dome);

    // Ladder on side
    const ladderMat = new THREE.MeshLambertMaterial({ color: '#334155' });
    for (let i = 0; i < 9; i++) {
      const rung = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.08), ladderMat);
      rung.position.set(0, 1.2 + i * 0.9, 2.15);
      group.add(rung);
    }

    if (this.staticColliders) {
      this.staticColliders.push({ type: 'circle', x: x, z: z, radius: 2.3, id: 'silo' });
    }

    group.userData = { buildingType: 'silo' };
    return group;
  }

  // 3. 3D Flower Beehive
  create3DBeehive(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const hiveMat = new THREE.MeshLambertMaterial({ color: '#fef08a' });
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const beeMat = new THREE.MeshBasicMaterial({ color: '#f59e0b' });

    // Stilts
    for (let sx of [-0.4, 0.4]) {
      for (let sz of [-0.4, 0.4]) {
        const stilt = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 4), woodMat);
        stilt.position.set(sx, 0.35, sz);
        group.add(stilt);
      }
    }

    // Tiered Wooden Hive Boxes
    for (let i = 0; i < 3; i++) {
      const box = new THREE.Mesh(new THREE.BoxGeometry(1.1 - i * 0.06, 0.4, 1.1 - i * 0.06), hiveMat);
      box.position.y = 0.85 + i * 0.42;
      box.castShadow = true;
      group.add(box);
    }

    // Overhanging Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.12, 1.2), woodMat);
    roof.position.y = 2.15;
    group.add(roof);

    // Honey Entrance Slot
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.06, 0.04), woodMat);
    slot.position.set(0, 0.85, 0.54);
    group.add(slot);

    // Hovering Bee particles
    this.beesGroup = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const bee = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 4), beeMat);
      bee.position.set(
        Math.cos(i * 1.3) * 0.8,
        1.5 + Math.sin(i * 1.5) * 0.4,
        Math.sin(i * 1.3) * 0.8
      );
      this.beesGroup.add(bee);
    }
    group.add(this.beesGroup);

    if (this.staticColliders) {
      this.staticColliders.push({ type: 'circle', x: x, z: z, radius: 1.2, id: 'beehive' });
    }

    group.userData = { buildingType: 'beehive' };
    return group;
  }

  // 4. 3D Farm Bakery & Oven
  create3DBakery(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const stoneMat = new THREE.MeshLambertMaterial({ color: '#cbd5e1' });
    const woodMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const roofMat = new THREE.MeshLambertMaterial({ color: '#b91c1c' });
    const ovenMat = new THREE.MeshLambertMaterial({ color: '#7f1d1d' });
    const fireMat = new THREE.MeshBasicMaterial({ color: '#f97316' });

    // Main Bakery Building
    const building = new THREE.Mesh(new THREE.BoxGeometry(6.5, 4.2, 5.5), stoneMat);
    building.position.y = 2.1;
    building.castShadow = true;
    group.add(building);

    // Gabled Roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(5.2, 2.6, 4), roofMat);
    roof.position.y = 5.2;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    // Chimney with baking smoke
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(1.0, 4.8, 1.0), stoneMat);
    chimney.position.set(2.2, 4.0, -1.5);
    group.add(chimney);

    // Outdoor Stone Brick Bread Oven
    const oven = new THREE.Mesh(new THREE.SphereGeometry(1.3, 10, 8), ovenMat);
    oven.scale.set(1.1, 0.9, 1.1);
    oven.position.set(-4.2, 1.1, 0.5);
    oven.castShadow = true;
    group.add(oven);

    // Glowing Oven Fire Portal
    const fire = new THREE.Mesh(new THREE.CircleGeometry(0.45, 8), fireMat);
    fire.position.set(-4.2, 0.9, 1.62);
    group.add(fire);

    // Wooden sales display counter
    const counter = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.0, 1.0), woodMat);
    counter.position.set(0, 0.5, 3.2);
    counter.castShadow = true;
    group.add(counter);

    if (this.staticColliders) {
      this.staticColliders.push({ type: 'box', minX: x - 3.5, maxX: x + 3.5, minZ: z - 3.0, maxZ: z + 3.0, id: 'bakery' });
    }

    group.userData = { buildingType: 'bakery' };
    return group;
  }

  // 5. 3D Glass Greenhouse
  create3DGreenhouse(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const baseMat = new THREE.MeshLambertMaterial({ color: '#475569' });
    const frameMat = new THREE.MeshStandardMaterial({ color: '#0f172a', roughness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: '#e0f2fe',
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.2
    });
    const leafMat = new THREE.MeshLambertMaterial({ color: '#16a34a' });

    // Stone Foundation Wall
    const base = new THREE.Mesh(new THREE.BoxGeometry(8.0, 0.7, 6.0), baseMat);
    base.position.y = 0.35;
    base.castShadow = true;
    group.add(base);

    // Translucent Glass Enclosure
    const glass = new THREE.Mesh(new THREE.BoxGeometry(7.6, 3.2, 5.6), glassMat);
    glass.position.y = 2.2;
    group.add(glass);

    // Glass Roof Gable
    const glassRoof = new THREE.Mesh(new THREE.ConeGeometry(5.2, 2.2, 4), glassMat);
    glassRoof.position.y = 4.8;
    glassRoof.rotation.y = Math.PI / 4;
    group.add(glassRoof);

    // Corner Iron Struts
    for (let sx of [-3.8, 3.8]) {
      for (let sz of [-2.8, 2.8]) {
        const strut = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.2, 0.16), frameMat);
        strut.position.set(sx, 2.2, sz);
        group.add(strut);
      }
    }

    // Lush Plants Visible Inside Glasshouse
    for (let i = 0; i < 6; i++) {
      const plant = new THREE.Mesh(new THREE.DodecahedronGeometry(0.45, 1), leafMat);
      plant.position.set((i % 3 - 1) * 2.2, 1.1, (i < 3 ? -1.2 : 1.2));
      group.add(plant);
    }

    if (this.staticColliders) {
      this.staticColliders.push({ type: 'box', minX: x - 4.2, maxX: x + 4.2, minZ: z - 3.2, maxZ: z + 3.2, id: 'greenhouse' });
    }

    group.userData = { buildingType: 'greenhouse' };
    return group;
  }

  createDecorations() {
    // 1. Pine and Apple trees scattered on edges
    const treeCoords = [
      [-16, -26], [16, -26], [-28, 0], [28, 0], [-18, 26], [18, 26],
      [-36, -18], [36, -18], [-36, 18], [36, 18]
    ];

    treeCoords.forEach(([x, z], idx) => {
      const tree = this.create3DTree(idx % 2 === 0 ? 'pine' : 'apple');
      tree.position.set(x, 0, z);
      this.scene.add(tree);

      // Register collision circle for farmer (solid tree trunk)
      if (this.staticColliders) {
        this.staticColliders.push({
          type: 'circle',
          x,
          z,
          radius: 0.95,
          id: 'tree'
        });
      }
    });

    // 2. Interactive 3D Farm Pets (Dog & Cat)
    this.create3DDog();
    this.create3DCat();

    // 3. Flower Beds along the paths
    this.createFlowerBeds();

    // 4. Warm Glow Lanterns along the main road
    this.createLanterns();
  }

  createFlowerBeds() {
    const flowerMatRed = new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.5 });
    const flowerMatYellow = new THREE.MeshStandardMaterial({ color: '#facc15', roughness: 0.5 });
    const flowerMatPink = new THREE.MeshStandardMaterial({ color: '#ec4899', roughness: 0.5 });
    const stemMat = new THREE.MeshStandardMaterial({ color: '#16a34a', roughness: 0.6 });

    const flowerSpots = [
      [-2.6, -14], [2.6, -14], [-2.6, 14], [2.6, 14],
      [-2.6, -3], [2.6, -3], [-2.6, 3], [2.6, 3],
      [-5, -23], [4, -23], [-16.5, -2], [16.5, -2]
    ];

    flowerSpots.forEach(([bx, bz], sIdx) => {
      const group = new THREE.Group();
      group.position.set(bx, 0, bz);

      for (let i = 0; i < 4; i++) {
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.45, 6), stemMat);
        stem.position.set((Math.random() - 0.5) * 0.8, 0.22, (Math.random() - 0.5) * 0.8);
        group.add(stem);

        const mat = i % 3 === 0 ? flowerMatRed : (i % 3 === 1 ? flowerMatYellow : flowerMatPink);
        const petal = new THREE.Mesh(new THREE.DodecahedronGeometry(0.14, 1), mat);
        petal.position.set(stem.position.x, 0.45, stem.position.z);
        group.add(petal);
      }
      this.scene.add(group);
    });
  }

  createLanterns() {
    const postMat = new THREE.MeshStandardMaterial({ color: '#451a03', roughness: 0.7 });
    const lanternMat = new THREE.MeshStandardMaterial({ color: '#fef08a', roughness: 0.2, emissive: '#fef08a', emissiveIntensity: 0.6 });

    const spots = [
      [-3.2, 0, -18], [3.2, 0, -18],
      [-3.2, 0, 18], [3.2, 0, 18]
    ];

    spots.forEach(([lx, ly, lz]) => {
      const group = new THREE.Group();
      group.position.set(lx, ly, lz);

      // Wooden Post
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 2.5, 8), postMat);
      post.position.y = 1.25;
      post.castShadow = true;
      group.add(post);

      // Hanging lantern
      const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.3), lanternMat);
      lantern.position.set(0, 2.4, 0.2);
      lantern.castShadow = true;
      group.add(lantern);

      // Warm point light glint
      const light = new THREE.PointLight(0xfef08a, 0.65, 10);
      light.position.set(0, 2.4, 0.2);
      group.add(light);

      this.scene.add(group);
    });
  }

  createRealisticMeadowGrass() {
    // 3D Instanced Meadow Grass Blades for lush atmosphere
    const bladeGeo = new THREE.ConeGeometry(0.12, 0.8, 4);
    bladeGeo.translate(0, 0.4, 0); // Pivot at base
    const bladeMat = new THREE.MeshStandardMaterial({
      color: '#4ade80',
      roughness: 0.6,
      metalness: 0.05,
      flatShading: true
    });

    const instanceCount = 1400;
    this.grassMesh = new THREE.InstancedMesh(bladeGeo, bladeMat, instanceCount);
    this.grassMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let placed = 0;

    for (let i = 0; i < instanceCount; i++) {
      const gx = (Math.random() - 0.5) * 160;
      const gz = (Math.random() - 0.5) * 160;

      // Keep clear of stone roads and central farming plot grid
      if (Math.abs(gx) < 3.8 || Math.abs(gz) < 3.8) continue;
      if (Math.abs(gx) < 17 && Math.abs(gz) < 17) continue;

      dummy.position.set(gx, 0, gz);
      const scaleY = 0.5 + Math.random() * 0.75;
      const scaleXZ = 0.7 + Math.random() * 0.6;
      dummy.scale.set(scaleXZ, scaleY, scaleXZ);
      dummy.rotation.y = Math.random() * Math.PI * 2;
      dummy.rotation.z = (Math.random() - 0.5) * 0.2;
      dummy.updateMatrix();

      this.grassMesh.setMatrixAt(placed, dummy.matrix);
      placed++;
    }

    this.grassMesh.count = placed;
    this.grassMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(this.grassMesh);
  }

  createAtmosphericEffects() {
    // 1. Chimney Smoke Particles
    this.smokePuffs = [];
    const smokeGeo = new THREE.DodecahedronGeometry(0.35, 1);

    this.smokeGroup = new THREE.Group();
    this.smokeGroup.position.set(-2.8, 7.5, -27.8);

    for (let i = 0; i < 14; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xf1f5f9,
        transparent: true,
        opacity: 0.4
      });
      const puff = new THREE.Mesh(smokeGeo, mat);
      puff.position.set(
        (Math.random() - 0.5) * 0.35,
        i * 0.45,
        (Math.random() - 0.5) * 0.35
      );
      puff.userData = {
        baseY: i * 0.45,
        speed: 0.75 + Math.random() * 0.5,
        driftX: (Math.random() - 0.35) * 0.4,
        scaleRate: 0.16 + Math.random() * 0.1
      };
      this.smokeGroup.add(puff);
      this.smokePuffs.push(puff);
    }
    this.scene.add(this.smokeGroup);

    // 2. Floating Sunlight Pollen / Dust Motes
    const motesCount = 100;
    const motesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(motesCount * 3);

    for (let i = 0; i < motesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 75;
      positions[i * 3 + 1] = 1 + Math.random() * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 75;
    }

    motesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const motesMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.28,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.sunMotes = new THREE.Points(motesGeo, motesMat);
    this.scene.add(this.sunMotes);

    // 3. Dynamic Rain Streaks System (400 drops)
    const rainCount = 400;
    const rainGeo = new THREE.BufferGeometry();
    const rainPos = new Float32Array(rainCount * 6);
    this.rainData = [];

    for (let i = 0; i < rainCount; i++) {
      const rx = (Math.random() - 0.5) * 80;
      const ry = 1 + Math.random() * 26;
      const rz = (Math.random() - 0.5) * 80;
      rainPos[i * 6] = rx;
      rainPos[i * 6 + 1] = ry;
      rainPos[i * 6 + 2] = rz;
      rainPos[i * 6 + 3] = rx - 0.15;
      rainPos[i * 6 + 4] = ry - 1.2;
      rainPos[i * 6 + 5] = rz - 0.15;
      this.rainData.push({ x: rx, y: ry, z: rz, speed: 28 + Math.random() * 12 });
    }

    rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
    const rainMat = new THREE.LineBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.65
    });
    this.rainMesh = new THREE.LineSegments(rainGeo, rainMat);
    this.rainMesh.visible = false;
    this.scene.add(this.rainMesh);

    // 4. Dynamic Gentle Snow Flakes System (300 flakes)
    const snowCount = 300;
    const snowGeo = new THREE.BufferGeometry();
    const snowPos = new Float32Array(snowCount * 3);
    this.snowData = [];

    for (let i = 0; i < snowCount; i++) {
      const sx = (Math.random() - 0.5) * 75;
      const sy = 1 + Math.random() * 24;
      const sz = (Math.random() - 0.5) * 75;
      snowPos[i * 3] = sx;
      snowPos[i * 3 + 1] = sy;
      snowPos[i * 3 + 2] = sz;
      this.snowData.push({ x: sx, y: sy, z: sz, speed: 2.2 + Math.random() * 1.8, sway: Math.random() * Math.PI * 2 });
    }

    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
    const snowMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.35,
      transparent: true,
      opacity: 0.85
    });
    this.snowMesh = new THREE.Points(snowGeo, snowMat);
    this.snowMesh.visible = false;
    this.scene.add(this.snowMesh);

    // 5. Dynamic Wind Autumn Leaves (60 leaves)
    this.windLeaves = [];
    const leafMat = new THREE.MeshLambertMaterial({ color: '#ea580c', side: THREE.DoubleSide });
    const leafGeo = new THREE.PlaneGeometry(0.35, 0.25);

    for (let i = 0; i < 60; i++) {
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set((Math.random() - 0.5) * 70, 1 + Math.random() * 8, (Math.random() - 0.5) * 70);
      leaf.userData = {
        speedX: 5.5 + Math.random() * 4,
        speedY: (Math.random() - 0.5) * 0.8,
        rotSpeed: (Math.random() - 0.5) * 4
      };
      leaf.visible = false;
      this.scene.add(leaf);
      this.windLeaves.push(leaf);
    }
  }

  updateAtmosphericEffects(dt, time) {
    const curWeather = this.timeWeather ? this.timeWeather.weather : 'sunny';

    // 1. Chimney Smoke
    if (this.smokePuffs) {
      this.smokePuffs.forEach(puff => {
        puff.position.y += puff.userData.speed * dt;
        puff.position.x += puff.userData.driftX * dt;
        const currentScale = 1 + puff.position.y * puff.userData.scaleRate;
        puff.scale.setScalar(currentScale);

        const maxDist = 5.5;
        const progress = Math.min(1, puff.position.y / maxDist);
        puff.material.opacity = Math.max(0, 0.4 * (1 - progress));

        if (puff.position.y > maxDist) {
          puff.position.y = 0;
          puff.position.x = (Math.random() - 0.5) * 0.3;
          puff.scale.setScalar(1);
          puff.material.opacity = 0.4;
        }
      });
    }

    // 2. Sun Motes (Sunny weather only)
    if (this.sunMotes) {
      this.sunMotes.visible = curWeather === 'sunny';
      if (this.sunMotes.visible) {
        const positions = this.sunMotes.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(time * 1.5 + positions[i]) * 0.015;
          positions[i] += Math.cos(time * 0.8 + positions[i + 2]) * 0.01;
        }
        this.sunMotes.geometry.attributes.position.needsUpdate = true;
      }
    }

    // 3. Rain & Stormy System
    const isRaining = curWeather === 'rainy' || curWeather === 'stormy';
    if (this.rainMesh) {
      this.rainMesh.visible = isRaining;
      if (isRaining) {
        const pos = this.rainMesh.geometry.attributes.position.array;
        for (let i = 0; i < this.rainData.length; i++) {
          const d = this.rainData[i];
          d.y -= d.speed * dt;
          if (d.y <= 0) {
            d.y = 24 + Math.random() * 4;
            d.x = (Math.random() - 0.5) * 80;
            d.z = (Math.random() - 0.5) * 80;
          }
          pos[i * 6] = d.x;
          pos[i * 6 + 1] = d.y;
          pos[i * 6 + 2] = d.z;
          pos[i * 6 + 3] = d.x - 0.15;
          pos[i * 6 + 4] = d.y - (curWeather === 'stormy' ? 1.6 : 1.1);
          pos[i * 6 + 5] = d.z - 0.15;
        }
        this.rainMesh.geometry.attributes.position.needsUpdate = true;

        // Lightning Flash Effect during storms
        if (curWeather === 'stormy' && this.timeWeather && this.timeWeather.isLightning) {
          if (this.sunLight) this.sunLight.intensity = 3.6;
        } else if (this.sunLight && curWeather === 'stormy') {
          this.sunLight.intensity = 0.55;
        }
      }
    }

    // 4. Snowy Weather System
    const isSnowing = curWeather === 'snowy';
    if (this.snowMesh) {
      this.snowMesh.visible = isSnowing;
      if (isSnowing) {
        const pos = this.snowMesh.geometry.attributes.position.array;
        for (let i = 0; i < this.snowData.length; i++) {
          const d = this.snowData[i];
          d.y -= d.speed * dt;
          d.x += Math.sin(time + d.sway) * 0.04;
          if (d.y <= 0) {
            d.y = 22 + Math.random() * 4;
            d.x = (Math.random() - 0.5) * 75;
          }
          pos[i * 3] = d.x;
          pos[i * 3 + 1] = d.y;
          pos[i * 3 + 2] = d.z;
        }
        this.snowMesh.geometry.attributes.position.needsUpdate = true;
      }
    }

    // 5. Windy Leaves Swirl
    const isWindy = curWeather === 'windy';
    if (this.windLeaves) {
      this.windLeaves.forEach(leaf => {
        leaf.visible = isWindy;
        if (isWindy) {
          leaf.position.x += leaf.userData.speedX * dt;
          leaf.position.y += Math.sin(time * 2 + leaf.position.x) * 0.05;
          leaf.rotation.z += leaf.userData.rotSpeed * dt;
          if (leaf.position.x > 40) {
            leaf.position.x = -40;
            leaf.position.z = (Math.random() - 0.5) * 70;
            leaf.position.y = 1 + Math.random() * 6;
          }
        }
      });
    }

    // 6. Fast Windmill Spinning during windy weather
    if (this.bladesGroup) {
      const spinSpeed = curWeather === 'windy' ? 3.5 : 1.0;
      this.bladesGroup.rotation.z += 0.8 * spinSpeed * dt;
    }
  }

  petAnimal(petMesh) {
    if (!petMesh) return;
    const isDog = petMesh.userData.petType === 'dog';
    sounds.click();
    confetti({ particleCount: 25, spread: 65, origin: { x: 0.5, y: 0.5 } });

    // GSAP lively squish and bounce
    gsap.to(petMesh.scale, {
      y: 1.35,
      x: 0.85,
      z: 0.85,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: 'back.out(2)'
    });

    // Add Energy & XP
    this.state.energy = Math.min(this.state.maxEnergy, this.state.energy + 5);
    this.state.addXp(5);
    this.state.notify();

    const text = isDog ? 'مسحت على الكلب الوفي! 🐶 (+5 طاقة)' : 'داعبت القطة الكيوت! 🐱 (+5 طاقة)';
    this.particles.addFloatingText(text, petMesh.position.x, 25, '#fbbf24', 20);
  }

  create3DTree(type = 'pine') {
    const group = new THREE.Group();
    const trunkMat = new THREE.MeshLambertMaterial({ color: '#78350f' });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 2.5, 8), trunkMat);
    trunk.position.y = 1.25;
    trunk.castShadow = true;
    group.add(trunk);

    if (type === 'pine') {
      const pineMat = new THREE.MeshLambertMaterial({ color: '#14532d' });
      for (let i = 0; i < 3; i++) {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(2.4 - i * 0.5, 2.2, 8), pineMat);
        cone.position.y = 2.4 + i * 1.3;
        cone.castShadow = true;
        group.add(cone);
      }
    } else {
      const oakMat = new THREE.MeshLambertMaterial({ color: '#15803d' });
      const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(2.0, 1), oakMat);
      foliage.position.y = 3.2;
      foliage.castShadow = true;
      group.add(foliage);

      // Red apples
      const appleMat = new THREE.MeshLambertMaterial({ color: '#ef4444' });
      for (let i = 0; i < 5; i++) {
        const apple = new THREE.Mesh(new THREE.SphereGeometry(0.25, 6, 6), appleMat);
        apple.position.set((Math.random() - 0.5) * 2, 2.8 + Math.random() * 1.2, (Math.random() - 0.5) * 2);
        group.add(apple);
      }
    }

    return group;
  }

  // ==========================================================
  // INPUT & CONTROLS: 3D Movement, Raycasting, Farming Actions
  // ==========================================================
  initEvents() {
    this.keys = {};
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.planeIntersection = new THREE.Vector3();
    this.isPointerDown = false;
    this.isDragMoving = false;
    this.pointerDownTime = 0;
    this.pointerDownPos = { x: 0, y: 0 };
    this.targetMovePoint = null;

    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      // Number keys 1-9, 0 to select available seeds from bottom bar
      if (e.key >= '1' && e.key <= '9') {
        const slotIdx = parseInt(e.key, 10) - 1;
        const slots = document.querySelectorAll('#hotbar-slots .stardew-slot');
        if (slots[slotIdx] && !slots[slotIdx].classList.contains('locked-slot')) {
          slots[slotIdx].click();
        }
      } else if (e.key === '0') {
        const slots = document.querySelectorAll('#hotbar-slots .stardew-slot');
        if (slots[9] && !slots[9].classList.contains('locked-slot')) {
          slots[9].click();
        }
      }

      // E or Space to interact with hovered tile
      if (e.code === 'KeyE' || e.code === 'Space') {
        e.preventDefault();
        this.interactCurrentHover();
      }

      // KeyB to toggle Farm Customizer / Builder Mode
      if (e.code === 'KeyB') {
        this.toggleBuilderMode();
      }

      // KeyQ and KeyR to rotate camera in 90-degree isometric steps
      if (e.code === 'KeyQ') {
        this.rotateIsometricAngle(-1);
      } else if (e.code === 'KeyR') {
        this.rotateIsometricAngle(1);
      }

      // KeyP to cycle retro pixel art scales (4x -> 3x -> 6x -> 1x HD)
      if (e.code === 'KeyP') {
        this.cyclePixelArtScale();
      }

      // KeyV to toggle between Orthographic Isometric and Perspective
      if (e.code === 'KeyV') {
        this.toggleCameraProjection();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    window.addEventListener('resize', () => this.onResize());

    // Helper to calculate ground intersection from client (x, y)
    const updateGroundTarget = (clientX, clientY) => {
      this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      if (this.raycaster.ray.intersectPlane(this.groundPlane, this.planeIntersection)) {
        if (!this.targetMovePoint) {
          this.targetMovePoint = new THREE.Vector3();
        }
        this.targetMovePoint.copy(this.planeIntersection);
      }
    };

    // Shared Click/Tap Resolver for Tapping on Plots, Farmer, Animals, Buildings
    const handleCanvasClickOrTap = (clientX, clientY) => {
      this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);

      // 1. Builder Mode Click Handling
      if (this.isBuilderMode) {
        const hits = this.raycaster.intersectObjects(this.scene.children, true);
        let hitObj = null;
        for (const h of hits) {
          if (h.object !== this.groundMesh && h.object !== this.cursorMesh && h.object !== this.builderHighlightMesh) {
            hitObj = h.object;
            break;
          }
        }
        if (this.raycaster.ray.intersectPlane(this.groundPlane, this.planeIntersection)) {
          this.handleBuilderClick(this.planeIntersection, hitObj);
        }
        return;
      }

      // 2. Modular Road Edit Mode
      if (this.isRoadEditMode) {
        updateGroundTarget(clientX, clientY);
        this.handleRoadEditClick({ clientX, clientY });
        return;
      }

      // 3. Placing New Plot Mode
      if (this.isPlacingNewPlotMode) {
        updateGroundTarget(clientX, clientY);
        if (this.planeIntersection) {
          const gx = Math.round(this.planeIntersection.x / 1.3) * 1.3;
          const gz = Math.round(this.planeIntersection.z / 1.3) * 1.3;
          this.buyAndPlacePlotAt(gx, gz);
        }
        return;
      }

      // 4. Moving Plot Mode
      if (this.isMovingPlotMode) {
        this.handlePlotMoveInteraction();
        return;
      }

      // 5. Direct Object Interaction (Farmer, Crops, Animals, Trough, Signs)
      const hits = this.raycaster.intersectObjects(this.scene.children, true);
      let targetObj = null;

      for (const h of hits) {
        let obj = h.object;
        if (obj === this.cursorMesh || obj === this.plotGhostBox || obj === this.plotPlacementGhost || obj?.userData?.isHelper) continue;

        if (obj.userData?.isFarmer || obj.userData?.rootFarmer || obj === this.farmerGroup || obj.parent === this.farmerGroup) {
          targetObj = this.farmerGroup;
          break;
        }

        if (obj.userData?.rootPlot) { obj = obj.userData.rootPlot; }
        while (obj && !this.isInteractiveObject(obj) && obj.parent && obj.parent !== this.scene) {
          if (obj.userData?.isFarmer || obj.userData?.rootFarmer) { targetObj = this.farmerGroup; break; }
          if (obj.userData?.rootPlot) { obj = obj.userData.rootPlot; break; }
          obj = obj.parent;
        }
        if (targetObj) break;
        if (this.isInteractiveObject(obj)) {
          targetObj = obj;
          break;
        }
      }

      if (targetObj) {
        if (targetObj === this.farmerGroup || targetObj.userData?.isFarmer) {
          this.onFarmerClicked();
          return;
        }
        this.hoveredObject = targetObj;
        this.interactCurrentHover();
      }
    };

    // ==========================================================
    // TOUCH CONTROLS FOR MOBILE AND TABLET (Pan In All Directions & Pinch Zoom)
    // ==========================================================
    this.canvas.addEventListener('touchstart', (e) => {
      sounds.init();
      bgm.play();

      if (e.touches.length === 1) {
        this.touchPanActive = true;
        this.isTouchDraggingFarm = false;
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.touchLastX = this.touchStartX;
        this.touchLastY = this.touchStartY;
        this.touchStartTime = performance.now();
        this.touchTotalDist = 0;
        this.panVelocity.set(0, 0);
      } else if (e.touches.length === 2) {
        this.isPinchZooming = true;
        this.touchPanActive = false;
        this.pinchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        this.pinchStartFrustum = this.frustumSize;
        this.pinchStartDistance = this.cameraDistance;
      }
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      // Two-finger pinch to zoom in/out
      if (e.touches.length === 2 && this.isPinchZooming) {
        e.preventDefault();
        const curDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (this.pinchStartDist > 8 && curDist > 8) {
          const ratio = this.pinchStartDist / curDist;
          if (this.isOrthographic) {
            this.frustumSize = THREE.MathUtils.clamp(this.pinchStartFrustum * ratio, 16, 58);
            this.updateCameraFrustum();
          } else {
            this.cameraDistance = THREE.MathUtils.clamp(this.pinchStartDistance * ratio, 16, 54);
            this.cameraHeight = this.cameraDistance * (26 / 32);
          }
        }
        return;
      }

      // Single-finger touch drag across the farm in all directions
      if (e.touches.length === 1 && this.touchPanActive) {
        const curX = e.touches[0].clientX;
        const curY = e.touches[0].clientY;
        const dx = curX - this.touchLastX;
        const dy = curY - this.touchLastY;
        this.touchTotalDist += Math.hypot(dx, dy);

        if (this.touchTotalDist > 7) {
          this.isTouchDraggingFarm = true;
          e.preventDefault();

          const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
          camRight.y = 0;
          camRight.normalize();

          const camUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
          camUp.y = 0;
          camUp.normalize();

          const worldScale = (this.isOrthographic ? this.frustumSize : this.cameraDistance * 0.9) / Math.min(window.innerWidth, window.innerHeight);
          const stepX = -dx * worldScale;
          const stepY = dy * worldScale;

          this.cameraFocusPoint.addScaledVector(camRight, stepX);
          this.cameraFocusPoint.addScaledVector(camUp, stepY);
          this.cameraFocusPoint.x = THREE.MathUtils.clamp(this.cameraFocusPoint.x, -38, 38);
          this.cameraFocusPoint.z = THREE.MathUtils.clamp(this.cameraFocusPoint.z, -36, 36);

          this.panVelocity.set(stepX, stepY);
          this.touchLastX = curX;
          this.touchLastY = curY;
        }
      }
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      if (this.isPinchZooming) {
        if (e.touches.length < 2) this.isPinchZooming = false;
        return;
      }

      if (this.touchPanActive) {
        this.touchPanActive = false;
        // Clean single tap without dragging -> trigger action or talk to farmer
        if (!this.isTouchDraggingFarm && this.touchTotalDist <= 8 && (performance.now() - this.touchStartTime < 350)) {
          handleCanvasClickOrTap(this.touchStartX, this.touchStartY);
        }
        this.isTouchDraggingFarm = false;
      }
    });

    this.canvas.addEventListener('touchcancel', () => {
      this.touchPanActive = false;
      this.isTouchDraggingFarm = false;
      this.isPinchZooming = false;
    });

    // ==========================================================
    // DESKTOP MOUSE CONTROLS (Click to interact, Drag to Pan Farm)
    // ==========================================================
    this.canvas.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') return; // Handled by touch events
      sounds.init();
      bgm.play();

      // Right or middle mouse button -> start camera drag pan directly
      if (e.button === 1 || e.button === 2) {
        e.preventDefault();
        this.mouseDragPanActive = true;
        this.mouseDragLastX = e.clientX;
        this.mouseDragLastY = e.clientY;
        return;
      }

      if (e.button !== 0) return; // Primary left click

      this.mouseDragPanActive = true;
      this.isMouseDraggingFarm = false;
      this.mouseDragStartX = e.clientX;
      this.mouseDragStartY = e.clientY;
      this.mouseDragLastX = e.clientX;
      this.mouseDragLastY = e.clientY;
      this.mouseDragStartTime = performance.now();
      this.mouseDragTotalDist = 0;
    });

    window.addEventListener('pointermove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Desktop Mouse Drag Pan
      if (this.mouseDragPanActive && e.pointerType !== 'touch') {
        const dx = e.clientX - this.mouseDragLastX;
        const dy = e.clientY - this.mouseDragLastY;
        this.mouseDragTotalDist = (this.mouseDragTotalDist || 0) + Math.hypot(dx, dy);

        if (this.mouseDragTotalDist > 6) {
          this.isMouseDraggingFarm = true;
          const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
          camRight.y = 0;
          camRight.normalize();

          const camUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
          camUp.y = 0;
          camUp.normalize();

          const worldScale = (this.isOrthographic ? this.frustumSize : this.cameraDistance * 0.9) / Math.min(window.innerWidth, window.innerHeight);
          const stepX = -dx * worldScale;
          const stepY = dy * worldScale;

          this.cameraFocusPoint.addScaledVector(camRight, stepX);
          this.cameraFocusPoint.addScaledVector(camUp, stepY);
          this.cameraFocusPoint.x = THREE.MathUtils.clamp(this.cameraFocusPoint.x, -38, 38);
          this.cameraFocusPoint.z = THREE.MathUtils.clamp(this.cameraFocusPoint.z, -36, 36);

          this.panVelocity.set(stepX, stepY);
          this.mouseDragLastX = e.clientX;
          this.mouseDragLastY = e.clientY;
        }
      }

      // Desktop Screen Edge Pan Detection
      const w = window.innerWidth;
      const h = window.innerHeight;
      const margin = this.edgePanMargin || 38;

      let panX = 0;
      let panY = 0;

      const isModalOpen = document.getElementById('modal-overlay')?.classList.contains('hidden') === false;
      const isOverUI = e.target && (e.target.closest('#modal-overlay, #stardew-right-hud, #bottom-hud-container, .plot-move-banner') !== null);

      if (!isModalOpen && !isOverUI && !this.mouseDragPanActive) {
        if (e.clientX <= margin && e.clientX >= 0) {
          panX = -1; // Pan Left
        } else if (e.clientX >= w - margin && e.clientX <= w) {
          panX = 1; // Pan Right
        }

        if (e.clientY <= margin && e.clientY >= 0) {
          panY = 1; // Pan Up
        } else if (e.clientY >= h - margin && e.clientY <= h) {
          panY = -1; // Pan Down
        }
      }

      this.edgePanDir.set(panX, panY);
      this.isEdgePanning = (panX !== 0 || panY !== 0);

      // Builder, Road Edit & Plot Placement Hover Updates
      if (this.isBuilderMode) {
        updateGroundTarget(e.clientX, e.clientY);
        if (this.isBuilderPainting && this.planeIntersection) {
          this.handleBuilderClick(this.planeIntersection, null);
        }
        return;
      }

      if (this.isRoadEditMode) {
        updateGroundTarget(e.clientX, e.clientY);
        this.updateRoadEditHover();
        return;
      }

      if (this.isPlacingNewPlotMode && this.plotPlacementGhost) {
        updateGroundTarget(e.clientX, e.clientY);
        if (this.planeIntersection) {
          const gx = Math.round(this.planeIntersection.x / 1.3) * 1.3;
          const gz = Math.round(this.planeIntersection.z / 1.3) * 1.3;
          this.plotPlacementGhost.position.set(gx, 0.18, gz);
          this.plotPlacementGhost.visible = true;
          const isValid = this.canPlacePlotAt(gx, gz, '__new__') && this.state.coins >= 50;
          this.plotPlacementGhost.material.color.setHex(isValid ? 0x22c55e : 0xef4444);
        }
        return;
      }

      if (this.isMovingPlotMode && this.selectedPlotToMove) {
        updateGroundTarget(e.clientX, e.clientY);
        if (this.planeIntersection && this.plotGhostBox) {
          const gx = Math.round(this.planeIntersection.x / 1.3) * 1.3;
          const gz = Math.round(this.planeIntersection.z / 1.3) * 1.3;
          this.plotGhostBox.position.set(gx, 0.16, gz);
          this.plotGhostBox.visible = true;
          const isValid = this.canPlacePlotAt(gx, gz, this.selectedPlotToMove.userData.key);
          this.plotGhostBox.material.color.setHex(isValid ? 0x22c55e : 0xef4444);
        }
        return;
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (e.pointerType === 'touch') return;

      if (this.isBuilderMode) {
        this.isBuilderPainting = false;
      }

      if (this.mouseDragPanActive) {
        this.mouseDragPanActive = false;
        if (!this.isMouseDraggingFarm && (this.mouseDragTotalDist || 0) <= 6 && e.button === 0) {
          handleCanvasClickOrTap(e.clientX, e.clientY);
        }
        this.isMouseDraggingFarm = false;
      }
    });

    window.addEventListener('pointercancel', () => {
      this.mouseDragPanActive = false;
      this.isMouseDraggingFarm = false;
      this.edgePanDir.set(0, 0);
      this.isEdgePanning = false;
    });

    window.addEventListener('pointerleave', () => {
      this.mouseDragPanActive = false;
      this.isMouseDraggingFarm = false;
      this.edgePanDir.set(0, 0);
      this.isEdgePanning = false;
    });

    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    // Mouse wheel zoom with frustum & golden angle preservation
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.03;
      if (this.isOrthographic) {
        this.frustumSize = Math.max(16, Math.min(58, this.frustumSize + zoomDelta));
        this.updateCameraFrustum();
      } else {
        this.cameraDistance = Math.max(16, Math.min(54, this.cameraDistance + zoomDelta));
        this.cameraHeight = this.cameraDistance * (26 / 32);
      }
    }, { passive: false });
  }

  onResize() {
    this.updateCameraFrustum();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (this.composer) {
      this.composer.setSize(window.innerWidth, window.innerHeight);
    }
    if (this.pixelPass) {
      this.pixelPass.setSize(window.innerWidth, window.innerHeight);
    }
  }

  interactCurrentHover() {
    if (!this.hoveredObject) return;

    const data = this.hoveredObject.userData;

    // 00. Farmer Clicked -> Fun reaction, cheerful speech, jump & hearts!
    if (data.isFarmer || data.rootFarmer || this.hoveredObject === this.farmerGroup) {
      this.onFarmerClicked();
      return;
    }

    // 0A. Trough Station Clicked -> Fill food & water!
    if (data.isTrough) {
      this.fillTroughStation(data);
      return;
    }

    // 0B. Animal Clicked -> Pet animal, happy hearts & sound!
    if (data.isAnimal) {
      sounds.click();
      const type = data.type || 'cow';
      if (sounds.animal) sounds.animal(type);
      this.particles.addHeart(this.hoveredObject.position.x, this.hoveredObject.position.z);
      this.particles.addFloatingText(`داعبت الحيوان بسعادة! ❤️ (+3 طاقة)`, this.hoveredObject.position.x, 25, '#fbbf24', 20);
      this.state.energy = Math.min(this.state.maxEnergy, this.state.energy + 3);
      this.state.notify();
      gsap.to(this.hoveredObject.scale, { y: 1.25, duration: 0.15, yoyo: true, repeat: 1 });
      return;
    }

    // 0C. Farm Pet Clicked -> Love, GSAP bounce, Sound & Energy!
    if (data.isPet) {
      this.petAnimal(this.hoveredObject);
      return;
    }

    // 1. Expansion Signpost Clicked -> Purchase 20 More Plots!
    if (data.isExpansionSign) {
      this.expandFarmingPlots();
      return;
    }

    // 2. Locked Animal Farm Clicked -> Unlock/Build it!
    if (data.isLockTrigger) {
      this.unlockAnimalFarm(data.farmType);
      return;
    }

    // 3. Central Farming Plot Clicked -> Till, Water, Plant, Harvest
    let plotObj = this.hoveredObject;
    if (plotObj && plotObj.userData && (plotObj.userData.rootPlot || plotObj.userData.plotGroup)) {
      plotObj = plotObj.userData.rootPlot || plotObj.userData.plotGroup;
    }
    while (plotObj && !plotObj.userData.isPlot && plotObj.parent && plotObj.parent !== this.scene) {
      if (plotObj.userData && (plotObj.userData.rootPlot || plotObj.userData.plotGroup)) {
        plotObj = plotObj.userData.rootPlot || plotObj.userData.plotGroup;
        break;
      }
      plotObj = plotObj.parent;
    }
    if (plotObj && plotObj.userData && plotObj.userData.isPlot) {
      const data = plotObj.userData;
      const key = data.key;
      const plotPos = plotObj.position;
      const crop = this.crops.get(key);
      const activeTool = this.activeTool || this.state?.activeTool || 'hoe';
      const isHoe = activeTool === 'hoe';
      const isWater = activeTool === 'water';
      const isHarvest = activeTool === 'harvest';
      const isPlant = activeTool === 'plant';
      const selectedSeed = this.state?.selectedSeed || this.selectedSeed || 'corn';

      // A. Ripe Crop Harvest: When Harvest tool (Scythe) is selected
      if (crop && crop.isMature) {
        if (isHarvest) {
          this.scene.remove(crop.group);
          this.crops.delete(key);
          const cropDef = CROPS[crop.cropType] || { sellPrice: 25, xp: 15, name: crop.cropType };
          sounds.harvest();
          confetti({ particleCount: 30, spread: 70, origin: { x: 0.5, y: 0.6 } });
          this.state.addHarvestedItem(crop.cropType, 1);
          this.state.addCoins(cropDef.sellPrice);
          this.state.addXp(cropDef.xp);
          this.particles.addFloatingText(`+1 حصاد ${cropDef.name}! 🌾 (+${cropDef.sellPrice} G)`, plotPos.x, 25, '#ffd166', 20);

          data.state = 'tilled';
          if (data.soilMesh) data.soilMesh.material = this.soilDryMat;
          else plotObj.material = this.soilDryMat;
          if (data.furrows) {
            data.furrows.forEach(f => { f.visible = true; f.material = this.soilDryMat; });
          }
          this.updateActiveCropsHUD();
          this.state.notify();
          return;
        } else {
          sounds.click();
          this.particles.addFloatingText('اختر منجل الحصاد 🌾 من الشريط بالأعلى لحصاد هذا المحصول!', plotPos.x, 25, '#fbbf24', 18);
          return;
        }
      }

      // B. Growing Crop (not yet mature)
      if (crop && !crop.isMature) {
        if (isWater && data.state === 'tilled') {
          data.state = 'watered';
          if (data.soilMesh) data.soilMesh.material = this.soilWetMat;
          else plotObj.material = this.soilWetMat;
          sounds.water();
          this.state.useEnergy(0.2);
          this.particles.addWaterSplash(plotPos.x, plotPos.z);
          this.particles.addFloatingText(`سقيت النبتة! 💧`, plotPos.x, 25, '#38bdf8', 16);
          this.state.notify();
          return;
        } else if (isWater && data.state === 'watered') {
          sounds.click();
          this.particles.addFloatingText('النبتة مروية ورطبة بالفعل 💧', plotPos.x, 25, '#38bdf8', 16);
          return;
        } else {
          sounds.click();
          const cropDef = CROPS[crop.cropType] || { name: crop.cropType };
          const pct = Math.min(99, Math.round((crop.growthTimer / crop.growthTime) * 100));
          this.particles.addFloatingText(`${cropDef.name}: في مرحلة النمو 🌱 (${pct}%)`, plotPos.x, 25, '#86efac', 16);
          return;
        }
      }

      // C. Grass Turf: Till with Hoe
      if (data.state === 'grass') {
        if (isHoe) {
          data.state = 'tilled';
          if (data.soilMesh) data.soilMesh.material = this.soilDryMat;
          else plotObj.material = this.soilDryMat;
          if (data.furrows) {
            data.furrows.forEach(f => { f.visible = true; f.material = this.soilDryMat; });
          }
          sounds.till();
          this.state.useEnergy(0.3);
          this.particles.addDirtBurst(plotPos.x, plotPos.z);
          this.particles.addFloatingText(`حرثت الأرض! ⛏️`, plotPos.x, 25, '#a16207', 16);
          this.state.notify();
          return;
        } else {
          sounds.click();
          this.particles.addFloatingText('اختر فأس الحراثة ⛏️ لحرث هذا الحوض!', plotPos.x, 25, '#fed7aa', 18);
          return;
        }
      }

      // D. Dry Tilled Soil: Water with Watering Can
      if (data.state === 'tilled' && !crop && isWater) {
        data.state = 'watered';
        if (data.soilMesh) data.soilMesh.material = this.soilWetMat;
        else plotObj.material = this.soilWetMat;
        if (data.furrows) {
          data.furrows.forEach(f => { f.visible = true; f.material = this.soilWetMat; });
        }
        sounds.water();
        this.state.useEnergy(0.2);
        this.particles.addWaterSplash(plotPos.x, plotPos.z);
        this.particles.addFloatingText(`سقيت التربة! 💧`, plotPos.x, 25, '#38bdf8', 16);
        this.state.notify();
        return;
      }

      // E. Tilled or Watered Soil: Plant with Selected Seed
      if ((data.state === 'tilled' || data.state === 'watered') && !crop) {
        if (isPlant) {
          const cropDef = CROPS[selectedSeed] || CROPS.corn;
          const seedCount = this.state.getItemTotalCount(selectedSeed);
          if (seedCount > 0) {
            this.state.consumeItem(selectedSeed, 1);
          } else if (this.state.coins >= cropDef.seedCost) {
            this.state.spendCoins(cropDef.seedCost);
            this.particles.addFloatingText(`-${cropDef.seedCost} G (شراء بذرة)`, plotPos.x, 28, '#ffd166', 15);
          } else {
            sounds.click();
            this.particles.addFloatingText(`لا توجد بذور ${cropDef.name} ولا ذهب كافٍ (${cropDef.seedCost} G)! 🪙`, plotPos.x, 25, '#ef4444', 18);
            return;
          }

          this.plantCrop3D(key, plotPos.x, plotPos.z, selectedSeed, 0);
          sounds.plant();
          this.state.useEnergy(0.2);
          this.particles.addFloatingText(`زرعت ${cropDef.name}! 🌱`, plotPos.x, 25, '#4ade80', 16);
          this.updateActiveCropsHUD();
          this.state.notify();
          return;
        } else if (isHoe) {
          sounds.click();
          this.particles.addFloatingText('الحوض محروث بالفعل! اختر السقي 💧 أو وضع البذر 🌱', plotPos.x, 25, '#86efac', 16);
          return;
        } else if (isHarvest) {
          sounds.click();
          this.particles.addFloatingText('لا يوجد محصول ناضج هنا للحصاد 🌾', plotPos.x, 25, '#fbbf24', 16);
          return;
        } else if (isWater && data.state === 'watered') {
          sounds.click();
          this.particles.addFloatingText('التربة مروية ورطبة بالفعل 💧 جاهزة للبذر 🌱', plotPos.x, 25, '#38bdf8', 16);
          return;
        }
      }
    }
  }

  // ==========================================================
  // UI COMPATIBILITY ADAPTERS & ACTIONS
  // ==========================================================
  get farmer() {
    const pos = this.farmerGroup ? this.farmerGroup.position : { x: 0, y: 0, z: 0 };
    return {
      x: pos.x,
      y: pos.z,
      position: pos,
      getTargetTile: () => this.getTargetTileInFrontOfFarmer(),
      triggerAction: (act) => this.triggerFarmerAction(act)
    };
  }

  get tileMap() {
    return {
      till: (col, row) => this.tillPlot(col, row),
      water: (col, row) => this.waterPlot(col, row)
    };
  }

  get cropsManager() {
    return {
      plant: (col, row, seed) => this.plantSeedAt(col, row, seed),
      getCrop: (col, row) => this.getCropAt(col, row),
      harvest: (col, row) => this.harvestCropAt(col, row)
    };
  }

  get animalsManager() {
    return {
      addAnimal: (type) => this.add3DAnimal(type)
    };
  }

  getTargetTileInFrontOfFarmer() {
    const p = this.farmerGroup ? this.farmerGroup.position : { x: 0, z: 0 };
    let closestKey = null;
    let minDist = Infinity;
    for (const [key, mesh] of this.plotObjects.entries()) {
      const d = Math.hypot(mesh.position.x - p.x, mesh.position.z - p.z);
      if (d < minDist) {
        minDist = d;
        closestKey = key;
      }
    }
    if (closestKey) {
      const [col, row] = closestKey.split(',').map(Number);
      return { col, row };
    }
    return { col: 0, row: 0 };
  }

  triggerFarmerAction(actionType) {
    if (!this.farmerGroup) return;

    // Fluid GSAP jump bounce
    gsap.to(this.farmerGroup.position, {
      y: 0.35,
      duration: 0.12,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    // Right arm swing / strike with held tool
    if (this.rightArm) {
      gsap.to(this.rightArm.rotation, {
        x: -1.2,
        duration: 0.14,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
  }

  findBestPlotForAction(type) {
    if (this.hoveredObject && this.hoveredObject.userData && this.hoveredObject.userData.isPlot) {
      return this.hoveredObject;
    }

    const fPos = this.farmerGroup ? this.farmerGroup.position : { x: 0, z: 0 };
    let bestPlot = null;
    let bestDist = Infinity;

    for (const mesh of this.plotObjects.values()) {
      const key = mesh.userData.key;
      const crop = this.crops.get(key);
      const state = mesh.userData.state;

      let match = false;
      if (type === 'till' && state === 'grass') match = true;
      else if (type === 'water' && state === 'tilled') match = true;
      else if (type === 'plant' && (state === 'tilled' || state === 'watered') && !crop) match = true;
      else if (type === 'harvest' && crop && crop.isMature) match = true;
      else if (type === 'any') match = true;

      const dist = Math.hypot(mesh.position.x - fPos.x, mesh.position.z - fPos.z);
      if (match && dist < bestDist) {
        bestDist = dist;
        bestPlot = mesh;
      }
    }

    if (!bestPlot) {
      bestDist = Infinity;
      for (const mesh of this.plotObjects.values()) {
        const dist = Math.hypot(mesh.position.x - fPos.x, mesh.position.z - fPos.z);
        if (dist < bestDist) {
          bestDist = dist;
          bestPlot = mesh;
        }
      }
    }

    return bestPlot;
  }

  tillAction() {
    const plot = this.findBestPlotForAction('till');
    if (plot) {
      this.tillPlotByKey(plot.userData.key);
    }
  }

  waterAction() {
    const plot = this.findBestPlotForAction('water');
    if (plot) {
      this.waterPlotByKey(plot.userData.key);
    }
  }

  plantAction(seedType) {
    const plot = this.findBestPlotForAction('plant');
    if (plot) {
      const current = this.state.getSelectedItem();
      let seed = seedType || (current && current.type === 'seed' && current.count > 0 ? (current.cropId || current.id) : 'carrot');
      this.plantSeedByKey(plot.userData.key, seed);
    }
  }

  harvestAction() {
    const plot = this.findBestPlotForAction('harvest');
    if (plot) {
      this.harvestPlotByKey(plot.userData.key);
    }
  }

  tillPlot(col, row) {
    return this.tillPlotByKey(`${col},${row}`);
  }

  tillPlotByKey(key) {
    const plot = this.plotObjects.get(key);
    if (!plot) return false;
    plot.userData.state = 'tilled';
    if (plot.userData.soilMesh) plot.userData.soilMesh.material = this.soilDryMat;
    else if (plot.material) plot.material = this.soilDryMat;
    if (plot.userData.furrows) {
      plot.userData.furrows.forEach(f => { f.visible = true; f.material = this.soilDryMat; });
    }
    sounds.till();
    this.state.useEnergy(0.3);
    this.particles.addDirtBurst(plot.position.x, plot.position.z);
    this.particles.addFloatingText('تم الحرث! ⛏️', plot.position.x, 25, '#ffd166', 18);
    this.triggerFarmerAction('till');
    return true;
  }

  waterPlot(col, row) {
    return this.waterPlotByKey(`${col},${row}`);
  }

  waterPlotByKey(key) {
    const plot = this.plotObjects.get(key);
    if (!plot) return false;
    if (this.state.useWater()) {
      plot.userData.state = 'watered';
      if (plot.userData.soilMesh) plot.userData.soilMesh.material = this.soilWetMat;
      else if (plot.material) plot.material = this.soilWetMat;
      if (plot.userData.furrows) {
        plot.userData.furrows.forEach(f => { f.visible = true; f.material = this.soilWetMat; });
      }
      sounds.water();
      this.particles.addWaterSplash(plot.position.x, plot.position.z);
      this.particles.addFloatingText('تم الري! 💧', plot.position.x, 25, '#38bdf8', 18);
      this.triggerFarmerAction('water');
      return true;
    } else {
      this.particles.addFloatingText('المرشة فارغة! 💧', plot.position.x, 25, '#ef4444', 18);
      return false;
    }
  }

  plantSeedAt(col, row, seedType) {
    return this.plantSeedByKey(`${col},${row}`, seedType);
  }

  plantSeedByKey(key, seedType = 'corn') {
    const plot = this.plotObjects.get(key);
    if (!plot) return false;
    if (this.crops.has(key)) return false;

    if (plot.userData.state === 'grass') {
      this.tillPlotByKey(key);
    }

    this.plantCrop3D(key, plot.position.x, plot.position.z, seedType, 0);
    sounds.plant();
    this.state.consumeItem(seedType, 1);
    this.state.useEnergy(0.2);
    const cropDef = CROPS[seedType];
    const cropName = cropDef ? cropDef.name : seedType;
    this.particles.addFloatingText(`زرعت ${cropName}! 🌱`, plot.position.x, 25, '#4ade80', 18);
    this.triggerFarmerAction('plant');
    this.updateActiveCropsHUD();
    return true;
  }

  getCropAt(col, row) {
    return this.crops.get(`${col},${row}`) || null;
  }

  harvestCropAt(col, row) {
    return this.harvestPlotByKey(`${col},${row}`);
  }

  harvestPlotByKey(key) {
    const crop = this.crops.get(key);
    if (!crop || !crop.isMature) return null;

    const plot = this.plotObjects.get(key);
    const posX = plot ? plot.position.x : 0;

    this.scene.remove(crop.group);
    this.crops.delete(key);

    const cropDef = CROPS[crop.cropType] || { sellPrice: 25, xp: 15, name: crop.cropType };
    sounds.harvest();
    confetti({ particleCount: 35, spread: 75, origin: { x: 0.5, y: 0.6 } });
    this.state.addHarvestedItem(crop.cropType, 1);
    this.state.addCoins(cropDef.sellPrice);
    this.state.addXp(cropDef.xp);
    this.particles.addFloatingText(`+${cropDef.sellPrice} G (${cropDef.name}) 🌾`, posX, 25, '#ffd166', 22);

    if (plot) {
      plot.userData.state = 'tilled';
      if (plot.userData.soilMesh) plot.userData.soilMesh.material = this.soilDryMat;
      else if (plot.material) plot.material = this.soilDryMat;
      if (plot.userData.furrows) {
        plot.userData.furrows.forEach(f => { f.visible = true; f.material = this.soilDryMat; });
      }
    }
    this.triggerFarmerAction('harvest');
    this.updateActiveCropsHUD();

    return { type: crop.cropType, sellPrice: cropDef.sellPrice };
  }

  add3DAnimal(type) {
    if (!this.unlockedFarms[type]) {
      this.unlockedFarms[type] = true;
      const zone = this.animalZoneObjects.get(type);
      if (zone) {
        const pos = zone.position.clone();
        this.scene.remove(zone);
        this.createZone(type, pos.x, pos.z, ANIMAL_FARMS[type]);
      }
    } else {
      const zone = this.animalZoneObjects.get(type);
      if (zone) {
        let animalMesh = null;
        if (type === 'chicken') animalMesh = this.create3DChicken('hen');
        else if (type === 'cow') animalMesh = this.create3DCow();
        else if (type === 'sheep') animalMesh = this.create3DSheep();
        else if (type === 'horse') animalMesh = this.create3DHorse();
        if (animalMesh) {
          animalMesh.position.set((Math.random() - 0.5) * 8, 0, (Math.random() - 0.5) * 5);
          zone.add(animalMesh);
          this.animals3D.push({ mesh: animalMesh, type, speed: 1.2, timer: 3 });
        }
      }
    }
  }

  updateCrops(dt) {
    const curWeather = this.timeWeather ? this.timeWeather.weather : 'sunny';
    const isStormy = curWeather === 'stormy';
    const isRaining = curWeather === 'rainy' || isStormy;
    const hasGreenhouse = this.state && this.state.isBuildingConstructed('greenhouse');

    // Auto-water tilled plots during rain and storms every 1.5 seconds
    if (isRaining) {
      this.rainWaterTimer = (this.rainWaterTimer || 0) + dt;
      if (this.rainWaterTimer >= 1.5) {
        this.rainWaterTimer = 0;
        for (const [k, plot] of this.plotObjects.entries()) {
          if (plot.userData.state === 'tilled') {
            this.waterPlotByKey(k);
          }
        }
      }
    }

    for (const [key, crop] of this.crops.entries()) {
      if (crop.isMature) continue;

      const plot = this.plotObjects.get(key);
      const isWatered = plot && plot.userData.state === 'watered';
      let rate = isWatered ? 2.0 : 1.0;

      // Stormy weather electrifies soil and accelerates growth by +50%
      if (isStormy) rate *= 1.5;

      // Greenhouse accelerates growth
      if (hasGreenhouse) rate *= 1.4;

      crop.growthTimer = (crop.growthTimer || 0) + dt * rate;

      const cropDef = CROPS[crop.cropType] || { growthTime: 15 };
      const totalGrowthTime = cropDef.growthTime || 15;
      const stageDuration = totalGrowthTime / 4;

      if (crop.growthTimer >= stageDuration) {
        crop.growthTimer = 0;
        crop.stage++;

        const plotPos = plot ? plot.position : { x: 0, z: 0 };
        this.scene.remove(crop.group);
        this.plantCrop3D(key, plotPos.x, plotPos.z, crop.cropType, crop.stage);

        if (crop.stage >= 4) {
          crop.isMature = true;
          this.particles.addFloatingText('نضج المحصول! 🌾', plotPos.x, 25, '#ffd166', 18);
          sounds.pop();
        }
        this.updateActiveCropsHUD();
      }
    }

    // Smoothly update countdown timers on the right-side active crops HUD
    this.cropHudTimer = (this.cropHudTimer || 0) + dt;
    if (this.cropHudTimer >= 0.35) {
      this.cropHudTimer = 0;
      this.updateActiveCropsHUD();
    }
  }

  updateActiveCropsHUD() {
    const listEl = document.getElementById('active-crops-list');
    const totalEl = document.getElementById('active-crops-total');
    if (!listEl) return;

    const mobileTotal = document.getElementById('mobile-crop-badge');

    if (!this.crops || this.crops.size === 0) {
      if (totalEl) totalEl.textContent = '0';
      if (mobileTotal) mobileTotal.textContent = '0';
      listEl.innerHTML = `
        <div class="empty-crops-msg">
          <span class="empty-msg-icon">🌱</span>
          <div class="empty-msg-title">لا توجد محاصيل مزروعة</div>
          <div class="empty-msg-hint">ازرع بذور الذرة لتبدأ الإنتاج!</div>
        </div>
      `;
      return;
    }

    if (totalEl) totalEl.textContent = this.crops.size.toString();
    if (mobileTotal) mobileTotal.textContent = this.crops.size.toString();

    // Group active crops by cropType
    const cropGroups = new Map();

    for (const [key, crop] of this.crops.entries()) {
      const type = crop.cropType;
      const cropDef = CROPS[type] || { name: type, icon: '🌱', growthTime: 15 };
      const totalGrowthTime = cropDef.growthTime || 15;
      const stageDuration = totalGrowthTime / 4;

      const elapsed = (crop.stage || 0) * stageDuration + (crop.growthTimer || 0);
      const remaining = crop.isMature ? 0 : Math.max(0, totalGrowthTime - elapsed);
      const progress = crop.isMature ? 100 : Math.min(99, Math.round((elapsed / totalGrowthTime) * 100));

      if (!cropGroups.has(type)) {
        cropGroups.set(type, {
          type,
          name: cropDef.name || type,
          icon: cropDef.icon || '🌱',
          count: 0,
          readyCount: 0,
          minRemaining: Infinity,
          maxProgress: 0,
          totalGrowthTime
        });
      }

      const g = cropGroups.get(type);
      g.count++;
      if (crop.isMature) {
        g.readyCount++;
      }
      if (remaining < g.minRemaining) {
        g.minRemaining = remaining;
      }
      if (progress > g.maxProgress) {
        g.maxProgress = progress;
      }
    }

    let html = '';
    for (const g of cropGroups.values()) {
      const isAnyReady = g.readyCount > 0;
      const allReady = g.readyCount === g.count;

      let timerHtml = '';
      if (allReady) {
        timerHtml = '<span class="status-badge ready">جاهز للحصاد! ✨</span>';
      } else if (isAnyReady) {
        timerHtml = `<span class="status-badge ready">${g.readyCount} جاهز!</span> <span class="status-time">باقي ${Math.ceil(g.minRemaining)}ث</span>`;
      } else {
        const mins = Math.floor(g.minRemaining / 60);
        const secs = Math.ceil(g.minRemaining % 60);
        const formatted = mins > 0 ? `${mins}:${secs < 10 ? '0' : ''}${secs}` : `${secs} ثانية`;
        timerHtml = `<span class="status-time">متبقي: <b>${formatted}</b></span>`;
      }

      const barWidth = allReady ? 100 : (isAnyReady ? 100 : Math.max(8, g.maxProgress));
      const cardClass = allReady ? 'active-crop-card ready-glow' : (isAnyReady ? 'active-crop-card partial-ready' : 'active-crop-card');

      html += `
        <div class="${cardClass}" data-crop="${g.type}">
          <div class="crop-card-top">
            <div class="crop-card-main">
              <span class="crop-card-icon">${g.icon}</span>
              <div class="crop-card-details">
                <span class="crop-card-title">${g.name}</span>
                <div class="crop-card-status">${timerHtml}</div>
              </div>
            </div>
            <span class="crop-card-count">×${g.count}</span>
          </div>
          <div class="crop-card-meter">
            <div class="crop-card-meter-fill ${allReady ? 'mature' : ''}" style="width: ${barWidth}%"></div>
          </div>
        </div>
      `;
    }

    listEl.innerHTML = html;
  }

  updateLightingFromTime() {
    if (!this.timeWeather) return;
    const hour = this.timeWeather.getHourFloat();

    const sunAngle = ((hour - 6) / 12) * Math.PI;
    this.sunLight.position.x = Math.cos(sunAngle) * 45;
    this.sunLight.position.y = Math.max(8, Math.sin(sunAngle) * 50);

    if (hour >= 5 && hour < 8) {
      this.sunLight.color.setHex(0xffba7a);
      this.sunLight.intensity = 1.0;
    } else if (hour >= 8 && hour < 17) {
      this.sunLight.color.setHex(0xfffaf0);
      this.sunLight.intensity = 1.35;
    } else if (hour >= 17 && hour < 20) {
      this.sunLight.color.setHex(0xf97316);
      this.sunLight.intensity = 1.1;
    } else {
      this.sunLight.color.setHex(0x93c5fd);
      this.sunLight.intensity = 0.4;
    }
  }

  start() {
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;

    try {
      const now = performance.now();
      const dt = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;
      this.elapsedTime += dt;
      const time = this.elapsedTime;

      // 1. Rotate Windmill Blades
      if (this.bladesGroup) {
        this.bladesGroup.rotation.z += dt * 1.5;
      }

      // 1b. Update Realistic Living Lake & Swimming Fish
      this.updateLakeWaterAndFish(dt, time);

      // 1c. Update Meadow Grass Tuft Sway
      this.updateMeadowGrass(time);

      // 2. Move Farmer & Tool display & Speech
      this.updateFarmerMovement(dt);
      this.updateFarmerToolDisplay();
      this.updateFarmerSpeech(dt);

      // 3. Animal Roaming AI & Pets
      this.updateAnimals(dt, time);
      this.updatePets(dt, time);

      // 4. Update Time & Dynamic Lighting
      if (this.timeWeather) {
        this.timeWeather.update(dt);
        this.updateLightingFromTime();
      }

      // 5. Update Crops Growth
      this.updateCrops(dt);

      // 6. Update Atmosphere (Chimney Smoke & Sun Motes)
      this.updateAtmosphericEffects(dt, time);

      // 7. Camera Behavior: Free Touch / Drag Panning, or Elevated Panoramic View in Builder Mode
      if (this.isBuilderMode) {
        const focusX = this.builderCamFocus ? this.builderCamFocus.x : 0;
        const focusZ = this.builderCamFocus ? this.builderCamFocus.z : 0;
        const camOffsetX = this.isIsometric ? Math.sin(this.isoAngle) * (this.cameraDistance * 1.25) : 0;
        const camOffsetZ = this.isIsometric ? Math.cos(this.isoAngle) * (this.cameraDistance * 1.25) : 38;
        const targetCamX = focusX + camOffsetX;
        const targetCamY = 34;
        const targetCamZ = focusZ + camOffsetZ;

        this.camera.position.x += (targetCamX - this.camera.position.x) * 0.08;
        this.camera.position.y += (targetCamY - this.camera.position.y) * 0.08;
        this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.08;
        this.camera.lookAt(focusX, 0, focusZ);
      } else {
        // Desktop Edge Panning: Calculate Camera Screen Right and Screen Up vectors in world space
        if (this.isEdgePanning && (this.edgePanDir.x !== 0 || this.edgePanDir.y !== 0)) {
          const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
          camRight.y = 0;
          camRight.normalize();

          const camUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
          camUp.y = 0;
          camUp.normalize();

          const moveStep = new THREE.Vector3();
          if (this.edgePanDir.x !== 0) {
            moveStep.addScaledVector(camRight, this.edgePanDir.x);
          }
          if (this.edgePanDir.y !== 0) {
            moveStep.addScaledVector(camUp, this.edgePanDir.y);
          }

          this.cameraFocusPoint.addScaledVector(moveStep, this.edgePanSpeed * dt);
          this.cameraFocusPoint.x = THREE.MathUtils.clamp(this.cameraFocusPoint.x, -38, 38);
          this.cameraFocusPoint.z = THREE.MathUtils.clamp(this.cameraFocusPoint.z, -36, 36);
        } else if (this.panVelocity && (Math.abs(this.panVelocity.x) > 0.0001 || Math.abs(this.panVelocity.y) > 0.0001)) {
          // Inertial momentum pan decay from touch or mouse drag
          const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
          camRight.y = 0;
          camRight.normalize();

          const camUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
          camUp.y = 0;
          camUp.normalize();

          this.cameraFocusPoint.addScaledVector(camRight, this.panVelocity.x);
          this.cameraFocusPoint.addScaledVector(camUp, this.panVelocity.y);
          this.cameraFocusPoint.x = THREE.MathUtils.clamp(this.cameraFocusPoint.x, -38, 38);
          this.cameraFocusPoint.z = THREE.MathUtils.clamp(this.cameraFocusPoint.z, -36, 36);

          this.panVelocity.multiplyScalar(0.88);
        }

        const focusX = this.cameraFocusPoint.x;
        const focusY = this.farmerGroup ? this.farmerGroup.position.y : 0;
        const focusZ = this.cameraFocusPoint.z;

        const camOffsetX = this.isIsometric ? Math.sin(this.isoAngle) * this.cameraDistance : 0;
        const camOffsetZ = this.isIsometric ? Math.cos(this.isoAngle) * this.cameraDistance : this.cameraDistance;
        const targetCamX = focusX + camOffsetX;
        const targetCamY = focusY + this.cameraHeight;
        const targetCamZ = focusZ + camOffsetZ;

        this.camera.position.x += (targetCamX - this.camera.position.x) * 0.12;
        this.camera.position.y += (targetCamY - this.camera.position.y) * 0.12;
        this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.12;
        this.camera.lookAt(focusX, focusY + 1.1, focusZ);
      }

      // 8. Raycasting under mouse cursor
      this.updateRaycasting();

      // 9. Render 3D Scene with Post-Processing Bloom & Tonemapping
      if (this.composer) {
        this.composer.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    } catch (err) {
      console.error("Three.js render error caught:", err);
    } finally {
      requestAnimationFrame(() => this.animate());
    }
  }

  isBlocked(x, z, r = 0.52) {
    // 1. World outer farm boundary
    if (x < -36.5 || x > 36.5 || z < -34.5 || z > 34.5) return true;

    // 2. Lake water (Z: 19.5 to 37, X: -17.5 to 17.5), except the wooden fishing dock
    if (z + r > 19.4 && z - r < 37.0 && Math.abs(x) < 17.5) {
      // Allowed on wooden dock (x in [-2.1, 2.1], z <= 28.5)
      const onDock = Math.abs(x) <= 2.1 && z <= 28.5;
      if (!onDock) return true;
    }

    // 2b. Custom placed water ponds (grid aligned 2x2 blocks)
    if (this.customWaterTiles && this.customWaterTiles.size > 0) {
      const gx = Math.round(x / 2) * 2;
      const gz = Math.round(z / 2) * 2;
      if (this.customWaterTiles.has(`${gx},${gz}`)) {
        return true;
      }
    }

    // 3. Static obstacle colliders (fences, buildings, well, silo, bakery, greenhouse, shelters, troughs)
    if (this.staticColliders && this.staticColliders.length > 0) {
      for (let i = 0; i < this.staticColliders.length; i++) {
        const c = this.staticColliders[i];
        if (c.type === 'box') {
          // Closest point in AABB
          const closeX = Math.max(c.minX, Math.min(x, c.maxX));
          const closeZ = Math.max(c.minZ, Math.min(z, c.maxZ));
          const dx = x - closeX;
          const dz = z - closeZ;
          if (dx * dx + dz * dz < r * r) {
            return true;
          }
        } else if (c.type === 'circle') {
          const dx = x - c.x;
          const dz = z - c.z;
          const totalR = r + c.radius;
          if (dx * dx + dz * dz < totalR * totalR) {
            return true;
          }
        }
      }
    }

    return false;
  }

  updateFarmerMovement(dt) {
    if (this.isBuilderMode || !this.farmerGroup) return;

    if (!this.farmerAI) {
      this.initFarmerAutonomousAI();
    }

    const ai = this.farmerAI;
    const time = this.elapsedTime;

    if (ai.state === 'IDLE') {
      ai.timer -= dt;

      // Gentle breathing & observing surroundings
      if (!this.isTPose) {
        if (this.farmerBodyGroup) {
          this.farmerBodyGroup.position.y = Math.sin(time * 2.8) * 0.025;
        }
        if (this.farmerHeadGroup) {
          this.farmerHeadGroup.rotation.y = Math.sin(time * 1.4) * 0.28;
        }
        if (this.leftLeg && this.rightLeg) {
          this.leftLeg.rotation.set(0, 0, 0);
          this.rightLeg.rotation.set(0, 0, 0);
        }
        if (this.leftArm && this.rightArm) {
          this.leftArm.rotation.set(0, 0, -0.16);
          this.rightArm.rotation.set(0, 0, 0.16);
        }
      }

      if (ai.timer <= 0) {
        const target = this.pickRandomFarmerTarget();
        ai.targetX = target.x;
        ai.targetZ = target.z;
        ai.state = 'WANDER';
        ai.timer = 5.0 + Math.random() * 4.5; // Wander for up to 9 seconds
      }

    } else if (ai.state === 'WANDER') {
      ai.timer -= dt;

      const curX = this.farmerGroup.position.x;
      const curZ = this.farmerGroup.position.z;
      const dx = ai.targetX - curX;
      const dz = ai.targetZ - curZ;
      const dist = Math.hypot(dx, dz);

      if (dist < 0.45 || ai.timer <= 0) {
        // Arrived at destination or timeout
        ai.state = 'IDLE';
        ai.timer = 3.5 + Math.random() * 4.5; // Rest for 3.5-8s

        // 25% chance to share a thought upon stopping
        if (Math.random() < 0.25 && !this.isSpeechVisible) {
          this.showFarmerSpeech();
        }
      } else {
        const dirX = dx / dist;
        const dirZ = dz / dist;
        const speed = this.isRiding ? ai.speed * 2.2 : ai.speed;
        const step = speed * dt;
        const farmerRadius = 0.52;

        const nextX = curX + dirX * step;
        const nextZ = curZ + dirZ * step;

        let moved = false;
        if (!this.isBlocked(nextX, nextZ, farmerRadius)) {
          this.farmerGroup.position.x = nextX;
          this.farmerGroup.position.z = nextZ;
          moved = true;
        } else {
          // Slide along X
          if (!this.isBlocked(nextX, curZ, farmerRadius)) {
            this.farmerGroup.position.x = nextX;
            moved = true;
          }
          // Slide along Z
          if (!this.isBlocked(curX, nextZ, farmerRadius)) {
            this.farmerGroup.position.z = nextZ;
            moved = true;
          }
        }

        // If completely stuck against an obstacle, end wander early
        if (!moved) {
          ai.state = 'IDLE';
          ai.timer = 2.5;
        }

        // Smooth rotation towards movement direction
        const targetAngle = Math.atan2(dirX, dirZ);
        let angleDiff = targetAngle - this.farmerGroup.rotation.y;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        this.farmerGroup.rotation.y += angleDiff * Math.min(1, dt * 9.5);

        // Walk cycle animation
        if (!this.isTPose) {
          const walkCycle = Math.sin(time * 9.5);
          const legAngle = walkCycle * 0.5;
          if (this.leftLeg && this.rightLeg) {
            this.leftLeg.rotation.x = legAngle;
            this.rightLeg.rotation.x = -legAngle;
          }
          if (this.leftArm && this.rightArm) {
            this.leftArm.rotation.x = -legAngle * 0.7;
            this.leftArm.rotation.z = -0.16;
            this.rightArm.rotation.x = legAngle * 0.7;
            this.rightArm.rotation.z = 0.16;
          }
          if (this.farmerBodyGroup) {
            this.farmerBodyGroup.position.y = Math.abs(walkCycle) * 0.06;
          }
        }
      }
    }
  }

  // Autonomous Animal AI: Wandering, Heading to Trough, Feeding/Drinking, and Collision Repulsion
  updateAnimals(dt, time) {
    if (!this.animals3D || this.animals3D.length === 0) return;

    // 1. Autonomous state machine for each animal
    this.animals3D.forEach((a, i) => {
      const u = a.mesh.userData;
      const station = this.troughStations ? this.troughStations.get(a.penType) : null;
      const bounds = a.localBounds || { minX: -5, maxX: 5, minZ: -3.5, maxZ: 3.5 };

      if (a.state === 'IDLE') {
        a.timer -= dt;

        // Occasional head movement while idling
        if (u.headGroup) {
          if (a.type === 'chicken') {
            const peck = Math.max(0, Math.sin(time * 7 + i * 2)) * 0.65;
            u.headGroup.rotation.x = peck;
            if (u.leftWing && u.rightWing) {
              const flap = Math.sin(time * 9 + i) * 0.2;
              u.leftWing.rotation.z = flap;
              u.rightWing.rotation.z = -flap;
            }
          } else if (a.type === 'cow' || a.type === 'goat') {
            u.headGroup.rotation.x = 0.15 + Math.sin(time * 3.5 + i) * 0.12;
            u.headGroup.rotation.z = Math.sin(time * 4 + i) * 0.05;
          } else if (a.type === 'horse') {
            u.headGroup.rotation.x = Math.sin(time * 2 + i) * 0.08;
          }
        }

        // Rest legs
        if (u.legs && u.legs.length === 4) {
          u.legs.forEach(leg => { leg.rotation.x = 0; });
        }

        if (a.timer <= 0) {
          // If trough has food or water, 40% chance to head there to eat and drink!
          if (station && (station.hasFood || station.hasWater) && Math.random() < 0.45) {
            a.state = 'HEADING_TO_FEED';
            a.timer = 12;
          } else {
            // Pick a random target spot inside pen that is strictly outside any obstacle (shelter, barn, trough)
            a.state = 'WANDER';
            let chosenX = bounds.minX + 1.0;
            let chosenZ = bounds.minZ + 1.0;
            for (let attempt = 0; attempt < 25; attempt++) {
              const testX = THREE.MathUtils.lerp(bounds.minX, bounds.maxX, 0.08 + Math.random() * 0.84);
              const testZ = THREE.MathUtils.lerp(bounds.minZ, bounds.maxZ, 0.08 + Math.random() * 0.84);
              let inside = false;
              if (a.localObstacles) {
                for (const obs of a.localObstacles) {
                  const margin = (a.radius || 0.65) + 0.35;
                  if (testX >= obs.minX - margin && testX <= obs.maxX + margin &&
                      testZ >= obs.minZ - margin && testZ <= obs.maxZ + margin) {
                    inside = true;
                    break;
                  }
                }
              }
              if (!inside) {
                chosenX = testX;
                chosenZ = testZ;
                break;
              }
            }
            a.targetX = chosenX;
            a.targetZ = chosenZ;
            a.timer = 2.8 + Math.random() * 4.5;
          }
        }

      } else if (a.state === 'WANDER') {
        const dx = a.targetX - a.mesh.position.x;
        const dz = a.targetZ - a.mesh.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.35 || a.timer <= 0) {
          a.state = 'IDLE';
          a.timer = 2.2 + Math.random() * 3.5;
        } else {
          a.timer -= dt;
          const step = Math.min(dist, a.speed * dt);
          a.mesh.position.x += (dx / dist) * step;
          a.mesh.position.z += (dz / dist) * step;

          // Smooth turn toward movement direction
          const targetAngle = Math.atan2(dx, dz);
          let diff = targetAngle - a.mesh.rotation.y;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          a.mesh.rotation.y += diff * Math.min(1, dt * 5.5);

          // Animate walking legs
          if (u.legs && u.legs.length === 4) {
            const swing = Math.sin(time * 8 * a.speed + i) * 0.45;
            u.legs[0].rotation.x = swing;
            u.legs[1].rotation.x = -swing;
            u.legs[2].rotation.x = -swing;
            u.legs[3].rotation.x = swing;
          } else if (a.type === 'chicken' || a.type === 'duck') {
            a.mesh.position.y = Math.abs(Math.sin(time * 11 + i)) * 0.08;
            if (u.headGroup) u.headGroup.rotation.x = 0.2 + Math.sin(time * 12) * 0.2;
          } else if (a.type === 'rabbit') {
            a.mesh.position.y = Math.abs(Math.sin(time * 9 + i)) * 0.22;
          }
        }

      } else if (a.state === 'HEADING_TO_FEED') {
        const tPos = a.troughLocalPos || { x: -4.5, z: 0 };
        // Gather in front of trough
        const offsetX = (bounds.minX < 0) ? 1.7 : -1.7;
        const targetX = tPos.x + offsetX;
        const targetZ = tPos.z + (Math.sin(i * 2.2) * 0.8);

        const dx = targetX - a.mesh.position.x;
        const dz = targetZ - a.mesh.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.55 || a.timer <= 0) {
          a.state = 'EATING_DRINKING';
          a.timer = 5.5 + Math.random() * 4.0;
          // Face directly towards the trough
          a.mesh.rotation.y = Math.atan2(tPos.x - a.mesh.position.x, tPos.z - a.mesh.position.z);
        } else {
          a.timer -= dt;
          const step = Math.min(dist, a.speed * 1.15 * dt);
          a.mesh.position.x += (dx / dist) * step;
          a.mesh.position.z += (dz / dist) * step;

          const targetAngle = Math.atan2(dx, dz);
          let diff = targetAngle - a.mesh.rotation.y;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          a.mesh.rotation.y += diff * Math.min(1, dt * 6);

          if (u.legs && u.legs.length === 4) {
            const swing = Math.sin(time * 9 * a.speed + i) * 0.45;
            u.legs[0].rotation.x = swing;
            u.legs[1].rotation.x = -swing;
            u.legs[2].rotation.x = -swing;
            u.legs[3].rotation.x = swing;
          } else if (a.type === 'chicken' || a.type === 'duck') {
            a.mesh.position.y = Math.abs(Math.sin(time * 11 + i)) * 0.08;
          } else if (a.type === 'rabbit') {
            a.mesh.position.y = Math.abs(Math.sin(time * 9 + i)) * 0.22;
          }
        }

      } else if (a.state === 'EATING_DRINKING') {
        a.timer -= dt;
        // Head bobbing down into trough to eat and drink
        if (u.headGroup) {
          u.headGroup.rotation.x = 0.58 + Math.sin(time * 5 + i) * 0.16;
        }
        if (u.legs && u.legs.length === 4) {
          u.legs.forEach(leg => { leg.rotation.x = 0; });
        }
        if (a.timer <= 0) {
          a.state = 'IDLE';
          a.timer = 3.5 + Math.random() * 4.0;
        }
      }

      // Swishing tail animations
      if (u.tailGroup) {
        u.tailGroup.rotation.z = Math.sin(time * 4 + i) * 0.25;
      }
    });

    // 2. CRITICAL: Pairwise Separation Physics (Never allow models to merge or clip into each other!)
    const len = this.animals3D.length;
    for (let i = 0; i < len; i++) {
      const a1 = this.animals3D[i];
      for (let j = i + 1; j < len; j++) {
        const a2 = this.animals3D[j];
        if (a1.penType === a2.penType) {
          const dx = a1.mesh.position.x - a2.mesh.position.x;
          const dz = a1.mesh.position.z - a2.mesh.position.z;
          const dist = Math.hypot(dx, dz);
          const minDist = (a1.radius || 0.65) + (a2.radius || 0.65);

          if (dist < minDist) {
            const overlap = minDist - dist;
            const nx = dist > 0.0001 ? (dx / dist) : 1;
            const nz = dist > 0.0001 ? (dz / dist) : 0;
            // Push both animals apart equally
            a1.mesh.position.x += nx * overlap * 0.5;
            a1.mesh.position.z += nz * overlap * 0.5;
            a2.mesh.position.x -= nx * overlap * 0.5;
            a2.mesh.position.z -= nz * overlap * 0.5;
          }
        }
      }

      // Collision against pen obstacles (Barns, shelters, hutches, troughs - NEVER penetrate!)
      if (a1.localObstacles) {
        const r = a1.radius || 0.65;
        for (const obs of a1.localObstacles) {
          const minX = obs.minX - r;
          const maxX = obs.maxX + r;
          const minZ = obs.minZ - r;
          const maxZ = obs.maxZ + r;

          const px = a1.mesh.position.x;
          const pz = a1.mesh.position.z;

          if (px > minX && px < maxX && pz > minZ && pz < maxZ) {
            const dLeft = px - minX;
            const dRight = maxX - px;
            const dTop = pz - minZ;
            const dBottom = maxZ - pz;
            const minPen = Math.min(dLeft, dRight, dTop, dBottom);

            if (minPen === dLeft) {
              a1.mesh.position.x = minX;
            } else if (minPen === dRight) {
              a1.mesh.position.x = maxX;
            } else if (minPen === dTop) {
              a1.mesh.position.z = minZ;
            } else {
              a1.mesh.position.z = maxZ;
            }

            if (a1.state === 'WANDER') {
              a1.state = 'IDLE';
              a1.timer = 1.0 + Math.random() * 1.5;
            }
          }
        }
      }

      // Keep each animal strictly inside its pen boundaries
      if (a1.localBounds) {
        a1.mesh.position.x = Math.max(a1.localBounds.minX, Math.min(a1.mesh.position.x, a1.localBounds.maxX));
        a1.mesh.position.z = Math.max(a1.localBounds.minZ, Math.min(a1.mesh.position.z, a1.localBounds.maxZ));
      }
    }
  }

  // Autonomous Roaming AI for Dog & Cat around the Farm
  updatePets(dt, time) {
    // 1. Dog (Golden Retriever) Roaming & Following Behavior
    if (this.petDog && this.petDog.userData) {
      const u = this.petDog.userData;
      const farmerX = this.farmerGroup.position.x;
      const farmerZ = this.farmerGroup.position.z;
      const distToFarmer = Math.hypot(farmerX - this.petDog.position.x, farmerZ - this.petDog.position.z);

      // Follow player if nearby (between 3.8 and 13 units away)
      if (distToFarmer > 3.8 && distToFarmer < 13.0 && Math.random() < 0.6) {
        u.state = 'FOLLOW';
        u.targetX = farmerX + Math.sin(time * 0.8) * 2.0;
        u.targetZ = farmerZ + Math.cos(time * 0.8) * 2.0;
      }

      if (u.state === 'IDLE') {
        u.timer -= dt;
        if (u.tailGroup) u.tailGroup.rotation.y = Math.sin(time * 12) * 0.45;
        if (u.headGroup) u.headGroup.rotation.z = Math.sin(time * 2) * 0.1;

        // Reset legs
        if (u.legFL) {
          u.legFL.rotation.x = 0;
          u.legFR.rotation.x = 0;
          u.legBL.rotation.x = 0;
          u.legBR.rotation.x = 0;
        }

        if (u.timer <= 0) {
          u.state = 'WANDER';
          // Wander along farm paths and yard
          u.targetX = (Math.random() - 0.5) * 16;
          u.targetZ = -22 + Math.random() * 24;
          u.timer = 4.0 + Math.random() * 4.5;
        }

      } else if (u.state === 'WANDER' || u.state === 'FOLLOW') {
        const dx = u.targetX - this.petDog.position.x;
        const dz = u.targetZ - this.petDog.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.45 || u.timer <= 0) {
          u.state = 'IDLE';
          u.timer = 2.5 + Math.random() * 3.5;
        } else {
          u.timer -= dt;
          const step = Math.min(dist, u.speed * dt);
          this.petDog.position.x += (dx / dist) * step;
          this.petDog.position.z += (dz / dist) * step;

          // Turn toward movement
          const angle = Math.atan2(dx, dz);
          let adiff = angle - this.petDog.rotation.y;
          while (adiff < -Math.PI) adiff += Math.PI * 2;
          while (adiff > Math.PI) adiff -= Math.PI * 2;
          this.petDog.rotation.y += adiff * Math.min(1, dt * 6);

          // 4-legged trotting walk cycle
          const swing = Math.sin(time * 11) * 0.45;
          if (u.legFL) u.legFL.rotation.x = swing;
          if (u.legFR) u.legFR.rotation.x = -swing;
          if (u.legBL) u.legBL.rotation.x = -swing;
          if (u.legBR) u.legBR.rotation.x = swing;
          if (u.tailGroup) u.tailGroup.rotation.y = Math.sin(time * 16) * 0.65;
        }
      }
    }

    // 2. Cat (Calico) Roaming around Porch & Garden Paths
    if (this.petCat && this.petCat.userData) {
      const u = this.petCat.userData;

      if (u.state === 'IDLE') {
        u.timer -= dt;
        if (u.tailGroup) u.tailGroup.rotation.z = -0.4 + Math.sin(time * 2.5) * 0.25;
        this.petCat.scale.y = 1 + Math.sin(time * 3) * 0.03;

        if (u.legFL) {
          u.legFL.rotation.x = 0;
          u.legFR.rotation.x = 0;
          u.legBL.rotation.x = 0;
          u.legBR.rotation.x = 0;
        }

        if (u.timer <= 0) {
          u.state = 'WANDER';
          u.targetX = -7 + Math.random() * 14;
          u.targetZ = -26 + Math.random() * 14;
          u.timer = 4.5 + Math.random() * 5.0;
        }

      } else if (u.state === 'WANDER') {
        const dx = u.targetX - this.petCat.position.x;
        const dz = u.targetZ - this.petCat.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 0.35 || u.timer <= 0) {
          u.state = 'IDLE';
          u.timer = 3.0 + Math.random() * 4.0;
        } else {
          u.timer -= dt;
          const step = Math.min(dist, u.speed * dt);
          this.petCat.position.x += (dx / dist) * step;
          this.petCat.position.z += (dz / dist) * step;

          const angle = Math.atan2(dx, dz);
          let adiff = angle - this.petCat.rotation.y;
          while (adiff < -Math.PI) adiff += Math.PI * 2;
          while (adiff > Math.PI) adiff -= Math.PI * 2;
          this.petCat.rotation.y += adiff * Math.min(1, dt * 5.5);

          // Graceful 4-legged feline walk
          const swing = Math.sin(time * 9.5) * 0.4;
          if (u.legFL) u.legFL.rotation.x = swing;
          if (u.legFR) u.legFR.rotation.x = -swing;
          if (u.legBL) u.legBL.rotation.x = -swing;
          if (u.legBR) u.legBR.rotation.x = swing;
          if (u.tailGroup) u.tailGroup.rotation.z = -0.4 + Math.sin(time * 4) * 0.25;
        }
      }
    }
  }

  updateRaycasting() {
    this.raycaster.setFromCamera(this.mouse, this.camera);

    if (this.isBuilderMode) {
      if (this.raycaster.ray.intersectPlane(this.groundPlane, this.planeIntersection)) {
        const gx = Math.round(this.planeIntersection.x / 2) * 2;
        const gz = Math.round(this.planeIntersection.z / 2) * 2;
        this.cursorMesh.visible = true;
        this.cursorMesh.position.set(gx, 0.12, gz);
        if (this.cursorMesh.material) {
          if (this.builderTool === 'road') this.cursorMesh.material.color.set('#f59e0b');
          else if (this.builderTool === 'erase') this.cursorMesh.material.color.set('#ef4444');
          else if (this.builderTool === 'water') this.cursorMesh.material.color.set('#0284c7');
          else if (this.builderTool === 'move_building') this.cursorMesh.material.color.set('#8b5cf6');
          else if (this.builderTool === 'move_farm') this.cursorMesh.material.color.set('#10b981');
        }
      } else {
        this.cursorMesh.visible = false;
      }
      return;
    }

    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    this.hoveredObject = null;
    this.cursorMesh.visible = false;

    // While actively drag-steering the character across the screen, don't show the plot hover cursor box
    if (this.isDragMoving) {
      this.updateCursorStyle();
      return;
    }

    for (const hit of intersects) {
      let obj = hit.object;

      // Ignore cursor mesh and helper previews
      if (
        obj === this.cursorMesh ||
        obj.parent === this.cursorMesh ||
        obj === this.plotGhostBox ||
        obj === this.plotMoveHighlight ||
        obj === this.moveIndicator ||
        obj.userData?.isHelper
      ) {
        continue;
      }

      // If a child part of a plot was hit, resolve directly to the root plotGroup
      if (obj.userData && obj.userData.rootPlot) {
        obj = obj.userData.rootPlot;
      } else {
        while (
          obj &&
          !obj.userData.isPlot &&
          !obj.userData.isLockTrigger &&
          !obj.userData.isExpansionSign &&
          !obj.userData.isPet &&
          !obj.userData.isTrough &&
          !obj.userData.isAnimal &&
          obj.parent &&
          obj.parent !== this.scene
        ) {
          if (obj.userData && obj.userData.rootPlot) {
            obj = obj.userData.rootPlot;
            break;
          }
          obj = obj.parent;
        }
      }

      if (obj && obj.userData && (obj.userData.rootPlot || obj.userData.plotGroup)) {
        obj = obj.userData.rootPlot || obj.userData.plotGroup;
      }

      if (
        obj &&
        obj.userData &&
        (obj.userData.isPlot ||
          obj.userData.isLockTrigger ||
          obj.userData.isExpansionSign ||
          obj.userData.isPet ||
          obj.userData.isTrough ||
          obj.userData.isAnimal)
      ) {
        this.hoveredObject = obj;

        if (obj.userData.isPlot) {
          this.cursorMesh.visible = true;
          this.cursorMesh.position.set(obj.position.x, 0.32, obj.position.z);
        }
        break;
      }
    }

    // Dynamic Contextual Cursor Update (Farmer Hand, Hoe, Sickle, Water, Seed)
    this.updateCursorStyle();
  }

  // Update dynamic mouse cursor icon based on hovering and active tool
  updateCursorStyle() {
    let cursorClass = 'cursor-hand'; // Default: Farmer's hand ("ايد مزارع")

    const selectedItem = this.state ? this.state.getSelectedItem() : null;
    const selectedId = selectedItem ? selectedItem.id : null;
    const selectedType = selectedItem ? selectedItem.type : null;

    if (this.hoveredObject && this.hoveredObject.userData) {
      const data = this.hoveredObject.userData;
      if (data.isPlot) {
        const crop = this.crops ? this.crops.get(data.key) : null;
        if (crop && crop.isMature) {
          // 1. Ripe crop ready for harvest -> Harvesting Sickle ("منجل الحصاد")
          cursorClass = 'cursor-sickle';
        } else if (data.state === 'grass') {
          // 2. Untilled grass turf -> Farmer's Hoe ("شكل الفاس")
          cursorClass = 'cursor-hoe';
        } else if (data.state === 'tilled') {
          // 3. Tilled soil: if holding water -> Watering Can, if holding seed -> Seed
          if (selectedId === 'water') {
            cursorClass = 'cursor-water';
          } else if (selectedType === 'seed' || selectedId?.includes('seed')) {
            cursorClass = 'cursor-seed';
          } else {
            // Default on dry tilled soil: Watering Can ("جردل الرش المياه")
            cursorClass = 'cursor-water';
          }
        } else if (data.state === 'watered' && !crop) {
          // 4. Moist soil ready for planting -> Seed Pouch ("وانا بزرع")
          cursorClass = 'cursor-seed';
        }
      } else if (data.isAnimal || data.isPet) {
        // Petting / interacting with animals -> Farmer's Hand
        cursorClass = 'cursor-hand';
      }
    } else {
      // Not hovering over plot: determine by selected tool in hotbar
      if (selectedId === 'hoe') {
        cursorClass = 'cursor-hoe';
      } else if (selectedId === 'water') {
        cursorClass = 'cursor-water';
      } else if (selectedId === 'scythe') {
        cursorClass = 'cursor-sickle';
      } else if (selectedType === 'seed' || selectedId?.includes('seed')) {
        cursorClass = 'cursor-seed';
      }
    }

    if (this.canvas) {
      if (!this.canvas.classList.contains(cursorClass)) {
        this.canvas.classList.remove('cursor-hand', 'cursor-hoe', 'cursor-sickle', 'cursor-water', 'cursor-seed');
        this.canvas.classList.add(cursorClass);
      }
    }
  }
}
