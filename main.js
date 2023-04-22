/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Audiowide&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Audiowide\", cursive;\n  min-height: 100vh;\n  display: flex;\n  padding: 100px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.title-header {\n  font-size: 4rem;\n}\n\n.gameboards {\n  display: flex;\n  gap: 100px;\n}\n\n.player-gameboard,\n.enemy-gameboard,\n.placement-gameboard {\n  height: fit-content;\n  border: 1px solid black;\n}\n\n.row {\n  display: flex;\n}\n\n.column {\n  border: 1px solid black;\n  width: 50px;\n  height: 50px;\n}\n\n.enemy-gameboard .column:hover {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.placement {\n  background-color: white;\n  padding: 20px;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n  width: 60%;\n  height: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.rotate-btn,\n.placement-title {\n  font-size: 3rem;\n}\n\n.rotate-btn {\n  border: none;\n  padding: 0px 10px;\n  border-radius: 10px;\n  background-color: black;\n  color: white;\n  transition: all 0.3s ease-in-out;\n}\n\n.rotate-btn:hover {\n  transform: scale(1.1);\n}\n\n.modal {\n  background-color: white;\n  padding: 15px;\n  position: fixed;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 10px;\n  width: 30%;\n  height: 25%;\n  padding-bottom: 10px;\n  border: 1px solid black;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.modal-title {\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n.reset-button {\n  font-family: inherit;\n  font-size: 3rem;\n  width: 50%;\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n  transition: all 0.3s ease-in-out;\n  background: black;\n  color: white;\n}\n\n.reset-button:hover {\n  transform: scale(1.1);\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;;;EAGE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;AACZ;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,oBAAoB;EACpB,uBAAuB;EACvB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,gCAAgC;EAChC,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Audiowide&display=swap\");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Audiowide\", cursive;\n  min-height: 100vh;\n  display: flex;\n  padding: 100px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.title-header {\n  font-size: 4rem;\n}\n\n.gameboards {\n  display: flex;\n  gap: 100px;\n}\n\n.player-gameboard,\n.enemy-gameboard,\n.placement-gameboard {\n  height: fit-content;\n  border: 1px solid black;\n}\n\n.row {\n  display: flex;\n}\n\n.column {\n  border: 1px solid black;\n  width: 50px;\n  height: 50px;\n}\n\n.enemy-gameboard .column:hover {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.placement {\n  background-color: white;\n  padding: 20px;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 10px;\n  width: 60%;\n  height: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.rotate-btn,\n.placement-title {\n  font-size: 3rem;\n}\n\n.rotate-btn {\n  border: none;\n  padding: 0px 10px;\n  border-radius: 10px;\n  background-color: black;\n  color: white;\n  transition: all 0.3s ease-in-out;\n}\n\n.rotate-btn:hover {\n  transform: scale(1.1);\n}\n\n.modal {\n  background-color: white;\n  padding: 15px;\n  position: fixed;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 10px;\n  width: 30%;\n  height: 25%;\n  padding-bottom: 10px;\n  border: 1px solid black;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\n.modal-title {\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n.reset-button {\n  font-family: inherit;\n  font-size: 3rem;\n  width: 50%;\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n  transition: all 0.3s ease-in-out;\n  background: black;\n  color: white;\n}\n\n.reset-button:hover {\n  transform: scale(1.1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/GameController.js":
/*!***************************************!*\
  !*** ./src/modules/GameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");
/* harmony import */ var _ScreenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenController */ "./src/modules/ScreenController.js");
/* harmony import */ var _StartScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartScreen */ "./src/modules/StartScreen.js");




const GameController = () => {
  const screen = (0,_ScreenController__WEBPACK_IMPORTED_MODULE_1__["default"])();

  let playerOne = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let playerTwo = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])();

  (0,_StartScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(screen, playerOne);

  function reset() {
    screen.deleteResetOverlay();
    playerOne = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    playerTwo = (0,_Player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_StartScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(screen, playerOne);
    screen.clearBoards();
    playerTwo.placeShipsRandomly();
    screen.renderEnemyBoard(playerTwo);
  }

  document.querySelectorAll(`.enemy-gameboard .row .column`).forEach((elem) => {
    elem.addEventListener("click", () => {
      if (!elem.classList.contains("clicked")) {
        elem.classList.toggle("clicked");
        playerOne.attack(
          playerTwo,
          elem.parentElement.dataset.row - 1,
          elem.dataset.column - 1
        );
        screen.renderEnemyBoard(playerTwo);
        if (!playerTwo.gameboard.allShipsSunk()) {
          playerTwo.makeRandomAttack(playerOne);
          screen.renderOwnBoard(playerOne);
        } else {
          screen.renderResetOverlay("You win!", reset);
        }
        if (playerOne.gameboard.allShipsSunk()) {
          screen.renderResetOverlay("You lose!", reset);
        }
      }
    });
  });

  playerTwo.placeShipsRandomly();

  screen.renderOwnBoard(playerOne);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);


/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");


const Gameboard = () => {
  const grid = Array(10)
    .fill()
    .map(() => Array(10).fill(0));

  const ships = [];

  function boundsChecker(coordinate, length) {
    return coordinate + length > 10;
  }

  function vicinityChecker(x, y) {
    const squares = [
      grid?.[x - 1]?.[y],
      grid?.[x + 1]?.[y],
      grid?.[x]?.[y + 1],
      grid?.[x]?.[y - 1],
      grid?.[x - 1]?.[y - 1],
      grid?.[x + 1]?.[y + 1],
      grid?.[x + 1]?.[y - 1],
      grid?.[x - 1]?.[y + 1],
    ];
    return squares.every((square) => square === 0 || square === undefined);
  }

  function placeShip(x, y, length, axis) {
    const emptySquares = [];

    if (axis === "column") {
      if (boundsChecker(x, length)) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        const coordinateX = x + i;
        if (grid[coordinateX][y] === 0 && vicinityChecker(coordinateX, y)) {
          emptySquares.push([coordinateX, y]);
        } else {
          return false;
        }
      }
    } else if (axis === "row") {
      if (boundsChecker(y, length)) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        const coordinateY = y + i;
        if (grid[x][coordinateY] === 0 && vicinityChecker(x, coordinateY)) {
          emptySquares.push([x, coordinateY]);
        } else {
          return false;
        }
      }
    }

    const ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    ships.push(ship);

    emptySquares.forEach(([row, column]) => {
      grid[row][column] = ship;
    });

    return true;
  }

  function receiveAttack(x, y) {
    let isHit = false;

    if (grid[x][y] === 0) {
      isHit = true;
      grid[x][y] = -1;
    } else if (typeof grid[x][y] === "object") {
      isHit = true;
      grid[x][y].hit();
      grid[x][y] = -2;
    }

    return isHit;
  }

  function allShipsSunk() {
    if (ships.length > 0) {
      return ships.every((elem) => elem.isSunk());
    }
    return false;
  }

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    grid,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");


const Player = () => {
  const gameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function attack(enemy, x, y) {
    return enemy.gameboard.receiveAttack(x, y);
  }

  function makeRandomAttack(enemy) {
    let randomX;
    let randomY;

    do {
      randomX = Math.floor(Math.random() * 10);
      randomY = Math.floor(Math.random() * 10);
    } while (!attack(enemy, randomX, randomY));

    return true;
  }

  function placeShipsRandomly() {
    const arrLength = [2, 3, 3, 4, 5];
    const arrAxis = ["row", "column"];

    arrLength.forEach((elem) => {
      let randomX;
      let randomY;
      let randomAxis;

      do {
        randomX = Math.floor(Math.random() * 10);
        randomY = Math.floor(Math.random() * 10);
        randomAxis = Math.floor(Math.random() * 2);
      } while (
        !gameboard.placeShip(randomX, randomY, elem, arrAxis[randomAxis])
      );
    });

    return true;
  }

  return {
    gameboard,
    attack,
    makeRandomAttack,
    placeShipsRandomly,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/ScreenController.js":
/*!*****************************************!*\
  !*** ./src/modules/ScreenController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ScreenController() {
  function renderOwnBoard(player) {
    player.gameboard.grid.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        const square = document.querySelector(
          `.player-gameboard .row[data-row="${
            indexRow + 1
          }"] .column[data-column="${indexColumn + 1}"]`
        );

        if (column === -1) {
          square.style.backgroundColor = "green";
        } else if (column === -2) {
          square.style.backgroundColor = "red";
        } else if (typeof column === "object") {
          square.style.backgroundColor = "grey";
        }
      });
    });
  }

  function renderEnemyBoard(player) {
    player.gameboard.grid.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        const square = document.querySelector(
          `.enemy-gameboard .row[data-row="${
            indexRow + 1
          }"] .column[data-column="${indexColumn + 1}"]`
        );

        if (column === -1) {
          square.style.backgroundColor = "green";
        } else if (column === -2) {
          square.style.backgroundColor = "red";
        }
      });
    });
  }

  function renderPlacementBoard(gameboard) {
    gameboard.grid.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        const square = document.querySelector(
          `.placement-gameboard .row[data-row="${
            indexRow + 1
          }"] .column[data-column="${indexColumn + 1}"]`
        );

        if (typeof column === "object") {
          square.style.backgroundColor = "grey";
        }
      });
    });
  }

  function renderResetOverlay(text, callback) {
    const bodySelector = document.querySelector("body");

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    bodySelector.appendChild(overlayDiv);

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = text;

    const resetBtn = document.createElement("button");
    resetBtn.classList.add("reset-button");
    resetBtn.addEventListener("click", callback);
    resetBtn.textContent = "Restart";

    modalDiv.appendChild(modalTitle);
    modalDiv.appendChild(resetBtn);

    bodySelector.appendChild(modalDiv);
  }

  function renderPlacement() {
    const bodySelector = document.querySelector("body");

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    bodySelector.appendChild(overlayDiv);

    const placementDiv = document.createElement("div");
    placementDiv.classList.add("placement");

    const title = document.createElement("h2");
    title.classList.add("placement-title");
    title.textContent = "Place your ships!";

    const rotateBtn = document.createElement("button");
    rotateBtn.classList.add("rotate-btn");
    rotateBtn.textContent = "Rotate";

    const placementBoard = document.createElement("div");
    placementBoard.classList.add("placement-gameboard");
    for (let i = 1; i <= 10; i += 1) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.setAttribute("data-row", `${i}`);
      for (let j = 1; j <= 10; j += 1) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.setAttribute("data-column", `${j}`);
        row.appendChild(column);
      }
      placementBoard.appendChild(row);
    }

    placementDiv.appendChild(title);
    placementDiv.appendChild(rotateBtn);
    placementDiv.appendChild(placementBoard);

    bodySelector.appendChild(placementDiv);
  }

  function deletePlacement() {
    const overlayDiv = document.querySelector(".overlay");
    const placementDiv = document.querySelector(".placement");
    placementDiv.remove();
    overlayDiv.remove();
  }

  function deleteResetOverlay() {
    const overlayDiv = document.querySelector(".overlay");
    const modalDiv = document.querySelector(".modal");
    modalDiv.remove();
    overlayDiv.remove();
  }

  function clearBoards() {
    document
      .querySelectorAll(`.player-gameboard .row .column`)
      .forEach((elem) => {
        const elemRef = elem;
        elemRef.style.backgroundColor = "white";
      });

    document
      .querySelectorAll(`.enemy-gameboard .row .column`)
      .forEach((elem) => {
        const elemRef = elem;
        elemRef.style.backgroundColor = "white";
        elemRef.style.removeProperty("background-color");
        elemRef.classList.remove("clicked");
      });
  }

  return {
    renderOwnBoard,
    renderEnemyBoard,
    renderPlacementBoard,
    renderResetOverlay,
    deleteResetOverlay,
    clearBoards,
    renderPlacement,
    deletePlacement,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);


/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (lengthInput) => {
  let hits = 0;
  const length = lengthInput;
  let sunkStatus = false;

  function hit() {
    if (hits !== length) hits += 1;
  }

  function isSunk() {
    sunkStatus = length - hits === 0;
    return sunkStatus;
  }

  return {
    hit,
    isSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/modules/StartScreen.js":
/*!************************************!*\
  !*** ./src/modules/StartScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculateSquaresToFill(x, y, length, axis) {
  let xRef = Number(x);
  let yRef = Number(y);
  const elements = [];
  if (axis === "row" && yRef + length - 1 <= 10) {
    for (let i = 0; i < length; i += 1) {
      elements.push(
        document.querySelector(
          `.placement-gameboard .row[data-row="${xRef}"] .column[data-column="${yRef}"]`
        )
      );
      yRef += 1;
    }
  } else if (axis === "column" && xRef + length - 1 <= 10) {
    for (let i = 0; i < length; i += 1) {
      elements.push(
        document.querySelector(
          `.placement-gameboard .row[data-row="${xRef}"] .column[data-column="${yRef}"]`
        )
      );
      xRef += 1;
    }
  } else {
    elements.push(
      document.querySelector(
        `.placement-gameboard .row[data-row="${xRef}"] .column[data-column="${yRef}"]`
      )
    );
  }

  return elements;
}

const StartScreen = (screen, player) => {
  const lengths = [5, 4, 3, 3, 2];
  let currentShip = 0;
  let axis = "row";
  const { gameboard } = player;

  screen.renderPlacement();

  document.querySelector(".rotate-btn").addEventListener("click", () => {
    axis = axis === "row" ? "column" : "row";
  });

  document
    .querySelectorAll(`.placement-gameboard .row .column`)
    .forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        const elements = calculateSquaresToFill(
          elem.parentElement.dataset.row,
          elem.dataset.column,
          lengths[currentShip],
          axis
        );

        if (elements.length > 1) {
          elements.forEach((square) => {
            const squareRef = square;
            squareRef.style.backgroundColor = "black";
          });
        } else if (elements.length === 1) {
          elements[0].style.backgroundColor = "red";
        }
      });

      elem.addEventListener("mouseleave", () => {
        const elements = calculateSquaresToFill(
          elem.parentElement.dataset.row,
          elem.dataset.column,
          lengths[currentShip],
          axis
        );
        if (elements.length > 0) {
          elements.forEach((square) => {
            const squareRef = square;
            squareRef.style.backgroundColor = "white";
          });
        }
        screen.renderPlacementBoard(gameboard);
      });

      elem.addEventListener("click", () => {
        if (
          gameboard.placeShip(
            elem.parentElement.dataset.row - 1,
            elem.dataset.column - 1,
            lengths[currentShip],
            axis
          )
        ) {
          screen.renderPlacementBoard(gameboard);
          currentShip += 1;
          if (currentShip === 5) {
            screen.deletePlacement();
            screen.renderOwnBoard(player);
          }
        }
      });
    });

  return gameboard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartScreen);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _modules_GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameController */ "./src/modules/GameController.js");



(0,_modules_GameController__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDeEczQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUMyQjs7QUFFdEQsbUVBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NjcmVlbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1N0YXJ0U2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BdWRpb3dpZGUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkF1ZGlvd2lkZVxcXCIsIGN1cnNpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLnBsYXllci1nYW1lYm9hcmQsXFxuLmVuZW15LWdhbWVib2FyZCxcXG4ucGxhY2VtZW50LWdhbWVib2FyZCB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZW5lbXktZ2FtZWJvYXJkIC5jb2x1bW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucm90YXRlLWJ0bixcXG4ucGxhY2VtZW50LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJvdGF0ZS1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMjUlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNldC1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVzZXQtYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXVkaW93aWRlJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBdWRpb3dpZGVcXFwiLCBjdXJzaXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTAwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTAwcHg7XFxufVxcblxcbi5wbGF5ZXItZ2FtZWJvYXJkLFxcbi5lbmVteS1nYW1lYm9hcmQsXFxuLnBsYWNlbWVudC1nYW1lYm9hcmQge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmVuZW15LWdhbWVib2FyZCAuY29sdW1uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ucGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnJvdGF0ZS1idG4sXFxuLnBsYWNlbWVudC10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5yb3RhdGUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5yb3RhdGUtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDI1JTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVzZXQtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlc2V0LWJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IFNjcmVlbkNvbnRyb2xsZXIgZnJvbSBcIi4vU2NyZWVuQ29udHJvbGxlclwiO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gXCIuL1N0YXJ0U2NyZWVuXCI7XG5cbmNvbnN0IEdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBzY3JlZW4gPSBTY3JlZW5Db250cm9sbGVyKCk7XG5cbiAgbGV0IHBsYXllck9uZSA9IFBsYXllcigpO1xuICBsZXQgcGxheWVyVHdvID0gUGxheWVyKCk7XG5cbiAgU3RhcnRTY3JlZW4oc2NyZWVuLCBwbGF5ZXJPbmUpO1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNjcmVlbi5kZWxldGVSZXNldE92ZXJsYXkoKTtcbiAgICBwbGF5ZXJPbmUgPSBQbGF5ZXIoKTtcbiAgICBwbGF5ZXJUd28gPSBQbGF5ZXIoKTtcbiAgICBTdGFydFNjcmVlbihzY3JlZW4sIHBsYXllck9uZSk7XG4gICAgc2NyZWVuLmNsZWFyQm9hcmRzKCk7XG4gICAgcGxheWVyVHdvLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIHNjcmVlbi5yZW5kZXJFbmVteUJvYXJkKHBsYXllclR3byk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZW5lbXktZ2FtZWJvYXJkIC5yb3cgLmNvbHVtbmApLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xpY2tlZFwiKSkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2VkXCIpO1xuICAgICAgICBwbGF5ZXJPbmUuYXR0YWNrKFxuICAgICAgICAgIHBsYXllclR3byxcbiAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5yb3cgLSAxLFxuICAgICAgICAgIGVsZW0uZGF0YXNldC5jb2x1bW4gLSAxXG4gICAgICAgICk7XG4gICAgICAgIHNjcmVlbi5yZW5kZXJFbmVteUJvYXJkKHBsYXllclR3byk7XG4gICAgICAgIGlmICghcGxheWVyVHdvLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgIHBsYXllclR3by5tYWtlUmFuZG9tQXR0YWNrKHBsYXllck9uZSk7XG4gICAgICAgICAgc2NyZWVuLnJlbmRlck93bkJvYXJkKHBsYXllck9uZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NyZWVuLnJlbmRlclJlc2V0T3ZlcmxheShcIllvdSB3aW4hXCIsIHJlc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyT25lLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgIHNjcmVlbi5yZW5kZXJSZXNldE92ZXJsYXkoXCJZb3UgbG9zZSFcIiwgcmVzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHBsYXllclR3by5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcblxuICBzY3JlZW4ucmVuZGVyT3duQm9hcmQocGxheWVyT25lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBBcnJheSgxMClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBmdW5jdGlvbiBib3VuZHNDaGVja2VyKGNvb3JkaW5hdGUsIGxlbmd0aCkge1xuICAgIHJldHVybiBjb29yZGluYXRlICsgbGVuZ3RoID4gMTA7XG4gIH1cblxuICBmdW5jdGlvbiB2aWNpbml0eUNoZWNrZXIoeCwgeSkge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbXG4gICAgICBncmlkPy5beCAtIDFdPy5beV0sXG4gICAgICBncmlkPy5beCArIDFdPy5beV0sXG4gICAgICBncmlkPy5beF0/Llt5ICsgMV0sXG4gICAgICBncmlkPy5beF0/Llt5IC0gMV0sXG4gICAgICBncmlkPy5beCAtIDFdPy5beSAtIDFdLFxuICAgICAgZ3JpZD8uW3ggKyAxXT8uW3kgKyAxXSxcbiAgICAgIGdyaWQ/Llt4ICsgMV0/Llt5IC0gMV0sXG4gICAgICBncmlkPy5beCAtIDFdPy5beSArIDFdLFxuICAgIF07XG4gICAgcmV0dXJuIHNxdWFyZXMuZXZlcnkoKHNxdWFyZSkgPT4gc3F1YXJlID09PSAwIHx8IHNxdWFyZSA9PT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGF4aXMpIHtcbiAgICBjb25zdCBlbXB0eVNxdWFyZXMgPSBbXTtcblxuICAgIGlmIChheGlzID09PSBcImNvbHVtblwiKSB7XG4gICAgICBpZiAoYm91bmRzQ2hlY2tlcih4LCBsZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlWCA9IHggKyBpO1xuICAgICAgICBpZiAoZ3JpZFtjb29yZGluYXRlWF1beV0gPT09IDAgJiYgdmljaW5pdHlDaGVja2VyKGNvb3JkaW5hdGVYLCB5KSkge1xuICAgICAgICAgIGVtcHR5U3F1YXJlcy5wdXNoKFtjb29yZGluYXRlWCwgeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJyb3dcIikge1xuICAgICAgaWYgKGJvdW5kc0NoZWNrZXIoeSwgbGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZVkgPSB5ICsgaTtcbiAgICAgICAgaWYgKGdyaWRbeF1bY29vcmRpbmF0ZVldID09PSAwICYmIHZpY2luaXR5Q2hlY2tlcih4LCBjb29yZGluYXRlWSkpIHtcbiAgICAgICAgICBlbXB0eVNxdWFyZXMucHVzaChbeCwgY29vcmRpbmF0ZVldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwID0gU2hpcChsZW5ndGgpO1xuICAgIHNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICBlbXB0eVNxdWFyZXMuZm9yRWFjaCgoW3JvdywgY29sdW1uXSkgPT4ge1xuICAgICAgZ3JpZFtyb3ddW2NvbHVtbl0gPSBzaGlwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBsZXQgaXNIaXQgPSBmYWxzZTtcblxuICAgIGlmIChncmlkW3hdW3ldID09PSAwKSB7XG4gICAgICBpc0hpdCA9IHRydWU7XG4gICAgICBncmlkW3hdW3ldID0gLTE7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZ3JpZFt4XVt5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaXNIaXQgPSB0cnVlO1xuICAgICAgZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIGdyaWRbeF1beV0gPSAtMjtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNIaXQ7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsoKSB7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBzaGlwcy5ldmVyeSgoZWxlbSkgPT4gZWxlbS5pc1N1bmsoKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGdyaWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGZ1bmN0aW9uIGF0dGFjayhlbmVteSwgeCwgeSkge1xuICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VSYW5kb21BdHRhY2soZW5lbXkpIHtcbiAgICBsZXQgcmFuZG9tWDtcbiAgICBsZXQgcmFuZG9tWTtcblxuICAgIGRvIHtcbiAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKCFhdHRhY2soZW5lbXksIHJhbmRvbVgsIHJhbmRvbVkpKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgIGNvbnN0IGFyckxlbmd0aCA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgICBjb25zdCBhcnJBeGlzID0gW1wicm93XCIsIFwiY29sdW1uXCJdO1xuXG4gICAgYXJyTGVuZ3RoLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGxldCByYW5kb21YO1xuICAgICAgbGV0IHJhbmRvbVk7XG4gICAgICBsZXQgcmFuZG9tQXhpcztcblxuICAgICAgZG8ge1xuICAgICAgICByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICByYW5kb21BeGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgIWdhbWVib2FyZC5wbGFjZVNoaXAocmFuZG9tWCwgcmFuZG9tWSwgZWxlbSwgYXJyQXhpc1tyYW5kb21BeGlzXSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2FtZWJvYXJkLFxuICAgIGF0dGFjayxcbiAgICBtYWtlUmFuZG9tQXR0YWNrLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIoKSB7XG4gIGZ1bmN0aW9uIHJlbmRlck93bkJvYXJkKHBsYXllcikge1xuICAgIHBsYXllci5nYW1lYm9hcmQuZ3JpZC5mb3JFYWNoKChyb3csIGluZGV4Um93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sdW1uLCBpbmRleENvbHVtbikgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAucGxheWVyLWdhbWVib2FyZCAucm93W2RhdGEtcm93PVwiJHtcbiAgICAgICAgICAgIGluZGV4Um93ICsgMVxuICAgICAgICAgIH1cIl0gLmNvbHVtbltkYXRhLWNvbHVtbj1cIiR7aW5kZXhDb2x1bW4gKyAxfVwiXWBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoY29sdW1uID09PSAtMSkge1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09PSAtMikge1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2x1bW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyRW5lbXlCb2FyZChwbGF5ZXIpIHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmdyaWQuZm9yRWFjaCgocm93LCBpbmRleFJvdykgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbHVtbiwgaW5kZXhDb2x1bW4pID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmVuZW15LWdhbWVib2FyZCAucm93W2RhdGEtcm93PVwiJHtcbiAgICAgICAgICAgIGluZGV4Um93ICsgMVxuICAgICAgICAgIH1cIl0gLmNvbHVtbltkYXRhLWNvbHVtbj1cIiR7aW5kZXhDb2x1bW4gKyAxfVwiXWBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoY29sdW1uID09PSAtMSkge1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uID09PSAtMikge1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBsYWNlbWVudEJvYXJkKGdhbWVib2FyZCkge1xuICAgIGdhbWVib2FyZC5ncmlkLmZvckVhY2goKHJvdywgaW5kZXhSb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIGluZGV4Q29sdW1uKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5wbGFjZW1lbnQtZ2FtZWJvYXJkIC5yb3dbZGF0YS1yb3c9XCIke1xuICAgICAgICAgICAgaW5kZXhSb3cgKyAxXG4gICAgICAgICAgfVwiXSAuY29sdW1uW2RhdGEtY29sdW1uPVwiJHtpbmRleENvbHVtbiArIDF9XCJdYFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29sdW1uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JleVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclJlc2V0T3ZlcmxheSh0ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGJvZHlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgY29uc3Qgb3ZlcmxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheURpdi5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcblxuICAgIGJvZHlTZWxlY3Rvci5hcHBlbmRDaGlsZChvdmVybGF5RGl2KTtcblxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1vZGFsVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJyZXNldC1idXR0b25cIik7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzdGFydFwiO1xuXG4gICAgbW9kYWxEaXYuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XG4gICAgbW9kYWxEaXYuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gICAgYm9keVNlbGVjdG9yLmFwcGVuZENoaWxkKG1vZGFsRGl2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBib2R5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIGNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXlEaXYuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG5cbiAgICBib2R5U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3ZlcmxheURpdik7XG5cbiAgICBjb25zdCBwbGFjZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYWNlbWVudERpdi5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzaGlwcyFcIjtcblxuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcm90YXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGUtYnRuXCIpO1xuICAgIHJvdGF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiUm90YXRlXCI7XG5cbiAgICBjb25zdCBwbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxhY2VtZW50Qm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC1nYW1lYm9hcmRcIik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgcm93LnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGAke2l9YCk7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuICAgICAgICBjb2x1bW4uc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIiwgYCR7an1gKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgICB9XG4gICAgICBwbGFjZW1lbnRCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuICAgIHBsYWNlbWVudERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcGxhY2VtZW50RGl2LmFwcGVuZENoaWxkKHJvdGF0ZUJ0bik7XG4gICAgcGxhY2VtZW50RGl2LmFwcGVuZENoaWxkKHBsYWNlbWVudEJvYXJkKTtcblxuICAgIGJvZHlTZWxlY3Rvci5hcHBlbmRDaGlsZChwbGFjZW1lbnREaXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgY29uc3QgcGxhY2VtZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZW1lbnRcIik7XG4gICAgcGxhY2VtZW50RGl2LnJlbW92ZSgpO1xuICAgIG92ZXJsYXlEaXYucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVSZXNldE92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgbW9kYWxEaXYucmVtb3ZlKCk7XG4gICAgb3ZlcmxheURpdi5yZW1vdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQm9hcmRzKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChgLnBsYXllci1nYW1lYm9hcmQgLnJvdyAuY29sdW1uYClcbiAgICAgIC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1SZWYgPSBlbGVtO1xuICAgICAgICBlbGVtUmVmLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0pO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuZW5lbXktZ2FtZWJvYXJkIC5yb3cgLmNvbHVtbmApXG4gICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtUmVmID0gZWxlbTtcbiAgICAgICAgZWxlbVJlZi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIGVsZW1SZWYuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xuICAgICAgICBlbGVtUmVmLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlck93bkJvYXJkLFxuICAgIHJlbmRlckVuZW15Qm9hcmQsXG4gICAgcmVuZGVyUGxhY2VtZW50Qm9hcmQsXG4gICAgcmVuZGVyUmVzZXRPdmVybGF5LFxuICAgIGRlbGV0ZVJlc2V0T3ZlcmxheSxcbiAgICBjbGVhckJvYXJkcyxcbiAgICByZW5kZXJQbGFjZW1lbnQsXG4gICAgZGVsZXRlUGxhY2VtZW50LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5Db250cm9sbGVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGhJbnB1dCkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IGxlbmd0aCA9IGxlbmd0aElucHV0O1xuICBsZXQgc3Vua1N0YXR1cyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBpZiAoaGl0cyAhPT0gbGVuZ3RoKSBoaXRzICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgc3Vua1N0YXR1cyA9IGxlbmd0aCAtIGhpdHMgPT09IDA7XG4gICAgcmV0dXJuIHN1bmtTdGF0dXM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiZnVuY3Rpb24gY2FsY3VsYXRlU3F1YXJlc1RvRmlsbCh4LCB5LCBsZW5ndGgsIGF4aXMpIHtcbiAgbGV0IHhSZWYgPSBOdW1iZXIoeCk7XG4gIGxldCB5UmVmID0gTnVtYmVyKHkpO1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICBpZiAoYXhpcyA9PT0gXCJyb3dcIiAmJiB5UmVmICsgbGVuZ3RoIC0gMSA8PSAxMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5wbGFjZW1lbnQtZ2FtZWJvYXJkIC5yb3dbZGF0YS1yb3c9XCIke3hSZWZ9XCJdIC5jb2x1bW5bZGF0YS1jb2x1bW49XCIke3lSZWZ9XCJdYFxuICAgICAgICApXG4gICAgICApO1xuICAgICAgeVJlZiArPSAxO1xuICAgIH1cbiAgfSBlbHNlIGlmIChheGlzID09PSBcImNvbHVtblwiICYmIHhSZWYgKyBsZW5ndGggLSAxIDw9IDEwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZWxlbWVudHMucHVzaChcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnBsYWNlbWVudC1nYW1lYm9hcmQgLnJvd1tkYXRhLXJvdz1cIiR7eFJlZn1cIl0gLmNvbHVtbltkYXRhLWNvbHVtbj1cIiR7eVJlZn1cIl1gXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB4UmVmICs9IDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnBsYWNlbWVudC1nYW1lYm9hcmQgLnJvd1tkYXRhLXJvdz1cIiR7eFJlZn1cIl0gLmNvbHVtbltkYXRhLWNvbHVtbj1cIiR7eVJlZn1cIl1gXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuY29uc3QgU3RhcnRTY3JlZW4gPSAoc2NyZWVuLCBwbGF5ZXIpID0+IHtcbiAgY29uc3QgbGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgbGV0IGN1cnJlbnRTaGlwID0gMDtcbiAgbGV0IGF4aXMgPSBcInJvd1wiO1xuICBjb25zdCB7IGdhbWVib2FyZCB9ID0gcGxheWVyO1xuXG4gIHNjcmVlbi5yZW5kZXJQbGFjZW1lbnQoKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBheGlzID0gYXhpcyA9PT0gXCJyb3dcIiA/IFwiY29sdW1uXCIgOiBcInJvd1wiO1xuICB9KTtcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAucGxhY2VtZW50LWdhbWVib2FyZCAucm93IC5jb2x1bW5gKVxuICAgIC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBjYWxjdWxhdGVTcXVhcmVzVG9GaWxsKFxuICAgICAgICAgIGVsZW0ucGFyZW50RWxlbWVudC5kYXRhc2V0LnJvdyxcbiAgICAgICAgICBlbGVtLmRhdGFzZXQuY29sdW1uLFxuICAgICAgICAgIGxlbmd0aHNbY3VycmVudFNoaXBdLFxuICAgICAgICAgIGF4aXNcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlUmVmID0gc3F1YXJlO1xuICAgICAgICAgICAgc3F1YXJlUmVmLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBlbGVtZW50c1swXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gY2FsY3VsYXRlU3F1YXJlc1RvRmlsbChcbiAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5yb3csXG4gICAgICAgICAgZWxlbS5kYXRhc2V0LmNvbHVtbixcbiAgICAgICAgICBsZW5ndGhzW2N1cnJlbnRTaGlwXSxcbiAgICAgICAgICBheGlzXG4gICAgICAgICk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVSZWYgPSBzcXVhcmU7XG4gICAgICAgICAgICBzcXVhcmVSZWYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNjcmVlbi5yZW5kZXJQbGFjZW1lbnRCb2FyZChnYW1lYm9hcmQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5yb3cgLSAxLFxuICAgICAgICAgICAgZWxlbS5kYXRhc2V0LmNvbHVtbiAtIDEsXG4gICAgICAgICAgICBsZW5ndGhzW2N1cnJlbnRTaGlwXSxcbiAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHNjcmVlbi5yZW5kZXJQbGFjZW1lbnRCb2FyZChnYW1lYm9hcmQpO1xuICAgICAgICAgIGN1cnJlbnRTaGlwICs9IDE7XG4gICAgICAgICAgaWYgKGN1cnJlbnRTaGlwID09PSA1KSB7XG4gICAgICAgICAgICBzY3JlZW4uZGVsZXRlUGxhY2VtZW50KCk7XG4gICAgICAgICAgICBzY3JlZW4ucmVuZGVyT3duQm9hcmQocGxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIHJldHVybiBnYW1lYm9hcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydFNjcmVlbjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9HYW1lQ29udHJvbGxlclwiO1xuXG5HYW1lQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9