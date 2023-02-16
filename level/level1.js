
let level_1 = {};

function resetLevelOne() {
    level_1 = new Level(
        4000,
        'level_one',
        [
            new Jellyfish('purple_jellyfish',550,150),
            new Jellyfish('purple_jellyfish',1000,150),
            new Jellyfish('purple_jellyfish',2050,150),
            new Jellyfish('purple_jellyfish',2765,150),
            new Jellyfish('purple_jellyfish',3450,150)
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/L3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L3.png', 0, 0, 0.75),
            new BackgroundObject('img/3. Background/Layers/2. Floor/L3.png', 0, 0, 1),
            new BackgroundObject('img/3. Background/Layers/1. Light/3.png', 0, 0, 0.5),
        ],
        [
            new Collectable('poison_light', 1850, 340),
            new Collectable('poison_light', 2850, 350),
    
            new Collectable('coin', 950, 80),
            new Collectable('coin', 950, 130),
            new Collectable('coin', 950, 180),
    
            new Collectable('coin', 1370, 80),
            new Collectable('coin', 1420, 80),
            new Collectable('coin', 1470, 80),
    
            new Collectable('coin', 2080, 300),
            new Collectable('coin', 2130, 300),
            new Collectable('coin', 2180, 300),
            new Collectable('coin', 2130, 350),
            new Collectable('coin', 2130, 250),
    
            new Collectable('coin', 2790, 30),
            new Collectable('coin', 2740, 80),
            new Collectable('coin', 2840, 80),
            new Collectable('coin', 2765, 135),
            new Collectable('coin', 2815, 135),
    
            new Collectable('coin', 3420, 80),
            new Collectable('coin', 3470, 80),
            new Collectable('coin', 3520, 80),
            new Collectable('coin', 3370, 80)
    
        ],[
            new StaticLevelObject('top', 400, 0, 500),
            new StaticLevelObject('big_bottom', 1100, 250, 700),
            new StaticLevelObject('top', 2350, 0, 400),
            new StaticLevelObject('bottom', 2200, 370, 600),
            new StaticLevelObject('top', 2870, 0, 450),
    
            new StaticLevelObject('top', 3680, 0, 600),
            new StaticLevelObject('bottom', 3680, 370, 900)
        ],false
    );
}
