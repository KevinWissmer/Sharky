class Level {
    enemies;
    name;
    background;
    level_object_collectables;
    level_object_static;
    coin_quantity = 0;
    world_length;
    boss_level = false;

    constructor(world_length,name, enemies, background, level_object_collectables, level_object_static, boss_level) {
        this.name = name;
        this.world_length = world_length;
        this.enemies = enemies;
        this.background = background;
        this.level_object_collectables = level_object_collectables;
        this.level_object_static = level_object_static;
        this.boss_level = boss_level;
        this.countCoinQuantity(level_object_collectables);
    }

    countCoinQuantity(object_list) {
        object_list.forEach(element => {
            if (element.type == 'coin') {
                this.coin_quantity += 1;
            }
        });     
    }
}