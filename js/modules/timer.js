function timer(parentSelector, deadline) {
  const timerBlock = document.querySelector(parentSelector),
        daysBlock = timerBlock.querySelector('#days'),
        hoursBlock = timerBlock.querySelector('#hours'),
        minutesBlock = timerBlock.querySelector('#minutes'),
        secondsBlock = timerBlock.querySelector('#seconds');
        
  let time = Date.parse(deadline) - Date.parse(new Date()),
      days, hours, minutes, seconds;
  
  if (time <= 0 || !time) {
    setNullTime();
  } else {
    const timeInterval = setInterval(updateClock, 1000);
  }

  function setNullTime() {
    daysBlock.textContent = getZero(0);
    hoursBlock.textContent = getZero(0);
    minutesBlock.textContent = getZero(0);
    secondsBlock.textContent = getZero(0);
  }
  

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  function updateClock() {
    time = Date.parse(deadline) - Date.parse(new Date());
    days = Math.floor(time / (1000 * 60 * 60 * 24));
    hours = Math.floor(time / (1000 * 60 * 60) % 24);
    minutes = Math.floor(time / (1000 * 60) % 60);
    seconds = Math.floor(time / 1000 % 60);

    daysBlock.textContent = getZero(days);
    hoursBlock.textContent = getZero(hours);
    minutesBlock.textContent = getZero(minutes);
    secondsBlock.textContent = getZero(seconds);

    if (time <= 0) {
      clearInterval(timeInterval);
    }
  }
};

export default timer;