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
    let songDurationMinutes = Math.floor(songDuration / 60);
    let songDurationMinutesSeconds = Math.floor(songDuration % 60);
    songDurationSmall.innerHTML = addZeros(songDurationMinutes) + ':' + addZeros(songDurationMinutesSeconds);

    let currentTime = progress.value = song.currentTime;
    let currentTimeSmall = document.getElementById('currentTime');
    let currentTimeMinutes = Math.floor(currentTime / 60);
    let currentTimeSeconds = Math.floor(currentTime % 60);
    currentTimeSmall.innerHTML = addZeros(currentTimeMinutes) + ':' + addZeros(currentTimeSeconds);


    let musicVolume = document.getElementById('music-volume');
    let musicVolumeIcon = document.getElementById('musicVolumeIcon');


    if(musicVolume.value <= 0){  
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
        song.volume = 0;
    }else if(musicVolume.value <= 30){
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-low-outline"></ion-icon>';
        song.volume = 0.3;
    }
    else if(musicVolume.value < 65){
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-medium-outline"></ion-icon>';  
        song.volume = 0.65;
    }
    else if(musicVolume.value > 65){
        musicVolumeIcon.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';  
        song.volume = 1.0;
    }





}, 1);

function addZeros(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number
}