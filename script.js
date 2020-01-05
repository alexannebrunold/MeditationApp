const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');


  //Sounds
  const sounds = document.querySelectorAll('.sound-picker button');

  //Time Display
  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelector('.time-select');

  //Get the Lenggth of the outline
  const outlineLength = outline.getTotalLength();
  //console.log(outlineLength);

  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //Play sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  //Select sound
  timeSelect.array.forEach(element => {

  });

  //Create a function specific to stop and play the sounds
  const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = 'Assets/svg/pause.svg';
    }
    else {
      song.pause();
      video.pause();
      play.src = 'Assets/svg/play.svg';
    }
  };

  //We can animate the circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //Animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    //Animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;
  };
};

app();