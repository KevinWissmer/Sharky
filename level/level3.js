let level_3 = {};

function resetLevelThree() {
    level_3 = new Level(
        4000,
        'level_three',
        [
            new Jellyfish('green_jellyfish', 500, 150),
    
            new Pufferfish('darkpink_pufferfish',1090,210),
    
            new Jellyfish('yellow_jellyfish', 1450, 150),
    
            new Pufferfish('darkpink_pufferfish',1750,210),
            new Jellyfish('green_jellyfish', 1850, 150),
            new Pufferfish('darkpink_pufferfish',1950,210),
    
            new Pufferfish('darkpink_pufferfish',2550,210),
            new Pufferfish('pink_pufferfish',2650,200),
            new Pufferfish('darkpink_pufferfish',2750,210),
            
            new Jellyfish('yellow_jellyfish', 2990, 150),
            new Jellyfish('green_jellyfish', 3170, 150)
        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/D3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D3.png', 0, 0, 0.5),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D3.png', 0, 0, 0.75),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D3.png', 0, 0, 1),
            new BackgroundObject('img/3. Background/Layers/1. Light/3.png', 0, 0, 0.5),
        ],
        [
            new Collectable('poison_dark', 260, 360),
            new Collectable('poison_dark', 1260, 350),
            new Collectable('poison_dark', 1950, 365),
            new Collectable('poison_dark', 2310, 365),
            new Collectable('poison_dark', 2770, 360),
    
            new Collectable('coin', 1115, 280),
            new Collectable('coin', 1115, 230),
            new Collectable('coin', 1115, 180),
            new Collectable('coin', 1115, 130),
    
            new Collectable('coin', 1775, 300),
            new Collectable('coin', 1825, 350),
            new Collectable('coin', 1880, 370),
            new Collectable('coin', 1935, 350),
            new Collectable('coin', 1985, 300),
    
            new Collectable('coin', 750, 100),
            new Collectable('coin', 800, 100),
            new Collectable('coin', 850, 100),
    
            new Collectable('coin', 2680, 230),
            new Collectable('coin', 2680, 180),
            new Collectable('coin', 2680, 130),
    
            new Collectable('coin', 3020, 230),
            new Collectable('coin', 3200, 230)
        ],[
            new StaticLevelObject('bottom', 300, 370, 700),
            new StaticLevelObject('top', 650, 0, 400),
            new StaticLevelObject('top', 1200, 0, 400),
            new StaticLevelObject('big_bottom', 1300, 280, 460),
            new StaticLevelObject('top', 2000, 0, 500),
            new StaticLevelObject('big_bottom', 2350, 280, 460),
            new StaticLevelObject('big_bottom', 2850, 290, 520),
    
            new StaticLevelObject('top', 3680, 0, 600),
            new StaticLevelObject('bottom', 3680, 370, 900)
        ],false
    )
}