export class Battlefield {
    
    constructor(tankViewList) {
        this.tankViewList = tankViewList;
    }

    getTanks() {
        return this.tankViewList;
    }
}
