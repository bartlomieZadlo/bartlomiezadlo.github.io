export class Bullet{
 constructor(tank, shotParameters){
    this.tank = tank;
    this.pos = tank.getPos();
    this.angle = shotParameters.getAngle();
    this.power = shotParameters.getPower();
 }
    getPos(){
        return this.pos;
    }

    setPos(position){
        this.pos = position;
    }

    getAngle(){
        return this.angle;
    }

    getPower(){
        return this.power;
    }
}