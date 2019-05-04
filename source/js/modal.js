      var modal = document.querySelector('.modal');
      var button = document.querySelector('.promo__buy');
      var overlay = document.querySelector('.overlay');
      var form = document.querySelector('.modal-form');


      button.addEventListener("click", function (evt) {
      evt.preventDefault();
      overlay.classList.add("overlay-show");
      modal.classList.add("modal-show");
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
      });
