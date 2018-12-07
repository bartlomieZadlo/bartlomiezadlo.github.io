import {Bullet} from "../bullet/Bullet.js";
import {BulletView} from "../bullet/BulletView.js";
import {BulletController} from "../bullet/BulletController.js";
import { ShotParameter } from "./ShotParameter.js";
import {KeyCodes} from "../Constants.js";

export class TankController {
    constructor(tank) {
        this.tank = tank;
        this.shotParams = new ShotParameter(45,50);
        this.addEventListener();
    }

    changeShotParams(e){
        let keyCode = e.keyCode;
        if(keyCode == KeyCodes.UP) {
            this.shotParams.incrementAngle();
        } else if (keyCode == KeyCodes.DOWN){
            this.shotParams.decrementAngle();
        } else if (keyCode == KeyCodes.RIGHT){
            this.shotParams.incrementPower();
        } else if (keyCode == KeyCodes.LEFT){
            this.shotParams.decrementPower()
        }
        if(this.shotParams.getAngle()<0){
            this.shotParams.setAngle(10);
        }
        if(this.shotParams.getPower()<0){
            this.shotParams.setPower(10);
        }
        if(this.shotParams.getAngle()>180){
            this.shotParams.setAngle(180);
        }
        document.getElementById(this.tank.getName()).children[1].style.transform = `rotate(-${this.shotParams.getAngle()}deg)`;
    } 

    createBullet(e) {

        let bullet = new Bullet(this.tank, this.shotParams);
        let bulletController = new BulletController(bullet);
        let bulletView = new BulletView(bulletController);
        document.getElementById(`battlefield`).appendChild(bulletView.element);
        return bulletView;
    }

    getShotParameters() {
        return this.shotParams;
    }

    getTank(){
        return this.tank;
    }

    addEventListener(){
        document.addEventListener("keydown", this.changeShotParams.bind(this));
    }
}
    