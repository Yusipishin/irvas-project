function photos(photoBox) {
  const photoBlock = document.querySelector(photoBox),
        backgroundImage = document.createElement('div'),
        bigImage = document.createElement('img');

  backgroundImage.classList.add('popup', 'show')
  bigImage.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  `;
  
  photoBlock.addEventListener('click', (event) => {
    event.preventDefault();
    const photo = event.target;
    console.log(photo)
    console.log(photo.getAttribute('data-photo'))
    if (photo.tagName === 'IMG') {
      bigImage.setAttribute('src', `${photo.getAttribute('src')}`)

      backgroundImage.insertAdjacentElement('afterbegin', bigImage)
      photoBlock.insertAdjacentElement('afterbegin', backgroundImage)

      document.body.style.overflow = 'hidden';

      backgroundImage.addEventListener('click', (event) => {
        if (event.target.tagName !== 'IMG') {
          document.body.style.overflow = '';
          backgroundImage.remove();
        }
      })
    }
  })
}

export default photos;