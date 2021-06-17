const video = document.querySelector('video');
const button = document.querySelector('button');

class MediaPlayer {
  constructor(config) {
    this.config = config;
  }
  play() {
    button.onclick = () => video.play();
  }
}

const player = new MediaPlayer();
button.onclick = () => player.play();
