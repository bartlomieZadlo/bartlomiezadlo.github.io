export class TankView {
    constructor(tankController) {
        this.tankController = tankController;
        this.tankElement = this.createTankElement();
    }

    render() {
        let name = this.tankController.tank.getName();
        let positionLeft = this.tankController.tank.getPos().getX();
        let positionTop = this.tankController.tank.getPos().getY();
        
        return `
        <div class="tank" id="${name}" style="left: ${positionLeft}px; top: ${positionTop}px">
            <div class="nametag">${name}</div>
            <div class="cannon"></div>
        </div>
        `
    }

    createTankElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    getController(){
        return this.tankController;
    }

    // renderTank() {
    //     this.tankElement = this.createTankElement();
    // }

    // addEventListeners() {
    //     document.addEventListener("keydown", this.renderTank.bind(this));
    // }
}
