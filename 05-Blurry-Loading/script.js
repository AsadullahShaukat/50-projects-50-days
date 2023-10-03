const image = document.getElementById('image');
const percentage = document.getElementById('percentage-container');

let val = 1;
let opacityValue = 1;
let filterValue = 20;

let id = setInterval(() => {
    if (val === 100) {
        clearInterval(id);
    }
    else {
        val++;
        percentage.textContent = `${val}%`;

        opacityValue = opacityValue - 0.01;
        percentage.style.opacity = `${opacityValue}`;

        filterValue = filterValue - 0.2;
        image.style.filter = `blur(${filterValue}px)`;
    }
}, 25);