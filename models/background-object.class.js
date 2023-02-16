class BackgroundObject extends MovableObject {
    movement_speed

    constructor(img_path, x, y, movement_speed) {
        super().loadImage(img_path);
        this.x = x;
        this.y = y;
        this.movement_speed = movement_speed;
    }

}