

export class BattlefieldView {
    constructor(battlefieldController) {
        this.battlefieldController = battlefieldController;
        
        this.updateInterfaceElements();
        this.addEventListeners();
        
    }

    renderBattlefield() {
        return `
        <div id="battlefield-interface">
            <div id="battlefield">
            </div>
        </div>
        `
    }

    renderGround(singlePosition){
        let positionLeft = singlePosition.getX();
        let positionTop = singlePosition.getY();
        return `
        <div class="mountain" style="left: ${positionLeft}px; top: ${positionTop}px; height:${500 - positionTop}px"></div>
        `
    }


    renderInterface() {
        let currentTank = this.battlefieldController.getCurrentTank();
        let currentTankAngle = currentTank.getShotParameters().getAngle();
        let currentTankPower = currentTank.getShotParameters().getPower();
        let currentTankName = currentTank.tank.getName();
        return `
        <div id="top-bar">
            <div class="shot-parameters">
                <h3>Angle: ${currentTankAngle}</h3>
                <h3>Power: ${currentTankPower}</h3>
            </div>
            <div class="tank-name"> 
                <h3>Name: ${currentTankName}</h3>
            </div>
        </div>
        `
    }


    getGroundElement(position){
        let element = document.createElement("template");
        element.innerHTML = this.renderGround(position).trim();
        return element.content.firstChild;
    }

    getBattlefieldElement() {
        let element = document.createElement("template");
        element.innerHTML = this.renderBattlefield().trim();
        return element.content.firstChild;
    }

    getBattlefieldInterfaceElement() {
        let element = document.createElement("template");
        element.innerHTML = this.renderInterface().trim();
        return element.content.firstChild;
    }

    updateInterfaceElements() {
        this.battlefieldElement = this.getBattlefieldElement();
        this.battlefieldInterfaceElement = this.getBattlefieldInterfaceElement();
    }

    addEventListeners() {
        document.addEventListener("keydown", this.updateInterfaceElements.bind(this));
        document.addEventListener("keypress", this.battlefieldController.shoot.bind(this.battlefieldController));

    }

    getController(){
        return this.battlefieldController;
    }
}