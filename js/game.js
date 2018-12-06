
"use-strict";
import {Ground} from "./battlefield/Ground.js";
import {TankController} from "./tank/TankController.js";
import {Position} from "./position/Position.js";
import {TankView} from "./tank/TankView.js";
import {Tank} from "./tank/Tank.js"; 
import {Battlefield} from "./battlefield/Battlefield.js";
import {BattlefieldController} from "./battlefield/BattlefieldController.js";
import {BattlefieldView} from "./battlefield/BattlefieldView.js";
import { TankParams } from "./Constants.js";

let battlefieldView;



const prepareBattlefield = new Promise((resolve, reject) => {
    let ground = new Ground("(-1)*x+500");
    let groundCords = ground.getCordsArray();
    let tankViewList = new Array();
    tankViewList.push(createTank(300, groundCords, "bob"))
    tankViewList.push(createTank(180, groundCords, "Franek"))
    
    

    battlefieldView = createBattlefield(tankViewList);

   
    
    document.body.appendChild(battlefieldView.battlefieldElement);
    
    

    for (let i = 0; i <= groundCords.length -1; i++){
        let xPos = groundCords[i][0];
        let yPos = groundCords[i][1];
        let groundElementPosition = new Position(xPos,yPos)
        document.getElementById("battlefield").appendChild(battlefieldView.getGroundElement(groundElementPosition));
    }

    

    if (battlefieldView){
    resolve((printBfield(tankViewList, battlefieldView))
    );
    } else{
    reject(alert("dupa"))
    }
});

document.addEventListener("keydown", renderInterface)

function renderInterface(e) {
    document.getElementById("top-bar").remove();
    document.getElementById("battlefield-interface").appendChild(battlefieldView.battlefieldInterfaceElement);
}

function printBfield(tankViewList, battlefieldView){
    for (let i = 0; i <= tankViewList.length -1; i++ ){
        document.getElementById("battlefield").appendChild(tankViewList[i].tankElement);
    }
    document.getElementById("battlefield-interface").appendChild(battlefieldView.battlefieldInterfaceElement)
}

function createTank(xPos, groundCords, name){
    let yPos;
    try{
        yPos = groundCords[xPos][1] - 1.5 * TankParams.HEIGHT;
    }catch(error){
        yPos = 0;
    }
    if(yPos > 500 - TankParams.HEIGHT || yPos == 0){
        yPos = 500 - TankParams.HEIGHT;
    }
    let tankPosition = new Position(xPos, yPos);
    let tank = new Tank(name, tankPosition);
    let tankController = new TankController(tank);
    return new TankView(tankController)
    
}

function createBattlefield(tankViewList){
    let newBattlefield = new Battlefield(tankViewList);
    let battlefieldController = new BattlefieldController(newBattlefield);
    let battlefieldView = new BattlefieldView(battlefieldController);
    return battlefieldView;
}
