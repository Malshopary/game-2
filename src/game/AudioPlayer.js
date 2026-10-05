// Background Music Player for Cozy Meadow Farm
// Plays backgroundmusic.m4a with loop, volume control, and browser autoplay handling

class BackgroundMusicPlayer {
  constructor() {
    this.audio = new Audio('/sounds/backgroundmusic.m4a');
    this.audio.loop = true;
    this.audio.volume = 0.35;
    this.isPlaying = false;
    this.isMuted = false;
    this.userInteracted = false;

    // Listen for first user interaction to start audio (browser requirement)
    const startAudioOnInteraction = () => {
      if (!this.userInteracted) {
        this.userInteracted = true;
        this.play();
        window.removeEventListener('click', startAudioOnInteraction);
        window.removeEventListener('keydown', startAudioOnInteraction);
        window.removeEventListener('touchstart', startAudioOnInteraction);
      }
    };

    window.addEventListener('click', startAudioOnInteraction, { once: true });
    window.addEventListener('keydown', startAudioOnInteraction, { once: true });
    window.addEventListener('touchstart', startAudioOnInteraction, { once: true });
  }

  play() {
    if (this.isMuted) return;
    this.audio.play().then(() => {
      this.isPlaying = true;
    }).catch(err => {
      console.log('Audio autoplay prevented, will start on next click');
    });
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      this.play();
    }
    return this.isMuted;
  }

  setVolume(vol) {
    this.audio.volume = Math.max(0, Math.min(1, vol));
  }
}

export const bgm = new BackgroundMusicPlayer();
