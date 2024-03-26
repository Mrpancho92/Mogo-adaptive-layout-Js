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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Js/app.js":
/*!***********************!*\
  !*** ./src/Js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrolloffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrolloffset);
  $(window).on("scroll", function () {
    scrolloffset = $(this).scrollTop();
    checkScroll(scrolloffset);
  });
  function checkScroll(scrolloffset) {
    if (scrolloffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;
    $("#nav a").removeClass("active");
    $this.addClass("active");
    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });

  /* Menu nav toggle */
  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /* Collapse */
  function offsetHeight($this) {
    let heightText;
    $(".accordion__content").map((item, index) => {
      if ($this[0].children[1] === index) {
        $this.children()[1].style.display = "block";
        heightText = $this.children()[1].offsetHeight + 53.4 + "px";
      }
    });
    return heightText;
  }
  $("[data-collapse]").each(function () {
    if (!$(this).hasClass("active")) {
      $(this)[0].style.height = "53.4px";
    }
    if ($(this).hasClass("active")) {
      $(this)[0].style.height = offsetHeight($(this));
    }
  });
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    if ($this.hasClass("active") === true) {
      $(this).animate({
        height: "53.4px"
      }, 300, function () {
        $this.children()[1].style.display = "none";
        $this.toggleClass("active");
      });
    } else {
      $(this).animate({
        height: offsetHeight($this)
      }, 300, function () {
        $this.children()[1].style.display = "block";
        $this.toggleClass("active");
      });
    }
  });

  /* Slider */

  $("[data-slider]").slick({
    Infinity: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map