class Projectile extends MovableObject {

    poison_status = false; //true = poison bubble
    speed_x = 0;
    speed_y = 0;
    start_speed_x = 0;
    world;
    direction_change = false;
    


    moveBubble() {
        this.timer_1 = setInterval(() => {
            this.speed_x = this.speed_x - (0.07 * this.speed_x);
            if (this.direction_change) {
                this.x = this.x - this.speed_x;
            } else {
                this.x = this.x + this.speed_x;
            }
            this.speed_y = this.speed_y + 0.3;
            this.y = this.y - this.speed_y;
        }, 20);
    }

    

    constructor(poison, speed, x, y, direction) {
        super().loadImage(this.getImagePath(poison));
        this.poison_status = poison;
        this.direction_change = direction;

        this.speed_x = speed;
        this.start_speed_x = speed;
        this.x = x;
        this.y = y;
        this.moveBubble();
    }

    getImagePath(poison_status) {
        if (!poison_status) {
            return 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
        } else {
            return 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png';
        }
    }
}