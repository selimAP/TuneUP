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
    let musicDurationBar = document.getElementById('musicDuration');
    let songDurationSmall = document.getElementById('musicTime');
    let songDurationMinutes = Math.floor(songDuration / 60);
    let songDurationMinutesSeconds = Math.floor(songDuration % 60);

    songDurationSmall.innerHTML = addZeros(songDurationMinutes) + ':' + addZeros(songDurationMinutesSeconds);
    musicDuration.innerHTML = addZeros(songDurationMinutes) + ':' + addZeros(songDurationMinutesSeconds);

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





}, 1000);

function addZeros(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number
}


let expandButton = document.getElementById('expand');
let musicBlock = document.getElementById('musicBlock');
let playingMusicController = document.getElementById('playingMusicController');
let musicVolumeBigger = document.getElementById('musicVolumeBigger');
let playingMusicBar = document.getElementById('playingMusicBar');
let playingMusicOverview = document.getElementById('playingMusicOverview');
let CoverPictureBar = document.getElementById('CoverPictureBar');
let musicNameBar = document.getElementById('musicNameBar');
let artistNameBar = document.getElementById('artistNameBar');

let isExpanded = false;

expandButton.addEventListener("click", function() {
  if (!isExpanded) {

    expandButton.innerHTML = '<ion-icon name="close"></ion-icon>';

    musicBlock.style.height = '100vh';
    musicBlock.style.justifyContent = 'center';
    musicBlock.style.flexDirection = 'column';

    musicVolumeBigger.style.marginRight = '0';
    musicVolumeBigger.style.right = '50px';
    musicVolumeBigger.style.width = '100%';
    musicVolumeBigger.style.justifyContent = 'flex-end';
    musicVolumeBigger.style.bottom = '30px';
    musicVolumeBigger.style.position = 'fixed';
    musicVolumeBigger.style.zIndex = '-1';

    playingMusicOverview.style.marginLeft = '0';
    playingMusicOverview.style.position = 'fixed';
    playingMusicOverview.style.bottom = '190px';
    playingMusicOverview.style.left = '200px';

    CoverPictureBar.style.width = '250px';
    CoverPictureBar.style.height = '250px';

    musicNameBar.style.fontSize = '60px';
    artistNameBar.style.fontSize = '20px';
    artistNameBar.style.marginLeft = '5px';

    playingMusicController.style.display = 'flex';
    playingMusicController.style.flexDirection = 'column-reverse';
    playingMusicController.style.position = 'absolute';
    playingMusicController.style.bottom = '50px';
    playingMusicController.style.width = '100%';

    playingMusicBar.style.justifyContent = 'center';

    progress.style.width = '80%';
    progress.style.justifyContent = 'center';

    isExpanded = true;
  } else {
    musicBlock.style.height = '';
    musicBlock.style.display = '';
    musicBlock.style.justifyContent = '';
    musicBlock.style.flexDirection = '';

    musicVolumeBigger.style.marginRight = '';
    musicVolumeBigger.style.right = '';
    musicVolumeBigger.style.display = '';
    musicVolumeBigger.style.width = '';
    musicVolumeBigger.style.justifyContent = '';
    musicVolumeBigger.style.bottom = '';
    musicVolumeBigger.style.position = '';
    musicVolumeBigger.style.zIndex = '';

    playingMusicOverview.style.marginLeft = '';
    playingMusicOverview.style.display = '';
    playingMusicOverview.style.position = '';
    playingMusicOverview.style.bottom = '';
    playingMusicOverview.style.left = '';

    CoverPictureBar.style.width = '';
    CoverPictureBar.style.height = '';
    CoverPictureBar.style.objectFit = '';
    CoverPictureBar.style.padding = '';
    CoverPictureBar.style.display = '';
    CoverPictureBar.style.alignItems = '';

    musicNameBar.style.fontSize = '';

    artistNameBar.style.fontSize = '';
    artistNameBar.style.fontWeight = '';
    artistNameBar.style.marginLeft = '';

    playingMusicController.style.display = '';
    playingMusicController.style.flexDirection = '';
    playingMusicController.style.position = '';
    playingMusicController.style.bottom = '';
    playingMusicController.style.width = '';

    playingMusicBar.style.justifyContent = '';
    playingMusicBar.style.alignItems = '';
    playingMusicBar.style.display = '';

    progress.style.width = '';
    progress.style.justifyContent = '';

    expandButton.innerHTML = '<ion-icon name="expand"></ion-icon>';

    isExpanded = false;
  }
});


let addsongPopup = document.getElementById('addsongPopup');
let addSongButton = document.getElementById('AddSongBtn');
let ExitPopupButton = document.getElementById('AddsongExitBtn');

addSongButton.onclick = function(){
    addsongPopup.style.display = "flex";
    addsongPopup.style.transition = "1s";
}

ExitPopupButton.onclick = function(){
    addsongPopup.style.display = "none";
}



let logoText = document.getElementById('logoText');
let navLogo = document.getElementById('navlogo');

let logoEffect = function(){
    logoText.style.opacity = '1';
    logoText.style.transform = 'translateY(0)';
};

let test = function(){
    logoText.style.opacity = '0';
    logoText.style.transform = 'translateY(10px)';
};

navLogo.addEventListener('mouseenter', logoEffect);
navLogo.addEventListener('mouseleave', test);
