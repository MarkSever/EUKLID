let tabsBtn = document.querySelectorAll('.step__link');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('step__link--active') });
      e.currentTarget.classList.add('step__link--active');

      tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });
