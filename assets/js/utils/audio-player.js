const audioPlayers = document.querySelectorAll(".player");

audioPlayers.forEach((player) => {
  const audio = player.querySelector("audio");
  const playButton = player.querySelector(".player .play");
  const progressBar = player.querySelector(".player .progress-bar");
  const progressPlayed = player.querySelector(".player .played");
  const trigger = player.querySelector(".player .trigger");
  const currentTimeSpan = player.querySelector("#current-time");
  const totalTimeSpan = player.querySelector("#total-time");
  const volumeButton = player.querySelector(".player .volume");

  // Format time function (mm:ss)
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = Math.floor(seconds % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
  }

  // Update total time after metadata is loaded
  audio.addEventListener("loadedmetadata", function () {
    totalTimeSpan.textContent = formatTime(audio.duration);
  });

  // Play/Pause functionality
  playButton.addEventListener("click", function () {
    // Pause all other players
    audioPlayers.forEach((p) => {
      const otherAudio = p.querySelector("audio");
      if (otherAudio !== audio) {
        otherAudio.pause();
        p.querySelector(".play").src = "./assets/img/icon/play-triangle.svg";
      }
    });

    if (audio.paused) {
      audio.play();
      // playButton.src = "./assets/img/icon/pause.svg"; // Change to pause icon
    } else {
      audio.pause();
      playButton.src = "./assets/img/icon/play-triangle.svg"; // Change to play icon
    }
  });

  // Update progress bar and current time while playing
  audio.addEventListener("timeupdate", function () {
    const playedPercentage = (audio.currentTime / audio.duration) * 100;
    progressPlayed.style.width = `${playedPercentage}%`;
    trigger.style.left = `${playedPercentage}%`;
    currentTimeSpan.textContent = formatTime(audio.currentTime);
  });

  // Seek functionality
  progressBar.addEventListener("click", function (event) {
    const progressBarWidth = progressBar.clientWidth;
    const clickX = event.offsetX;
    const newTime = (clickX / progressBarWidth) * audio.duration;
    audio.currentTime = newTime;
  });

  // Volume control (Optional)
  volumeButton.addEventListener("click", function () {
    if (audio.muted) {
      audio.muted = false;
      volumeButton.src = "./assets/img/icon/volume.svg"; // Unmute icon
    } else {
      audio.muted = true;
      // volumeButton.src = "./assets/img/icon/mute.svg"; // Mute icon
    }
  });
});
