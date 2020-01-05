const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');


  //Sounds
  const sounds = document.querySelectorAll('.sound-picker button');

  //Time Display
  const timeDisplay = document.querySelector('.time-display');

  //Get the Lenggth of the outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);

  //Duration
  let FakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
};

app();