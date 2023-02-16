let level_2 = {};


function resetLevelTwo() {
    level_2 = new Level(
        4000,
        'level_two',
        [
            new Pufferfish('green_pufferfish',350,150),
            new Pufferfish('green_pufferfish',1050,150),
            new Pufferfish('green_pufferfish',1150,150),
            new Jellyfish('purple_jellyfish', 2000, 120),
            new Jellyfish('pink_jellyfish', 2180, 120),
            new Jellyfish('purple_jellyfish', 3200, 120),
            new Pufferfish('green_pufferfish',3450,150)
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/L3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L3.png', 0, 0, 0.75),
            new BackgroundObject('img/3. Background/Layers/2. Floor/L3.png', 0, 0, 1),
            new BackgroundObject('img/3. Background/Layers/1. Light/3.png', 0, 0, 0.5),
        ],
        [
            new Collectable('poison_light', 1050, 340),
            new Collectable('poison_light', 2420, 350),
            new Collectable('poison_light', 3400, 370),
    
            new Collectable('coin', 980, 280),
            new Collectable('coin', 980, 330),
            new Collectable('coin', 980, 230),
            new Collectable('coin', 980, 180),
    
            new Collectable('coin', 1630, 180),
            new Collectable('coin', 1580, 180),
            new Collectable('coin', 1530, 180),
            new Collectable('coin', 1580, 230),
            new Collectable('coin', 1580, 130),
    
            new Collectable('coin', 2670, 50),
            new Collectable('coin', 2720, 100),
            new Collectable('coin', 2790, 115),
            new Collectable('coin', 3200, 50),
            new Collectable('coin', 3150, 100),
            new Collectable('coin', 3080, 115),
    
            new Collectable('coin', 2110, 150),
            new Collectable('coin', 2110, 50),
            new Collectable('coin', 2110, 100),
            new Collectable('coin', 2110, 200),
            new Collectable('coin', 2110, 250)
        ],[
            new StaticLevelObject('big_bottom', 300, 250, 700),
            new StaticLevelObject('top', 1150, 0, 400),
            new StaticLevelObject('top', 1650, 0, 400),
            new StaticLevelObject('big_bottom', 1850, 280, 500),
            new StaticLevelObject('top', 2750, 0, 400),
            new StaticLevelObject('bottom', 2750, 370, 600),
    
            new StaticLevelObject('top', 3680, 0, 600),
            new StaticLevelObject('bottom', 3680, 370, 900)
        ],false
    )
}