// Comprehensive Stardew-style Game State with Buildings, Trading, Levels, Animals & Quests
import { HOTBAR_ITEMS, CROPS, ANIMALS, BUILDINGS, UPGRADES, QUESTS, MERCHANT_ORDERS, SEASONS_EN, DAYS_OF_WEEK_EN } from './Constants.js';
import { sounds } from './SoundFX.js';

const STORAGE_KEY = 'stardew_farm_save_v3';

export const ITEM_DEFS = {
  // Tools
  hoe: { id: 'hoe', name: 'فأس الحراثة', nameEn: 'Hoe', icon: '⛏️', type: 'tool' },
  water: { id: 'water', name: 'مرشة الماء', nameEn: 'Watering Can', icon: '💧', type: 'tool' },
  harvest: { id: 'harvest', name: 'منجل الحصاد', nameEn: 'Harvest Scythe', icon: '🌾', type: 'tool' },
  axe: { id: 'axe', name: 'فأس الخشب', nameEn: 'Axe', icon: '🪓', type: 'tool' },

  // Resources
  wood: { id: 'wood', name: 'خشب بناء', nameEn: 'Wood', icon: '🪵', type: 'resource', price: 8 },
  apple: { id: 'apple', name: 'تفاح مقرمش', nameEn: 'Apple', icon: '🍎', type: 'consumable', price: 40 },

  // Seeds & Harvested Crops
  carrot: { id: 'carrot', name: 'جزر برتقالي', nameEn: 'Carrot', icon: '🥕', type: 'seed', price: 18 },
  wheat: { id: 'wheat', name: 'قمح ذهبي', nameEn: 'Wheat', icon: '🌾', type: 'seed', price: 24 },
  corn: { id: 'corn', name: 'ذرة شمسية', nameEn: 'Corn', icon: '🌽', type: 'seed', price: 48 },
  tomato: { id: 'tomato', name: 'طماطم حمراء', nameEn: 'Tomato', icon: '🍅', type: 'seed', price: 65 },
  strawberry: { id: 'strawberry', name: 'فراولة المروج', nameEn: 'Strawberry', icon: '🍓', type: 'seed', price: 95 },
  sunflower: { id: 'sunflower', name: 'دوار الشمس', nameEn: 'Sunflower', icon: '🌻', type: 'seed', price: 120 },
  pumpkin: { id: 'pumpkin', name: 'قرع عملاق', nameEn: 'Pumpkin', icon: '🎃', type: 'seed', price: 220 },
  eggplant: { id: 'eggplant', name: 'باذنجان ملكي', nameEn: 'Eggplant', icon: '🍆', type: 'seed', price: 160 },
  watermelon: { id: 'watermelon', name: 'بطيخ صيفي', nameEn: 'Watermelon', icon: '🍉', type: 'seed', price: 320 },
  grape: { id: 'grape', name: 'عنب معرش', nameEn: 'Grapes', icon: '🍇', type: 'seed', price: 420 },
  pineapple: { id: 'pineapple', name: 'أناناس استوائي', nameEn: 'Pineapple', icon: '🍍', type: 'seed', price: 650 },

  // Animal Products
  egg: { id: 'egg', name: 'بيض طازج', nameEn: 'Egg', icon: '🥚', type: 'resource', price: 35 },
  feather: { id: 'feather', name: 'ريش بط ناعم', nameEn: 'Duck Feather', icon: '🪶', type: 'resource', price: 70 },
  milk: { id: 'milk', name: 'حليب كامل الدسم', nameEn: 'Milk', icon: '🥛', type: 'resource', price: 85 },
  goat_cheese: { id: 'goat_cheese', name: 'جبن ماعز ريفي', nameEn: 'Goat Cheese', icon: '🧀', type: 'resource', price: 150 },
  wool: { id: 'wool', name: 'صوف خراف ناعم', nameEn: 'Fluffy Wool', icon: '🧶', type: 'resource', price: 140 },
  rabbit_wool: { id: 'rabbit_wool', name: 'صوف أنجورا ملكي', nameEn: 'Angora Wool', icon: '☁️', type: 'resource', price: 230 },

  // Crafted & Special
  honey: { id: 'honey', name: 'عسل زهور المروج', nameEn: 'Flower Honey', icon: '🍯', type: 'resource', price: 160 },
  bread: { id: 'bread', name: 'خبز ريفي طازج', nameEn: 'Fresh Bread', icon: '🍞', type: 'consumable', price: 120 }
};

export class GameState {
  constructor(particleSystem) {
    this.particles = particleSystem;
    this.listeners = [];

    // Core Stats - Fresh Start from Level 1
    this.level = 1;
    this.xp = 0;
    this.coins = 50;
    this.health = 10;
    this.maxHealth = 10;
    this.energy = 10;
    this.maxEnergy = 10;
    this.farmingSkill = 1;
    this.farmerOutfit = 'default';
    this.unlockedPlotCount = 20;
    this.currentExpansionIndex = 0;
    this.customPlotPositions = {};

    // Calendar
    this.seasonIndex = 0; // SPRING
    this.dayOfSeason = 1;
    this.dayOfWeekIndex = 0; // SUN

    // Hotbar (10 Items) - Hoe, Water, Scythe, 12 Corn Seeds
    this.hotbar = JSON.parse(JSON.stringify(HOTBAR_ITEMS));
    this.selectedSlot = 0;
    this.activeTool = 'hoe'; // Default active tool: 'hoe' | 'water' | 'plant' | 'harvest'
    this.selectedSeed = 'corn'; // Default active seed: 'corn'

    // Extra Storage Backpack (Empty on new game)
    this.inventory = {};

    // 7 Animal Farms Unlocked Status (All start locked on fresh game)
    this.unlockedFarms = {
      chicken: false,
      duck: false,
      sheep: false,
      rabbit: false,
      cow: false,
      goat: false,
      horse: false
    };

    // Buildings Construction & Upgrades
    this.buildings = {
      silo: false,
      well: true, // Well is pre-installed on the farm
      beehive: false,
      bakery: false,
      greenhouse: false
    };

    // Upgrades
    this.upgrades = {
      waterCapacity: 1,
      speedBoots: 1
    };

    // Animal Care & Population
    this.animalsCare = {
      chicken: { count: 0, happiness: 100, fed: false, productReady: false },
      duck: { count: 0, happiness: 100, fed: false, productReady: false },
      cow: { count: 0, happiness: 100, fed: false, productReady: false },
      goat: { count: 0, happiness: 100, fed: false, productReady: false },
      sheep: { count: 0, happiness: 100, fed: false, productReady: false },
      rabbit: { count: 0, happiness: 100, fed: false, productReady: false },
      horse: { count: 0, happiness: 100, fed: false, productReady: false }
    };

    // Quests
    this.quests = JSON.parse(JSON.stringify(QUESTS)).map(q => ({
      ...q,
      current: 0,
      completed: false,
      claimed: false
    }));

    // Dynamic Merchant Orders
    this.merchantOrders = JSON.parse(JSON.stringify(MERCHANT_ORDERS)).map(o => ({
      ...o,
      fulfilled: false
    }));

    this.stats = {
      cropsHarvested: 0,
      coinsEarned: 0,
      woodChopped: 0,
      animalsPetted: 0,
      ordersCompleted: 0,
      buildingsConstructed: 0
    };

    // Custom Farm Layout (roads, waters, custom building/pen positions)
    this.farmCustomLayout = null;

    this.load();
  }

  saveFarmCustomLayout(layout) {
    this.farmCustomLayout = layout;
    this.save();
    this.notify();
  }

  onChange(cb) {
    this.listeners.push(cb);
  }

  notify() {
    for (const cb of this.listeners) {
      try { cb(this); } catch (e) {}
    }
  }

  // --- XP & Dynamic Level System ---
  getXpNeededForLevel(lvl) {
    return Math.round(180 * Math.pow(1.18, lvl - 1));
  }

  addXp(amount) {
    this.xp += amount;
    const needed = this.getXpNeededForLevel(this.level);
    if (this.xp >= needed) {
      this.xp -= needed;
      this.level++;
      this.farmingSkill = Math.min(10, Math.floor(this.level / 2) + 1);
      sounds.levelUp();

      // Bonus Coins on Level Up
      const bonusGold = this.level * 100;
      this.coins += bonusGold;

      // Award bonus starter seeds for newly unlocked crops at this level
      Object.values(CROPS).forEach(crop => {
        if (crop.minLevel === this.level) {
          this.addItem(crop.id, 8);
        }
      });

      if (this.onLevelUpCallback) {
        this.onLevelUpCallback(this.level, this.farmingSkill, bonusGold);
      }
    }
    this.notify();
    this.save();
  }

  // --- Coins & Economy ---
  addCoins(amount) {
    this.coins += amount;
    if (amount > 0) {
      this.stats.coinsEarned += amount;
      this.checkQuests('coins', this.coins);
      sounds.coin();
    }
    this.notify();
    this.save();
  }

  spendCoins(amount) {
    if (this.coins >= amount) {
      this.coins -= amount;
      this.notify();
      this.save();
      return true;
    }
    return false;
  }

  useCoins(amount) {
    return this.spendCoins(amount);
  }

  // --- Inventory & Hotbar Management ---
  getSelectedItem() {
    return this.hotbar[this.selectedSlot] || null;
  }

  getItemTotalCount(id) {
    let count = 0;
    const hotbarSlot = this.hotbar.find(x => x.id === id);
    if (hotbarSlot) count += hotbarSlot.count;
    if (this.inventory[id]) count += this.inventory[id];
    return count;
  }

  addItem(id, count = 1) {
    // 1. Try to add to hotbar if slot exists
    const hotbarSlot = this.hotbar.find(x => x.id === id);
    if (hotbarSlot) {
      hotbarSlot.count += count;
    } else {
      // Look for empty slot or add to inventory backpack
      const emptySlot = this.hotbar.find(x => !x || x.count <= 0);
      if (emptySlot && ITEM_DEFS[id]) {
        const def = ITEM_DEFS[id];
        emptySlot.id = def.id;
        emptySlot.name = def.name;
        emptySlot.nameEn = def.nameEn;
        emptySlot.icon = def.icon;
        emptySlot.type = def.type;
        emptySlot.count = count;
      } else {
        this.inventory[id] = (this.inventory[id] || 0) + count;
      }
    }
    this.notify();
    this.save();
  }

  consumeItem(id, count = 1) {
    const total = this.getItemTotalCount(id);
    if (total < count) return false;

    let remaining = count;
    const hotbarSlot = this.hotbar.find(x => x.id === id);
    if (hotbarSlot && hotbarSlot.count > 0) {
      const take = Math.min(hotbarSlot.count, remaining);
      hotbarSlot.count -= take;
      remaining -= take;
    }

    if (remaining > 0 && this.inventory[id]) {
      const take = Math.min(this.inventory[id], remaining);
      this.inventory[id] -= take;
      remaining -= take;
    }

    this.notify();
    this.save();
    return true;
  }

  useSelectedItem(count = 1) {
    const item = this.getSelectedItem();
    if (item && item.count >= count) {
      item.count -= count;
      this.notify();
      this.save();
      return true;
    }
    return false;
  }

  // --- Farming, Energy & Harvest ---
  useEnergy(amount = 0.5) {
    if (this.energy > 0) {
      this.energy = Math.max(0, Math.round((this.energy - amount) * 10) / 10);
      this.notify();
      return true;
    }
    return false;
  }

  restoreEnergy(amount = 2) {
    this.energy = Math.min(this.maxEnergy, this.energy + amount);
    this.notify();
  }

  addHarvestedItem(type, count = 1) {
    this.addItem(type, count);
    this.stats.cropsHarvested += count;
    this.checkQuests(`harvest_${type}`, count);
    this.checkQuests('harvest', count);
    this.notify();
    this.save();
  }

  addWood(count = 3) {
    this.addItem('wood', count);
    this.stats.woodChopped += count;
    this.checkQuests('chop', count);
    this.notify();
    this.save();
  }

  useWater() {
    const waterSlot = this.hotbar.find(x => x.id === 'water');
    if (waterSlot && waterSlot.count > 0) {
      waterSlot.count--;
      this.checkQuests('water', 1);
      this.useEnergy(0.2);
      this.notify();
      return true;
    }
    return false;
  }

  refillWater() {
    const waterSlot = this.hotbar.find(x => x.id === 'water');
    if (waterSlot) {
      const cap = UPGRADES.waterCapacity.levels[this.upgrades.waterCapacity - 1]?.cap || 25;
      waterSlot.count = cap;
      sounds.water();
      this.notify();
      return true;
    }
    return false;
  }

  eatApple() {
    if (this.consumeItem('apple', 1)) {
      this.restoreEnergy(3);
      sounds.eat();
      this.particles.addFloatingText('+3 طاقة! ⚡', 400, 300, '#38bdf8', 20);
      this.notify();
      return true;
    }
    return false;
  }

  // --- Animal Interactions & Care ---
  petAnimal(animalId) {
    const animal = this.animalsCare[animalId];
    if (animal) {
      animal.happiness = Math.min(100, animal.happiness + 8);
      sounds.pet();
      this.stats.animalsPetted++;
      this.checkQuests('pet_animal', 1);
      this.addXp(10);
      this.notify();
      this.save();
      return true;
    }
    return false;
  }

  feedAnimal(animalId) {
    const animal = this.animalsCare[animalId];
    if (!animal) return false;

    // Animals eat wheat, carrots, or apples
    let fedWith = null;
    if (this.consumeItem('wheat', 1)) fedWith = 'wheat';
    else if (this.consumeItem('carrot', 1)) fedWith = 'carrot';
    else if (this.consumeItem('apple', 1)) fedWith = 'apple';

    if (fedWith) {
      animal.fed = true;
      animal.happiness = Math.min(100, animal.happiness + 15);
      animal.productReady = true;
      sounds.eat();
      this.addXp(18);
      this.notify();
      this.save();
      return true;
    }
    return false;
  }

  collectAnimalProduct(animalId) {
    const animal = this.animalsCare[animalId];
    const def = ANIMALS[animalId];
    if (animal && def && def.product && def.product !== 'ride') {
      animal.productReady = false;
      this.addItem(def.product, 1);
      this.addXp(def.xp || 25);
      this.checkQuests(def.product, 1);
      sounds.pop();
      this.notify();
      this.save();
      return true;
    }
    return false;
  }

  // --- Buildings System ---
  constructBuilding(buildingId) {
    const def = BUILDINGS[buildingId];
    if (!def) return false;
    if (this.buildings[buildingId]) return false;

    if (this.level < def.minLevel) return false;
    if (this.coins < def.cost) return false;
    if (this.getItemTotalCount('wood') < def.woodCost) return false;

    this.spendCoins(def.cost);
    this.consumeItem('wood', def.woodCost);
    this.buildings[buildingId] = true;
    this.stats.buildingsConstructed++;
    this.checkQuests('build', 1);
    sounds.hammer();
    sounds.levelUp();
    this.addXp(250);

    this.notify();
    this.save();
    return true;
  }

  isBuildingConstructed(buildingId) {
    return !!this.buildings[buildingId];
  }

  // --- Dynamic Trading & Merchant Orders ---
  fulfillOrder(orderId) {
    const order = this.merchantOrders.find(o => o.id === orderId);
    if (!order || order.fulfilled) return false;

    // Check prerequisites
    for (const req of order.requires) {
      if (this.getItemTotalCount(req.id) < req.count) {
        return false;
      }
    }

    // Deduct items
    for (const req of order.requires) {
      this.consumeItem(req.id, req.count);
    }

    order.fulfilled = true;
    this.addCoins(order.rewardCoins);
    this.addXp(order.rewardXp);
    sounds.trade();

    if (order.bonusItem) {
      this.addItem(order.bonusItem.id, order.bonusItem.count);
    }

    this.stats.ordersCompleted++;
    this.checkQuests('trade_order', 1);
    this.notify();
    this.save();
    return true;
  }

  // --- Quests Progression ---
  checkQuests(targetType, amount) {
    for (const q of this.quests) {
      if (q.completed) continue;
      if (q.targetType === targetType) {
        if (targetType === 'coins') {
          q.current = amount;
        } else {
          q.current += amount;
        }

        if (q.current >= q.targetCount) {
          q.current = q.targetCount;
          q.completed = true;
          sounds.levelUp();
        }
      }
    }
  }

  claimQuest(questId) {
    const q = this.quests.find(x => x.id === questId);
    if (q && q.completed && !q.claimed) {
      q.claimed = true;
      this.addCoins(q.rewardCoins);
      this.addXp(q.rewardXp);
      sounds.coin();
      this.notify();
      this.save();
      return true;
    }
    return false;
  }

  // --- Calendar & Daily Cycle ---
  nextDay() {
    this.dayOfSeason++;
    if (this.dayOfSeason > 28) {
      this.dayOfSeason = 1;
      this.seasonIndex = (this.seasonIndex + 1) % 4;
    }
    this.dayOfWeekIndex = (this.dayOfWeekIndex + 1) % 7;
    this.energy = this.maxEnergy;

    // Animal morning routine
    for (const [key, care] of Object.entries(this.animalsCare)) {
      care.fed = false;
      care.productReady = true; // Animals produce each new morning
    }

    // Refresh trade orders randomly
    if (this.dayOfSeason % 3 === 0) {
      this.merchantOrders.forEach(o => { o.fulfilled = false; });
    }

    this.notify();
    this.save();
  }

  save() {
    try {
      const data = {
        level: this.level,
        xp: this.xp,
        coins: this.coins,
        health: this.health,
        energy: this.energy,
        farmingSkill: this.farmingSkill,
        seasonIndex: this.seasonIndex,
        dayOfSeason: this.dayOfSeason,
        hotbar: this.hotbar,
        inventory: this.inventory,
        buildings: this.buildings,
        animalsCare: this.animalsCare,
        unlockedFarms: this.unlockedFarms,
        farmingPlotLayout: this.farmingPlotLayout,
        unlockedPlotCount: this.unlockedPlotCount || 20,
        currentExpansionIndex: this.currentExpansionIndex || 0,
        customPlotPositions: this.customPlotPositions || {},
        farmerOutfit: this.farmerOutfit,
        farmCustomLayout: this.farmCustomLayout || null,
        quests: this.quests,
        merchantOrders: this.merchantOrders,
        stats: this.stats,
        activeTool: this.activeTool,
        selectedSeed: this.selectedSeed
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        this.coins = data.coins ?? this.coins;
        this.level = data.level ?? this.level;
        this.xp = data.xp ?? this.xp;
        this.activeTool = data.activeTool || this.activeTool;
        this.selectedSeed = data.selectedSeed || this.selectedSeed;
        this.energy = data.energy ?? this.energy;
        this.health = data.health ?? this.health;
        this.farmingSkill = data.farmingSkill ?? this.farmingSkill;
        this.dayOfSeason = data.dayOfSeason ?? this.dayOfSeason;
        if (data.hotbar) this.hotbar = data.hotbar;
        if (data.inventory) this.inventory = { ...this.inventory, ...data.inventory };
        if (data.buildings) this.buildings = { ...this.buildings, ...data.buildings };
        if (data.animalsCare) this.animalsCare = { ...this.animalsCare, ...data.animalsCare };
        if (data.unlockedFarms) this.unlockedFarms = { ...this.unlockedFarms, ...data.unlockedFarms };
        if (data.farmingPlotLayout) this.farmingPlotLayout = data.farmingPlotLayout;
        if (data.unlockedPlotCount) this.unlockedPlotCount = data.unlockedPlotCount;
        if (data.currentExpansionIndex !== undefined) this.currentExpansionIndex = data.currentExpansionIndex;
        if (data.customPlotPositions) this.customPlotPositions = data.customPlotPositions;
        if (data.farmerOutfit) this.farmerOutfit = data.farmerOutfit;
        if (data.farmCustomLayout) this.farmCustomLayout = data.farmCustomLayout;
        if (data.merchantOrders) this.merchantOrders = data.merchantOrders;
        if (data.quests) {
          this.quests = this.quests.map(q => {
            const sq = data.quests.find(x => x.id === q.id);
            return sq ? { ...q, current: sq.current, completed: sq.completed, claimed: sq.claimed } : q;
          });
        }
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
    }
  }

  setPlotPosition(key, posX, posZ) {
    if (!this.customPlotPositions) this.customPlotPositions = {};
    this.customPlotPositions[key] = { posX, posZ };
    this.save();
  }

  resetPlotPositions() {
    this.customPlotPositions = {};
    this.save();
  }

  startNewGame() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('stardew_farm_save_v1');
      localStorage.removeItem('stardew_farm_save_v2');
      localStorage.removeItem('stardew_farm_save_v3');
      localStorage.removeItem('farm_unlocked_farms');
      localStorage.removeItem('farm_plot_layout');
      localStorage.clear();
    } catch (e) {
      console.warn('LocalStorage clear error:', e);
    }
    window.location.reload();
  }

  reset() {
    this.startNewGame();
  }
}
