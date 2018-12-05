"use-strict";

import {TankController} from "./tank/TankController.js";
import {Position} from "./position/Position.js";
import {TankView} from "./tank/TankView.js";
import {Tank} from "./tank/Tank.js"; 
import {Battlefield} from "./battlefield/Battlefield.js";
import {BattlefieldController} from "./battlefield/BattlefieldController.js";
import {BattlefieldView} from "./battlefield/BattlefieldView.js";


export const gravityAcceleration = 9.8;

export const KeyCodes = {
    LEFT:   37,
    UP:     38,
    RIGHT:  39,
    DOWN:   40
  };

let tankPosition = new Position(0,0);
let tank = new Tank("franek", tankPosition);
let franekControler = new TankController(tank);
let franekView = new TankView(franekControler);
let newBattlefield = new Battlefield(franekControler);
let battlefieldController = new BattlefieldController(newBattlefield);
let battlefieldView = new BattlefieldView(battlefieldController);
document.body.appendChild(battlefieldView.battlefieldElement);
document.getElementById("battlefield").appendChild(franekView.tankElement);
document.getElementById("battlefield-interface").appendChild(battlefieldView.battlefieldInterfaceElement);


