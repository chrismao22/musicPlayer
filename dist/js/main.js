/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.less":
/*!***************************!*\
  !*** ./src/css/main.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/class/Mediar.js":
/*!********************************!*\
  !*** ./src/js/class/Mediar.js ***!
  \********************************/
/*! exports provided: Mediar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mediar", function() { return Mediar; });
class Mediar {
    constructor() {
        this.stats = 'pause';
        this.audio = new Audio();
    }
    play(){
        this.audio.play(); 
        this.stats = 'play';
    }
    pause(){
        this.audio.pause();
        this.stats = 'pause';
    }
    getAudio(src){
        this.audio.src = src;
        this.audio.load();
    }
}

/***/ }),

/***/ "./src/js/event/bottomControl.js":
/*!***************************************!*\
  !*** ./src/js/event/bottomControl.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ "./src/js/utils/getData.js");
/* harmony import */ var _page_append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/append */ "./src/js/page/append.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/random */ "./src/js/utils/random.js");
/* harmony import */ var _class_Mediar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/Mediar */ "./src/js/class/Mediar.js");
/* harmony import */ var _utils_getCookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getCookie */ "./src/js/utils/getCookie.js");





const mediar = new _class_Mediar__WEBPACK_IMPORTED_MODULE_3__["Mediar"]();
let data = null;
let index = Object(_utils_random__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 5);
let curTime = null;
let curTimeM = null;
let curTimeS = null;
let percent = null;
Object(_utils_getData__WEBPACK_IMPORTED_MODULE_0__["default"])('./data.json').then(resp => {
    data = resp;
    Object(_page_append__WEBPACK_IMPORTED_MODULE_1__["default"])(data[index]);
    mediar.getAudio(data[index].audio);
    // mediar.audio.currentTime = 270;
})
const likeButton = $('.like');
const prevButton = $('.prev');
const playButton = $('.play');
const nextButton = $('.next');
const listButton = $('.list');
const imgBox = $('.img_box img');
const startTime = $('.start_time_box');
const lineBox = $('.line_box_top');
const controlBox = $('.line_box_bottom');
const circleControl = $('.line_box_top_circle');
let timer = null;
let deg = 0;
let lineTimer = null;
let lineTimer2 = null;
prevButton.on('click', () => {
    if (index === 0) {
        Object(_page_append__WEBPACK_IMPORTED_MODULE_1__["default"])(data[4]);
        index = 4;
    } else {
        Object(_page_append__WEBPACK_IMPORTED_MODULE_1__["default"])(data[--index]);
    }
    mediar.getAudio(data[index].audio);
    judgeJump(mediar);
})
nextButton.on('click', () => {
    if (index === 4) {
        Object(_page_append__WEBPACK_IMPORTED_MODULE_1__["default"])(data[0]);
        index = 0;
    } else {
        Object(_page_append__WEBPACK_IMPORTED_MODULE_1__["default"])(data[++index]);
    }
    mediar.getAudio(data[index].audio);
    judgeJump(mediar);
})
likeButton.on('click', () => {
    if (Object(_utils_getCookie__WEBPACK_IMPORTED_MODULE_4__["default"])(data[index].id)) {
        if (Object(_utils_getCookie__WEBPACK_IMPORTED_MODULE_4__["default"])(data[index].id) === 'like') {
            document.cookie = `${data[index].id}=unlike`
            likeButton.addClass('unlike');
            likeButton.removeClass('liking');
        } else {
            document.cookie = `${data[index].id}=like`;
            likeButton.removeClass('unlike');
            likeButton.addClass('liking');
        }
    } else {
        if (data[index].isLike) {
            likeButton.addClass('unlike');
            likeButton.removeClass('liking');
            document.cookie = `${data[index].id}=unlike`
        } else {
            likeButton.removeClass('unlike');
            likeButton.addClass('liking');
            document.cookie = `${data[index].id}=like`
        }
    }
})
playButton.on('click', () => {
    judgePlaying(mediar)
})
listButton.on('click', () => {

})
function judgePlaying(mediar) {
    if (mediar.stats === 'pause') {
        lineControl();
        turn();
        mediar.play();
        playButton.removeClass('pause');
        playButton.addClass('playing');
    } else {
        clearInterval(timer);
        clearInterval(lineTimer);
        clearInterval(lineTimer2);
        mediar.pause();
        playButton.removeClass('playing');
        playButton.addClass('pause');
    }
}

function judgeJump(mediar) {
    reTurn();
    deg = 0;
    startTime.text(`00:00`);
    lineBox.css({
        'width': `2%`
    });
    if (mediar.stats === 'pause') {
        mediar.pause();
        playButton.removeClass('playing');
        playButton.addClass('pause');
    } else {
        mediar.play();
        playButton.removeClass('pause');
        playButton.addClass('playing');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        playButton.trigger('click');
    }
    if (e.code === "ArrowRight") {
        nextButton.trigger('click');
    }
    if (e.code === "ArrowLeft") {
        prevButton.trigger('click');
    }
})

function turn() {
    timer = setInterval(() => {
        deg++;
        imgBox.css({
            'transform': `rotateZ(${deg}deg)`,
            'transition': 'all 0.1s'
        })
    }, 100);
}

function reTurn() {
    imgBox.css({
        'transform': `rotateZ(0deg)`,
        'transition': 'all 0s'
    })
}

function lineControl() {
    lineTimer = setInterval(() => {
        curTime = Math.floor(mediar.audio.currentTime);
        timeUpdate(curTime);
    }, 500);
    lineTimer2 = setInterval(() => {
        curTime = Math.floor(mediar.audio.currentTime);
        domUpdate(curTime);
    }, 500);
}
function timeUpdate(curTime) {
    if (curTime > 9) {
        if (curTime > 60) {
            curTimeM = Math.floor(curTime / 60);
            curTimeS = (curTime - curTimeM * 60);
            if (curTimeS > 9) {
                startTime.text(`0${curTimeM}:${curTimeS}`);
            } else {
                startTime.text(`0${curTimeM}:0${curTimeS}`);
            }
        } else if (curTime === 60) {
            startTime.text(`01:00`);
        } else {
            startTime.text(`00:${curTime}`);
        }
    } else {
        startTime.text(`00:0${curTime}`);
    }
}
function domUpdate(curTime) {
    if (curTime === data[index].duration) {
        nextButton.trigger('click');
        return;
    }
    lineBox.css({
        'width': `${Math.floor(curTime / data[index].duration * 100) + 2 + '%'}`
    })
}

circleControl.on('touchstart', (e) => {
    clearInterval(lineTimer2);
}).on('touchmove', (e) => {
    percent = Math.floor((e.changedTouches[0].clientX - controlBox.offset().left) / controlBox.offset().width * 100);
    if (percent >= 0 && percent <= 100) {
        lineBox.css({
            'width': `${percent}%`
        })
    }
}).on('touchend', (e) => {
    if(percent >= 0 && percent <= 100){
        mediar.audio.currentTime = Math.floor(data[index].duration * percent / 100);
    }else if(percent < 0 ) {
        mediar.audio.currentTime = 0;
    }else{
        mediar.audio.currentTime = data[index].duration;
    }
    if (mediar.stats === 'pause') {
        mediar.getAudio(data[index].audio);
        lineControl();
        turn();
        mediar.play();
        playButton.removeClass('pause');
        playButton.addClass('playing');
    }else{
        mediar.play();
    }
})

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.less */ "./src/css/main.less");
/* harmony import */ var _css_main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_bottomControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/bottomControl */ "./src/js/event/bottomControl.js");



/***/ }),

/***/ "./src/js/page/append.js":
/*!*******************************!*\
  !*** ./src/js/page/append.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return information; });
/* harmony import */ var _utils_radomColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/radomColor */ "./src/js/utils/radomColor.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/random */ "./src/js/utils/random.js");
/* harmony import */ var _utils_getCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getCookie */ "./src/js/utils/getCookie.js");



const imgBox = $('.img_box img');
const nameBox = $('.name_box');
const starBox = $('.star_box');
const albumBox = $('.album_box');
const buttonLike = $('.button_box.like');
const endTime = $('.end_time_box');
const wrapper = $('.wrapper');
function information(data) {
    console.log(data);
    const color = Object(_utils_radomColor__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_utils_random__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 6));
    appendImg(data.image);
    appendInfo(data.song, data.singer, data.album);
    appendFavior(data);
    appendTime(data.duration);
    wrapper.css('top');
    wrapper.css({
        "background-image": `linear-gradient(to right bottom, ${color.color1}, ${color.color2});`
    });
}
function appendImg(src) {
    const img = new Image();
    img.src = src;
    imgBox.attr('src', src);
}
function appendInfo(name, star, album) {
    nameBox.text(name);
    starBox.text(star);
    albumBox.text(album);
}
function appendFavior(data) {
    if (Object(_utils_getCookie__WEBPACK_IMPORTED_MODULE_2__["default"])(data.id)) {
        if (Object(_utils_getCookie__WEBPACK_IMPORTED_MODULE_2__["default"])(data.id) === 'like') {
            buttonLike.removeClass('unlike');
            buttonLike.addClass('liking');
        } else {
            buttonLike.addClass('unlike');
            buttonLike.removeClass('liking');
        }
    } else {
        if (data.isLike) {
            buttonLike.removeClass('unlike');
            buttonLike.addClass('liking');
        } else {
            buttonLike.addClass('unlike');
            buttonLike.removeClass('liking');
        }
    }
}
function appendTime(time) {
    let minute = parseInt(time / 60);
    let second = time % 60;
    if (minute < 10) {
        minute = `0${minute}`;
    }
    if (second < 10) {
        second = `0${second}`;
    }
    endTime.text(`${minute}:${second}`);
}

/***/ }),

/***/ "./src/js/utils/getCookie.js":
/*!***********************************!*\
  !*** ./src/js/utils/getCookie.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCookie; });
function getCookie(id) {
    const arr1 = document.cookie.replace(/\s+/g,'').split(";");
    for (const item of arr1) {
        const arr2 = item.split('=')
        if(parseInt(arr2[0]) === id){
            return arr2[1];
        }
    }
    return false;
}

/***/ }),

/***/ "./src/js/utils/getData.js":
/*!*********************************!*\
  !*** ./src/js/utils/getData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getData; });
async function getData(url) {
    return await fetch(url).then(resp => {
        return resp.json();
    })
}


/***/ }),

/***/ "./src/js/utils/radomColor.js":
/*!************************************!*\
  !*** ./src/js/utils/radomColor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return randomColor; });
const colorArr1 = ["#f2639", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
const colorArr2 = ["#62efab", "#f2639", "#80e3f7", "#ef7658", "#d781f9", "#ffe868"];
function randomColor(randomNum) {
    return {
        color1: colorArr1[randomNum],
        color2: colorArr2[randomNum]
    }
}

/***/ }),

/***/ "./src/js/utils/random.js":
/*!********************************!*\
  !*** ./src/js/utils/random.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return random; });
function random(min, max) {
    return Math.floor(Math.random(0, 1) * (max - min) + min);
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map