let searchBtn = document.querySelector('.header-search__btn');
let searchCont = document.querySelector('.search__container');
let closeSearchBtn = document.querySelector('.close-search__btn')

searchBtn.addEventListener('click', function () {
  searchCont.classList.add('search__container--active'),
  searchBtn.classList.add('header-search__btn--hidden')
});

closeSearchBtn.addEventListener('click', function () {
  searchCont.classList.remove('search__container--active'),
  searchBtn.classList.remove('header-search__btn--hidden')
});
