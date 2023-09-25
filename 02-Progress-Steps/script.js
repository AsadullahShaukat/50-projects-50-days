'use strict';

const circles = document.querySelectorAll('.circle');
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const progressBar = document.getElementById('progress');


let currentActive = 1;

nextBtn.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prevBtn.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});


function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active-circle');
        }
        else {
            circle.classList.remove('active-circle');
        }

        if (currentActive > 3) {
            nextBtn.classList.add('disabled');
        }
        else {
            prevBtn.classList.remove('disabled');
            prevBtn.classList.add('active-btn');
        }

        if (currentActive <= 3) {
            nextBtn.classList.add('active-btn');
            nextBtn.classList.remove('disabled');
        }
        if (currentActive <= 1) {
            prevBtn.classList.add('disabled');
            prevBtn.classList.remove('active-btn');
        }
        const actives = document.querySelectorAll('.active-circle');
        progressBar.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`;
    })
}