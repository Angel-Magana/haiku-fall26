// main.js

const grid = document.querySelector(".grid-container");
const divs = document.querySelectorAll(".grid-container div");

// Whole numbers (for degrees / pixels)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Decimals (for scale) — randomInt(.5, 1.2) would only ever return 0 or 1
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomize() {
    console.log(divs.length, "randomize!");

    grid.style.transform = `rotate(${randomInt(0, 360)}deg)`;

    divs.forEach(function (div) {
        let scale = randomFloat(0.5, 1.2);
        let translateX = randomInt(0, 50);
        let translateY = randomInt(0, 20);
        const rotate = randomInt(0, 360);

        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomInt(0, 80);
            translateY = randomInt(0, 80);
        }

        div.style.transform =
            `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
    });
}

document.addEventListener("click", randomize);
