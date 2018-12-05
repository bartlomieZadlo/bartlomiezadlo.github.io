export class TankView {
    constructor(tankController) {
        this.tankController = tankController;
        this.tankElement = this.createTankElement();
        this.registerEventListeners();
    }

    render() {
        let name = this.tankController.tank.getName();
        let positionLeft = this.tankController.tank.getPos().getX();
        return `
        <div class="tank" id="${name}" style="left: ${positionLeft}px; top: calc(100% - 40px)"></div>
        `
    }

    createTankElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners() {
        this.tankElement.addEventListener("click", this.tankController.shoot.bind(this.tankController));
        document.addEventListener("keydown", this.tankController.changeShotParams.bind(this.tankController), false);
    }

}
