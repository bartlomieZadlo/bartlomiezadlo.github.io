export class Tank {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.xStart = position.getX();
        this.yStart = position.getY();
    }

    getPos() {
        return this.position;
    }

    setPos(position){
        this.position = position;
    }

    getName() {
        return this.name;
    }

    getxStart(){
        return this.xStart;
    }
    
    getyStart(){
        return this.yStart;
    }
}   