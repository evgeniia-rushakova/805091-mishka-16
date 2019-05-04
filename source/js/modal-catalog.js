      var modal = document.querySelector('.modal');
      var buttons = document.querySelectorAll('.main-catalog__item__button');
      var overlay = document.querySelector('.overlay');
      for (var i=0; i <= buttons.length; i++){
      var button = buttons[i];
      button.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
      overlay.classList.add("overlay-show");
      });
      var addButton = modal.querySelector('.modal__add');
      addButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      });

      window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      }
      }
      });}
