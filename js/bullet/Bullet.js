export class Bullet{
 constructor(tank){
    this.tank = tank;
    this.pos = tank.getPos();
    // this.angle = tank.getShotAngle();
    // this.power = tank.getShotPower();
 }
    getPos(){
        return this.pos;
    }

    setPos(position){
        this.pos = position;
    }

    getShotAngle(){
        return this.angle;
    }

    getShotPower(){
        return this.power;
    }
}