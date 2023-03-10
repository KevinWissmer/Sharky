let infotext_items = `
<div class="info-box-head d-flex align-items-center justify-content-center">
    <h1>Gather Items:</h1>
</div>
<div class="info-box-content d-flex align-items-start justify-content-md-around flex-column">
    <div>
        Collect every Coin <img src="./img/4. Marcadores/1. Coins/1.png" height="20px" alt="">! If you found every one of them in a Level, and you get <span style="color: #FFF;">1 extra Life</span> !
    </div>
    <div>
        Collect every Poisonflask <img src="./img/4. Marcadores/Posión/Animada/1.png" height="30px" alt=""> You can find and fill up your <span style="color: #FFF;">Poisonbar</span>! This will help you later on with the Endboss.
    </div>
</div>`;

let infotext_jellies = `
<div class="info-box-head d-flex align-items-center justify-content-center">
    <h1>Fight Jellyfishes:</h1>
</div>
<div class="info-box-content d-flex align-items-start justify-content-md-around">
    <div class="info-box-content-left">
        <p>
            Be carefull around <span style="color: #FFF;">Jellyfishes</span>!
            They can <span style="color: #FFF;">poison</span> or <span style="color: #FFF;">shock</span> you.
            Trap those in a bubble with <span style="color: #FFF;">"E"</span>!
        </p> 
    </div>
    <div class="info-box-content-right">
        <img src="./img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png" alt="" >
        <img src="./img/3. Background/info-jelly.png" alt="" >
    </div>
</div>`;

let infotext_puffer = `
<div class="info-box-head d-flex align-items-center justify-content-center">
    <h1>Fight Pufferfishes:</h1>
</div>
<div class="info-box-content d-flex align-items-start justify-content-md-around">
    <div class="info-box-content-left">
        <p>Be carefull around <span style="color: #FFF;">Pufferfishes</span>!
            They can <span style="color: #FFF;">poison</span> you, when they're puffed and destroy your <span style="color: #FFF;">bubbles</span>.
            Slap those from behind with <span style="color: #FFF;">"SPACE"</span>!
        </p> 
    </div>
    <div class="info-box-content-right">
        <img src="./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png" alt="" >
        <img src="./img/3. Background/info-puffer.png" alt="" >
    </div>
</div>`;

let infotext_sharky = `
<div class="info-box-head d-flex align-items-center justify-content-center">
    <h1>Get Sharky through the level:</h1>
</div>
<div class="info-box-content d-flex align-items-start justify-content-md-around">
    <div class="info-box-content-left">
        <p>Move Sharky with <span style="color: #FFF;">"W A S D"</span> or <span style="color: #FFF;">"ARROW-KEYS"</span>. 
        <span style="color: #FFF;">Finnish</span> a level by 
        passing throug the <span style="color: #FFF;">Barrieres</span> at the end!</p> 
    </div>
    <div class="info-box-content-right">
        <img src="./img/3. Background/info-finish.png" alt="" >
    </div>
</div>`;

let infotext_boss = `
<div class="info-box-head d-flex align-items-center justify-content-center">
    <h1>Fight Boss:</h1>
</div>
<div class="info-box-content d-flex align-items-start justify-content-md-around">
    <div class="info-box-content-left">
        <p>To damage the boss, you must first hit him with a <span style="color: #FFF;">poison bubbles</span>(<span style="color: #FFF;">"E"</span>)(automatically activated) and then hit him with a slap (<span style="color: #FFF;">"SPACE"</span>).</p> 
    </div>
    <div class="info-box-content-right">
        <img src="./img/3. Background/sharkie_attack.png" alt="" >
        <img src="./img/3. Background/boss_hitted.png" alt="" >
    </div>
</div>`;

let optionsBoxClosed = `
<div class="btn-box-content-closed">
    <img onclick="openOptionsBox()" src="./img/icons/settings_logo.png" alt="" srcset="">
</div>
`;

let optionsBoxClosedMobile = `
<div class="btn-box-content-closed">
    <img onclick="openOptionsBox()" src="./img/icons/settings_logo.png" alt="" srcset="">
</div>
<div class="control-btn-box">
    <div id="control-btn-box"  class="control-btn-box-left">
        <img onmousedown="left(true)" onmouseup="left(false)" onmouseout="left(false)" ontouchstart="left(true)" ontouchend="left(false)" oncontextmenu="return false;" src="./img/icons/arrow_btn.png" alt="" srcset="">
        <div class="control-btn-box-left-center">
            <img onmousedown="up(true)" onmouseup="up(false)" onmouseout="up(false)" ontouchstart="up(true)" ontouchend="up(false)" oncontextmenu="return false;" src="./img/icons/arrow_btn.png" alt="" srcset="">
            <img onmousedown="down(true)" onmouseup="down(false)" onmouseout="down(false)" ontouchstart="down(true)" ontouchend="down(false)" oncontextmenu="return false;" src="./img/icons/arrow_btn.png" alt="" srcset="">
        </div>
        <img onmousedown="right(true)" onmouseup="right(false)" onmouseout="right(false)" ontouchstart="right(true)" ontouchend="right(false)" oncontextmenu="return false;" src="./img/icons/arrow_btn.png" alt="" srcset="">
    </div>
    <div class="control-btn-box-right">
        <img onmousedown="bubbleShoot(true)" onmouseup="bubbleShoot(false)" onmouseout="bubbleShoot(false)" ontouchstart="bubbleShoot(true)" ontouchend="bubbleShoot(false)" oncontextmenu="return false;" src="./img/icons/arrow_btn_bubble.png" alt="" srcset="">
        <img onmousedown="slapper(true)" onmouseup="slapper(false)" onmouseout="slapper(false)" ontouchstart="slapper(true)" ontouchend="slapper(false)" oncontextmenu="return false;" src="./img/icons/arrow_btn_slap.png" alt="" srcset="">
    </div>
</div>`;

let optionsBoxOpenedf = `
<div class="btn-box-content-opened" >
    <img src="./img/icons/close_logo.png" onclick="closeOptionsBox()" alt="" srcset="">
    <div class="btn-box-element">
        <div onclick="toggleFullscreen()">
            toggle fullscreen
        </div>
    </div>
    <div class="btn-box-element">
        <div>
            toggle sound
        </div>
    </div>
    <div id="help_btn" onclick="openOptionsBoxHelpSection()" class="btn-box-element help-btn">
        <div>
            help
        </div>
    </div>
</div>`;

function optionsBoxOpened() {
    return `
    <div class="btn-box-content-opened" >
        <img src="./img/icons/close_logo.png" onclick="closeOptionsBox()" alt="" srcset="">
        <div class="btn-box-element">
            <div onclick="toggleFullscreen()">
                toggle fullscreen
            </div>
        </div>
        <div class="btn-box-element volume-wrapper" >
            <p id="sound_volume">${master_volume*100}%</p>
            <input onchange="changeSoundVolume(event)" id="sound_volume_input" value="${master_volume*100}" type="range">
            <p onclick="changeSoundMuted()" class="sound-muted-${sound_muted}">aaa</p>
        </div>
        <div id="help_btn" onclick="openOptionsBoxHelpSection()" class="btn-box-element help-btn">
            <div>
                help
            </div>
        </div>
    </div>`;
}

let optionsBoxHelpSection = `<div class="btn-box-content-opened" >
<img src="./img/icons/back.png" onclick="openOptionsBox()" alt="" srcset="">
<div class="btn-box-element" >
    <div onclick="openInfoBox(infotext_sharky)">
        <img class="btn-img-help" src="./img/3. Background/info-sharkie.png" alt="">
        Moving
    </div>
</div>
<div class="btn-box-element" >
    <div onclick="openInfoBox(infotext_items)">
        <img class="btn-img-help" src="./img/3. Background/poison_and_coin.png"  alt="">
        Coins and poison
    </div>
</div>
<div class="btn-box-element" >
    <div onclick="openInfoBox(infotext_jellies)">
        <img class="btn-img-help" src="./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png" alt="">
        Attack jellys
    </div>
</div>
<div class="btn-box-element" >
    <div onclick="openInfoBox(infotext_puffer)">
    <img class="btn-img-help" src="./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png" alt="">
    Attack puffers
    </div>
</div>
<div class="btn-box-element" >
    <div onclick="openInfoBox(infotext_boss)">
        <img class="btn-img-help" src="./img/3. Background/tutorial_img_boss.png" alt="">
        Attack endboss
    </div>
</div>
</div>`;

let startBtn = `
<div class="btn-box-element">
    <div onclick="startGame()">
        START
    </div>
</div>`;

let endscreenHTML = `
<div onclick="restartWorld()" class="endscreen">
    <div>next round</div>
</div>`;

let deadscreenshockedHTML = `
<div onclick="restartWorld()" class="deadscreen">
    <p>you lost</p>
    <img src="./img/1.Sharkie/6.dead/2.Electro_shock/8.png" alt="">
    <div>try again</div>
</div>`;

let deadscreenpoisonedHTML = `
<div onclick="restartWorld()" class="deadscreen">
    <p>you lost</p>
    <img src="./img/1.Sharkie/6.dead/1.Poisoned/8.png" alt="">
    <div>try again</div>
</div>`;