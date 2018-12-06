export class TankView {
    constructor(tankController) {
        this.tankController = tankController;
        this.tankElement = this.createTankElement();
        this.registerEventListeners();
    }

    render() {
        let name = this.tankController.tank.getName();
        let positionLeft = this.tankController.tank.getPos().getX();
        let positionTop = this.tankController.tank.getPos().getY();
        
        return `
        <div class="tank" id="${name}" style="left: ${positionLeft}px; top: ${positionTop}px"></div>
        `
    }

    createTankElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        document.addEventListener("keydown", this.tankController.changeShotParams.bind(this.tankController));
    }

    getController(){
        return this.tankController;
    }

}
