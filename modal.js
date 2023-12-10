// IIFE
(() => {
  // Блок з констант де ми знайшли усі необхідні HTML елементи
  const modal = document.querySelector(".backdrop");
  const closeButton = document.querySelector(".close-button");
  const openButton = document.querySelector(".button");
  // Додали слухачі події на усі необхідні нам кнопки тобіщш кнопки закриття та відкритття модалки
  closeButton.addEventListener("click", onModal);
  openButton.addEventListener("click", onModal);

  //   modal.addEventListener("click", onModal);

  function onModal(e) {
    //   на елемент modal  за допомогою метода toggle() додаються та віднімаються стилі (is-hidden та stop-scroll)
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("stop-scroll");
  }
  // removeEventListener  дозволяє видалити  слухач події що дозволить запобігти певним багам на сторінці(некст тайм)
  //   closeButton.removeEventListener("click", onModal);
})();
