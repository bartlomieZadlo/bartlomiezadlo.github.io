export class Battlefield {
    
    constructor(tankController) {
        this.currentTankController = tankController;
    }

    getTank() {
        return this.currentTankController;
    }
}
