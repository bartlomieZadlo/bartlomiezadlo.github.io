
"use-strict";
import {Ground} from "./battlefield/Ground.js";
import {TankController} from "./tank/TankController.js";
import {Position} from "./position/Position.js";
import {TankView} from "./tank/TankView.js";
import {Tank} from "./tank/Tank.js"; 
import {Battlefield} from "./battlefield/Battlefield.js";
import {BattlefieldController} from "./battlefield/BattlefieldController.js";
import {BattlefieldView} from "./battlefield/BattlefieldView.js";

let battlefieldView;



const prepareBattlefield = new Promise((resolve, reject) => {
    let tankViewList = new Array();
    tankViewList.push(createTank(300, 0, "bob"))
    tankViewList.push(createTank(180, 0, "Franek"))

    battlefieldView = createBattlefield(tankViewList);
    document.body.appendChild(battlefieldView.battlefieldElement);
    
    let ground = new Ground("1*x");
    let groundCords = ground.getCordsArray();

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

function createTank(xPos, Ypos, name){
    let tankPosition = new Position(xPos, Ypos);
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
