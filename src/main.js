import './style.css';
import { GameEngine3D } from './game/GameEngine3D.js';
import { UIManager } from './ui/UIManager.js';

function startApp() {
  try {
    // 1. Initialize UIManager which creates the DOM and canvas
    const uiManager = new UIManager();

    // 2. Grab the rendered canvas
    const canvas = document.getElementById('game-canvas');
    if (!canvas) {
      throw new Error('لم يتم العثور على عنصر canvas (#game-canvas) في الصفحة.');
    }

    // 3. Initialize 3D Isometric GameEngine with Three.js
    const engine = new GameEngine3D(canvas);

    // 4. Attach engine to UI
    uiManager.attachEngine(engine);

    // 5. Start game loop
    engine.start();

    console.log('🌾 لعبة مزرعة المروج الهادئة 3D جاهزة وتعمل بنجاح!');
  } catch (err) {
    console.error('فشل بدء تشغيل اللعبة:', err);
    const appEl = document.getElementById('app');
    if (appEl) {
      appEl.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#2d4a22;color:white;font-family:'Outfit','Cairo',sans-serif;direction:rtl;text-align:center;padding:24px;">
          <div style="font-size:4rem;margin-bottom:12px;">⚠️</div>
          <h2 style="font-size:1.8rem;margin-bottom:8px;font-family:'Cairo',sans-serif;">حدث خطأ أثناء تحميل اللعبة</h2>
          <p style="color:#ffd166;font-size:1.1rem;max-width:600px;margin-bottom:20px;line-height:1.6;font-family:'Cairo',sans-serif;">${err.message || 'خطأ غير متوقع في محرك Three.js'}</p>
          <button onclick="location.reload()" style="background:#b45309;color:white;border:none;padding:12px 28px;border-radius:10px;font-size:1.1rem;font-weight:bold;cursor:pointer;font-family:'Cairo',sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.3);">إعادة تحميل الصفحة 🔄</button>
        </div>
      `;
    }
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
