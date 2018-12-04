import {Bullet} from "../bullet/Bullet.js";
import {BulletView} from "../bullet/BulletView.js";
import {BulletController} from "../bullet/BulletController.js";
import { ShotParameter } from "./ShotParameter.js";

export class TankController {
    constructor(tank) {
        this.tank = tank;
    }

    shoot(e) {
        let shotParams = new ShotParameter(45, 50);
        let bullet = new Bullet(this.tank, shotParams);
        let bulletController = new BulletController(bullet);
        let bulletView = new BulletView(bulletController);
        document.getElementById(`${this.tank.getName()}`).appendChild(bulletView.element);
        bulletController.moveBullet();
    }
}
    