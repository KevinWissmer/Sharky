class Pufferfish extends MovableObject {
    direction = true;
    color_and_type;

    images_PUFFERFISH_GREEN_UNPUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ]
    images_PUFFERFISH_PINK_UNPUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
    ]
    images_PUFFERFISH_DARKPINK_UNPUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ]

    images_PUFFERFISH_GREEN_PUFFTRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ]
    images_PUFFERFISH_PINK_PUFFTRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
    ]
    images_PUFFERFISH_DARKPINK_PUFFTRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png'
    ]

    images_PUFFERFISH_GREEN_PUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ]
    images_PUFFERFISH_PINK_PUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png'
    ]
    images_PUFFERFISH_DARKPINK_PUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
    ]

    images_PUFFERFISH_GREEN_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ]
    images_PUFFERFISH_PINK_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png'
    ]
    images_PUFFERFISH_DARKPINK_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png'
    ]



    puff_distance = 300;
    unpuffed = [];
    pufftransition = [];
    puffed = [];
    dead = [];

    enemy_pufftransition = false;
    enemy_pufftransition_direction = true; //true for unpuffed to puffed; false for puffed to unpuffed
    enemy_puffed = false;
    current_image_death = 0;
    current_death_y_speed = -20;
    dead_on_ground = false;


    moveEnemy() {
        this.timer_1 = setInterval(() => {
            if (this.enemy_status) {
                this.automUpDownMove();
            } else {
                this.y -= 1;
                if (this.y < -600) {
                    this.deletable = true;
                }
            }
        }, 20);
    }

    automUpDownMove() {
        if (this.direction && !this.enemy_slapped) {
            this.y -= 1;
            if (this.y < 150) {
                this.direction = false;
            }
        }
        if (!this.direction && !this.enemy_slapped) {
            this.y += 1;
            if (this.y > 250) {
                this.direction = true;
            }
        }
    }

    animate() {
        this.timer_2 = setInterval(() => {
            if (!this.dead_on_ground) {
                switch (true) {
                    case this.enemy_slapped:
                        this.deathAnimation(this.dead);
                        break;
                    case this.enemy_pufftransition:
                        this.animationTransition(this.pufftransition);
                        break;
                    case this.enemy_puffed:
                        this.animation(this.puffed);
                        break;
                    case !this.enemy_puffed:
                        this.animation(this.unpuffed);
                        break;
                }
            } 
        }, 100);
    }


    constructor(color_and_type, x, y) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.color_and_type = color_and_type;
        this.colorAndTypeToArray();
        this.moveEnemy();
        this.animate();
        this.loadImageCache(this.unpuffed);
        this.loadImageCache(this.pufftransition);
        this.loadImageCache(this.puffed);
        this.loadImageCache(this.dead);

        this.hitbox_narrow_down = 0.25;
        this.hitbox_narrow_up = 0.05;
        this.hitbox_narrow_left = 0.05;
        this.hitbox_narrow_right = 0.05;
        this.x = x;
        this.y = y;
        this.size = 100;
        this.max_y_barrier = 400;
    }

    startPufftransition() {
        if (this.enemy_pufftransition != true) {
            this.enemy_pufftransition_direction = !this.enemy_puffed;
            this.enemy_pufftransition = true;
            if (!this.enemy_puffed) {
                this.current_image = 0;
                this.hitbox_narrow_down = 0;
            } else {
                this.current_image = 4;
                this.hitbox_narrow_down = 0.25;
            }
        }

    }

    deathAnimation() {
        let path
        if (this.current_image_death == 0) {
            path = this.dead[0];
        } else {
            path = this.dead[1];
        }
        this.current_image_death++;
        this.img = this.imageCache[path];
        this.moveDeadPufferfish();
    }

    moveDeadPufferfish() {

        if (this.y + this.current_death_y_speed <= this.max_y_barrier) {
            this.x = this.x - 15;
            this.y = this.y + this.current_death_y_speed;
            this.current_death_y_speed = this.current_death_y_speed + (this.current_image_death * 1.4);
        } else {
            this.y = this.max_y_barrier;
            this.permeability = true;
            this.dead_on_ground = true;
        }
    }

    animationTransition(arr) {
        let index = this.current_image % arr.length;
        let path = arr[index];
        this.img = this.imageCache[path];
        if (this.enemy_pufftransition_direction) {
            this.current_image++;
            if (this.current_image >= 5) {
                this.current_image = 0;
                this.enemy_pufftransition = false;
                this.enemy_puffed = true;
            }
        } else {
            this.current_image--;
            if (this.current_image == -1) {
                this.current_image = 0;
                this.enemy_pufftransition = false;
                this.enemy_puffed = false;
            }
        }
    }

    animation(arr) {
        let index = this.current_image % arr.length;
        let path = arr[index];
        this.img = this.imageCache[path];
        this.current_image++;
    }

    colorAndTypeToArray() {
        switch (this.color_and_type) {
            case 'pink_pufferfish':
                this.unpuffed = this.images_PUFFERFISH_PINK_UNPUFFED;
                this.pufftransition = this.images_PUFFERFISH_PINK_PUFFTRANSITION;
                this.puffed = this.images_PUFFERFISH_PINK_PUFFED;
                this.dead = this.images_PUFFERFISH_PINK_DEAD;
                break;
            case 'green_pufferfish':
                this.unpuffed = this.images_PUFFERFISH_GREEN_UNPUFFED;
                this.pufftransition = this.images_PUFFERFISH_GREEN_PUFFTRANSITION;
                this.puffed = this.images_PUFFERFISH_GREEN_PUFFED;
                this.dead = this.images_PUFFERFISH_GREEN_DEAD;
                break;
            case 'darkpink_pufferfish':
                this.unpuffed = this.images_PUFFERFISH_DARKPINK_UNPUFFED;
                this.pufftransition = this.images_PUFFERFISH_DARKPINK_PUFFTRANSITION;
                this.puffed = this.images_PUFFERFISH_DARKPINK_PUFFED;
                this.dead = this.images_PUFFERFISH_DARKPINK_DEAD;
                break;
            default:
                this.unpuffed = this.images_PUFFERFISH_GREEN_UNPUFFED;
                this.pufftransition = this.images_PUFFERFISH_GREEN_PUFFTRANSITION;
                this.puffed = this.images_PUFFERFISH_GREEN_PUFFED;
                break;
        }
    }
}