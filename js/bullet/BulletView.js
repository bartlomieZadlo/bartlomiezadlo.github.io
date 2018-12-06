export class BulletView{

    constructor(bulletController){
        this.controller = bulletController;
        this.element = this.createBulletElement();
    }

    render() {
        let positionLeft = this.controller.bullet.getPos().getX();
        let positionTop = this.controller.bullet.getPos().getY();
        return `<div class="bullet" style="left: ${positionLeft}px; top: ${positionTop}px;">
                </div>`;
    }

    createBulletElement() {
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    getController(){
        return this.controller;
    }
}
