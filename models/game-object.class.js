class GameObject {
    x = 0;
    y = 0;
    img;
    imageCache = {};
    box_start = [0,0];
    box_size = [0,0];
    box_color = '#000000';
    pausetime = 0;

    timer_1;
    timer_2;

    getHighestNumber(num1, num2){
        if (num1 > num2) {
            return num1;
        } else{
            return num2;
        } 
    }

    loadImage(path) {
        this.img = totalImageCache[path]
    }

    loadImageCache(arr) {
        arr.forEach((path) => {
            this.imageCache[path] = totalImageCache[path];
        });
    }

    setBoxColor(box_color){
        this.box_color = box_color;
    }

}