import forms from "./forms";

function calc() {
  const prevPictures = document.querySelectorAll('.balcon_icons_img'),
        bigPicture = document.createElement('img'),
        parentBlock = document.querySelectorAll('.big_img img'),
        formsControl = document.querySelectorAll('.form-control'),
        reg = /\d/g;
// do_image_more
    prevPictures.forEach((picture, i) => {
      picture.addEventListener('click', () => {
        prevPictures.forEach(img => {
          if (img.classList.contains('do_image_more')) {
            img.classList.remove('do_image_more')
          }
        })
        picture.classList.add('do_image_more')
        bigPicture.setAttribute('src', `${picture.firstElementChild.getAttribute('src')}`)
        parentBlock.forEach(item => {
          if (item.style.display === 'block') {
            item.style.display = 'none';
          }
        })
        parentBlock[i].style.cssText = `
          display: block;
          margin: 0 auto;
        `;
    })
  })

  // const calcBtn = document.querySelector('.popup_calc_button')
  // calcBtn.addEventListener('click', () => {
  //   if (!reg.test(formsControl[0].value) || !reg.test(formsControl[1].value)) {
  //     if (!reg.test(formsControl[0].value) && !reg.test(formsControl[1].value)) {
  //       formsControl[0].style.border = '1px solid red';
  //       formsControl[1].style.border = '1px solid red';
  //     } else if (!reg.test(formsControl[0].value)) {
  //       formsControl[0].style.border = '1px solid red';
  //     } else {
  //       formsControl[1].style.border = '1px solid red';
  //     }
  //   } else {
  //     formsControl[0].style.border = '';
  //     formsControl[1].style.border = '';
  //   }
  // })
  
}

export default calc;