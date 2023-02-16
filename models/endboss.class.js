class Boss extends MovableObject {
    direction = true;
    color_and_type = 'boss';

    images_BOSS_INTRO = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ]
    images_BOSS_FLOATING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]
    images_BOSS_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ]
    images_BOSS_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ]
    images_BOSS_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ]

    y_pos_aim = 0;
    boss_speed = 15;
    health = 1;
    damage = 0.55;
    size = 300;
    current_image = 0;
    enemy_status = true; //true = alive
    enemy_slapped = false;
    enemy_attack = false;
    enemy_attack_count = 0;
    enemy_hurt = false;
    old_status = 'intro';
    status = 'intro'; // intro, floating, attack, dead, hurt
    full_health_bar;
    empty_health_bar;
    start_x = 0;
    start_y = 0;


    moveBoss() {
        if (this.box_start[1] < this.y_pos_aim - (1.5 * this.boss_speed)) {
            this.y = this.y + this.boss_speed;
        }
        if (this.box_start[1] > this.y_pos_aim + (1.5 * this.boss_speed)) {
            this.y = this.y - this.boss_speed;
        }
    }

    animate() {
        this.setStartValue();
        this.timer_1 = setInterval(() => {
            this.attackCalculation();
            if (this.enemy_slapped && this.status == 'hurt') {
                this.takeDamage();
                this.enemy_slapped = false;
            } else {
                this.enemy_slapped = false;
            }
            switch (this.status) {
                case 'intro':
                    this.animation(this.images_BOSS_INTRO);
                    break;
                case 'floating':
                    this.animation(this.images_BOSS_FLOATING);
                    this.moveBoss();
                    this.randomAttackStart();
                    break;
                case 'attack':
                    this.animation(this.images_BOSS_ATTACK);
                    break;
                case 'dead':
                    this.animation(this.images_BOSS_DEAD);
                    break;
                case 'hurt':
                    this.animation(this.images_BOSS_HURT);
                    break;
                default:
                    this.animation(this.images_BOSS_FLOATING);
                    break;
            }
        }, this.getHighestNumber(120, this.pausetime));
    }

    constructor(x, y) {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');

        this.loadImageCache(this.images_BOSS_INTRO);
        this.loadImageCache(this.images_BOSS_FLOATING);
        this.loadImageCache(this.images_BOSS_HURT);
        this.loadImageCache(this.images_BOSS_DEAD);
        this.loadImageCache(this.images_BOSS_ATTACK);
        this.loadHealthBar();

        this.hitbox_narrow_up = 0.42;
        this.hitbox_narrow_down = 0.18;
        this.hitbox_narrow_right = 0.1;
        this.hitbox_narrow_left = 0;
        this.x = -10000;
        this.y = -10000;
        this.start_x = x;
        this.start_y = y;
    }

    setStartValue() {
        this.x = this.start_x;
        this.y = this.start_y;
    }

    loadHealthBar() {
        this.full_health_bar = new Image()
        this.full_health_bar.src = 'img/4. Marcadores/orange/full.png';
        this.empty_health_bar = new Image()
        this.empty_health_bar.src = 'img/4. Marcadores/orange/empty.png';
    }

    animation(arr) {
        this.statusChangeCheck();
        let index = this.current_image % arr.length;
        let path = arr[index];
        this.img = this.imageCache[path];
        this.current_image++;
        this.statusCheckAndCalculation(arr, index);
    }

    statusChangeCheck() {
        if (this.status != this.old_status) {
            this.old_status = this.status;
            this.current_image = 0;
        }
    }

    statusCheckAndCalculation() {
        switch (true) {
            case 'intro' == this.status && this.current_image >= 10:
                this.current_image = 0;
                this.status = 'floating';
                break;
            case 'attack' == this.status && this.current_image >= 6:
                this.current_image = 0;
                this.status = 'floating';
                break;
            case 'dead' == this.status && this.current_image >= 5:
                this.current_image = 4;
                if (this.y > -50) {
                    this.y = this.y - 5;
                }
                break;
            case 'hurt' == this.status && this.current_image >= 25:
                this.current_image = 0;
                this.status = 'floating';
                break;
        }
    }



    takeDamage() {

        if (this.health - this.damage <= 0) {
            this.status = 'dead';
            this.permeability = true;
            this.health = 0;
        } else {
            this.health = this.health - this.damage;
        }
    }

    startAttack() {
        if (this.enemy_attack != true) {
            this.enemy_attack = true;
            this.enemy_attack_count = 0;
            this.status = 'attack';

        }
    }

    randomAttackStart() {
        if (this.status == 'floating' && this.enemy_attack_count == 0) {
            if (Math.random() <= 0.08) {
                this.startAttack()
            }
        }
    }

    attackCalculation() {
        if (this.enemy_attack) {
            this.enemy_attack_count++;
            if (this.enemy_attack_count >= 7) {
                this.status = 'floating';
            } else {
                this.x = this.x - (5 * this.enemy_attack_count);
            }
            if (this.enemy_attack_count < 15 && this.enemy_attack_count > 7) {
                this.x = this.x + 15;
            }
            if (this.enemy_attack_count == 15) {
                this.enemy_attack = false;
                this.enemy_attack_count = 0;
            }
        }

    }
}