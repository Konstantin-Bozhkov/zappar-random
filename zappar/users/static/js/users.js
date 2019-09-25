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
/******/ 	return __webpack_require__(__webpack_require__.s = "./users/private/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./users/private/ts/components/UserGenerator.ts":
/*!******************************************************!*\
  !*** ./users/private/ts/components/UserGenerator.ts ***!
  \******************************************************/
/*! exports provided: UserGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserGenerator\", function() { return UserGenerator; });\n/* harmony import */ var _templates_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/template.html */ \"./users/private/ts/components/templates/template.html\");\n/* harmony import */ var _templates_template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_template_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ \"./users/private/ts/components/Util.ts\");\n\r\n\r\nconst templateEl = document.createElement('div');\r\ntemplateEl.id = 'user-generator';\r\ntemplateEl.innerHTML = _templates_template_html__WEBPACK_IMPORTED_MODULE_0___default.a;\r\nclass UserGenerator extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        // Get the CSRF token\r\n        this._csrf = this.getAttribute('z-csrf');\r\n        this._randomUser = [];\r\n        // Replace all slots\r\n        _Util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].replaceSlots(this, templateEl);\r\n        // Apend template to <user-generator>\r\n        this.appendChild(templateEl);\r\n        // Get button generator DOM element from component template\r\n        this._buttonEl = document.getElementById('generateBtn');\r\n        // get cards container from component template\r\n        this._cards = document.getElementById('cards');\r\n        if (this._buttonEl == null)\r\n            return;\r\n        // On click make a call to the API and get a user\r\n        this._buttonEl.addEventListener('click', () => this.apiCall());\r\n    }\r\n    apiCall() {\r\n        let xhttp = new XMLHttpRequest();\r\n        let that = this;\r\n        // Build the data\r\n        let data = new FormData();\r\n        data.append('gender', document.getElementById('gender').value);\r\n        data.append('nationality', document.getElementById('nationality').value);\r\n        data.append('results', document.getElementById('results').value);\r\n        xhttp.onprogress = function () {\r\n            console.log('LOADING...', xhttp.readyState);\r\n        };\r\n        xhttp.onload = function () {\r\n            if (xhttp.status == 200) {\r\n                let data = JSON.parse(xhttp.response);\r\n                that._randomUser = data.html;\r\n                // Display user cards\r\n                that.displayUserCard();\r\n            }\r\n        };\r\n        xhttp.open(\"POST\", window.location.href, true);\r\n        xhttp.setRequestHeader(\"X-CSRFToken\", this._csrf);\r\n        xhttp.send(data);\r\n    }\r\n    displayUserCard() {\r\n        if (this._cards == null || this._randomUser == null)\r\n            return;\r\n        this._cards.innerHTML = '';\r\n        // Create an empty slot card\r\n        let slot = document.createElement('slot');\r\n        slot.name = 'card';\r\n        this._randomUser.forEach((element) => {\r\n            if (this._cards == null)\r\n                return;\r\n            // Append the empty slot\r\n            this._cards.appendChild(slot);\r\n            // Create the card element\r\n            let card = document.createElement('div');\r\n            card.className = 'card';\r\n            // Inside the card add the html recieved from the API\r\n            card.innerHTML = element;\r\n            // Set the slot name\r\n            card.slot = 'card';\r\n            // Append the child to the component            \r\n            this.appendChild(card);\r\n            // Replace slots\r\n            _Util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].replaceSlots(this, this._cards);\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./users/private/ts/components/UserGenerator.ts?");

/***/ }),

/***/ "./users/private/ts/components/Util.ts":
/*!*********************************************!*\
  !*** ./users/private/ts/components/Util.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utils; });\nclass Utils {\r\n    static replaceSlots(that, templateEl) {\r\n        let slots = templateEl.querySelectorAll('slot');\r\n        slots.forEach((slot) => {\r\n            // get the slot name\r\n            let slotName = slot.getAttribute('name');\r\n            // get the first matching slot from the view\r\n            var slotElement = document.querySelector(`[slot=\"${slotName}\"`);\r\n            // About if the parent doesnt exits\r\n            if (slot.parentNode === null)\r\n                return;\r\n            // abort if the slot doesnt\r\n            if (slotElement == null) {\r\n                slot.parentNode.removeChild(slot);\r\n                return;\r\n            }\r\n            // Dont apply the slot if the slot is not contained inside <user-generator>\r\n            if (slotElement.parentNode != that)\r\n                return;\r\n            // Remove the slot attribute from the element\r\n            slotElement.removeAttribute('slot');\r\n            // replace the node in the template with the one from the view\r\n            slot.parentNode.replaceChild(slotElement, slot);\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./users/private/ts/components/Util.ts?");

/***/ }),

/***/ "./users/private/ts/components/templates/template.html":
/*!*************************************************************!*\
  !*** ./users/private/ts/components/templates/template.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\">\\r\\n    <div class=\\\"col-sm-12 col-md-6\\\">\\r\\n        <slot name=\\\"form\\\"></slot>\\r\\n    </div>\\r\\n\\r\\n    <div id=\\\"cards\\\">\\r\\n        <slot name=\\\"card\\\"></slot>\\r\\n    </div>\\r\\n    \\r\\n</div>\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\";\n\n//# sourceURL=webpack:///./users/private/ts/components/templates/template.html?");

/***/ }),

/***/ "./users/private/ts/index.ts":
/*!***********************************!*\
  !*** ./users/private/ts/index.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_UserGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UserGenerator */ \"./users/private/ts/components/UserGenerator.ts\");\n\r\n// Registrate zappar-generator HTML element\r\nwindow.customElements.define('user-generator', _components_UserGenerator__WEBPACK_IMPORTED_MODULE_0__[\"UserGenerator\"]);\r\n\n\n//# sourceURL=webpack:///./users/private/ts/index.ts?");

/***/ })

/******/ });