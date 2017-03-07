/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Rect {
    constructor() {
        this.render();
    }
    render() {
        console.log(2);
    }
}
/* harmony default export */ __webpack_exports__["a"] = Rect;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(0);

class Editor {
    constructor(argument) {
        // code...
    }
    render(s) {
        let n = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        n.setAttribute('width', '500');
        n.setAttribute('height', '400');
        n.setAttribute('style', 'background-color: red');
        n.appendChild(s);
        document.body.appendChild(n);
    }
    pointsToPolygon(t) {
        for (var e = []; t.length >= 2;)
            e.push(t.shift() + "," + t.shift());
        return e.join(" ");
    }
    layout(t, e, i) {
        let n = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        let s = [];
        for (var o = t / 2, a = e / 2, r = 0; i > r; r++) {
            var l = o + o * Math.cos(2 * Math.PI * r / i);
            var c = a + a * Math.sin(2 * Math.PI * r / i);
            l = Math.round(10 * l) / 10;
            c = Math.round(10 * c) / 10;
            s.push(l);
            s.push(c);
            console.log(l, c);
        }
        ;
        return n.setAttribute('points', this.pointsToPolygon(s)), n;
    }
}
new __WEBPACK_IMPORTED_MODULE_0__shape__["a" /* default */]();


/***/ })
/******/ ]);