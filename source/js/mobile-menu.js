var navMain = document.querySelector('.main-nav__mobile-wrapper');
      var navToggle = document.querySelector('.main-nav__toggle');


      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav__mobile-wrapper--closed')) {
          navMain.classList.remove('main-nav__mobile-wrapper--closed');
          navMain.classList.add('main-nav__mobile-wrapper--opened');
        } else {
          navMain.classList.add('main-nav__mobile-wrapper--closed');
          navMain.classList.remove('main-nav__mobile-wrapper--opened');
        }
      });
