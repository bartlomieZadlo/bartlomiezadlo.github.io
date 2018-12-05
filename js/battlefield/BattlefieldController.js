export class BattlefieldController {

    constructor(battlefield) {
        this.battlefield = battlefield;
    }

    getCurrentTank() {
        return this.battlefield.getTank();
    }
}