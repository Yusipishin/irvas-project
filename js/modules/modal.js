// Error: при нажатии на кнопку вызова другого модального окна,
// окно с '.header_btn' в любом случае появится через setTimeout()

function modal(modalSelector, clickSelector, modalTimerId) {
  const modalBox = document.querySelector(modalSelector),
        clickElem = document.querySelectorAll(clickSelector),
        closeElem = document.querySelectorAll('.popup_close');

  let modalTimer
  if (clickSelector === '.header_btn') {
    modalTimer = setTimeout(showModal, modalTimerId);
  }

  clickElem.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      showModal();
    });
  })

  function closeModal() {
    modalBox.classList.remove('show')
    document.body.style.overflow = '';
  }

  function showModal() {
    modalBox.classList.add('show')
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimer)
  }

  closeElem.forEach(item => {
    item.addEventListener('click', () => {
      closeModal();
    });
  });

  modalBox.addEventListener('click', event => {
    if (event.target.classList.contains(modalSelector.slice(1))) {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modalBox.classList.contains('show')) {
      closeModal();
    }
  })

}

export default modal;