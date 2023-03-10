let master_volume = 0.9;

let bg_sound_1 = new Audio('./sounds/bg/bubbling_under_water.wav');
bg_sound_1.volume = 0.03;
bg_sound_1.loop = true;

let bg_sound_2 = new Audio('./sounds/bg/underwater_sound.wav');
bg_sound_2.volume = 0.1;
bg_sound_2.loop = true;

let bossarea_enter_sound = new Audio('./sounds/boss_intro.mp3');
let lose_sound = new Audio('./sounds/lose.mp3');
let win_sound = new Audio('./sounds/win.mp3');

function playBgMusic() {
    bg_sound_1.play();
    bg_sound_2.play();
}

function stopBgMusic() {
    bg_sound_1.pause();
    bg_sound_2.pause();
}

function changeVolume(silent) {
    if (silent) {
        stopBgMusic();
        master_volume = 0;
    } else {
        playBgMusic();
        master_volume = 0.3;
    }
}

function playBossSound() {
    bossarea_enter_sound.volume = 0.4 * master_volume;
    bossarea_enter_sound.play();
}

function playLoseSound(){
    lose_sound.volume = 0.4 * master_volume;
    lose_sound.play();
}

function playWinSound(){
    win_sound.volume = 0.4 * master_volume;
    win_sound.play();
}