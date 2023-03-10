class Character extends MovableObject {


    images_IDLE_SHORT = characterImagePaths[1];
    images_IDLE_LONG = characterImagePaths[2];
    images_SLAP = characterImagePaths[3];
    images_SHOCKED = characterImagePaths[4];
    images_POISONED = characterImagePaths[5];
    images_SWIM = characterImagePaths[6];
    images_BUBBLESHOOT_POISONED = characterImagePaths[7];
    images_BUBBLESHOOT_NORMAL = characterImagePaths[8];
    images_DEAD_SHOCKED = characterImagePaths[9];
    images_DEAD_POISONED = characterImagePaths[10];

    world;
    middle_world_start;
    middle_world_end;
    slap_width = 60;
    movable = true;


    constructor() {
        super().loadImage('img/1.png');
        this.loadAllImageCache();
        this.animate();
        this.moveCharacter();
    }

    loadAllImageCache() {
        this.loadImageCache(this.images_IDLE_SHORT);
        this.loadImageCache(this.images_IDLE_LONG);
        this.loadImageCache(this.images_SLAP);
        this.loadImageCache(this.images_SWIM);
        this.loadImageCache(this.images_POISONED);
        this.loadImageCache(this.images_SHOCKED);
        this.loadImageCache(this.images_BUBBLESHOOT_NORMAL);
        this.loadImageCache(this.images_BUBBLESHOOT_POISONED);
        this.loadImageCache(this.images_DEAD_SHOCKED);
        this.loadImageCache(this.images_DEAD_POISONED);
    }


    current_image = 0;
    status = this.images_IDLE_SHORT;
    slap_status = false;
    bubble_shoot_status = false;
    slap = false;
    shocked = false;
    poisoned = false;
    death = 'alive'; //alive, poisoned or shocked 
    isKilled = false;

    resetCharacter() {
        this.current_image = 0;
        this.status = this.images_IDLE_SHORT;
        this.slap_status = false;
        this.bubble_shoot_status = false;
        this.slap = false;
        this.shocked = false;
        this.poisoned = false;
        this.death = 'alive';
        this.movable = true;
        this.mirrored = false;
        this.isKilled = false;
    }

    animate() {
        this.timer_1 = setInterval(() => {
            switch (true) {
                case this.death == 'shocked':
                    this.animation(this.images_DEAD_SHOCKED);
                    break;
                case this.death == 'poisoned':
                    this.animation(this.images_DEAD_POISONED);
                    break;
                case this.shocked:
                    this.animation(this.images_SHOCKED);
                    break;
                case this.poisoned:
                    this.animation(this.images_POISONED);
                    break;
                case this.bubble_shoot_status:
                    this.animation(this.images_BUBBLESHOOT_NORMAL);
                    break;
                case this.slap_status:
                    this.animation(this.images_SLAP);
                    break;
                case this.world.keyboard.key_left_arrow:
                    this.animation(this.images_SWIM);
                    break;
                case this.world.keyboard.key_right_arrow:
                    this.animation(this.images_SWIM);
                    break;
                case this.world.keyboard.key_up_arrow:
                    this.animation(this.images_SWIM);
                    break;
                case this.world.keyboard.key_down_arrow:
                    this.animation(this.images_SWIM);
                    break;
                default:
                    if (this.status == this.images_IDLE_LONG) {
                        this.animation(this.images_IDLE_LONG);
                    } else {
                        this.animation(this.images_IDLE_SHORT);
                    }
                    break;
            }
        }, 100);
    }

    moveCharacter() {
        this.timer_2 = setInterval(() => {
            this.collisionCheck();
            this.shootAndSlapCheck();
            if (this.movable) {
                switch (true) {
                    case this.world.keyboard.key_left_arrow:
                        this.leftArrowCase();
                        break;
                    case this.world.keyboard.key_right_arrow:
                        this.rightArrowCase();
                        break;
                    case this.world.keyboard.key_up_arrow:
                        this.moveUp(this.upwardBarrierCollisionCheck());
                        break;
                    case this.world.keyboard.key_down_arrow:
                        this.moveDown(this.downwardBarrierCollisionCheck());
                        break;
                }
            }
        }, 20);
    }

    rightArrowCase() {
        this.mirrored = false;
        this.moveRight(this.rightBarrierCollisionCheck());
        this.levelEndCheck();
        this.moveCamera(-this.rightBarrierCollisionCheck());
        switch (true) {
            case this.world.keyboard.key_up_arrow:
                this.moveUp(this.upwardBarrierCollisionCheck());
                break;
            case this.world.keyboard.key_down_arrow:
                this.moveDown(this.downwardBarrierCollisionCheck());
                break;
        }
    }

    leftArrowCase() {
        this.mirrored = true;
        this.moveLeft(this.leftBarrierCollisionCheck());
        this.moveCamera(this.leftBarrierCollisionCheck());
        switch (true) {
            case this.world.keyboard.key_up_arrow:
                this.moveUp(this.upwardBarrierCollisionCheck());
                break;
            case this.world.keyboard.key_down_arrow:
                this.moveDown(this.downwardBarrierCollisionCheck());
                break;
        }
    }

    upwardBarrierCollisionCheck() {
        let speed = this.character_speed;
        this.world.level_object_static.forEach(so => {
            let distance = (this.box_start[1]) - (so.box_start[1] + so.box_size[1]);
            if (distance >= -0.5 && distance < this.character_speed && this.box_start[0] < so.box_start[0] + so.box_size[0] && so.box_start[0] < this.box_start[0] + this.box_size[0]) {
                speed = distance;
            }
        });
        return speed;
    }

    levelEndCheck() {
        if (this.x >= 520) {
            this.world.nextLevel();
        }
    }

    downwardBarrierCollisionCheck() {
        let speed = this.character_speed;
        this.world.level_object_static.forEach(so => {
            let distance = (so.box_start[1]) - (this.box_start[1] + this.box_size[1]);
            if (distance >= -0.5 && distance < this.character_speed && this.box_start[0] < so.box_start[0] + so.box_size[0] && so.box_start[0] < this.box_start[0] + this.box_size[0]) {
                speed = distance;
            }
        });
        return speed;
    }

    rightBarrierCollisionCheck() {
        let speed = this.character_speed;
        this.world.level_object_static.forEach(so => {
            let distance = (so.box_start[0]) - (this.box_start[0] + this.box_size[0]);
            if (distance >= -0.5 && distance < this.character_speed && this.box_start[1] < so.box_start[1] + so.box_size[1] && so.box_start[1] < this.box_start[1] + this.box_size[1]) {
                speed = distance;
            }
        });
        return speed;
    }

    leftBarrierCollisionCheck() {
        let speed = this.character_speed;
        this.world.level_object_static.forEach(so => {
            let distance = (this.box_start[0]) - (so.box_start[0] + so.box_size[0]);
            if (distance >= -0.5 && distance < this.character_speed && this.box_start[1] < so.box_start[1] + so.box_size[1] && so.box_start[1] < this.box_start[1] + this.box_size[1]) {
                speed = distance;
            }
        });
        return speed;
    }

    verticalBarrierCollisionCheck(direction) {
        let speed = this.character_speed;

        return speed;
    }

    shootAndSlapCheck() {
        switch (true) {
            case (this.world.keyboard.key_e && !this.poisoned && !this.shocked && this.death == 'alive'):
                this.bubble_shoot_status = true;
                break;
            case (this.world.keyboard.key_spacebar_q && !this.poisoned && !this.shocked && this.death == 'alive'):
                this.slap_status = true;
                break;
            default:
                break;
        }
    }

    collisionCheck() {

        this.box_color = '#000000';
        this.collisionCheckEnemies();
        this.collisionCheckCollectables();
        this.slap = false;
    }

    collisionCheckCollectables() {
        let collectables = this.world.level_object_collectables;
        collectables.forEach(c => {

            let center = [(c.box_start[0] + c.box_start[0] + c.box_size[0]) / 2, (c.box_start[1] + c.box_start[1] + c.box_size[1]) / 2]
            if (center[0] > this.box_start[0] && center[0] < this.box_start[0] + this.box_size[0]) {
                if (center[1] > this.box_start[1] && center[1] < this.box_start[1] + this.box_size[1]) {
                    if (!c.collected && !this.isKilled) {
                        c.collected = true;
                        this.statusbarUpdate(c.type);
                        if (c.type != 'coin') {
                            c.deletable = true;
                        } else {
                            c.start_collect_coin_animation();
                        }

                    }
                }
            }
        });
    }

    statusbarUpdate(type) {

        if (type == 'coin') {
            this.world.coin_bar.value += 1 / this.world.coin_quantity;
            if (this.world.coin_bar.value >= 0.999) {
                console.log(this.world.life_count);
                this.world.life_count++;
            }
        } else {
            if (this.world.poison_bar.value + this.world.poison_flask_value <= 1) {
                this.world.poison_bar.value += this.world.poison_flask_value;
            } else {
                this.world.poison_bar.value = 1;

            }

        }
    }

    collisionCheckEnemies() {
        let enemies = this.world.enemies;
        enemies.forEach(e => {
            e.box_color = '#000000';
            this.pufferfishPuffingCheck(e);
            if (e.box_start[1] > this.box_start[1] + this.box_size[1] || e.box_start[1] + e.box_size[1] < this.box_start[1]) {
            } else {
                if (e.box_start[0] > this.box_start[0] + this.box_size[0] || e.box_start[0] + e.box_size[0] < this.box_start[0]) {
                    this.slapPossibilityCheck(e);
                } else {
                    e.box_color = '#FF0000';
                    this.box_color = '#FF0000';
                    if (e.enemy_status) {
                        this.charHurting(e);
                    }
                }
            }
        });
    }

    pufferfishPuffingCheck(enemy) {
        if (enemy.color_and_type == 'pink_pufferfish' || enemy.color_and_type == 'darkpink_pufferfish' || enemy.color_and_type == 'green_pufferfish') {
            let distance = ((enemy.box_start[0] - this.box_start[0]) * (enemy.box_start[0] - this.box_start[0])) + ((enemy.box_start[1] - this.box_start[1]) * (enemy.box_start[1] - this.box_start[1]))
            if (Math.sqrt(distance) < enemy.puff_distance && this.box_start[0] <= enemy.box_start[0] + enemy.box_size[0]) {
                if (!enemy.enemy_puffed) {
                    enemy.box_color = '#0000FF';
                    enemy.startPufftransition();
                }
            } else {
                enemy.box_color = '#000000';
                if (enemy.enemy_puffed) {
                    enemy.startPufftransition();
                }
            }
        }
    }

    charHurting(enemy) {
        switch (enemy.color_and_type) {
            case 'yellow_jellyfish':
                this.poisoned = true;
                break;
            case 'green_jellyfish':
                this.shocked = true;
                break;
            case 'purple_jellyfish':
                this.poisoned = true;
                break;
            case 'pink_jellyfish':
                this.shocked = true;
                break;
            case 'pink_pufferfish':
                if (enemy.enemy_puffed == true) {
                    this.poisoned = true;
                }
                break;
            case 'green_pufferfish':
                if (enemy.enemy_puffed == true) {
                    this.poisoned = true;
                }
                break;
            case 'darkpink_pufferfish':
                if (enemy.enemy_puffed == true) {
                    this.poisoned = true;
                }
                break;
            case 'boss':
                this.poisoned = true;
                break;
        }
    }

    slapPossibilityCheck(e) {
        if (e.box_start[0] - this.box_start[0] - this.box_size[0] <= this.slap_width && e.box_start[0] - this.box_start[0] - this.box_size[0] > 0 && !this.mirrored) {
            e.box_color = '#FFFF00';
            this.box_color = '#FFFF00';
            if (this.slap && e.enemy_puffed != true) {
                e.enemy_slapped = true;
                e.slap_counter = 15;
            }
        }
        if (this.box_start[0] - e.box_start[0] - e.box_size[0] <= this.slap_width && this.box_start[0] - e.box_start[0] - e.box_size[0] > 0 && this.mirrored) {
            e.box_color = '#FFFF00';
            this.box_color = '#FFFF00';
            if (this.slap && e.enemy_puffed != true) {
                e.enemy_slapped = true;
                e.slap_counter = -15;
            }
        }
    }



    statusChangeCheck(new_status) {
        switch (true) {
            case this.status != new_status:
                this.status = new_status;
                this.current_image = 0;
                break;
            case new_status == this.images_IDLE_SHORT && this.current_image == 30:
                playSleepSound();
                sleep_sound_active = true;
                this.current_image = 0;
                this.status = this.images_IDLE_LONG;
                break;
            case new_status == this.images_IDLE_LONG && this.current_image == 14:
                this.current_image = 11;
                break;
            case new_status == this.images_DEAD_POISONED && this.current_image > 5:
                this.poisonDeathAnimation();
                break;
            case new_status == this.images_DEAD_SHOCKED && this.current_image > 6:
                this.shockDeathAnimation();
                break;
        }
    }

    poisonDeathAnimation() {
        if (this.current_image == 9 && this.y >= -80 && this.y >= this.min_y_barrier - 60) {
            this.y = this.y - 10;
            this.current_image = 8;
        }
        if (this.current_image == 12) {
            this.current_image = 11;
        }
    }

    shockDeathAnimation() {
        if (this.current_image == 8 && this.y <= 220 && this.y <= this.max_y_barrier - 160) {
            this.y = this.y + 15;
            this.current_image = 7;
        }
        if (this.current_image == 11) {
            this.current_image = 10;
        }
    }

    animation(arr) {
        this.statusChangeCheck(arr);
        let index = this.current_image % arr.length;
        let path = arr[index];
        this.img = this.imageCache[path];
        this.current_image++;
        this.statusCheckAndCalculation(arr, index);
        this.checkSound();
    }

    checkSound() {
        switch (true) {
            case this.status != this.images_IDLE_LONG && sleep_sound_active:
                sleep_sound_active = false;
                stopSleepSound();
                break;
            case this.status == this.images_SLAP && this.current_image == 5:
                playSlapSound();
                break;
            case (this.status == this.images_BUBBLESHOOT_NORMAL || this.status == this.images_BUBBLESHOOT_POISONED) && this.current_image == 8:
                playBubbleShotSound();
        }
    }

    statusCheckAndCalculation(arr, index) {
        if (this.slap_status) {
            this.startSlap(index, arr.length);
        }
        if (this.shocked || this.poisoned) {
            this.startDamage(index, arr.length);
        }
        if (this.bubble_shoot_status) {
            this.startBubbleShoot(index, arr.length);
        }
    }

    startDeath() {
        this.movable = false;
        if (this.poisoned) {
            this.death = 'poisoned';
        } else {
            this.death = 'shocked';
        }
        if (!this.isKilled) {
            setTimeout(function () { deadscreen(this.death) }, 3000);
            this.isKilled = true;
        }

    }

    playDamageSound() {
        if (this.poisoned) {
            playHurtPoisonSound();
        } else {
            playHurtElectricSound();
        }

    }

    startDamage(index, length) {

        if (index == 0) {
            this.playDamageSound();
            if (this.world.health_bar.value - 0.05 * this.world.difficulty > 0) {
                this.world.health_bar.value -= 0.05 * this.world.difficulty;
            } else {
                if (this.world.life_count == 0) {
                    this.world.health_bar.value = 0;
                    this.startDeath();
                } else {
                    this.world.health_bar.value = 1;
                    this.world.life_count--;
                }
            }
        }
        if (index == length - 1) {
            this.poisoned = false;
            this.shocked = false;
        }
    }

    startSlap(index, length) {
        if (index == length - 4 && !this.poisoned && !this.shocked && !this.bubble_shoot_status) {
            this.slap = true;
        }
        if (index == length - 1) {
            this.slap_status = false;
        }
    }

    startBubbleShoot(index, length) {
        if (index == length - 1 && !this.poisoned && !this.shocked && !this.slap_status) {
            let bubble_start_shift = 0;
            if (this.mirrored) {
                bubble_start_shift = this.box_size[0] + (this.world.bubble_size * 2.7);
            }
            this.world.addBubble(this.box_start[0] + this.box_size[0] + this.world.bubble_size - this.world.camera_x - bubble_start_shift, this.box_start[1] + (0.5 * this.box_size[1]) - this.world.bubble_size * 0.8, this.mirrored);
        }
        if (index == length - 1) {
            this.bubble_shoot_status = false;
        }
    }

    moveCamera(speed) {
        if (speed < 0 && this.x >= this.middle_world_start + this.character_speed && this.x - this.world.camera_x <= this.middle_world_end + this.character_speed) {
            this.moveCameraLeft(speed);
        }
        if (speed > 0 && this.x - this.world.camera_x <= this.middle_world_end + this.character_speed) {
            this.moveCameraRight(speed);
        }
    }

    moveCameraRight(speed) {
        this.x = this.x + speed;
        if (this.world.camera_x >= 0) {
            this.x = this.x - speed;
        } else {
            this.world.camera_x = this.world.camera_x + speed;
        }
    }

    moveCameraLeft(speed) {
        this.world.camera_x = this.world.camera_x + speed;
        this.x = this.x + speed;
    }
}