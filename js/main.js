require('es6-promise').polyfill();
import 'polyfill-nodelist-foreach';

import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  slider({
    container: '.glazing_slider',
    decorContainer: '.decoration_slider',
    prevArrow: '<button class="prev arrow"></button>',
    nextArrow: '<button class="next arrow"></button>',
  });
});