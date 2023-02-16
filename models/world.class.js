class World {
    character = new Character();
    health_bar = new StatusBar('health', 1);
    poison_bar = new StatusBar('poison', 1);
    coin_bar = new StatusBar('coin', 0);
    difficulty = 3; //damage-multiplicator (default = 3)


    game_canvas;
    camera_x = 0;
    camera_y = 0;

    //manipulable
    world_height = 480;
    character_size = 200;
    screen_size = 720;
    bubble_size = 30;
    coin_size = 50;
    hitbox_activation = false;
    poison_bubble = false;
    poison_bubble_value = 0.05;

    current_level;
    levels = [
        level_1,
        level_2,
        level_3,
        level_boss
    ]

    world_length;
    enemies;
    bg_layers;
    level_object_collectables;
    level_object_static;
    coin_quantity;
    poison_flask_value = 0.1; //between 0 and 1
    bubbles = [];
    life_count = 0;
    game_running = true;
    bossarea_enter_sound = new Audio('./sounds/boss_intro.mp3');
    lose_sound = new Audio('./sounds/lose.mp3');
    win_sound = new Audio('./sounds/win.mp3');

    constructor(game_canvas, keyboard) {
        this.game_canvas_ctx = game_canvas.getContext("2d");
        this.game_canvas = game_canvas
        this.keyboard = keyboard;
        this.initLevel();
        this.draw();
        this.setWorld();
        this.initSound()
    }

    initSound(){
        this.bossarea_enter_sound.volume = 0.4 * master_volume;
        this.lose_sound.volume = 0.4 * master_volume;
        this.win_sound.volume = 0.4 * master_volume;
    }

    stop() {
        if (this.game_running) {
            clearInterval(this.character.timer_1);
            clearInterval(this.character.timer_2);
            this.bubbles.forEach(bubble => {
                clearInterval(bubble.timer_1);
            });
            this.enemies.forEach(enemy => {
                clearInterval(enemy.timer_1);
                clearInterval(enemy.timer_2);
            });
            this.level_object_collectables.forEach(lvlo => {
                clearInterval(lvlo.timer_1);
                clearInterval(lvlo.timer_2);
            });
            this.game_running = false;
        }
    }

    run() {
        if (!this.game_running) {
            this.character.animate();
            this.character.moveCharacter();
            this.bubbles.forEach(bubble => {
                bubble.moveBubble();
            });
            this.enemies.forEach(enemy => {
                enemy.animate();
                if (enemy.color_and_type != 'boss') {
                    enemy.moveEnemy();
                }
            });
            this.level_object_collectables.forEach(lvlo => {
                lvlo.animate();
            });
            this.game_running = true;
        }
    }

    restart(){
        this.stop();
        this.resetLevels();
        this.life_count = 0;
        this.health_bar.value = 1;
        this.character.resetCharacter();
        this.changeToLevel(level_1);
        this.character.animate();
        this.character.moveCharacter();
        this.game_running = true;
    }

    resetLevels(){
        resetLevelOne();
        resetLevelTwo();
        resetLevelThree();
        resetLevelBoss();
    }

    changeBetweenRunStop() {
        if (!this.game_running) {
            this.run();
        }else{
            this.stop();
        }
    }

    nextLevel() {
        let index = this.levels.findIndex((element) => element.name == this.current_level.name);
        if (index == this.levels.length - 1) {
            endscreen();
            this.win_sound.play();
            this.stop();
        } else {
            this.changeToLevel(this.levels[index + 1]);
        }
    }

    initLevel() {
        this.current_level = level_1;

        this.world_length = this.current_level.world_length;
        this.enemies = this.current_level.enemies;
        this.bg_layers = this.current_level.background;
        this.level_object_collectables = this.current_level.level_object_collectables;
        this.level_object_static = this.current_level.level_object_static;
        this.coin_quantity = this.current_level.coin_quantity;
        if (this.current_level.boss_level) {
            this.poison_bubble = true;
            this.bossarea_enter_sound.play();
            this.enemies[0].animate();
        } else {
            this.poison_bubble = false;
        }
    }

    changeVolume(){
        this.character.hurt_sound_electric.volume = master_volume;
        this.character.hurt_sound_poison.volume = master_volume;
        this.character.sleep_sound.volume = master_volume;
        this.character.bubble_shot_sound.volume = master_volume;
    }

    changeToLevel(level) {
        this.camera_x = 0;
        this.camera_y = 0;
        this.current_level = level;
        this.coin_bar.value = 0;
        this.setWorldContent();
        this.setCharacter();
        if (level.boss_level) {
            this.poison_bubble = true;
            this.bossarea_enter_sound.play();
            this.enemies[0].animate();
        } else {
            this.poison_bubble = false;
        }
        
    }


    setWorld() {
        this.character.world = this;
        this.setCharacter();
    }

    setWorldContent() {
        this.world_length = this.current_level.world_length;
        this.enemies = this.current_level.enemies;
        this.bg_layers = this.current_level.background;
        this.level_object_collectables = this.current_level.level_object_collectables;
        this.level_object_static = this.current_level.level_object_static;
        this.coin_quantity = this.current_level.coin_quantity;
    }

    setCharacter() {
        this.character.x = 0;
        this.character.y = 0;
        this.character.box_start[0] = 0;
        this.character.box_start[1] = 0;
        this.character.middle_world_start = (this.screen_size - this.character_size) / 2; // half of screensize(e.g. 720px) - character width(e.g. 200px)  
        this.character.middle_world_end = this.world_length - ((this.screen_size / 2 + this.character_size / 2));
    }

    addBubble(x, y, dir) {
        if (this.current_level.boss_level) {
            if (this.poison_bar.value - this.poison_bubble_value >= 0) {
                this.poison_bar.value = this.poison_bar.value - this.poison_bubble_value;
                this.bubbles.push(new Projectile(this.poison_bubble, 20, x, y, dir));
            } else {
                this.poison_bar.value = 0;
            }
        } else {
            this.bubbles.push(new Projectile(this.poison_bubble, 20, x, y, dir));
        }
    }

    draw() {
        this.game_canvas_ctx.clearRect(0, 0, this.game_canvas.width, this.game_canvas.height)

        this.calculateAndDrawAll();

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    calculateAndDrawAll() {
        this.calculateAndDrawBGLayers();
        this.calculateAndDrawEnemies();
        this.calculateAndDrawBubbles();
        this.calculateAndDrawCharacter();
        this.calculateAndDrawCollectables();
        this.calculateAndDrawStaticLevelObjects()
        this.drawAllStatusbars();
        this.checkAndDeleteDeletables()
    }

    calculateAndDrawCollectables() {
        this.level_object_collectables.forEach(lvlo => {
            this.drawSingleImage(lvlo, lvlo.size, this.camera_x, this.camera_y, 1);
            this.calculateHitbox(lvlo, lvlo.size);
        });
    }

    calculateAndDrawStaticLevelObjects() {
        this.deletePreviousMaxMinY();
        this.level_object_static.forEach(lvlo => {
            this.drawSingleImage(lvlo, lvlo.size, this.camera_x, this.camera_y, 1);
            this.calculateStaticObjectHitbox(lvlo, lvlo.size);
            this.updateMaxMinYOfEnemies(lvlo);
            this.updateMaxMinY(lvlo, this.character);
        });
    }

    deletePreviousMaxMinY() {
        this.enemies.forEach(enemy => {
            enemy.min_y_barrier = -800;
            enemy.max_y_barrier = 400;
        });
        this.character.min_y_barrier = -800;
        this.character.max_y_barrier = 400;
    }

    updateMaxMinY(so, mo) {
        if (so.box_start[0] < mo.box_start[0] + mo.box_size[0] && so.box_start[0] + so.box_size[0] > mo.box_start[0]) {
            if (so.box_start[1] > mo.box_start[1] + mo.box_size[1]) {
                mo.max_y_barrier = so.box_start[1] - (so.box_size[1] * 0.6);
            }
            if (so.box_start[1] + so.box_size[1] < mo.box_start[1]) {
                mo.min_y_barrier = so.box_start[1] + so.box_size[1];
            }
        }
    }

    updateMaxMinYOfEnemies(so) {
        this.enemies.forEach(enemy => {
            this.updateMaxMinY(so, enemy);
        });

    }

    drawAllStatusbars() {
        this.drawStatusbar(this.health_bar, 20, 0, this.life_count);
        this.drawStatusbar(this.poison_bar, 210, 0, '');
        this.drawStatusbar(this.coin_bar, 410, 8, '');
    }

    drawStatusbar(o, x_pos, y_pos, txt) {
        this.game_canvas_ctx.drawImage(o.bar_bg, x_pos, 8, o.bar_size, o.bar_size * o.bar_bg.height / o.bar_bg.width);
        this.game_canvas_ctx.drawImage(o.bar_full, 120 + ((o.bar_full.width - 120) * (1 - o.value)), 0, o.bar_full.width, o.bar_full.height, 120 * (o.bar_size / o.bar_full.width) + x_pos, 8, o.bar_size, o.bar_size * o.bar_full.height / o.bar_full.width);
        this.drawSingleImage(o, o.icon_size, x_pos, y_pos, 1);
        this.game_canvas_ctx.font = "22px Arial";
        this.game_canvas_ctx.fillStyle = "white";
        this.game_canvas_ctx.fillText(txt, x_pos + 30, y_pos + 52);
    }

    calculateAndDrawCharacter() {
        this.drawSingleImage(this.character, this.character_size, 0, 0, 1);
        this.calculateHitboxCharacter();
    }

    calculateAndDrawBGLayers() {
        this.bg_layers.forEach(layer => {
            let x = layer.x + this.camera_x * layer.movement_speed;
            let y = layer.y + this.camera_y * layer.movement_speed;
            let dx = this.world_length * layer.movement_speed + (this.character_size * (1 / layer.movement_speed));
            let dy = this.world_height;
            this.game_canvas_ctx.drawImage(layer.img, x, y, dx, dy);
        });
    }

    calculateAndDrawBubbles() {
        this.bubbles.forEach(bubble => {
            this.drawSingleImage(bubble, this.bubble_size, this.camera_x, this.camera_y, 1);
            this.calculateHitbox(bubble, this.bubble_size);
            this.enemies.forEach(enemy => {
                this.checkBubbleEnemyHit(enemy, bubble);
            });
        });
    }

    calculateAndDrawEnemies() {
        this.enemies.forEach(enemy => {
            this.drawSingleImage(enemy, enemy.size, this.camera_x, this.camera_y, 1);
            this.calculateHitbox(enemy, enemy.size);
        });
    }

    checkAndDeleteDeletables() {
        this.bubbles.forEach(function (bubble, index, arr) {
            if (bubble.deletable) {
                arr.splice(index, 1);
            }
        });
        this.enemies.forEach(function (enemy, index, arr) {
            if (enemy.deletable) {
                arr.splice(index, 1);
            }
        });
        this.level_object_collectables.forEach(function (lvlo, index, arr) {
            if (lvlo.deletable) {
                arr.splice(index, 1);
            }
        });
    }

    checkBubbleEnemyHit(enemy, bubble) {
        let bubble_center = [(bubble.box_start[0] + bubble.box_start[0] + bubble.box_size[0]) / 2, (bubble.box_start[1] + bubble.box_start[1] + bubble.box_size[1]) / 2]
        if (bubble_center[0] > enemy.box_start[0] && bubble_center[0] < enemy.box_start[0] + enemy.box_size[0]) {
            if (bubble_center[1] > enemy.box_start[1] && bubble_center[1] < enemy.box_start[1] + enemy.box_size[1]) {
                if (enemy.color_and_type != 'pink_pufferfish' && enemy.color_and_type != 'green_pufferfish' && enemy.color_and_type != 'darkpink_pufferfish' && enemy.color_and_type != 'boss') {
                    enemy.enemy_status = false;
                }
                if (enemy.color_and_type = 'boss') {
                    enemy.status = 'hurt';
                }
                bubble.deletable = true;
            }
        }
    }

    drawSingleImage(mo, size, set_x, set_y, relation) {
        if (mo.mirrored) {
            this.game_canvas_ctx.translate(mo.x + size, mo.y);
            this.game_canvas_ctx.scale(-1, 1);
            this.game_canvas_ctx.drawImage(mo.img, 0, 0, size, size * mo.img.height / mo.img.width);
            this.game_canvas_ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else {
            this.game_canvas_ctx.drawImage(mo.img, mo.x + set_x, mo.y + set_y, size * relation, size * mo.img.height / mo.img.width);
        }
    }

    drawBossHealthBar(enemy) {
        let set_x = 50;
        let set_y = 120;
        let size = 120;
        if (enemy.health > 0) {
            this.game_canvas_ctx.drawImage(enemy.empty_health_bar, enemy.x + set_x + this.camera_x, enemy.y + set_y, size, size * enemy.empty_health_bar.height / enemy.empty_health_bar.width);
            this.game_canvas_ctx.drawImage(enemy.full_health_bar, 0, 0, enemy.health * enemy.full_health_bar.width, enemy.full_health_bar.height, enemy.x + set_x + this.camera_x, enemy.y + set_y, enemy.health * size, size * enemy.full_health_bar.height / enemy.full_health_bar.width);
        }
    }

    calculateHitboxCharacter() {
        let mo = this.character;
        mo.box_start = [mo.x + (this.character_size * 0.2), mo.y + (0.45 * this.character_size * mo.img.height / mo.img.width)];
        mo.box_size = [this.character_size * 0.6, (this.character_size * mo.img.height / mo.img.width) - (0.68 * this.character_size * mo.img.height / mo.img.width)];
        this.drawHitbox(mo);
        this.enemies.forEach(enemy => {
            if (enemy.color_and_type == 'boss') {
                enemy.y_pos_aim = mo.box_start[1];
                this.drawBossHealthBar(enemy);
            }
        });
    }

    calculateStaticObjectHitbox(so, size) {
        if (!so.permeability) {
            so.box_start = [so.x + this.camera_x + ((size - size * so.horizontal_hitbox_ratio) / 2), so.y + (((size * so.img.height / so.img.width) * so.vertical_hitbox_ratio) / 2)];
            so.box_size = [size * so.horizontal_hitbox_ratio, size * so.img.height / so.img.width * so.vertical_hitbox_ratio];
        } else {
            so.box_start = [-200, -200];
            so.box_size = [1, 1];
        }
        this.drawHitbox(so);
    }

    calculateHitbox(mo, size) {
        if (!mo.permeability) {
            mo.box_start = [mo.x + this.camera_x + (size * mo.hitbox_narrow_left), mo.y + ((size * mo.img.height / mo.img.width) * mo.hitbox_narrow_up)];
            mo.box_size = [size - (size * mo.hitbox_narrow_right) - (size * mo.hitbox_narrow_left), (size * mo.img.height / mo.img.width) - ((size * mo.img.height / mo.img.width) * mo.hitbox_narrow_down) - ((size * mo.img.height / mo.img.width) * mo.hitbox_narrow_up)];
        } else {
            mo.box_start = [-200, -200];
            mo.box_size = [1, 1];
        }
        this.drawHitbox(mo);
    }

    drawHitbox(mo) {
        if (this.hitbox_activation) {
            this.game_canvas_ctx.beginPath();
            this.game_canvas_ctx.strokeStyle = mo.box_color;
            this.game_canvas_ctx.lineWidth = '3';
            this.game_canvas_ctx.rect(mo.box_start[0], mo.box_start[1], mo.box_size[0], mo.box_size[1]);
            this.game_canvas_ctx.stroke();
        }
    }

}