// Asset Loader: Loads generated sprite sheets and provides cropped sprites
export class AssetLoader {
  constructor() {
    this.images = {};
    this.loaded = false;
    this.sprites = {};
  }

  loadAll() {
    const assetList = [
      { name: 'buildings', src: '/assets/buildings.jpg' },
      { name: 'animals', src: '/assets/animals.jpg' },
      { name: 'farmer', src: '/assets/farmer.jpg' },
      { name: 'crops', src: '/assets/crops.jpg' }
    ];

    const promises = assetList.map(asset => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = asset.src;
        img.onload = () => {
          this.images[asset.name] = img;
          resolve();
        };
        img.onerror = () => {
          console.warn(`Could not load asset: ${asset.src}`);
          resolve(); // Degrade gracefully
        };
      });
    });

    return Promise.all(promises).then(() => {
      this.loaded = true;
      this.extractSprites();
    });
  }

  // Pre-crop sprites onto clean canvases with white background made transparent!
  extractSprites() {
    const makeTransparentCanvas = (img, sx, sy, sw, sh, tolerance = 230) => {
      const canvas = document.createElement('canvas');
      canvas.width = sw;
      canvas.height = sh;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

      try {
        const imgData = ctx.getImageData(0, 0, sw, sh);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // Remove white/light-grey grid background
          if (r > tolerance && g > tolerance && b > tolerance) {
            data[i + 3] = 0; // Transparent
          }
        }
        ctx.putImageData(imgData, 0, 0);
      } catch (e) {
        // In case of any security limitation
      }

      return canvas;
    };

    // 1. Buildings (from 1024x1024 buildings.jpg)
    if (this.images.buildings) {
      const bImg = this.images.buildings;
      const w = bImg.width;
      const h = bImg.height;

      // Farmhouse (top-left quarter)
      this.sprites.farmhouse = makeTransparentCanvas(bImg, 0, 0, w * 0.48, h * 0.42);
      // Dairy Barn (top-right quarter)
      this.sprites.barn = makeTransparentCanvas(bImg, w * 0.52, 0, w * 0.46, h * 0.45);
      // Chicken Coop (middle-left)
      this.sprites.coop = makeTransparentCanvas(bImg, 0, h * 0.42, w * 0.48, h * 0.24);
      // Horse Stable (bottom-left)
      this.sprites.stable = makeTransparentCanvas(bImg, 0, h * 0.65, w * 0.52, h * 0.35);
      // Windmill (bottom-right)
      this.sprites.windmill = makeTransparentCanvas(bImg, w * 0.58, h * 0.48, w * 0.4, h * 0.52);
    }

    // 2. Animals (from animals.jpg)
    if (this.images.animals) {
      const aImg = this.images.animals;
      const w = aImg.width;
      const h = aImg.height;

      // Dairy Cow
      this.sprites.cow = makeTransparentCanvas(aImg, w * 0.05, h * 0.06, w * 0.28, h * 0.24);
      // Sheep
      this.sprites.sheep = makeTransparentCanvas(aImg, w * 0.38, h * 0.06, w * 0.24, h * 0.22);
      // Horse
      this.sprites.horse = makeTransparentCanvas(aImg, w * 0.66, h * 0.03, w * 0.32, h * 0.3);
      // Rooster & Chickens
      this.sprites.chicken = makeTransparentCanvas(aImg, w * 0.52, h * 0.35, w * 0.42, h * 0.32);
      // Dog
      this.sprites.dog = makeTransparentCanvas(aImg, w * 0.12, h * 0.68, w * 0.25, h * 0.28);
      // Cat
      this.sprites.cat = makeTransparentCanvas(aImg, w * 0.64, h * 0.72, w * 0.22, h * 0.25);
    }

    // 3. Farmer Poses (from farmer.jpg)
    if (this.images.farmer) {
      const fImg = this.images.farmer;
      const w = fImg.width;
      const h = fImg.height;

      // Standing Front
      this.sprites.farmer_stand = makeTransparentCanvas(fImg, w * 0.02, h * 0.04, w * 0.16, h * 0.22);
      // Walking
      this.sprites.farmer_walk = makeTransparentCanvas(fImg, w * 0.22, h * 0.04, w * 0.16, h * 0.22);
      // Watering with spray
      this.sprites.farmer_water = makeTransparentCanvas(fImg, w * 0.42, h * 0.28, w * 0.22, h * 0.22);
      // Tilling
      this.sprites.farmer_till = makeTransparentCanvas(fImg, w * 0.42, h * 0.51, w * 0.22, h * 0.22);
      // Axe Swing
      this.sprites.farmer_axe = makeTransparentCanvas(fImg, w * 0.36, h * 0.75, w * 0.18, h * 0.24);
      // Celebrate / Carrot
      this.sprites.farmer_cheer = makeTransparentCanvas(fImg, w * 0.82, h * 0.75, w * 0.17, h * 0.24);
    }

    // 4. Crops (from crops.jpg)
    if (this.images.crops) {
      const cImg = this.images.crops;
      const w = cImg.width;
      const h = cImg.height;

      // Carrot mature
      this.sprites.crop_carrot = makeTransparentCanvas(cImg, w * 0.42, 0, w * 0.14, h * 0.18);
      // Corn mature
      this.sprites.crop_corn = makeTransparentCanvas(cImg, w * 0.35, h * 0.17, w * 0.15, h * 0.33);
      // Strawberry bush
      this.sprites.crop_strawberry = makeTransparentCanvas(cImg, w * 0.74, h * 0.26, w * 0.25, h * 0.24);
      // Pumpkin
      this.sprites.crop_pumpkin = makeTransparentCanvas(cImg, w * 0.52, h * 0.52, w * 0.22, h * 0.22);
      // Tomato on stake
      this.sprites.crop_tomato = makeTransparentCanvas(cImg, w * 0.38, h * 0.74, w * 0.18, h * 0.26);
      // Wheat
      this.sprites.crop_wheat = makeTransparentCanvas(cImg, w * 0.79, h * 0.79, w * 0.18, h * 0.2);
    }
  }

  getSprite(name) {
    return this.sprites[name] || null;
  }
}

export const assets = new AssetLoader();
