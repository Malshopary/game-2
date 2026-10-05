// Expanded Game Constants & Configuration - Full Stardew & Cozy Farm System
export const TILE_SIZE = 48; // Size of each tile in pixels
export const MAP_COLS = 44;  // Huge expanded farm taking up screen
export const MAP_ROWS = 30;

export const SEASONS = ['ربيع', 'صيف', 'خريف', 'شتاء'];
export const SEASONS_EN = ['SPRING', 'SUMMER', 'FALL', 'WINTER'];
export const DAYS_OF_WEEK = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
export const DAYS_OF_WEEK_EN = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// 1. =========================================================
// ENHANCED CROPS SYSTEM (11 Crops across all seasons and levels)
// =========================================================
export const CROPS = {
  corn: {
    id: 'corn',
    name: 'ذرة شمسية',
    nameEn: 'Corn',
    icon: '🌽',
    growthTime: 10,
    seedCost: 6,
    sellPrice: 18,
    xp: 12,
    minLevel: 1,
    stages: 4,
    color: '#eab308',
    description: 'المحصول الأساسي للمزرعة! سريع النمو ويدر أرباحاً لبدء مسيرتك الزراعية.'
  },
  carrot: {
    id: 'carrot',
    name: 'جزر برتقالي',
    nameEn: 'Carrot',
    icon: '🥕',
    growthTime: 15,
    seedCost: 12,
    sellPrice: 32,
    xp: 20,
    minLevel: 2,
    stages: 4,
    color: '#ff7700',
    description: 'جزر برتقالي مقرمش ومغذي ومحبوب من الأرانب!'
  },
  wheat: {
    id: 'wheat',
    name: 'قمح ذهبي',
    nameEn: 'Golden Wheat',
    icon: '🌾',
    growthTime: 20,
    seedCost: 18,
    sellPrice: 48,
    xp: 28,
    minLevel: 2,
    stages: 4,
    color: '#facc15',
    description: 'محصول القمح الذهبي! يُستخدم كعلف للحيوانات ولخبز المعجنات في المخبز.'
  },
  tomato: {
    id: 'tomato',
    name: 'طماطم حمراء',
    nameEn: 'Tomato',
    icon: '🍅',
    growthTime: 28,
    seedCost: 28,
    sellPrice: 75,
    xp: 40,
    minLevel: 3,
    stages: 4,
    color: '#dc2626',
    description: 'ثمار طماطم طازجة على أوتاد خشبية مطلوبة في صفقات التجار.'
  },
  strawberry: {
    id: 'strawberry',
    name: 'فراولة المروج',
    nameEn: 'Strawberry',
    icon: '🍓',
    growthTime: 36,
    seedCost: 40,
    sellPrice: 110,
    xp: 60,
    minLevel: 3,
    stages: 4,
    color: '#e63946',
    description: 'شجيرة فراولة حمراء غنية وسكرية يعشقها سكان القرية.'
  },
  sunflower: {
    id: 'sunflower',
    name: 'دوار الشمس الذهبي',
    nameEn: 'Sunflower',
    icon: '🌻',
    growthTime: 45,
    seedCost: 55,
    sellPrice: 155,
    xp: 80,
    minLevel: 4,
    stages: 4,
    color: '#fbbf24',
    description: 'زهرة ذهبية براقة تسعد النحل وتزيد إنتاج العسل بنسبة 50%!'
  },
  eggplant: {
    id: 'eggplant',
    name: 'باذنجان ملكي',
    nameEn: 'Eggplant',
    icon: '🍆',
    growthTime: 55,
    seedCost: 70,
    sellPrice: 200,
    xp: 105,
    minLevel: 4,
    stages: 4,
    color: '#7e22ce',
    description: 'باذنجان داكن لامع ذو قيمة غذائية وتجارية عالية.'
  },
  pumpkin: {
    id: 'pumpkin',
    name: 'قرع عملاق',
    nameEn: 'Pumpkin',
    icon: '🎃',
    growthTime: 70,
    seedCost: 95,
    sellPrice: 290,
    xp: 145,
    minLevel: 5,
    stages: 4,
    color: '#ea580c',
    description: 'قرع ضخم وثقيل يدر ثروة طائلة في موسم الخريف.'
  },
  watermelon: {
    id: 'watermelon',
    name: 'بطيخ صيفي منعش',
    nameEn: 'Watermelon',
    icon: '🍉',
    growthTime: 85,
    seedCost: 130,
    sellPrice: 410,
    xp: 190,
    minLevel: 6,
    stages: 4,
    color: '#15803d',
    description: 'بطيخ عملاق مخطط يروي العطش ويباع بأعلى الأسعار في الصيف!'
  },
  grape: {
    id: 'grape',
    name: 'عنب معرش فاخر',
    nameEn: 'Grapes',
    icon: '🍇',
    growthTime: 105,
    seedCost: 180,
    sellPrice: 580,
    xp: 260,
    minLevel: 7,
    stages: 4,
    color: '#6b21a8',
    description: 'عناقيد عنب أرجوانية ملكية تُصنع منها المربيات الفاخرة.'
  },
  pineapple: {
    id: 'pineapple',
    name: 'أناناس استوائي نادر',
    nameEn: 'Pineapple',
    icon: '🍍',
    growthTime: 130,
    seedCost: 260,
    sellPrice: 850,
    xp: 380,
    minLevel: 8,
    stages: 4,
    color: '#d97706',
    description: 'فاكهة استوائية نادرة ذات تاج زمردي وثمار ذهبية تسيل لها اللعاب!'
  },
  apple: {
    id: 'apple',
    name: 'تفاح أحمر مقرمش',
    nameEn: 'Apple',
    icon: '🍎',
    growthTime: 60,
    seedCost: 65,
    sellPrice: 90,
    xp: 45,
    minLevel: 3,
    color: '#d90429',
    description: 'يُقطف من أشجار التفاح ويستعيد 3 نقاط طاقة فوراً ⚡.'
  }
};

// 2. =========================================================
// HOTBAR INITIAL ITEMS - Fresh Start with Starter Tools & Corn Seeds
// =========================================================
export const HOTBAR_ITEMS = [
  { id: 'hoe', name: 'فأس الحراثة', nameEn: 'Hoe', icon: '⛏️', type: 'tool', count: 1 },
  { id: 'water', name: 'مرشة الماء', nameEn: 'Watering Can', icon: '💧', type: 'tool', count: 25 },
  { id: 'harvest', name: 'منجل الحصاد', nameEn: 'Harvest Scythe', icon: '🌾', type: 'tool', count: 1 },
  { id: 'corn', name: 'بذور ذرة', nameEn: 'Corn Seeds', icon: '🌽', type: 'seed', count: 12 },
  { id: 'empty_4', name: 'خانة فارغة', nameEn: 'Empty', icon: '', type: 'none', count: 0 },
  { id: 'empty_5', name: 'خانة فارغة', nameEn: 'Empty', icon: '', type: 'none', count: 0 },
  { id: 'empty_6', name: 'خانة فارغة', nameEn: 'Empty', icon: '', type: 'none', count: 0 },
  { id: 'empty_7', name: 'خانة فارغة', nameEn: 'Empty', icon: '', type: 'none', count: 0 },
  { id: 'empty_8', name: 'خانة فارغة', nameEn: 'Empty', icon: '', type: 'none', count: 0 },
  { id: 'empty_9', name: 'خانة فارغة', nameEn: 'Empty', icon: '', type: 'none', count: 0 }
];

// 3. =========================================================
// ENHANCED ANIMALS SYSTEM (7 Diverse Farm Animals)
// =========================================================
export const ANIMALS = {
  chicken: {
    id: 'chicken',
    name: 'دجاجة نشيطة',
    nameEn: 'Chicken',
    icon: '🐔',
    cost: 150,
    product: 'egg',
    productName: 'بيض طازج',
    productIcon: '🥚',
    productPrice: 35,
    productInterval: 25,
    xp: 25,
    minLevel: 1,
    desc: 'تتجول في الحظيرة وتضع البيض الذهبي بانتظام.'
  },
  duck: {
    id: 'duck',
    name: 'بطة برية مرحة',
    nameEn: 'Duck',
    icon: '🦆',
    cost: 320,
    product: 'feather',
    productName: 'ريش بط ناعم',
    productIcon: '🪶',
    productPrice: 70,
    productInterval: 35,
    xp: 45,
    minLevel: 2,
    desc: 'تحب السباحة والمروج الرطبة وتنتج ريشاً فاخراً وبيض بط.'
  },
  cow: {
    id: 'cow',
    name: 'بقرة حلوب ودودة',
    nameEn: 'Dairy Cow',
    icon: '🐮',
    cost: 500,
    product: 'milk',
    productName: 'حليب كامل الدسم',
    productIcon: '🥛',
    productPrice: 85,
    productInterval: 45,
    xp: 65,
    minLevel: 3,
    desc: 'بقرة هولشتاين تعطي أطيب زجاجات الحليب عند تدليلها.'
  },
  goat: {
    id: 'goat',
    name: 'ماعز المروج الوثابة',
    nameEn: 'Goat',
    icon: '🐐',
    cost: 750,
    product: 'goat_cheese',
    productName: 'جبن ماعز ريفي',
    productIcon: '🧀',
    productPrice: 150,
    productInterval: 60,
    xp: 90,
    minLevel: 4,
    desc: 'حيوان نشيط يقفز بمرح وينتج حليباً يُصنع منه أشهى الأجبان.'
  },
  sheep: {
    id: 'sheep',
    name: 'خروف صوفي قطني',
    nameEn: 'Fluffy Sheep',
    icon: '🐑',
    cost: 850,
    product: 'wool',
    productName: 'صوف دافئ ناعم',
    productIcon: '🧶',
    productPrice: 140,
    productInterval: 70,
    xp: 100,
    minLevel: 4,
    desc: 'يمتلك فروة صوفية غنية يمكن قصها لصناعة أقمشة فاخرة.'
  },
  rabbit: {
    id: 'rabbit',
    name: 'أرنب أنجورا ظريف',
    nameEn: 'Angora Rabbit',
    icon: '🐇',
    cost: 1100,
    product: 'rabbit_wool',
    productName: 'صوف أنجورا الملكي',
    productIcon: '☁️',
    productPrice: 230,
    productInterval: 80,
    xp: 140,
    minLevel: 5,
    desc: 'يقفز بخفة وينتج أنعم أنواع الفرو الحريري النادر.'
  },
  horse: {
    id: 'horse',
    name: 'حصان عربي أصيل',
    nameEn: 'Arabian Horse',
    icon: '🐎',
    cost: 1800,
    product: 'ride',
    productName: 'ركوب سريع مضاعف',
    productIcon: '🏇',
    productPrice: 0,
    productInterval: 0,
    xp: 200,
    minLevel: 5,
    desc: 'يمكنك امتطاءه للتنقل في جميع أرجاء المزرعة بسرعة خيالية!'
  }
};

// Side Animal Yards - 7 Dedicated Enclosures (one for each animal species)
export const ANIMAL_FARMS = {
  chicken: {
    id: 'chicken',
    name: 'حظيرة الدجاج البلدي',
    nameEn: 'Chicken Yard',
    icon: '🐔',
    minLevel: 1,
    cost: 150,
    side: 'west_upper',
    desc: 'حظيرة خشبية مسيجة مخصصة للدجاج البلدي مع أعشاش قش لجمع البيض الطازج.'
  },
  duck: {
    id: 'duck',
    name: 'بركة ومأوى البط النهري',
    nameEn: 'Duck Pond & Pen',
    icon: '🦆',
    minLevel: 2,
    cost: 300,
    side: 'west_mid',
    desc: 'مأوى مسيج مع بركة ماء متلألئة مخصصة للبط لجمع الريش الناعم وبيض البط.'
  },
  sheep: {
    id: 'sheep',
    name: 'مرعى الأغنام الصوفية',
    nameEn: 'Wool Meadow',
    icon: '🐑',
    minLevel: 2,
    cost: 450,
    side: 'west_lower',
    desc: 'مروج خضراء مسيجة ومأوى خشبي مظلل لتربية الأغنام وإنتاج الصوف الفاخر.'
  },
  rabbit: {
    id: 'rabbit',
    name: 'حديقة ومستعمرة الأرانب',
    nameEn: 'Rabbit Warren',
    icon: '🐇',
    minLevel: 3,
    cost: 600,
    side: 'west_bottom',
    desc: 'حديقة مسيجة مع جحور وأكواخ خشبية للأرانب الأنجورا لإنتاج الفرو الحريري.'
  },
  cow: {
    id: 'cow',
    name: 'مرعى الأبقار الحلوب',
    nameEn: 'Dairy Pasture',
    icon: '🐮',
    minLevel: 2,
    cost: 500,
    side: 'east_upper',
    desc: 'مرعى مسيج فسيح مع حظيرة حمراء كلاسيكية وحوض ماء وعلف لإنتاج أشهى الحليب.'
  },
  goat: {
    id: 'goat',
    name: 'مروج وهضبة الماعز',
    nameEn: 'Goat Hills',
    icon: '🐐',
    minLevel: 3,
    cost: 700,
    side: 'east_mid',
    desc: 'مرعى جبلي مع منصات تسلق خشبية مخصص للماعز لإنتاج حليب الأجبان.'
  },
  horse: {
    id: 'horse',
    name: 'إسطبل ومضمار الخيول الملكية',
    nameEn: 'Horse Stables',
    icon: '🐎',
    minLevel: 4,
    cost: 1200,
    side: 'east_lower',
    desc: 'إسطبل فاخر مسيج مع حلبة ركض وحوض شرب لتربية خيول الركوب السريعة.'
  }
};

// 4. =========================================================
// BUILDINGS & INFRASTRUCTURE SYSTEM (مباني ومرافق المزرعة)
// =========================================================
export const BUILDINGS = {
  silo: {
    id: 'silo',
    name: 'صومعة الغلال والحبوب',
    nameEn: 'Grain Silo',
    icon: '🌾',
    cost: 350,
    woodCost: 60,
    minLevel: 2,
    desc: 'تخزن الحبوب وتحول القمح المحصود تلقائياً إلى علف مغذي للحيوانات يضاعف إنتاجها.',
    perks: ['سعة تخزين +150', 'إنتاج علف حيواني تلقائي'],
    position: { x: -8, z: -27 }
  },
  well: {
    id: 'well',
    name: 'بئر المياه العذبة',
    nameEn: 'Freshwater Well',
    icon: '⛲',
    cost: 200,
    woodCost: 40,
    minLevel: 2,
    desc: 'بئر حجري أثري يوفر تعبئة مجانية فورية لمرشة الماء ويروي الحقول القريبة في الصباح.',
    perks: ['تعبئة فورية غير محدودة', 'ري تلقائي للمربعات المحيطة صباحاً'],
    position: { x: 5, z: -18 }
  },
  beehive: {
    id: 'beehive',
    name: 'خلية النحل المزهرة',
    nameEn: 'Flower Beehive',
    icon: '🐝',
    cost: 450,
    woodCost: 50,
    minLevel: 3,
    desc: 'خلية نحل خشبية بجانب الزهور تنتج برطمانات عسل المروج الصافي 🍯 كل يومين.',
    perks: ['إنتاج عسل بري (+120 G)', 'يزداد سعره عند زراعة دوار الشمس'],
    position: { x: 14, z: -25 }
  },
  bakery: {
    id: 'bakery',
    name: 'مخبز ومطحنة المزرعة',
    nameEn: 'Farm Bakery',
    icon: '🥖',
    cost: 850,
    woodCost: 100,
    minLevel: 4,
    desc: 'يحول القمح والحليب والبيض إلى خبز ريفي وفطائر فراولة تباع بأرباح خيالية!',
    perks: ['صناعة الخبز والكعك', 'أرباح تجارة مضاعفة 3x'],
    position: { x: -14, z: -24 }
  },
  greenhouse: {
    id: 'greenhouse',
    name: 'الصوبة الزراعية الزجاجية',
    nameEn: 'Glass Greenhouse',
    icon: '🏡',
    cost: 1600,
    woodCost: 150,
    minLevel: 6,
    desc: 'بيت زجاجي دافئ يحمي المحاصيل من برد الشتاء ويضاعف سرعة نموها بنسبة 100%!',
    perks: ['زراعة جميع المحاصيل صيفاً وشتاءً', 'سرعة نمو مضاعفة 2x'],
    position: { x: 18, z: -27 }
  }
};

// 5. =========================================================
// DYNAMIC WEATHER SYSTEM (الطقس وتأثيراته)
// =========================================================
export const WEATHER_TYPES = {
  sunny: {
    id: 'sunny',
    name: 'مشمس مشرق',
    nameEn: 'Sunny',
    icon: '☀️',
    color: '#facc15',
    desc: 'طقس دافئ ومثالي، ترعى فيه الحيوانات بسعادة في المروج وتكتسب طاقة مضاعفة.',
    buff: 'سعادة الحيوانات +30%'
  },
  rainy: {
    id: 'rainy',
    name: 'أمطار هادئة',
    nameEn: 'Rainy',
    icon: '🌧️',
    color: '#38bdf8',
    desc: 'أمطار متواصلة تروي جميع قطع الأراضي الزراعية تلقائياً دون الحاجة للمرشة!',
    buff: 'ري تلقائي لجميع المحاصيل'
  },
  stormy: {
    id: 'stormy',
    name: 'عاصفة رعدية',
    nameEn: 'Thunderstorm',
    icon: '⛈️',
    color: '#818cf8',
    desc: 'برق ورعود وأمطار غزيرة تجعل المحاصيل تمتص المعادن وتنمو أسرع بنسبة 50%!',
    buff: 'ري فائق + 50% سرعة نمو المحاصيل'
  },
  windy: {
    id: 'windy',
    name: 'نسيم الخريف العليل',
    nameEn: 'Windy Breeze',
    icon: '🍃',
    color: '#4ade80',
    desc: 'رياح عليلة تحرك أوراق الشجر وتدير طاحونة الهواء بسرعة مضاعفة مع فرصة سقوط بذور نادرة!',
    buff: 'سرعة الطاحونة 3x + بذور مجانية'
  },
  snowy: {
    id: 'snowy',
    name: 'ثلج أبيض دافئ',
    nameEn: 'Snowy',
    icon: '❄️',
    color: '#e2e8f0',
    desc: 'بلورات ثلجية تغطي المروج بنقاء، تزداد فيها قيمة المنتجات الحيوانية الدافئة.',
    buff: 'قيمة الصوف والحليب +40%'
  }
};

// 6. =========================================================
// MERCHANT ORDERS & TRADING CONTRACTS (صفقات التجار اليومية)
// =========================================================
export const MERCHANT_ORDERS = [
  {
    id: 'order_bakery_supply',
    merchant: 'الخَبّاز منصور',
    merchantIcon: '👨‍🍳',
    title: 'طلبية مخبز القرية الأسبوعية',
    desc: 'نحتاج قمحاً ذهبياً طازجاً وبيضاً لإعداد كعكة الاحتفال السنوي!',
    requires: [
      { id: 'wheat', count: 12, name: 'قمح ذهبي', icon: '🌾' },
      { id: 'egg', count: 4, name: 'بيض طازج', icon: '🥚' }
    ],
    rewardCoins: 550,
    rewardXp: 180,
    bonusItem: { id: 'carrot', count: 10, name: 'بذور جزر ممتازة', icon: '🥕' }
  },
  {
    id: 'order_summer_festival',
    merchant: 'التاجر كمال',
    merchantIcon: '👳‍♂️',
    title: 'قافلة الواحة الصيفية',
    desc: 'سكان الواحة يبحثون عن بطيخ منعش وذرة مسلوقة بأي ثمن!',
    requires: [
      { id: 'watermelon', count: 4, name: 'بطيخ صيفي', icon: '🍉' },
      { id: 'corn', count: 8, name: 'ذرة شمسية', icon: '🌽' }
    ],
    rewardCoins: 1100,
    rewardXp: 320,
    bonusItem: { id: 'wood', count: 40, name: 'أخشاب بناء صلبة', icon: '🪵' }
  },
  {
    id: 'order_textile_guild',
    merchant: 'نقابة النسيج الرفيع',
    merchantIcon: '🧕',
    title: 'طلب صوف شتوي دافئ',
    desc: 'نود شراء صوف الخراف وريش البط الفاخر لصناعة المعاطف الملكية.',
    requires: [
      { id: 'wool', count: 5, name: 'صوف ناعم', icon: '🧶' },
      { id: 'feather', count: 4, name: 'ريش بط', icon: '🪶' }
    ],
    rewardCoins: 950,
    rewardXp: 260,
    bonusItem: { id: 'strawberry', count: 8, name: 'بذور فراولة', icon: '🍓' }
  },
  {
    id: 'order_healthy_harvest',
    merchant: 'طبيبة الأعشاب لينا',
    merchantIcon: '👩‍⚕️',
    title: 'سلة الخضار العلاجية',
    desc: 'أحتاج جزر وطماطم ودوار شمس لصنع خلطات المناعة الطبيعية.',
    requires: [
      { id: 'carrot', count: 15, name: 'جزر', icon: '🥕' },
      { id: 'tomato', count: 10, name: 'طماطم', icon: '🍅' },
      { id: 'sunflower', count: 3, name: 'دوار الشمس', icon: '🌻' }
    ],
    rewardCoins: 850,
    rewardXp: 240,
    bonusItem: { id: 'pineapple', count: 3, name: 'بذور أناناس نادرة', icon: '🍍' }
  }
];

// 7. =========================================================
// QUESTS SYSTEM (المهام الشاملة: قصة، يومية، وتطوير)
// =========================================================
export const QUESTS = [
  // 1. Story & Beginner Quests
  {
    id: 'q_till_plots',
    category: 'story',
    title: 'تجهيز الأرض الطيبة',
    desc: 'احرث 6 بقع عشبية جديدة بفأس الحراثة ⛏️',
    targetType: 'till',
    targetCount: 6,
    rewardCoins: 80,
    rewardXp: 45,
    icon: '⛏️'
  },
  {
    id: 'q_plant_crops',
    category: 'story',
    title: 'غرس بذور الخير',
    desc: 'ازرع 8 بذور متنوعة في التربة المحروثة 🌱',
    targetType: 'plant',
    targetCount: 8,
    rewardCoins: 120,
    rewardXp: 60,
    icon: '🌱'
  },
  {
    id: 'q_harvest_any',
    category: 'story',
    title: 'حصاد المروج الوفير',
    desc: 'احصد 10 محاصيل ناضجة بمنجل الحصاد 🌾',
    targetType: 'harvest',
    targetCount: 10,
    rewardCoins: 200,
    rewardXp: 100,
    icon: '🧺'
  },
  // 2. Animal Care Quests
  {
    id: 'q_pet_animals',
    category: 'animals',
    title: 'صديق الحيوانات الوفي',
    desc: 'دلل والمس 5 حيوانات في مزارعك لنشر السعادة ❤️',
    targetType: 'pet_animal',
    targetCount: 5,
    rewardCoins: 150,
    rewardXp: 80,
    icon: '❤️'
  },
  {
    id: 'q_collect_milk',
    category: 'animals',
    title: 'إنتاج الحليب والأجبان',
    desc: 'اجمع 3 زجاجات حليب طازجة من الأبقار أو الماعز 🥛',
    targetType: 'milk',
    targetCount: 3,
    rewardCoins: 220,
    rewardXp: 120,
    icon: '🥛'
  },
  {
    id: 'q_collect_eggs',
    category: 'animals',
    title: 'سلة البيض الصباحية',
    desc: 'اجمع 5 بيضات من حظيرة الدواجن والبط 🥚',
    targetType: 'egg',
    targetCount: 5,
    rewardCoins: 180,
    rewardXp: 90,
    icon: '🥚'
  },
  // 3. Buildings & Expansion Quests
  {
    id: 'q_expand_farm',
    category: 'building',
    title: 'توسعة الأفق الأخضر',
    desc: 'قم بتوسيع أرضك الزراعية بمقدار 20 مربعاً إضافياً ➕',
    targetType: 'expand',
    targetCount: 1,
    rewardCoins: 300,
    rewardXp: 150,
    icon: '🚜'
  },
  {
    id: 'q_build_facility',
    category: 'building',
    title: 'نهضة المزرعة العمرانية',
    desc: 'شيد مبنى جديداً مثل الصومعة أو البئر أو المخبز 🏛️',
    targetType: 'build',
    targetCount: 1,
    rewardCoins: 400,
    rewardXp: 200,
    icon: '🏛️'
  },
  // 4. Trade & Levels Quests
  {
    id: 'q_trade_contract',
    category: 'trade',
    title: 'تاجر المروج المعتمد',
    desc: 'أتمم صفقة تجارية مع أحد تجار القرية بنجاح 📦',
    targetType: 'trade_order',
    targetCount: 1,
    rewardCoins: 350,
    rewardXp: 250,
    icon: '📦'
  },
  {
    id: 'q_earn_gold',
    category: 'trade',
    title: 'ثروة المروج المتراكمة',
    desc: 'اجمع ما مجموعه 15,000 قطعة ذهبية في خزينتك 🪙',
    targetType: 'coins',
    targetCount: 15000,
    rewardCoins: 600,
    rewardXp: 300,
    icon: '🪙'
  },
  {
    id: 'q_ride_horse',
    category: 'story',
    title: 'فارس الريف المغوار',
    desc: 'امتطِ الحصان الأصيل وانطلق بسرعة البرق 🐎',
    targetType: 'ride',
    targetCount: 1,
    rewardCoins: 250,
    rewardXp: 120,
    icon: '🏇'
  }
];

// Central Land Expansions
export const LAND_EXPANSIONS = [
  { level: 2, cost: 150, plotsAdded: 20, name: 'التوسيع الأول (+20 مربع)' },
  { level: 3, cost: 400, plotsAdded: 20, name: 'التوسيع الثاني (+20 مربع)' },
  { level: 4, cost: 850, plotsAdded: 20, name: 'التوسيع الثالث (+20 مربع)' },
  { level: 5, cost: 1600, plotsAdded: 20, name: 'التوسيع الرابع (+20 مربع)' },
  { level: 6, cost: 3200, plotsAdded: 20, name: 'التوسيع الخامس (+20 مربع)' },
  { level: 7, cost: 5000, plotsAdded: 20, name: 'التوسيع السادس (+20 مربع)' }
];

// Tool Upgrades
export const UPGRADES = {
  waterCapacity: {
    id: 'waterCapacity',
    name: 'سعة المرشة',
    levels: [
      { level: 1, cap: 25, cost: 0, desc: 'مرشة عادية (25 رشة)' },
      { level: 2, cap: 55, cost: 250, desc: 'مرشة نحاسية مطورة (55 رشة)' },
      { level: 3, cap: 120, cost: 650, desc: 'مرشة ذهبية فائقة (120 رشة)' }
    ]
  },
  speedBoots: {
    id: 'speedBoots',
    name: 'حذاء المروج المريح',
    levels: [
      { level: 1, speed: 1.0, cost: 0, desc: 'السرعة العادية' },
      { level: 2, speed: 1.35, cost: 200, desc: '+35% سرعة ركض' },
      { level: 3, speed: 1.75, cost: 500, desc: '+75% سرعة ركض فائقة' }
    ]
  }
};
