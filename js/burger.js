let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.burger__menu')


burger.addEventListener('click', function() {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('burger__menu--active');

    document.body.classList.toggle('stop-scroll');
})
