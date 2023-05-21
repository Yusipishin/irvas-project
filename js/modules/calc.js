import modal from "./modal";
import {showModal, closeModal} from "./modal";

function calc() {
  const prevPictures = document.querySelectorAll('.balcon_icons_img'),
        bigPicture = document.createElement('img'),
        parentBlock = document.querySelectorAll('.big_img img');

  let checkImg = false, balcony;

  prevPictures.forEach((picture, i) => {
    picture.addEventListener('click', () => {
      balcony = picture.firstElementChild.getAttribute('alt')
      prevPictures.forEach(img => {
        if (img.classList.contains('do_image_more')) {
          img.classList.remove('do_image_more')
        }
      })
      picture.classList.add('do_image_more')
      bigPicture.setAttribute('src', `${picture.firstElementChild.getAttribute('src')}`)
      parentBlock.forEach(item => {
        if (item.style.display === 'block') {
          item.style.display = '';
        }
      })
      parentBlock[i].style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      checkImg = true;
    })
  })

  const calcBtn = document.querySelector('.popup_calc_button'),
        profileBtn = document.querySelector('.popup_calc_profile_button'),
        widthInput = document.querySelector('#width'),
        heightInput = document.querySelector('#height'),
        checkGlazing = document.querySelectorAll('#cold, #warm'),
        typeGlazing = document.querySelector('#view_type');

  let width, height;

  function showNewModal(prevModalSelector, newModalSelector, clickModalSelector) {
    closeModal(prevModalSelector)
    showModal(newModalSelector)
    modal(newModalSelector, clickModalSelector)
  }

  calcBtn.addEventListener('click', () => {
    width = widthInput.value;
    height = heightInput.value;
    if (width && height && checkImg) {
      showNewModal('.popup_calc', '.popup_calc_profile', '.popup_calc_button')
    } else {
      console.log(false)
    }
  })

  let textType, countChecked = 0;

  profileBtn.addEventListener('click', () => {
    textType = typeGlazing.options[typeGlazing.selectedIndex].text;

    checkGlazing.forEach((checkbox) => {
      let styleBefore = window.getComputedStyle(document.querySelector(`#${checkbox.getAttribute('id')}`), ':before').getPropertyValue('display')
      if (styleBefore === 'block') {
        countChecked += 1
      }
    })
    
    if (countChecked === 1) {
      // console.log('Вы выбрали одно значение')
      showNewModal('.popup_calc_profile', '.popup_calc_end', '.popup_calc_profile_button')
    } else {
      // console.log('ВЫБЕРИ ОДНО ЗНАЧЕНИЕ')
    }
    countChecked = 0;

    const data = {
      typeBalcony: balcony,
      width: width,
      height: height,
      typeGlazing: textType
    }
  })
}

export default calc;