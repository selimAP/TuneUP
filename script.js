let progress = document.getElementById('progress');
let song = document.getElementById('song');
let playButtonMain = document.getElementById('playbutton-main');
let playButtonSide = document.getElementById('playbutton-side');

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (song.paused) {
        song.play();
        playButtonMain.classList.add("pause");
        playButtonMain.innerHTML = '<ion-icon name="pause"></ion-icon>';
        playButtonSide.classList.add("pause");
        playButtonSide.innerHTML = '<ion-icon name="pause"></ion-icon>';
    } else {
        song.pause();
        playButtonMain.classList.remove("pause");
        playButtonMain.innerHTML = '<ion-icon name="play"></ion-icon>';
        playButtonSide.classList.remove("pause");
        playButtonSide.innerHTML = '<ion-icon name="play"></ion-icon>';
    }
}

setInterval(() => {
    progress.value = song.currentTime;
}, 500);

progress.oninput = function() {
    song.currentTime = progress.value;
}

song.onended = function() {
    playButtonMain.classList.remove("pause");
    playButtonMain.innerHTML = '<ion-icon name="play"></ion-icon>';
    playButtonSide.classList.remove("pause");
    playButtonSide.innerHTML = '<ion-icon name="play"></ion-icon>';
}
