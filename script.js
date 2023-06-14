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

setInterval(() => {

    let songDuration = progress.max = song.duration;
    let songDurationSmall = document.getElementById('musicTime');
    songDurationSmall.innerHTML = Math.floor(songDuration / 60) + ':' + Math.floor(songDuration % 60);

    let currentTime = progress.value = song.currentTime;
    let currentTimeSmall = document.getElementById('currentTime');
    currentTimeSmall.innerHTML = Math.floor(currentTime / 60) + ':' + Math.floor(currentTime % 60);


    let musicVolume = document.getElementById('music-volume');
    let musicVolumeIcon = document.getElementById('musicVolumeIcon');


    if(musicVolume.value <= 0){  
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
    }else if(musicVolume.value <= 30){
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-low-outline"></ion-icon>';
    }
    else if(musicVolume.value < 65){
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-medium-outline"></ion-icon>';  
    }
    else if(musicVolume.value > 65){
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';  
    }



}, 1);

