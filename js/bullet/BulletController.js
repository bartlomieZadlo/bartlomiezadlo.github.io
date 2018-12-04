export class BulletController{
    constructor(bulletObject){
        this.bullet = bulletObject;      
    }

    moveBullet() {
        let bulletElem = document.getElementsByClassName("bullet")[0];
        let x = bulletElem.offsetLeft + 100;
        let interval = setInterval((x) => {
            x = bulletElem.offsetLeft;
            bulletElem.style.display = "block";
            bulletElem.style.left = x + 10 + "px";
            if (x > 1000) {
                clearInterval(interval);
                bulletElem.parentElement.removeChild(bulletElem);
            }
        }, 20);
    }
}
