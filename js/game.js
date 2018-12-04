"use-strict";

import {TankController} from "./tank/TankController.js";
import {Position} from "./position/Position.js";
import {TankView} from "./tank/TankView.js";
import {Tank} from "./tank/Tank.js";

let tankPosition = new Position(0,0);
let tank = new Tank("franek", tankPosition);
let franekControler = new TankController(tank);
let franekView = new TankView(franekControler);
document.getElementById("battlefield").appendChild(franekView.tankElement);


