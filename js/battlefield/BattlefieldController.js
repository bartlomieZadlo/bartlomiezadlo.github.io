import {KeyCodes, BulletParams, TankParams, GroundElement} from "../Constants.js";
import { Position } from "../position/Position.js";

export class BattlefieldController {
    
    constructor(battlefield, groundCords) {
        this.battlefield = battlefield;
        this.currentTankId = 1;
        this.currentTank = this.battlefield.getTanks()[this.currentTankId - 1].getController();
        this.bulletView;
        this.tankViewList = this.battlefield.getTanks();
        this.buttonNotPressed = true;
        this.groundCords = groundCords;
    }

    getCurrentTank() {
        return this.currentTank;
    }

    nextTurn() {
        this.currentTankId++;
        if (this.currentTankId >= this.battlefield.getTanks().length) {
            this.currentTankId = 0;
        }
        this.currentTank = this.battlefield.getTanks()[this.currentTankId].getController();
    }

    shoot(e) {
        if(e.keyCode == KeyCodes.ENTER && this.buttonNotPressed ) {
            this.buttonNotPressed = false;
            const getBullet = new Promise((resolve, reject) => {
                this.bulletView = this.currentTank.createBullet();
                if (this.bulletView){
                resolve((this.moveAndTrackBullet()
                ));
                } else{
                reject(alert("Something went awry"))
                }
            });
            getBullet.then(
                result => this.currentTank.getTank().setPos(new Position(this.currentTank.getTank().getxStart(), this.currentTank.getTank().getyStart()))
            ).then(
                result => this.nextTurn()
            ).then(
                result => this.buttonNotPressed = !result
            );
        }

    }

    async moveAndTrackBullet(){
        let hitSomething = this.bulletView.getController().moveBullet();
        let hitTank = false;
        let hitGround = false;
        
        do{ 
            
            let currentPos = this.bulletView.getController().getBullet().getPos();
            hitSomething.then(
                result => hitSomething = result
            );
            
            for (let i = 0; i<= this.tankViewList.length - 1; i++){
                let bulletElem = document.getElementsByClassName("bullet")[0];
                let tank = this.tankViewList[i].getController().getTank();
                let tankElem = document.getElementById(tank.getName());
                let tankPos = tank.getPos();
                let xPos = currentPos.getX();
                let mapPos = new Position(this.groundCords[xPos][0], this.groundCords[xPos][1]);
                console.log(mapPos);
                
                hitTank = this.isCollide(currentPos, tankPos, TankParams);
                hitGround = this.isCollide(currentPos, mapPos, GroundElement);
                
                if (hitTank){
                    hitSomething = hitTank;
                    tankElem.parentNode.removeChild(tankElem);
                    bulletElem.parentNode.removeChild(bulletElem);
                    delete this.bulletView;
                    this.tankViewList.splice(i, 1)         
                    break;
                }
            }
            
            
            await this.sleep(20);
        }while(!hitSomething)
        
        
    }

    isCollide(bulletPos, obj, ObjectParams) {
        return !(
            ((bulletPos.getY() + BulletParams.HEIGHT) < (obj.getY())) ||
            (bulletPos.getY() > (obj.getY() + ObjectParams.HEIGHT)) ||
            ((bulletPos.getX() + BulletParams.WITDH) < obj.getX()) ||
            (bulletPos.getX() > (obj.getX() + ObjectParams.WITDH))
        );
    }


    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

