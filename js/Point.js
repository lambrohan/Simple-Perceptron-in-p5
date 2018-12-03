class Point {
    constructor(){
        this.x = random(-1,1);
        this.y = random(-1,1);
        this.label = this.x>this.y ? 1 : -1;
    }


    getPx(){
        return  map(this.x,-1,1,0,width);
    }

    getPy(){
        return  map(this.y,-1,1,height,0);
    }


    show(){
        stroke(0);
        if (this.label==1) {
            fill (255);
        }else{
            fill (0);
        }

        ellipse(this.getPx(),this.getPy(),16,16);
    }
}