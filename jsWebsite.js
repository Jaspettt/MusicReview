
const playerIds = ["player1", "player2", "player3", "player4", "player5"]; 


function setupAudioPlayer(playerId) {
  const playerContainer = document.getElementById(playerId);
  const audio = playerContainer.querySelector("audio");
  const playButton = playerContainer.querySelector(".play");
  const pauseButton = playerContainer.querySelector(".pause");
  const volumeControl = playerContainer.querySelector(".volume-control");
  const progressBar = playerContainer.querySelector(".progress-bar");
  const timePlayed = playerContainer.querySelector(".time-display #timePlayed");
  const durationElement = playerContainer.querySelector(".time-display #duration");

  progressBar.addEventListener("click", (e) => {
    const progressBarRect = progressBar.getBoundingClientRect();
    const clickX = e.clientX;
    const relativeX = clickX - progressBarRect.left;
    const newWidth = Math.min(Math.max(relativeX, 0), progressBarRect.width);
    progressBar.style.width = (newWidth / progressBarRect.width) * 100 + "%";
    const currentTime = (newWidth / progressBarRect.width) * audio.duration;
    audio.currentTime = currentTime;
  });

  
  let isDragging = false;

  
  let initialMouseX = 0;

  
  let initialProgressBarWidth = 0;

  
  progressBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    initialMouseX = e.clientX;
    initialProgressBarWidth = progressBar.clientWidth;
    audio.pause(); 
  });

  
  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      audio.play(); 
    }
  });

  
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const clickX = e.clientX;
      const relativeX = clickX - initialMouseX;
      const newWidth = Math.min(Math.max(initialProgressBarWidth + relativeX, 0), progressBar.parentElement.clientWidth);
      progressBar.style.width = (newWidth / progressBar.parentElement.clientWidth) * 100 + "%";
      const currentTime = (newWidth / progressBar.parentElement.clientWidth) * audio.duration;
      audio.currentTime = currentTime;
    }
  });

  
  playButton.addEventListener("click", () => playAudio(audio, playButton, pauseButton));
  pauseButton.addEventListener("click", () => pauseAudio(audio, playButton, pauseButton));
  volumeControl.addEventListener("input", () => setVolume(audio, volumeControl));
  audio.addEventListener("timeupdate", () => updateProgressBar(audio, progressBar, timePlayed, durationElement));
}


playerIds.forEach(playerId => {
  setupAudioPlayer(playerId);
});


function playAudio(audio, playButton, pauseButton) {
  audio.play();
  pauseButton.style.display = "block";
}

function pauseAudio(audio, playButton, pauseButton) {
  audio.pause();
  playButton.style.display = "block";
}

function setVolume(audio, volumeControl) {
  audio.volume = volumeControl.value;
}

function updateProgressBar(audio, progressBar, timePlayed, durationElement) {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + "%";
  timePlayed.textContent = formatTime(currentTime);
  durationElement.textContent = formatTime(duration);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  return formattedTime;
}
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}