const header = document.querySelector('header');
const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const main = document.querySelector('main');
const sidebar = document.getElementById('sidebar-menu');


menuIcon.addEventListener('click', () => {
    header.style.transform = 'rotate(-90deg)';
    main.style.transform = 'rotate(-20deg)';
    header.style.position = 'absolute';
    sidebar.style.left = '0';
    sidebar.style.transitionDelay = '0.3s';
    sidebar.style.transitionDuration = '0.7s';
});

closeIcon.addEventListener('click', () => {
    header.style.transform = 'rotate(0deg)';
    main.style.transform = 'rotate(0deg)';
    header.style.position = 'fixed';
    sidebar.style.left = '-17rem';
    sidebar.style.transitionDelay = '0s';
    sidebar.style.transitionDuration = '0.3s';
});