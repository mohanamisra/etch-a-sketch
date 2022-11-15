let audioButton = document.getElementById("audio-button");
let backgroundMusic = document.getElementById("audio");
let muteButton;
let playButton;

audioButton.addEventListener('click', playMusic);

function stopMusic(){
    backgroundMusic.pause();
    muteButton.innerText = "Play audio";
    muteButton.removeEventListener('click', stopMusic);
}

function playMusic(){
    backgroundMusic.play();
    audioButton.innerText = "Pause audio";
    muteButton = audioButton;
    muteButton.addEventListener('click', stopMusic);
}

backgroundMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);