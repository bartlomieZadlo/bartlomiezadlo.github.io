export class Tank {
    constructor(name, position) {
        this.name = name;
        this.position = position;
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
}   