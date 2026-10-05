// Day / Night Cycle & Dynamic Weather System
import { sounds } from './SoundFX.js';
import { WEATHER_TYPES } from './Constants.js';

export class TimeWeather {
  constructor(onDayEndCallback) {
    this.day = 1;
    this.time = 7 * 60; // Start at 07:00 AM (in game minutes: 0 to 1440)
    this.minuteRate = 2.5; // Game minutes per real second
    this.weather = 'sunny'; // 'sunny' | 'rainy' | 'stormy' | 'windy' | 'snowy'
    this.nextWeather = 'rainy';
    this.onDayEndCallback = onDayEndCallback;
    this.weatherListeners = [];
    this.lightSources = [];

    // Thunderstorm timing
    this.thunderTimer = 0;
    this.nextThunderIn = 5 + Math.random() * 8;
    this.isLightning = false;
  }

  onWeatherChange(cb) {
    this.weatherListeners.push(cb);
  }

  notifyWeather() {
    this.weatherListeners.forEach(cb => {
      try { cb(this.weather, this.getWeatherDef()); } catch (e) {}
    });
  }

  getWeatherDef() {
    return WEATHER_TYPES[this.weather] || WEATHER_TYPES.sunny;
  }

  getNextWeatherDef() {
    return WEATHER_TYPES[this.nextWeather] || WEATHER_TYPES.sunny;
  }

  pickNextWeather(seasonIndex = 1) {
    const r = Math.random();
    // Winter has high snow chance
    if (seasonIndex === 3) {
      if (r < 0.45) return 'snowy';
      if (r < 0.70) return 'windy';
      if (r < 0.85) return 'rainy';
      return 'sunny';
    }
    // Summer / Spring / Fall
    if (r < 0.45) return 'sunny';
    if (r < 0.70) return 'rainy';
    if (r < 0.82) return 'stormy';
    if (r < 0.95) return 'windy';
    return 'snowy';
  }

  update(dt, seasonIndex = 1) {
    this.time += dt * this.minuteRate;

    // Check if new day
    if (this.time >= 24 * 60) {
      this.time = 0;
      this.day++;
      this.setWeather(this.nextWeather);
      this.nextWeather = this.pickNextWeather(seasonIndex);

      if (this.onDayEndCallback) {
        this.onDayEndCallback(this.day, this.weather);
      }
    }

    // Thunder & Lightning handling during stormy weather
    if (this.weather === 'stormy') {
      this.thunderTimer += dt;
      if (this.thunderTimer >= this.nextThunderIn) {
        this.thunderTimer = 0;
        this.nextThunderIn = 6 + Math.random() * 12;
        sounds.thunder();
        this.isLightning = true;
        setTimeout(() => { this.isLightning = false; }, 180);
      }
    } else {
      this.isLightning = false;
    }

    // Audio matching weather
    if ((this.weather === 'rainy' || this.weather === 'stormy') && !sounds.rainNode && !sounds.muted) {
      sounds.startRainSound();
    } else if (this.weather !== 'rainy' && this.weather !== 'stormy' && sounds.rainNode) {
      sounds.stopRainSound();
    }
  }

  setWeather(w) {
    if (!WEATHER_TYPES[w]) w = 'sunny';
    this.weather = w;

    if (w === 'rainy' || w === 'stormy') {
      sounds.startRainSound();
    } else {
      sounds.stopRainSound();
    }

    this.notifyWeather();
  }

  getTimeFormatted() {
    const hours = Math.floor(this.time / 60) % 24;
    const minutes = Math.floor(this.time % 60);
    const period = hours >= 12 ? 'م' : 'ص';
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const padMin = minutes.toString().padStart(2, '0');
    return `${displayHours}:${padMin} ${period}`;
  }

  getHourFloat() {
    return this.time / 60;
  }

  getAmbientColor() {
    const hour = this.getHourFloat();

    // 05:00 - 08:00: Dawn
    if (hour >= 5 && hour < 8) {
      const t = (hour - 5) / 3;
      return { r: 255, g: 180, b: 120, alpha: (1 - t) * 0.45 };
    }
    // 08:00 - 16:30: Daylight
    else if (hour >= 8 && hour < 16.5) {
      if (this.weather === 'stormy') {
        return { r: 50, g: 55, b: 85, alpha: 0.48 };
      } else if (this.weather === 'rainy') {
        return { r: 70, g: 90, b: 120, alpha: 0.32 };
      } else if (this.weather === 'snowy') {
        return { r: 180, g: 215, b: 245, alpha: 0.22 };
      } else if (this.weather === 'windy') {
        return { r: 220, g: 235, b: 200, alpha: 0.12 };
      }
      return { r: 255, g: 255, b: 255, alpha: 0.0 };
    }
    // 16.5 - 19.5: Sunset
    else if (hour >= 16.5 && hour < 19.5) {
      const t = (hour - 16.5) / 3;
      return { r: 240, g: 115, b: 65, alpha: t * 0.55 };
    }
    // 19.5 - 24.0: Night
    else if (hour >= 19.5 || hour < 5) {
      return { r: 15, g: 25, b: 65, alpha: 0.72 };
    }

    return { r: 0, g: 0, b: 0, alpha: 0.0 };
  }
}
