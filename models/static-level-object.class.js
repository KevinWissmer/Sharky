class StaticLevelObject extends MovableObject {

    size;
    vertical_hitbox_ratio = 1;
    horizontal_hitbox_ratio = 1;
    type_img_path;

    constructor(type, x, y, size) {

        super().setImagePathAndHitbox(type)
        this.loadImage(this.type_img_path);
        this.x = x;
        this.y = y;
        this.size = size;
        
    }

    setImagePathAndHitbox(type) {
        switch (type) {
            case 'top_and_bottom':
                this.type_img_path = 'img/3. Background/Barrier/1.png';
                this.vertical_hitbox_ratio = 1;
                this.horizontal_hitbox_ratio = 1;
                break;
            case 'big_bottom':
                this.type_img_path = 'img/3. Background/Barrier/2.png';
                this.vertical_hitbox_ratio = 0.55;
                this.horizontal_hitbox_ratio = 0.6;
                break;
            case 'side':
                this.type_img_path = 'img/3. Background/Barrier/3.png';
                this.vertical_hitbox_ratio = 1;
                this.horizontal_hitbox_ratio = 1;
                break;
            case 'bottom':
                this.type_img_path = 'img/3. Background/Barrier/4.png';
                this.vertical_hitbox_ratio = 0.5;
                this.horizontal_hitbox_ratio = 1;
                break;
            case 'top':
                this.type_img_path = 'img/3. Background/Barrier/5.png';
                this.vertical_hitbox_ratio = 0.35;
                this.horizontal_hitbox_ratio = 0.95;
                break;
        }
    }


}










