let burger = document.querySelector('.header-burger-icon');
let menu = document.querySelector('.menu');


burger.addEventListener("click", () => {
    menu.classList.toggle('open');
});