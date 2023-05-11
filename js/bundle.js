/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(_ref) {
  let {
    container,
    decorContainer,
    prevArrow,
    nextArrow
  } = _ref;
  $(document).ready(function () {
    $(container).slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          slidesToScroll: 1
        }
      }]
    });
    $(decorContainer).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          prevArrow: prevArrow,
          nextArrow: nextArrow,
          slidesToScroll: 1
        }
      }]
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'es6-promise'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
impo;

window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: '.glazing_slider',
    decorContainer: '.decoration_slider',
    prevArrow: '<button class="prev arrow"></button>',
    nextArrow: '<button class="next arrow"></button>'
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map