import { CROPS, ANIMALS, ANIMAL_FARMS, BUILDINGS, WEATHER_TYPES, MERCHANT_ORDERS, QUESTS, UPGRADES, SEASONS_EN, DAYS_OF_WEEK_EN } from '../game/Constants.js';
import { sounds } from '../game/SoundFX.js';
import { bgm } from '../game/AudioPlayer.js';
import confetti from 'canvas-confetti';

export class UIManager {
  constructor() {
    this.engine = null;
    this.state = null;
    this.appEl = document.getElementById('app');

    this.activeModal = null;
    this.marketTab = 'sell';
    this.questFilter = 'all';

    this.renderBaseUI();
    this.bindEvents();
  }

  attachEngine(engine) {
    this.engine = engine;
    this.state = engine.state;

    this.state.onChange(() => this.updateHUD());
    this.state.onLevelUpCallback = (lvl, skill, bonus) => this.showLevelUpModal(lvl, skill, bonus);

    if (this.engine.timeWeather) {
      this.engine.timeWeather.onWeatherChange(() => this.updateHUD());
    }

    this.renderHotbarSlots();
    this.updateHUD();
  }

  renderBaseUI() {
    this.appEl.innerHTML = `
      <div id="game-container">
        <canvas id="game-canvas"></canvas>

        <!-- Unified Right-Side Stardew Farm Dashboard -->
        <div id="stardew-right-hud" class="stardew-right-hud" dir="rtl">
          <!-- 1. Player Profile, Level, Calendar, Clock & Gold -->
          <div class="character-card">
            <div class="portrait-box" id="btn-portrait-levels" title="عرض تفاصيل المستوى والمزايا" style="cursor: pointer;">
              <div class="portrait-avatar">
                <div class="pixel-hat"></div>
                <div class="pixel-hair"></div>
                <div class="pixel-face">
                  <div class="pixel-eye left"></div>
                  <div class="pixel-eye right"></div>
                  <div class="pixel-blush left"></div>
                  <div class="pixel-blush right"></div>
                </div>
                <div class="pixel-clothes"></div>
              </div>
            </div>

            <div class="farmer-info">
              <div class="level-row" id="btn-level-row" title="عرض المزايا والمستويات" style="cursor: pointer;">
                <span class="hud-label">LEVEL <b id="hud-level-val">1</b></span>
                <div class="mini-xp-bar">
                  <div class="mini-xp-fill" id="hud-xp-fill"></div>
                </div>
              </div>
              <div class="calendar-row" id="hud-season-day">SPRING 1</div>
              <div class="clock-row" id="hud-clock-time">SUN 8:24 ص</div>
            </div>

            <div class="gold-box" title="رصيد الذهب المتوفر لديك">
              <span class="gold-coin-icon">🪙</span>
              <span class="gold-amount" id="hud-gold-val">122</span>
              <span class="gold-label">G</span>
            </div>
          </div>

          <!-- 2. Vitals Strip: Energy & Farming Skill -->
          <div class="vitals-row">
            <div class="energy-box" title="طاقة المزارع المتبقية لأداء المهام">
              <span class="energy-icon">⚡</span>
              <div class="energy-bar">
                <div class="energy-fill" id="hud-energy-fill" style="width: 80%"></div>
              </div>
              <span class="energy-text" id="hud-energy-text">8/10</span>
            </div>

            <div class="skill-badge" title="مستوى مهارة الزراعة الحالي">
              <span class="skill-icon">🌱</span>
              <span class="skill-text">FARM <b id="hud-farming-lvl">Lvl 1</b></span>
            </div>
          </div>

          <!-- 3. Dynamic Weather Badge -->
          <div class="weather-box" id="hud-weather-box" title="حالة الطقس الحالية وتأثيرها على المزرعة (انقر للتغيير)">
            <span class="weather-icon" id="hud-weather-icon">☀️</span>
            <div class="weather-info">
              <span class="weather-name" id="hud-weather-name">مشمس مشرق</span>
              <span class="weather-buff" id="hud-weather-buff">سعادة الحيوانات +30%</span>
            </div>
          </div>

          <!-- 4. Action Buttons Dock (Pure Image/Icon Buttons with Rich Tooltips) -->
          <div class="hud-action-dock" id="hud-action-dock">
            <button class="dock-btn market-btn" id="btn-open-market" aria-label="المتجر">
              <span class="dock-icon">🏪</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🏪 متجر المزرعة</div>
                <div class="dock-tooltip-desc">شراء البذور، الحيوانات، ومعدات الزراعة</div>
              </div>
            </button>

            <button class="dock-btn trade-btn" id="btn-open-contracts" aria-label="التجارة">
              <span class="dock-icon">📦</span>
              <span class="notification-dot" id="trade-dot" style="display: none"></span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">📦 صفقات القرية</div>
                <div class="dock-tooltip-desc">تلبية طلبيات التجار وكسب مكافآت ذهبية ضخمة</div>
              </div>
            </button>

            <button class="dock-btn buildings-btn" id="btn-open-buildings" aria-label="المباني">
              <span class="dock-icon">🏛️</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🏛️ تشييد المباني</div>
                <div class="dock-tooltip-desc">بناء وتطوير الحظائر، الطواحين، والصوامع</div>
              </div>
            </button>

            <button class="dock-btn quests-btn" id="btn-open-quests" aria-label="المهام">
              <span class="dock-icon">📜</span>
              <span class="notification-dot" id="quest-dot" style="display: none"></span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">📜 المهام اليومية</div>
                <div class="dock-tooltip-desc">متابعة مهام القصة وحصد المكافآت والخبرة</div>
              </div>
            </button>

            <button class="dock-btn levels-btn" id="btn-open-levels" aria-label="المستويات">
              <span class="dock-icon">🌟</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🌟 شجرة المستويات</div>
                <div class="dock-tooltip-desc">استعراض المهارات وشجرة المزايا المفتوحة</div>
              </div>
            </button>

            <button class="dock-btn newgame-btn" id="btn-open-newgame" aria-label="لعبة جديدة">
              <span class="dock-icon">🔄</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🔄 لعبة جديدة</div>
                <div class="dock-tooltip-desc">تصفير المزرعة والبدء من الصفر مع بذور الذرة</div>
              </div>
            </button>

            <button class="dock-btn outfit-btn" id="btn-toggle-outfit" aria-label="المظهر">
              <span class="dock-icon">👔</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">👔 <span id="outfit-btn-label">المظهر (الأساسي)</span></div>
                <div class="dock-tooltip-desc">التبديل بين الزي البرتقالي الأصلي والرمادي البديل</div>
              </div>
            </button>

            <button class="dock-btn tpose-btn" id="btn-toggle-tpose" aria-label="وضع T-Pose">
              <span class="dock-icon">🧍</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🧍 <span id="tpose-btn-label">وضع T-Pose</span></div>
                <div class="dock-tooltip-desc">تثبيت وضعية T-Pose لمعاينة وفحص مجسم 3D</div>
              </div>
            </button>

            <button class="dock-btn fullscreen-btn" id="btn-toggle-fullscreen" aria-label="ملء الشاشة">
              <span class="dock-icon">⛶</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">⛶ ملء الشاشة</div>
                <div class="dock-tooltip-desc">التبديل إلى وضع ملء الشاشة الكامل للعبة</div>
              </div>
            </button>

            <button class="dock-btn sound-btn" id="btn-toggle-sound" aria-label="الصوت">
              <span class="dock-icon" id="sound-icon">🔊</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🔊 الصوت والموسيقى</div>
                <div class="dock-tooltip-desc">كتم أو تشغيل المؤثرات الصوتية والموسيقى</div>
              </div>
            <button class="dock-btn pixel-btn" id="btn-toggle-pixel" aria-label="أسلوب البكسل">
              <span class="dock-icon">👾</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">👾 <span id="pixel-btn-label">بكسل واضح الملامح (2x)</span></div>
                <div class="dock-tooltip-desc">التبديل بين درجات دقة البكسل (2x واضح / 1x HD / 3x / 4x) أو مفتاح P</div>
              </div>
            </button>

            <button class="dock-btn iso-btn" id="btn-toggle-iso" aria-label="تدوير الكاميرا الأيزومترية">
              <span class="dock-icon">📐</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">📐 زاوية أيزومترك مجسمة</div>
                <div class="dock-tooltip-desc">تدوير الزاوية الأيزومترية 90 درجة (أو مفتاح Q / R)</div>
              </div>
            </button>

            <button class="dock-btn settings-btn" id="btn-open-settings" aria-label="الإعدادات">
              <span class="dock-icon">⚙️</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">⚙️ الإعدادات والدليل</div>
                <div class="dock-tooltip-desc">دليل اللعب، أزرار التحكم، والإعدادات العامة</div>
              </div>
            </button>
          </div>

          <!-- 5. Active Crops Live HUD (Guaranteed to be below buttons, NEVER overlapping) -->
          <aside id="active-crops-hud" class="active-crops-panel" aria-label="المحاصيل المزروعة الحالية">
            <div class="crops-hud-header">
              <div class="crops-hud-title">
                <span class="crops-hud-icon">🌱</span>
                <span>المحاصيل المزروعة</span>
              </div>
              <span class="crops-total-badge" id="active-crops-total">0</span>
            </div>
            <div class="crops-hud-list" id="active-crops-list">
              <div class="empty-crops-msg">
                <span class="empty-msg-icon">🌱</span>
                <div class="empty-msg-title">لا توجد محاصيل مزروعة</div>
                <div class="empty-msg-hint">ازرع بذور الذرة لتبدأ الإنتاج!</div>
              </div>
            </div>
          </aside>
        </div>

        <!-- Floating Banner for Single-Plot Placement Mode (50 G) -->
        <div id="plot-place-mode-banner" class="plot-move-banner hidden">
          <span class="banner-icon">🪵</span>
          <div class="banner-text">
            <span class="banner-title">وضع إضافة أحواض الزراعة (50 ذهب لكل حوض)</span>
            <span class="banner-desc">انقر في أي مكان أخضر لإضافة حوض زراعي جديد — كمية مفتوحة ومكان تختاره بنفسك</span>
          </div>
          <div class="banner-actions">
            <button id="btn-exit-plot-place" class="banner-exit-btn">إنهاء الإضافة ✓</button>
          </div>
        </div>

        <!-- Floating Banner for Plot Moving Mode -->
        <div id="plot-move-mode-banner" class="plot-move-banner hidden">
          <span class="banner-icon">🪴</span>
          <div class="banner-text">
            <span class="banner-title">وضع نقل وترتيب الأحواض</span>
            <span class="banner-desc">انقر على أي حوض لاختياره، ثم انقر في مكان خالٍ لنقله (يُمنع التداخل تلقائياً)</span>
          </div>
          <div class="banner-actions">
            <button id="btn-reset-plot-positions" class="banner-reset-btn" title="إعادة ترتيب تلقائي منتظم">محاذاة تلقائية 📐</button>
            <button id="btn-exit-plot-move" class="banner-exit-btn">تم الإنهاء ✓</button>
          </div>
        </div>

        <!-- Floating Banner for Modular Road Edit Mode (Move, Erase, Add) -->
        <div id="road-edit-mode-banner" class="plot-move-banner hidden road-edit-banner">
          <span class="banner-icon">🛣️</span>
          <div class="banner-text">
            <span class="banner-title">وضع تعديل مربعات الطريق (تحكم كامل بكل مربع)</span>
            <span class="banner-desc" id="road-edit-status-hint">اختر أداة من الأزرار: يمكنك نقل أي مربع، مسحه لإعادة العشب، أو رصف مربعات جديدة</span>
          </div>
          <div class="banner-tools">
            <button class="road-tool-btn active" id="btn-road-tool-move" data-tool="move" title="نقل مربع طريق لمكان جديد">
              <span>✋ نقل مربع</span>
            </button>
            <button class="road-tool-btn" id="btn-road-tool-erase" data-tool="erase" title="مسح مربع الطريق وإظهار العشب الأخضر">
              <span>🧹 مسح مربع</span>
            </button>
            <button class="road-tool-btn" id="btn-road-tool-add" data-tool="add" title="رصف مربع طريق جديد في المساحة الخضراء">
              <span>➕ رصف جديد</span>
            </button>
          </div>
          <div class="banner-actions">
            <button id="btn-road-reset" class="banner-reset-btn" title="استعادة شبكة الطرق الافتراضية الأصلية">استعادة الأصلية 🔄</button>
            <button id="btn-road-exit" class="banner-exit-btn">تم الإنهاء ✓</button>
          </div>
        </div>

        <!-- On-Screen Character Movement D-Pad Controller -->
        <div id="virtual-dpad" class="virtual-dpad" title="أزرار حركة الشخصية المباشرة">
          <button class="dpad-btn up" id="dpad-up" title="للأعلى (W)">▲</button>
          <button class="dpad-btn left" id="dpad-left" title="لليسار (A)">◀</button>
          <div class="dpad-center">🚶</div>
          <button class="dpad-btn right" id="dpad-right" title="لليمين (D)">▶</button>
          <button class="dpad-btn down" id="dpad-down" title="للأسفل (S)">▼</button>
        </div>

        <!-- Bottom Unified Game HUD (Farming Actions & Hotbar) -->
        <div id="bottom-hud-container">
          <!-- Top Row: Quick Farming & Controls Bar -->
          <div id="quick-farming-bar">
            <!-- Group 1: Farming Actions -->
            <div class="hud-group farming-actions-group">
              <button class="farm-action-btn till" id="btn-action-till" title="حرث الأرض (فأس ⛏️ - مفتاح 1)">
                <span class="act-icon">⛏️</span>
                <span>حرث</span>
              </button>
              <button class="farm-action-btn water" id="btn-action-water" title="ري المحاصيل (مرشة 💧 - مفتاح 2)">
                <span class="act-icon">💧</span>
                <span>سقي</span>
              </button>
              <button class="farm-action-btn plant" id="btn-action-plant" title="زرع بذور (بذرة 🌱 - مفتاح 4)">
                <span class="act-icon">🌱</span>
                <span>زرع</span>
              </button>
              <button class="farm-action-btn harvest" id="btn-action-harvest" title="حصاد المحصول (منجل 🌾 - مفتاح 3)">
                <span class="act-icon">🌾</span>
                <span>حصاد</span>
              </button>
            </div>

            <div class="hud-group-separator"></div>

            <!-- Group 2: Mode & Farm Controls -->
            <div class="hud-group farm-modes-group">
              <button class="farm-action-btn walk" id="btn-action-walk" title="تحريك الشخصية (تحكم كامل بالحركة وتوجيه المزارع دون زراعة أو حصاد بالخطأ)">
                <span class="act-icon">🚶‍♂️</span>
                <span class="walk-label">حركة الشخصية</span>
              </button>
              <button class="farm-action-btn expand" id="btn-action-expand" title="إضافة حوض زراعة جديد (50 ذهب - كمية مفتوحة ومكان حر)">
                <span class="act-icon">🪵</span>
                <span>إضافة حوض</span>
              </button>
              <button class="farm-action-btn move" id="btn-action-move-plot" title="نقل وتحريك كل مربع لوحده بحرية ومنع التداخل">
                <span class="act-icon">🪴</span>
                <span>نقل الأحواض</span>
              </button>
              <button class="farm-action-btn road-mode" id="btn-action-road-mode" title="تعديل مربعات الطريق (نقل، مسح، أو رصف مربعات جديدة)">
                <span class="act-icon">🛣️</span>
                <span>تعديل الطريق</span>
              </button>
              <button class="farm-action-btn arrange" id="btn-action-arrange" title="ترتيب وتقسيم أرض الزراعة (شبكة، صفوف، مربعات، مصاطب)">
                <span class="act-icon">📐</span>
                <span>ترتيب الأرض</span>
              </button>
            </div>
          </div>

          <!-- Bottom Row: Wooden Hotbar -->
          <nav id="bottom-hotbar">
            <div class="stardew-hotbar" id="hotbar-slots"></div>
          </nav>
        </div>

        <!-- Modals Overlay -->
        <div id="modal-overlay" class="modal-overlay hidden">
          <div class="modal-card" id="modal-card">
            <div class="modal-header">
              <h2 id="modal-title">سوق المزرعة</h2>
              <button class="close-btn" id="btn-close-modal">✕</button>
            </div>
            <div class="modal-body" id="modal-body"></div>
          </div>
        </div>

        <!-- Level Up Celebration Banner -->
        <div id="levelup-banner" class="levelup-banner hidden">
          <div class="levelup-content">
            <div class="star-icon">🌟</div>
            <h2>تهانينا! ارتقيت لمستوى جديد!</h2>
            <p id="levelup-desc">أصبحت الآن في المستوى 15 وتم فتح عناصر جديدة في المتجر!</p>
            <button class="primary-btn pulse" id="btn-close-levelup">رائع! استمر في الزراعة</button>
          </div>
        </div>
      </div>
    `;
  }

  renderHotbarSlots() {
    const container = document.getElementById('hotbar-slots');
    if (!container || !this.state) return;
    container.innerHTML = '';

    this.state.hotbar.forEach((item, index) => {
      const slot = document.createElement('button');
      slot.className = `stardew-slot ${this.state.selectedSlot === index ? 'active' : ''}`;
      slot.dataset.index = index;

      const displayKey = index === 9 ? '10' : (index + 1).toString();
      const showCount = item.count > 1;

      slot.innerHTML = `
        <span class="slot-num">${displayKey}</span>
        <span class="slot-icon">${item.icon}</span>
        ${showCount ? `<span class="slot-stack">${item.count}</span>` : ''}
      `;

      slot.addEventListener('click', () => {
        if (this.engine && this.engine.isFarmerWalkMode) {
          this.engine.toggleFarmerWalkMode(false);
        }
        this.state.selectedSlot = index;
        sounds.click();
        this.updateHotbar();
        this.syncActionButtonsWithSelection();
        if (this.engine && typeof this.engine.updateCursorStyle === 'function') {
          this.engine.updateCursorStyle();
        }
      });

      container.appendChild(slot);
    });

    this.syncActionButtonsWithSelection();
  }

  syncActionButtonsWithSelection() {
    if (!this.state) return;
    const selectedItem = this.state.getSelectedItem();
    const isWalk = this.engine && this.engine.isFarmerWalkMode;

    const tillBtn = document.getElementById('btn-action-till');
    const waterBtn = document.getElementById('btn-action-water');
    const plantBtn = document.getElementById('btn-action-plant');
    const harvestBtn = document.getElementById('btn-action-harvest');
    const walkBtn = document.getElementById('btn-action-walk');
    const walkLabel = walkBtn ? walkBtn.querySelector('.walk-label') : null;

    if (walkBtn) {
      walkBtn.classList.toggle('active', !!isWalk);
      if (walkLabel) {
        walkLabel.textContent = isWalk ? 'حركة الشخصية (نشطة)' : 'حركة الشخصية';
      }
    }

    if (isWalk) {
      if (tillBtn) tillBtn.classList.remove('active');
      if (waterBtn) waterBtn.classList.remove('active');
      if (plantBtn) plantBtn.classList.remove('active');
      if (harvestBtn) harvestBtn.classList.remove('active');
      return;
    }

    const isHoe = selectedItem && (selectedItem.id === 'hoe' || selectedItem.type === 'tool_hoe');
    const isWater = selectedItem && (selectedItem.id === 'water' || selectedItem.type === 'tool_water');
    const isPlant = selectedItem && (selectedItem.type === 'seed' || selectedItem.id === 'corn' || selectedItem.id === 'carrot');
    const isHarvest = selectedItem && (selectedItem.id === 'harvest' || selectedItem.id === 'scythe' || selectedItem.type === 'tool_scythe');

    if (tillBtn) tillBtn.classList.toggle('active', !!isHoe);
    if (waterBtn) waterBtn.classList.toggle('active', !!isWater);
    if (plantBtn) plantBtn.classList.toggle('active', !!isPlant);
    if (harvestBtn) harvestBtn.classList.toggle('active', !!isHarvest);
  }

  updateHotbar() {
    if (!this.state) return;
    const slots = document.querySelectorAll('.stardew-slot');
    slots.forEach((slot, index) => {
      const item = this.state.hotbar[index];
      slot.classList.toggle('active', this.state.selectedSlot === index);

      const stackEl = slot.querySelector('.slot-stack');
      if (item && item.count > 1) {
        if (stackEl) {
          stackEl.textContent = item.count;
        } else {
          const newStack = document.createElement('span');
          newStack.className = 'slot-stack';
          newStack.textContent = item.count;
          slot.appendChild(newStack);
        }
      } else if (stackEl) {
        stackEl.remove();
      }
    });

    this.syncActionButtonsWithSelection();

    if (this.engine && typeof this.engine.updateCursorStyle === 'function') {
      this.engine.updateCursorStyle();
    }
  }

  updateHUD() {
    if (!this.state || !this.engine) return;

    // Level & XP
    document.getElementById('hud-level-val').textContent = this.state.level;
    const neededXp = this.state.getXpNeededForLevel ? this.state.getXpNeededForLevel(this.state.level) : 500;
    const xpPct = Math.min(100, Math.round((this.state.xp / neededXp) * 100));
    document.getElementById('hud-xp-fill').style.width = `${xpPct}%`;

    // Calendar & Time
    const seasonEn = SEASONS_EN[this.state.seasonIndex] || 'SUMMER';
    document.getElementById('hud-season-day').textContent = `${seasonEn} ${this.state.dayOfSeason}`;

    const dayEn = DAYS_OF_WEEK_EN[this.state.dayOfWeekIndex] || 'SUN';
    const timeFormatted = (this.engine && this.engine.timeWeather && typeof this.engine.timeWeather.getTimeFormatted === 'function')
      ? this.engine.timeWeather.getTimeFormatted()
      : '11:45 AM';
    document.getElementById('hud-clock-time').textContent = `${dayEn} ${timeFormatted}`;

    // Gold
    document.getElementById('hud-gold-val').textContent = this.state.coins.toLocaleString();

    // Weather Badge
    if (this.engine && this.engine.timeWeather) {
      const wDef = this.engine.timeWeather.getWeatherDef();
      const iconEl = document.getElementById('hud-weather-icon');
      const nameEl = document.getElementById('hud-weather-name');
      const buffEl = document.getElementById('hud-weather-buff');
      if (iconEl && nameEl && buffEl) {
        iconEl.textContent = wDef.icon;
        nameEl.textContent = wDef.name;
        buffEl.textContent = wDef.buff || '';
      }
    }



    // Energy
    const energyPct = Math.min(100, Math.round((this.state.energy / this.state.maxEnergy) * 100));
    document.getElementById('hud-energy-text').textContent = `${this.state.energy}/${this.state.maxEnergy}`;
    document.getElementById('hud-energy-fill').style.width = `${energyPct}%`;

    // Farming Skill
    document.getElementById('hud-farming-lvl').textContent = `Lvl ${this.state.farmingSkill}`;

    // Quests notification dot
    const hasUnclaimed = this.state.quests.some(q => q.completed && !q.claimed);
    const questDot = document.getElementById('quest-dot');
    if (questDot) questDot.style.display = hasUnclaimed ? 'block' : 'none';

    // Trade orders ready notification dot
    const canFulfillAny = this.state.merchantOrders && this.state.merchantOrders.some(o => {
      if (o.fulfilled) return false;
      return o.requires.every(req => this.state.getItemTotalCount(req.id) >= req.count);
    });
    const tradeDot = document.getElementById('trade-dot');
    if (tradeDot) tradeDot.style.display = canFulfillAny ? 'block' : 'none';

    this.updateHotbar();
  }

  bindEvents() {
    // Weather badge click: Cycle weather types on demand!
    const weatherBox = document.getElementById('hud-weather-box');
    if (weatherBox) {
      weatherBox.addEventListener('click', () => {
        if (!this.engine || !this.engine.timeWeather) return;
        const weathers = ['sunny', 'rainy', 'stormy', 'windy', 'snowy'];
        const currentIdx = weathers.indexOf(this.engine.timeWeather.weather);
        const nextW = weathers[(currentIdx + 1) % weathers.length];
        this.engine.timeWeather.setWeather(nextW);
        const wDef = WEATHER_TYPES[nextW];
        sounds.pop();
        if (this.engine.particles) {
          this.engine.particles.addFloatingText(`${wDef.icon} تغير الطقس إلى ${wDef.name}!`, 0, 25, wDef.color, 22);
        }
        this.updateHUD();
      });
    }

    // Click Level or Portrait to open Levels modal
    const portraitBtn = document.getElementById('btn-portrait-levels');
    if (portraitBtn) portraitBtn.addEventListener('click', () => { sounds.click(); this.openLevelsModal(); });
    const levelRowBtn = document.getElementById('btn-level-row');
    if (levelRowBtn) levelRowBtn.addEventListener('click', () => { sounds.click(); this.openLevelsModal(); });

    // Fullscreen Toggle
    document.getElementById('btn-toggle-fullscreen').addEventListener('click', () => {
      sounds.click();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
    });

    // On-Screen Direct Farming Actions (Syncs with Hotbar & Equips Matching Tool)
    document.getElementById('btn-action-till').addEventListener('click', () => {
      sounds.click();
      if (this.engine) {
        if (this.engine.isFarmerWalkMode) this.engine.toggleFarmerWalkMode(false);
        const hoeIdx = this.state.hotbar.findIndex(x => x && (x.id === 'hoe' || x.type === 'tool_hoe'));
        if (hoeIdx !== -1) {
          this.state.selectedSlot = hoeIdx;
          this.updateHotbar();
        }
        this.syncActionButtonsWithSelection();
        if (typeof this.engine.tillAction === 'function') {
          this.engine.tillAction();
        } else if (this.engine.farmer && this.engine.tileMap) {
          const target = this.engine.farmer.getTargetTile();
          this.engine.tileMap.till(target.col, target.row);
        }
      }
    });

    document.getElementById('btn-action-water').addEventListener('click', () => {
      sounds.click();
      if (this.engine) {
        if (this.engine.isFarmerWalkMode) this.engine.toggleFarmerWalkMode(false);
        const waterIdx = this.state.hotbar.findIndex(x => x && (x.id === 'water' || x.type === 'tool_water'));
        if (waterIdx !== -1) {
          this.state.selectedSlot = waterIdx;
          this.updateHotbar();
        }
        this.syncActionButtonsWithSelection();
        if (typeof this.engine.waterAction === 'function') {
          this.engine.waterAction();
        } else if (this.engine.farmer && this.engine.tileMap) {
          const target = this.engine.farmer.getTargetTile();
          this.engine.tileMap.water(target.col, target.row);
        }
      }
    });

    document.getElementById('btn-action-plant').addEventListener('click', () => {
      sounds.click();
      if (this.engine) {
        if (this.engine.isFarmerWalkMode) this.engine.toggleFarmerWalkMode(false);
        const seedIdx = this.state.hotbar.findIndex(x => x && (x.type === 'seed' || x.id === 'corn' || x.id === 'carrot') && x.count > 0);
        if (seedIdx !== -1) {
          this.state.selectedSlot = seedIdx;
          this.updateHotbar();
        }
        this.syncActionButtonsWithSelection();
        if (typeof this.engine.plantAction === 'function') {
          this.engine.plantAction();
        } else if (this.engine.farmer && this.engine.cropsManager) {
          const target = this.engine.farmer.getTargetTile();
          const current = this.engine.state.getSelectedItem();
          let seed = (current && current.type === 'seed' && current.count > 0) ? (current.cropId || current.id) : 'corn';
          this.engine.cropsManager.plant(target.col, target.row, seed);
        }
      }
    });

    document.getElementById('btn-action-harvest').addEventListener('click', () => {
      sounds.click();
      if (this.engine) {
        if (this.engine.isFarmerWalkMode) this.engine.toggleFarmerWalkMode(false);
        const harvestIdx = this.state.hotbar.findIndex(x => x && (x.id === 'harvest' || x.id === 'scythe' || x.type === 'tool_scythe'));
        if (harvestIdx !== -1) {
          this.state.selectedSlot = harvestIdx;
          this.updateHotbar();
        }
        this.syncActionButtonsWithSelection();
        if (typeof this.engine.harvestAction === 'function') {
          this.engine.harvestAction();
        } else if (this.engine.farmer && this.engine.cropsManager) {
          const target = this.engine.farmer.getTargetTile();
          this.engine.cropsManager.harvest(target.col, target.row);
        }
      }
    });

    const arrangeBtn = document.getElementById('btn-action-arrange');
    if (arrangeBtn) {
      arrangeBtn.addEventListener('click', () => {
        sounds.click();
        this.openArrangePlotsModal();
      });
    }

    const movePlotBtn = document.getElementById('btn-action-move-plot');
    if (movePlotBtn) {
      movePlotBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.toggleMovePlotMode === 'function') {
          this.engine.toggleMovePlotMode();
        }
      });
    }

    const resetPlotsBtn = document.getElementById('btn-reset-plot-positions');
    if (resetPlotsBtn) {
      resetPlotsBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.resetAllPlotPositions === 'function') {
          this.engine.resetAllPlotPositions();
        }
      });
    }

    const exitMovePlotsBtn = document.getElementById('btn-exit-plot-move');
    if (exitMovePlotsBtn) {
      exitMovePlotsBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.toggleMovePlotMode === 'function') {
          this.engine.toggleMovePlotMode(false);
        }
      });
    }

    const walkBtn = document.getElementById('btn-action-walk');
    if (walkBtn) {
      walkBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.toggleFarmerWalkMode === 'function') {
          this.engine.toggleFarmerWalkMode();
          this.syncActionButtonsWithSelection();
        }
      });
    }

    const expandBtn = document.getElementById('btn-action-expand');
    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.togglePlacingNewPlotMode === 'function') {
          this.engine.togglePlacingNewPlotMode();
        }
      });
    }

    const exitPlacePlotsBtn = document.getElementById('btn-exit-plot-place');
    if (exitPlacePlotsBtn) {
      exitPlacePlotsBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.stopPlacingNewPlotMode === 'function') {
          this.engine.stopPlacingNewPlotMode();
        }
      });
    }

    const roadModeBtn = document.getElementById('btn-action-road-mode');
    if (roadModeBtn) {
      roadModeBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.toggleRoadEditMode === 'function') {
          this.engine.toggleRoadEditMode();
        }
      });
    }

    const roadToolMoveBtn = document.getElementById('btn-road-tool-move');
    if (roadToolMoveBtn) {
      roadToolMoveBtn.addEventListener('click', () => {
        if (this.engine && typeof this.engine.setRoadEditTool === 'function') {
          this.engine.setRoadEditTool('move');
        }
      });
    }

    const roadToolEraseBtn = document.getElementById('btn-road-tool-erase');
    if (roadToolEraseBtn) {
      roadToolEraseBtn.addEventListener('click', () => {
        if (this.engine && typeof this.engine.setRoadEditTool === 'function') {
          this.engine.setRoadEditTool('erase');
        }
      });
    }

    const roadToolAddBtn = document.getElementById('btn-road-tool-add');
    if (roadToolAddBtn) {
      roadToolAddBtn.addEventListener('click', () => {
        if (this.engine && typeof this.engine.setRoadEditTool === 'function') {
          this.engine.setRoadEditTool('add');
        }
      });
    }

    const roadResetBtn = document.getElementById('btn-road-reset');
    if (roadResetBtn) {
      roadResetBtn.addEventListener('click', () => {
        if (this.engine && typeof this.engine.resetDefaultRoads === 'function') {
          this.engine.resetDefaultRoads();
        }
      });
    }

    const roadExitBtn = document.getElementById('btn-road-exit');
    if (roadExitBtn) {
      roadExitBtn.addEventListener('click', () => {
        if (this.engine && typeof this.engine.toggleRoadEditMode === 'function') {
          this.engine.toggleRoadEditMode(false);
        }
      });
    }

    // On-Screen Virtual D-Pad (Direct Character Movement Control)
    const setupDpadKey = (id, keyCode) => {
      const el = document.getElementById(id);
      if (!el) return;
      const start = (e) => {
        e.preventDefault();
        el.classList.add('pressed');
        if (this.engine && this.engine.keys) this.engine.keys[keyCode] = true;
      };
      const end = (e) => {
        e.preventDefault();
        el.classList.remove('pressed');
        if (this.engine && this.engine.keys) this.engine.keys[keyCode] = false;
      };
      el.addEventListener('pointerdown', start);
      el.addEventListener('pointerup', end);
      el.addEventListener('pointerleave', end);
      el.addEventListener('pointercancel', end);
    };
    setupDpadKey('dpad-up', 'KeyW');
    setupDpadKey('dpad-down', 'KeyS');
    setupDpadKey('dpad-left', 'KeyA');
    setupDpadKey('dpad-right', 'KeyD');

    const newGameBtn = document.getElementById('btn-open-newgame');
    if (newGameBtn) {
      newGameBtn.addEventListener('click', () => {
        sounds.click();
        this.openNewGameModal();
      });
    }

    const outfitBtn = document.getElementById('btn-toggle-outfit');
    if (outfitBtn) {
      outfitBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.toggleFarmerOutfit === 'function') {
          const current = this.engine.toggleFarmerOutfit();
          const isAlt = current === 'alternative';
          const label = document.getElementById('outfit-btn-label');
          if (label) label.textContent = isAlt ? 'الزي البديل' : 'الزي الأصلي';
          if (this.engine.particles) {
            this.engine.particles.addFloatingText(
              isAlt ? 'الزي البديل (رمادي وجينز باهت) ✨' : 'الزي الأساسي (كاروهات برتقالي وكحلي) 🌾',
              0, 25, isAlt ? '#94a3b8' : '#fb923c', 22
            );
          }
        }
      });
    }

    const tposeBtn = document.getElementById('btn-toggle-tpose');
    if (tposeBtn) {
      tposeBtn.addEventListener('click', () => {
        sounds.click();
        if (this.engine && typeof this.engine.toggleTPose === 'function') {
          const active = this.engine.toggleTPose();
          const label = document.getElementById('tpose-btn-label');
          if (label) label.textContent = active ? 'إلغاء T-Pose' : 'وضع T-Pose';
          if (this.engine.particles) {
            this.engine.particles.addFloatingText(
              active ? 'وضعية النموذج (T-Pose) مفعلة 🧍' : 'وضعية اللعب الطبيعية 🏃',
              0, 25, '#ffd166', 22
            );
          }
        }
      });
    }

    // Modals
    document.getElementById('btn-open-market').addEventListener('click', () => {
      sounds.click();
      this.openMarketModal('sell');
    });

    const contractsBtn = document.getElementById('btn-open-contracts');
    if (contractsBtn) {
      contractsBtn.addEventListener('click', () => {
        sounds.click();
        this.openMarketModal('contracts');
      });
    }

    const buildingsBtn = document.getElementById('btn-open-buildings');
    if (buildingsBtn) {
      buildingsBtn.addEventListener('click', () => {
        sounds.click();
        this.openBuildingsModal();
      });
    }

    document.getElementById('btn-open-quests').addEventListener('click', () => {
      sounds.click();
      this.openQuestsModal();
    });

    const levelsBtn = document.getElementById('btn-open-levels');
    if (levelsBtn) {
      levelsBtn.addEventListener('click', () => {
        sounds.click();
        this.openLevelsModal();
      });
    }

    document.getElementById('btn-open-settings').addEventListener('click', () => {
      sounds.click();
      this.openSettingsModal();
    });

    document.getElementById('btn-toggle-sound').addEventListener('click', () => {
      const isMuted = sounds.toggleMute();
      bgm.toggleMute();
      document.getElementById('sound-icon').textContent = isMuted ? '🔇' : '🔊';
    });

    const pixelBtn = document.getElementById('btn-toggle-pixel');
    if (pixelBtn) {
      pixelBtn.addEventListener('click', () => {
        if (this.engine) {
          const next = this.engine.cyclePixelArtScale();
          const lbl = document.getElementById('pixel-btn-label');
          if (lbl) {
            lbl.textContent = next <= 1 ? 'عالي الدقة (HD)' : `بكسل آرت (${next}x)`;
          }
        }
      });
    }

    const isoBtn = document.getElementById('btn-toggle-iso');
    if (isoBtn) {
      isoBtn.addEventListener('click', () => {
        if (this.engine) {
          this.engine.rotateIsometricAngle(1);
        }
      });
    }

    document.getElementById('btn-close-modal').addEventListener('click', () => {
      sounds.click();
      this.closeModal();
    });

    document.getElementById('modal-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'modal-overlay') {
        sounds.click();
        this.closeModal();
      }
    });

    document.getElementById('btn-close-levelup').addEventListener('click', () => {
      sounds.click();
      document.getElementById('levelup-banner').classList.add('hidden');
    });
  }

  closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    this.activeModal = null;
  }

  // 1. ========================================================
  // MARKET & TRADING SYSTEM
  // ========================================================
  openMarketModal(initialTab = null) {
    if (initialTab) this.marketTab = initialTab;
    this.activeModal = 'market';
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    title.innerHTML = '🏪 سوق بيكانتا والتجارة الريفية (Pierre & Village Merchants)';

    body.innerHTML = `
      <div class="tabs-nav">
        <button class="tab-btn ${this.marketTab === 'sell' ? 'active' : ''}" id="tab-sell">💰 صندوق الشحن (بيع)</button>
        <button class="tab-btn ${this.marketTab === 'seeds' ? 'active' : ''}" id="tab-seeds">🌱 أكياس البذور (11)</button>
        <button class="tab-btn ${this.marketTab === 'animals' ? 'active' : ''}" id="tab-animals">🐔 رعاية ومتجر الحيوانات</button>
        <button class="tab-btn ${this.marketTab === 'contracts' ? 'active' : ''}" id="tab-contracts">📦 صفقات التجار</button>
        <button class="tab-btn ${this.marketTab === 'upgrades' ? 'active' : ''}" id="tab-upgrades">⚡ ترقيات الحداد</button>
      </div>

      <div class="tab-content" id="tab-content-area"></div>
    `;

    document.getElementById('tab-sell').onclick = () => { this.marketTab = 'sell'; this.openMarketModal(); };
    document.getElementById('tab-seeds').onclick = () => { this.marketTab = 'seeds'; this.openMarketModal(); };
    document.getElementById('tab-animals').onclick = () => { this.marketTab = 'animals'; this.openMarketModal(); };
    document.getElementById('tab-contracts').onclick = () => { this.marketTab = 'contracts'; this.openMarketModal(); };
    document.getElementById('tab-upgrades').onclick = () => { this.marketTab = 'upgrades'; this.openMarketModal(); };

    this.renderMarketTabContent();
    overlay.classList.remove('hidden');
  }

  renderMarketTabContent() {
    const area = document.getElementById('tab-content-area');
    if (!area) return;

    if (this.marketTab === 'sell') {
      const itemsList = this.state.hotbar.filter(x => x.type === 'seed' || x.type === 'resource' || x.type === 'consumable');

      let totalValue = 0;
      itemsList.forEach(item => {
        const cropDef = CROPS[item.id];
        const price = cropDef ? cropDef.sellPrice : (item.id === 'wood' ? 8 : 25);
        totalValue += item.count * price;
      });

      let itemsHtml = itemsList.map(item => {
        const cropDef = CROPS[item.id];
        const price = cropDef ? cropDef.sellPrice : (item.id === 'wood' ? 8 : 25);

        return `
          <div class="market-card ${item.count === 0 ? 'disabled' : ''}">
            <div class="item-header">
              <span class="item-icon">${item.icon}</span>
              <div class="item-details">
                <h4>${item.name}</h4>
                <span class="price-tag">🪙 ${price} G</span>
              </div>
            </div>
            <div class="item-inventory">في حقيبتك: <b>${item.count}</b></div>
            <div class="item-actions">
              <button class="sell-btn" data-id="${item.id}" data-all="false" ${item.count <= 0 ? 'disabled' : ''}>
                بيع 1
              </button>
              <button class="sell-btn secondary" data-id="${item.id}" data-all="true" ${item.count <= 0 ? 'disabled' : ''}>
                بيع الكل
              </button>
            </div>
          </div>
        `;
      }).join('');

      area.innerHTML = `
        <div class="sell-summary-bar">
          <div>
            <span>قيمة المعروض للبيع: </span>
            <b class="highlight-coins">🪙 ${totalValue.toLocaleString()} G</b>
          </div>
          <button class="primary-btn sell-all-bulk" id="btn-sell-all-bulk" ${totalValue <= 0 ? 'disabled' : ''}>
            بيع كل الفائض دفعة واحدة 💰
          </button>
        </div>
        <div class="cards-grid">${itemsHtml}</div>
      `;

      area.querySelectorAll('.sell-btn').forEach(btn => {
        btn.onclick = () => {
          const id = btn.dataset.id;
          const sellAll = btn.dataset.all === 'true';
          const item = this.state.hotbar.find(x => x.id === id);
          if (item && item.count > 0) {
            const cropDef = CROPS[id];
            const price = cropDef ? cropDef.sellPrice : (item.id === 'wood' ? 8 : 25);
            const countToSell = sellAll ? item.count : 1;
            item.count -= countToSell;
            this.state.addCoins(countToSell * price);
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText(`+${countToSell * price} G`, 0, 25, '#ffd166', 20);
            }
            this.renderMarketTabContent();
          }
        };
      });

      const bulkBtn = document.getElementById('btn-sell-all-bulk');
      if (bulkBtn) {
        bulkBtn.onclick = () => {
          let totalEarned = 0;
          itemsList.forEach(item => {
            if (item.count > 0) {
              const cropDef = CROPS[item.id];
              const price = cropDef ? cropDef.sellPrice : (item.id === 'wood' ? 8 : 25);
              totalEarned += item.count * price;
              item.count = 0;
            }
          });
          if (totalEarned > 0) {
            this.state.addCoins(totalEarned);
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText(`+${totalEarned} G!`, 0, 30, '#ffd166', 24);
            }
            this.renderMarketTabContent();
          }
        };
      }
    } else if (this.marketTab === 'seeds') {
      const seedsHtml = Object.keys(CROPS).map(k => {
        const crop = CROPS[k];
        const isLevelLocked = this.state.level < (crop.minLevel || 1);
        const canAfford = this.state.coins >= crop.seedCost;
        return `
          <div class="market-card ${isLevelLocked ? 'locked' : ''}">
            <div class="item-header">
              <span class="item-icon">${crop.icon}</span>
              <div class="item-details">
                <h4>بذور ${crop.name}</h4>
                <span class="price-tag">🪙 ${crop.seedCost} G</span>
              </div>
            </div>
            <p class="crop-desc">${crop.description}</p>
            <div class="crop-specs">
              <span>⏱️ النمو: ${crop.growthTime}ث</span>
              <span>💰 البيع: ${crop.sellPrice} G</span>
              <span>⭐ الخبرة: +${crop.xp}</span>
            </div>
            ${isLevelLocked ? `
              <div class="lock-indicator">🔒 يُفتح عند المستوى ${crop.minLevel}</div>
            ` : `
              <div class="buy-actions">
                <button class="buy-seed-btn" data-type="${k}" data-qty="1" ${!canAfford ? 'disabled' : ''}>
                  شراء 1
                </button>
                <button class="buy-seed-btn secondary" data-type="${k}" data-qty="5" ${this.state.coins < crop.seedCost * 5 ? 'disabled' : ''}>
                  شراء 5 (${crop.seedCost * 5} G)
                </button>
              </div>
            `}
          </div>
        `;
      }).join('');

      area.innerHTML = `<div class="cards-grid">${seedsHtml}</div>`;

      area.querySelectorAll('.buy-seed-btn').forEach(btn => {
        btn.onclick = () => {
          const type = btn.dataset.type;
          const qty = parseInt(btn.dataset.qty, 10);
          const crop = CROPS[type];
          const totalCost = crop.seedCost * qty;
          if (this.state.spendCoins(totalCost)) {
            sounds.plant();
            const slot = this.state.hotbar.find(x => x.id === type);
            if (slot) slot.count += qty;
            else this.state.addItem(type, qty);
            this.state.notify();
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText(`+${qty} ${crop.icon}`, 0, 25, '#64b5f6', 18);
            }
            this.renderMarketTabContent();
          }
        };
      });
    } else if (this.marketTab === 'animals') {
      // 1. Animals Care Status Cards (Feed, Pet, Collect)
      const careItems = Object.keys(this.state.animalsCare).map(k => {
        const care = this.state.animalsCare[k];
        const def = ANIMALS[k];
        if (!def) return '';

        return `
          <div class="animal-care-card">
            <div class="care-header">
              <span class="care-icon">${def.icon}</span>
              <div class="care-details">
                <h4>${def.name} (عدد ${care.count})</h4>
                <div class="happiness-meter">
                  <div class="happiness-fill" style="width: ${care.happiness}%"></div>
                  <span class="happiness-text">السعادة: ${care.happiness}% ❤️</span>
                </div>
              </div>
            </div>
            <div class="care-product-badge">
              <span>🎁 الإنتاج: ${def.productIcon} ${def.productName}</span>
              <span class="status-pill ${care.productReady ? 'ready' : 'waiting'}">
                ${care.productReady ? 'جاهز للجمع! ✨' : 'قيد الإنتاج...'}
              </span>
            </div>
            <div class="care-actions">
              <button class="care-act-btn pet-btn" data-animal="${k}">
                ❤️ تدليل
              </button>
              <button class="care-act-btn feed-btn" data-animal="${k}" ${care.fed ? 'disabled' : ''}>
                🌾 إطعام
              </button>
              ${def.product !== 'ride' ? `
                <button class="care-act-btn collect-btn" data-animal="${k}" ${!care.productReady ? 'disabled' : ''}>
                  🧺 جمع
                </button>
              ` : `
                <button class="care-act-btn ride-btn" data-animal="${k}">
                  🏇 ركوب الحصان
                </button>
              `}
            </div>
          </div>
        `;
      }).join('');

      // 2. Buy New Animals Store
      const animalsHtml = Object.keys(ANIMALS).map(k => {
        const a = ANIMALS[k];
        const isLevelLocked = this.state.level < (a.minLevel || 1);
        const canAfford = this.state.coins >= a.cost;
        return `
          <div class="market-card ${isLevelLocked ? 'locked' : ''}">
            <div class="item-header">
              <span class="item-icon">${a.icon}</span>
              <div class="item-details">
                <h4>${a.name}</h4>
                <span class="price-tag">🪙 ${a.cost} G</span>
              </div>
            </div>
            <p class="crop-desc">${a.desc}</p>
            <div class="crop-specs">
              <span>🎁 الإنتاج: ${a.productIcon} ${a.productName}</span>
              <span>💰 القيمة: ${a.productPrice} G</span>
            </div>
            ${isLevelLocked ? `
              <div class="lock-indicator">🔒 يتطلب المستوى ${a.minLevel}</div>
            ` : `
              <button class="primary-btn buy-animal-btn" data-type="${k}" ${!canAfford ? 'disabled' : ''}>
                شراء وإرسال للمرعى (${a.cost} G)
              </button>
            `}
          </div>
        `;
      }).join('');

      area.innerHTML = `
        <div class="section-title">
          <h3>❤️ رعاية حيوانات المزرعة الحالية</h3>
          <p>دلل وأطعم حيواناتك واجمع محاصيل الحليب والبيض والصوف بانتظام!</p>
        </div>
        <div class="cards-grid" style="margin-bottom: 20px;">${careItems}</div>

        <div class="section-title">
          <h3>🏡 شراء مواشي وحيوانات جديدة (Marnie's Ranch)</h3>
        </div>
        <div class="cards-grid">${animalsHtml}</div>
      `;

      // Animal Care Actions
      area.querySelectorAll('.pet-btn').forEach(btn => {
        btn.onclick = () => {
          const k = btn.dataset.animal;
          if (this.state.petAnimal(k)) {
            sounds.pet();
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText(`❤️ أحب ${ANIMALS[k]?.name} ملاطفتك! (+10 XP)`, 0, 25, '#ec4899', 20);
            }
            this.renderMarketTabContent();
          }
        };
      });

      area.querySelectorAll('.feed-btn').forEach(btn => {
        btn.onclick = () => {
          const k = btn.dataset.animal;
          if (this.state.feedAnimal(k)) {
            sounds.eat();
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText(`🌾 تم إطعام ${ANIMALS[k]?.name} بنجاح!`, 0, 25, '#22c55e', 20);
            }
            this.renderMarketTabContent();
          } else {
            alert('تحتاج إلى قمح 🌾 أو جزر 🥕 أو تفاح 🍎 في حقيبتك لإطعام الحيوانات!');
          }
        };
      });

      area.querySelectorAll('.collect-btn').forEach(btn => {
        btn.onclick = () => {
          const k = btn.dataset.animal;
          if (this.state.collectAnimalProduct(k)) {
            const def = ANIMALS[k];
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText(`+1 ${def.productIcon} ${def.productName}!`, 0, 25, '#ffd166', 22);
            }
            this.renderMarketTabContent();
          }
        };
      });

      area.querySelectorAll('.ride-btn').forEach(btn => {
        btn.onclick = () => {
          if (this.engine) {
            this.engine.isRiding = !this.engine.isRiding;
            sounds.neigh();
            this.state.checkQuests('ride', 1);
            this.closeModal();
            this.engine.particles.addFloatingText(this.engine.isRiding ? '🏇 انطلقت راكباً الحصان بسرعة مضاعفة!' : 'نـزلت عن الحصان 🐎', 0, 25, '#fbbf24', 22);
          }
        };
      });

      // Buy Animals
      area.querySelectorAll('.buy-animal-btn').forEach(btn => {
        btn.onclick = () => {
          const type = btn.dataset.type;
          const a = ANIMALS[type];
          if (this.state.spendCoins(a.cost)) {
            sounds.levelUp();
            if (this.state.animalsCare[type]) {
              this.state.animalsCare[type].count++;
            }
            if (this.engine && this.engine.animalsManager) {
              this.engine.animalsManager.addAnimal(type, 19, 5);
            }
            confetti({ particleCount: 40, spread: 70, origin: { x: 0.5, y: 0.5 } });
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText(`+1 ${a.icon} في مرعى المزرعة! 🎉`, 0, 30, '#ffd166', 20);
            }
            this.renderMarketTabContent();
          }
        };
      });
    } else if (this.marketTab === 'contracts') {
      // 3. Merchant Trading Orders & Contracts
      const ordersHtml = this.state.merchantOrders.map(order => {
        const canFulfill = !order.fulfilled && order.requires.every(req => this.state.getItemTotalCount(req.id) >= req.count);

        const reqsList = order.requires.map(req => {
          const have = this.state.getItemTotalCount(req.id);
          const satisfied = have >= req.count;
          return `
            <div class="req-chip ${satisfied ? 'satisfied' : 'missing'}">
              <span>${req.icon} ${req.name}</span>
              <b>${have} / ${req.count}</b>
            </div>
          `;
        }).join('');

        return `
          <div class="contract-card ${order.fulfilled ? 'fulfilled' : (canFulfill ? 'ready-to-deliver' : '')}">
            <div class="contract-header">
              <span class="merchant-avatar">${order.merchantIcon}</span>
              <div class="contract-meta">
                <h4>${order.title}</h4>
                <span class="merchant-name">${order.merchant}</span>
              </div>
            </div>
            <p class="contract-desc">${order.desc}</p>

            <div class="contract-section">
              <span class="section-label">المستلزمات المطلوبة:</span>
              <div class="reqs-grid">${reqsList}</div>
            </div>

            <div class="contract-rewards-box">
              <span class="reward-tag coins">🪙 +${order.rewardCoins} G</span>
              <span class="reward-tag xp">⭐ +${order.rewardXp} XP</span>
              ${order.bonusItem ? `<span class="reward-tag bonus">🎁 ${order.bonusItem.icon} ${order.bonusItem.name} x${order.bonusItem.count}</span>` : ''}
            </div>

            <div class="contract-actions">
              ${order.fulfilled ? `
                <div class="fulfilled-badge">✓ تمت الصفقة واستلمت الأرباح</div>
              ` : `
                <button class="primary-btn deliver-order-btn ${canFulfill ? 'pulse' : ''}" data-id="${order.id}" ${!canFulfill ? 'disabled' : ''}>
                  ${canFulfill ? 'تسليم الطلبية واستلام المكافأة 📦' : 'المستلزمات غير مكتملة'}
                </button>
              `}
            </div>
          </div>
        `;
      }).join('');

      area.innerHTML = `
        <div class="section-title">
          <h3>📦 صفقات تجار القرية اليومية (Village Merchant Contracts)</h3>
          <p>أتمم طلبيات الخباز والواحة ونقابة النسيج لتحصل على ثروات ذهبية وبذور نادرة!</p>
        </div>
        <div class="contracts-grid">${ordersHtml}</div>
      `;

      area.querySelectorAll('.deliver-order-btn').forEach(btn => {
        btn.onclick = () => {
          const id = btn.dataset.id;
          if (this.state.fulfillOrder(id)) {
            sounds.trade();
            sounds.levelUp();
            confetti({ particleCount: 70, spread: 80, origin: { x: 0.5, y: 0.5 } });
            if (this.engine && this.engine.particles) {
              this.engine.particles.addFloatingText('تم إتمام الصفقة واستلام الأرباح! 📦✨', 0, 30, '#ffd166', 22);
            }
            this.renderMarketTabContent();
            this.updateHUD();
          }
        };
      });
    } else if (this.marketTab === 'upgrades') {
      const upgradesHtml = Object.keys(UPGRADES).map(k => {
        const up = UPGRADES[k];
        const currentLvl = this.state.upgrades[k] || 1;
        const nextLvl = currentLvl + 1;
        const nextInfo = up.levels.find(l => l.level === nextLvl);
        const isMax = !nextInfo;

        return `
          <div class="market-card ${isMax ? 'maxed' : ''}">
            <div class="item-header">
              <span class="item-icon">${k === 'waterCapacity' ? '💧' : '👟'}</span>
              <div class="item-details">
                <h4>${up.name}</h4>
                <span class="level-indicator">المستوى الحالي: ${currentLvl}</span>
              </div>
            </div>
            ${isMax ? `
              <div class="maxed-badge">✨ أعلى ترقية تم الحصول عليها!</div>
            ` : `
              <p class="crop-desc">${nextInfo.desc}</p>
              <div class="crop-specs">
                <span>🪙 السعر: ${nextInfo.cost} G</span>
              </div>
              <button class="primary-btn buy-upgrade-btn" data-key="${k}" ${this.state.coins < nextInfo.cost ? 'disabled' : ''}>
                ترقية (${nextInfo.cost} G)
              </button>
            `}
          </div>
        `;
      }).join('');

      area.innerHTML = `<div class="cards-grid">${upgradesHtml}</div>`;

      area.querySelectorAll('.buy-upgrade-btn').forEach(btn => {
        btn.onclick = () => {
          const key = btn.dataset.key;
          const upDef = UPGRADES[key];
          const nextLvl = (this.state.upgrades[key] || 1) + 1;
          const nextInfo = upDef.levels.find(l => l.level === nextLvl);
          if (nextInfo && this.state.spendCoins(nextInfo.cost)) {
            this.state.upgrades[key] = nextLvl;
            sounds.levelUp();
            this.state.notify();
            this.renderMarketTabContent();
          }
        };
      });
    }
  }

  // 2. ========================================================
  // BUILDINGS & INFRASTRUCTURE MODAL
  // ========================================================
  openBuildingsModal() {
    this.activeModal = 'buildings';
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    title.innerHTML = '🏛️ تشييد مرافق ومباني المزرعة (Robin\'s Carpentry)';

    const buildingsHtml = Object.keys(BUILDINGS).map(bId => {
      const b = BUILDINGS[bId];
      const isBuilt = this.state.isBuildingConstructed(bId);
      const isLevelLocked = this.state.level < b.minLevel;
      const playerWood = this.state.getItemTotalCount('wood');
      const canAfford = !isBuilt && !isLevelLocked && this.state.coins >= b.cost && playerWood >= b.woodCost;

      const perksHtml = b.perks.map(p => `<li>✨ ${p}</li>`).join('');

      return `
        <div class="building-card ${isBuilt ? 'constructed' : (isLevelLocked ? 'locked' : '')}">
          <div class="building-header">
            <span class="building-icon">${b.icon}</span>
            <div class="building-meta">
              <h4>${b.name}</h4>
              <span class="building-cost">🪙 ${b.cost} G | 🪵 ${b.woodCost} خشب</span>
            </div>
            ${isBuilt ? `<span class="built-pill">✓ تم التشييد</span>` : ''}
          </div>

          <p class="building-desc">${b.desc}</p>

          <ul class="building-perks">${perksHtml}</ul>

          <div class="building-stats-row">
            <span>المستوى المطلوب: <b>Lvl ${b.minLevel}</b></span>
            <span>الخشب المتوفر: <b>🪵 ${playerWood}/${b.woodCost}</b></span>
          </div>

          <div class="building-actions">
            ${isBuilt ? `
              <button class="primary-btn constructed-btn" disabled>
                🏛️ المبنى قائم ويعمل في المزرعة
              </button>
            ` : (isLevelLocked ? `
              <button class="primary-btn locked-btn" disabled>
                🔒 مقفل (يتطلب مستوى ${b.minLevel})
              </button>
            ` : `
              <button class="primary-btn construct-act-btn ${canAfford ? 'pulse' : ''}" data-id="${bId}" ${!canAfford ? 'disabled' : ''}>
                ${canAfford ? 'تشييد الآن في المزرعة 🔨' : 'الموارد غير كافية'}
              </button>
            `)}
          </div>
        </div>
      `;
    }).join('');

    body.innerHTML = `
      <div class="section-title">
        <h3>🌾 طور مزرعتك بالمرافق الحيوية</h3>
        <p>شيد الصومعة والبئر والمخبز والصوبة لزيادة سرعة الإنتاج ومضاعفة أرباح المزرعة!</p>
      </div>
      <div class="buildings-grid">${buildingsHtml}</div>
    `;

    body.querySelectorAll('.construct-act-btn').forEach(btn => {
      btn.onclick = () => {
        const bId = btn.dataset.id;
        if (this.engine && this.engine.constructBuildingAction(bId)) {
          this.openBuildingsModal();
          this.updateHUD();
        }
      };
    });

    overlay.classList.remove('hidden');
  }

  // 3. ========================================================
  // LEVEL PROGRESSION & UNLOCK TREE MODAL
  // ========================================================
  openLevelsModal() {
    this.activeModal = 'levels';
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    title.innerHTML = '🌟 شجرة المستويات والمزايا (Level Milestones)';

    const neededXp = this.state.getXpNeededForLevel ? this.state.getXpNeededForLevel(this.state.level) : 500;
    const xpPct = Math.min(100, Math.round((this.state.xp / neededXp) * 100));

    const tiers = [
      { level: 1, title: 'البداية الريفية الطيبة', icon: '🥕', perks: ['جزر برتقالي 🥕', 'قمح ذهبي 🌾', 'دجاج نشيط 🐔', 'أدوات الحراثة والري الأساسية ⛏️💧'], status: this.state.level >= 1 },
      { level: 2, title: 'التخزين ومصادر المياه', icon: '⛲', perks: ['بئر المياه العذبة ⛲', 'صومعة الغلال 🌾', 'ذرة شمسية 🌽', 'طماطم حمراء 🍅', 'بط بري 🦆', 'حظيرة الدواجن والبط'], status: this.state.level >= 2 },
      { level: 3, title: 'المروج والأبقار الزاهية', icon: '🐮', perks: ['أبقار حلوب 🐮', 'فراولة المروج 🍓', 'دوار الشمس الذهبي 🌻', 'خلية النحل 🐝', 'مراعي الأبقار والماعز'], status: this.state.level >= 3 },
      { level: 4, title: 'الصناعات والمعجنات الريفية', icon: '🥖', perks: ['مخبز المزرعة 🥖', 'قرع عملاق 🎃', 'باذنجان ملكي 🍆', 'ماعز وثابة 🐐', 'أغنام صوفية 🐑', 'مرعى الصوف'], status: this.state.level >= 4 },
      { level: 5, title: 'الفرسان والرفاهية الملكية', icon: '🐎', perks: ['حصان عربي أصيل 🐎 (ركوب سريع مضاعف)', 'إسطبل الخيول 🏛️', 'بطيخ صيفي منعش 🍉', 'أرانب أنجورا ظريفة 🐇'], status: this.state.level >= 5 },
      { level: 6, title: 'المعجزات الزراعية والبيوت المحمية', icon: '🏡', perks: ['الصوبة الزراعية الزجاجية 🏡', 'عنب معرش فاخر 🍇', 'سرعة نمو مضاعفة 2x صيفاً وشتاءً!'], status: this.state.level >= 6 },
      { level: 7, title: 'أسطورة المروج والثروة الطائلة', icon: '🍍', perks: ['أناناس استوائي نادر 🍍 (+650 G)', 'أرباح الصفقات التجارية مضاعفة 3x', 'وسام المزارع الأسطوري الذهبي 👑'], status: this.state.level >= 7 }
    ];

    const tiersHtml = tiers.map(t => `
      <div class="level-tier-card ${t.status ? 'unlocked' : 'upcoming'}">
        <div class="tier-badge ${t.status ? 'unlocked' : ''}">
          <span class="tier-icon">${t.icon}</span>
          <span class="tier-level">Lvl ${t.level}</span>
        </div>
        <div class="tier-content">
          <h4>${t.title} ${t.status ? '✓ تم الفتح' : '🔒 قادم'}</h4>
          <div class="tier-perks-pills">
            ${t.perks.map(p => `<span class="perk-pill">${p}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    body.innerHTML = `
      <div class="level-summary-hero">
        <div class="hero-left">
          <div class="big-level-circle">${this.state.level}</div>
          <div>
            <h3>المزارع المحترف - المستوى ${this.state.level}</h3>
            <span class="skill-tag">🌱 مهارة الزراعة: المستوى ${this.state.farmingSkill} / 10</span>
          </div>
        </div>
        <div class="hero-right">
          <div class="xp-progress-meta">
            <span>الخبرة الحالية: <b>${this.state.xp} / ${neededXp} XP</b></span>
            <span>باقي للمستوى القادم: <b>${Math.max(0, neededXp - this.state.xp)} XP</b></span>
          </div>
          <div class="level-hero-bar">
            <div class="level-hero-fill" style="width: ${xpPct}%"></div>
          </div>
        </div>
      </div>

      <div class="section-title" style="margin-top: 20px;">
        <h3>🗺️ مسار المزايا والمحاصيل المفتوحة</h3>
        <p>كل ارتقاء لمستوى جديد يمنحك قطعاً ذهبية ويفتح محاصيل ومباني وحيوانات جديدة!</p>
      </div>

      <div class="tiers-roadmap">${tiersHtml}</div>
    `;

    overlay.classList.remove('hidden');
  }

  // 4. ========================================================
  // QUESTS & MISSIONS SYSTEM
  // ========================================================
  openQuestsModal() {
    this.activeModal = 'quests';
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    title.innerHTML = '📜 المهام اليومية والقصة (Daily Help Wanted)';

    const filteredQuests = this.state.quests.filter(q => {
      if (this.questFilter === 'all') return true;
      return q.category === this.questFilter;
    });

    const questsHtml = filteredQuests.map(q => {
      const pct = Math.min(100, Math.round((q.current / q.targetCount) * 100));
      return `
        <div class="quest-card ${q.completed ? 'completed' : ''} ${q.claimed ? 'claimed' : ''}">
          <div class="quest-header">
            <span class="quest-icon">${q.icon}</span>
            <div class="quest-info">
              <h4>${q.title}</h4>
              <p>${q.desc}</p>
            </div>
            <div class="quest-reward">
              <span>🪙 ${q.rewardCoins} G</span>
              <span>⭐ ${q.rewardXp} XP</span>
            </div>
          </div>
          <div class="quest-progress-box">
            <div class="quest-progress-bar">
              <div class="quest-progress-fill" style="width: ${pct}%"></div>
            </div>
            <span class="quest-count">${q.current} / ${q.targetCount}</span>
          </div>
          ${q.claimed ? `
            <div class="claimed-badge">✓ تم استلام الجائزة</div>
          ` : (q.completed ? `
            <button class="primary-btn claim-quest-btn pulse" data-id="${q.id}">
              استلام المكافأة 🎉
            </button>
          ` : `
            <button class="primary-btn" disabled>قيد الإنجاز (${q.current}/${q.targetCount})...</button>
          `)}
        </div>
      `;
    }).join('');

    body.innerHTML = `
      <div class="quests-filter-bar">
        <button class="q-filter-btn ${this.questFilter === 'all' ? 'active' : ''}" data-cat="all">🌟 الكل</button>
        <button class="q-filter-btn ${this.questFilter === 'story' ? 'active' : ''}" data-cat="story">📖 القصة</button>
        <button class="q-filter-btn ${this.questFilter === 'animals' ? 'active' : ''}" data-cat="animals">🐔 الحيوانات</button>
        <button class="q-filter-btn ${this.questFilter === 'building' ? 'active' : ''}" data-cat="building">🏛️ المباني</button>
        <button class="q-filter-btn ${this.questFilter === 'trade' ? 'active' : ''}" data-cat="trade">📦 التجارة</button>
      </div>

      <div class="quests-list">${questsHtml}</div>
    `;

    body.querySelectorAll('.q-filter-btn').forEach(btn => {
      btn.onclick = () => {
        this.questFilter = btn.dataset.cat;
        this.openQuestsModal();
      };
    });

    body.querySelectorAll('.claim-quest-btn').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        if (this.state.claimQuest(id)) {
          sounds.levelUp();
          confetti({ particleCount: 50, spread: 80, origin: { x: 0.5, y: 0.5 } });
          if (this.engine && this.engine.particles) {
            this.engine.particles.addFloatingText('تم استلام مكافأة المهمة! 🎉', 0, 30, '#ffd166', 22);
          }
          this.openQuestsModal();
          this.updateHUD();
        }
      };
    });

    overlay.classList.remove('hidden');
  }

  openSettingsModal() {
    this.activeModal = 'settings';
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    title.innerHTML = '⚙️ دليل المزرعة وطريقة التحكم';

    body.innerHTML = `
      <div class="guide-box">
        <div class="settings-visual-panel" style="margin-bottom: 20px; background: rgba(0,0,0,0.25); border-radius: 12px; padding: 16px; border: 1px solid rgba(255,255,255,0.12);">
          <h4 style="color: #ffd166; font-size: 1.15rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>👾</span>
            <span>أسلوب العرض وزاوية الرؤية (Graphics & Isometric View)</span>
          </h4>
          
          <div style="margin-bottom: 14px;">
            <div style="font-size: 0.95rem; color: #e2e8f0; margin-bottom: 8px; font-weight: bold;">درجة أسلوب البكسل (Pixel Art Scale):</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="visual-opt-btn" id="opt-pixel-2" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">💎 2x واضح الملامح (الموصى به)</button>
              <button class="visual-opt-btn" id="opt-pixel-1" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">✨ 1x فائق الدقة HD</button>
              <button class="visual-opt-btn" id="opt-pixel-3" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">👾 3x بكسل ناعم</button>
              <button class="visual-opt-btn" id="opt-pixel-4" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">🕹️ 4x بكسل كلاسيكي</button>
            </div>
          </div>

          <div>
            <div style="font-size: 0.95rem; color: #e2e8f0; margin-bottom: 8px; font-weight: bold;">زاوية الكاميرا المجسمة:</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="visual-opt-btn" id="opt-cam-ortho" style="flex: 1; min-width: 120px; padding: 8px 12px; background: #059669; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">📐 أيزومترك مجسم</button>
              <button class="visual-opt-btn" id="opt-cam-rotate" style="flex: 1; min-width: 120px; padding: 8px 12px; background: #0284c7; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">🔄 تدوير 90° (Q/R)</button>
              <button class="visual-opt-btn" id="opt-cam-persp" style="flex: 1; min-width: 120px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">🎥 منظور حر</button>
            </div>
          </div>
        </div>

        <h3>🌾 تحكم وحركات المزارع السهلة:</h3>
        <ul>
          <li><b>📐 الكاميرا الأيزومترية:</b> اضغط زر [Q] أو [R] أو زر الكاميرا لتدوير الزاوية الأيزومترية 90 درجة، واستخدم عجلة الماوس للتكبير والتصغير!</li>
          <li><b>👾 نمط البكسل:</b> اضغط زر [P] للتبديل السريع بين دقات بكسل آرت المختلفة (2x واضح / 1x HD / 3x / 4x)!</li>
          <li><b>⛏️ الحرث السهل:</b> انقر على أي بقعة عشبية، أو اضغط زر [⛏️ حرث] لحرث الأرض أمامك فوراً!</li>
          <li><b>🌱 الزراعة المباشرة:</b> انقر على أي تربة محروثة لغرس البذور، أو اضغط زر [🌱 زرع]!</li>
          <li><b>🌾 الحصاد الفوري:</b> انقر على أي محصول ناضج يلمع لحصاده فوراً دون الحاجة لأي أداة معقدة!</li>
          <li><b>💧 ملء الماء:</b> انقر على البحيرة أو رصيف الصيد أو بئر المياه لإعادة ملء المرشة فوراً!</li>
          <li><b>⛅ نظام الطقس:</b> انقر على شارة الطقس في أعلى اليسار للتبديل بين الطقوس الخمسة (مشمس، ممطر، عاصف، خريفي، مثلج)!</li>
          <li><b>🏛️ تشييد المباني:</b> اضغط زر [🏛️ المباني] لبناء الصومعة، البئر، خلية النحل، المخبز، والصوبة الزجاجية ثلاثية الأبعاد!</li>
          <li><b>📦 صفقات التجار:</b> اضغط زر [📦 التجارة] لتسليم طلبيات الخباز وتجار القرية والحصول على أموال طائلة!</li>
          <li><b>🐎 ركوب الحصان:</b> انقر على الحصان في الإسطبل أو زر الركوب لامتطائه وركوبه بسرعة مضاعفة!</li>
          <li><b>⛶ ملء الشاشة:</b> اضغط زر [⛶ تكبير] في الأعلى لجعل اللعبة تغطي شاشتك بالكامل!</li>
        </ul>

        <div class="danger-zone">
          <button class="danger-btn" id="btn-reset-save">إعادة ضبط اللعبة وبدء حفظ جديد 🔄</button>
        </div>
      </div>
    `;

    // Wire graphics options buttons
    const updatePixelButtonsUI = (activeSize) => {
      [1, 2, 3, 4].forEach(sz => {
        const btn = document.getElementById(`opt-pixel-${sz}`);
        if (btn) btn.style.background = sz === activeSize ? '#2563eb' : '#334155';
      });
      const lbl = document.getElementById('pixel-btn-label');
      if (lbl) {
        lbl.textContent = activeSize <= 1 ? 'عالي الدقة (HD)' : `بكسل واضح (${activeSize}x)`;
      }
    };

    if (this.engine) {
      updatePixelButtonsUI(this.engine.pixelSize || 2);
    }

    [1, 2, 3, 4].forEach(sz => {
      const btn = document.getElementById(`opt-pixel-${sz}`);
      if (btn) {
        btn.onclick = () => {
          if (this.engine) {
            this.engine.setPixelArtScale(sz);
            updatePixelButtonsUI(sz);
          }
        };
      }
    });

    const btnOrtho = document.getElementById('opt-cam-ortho');
    const btnPersp = document.getElementById('opt-cam-persp');
    const btnRotate = document.getElementById('opt-cam-rotate');

    const updateCamButtonsUI = () => {
      const isOrtho = this.engine ? this.engine.isOrthographic : true;
      if (btnOrtho) btnOrtho.style.background = isOrtho ? '#059669' : '#334155';
      if (btnPersp) btnPersp.style.background = !isOrtho ? '#059669' : '#334155';
    };
    updateCamButtonsUI();

    if (btnOrtho) {
      btnOrtho.onclick = () => {
        if (this.engine && !this.engine.isOrthographic) {
          this.engine.toggleCameraProjection();
          updateCamButtonsUI();
        }
      };
    }
    if (btnPersp) {
      btnPersp.onclick = () => {
        if (this.engine && this.engine.isOrthographic) {
          this.engine.toggleCameraProjection();
          updateCamButtonsUI();
        }
      };
    }
    if (btnRotate) {
      btnRotate.onclick = () => {
        if (this.engine) {
          this.engine.rotateIsometricAngle(1);
        }
      };
    }

    document.getElementById('btn-reset-save').onclick = () => {
      this.openNewGameModal();
    };

    overlay.classList.remove('hidden');
  }

  openNewGameModal() {
    this.activeModal = 'newgame';
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    title.innerHTML = '🔄 بدء لعبة جديدة (تصفير شامل للمزرعة)';
    body.innerHTML = `
      <div class="newgame-modal-content">
        <div class="newgame-hero-icon">🌱</div>
        <h3 class="newgame-heading">هل تريد حقاً إعادة بدء اللعبة من البداية؟</h3>
        <p class="newgame-warning">سيتم تصفير جميع البيانات والعودة إلى البداية تماماً كالتالي:</p>
        
        <div class="newgame-perks-list">
          <div class="perk-item">
            <span class="perk-icon">⭐</span>
            <div><b>المستوى 1:</b> العودة إلى المستوى الأول والبدء بالخبرة من الصفر.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🔒</span>
            <div><b>قفل كل المزارع:</b> قفل جميع حظائر الحيوانات الـ 7 حتى تفتحها بالمستوى والذهب.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🌽</span>
            <div><b>بذور الذرة للبداية:</b> ستتحصل على 12 بذرة ذرة فقط لتزرع وتبيع وتجني الذهب.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🚫</span>
            <div><b>تفريغ الأرض:</b> تصفير جميع المزروعات في الحقل حتى تبدأ زراعتها بنفسك.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🪙</span>
            <div><b>رصيد البداية:</b> 50 عملة ذهبية مع الأدوات الأساسية.</div>
          </div>
        </div>

        <div class="newgame-actions">
          <button class="primary-btn danger-confirm-btn" id="btn-confirm-newgame">
            <span>🔄</span>
            <span>نعم، ابدأ لعبة جديدة الآن</span>
          </button>
          <button class="secondary-btn cancel-btn" id="btn-cancel-newgame">
            <span>✕</span>
            <span>إلغاء والعودة للمزرعة</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-confirm-newgame').onclick = () => {
      sounds.harvest();
      confetti({ particleCount: 50, spread: 80, origin: { x: 0.5, y: 0.5 } });
      setTimeout(() => {
        if (this.state) {
          this.state.startNewGame();
        } else {
          localStorage.clear();
          window.location.reload();
        }
      }, 350);
    };

    document.getElementById('btn-cancel-newgame').onclick = () => {
      sounds.click();
      this.closeModal();
    };

    overlay.classList.remove('hidden');
  }

  openArrangePlotsModal() {
    this.activeModal = 'arrange';
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    const currentLayout = (this.engine && this.engine.farmingPlotLayout) || 'grid_5x4';

    const layouts = [
      {
        id: 'grid_5x4',
        name: 'الشبكة المنتظمة (5×4)',
        desc: 'شبكة متراصة كلاسيكية موحدة للمزارعين المحترفين، ممتازة للري السريع والزراعة المنظمة في كتلة واحدة.',
        icon: '▦',
        diagram: '5 أعمدة × 4 صفوف متراصة'
      },
      {
        id: 'twin_blocks',
        name: 'المصطبتان المتقابلتان (2×5)',
        desc: 'قطعتان زراعيتان متوازيتان يتوسطهما ممر مشاة واسع يسهل حركة المزارع ويسرع الوصول لكل نبتة.',
        icon: '▥',
        diagram: 'مزرعتان منفصلتان بممر مشاة وسطي'
      },
      {
        id: 'quad_blocks',
        name: 'المربعات الأربعة (تقاطع الطرق)',
        desc: 'توزيع رباعي هندسي راقي حول مفترق طرق مركزي يمنح المزرعة مظهراً جمالياً وتنظيماً فريداً لكل صنف.',
        icon: '⊞',
        diagram: '4 مربعات مستقلة حول تقاطع طرق'
      },
      {
        id: 'long_terraces',
        name: 'المدرجات الطولية الممتدة',
        desc: 'خطوط زراعية طولية أنيقة ممتدة على طول الحقل، مثالية للأشجار والكروم والمحاصيل المتسلقة.',
        icon: '☰',
        diagram: 'خطان طوليان بطول الحقل'
      }
    ];

    title.innerHTML = '📐 ترتيب وتقسيم أرض الزراعة';

    let cardsHtml = layouts.map(l => {
      const isSelected = l.id === currentLayout;
      return `
        <div class="layout-card ${isSelected ? 'selected' : ''}" data-layout="${l.id}">
          <div class="layout-card-header">
            <span class="layout-icon">${l.icon}</span>
            <div class="layout-title-box">
              <h4>${l.name}</h4>
              <span class="layout-diagram">${l.diagram}</span>
            </div>
            ${isSelected ? '<span class="layout-active-badge">الترتيب النشط ✓</span>' : ''}
          </div>
          <p class="layout-desc">${l.desc}</p>
          <button class="primary-btn select-layout-btn" data-layout="${l.id}">
            ${isSelected ? 'مطبق حالياً 🌾' : 'تطبيق هذا التقسيم ✨'}
          </button>
        </div>
      `;
    }).join('');

    body.innerHTML = `
      <div class="arrange-modal-wrapper">
        <p class="arrange-modal-subtitle">اختر الشكل الهندسي الأنسب لأحواض الزراعة الخشبية في حديقتك. يمكنك تغيير الترتيب في أي وقت!</p>
        <div class="layout-cards-grid">${cardsHtml}</div>
      </div>
    `;

    body.querySelectorAll('.select-layout-btn').forEach(btn => {
      btn.onclick = () => {
        const layoutId = btn.dataset.layout;
        sounds.till();
        if (this.engine) {
          this.engine.setLayout(layoutId);
          if (this.engine.particles) {
            this.engine.particles.addFloatingText('تم تطبيق التقسيم الجديد للأرض! 📐', 0, 25, '#ffd166', 22);
          }
        }
        this.closeModal();
      };
    });

    overlay.classList.remove('hidden');
  }

  showLevelUpModal(level, skill, bonus = 0) {
    const banner = document.getElementById('levelup-banner');
    const desc = document.getElementById('levelup-desc');
    desc.textContent = `ارتقيت في مهارة الزراعة إلى المستوى ${skill} ومستوى المزرعة ${level}! تم فتح أرباح ومحاصيل جديدة وحصلت على منحة ${bonus || level * 100} G 🪙!`;
    banner.classList.remove('hidden');
    confetti({ particleCount: 80, spread: 90, origin: { x: 0.5, y: 0.5 } });
  }
}
