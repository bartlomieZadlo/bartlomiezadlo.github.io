import {gravityAcceleration, TankParams, BattlefieldParams} from "../Constants.js"
import { Position } from "../position/Position.js";

export class BulletController{
    constructor(bulletObject){
        this.bullet = bulletObject;
    }

    async moveBullet() {
        let bulletElem = document.getElementsByClassName("bullet")[0];
        let angle = this.bullet.getAngle();
        let power = this.bullet.getPower();
        let trajectory = this.calulateTrajectory(power, angle, this.bullet.getPos());
        
        for (let i = 0; i <= trajectory.length -1; i++ ){
            let xPos = trajectory[i][0];
            let yPos = trajectory[i][1];
            bulletElem.style.left = xPos + "px";
            bulletElem.style.top = yPos + "px";
            this.bullet.setPos(new Position(xPos, yPos))
            await this.sleep(50); 
        }
        return false;
        }
    

    calulateTrajectory(power, angle, startPoint){
        let angleRad = angle * Math.PI/180
        let ySpeed = Math.sin(angleRad) * power;
        let xSpeed = Math.cos(angleRad) * power;
        let xStart = startPoint.getX();
        let yStart = startPoint.getY() - 6;

        let stopTime = ySpeed/gravityAcceleration;
        let flightHeight = ySpeed * stopTime - gravityAcceleration/2 *Math.pow(stopTime,2);
        let finalFallDistance = BattlefieldParams.HEIGHT - yStart + flightHeight;
         
        let flyTime = stopTime + Math.sqrt(2*(finalFallDistance)/gravityAcceleration);
        let trajTable = new Array();
        
        for (let i = 0; i<flyTime; i += 0.15){
            let yValue = yStart - ySpeed * i + gravityAcceleration/2 * Math.pow(i, 2);
            let xValue = xSpeed * i + xStart;
            trajTable.push([xValue, yValue]); 
        }
        
        return trajTable;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getBullet(){
        return this.bullet;
    }
}
