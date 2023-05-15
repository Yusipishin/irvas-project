import {postData} from '../services/services'
import {closeModal} from './modal';

function forms() {
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'Отправка данных...',
    success: 'Спасибо. Мы скоро с Вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(form => {
    bindPostData(form);
  });

  function bindPostData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault(); // not working

      const statusMessage = document.createElement('div');
      statusMessage.textContent = message.loading;
      statusMessage.style.cssText = `
        margin: -25px 0 25px 0;
        text-align: center;
        `
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      // {"user_name":"erg","user_phone":"345"}

      // postData('assets/server.php', json)
      postData('http://localhost:3000/requests', json)
      .then(data => {
        console.log(data);
        statusMessage.remove();
        showThanksModal(message.success, form);
      }).catch(() => {
        statusMessage.remove();
        showThanksModal(message.failure, form)
      }).finally(() => {
        form.reset();
      })
    })
  }

  function showThanksModal(message, form) {
    const messageParent = form.parentNode,
          messageBox = document.createElement('span');
    
    messageBox.style.cssText = `
      display: block;
      background: #fff;
      border-radius: 1rem;
      font-size: 1.7rem;
      font-weight: 700;
      padding: 30px 10px;
      text-align: center;
    `;
    messageBox.textContent = message;

    form.classList.add('hide');
    messageParent.insertAdjacentElement('afterbegin', messageBox);

    setTimeout(() => {
      if (messageBox) {
        messageBox.remove()
      }
      form.classList.remove('hide');
      closeModal('.popup_engineer')
      closeModal('.popup')
    }, 3000)
  };
}

export default forms;