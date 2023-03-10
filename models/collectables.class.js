class Collectable extends MovableObject {
    direction = true;
    size = 60;
    collected = false;
    type;
    current_image = 0;
    animation_speed = 70;
    upwards_count = 0;
    animation_images = [];

    images_COIN = [
        'img/4. Marcadores/1. Coins/coin_animation/1.png',
        'img/4. Marcadores/1. Coins/coin_animation/2.png',
        'img/4. Marcadores/1. Coins/coin_animation/3.png',
        'img/4. Marcadores/1. Coins/coin_animation/4.png',
        'img/4. Marcadores/1. Coins/coin_animation/5.png',
        'img/4. Marcadores/1. Coins/coin_animation/6.png',
        'img/4. Marcadores/1. Coins/coin_animation/5.png',
        'img/4. Marcadores/1. Coins/coin_animation/4.png',
        'img/4. Marcadores/1. Coins/coin_animation/3.png',
        'img/4. Marcadores/1. Coins/coin_animation/2.png'
    ]

    images_POISSON_DARK = [
        'img/4. Marcadores/Posión/dark poison animated/0.png',
        'img/4. Marcadores/Posión/dark poison animated/1.png',
        'img/4. Marcadores/Posión/dark poison animated/2.png',
        'img/4. Marcadores/Posión/dark poison animated/3.png'
    ]

    images_POISSON_LIGHT = [
        'img/4. Marcadores/Posión/light poison animated/0.png',
        'img/4. Marcadores/Posión/light poison animated/1.png',
        'img/4. Marcadores/Posión/light poison animated/2.png',
        'img/4. Marcadores/Posión/light poison animated/3.png'
    ]

    coin_sound = new Audio('./sounds/character/collect.mp3');
    bottle_sound = new Audio('./sounds/character/bottle.wav');
    sound_started = false;

    animate() {
        this.timer_1 = setInterval(() => {
            if(this.collected) {
                this.checkSound();
                this.y = this.y - 2;
                if (!this.deletable && this.upwards_count >= 40) {
                    this.deletable = true;
                    
                }
                this.upwards_count++;
            }
                this.animation(this.animation_images);
            
        }, this.animation_speed );
    }

    checkSound(){
        if(!this.sound_started){
            if(this.type == 'poison_light' || this.type == 'poison_dark'){
                this.bottle_sound.volume = master_volume;
                this.bottle_sound.play();
            } else {
                this.coin_sound.volume = master_volume;
                this.coin_sound.play();
            }
            this.sound_started = true;
        }
    }

    start_collect_coin_animation() {
        this.animation_speed = 10;
        this.animate();
    }


    animation(arr) {
        let index = this.current_image % arr.length;
        let path = arr[index];
        this.img = this.imageCache[path];
        this.current_image++;
    }

    constructor(type, x, y) {
        super().loadImage(this.imageSelection(type));
        this.loadImageCache(this.images_COIN);
        this.loadImageCache(this.images_POISSON_DARK);
        this.loadImageCache(this.images_POISSON_LIGHT);
        this.type = type;
        this.x = x;
        this.y = y;
        this.box_color = '#FFFFFF';
        this.animate();
        this.coin_sound.volume = master_volume;
        this.bottle_sound.volume = master_volume;
    }

    imageSelection(type) {
        let type_img_path;
        switch (type) {
            case 'poison_light':
                type_img_path = 'img/4. Marcadores/Posión/Light - Right.png';
                this.animation_images = this.images_POISSON_LIGHT;
                this.animation_speed = 150;
                break;
            case 'coin':
                type_img_path = 'img/4. Marcadores/1. Coins/4.png';
                this.animation_images = this.images_COIN;
                this.size=40;
                break;
            case 'poison_dark':
                type_img_path = 'img/4. Marcadores/Posión/Dark - Right.png';
                this.animation_images = this.images_POISSON_DARK;
                this.animation_speed = 150;
                break;
        }
        return type_img_path;
    }
}