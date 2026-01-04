const video = document.getElementById('showreel');
const replayBtn = document.getElementById('replayBtn');

// Attempt autoplay on load (muted)
window.addEventListener('load', () => {
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay blocked, will wait for user click
      console.log("Autoplay with audio blocked, click play to hear audio.");
    });
  }
});

// Show Replay button when video ends
video.addEventListener('ended', () => {
  replayBtn.style.display = 'inline-block';
});

// Replay button resets video
replayBtn.addEventListener('click', () => {
  replayBtn.style.display = 'none';
  video.currentTime = 0;
  video.play();
});
