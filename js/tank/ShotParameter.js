export class ShotParameter {

    constructor(angle, power) {
        this.angle = angle;
        this.power = power;
    }

    getAngle() {
        return this.angle;
    }

    setAngle(angle) {
        this.angle = angle;
    }

    getPower() {
        return this.power;
    }

    setPower(power) {
        this.power = power;
    }
}
