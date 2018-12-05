import {gravityAcceleration} from "../game.js"

export class BulletController{
    constructor(bulletObject){
        this.bullet = bulletObject;      
    }

    moveBullet() {
        let bulletElem = document.getElementsByClassName("bullet")[0];
        let angle = this.bullet.getAngle();
        let power = this.bullet.getPower();
        let trajectory = this.calulateTrajectory(power, angle, this.bullet.getPos());
        let x = bulletElem.offsetLeft;
        bulletElem.style.display = "block";
        let counter = 0;
        let interval = setInterval(() => {
            bulletElem.style.left = trajectory[counter][0] + "px";
            bulletElem.style.top = -trajectory[counter][1] + "px";
            counter ++;
            if (counter == trajectory.length) {
                clearInterval(interval);
                bulletElem.parentElement.removeChild(bulletElem);
            }
        }, 20);
    }

    calulateTrajectory(power, angle, startPoint){
        let angleRad = angle * Math.PI/180
        
        
        let ySpeed = Math.sin(angleRad) * power;
        let xSpeed = Math.cos(angleRad) * power;
        let xStart = startPoint.getX();
        let yStart = startPoint.getY();
        let stopTime = ySpeed/gravityAcceleration;
        let flyTime = stopTime + Math.sqrt((ySpeed * stopTime - gravityAcceleration/2 * Math.pow(stopTime, 2) +40) * 2/gravityAcceleration);
        let trajTable = new Array();
        
        for (let i = 0; i<flyTime; i += 0.2){
            let yValue = yStart + ySpeed * i - gravityAcceleration/2 * Math.pow(i, 2);
            let xValue = xSpeed * i + xStart;
            trajTable.push([xValue, yValue]);
        }


        return trajTable;
    }
}
