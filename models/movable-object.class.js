class MovableObject extends GameObject {

    mirrored = false;
    character_speed = 7;

    deletable = false;
    permeability = false;
    barrier_touch = false;
    hitbox_narrow_up = 0;
    hitbox_narrow_down = 0;
    hitbox_narrow_left = 0;
    hitbox_narrow_right = 0;

    size;
    current_image = 0;
    enemy_status = true; //true = alive
    enemy_slapped = false;
    slap_counter = 0;
    max_y_barrier = 0;
    min_y_barrier = 0;

    moveDown(speed) {
        if (this.y <= 220) {
            this.y = this.y + speed
            this.barrier_touch = false;
        } else {
            this.barrier_touch = true;
        }
    }

    moveUp(speed) {
        if (this.y >= -120) {
            this.y = this.y - speed
            this.barrier_touch = false;
        } else {
            this.barrier_touch = true;
        }
    }

    moveLeft(speed) {
        if (this.x >= -30) {
            this.x = this.x - speed
            this.barrier_touch = false;
        } else {
            this.barrier_touch = true;
        }
    }

    moveRight(speed) {
        if (this.x <= 540) {
            this.x = this.x + speed
            this.barrier_touch = false;
        } else {
            this.barrier_touch = true;
        }
    }
}