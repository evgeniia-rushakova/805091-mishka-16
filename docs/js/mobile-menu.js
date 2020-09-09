var navMain = document.querySelector('.main-nav__mobile-wrapper');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__mobile-wrapper--no-js');
navMain.classList.remove('main-nav__mobile-wrapper--opened');
navMain.classList.add('main-nav__mobile-wrapper--closed');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__mobile-wrapper--closed')) {
    navMain.classList.remove('main-nav__mobile-wrapper--closed');
    navMain.classList.add('main-nav__mobile-wrapper--opened');
  } else {
    navMain.classList.add('main-nav__mobile-wrapper--closed');
    navMain.classList.remove('main-nav__mobile-wrapper--opened');
  }
});
