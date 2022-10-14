const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  }
});
