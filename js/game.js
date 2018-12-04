"use-strict";

let battleField = document.getElementById("battlefield");
let bullet = document.getElementsByClassName("bullet")[0];
battleField.addEventListener("click", testShoot);


function testShoot(event) {
    let x = bullet.offsetLeft;
    let interval = setInterval((x) => {
        x = bullet.offsetLeft;
        bullet.style.display = "block";
        bullet.style.left = x + 10 + "px";
        if (x > 1000) {
            clearInterval(interval);
            hideBullet();
        }
    }, 20);
}

function hideBullet() {
    bullet.style.left = "100%";
    bullet.style.display = "none";
}

