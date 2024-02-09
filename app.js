import { getWallpaper, setWallpaper } from 'wallpaper';
import player from 'play-sound';

// Set wallpaper
await setWallpaper('assets/backgrounds/Black-Background.png');

// Create player instance
const soundPlayer = player();

// Play sound
soundPlayer.play('assets/sounds/Vine boom sound effect.wav', (err) => {
  if (err) {
    console.error('Error playing sound:', err);
  } else {
    console.log('Sound played successfully');
  }
});
