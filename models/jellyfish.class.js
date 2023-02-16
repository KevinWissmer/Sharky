class Jellyfish extends MovableObject {
    direction = false;
    color_and_type;
    
    images_JELLYFISH_PURPLE_ALIVE = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]
    images_JELLYFISH_YELLOW_ALIVE = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ]
    images_JELLYFISH_PINK_DANGER_ALIVE = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ]
    images_JELLYFISH_GREEN_DANGER_ALIVE = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ]


    images_JELLYFISH_PURPLE_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ]
    images_JELLYFISH_YELLOW_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ]
    images_JELLYFISH_PINK_DANGER_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ]
    images_JELLYFISH_GREEN_DANGER_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
    ]

    alive = [];
    dead = [];

    constructor(color_and_type, x, y) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.color_and_type = color_and_type;
        this.colorAndTypeToArray();
        this.moveEnemy();
        this.animate();
        this.loadImageCache(this.alive);
        this.loadImageCache(this.dead);

        this.x = x;
        this.y = y;
        this.size = 100;
        this.min_y_barrier = 450;
        this.max_y_barrier = 400;
    }


    moveEnemy() {
        this.timer_1 = setInterval(() => {
            if (this.enemy_status) {
                this.slapMove();
                this.automUpDownMove();
            } else {
                this.deadMove();
            }
        }, this.getHighestNumber(20, this.pausetime));
    }

    deadMove() {

        if (this.y - 1 > this.min_y_barrier && this.min_y_barrier != 0) {
            this.y -= 1;
        } else {
            this.x += 1;
        }
        if (this.y < -600) {
            this.deletable = true;
        }
    }


    automUpDownMove() {
        if (this.direction) {
            this.y -= 1;
            if ((this.y - 2 < 50 || this.y - 2 < this.min_y_barrier) && this.min_y_barrier != 0) {
                this.direction = false;
            }
        }
        if (!this.direction) {
            this.y += 1;
            if ((this.y + 2 > 250 || this.y + 2 > this.max_y_barrier - (this.box_size[1] * 0.35)) && this.max_y_barrier != 0) {
                this.direction = true;
            }
        }
    }

    slapMove() {
        if (this.enemy_slapped && this.slap_counter > 0) {
            this.slapMoveRight();
        }
        if (this.enemy_slapped && this.slap_counter < 0) {
            this.slapMoveLeft();
        }
    }

    slapMoveLeft() {
        this.x = this.slap_counter + this.x;
        if (this.slap_counter + 1 <= 0) {
            this.slap_counter = this.slap_counter + 1;
        } else {
            this.slap_counter = 0;
            this.enemy_slapped = false;
        }
    }

    slapMoveRight() {
        this.x = this.slap_counter + this.x;
        if (this.slap_counter - 1 >= 0) {
            this.slap_counter = this.slap_counter - 1;
        } else {
            this.slap_counter = 0;
            this.enemy_slapped = false;
        }
    }

    animate() {
        this.timer_2 = setInterval(() => {
            if (this.enemy_status) {
                this.animation(this.alive)
            } else {
                this.animation(this.dead)
            }

        }, this.getHighestNumber(140, this.pausetime));
    }

    animation(arr) {
        let index = this.current_image % arr.length;
        let path = arr[index];
        this.img = this.imageCache[path];
        this.current_image++;
    }

    colorAndTypeToArray() {
        switch (this.color_and_type) {
            case 'yellow_jellyfish':
                this.alive = this.images_JELLYFISH_YELLOW_ALIVE;
                this.dead = this.images_JELLYFISH_YELLOW_DEAD;
                break;
            case 'green_jellyfish':
                this.alive = this.images_JELLYFISH_GREEN_DANGER_ALIVE;
                this.dead = this.images_JELLYFISH_GREEN_DANGER_DEAD;
                break;
            case 'purple_jellyfish':
                this.alive = this.images_JELLYFISH_PURPLE_ALIVE;
                this.dead = this.images_JELLYFISH_PURPLE_DEAD;
                break;
            case 'pink_jellyfish':
                this.alive = this.images_JELLYFISH_PINK_DANGER_ALIVE;
                this.dead = this.images_JELLYFISH_PINK_DANGER_DEAD;
                break;
            default:
                this.alive = this.images_JELLYFISH_YELLOW_ALIVE;
                this.dead = this.images_JELLYFISH_YELLOW_DEAD;
                break;
        }
    }
}