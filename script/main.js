let game_canvas;
let game_canvas_ctx;
let character_frame;
let char_size = 450
let world;
let keyboard = new KeyboardObject();
let fullscreen = false;
let optionsBoxOpenedStatus = false;
let mobileBtn = true;
let sound = true;

window.addEventListener('keydown', function (e) {
    if ((e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == ' ' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') && e.target == document.body) {
        e.preventDefault();
    }
});

function changeKeyboarObject(switch_case, event) {
    switch (event.key) {
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keyboard.key_left_arrow = switch_case;
            break;
        case 'w':
        case 'W':
        case 'ArrowUp':
            keyboard.key_up_arrow = switch_case;
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            keyboard.key_right_arrow = switch_case;
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            keyboard.key_down_arrow = switch_case;
            break;
        case 'e':
        case 'E':
        case 'x':
        case 'X':
            keyboard.key_e = switch_case;
            break;
        case 'q':
        case 'Q':
        case ' ':
            keyboard.key_spacebar_q = switch_case;
            break;
        case 'Enter':
            keyboard.key_enter = switch_case;
            break;
    }
}

document.addEventListener('keydown', (event) => {
    changeKeyboarObject(true, event);
});

document.addEventListener('keyup', (event) => {
    changeKeyboarObject(false, event);
});




async function init() {
    game_canvas = document.getElementById('game_canvas');
    await loadAllImagesToCache();
    setAllLevels();
}

function startGame() {
    playBgMusic();
    document.getElementById('start_screen').classList.add("d-none");
    world = new World(game_canvas, keyboard);
}

function setAllLevels() {
    resetLevelOne();
    resetLevelTwo();
    resetLevelThree();
    resetLevelBoss();
}

function onloadIndex() {
    init();
    setTouchBtns();
}

function setTouchBtns() {
    mobileBtn = ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
    if (mobileBtn) {
        document.getElementById('btn_box').innerHTML = optionsBoxClosedMobile;
    } else {
        document.getElementById('btn_box').innerHTML = optionsBoxClosed;
    }
}

function closeInfoBox() {
    if (!optionsBoxOpenedStatus) {
        world.run();
    }
    document.getElementById('info-box').classList.remove("d-flex");
    document.getElementById('info-box').classList.add("d-none");
}

function openInfoBox(text) {
    world.stop();
    document.getElementById('info-box').classList.remove("d-none");
    document.getElementById('info-box').classList.add("d-flex");
    document.getElementById('info-box').innerHTML = text;

}

function openOptionsBox() {
    world.stop();
    fillOpenOptionsBoxTemplate();
    optionsBoxOpenedStatus = true;
}

function endscreen() {
    document.getElementById('btn_box').innerHTML = endscreenHTML;
}

function deadscreen(deathtype) {
    if (deathtype == 'shocked') {
        document.getElementById('btn_box').innerHTML = deadscreenshockedHTML;
    } else {
        document.getElementById('btn_box').innerHTML = deadscreenpoisonedHTML;
    }
    playLoseSound();
}

function restartWorld() {
    world.restart();
    closeOptionsBox()
}

function fillOpenOptionsBoxTemplate() {
    document.getElementById('btn_box').innerHTML = optionsBoxOpened();
}

function closeOptionsBox() {
    world.run();
    if (mobileBtn) {
        document.getElementById('btn_box').innerHTML = optionsBoxClosedMobile;
    } else {
        document.getElementById('btn_box').innerHTML = optionsBoxClosed;
    }

    optionsBoxOpenedStatus = false;
}

function openOptionsBoxHelpSection() {
    document.getElementById('btn_box').innerHTML = optionsBoxHelpSection;
}

function toggleFullscreen() {
    let box = document.getElementById('game_frame')
    if (fullscreen) {
        document.exitFullscreen()
        document.getElementById('help_btn').classList.remove("d-flex-important");
    } else {
        box.requestFullscreen();
        document.getElementById('help_btn').classList.add("d-flex-important");
    }
    fullscreen = !fullscreen;
    document.getElementById('game_frame').classList.toggle("game-frame-bg");
    document.getElementById('game_canvas').classList.toggle("fullscreen-canvas");
    document.getElementById('btn_box').classList.toggle("fullscreen-canvas");
    document.getElementById('btn_box').classList.toggle("fullscreen-btn-box");
    document.getElementById('start_screen').classList.toggle("fullscreen-btn-box");
    document.getElementById('info-box').classList.toggle("info-box-fullscreen");
}

function toggleMobileButtons() {
    mobileBtn = !mobileBtn;
}

function toggleSound() {
    sound = !sound;
    changeVolume(!sound);
    world.changeVolume();
}

function left(value) {
    keyboard.key_left_arrow = value;
}

function right(value) {
    keyboard.key_right_arrow = value;
}

function up(value) {
    keyboard.key_up_arrow = value;
}

function down(value) {
    keyboard.key_down_arrow = value;
}

function bubbleShoot(value) {
    keyboard.key_e = value;
}

function slapper(value) {
    keyboard.key_spacebar_q = value;
}
