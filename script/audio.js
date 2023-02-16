let master_volume = 0.9;

let bg_sound_1 = new Audio('./sounds/bg/bubbling_under_water.wav');
bg_sound_1.volume = 0.03;
bg_sound_1.loop = true;
let bg_sound_2 = new Audio('./sounds/bg/underwater_sound.wav');
bg_sound_2.volume = 0.1;
bg_sound_2.loop = true;


function playBgMusic(){
    bg_sound_1.play();
    bg_sound_2.play();
}

function stopBgMusic(){
    bg_sound_1.pause();
    bg_sound_2.pause();
}

function changeVolume(silent){
    if(silent){
        stopBgMusic();
        master_volume = 0;
    } else {
        playBgMusic();
        master_volume = 0.3;
    }
}