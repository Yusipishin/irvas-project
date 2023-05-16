// Error: при нажатии на кнопку вызова другого модального окна,
// окно с '.header_btn' в любом случае появится через setTimeout()

// доработать валидацию номера телефона

function closeModal(modalSelector) {
  document.querySelector(modalSelector).classList.remove('show')
  document.body.style.overflow = '';
};

function showModal(modalSelector, modalTimerId) {
  const modalBox = document.querySelector(modalSelector)
  modalBox.classList.add('show')
  document.body.style.overflow = 'hidden';
  if (modalTimerId) {
    clearInterval(modalTimerId)
  }
};

function modal(modalSelector, clickSelector, modalTimerId) {
  const modalBox = document.querySelector(modalSelector),
        clickElem = document.querySelectorAll(clickSelector),
        closeElem = document.querySelectorAll('.popup_close');

  let modalTimer
  if (clickSelector === '.phone_link') { //костыль
    modalTimer = setTimeout(() => showModal(modalSelector, modalTimer), modalTimerId);
  }

  clickElem.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      showModal(modalSelector, modalTimer);
    });
  });

  closeElem.forEach(item => {
    item.addEventListener('click', () => {
      closeModal(modalSelector);
    });
  });

  modalBox.addEventListener('click', event => {
    if (event.target.classList.contains(modalSelector.slice(1))) {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modalBox.classList.contains('show')) {
      closeModal(modalSelector);
    }
  })

}

export default modal;
export {closeModal, showModal};