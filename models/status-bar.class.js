class StatusBar extends StaticFrameObject {

    bar_size = 200;
    icon_size;

    bar_type;
    value;  // between 0 - 1 
    bar_bg;
    bar_full;

    //120 pixel from bar-start to left_img_end


    constructor(bar_type, startvalue) {
        super().loadBarBGImage();
        this.loadBarFullImage();
        this.bar_type = bar_type;
        this.loadIcon(bar_type);
        this.icon_size = 70 * (this.bar_size/200);
        this.value = startvalue;
    }

    loadIcon(bar_type) {
        switch (bar_type) {
            case 'poison':
                this.loadImage('img/4. Marcadores/green/100_ copia 5.png');
                break;
            case 'health':
                this.loadImage('img/4. Marcadores/green/100_  copia 3.png');
                break;
            case 'coin':
                this.loadImage('img/4. Marcadores/green/100_ copia 6.png');
                break;
        }
    }
    loadBarBGImage() {
        this.bar_bg = new Image();
        this.bar_bg.src = 'img/4. Marcadores/green/clean bar/clean_bar_empty.png';
    }
    loadBarFullImage() {
        this.bar_full = new Image();
        this.bar_full.src = 'img/4. Marcadores/green/clean bar/clean_bar_full.png';
    }

}