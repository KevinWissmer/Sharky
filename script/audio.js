let master_volume = 0.9;
let master_volume_old = 0.9;
let sound_muted = false;

let bg_sound_1 = new Audio('./sounds/bg/bubbling_under_water.wav');
bg_sound_1.loop = true;

let bg_sound_2 = new Audio('./sounds/bg/underwater_sound.wav');
bg_sound_2.loop = true;

let bossarea_enter_sound = new Audio('./sounds/boss_intro.mp3');
let lose_sound = new Audio('./sounds/lose.mp3');
let win_sound = new Audio('./sounds/win.mp3');
let hurt_sound_electric = new Audio('./sounds/character/hurt_electric.mp3');
let hurt_sound_poison = new Audio('./sounds/character/poison_oof.wav');
let bubble_shot_sound = new Audio('./sounds/character/bubble_shot.mp3');
let slap_sound = new Audio('./sounds/character/slap.wav');

let sleep_sound = new Audio('./sounds/character/char_sleep.mp3');
sleep_sound.loop = true;
sleep_sound_active = false


function playHurtElectricSound() {
    hurt_sound_electric.volume = 0.9 * master_volume;
    hurt_sound_electric.play();
}

function playHurtPoisonSound() {
    hurt_sound_poison.volume = 0.9 * master_volume;
    hurt_sound_poison.play();
}

function playBubbleShotSound() {
    bubble_shot_sound.volume = 0.9 * master_volume;
    bubble_shot_sound.play();
}

function playSlapSound() {
    slap_sound.volume = 0.9 * master_volume;
    slap_sound.play();
}

function playSleepSound() {
    sleep_sound.volume = 0.9 * master_volume;
    sleep_sound.play();
}

function stopSleepSound() {
    sleep_sound.pause();
}

function changeSleepSoundVolume() {
    if(sleep_sound_active){
        stopSleepSound();
        playSleepSound();
    }
}

function playBgMusic() {
    bg_sound_1.volume = 0.03 * master_volume;
    bg_sound_2.volume = 0.1 * master_volume;
    bg_sound_1.play();
    bg_sound_2.play();
}

function stopBgMusic() {
    bg_sound_1.pause();
    bg_sound_2.pause();
}

function changeBgVolume() {
    stopBgMusic();
    playBgMusic();
}

function playBossSound() {
    bossarea_enter_sound.volume = 0.4 * master_volume;
    bossarea_enter_sound.play();
}

function playLoseSound() {
    lose_sound.volume = 0.4 * master_volume;
    lose_sound.play();
}

function playWinSound() {
    win_sound.volume = 0.4 * master_volume;
    win_sound.play();
}

function changeSoundVolume(e) {
    document.getElementById("sound_volume").innerHTML = `${e.target.value} %`;
    master_volume = e.target.value / 100;
    changeBgVolume();
    changeSleepSoundVolume();
}

function changeSoundMuted() {
    if (sound_muted) {
        master_volume = master_volume_old;
    } else {
        master_volume_old = master_volume;
        master_volume = 0;
    }
    sound_muted = !sound_muted;
    document.getElementById("sound_volume").innerHTML = `${master_volume * 100} %`;
    document.getElementById("sound_volume_input").value = master_volume * 100;
    changeBgVolume();
    changeSleepSoundVolume();
}