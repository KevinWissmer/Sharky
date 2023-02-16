let level_boss = {};

function resetLevelBoss() {
    level_boss = new Level(
        1000,
        'level_four',
        [
            new Boss(400,100)
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/D3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D3.png', 0, 0, 0.75),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 0, 0, 1),
            new BackgroundObject('img/3. Background/Layers/1. Light/3.png', 0, 0, 0.5),
        ],
        [
        ],[
        ],true
    )
}