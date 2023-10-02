const input = document.querySelector('input');
const btn = document.getElementById('btn');

let flag = false;

btn.addEventListener('click', () => {
    if (!flag) {
        btn.style.transform = 'translateX(0)';
        input.style.width = '20rem';
        input.focus();
        flag = true;
    }
    else {
        btn.style.transform = 'translateX(-3rem)';
        input.style.width = '0';
        flag = false;
    }
});