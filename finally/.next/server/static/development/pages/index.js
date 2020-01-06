module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/Amazon/Social.js":
/*!********************************!*\
  !*** ./pages/Amazon/Social.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-social-login */ "react-social-login");
/* harmony import */ var react_social_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_social_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const color = {
  but: {
    'background-color': 'transparent',
    'border-color': 'transparent'
  }
};

class SocialButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: color.but,
      onClick: this.props.triggerLogin
    }, this.props), this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (react_social_login__WEBPACK_IMPORTED_MODULE_2___default()(SocialButton));

/***/ }),

/***/ "./pages/Amazon/userCard.js":
/*!**********************************!*\
  !*** ./pages/Amazon/userCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserCard; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


 // import { card as cardStyle } from './styles'

const cardStyle = {};
const COLORS = {};

const Detail = ({
  label,
  data
}) => __jsx("div", {
  style: {
    fontSize: '.8rem'
  }
}, __jsx("label", {
  style: {
    color: COLORS,
    paddingRight: '.25rem'
  }
}, label, " :"), __jsx("span", null, data)); // const AccessToken = ({ token }) => {
//   const codeStyle = {
//     fontFamily: 'monospace',
//     wordWrap: 'break-word',
//     margin: '.5em 0',
//     padding: '.5em',
//     fontSize: '85%',
//     backgroundColor: 'rgba(27,31,35,0.05)',
//     borderRadius: '3px'
//   }
//   return (
//     <div style={{ fontSize: '.8rem' }}>
//       <label style={{ color: COLORS.lightColor, paddingRight: '.25rem' }}>Access token :</label>
//       <div style={codeStyle}>{token}</div>
//     </div>
//   )
// }


class UserCard extends react__WEBPACK_IMPORTED_MODULE_8__["Component"] {
  render() {
    const {
      user: {
        _profile,
        _token
      },
      logout
    } = this.props;
    let expiration = 'unknown';

    if (_token.expiresAt === Infinity) {
      expiration = 'never/unknown (see provider doc)';
    } else if (_token.expiresAt) {
      const date = new Date(_token.expiresAt);
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      if (month < 10) month = `0${month}`;
      if (day < 10) day = `0${day}`;
      if (hour < 10) hour = `0${hour}`;
      if (minute < 10) minute = `0${minute}`;
      expiration = `${month}/${day}/${year} ${hour}:${minute}`;
    }

    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left'
      },
      avatar: {
        background: COLORS.black,
        boxShadow: '0 0 12px rgba(0,0,0,0.5)',
        border: `5px solid ${COLORS.white}`,
        borderRadius: '50%',
        height: '7em',
        width: '7em',
        zIndex: '1'
      },
      content: _objectSpread({}, cardStyle, {
        marginTop: '-.75rem'
      }),
      dataContainer: {
        padding: '1.5rem 2rem'
      },
      id: {
        fontSize: '.5rem',
        margin: '-.2rem 0'
      },
      name: {
        fontSize: '1.5rem',
        color: 'Colors.blue',
        marginBottom: '.5rem'
      },
      button: {
        color: COLORS.red,
        border: 'none',
        width: '100%',
        padding: '.5rem',
        fontSize: '1em',
        textTransform: 'uppercase'
      }
    };
    return __jsx("div", {
      style: styles.container
    }, __jsx("div", {
      style: styles.content
    }, __jsx("div", {
      style: styles.dataContainer
    }, __jsx("div", {
      style: styles.name
    }, _profile.name), __jsx(Detail, {
      label: "Firstname",
      data: _profile.firstName
    }), __jsx(Detail, {
      label: "Lastname",
      data: _profile.lastName
    }), __jsx(Detail, {
      label: "Email",
      data: _profile.email
    }), __jsx(Detail, {
      label: "Expiration",
      data: expiration
    })), __jsx("button", {
      style: styles.button,
      onClick: logout
    }, "Logout")));
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(UserCard, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    _profile: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
    _token: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
  }),
  logout: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

/***/ }),

/***/ "./pages/Amazonlogin.js":
/*!******************************!*\
  !*** ./pages/Amazonlogin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Amazon_Social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Amazon/Social */ "./pages/Amazon/Social.js");
/* harmony import */ var _Amazon_userCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Amazon/userCard */ "./pages/Amazon/userCard.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_amazon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/amazon */ "./public/amazon.js");
/* harmony import */ var _public_google__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/google */ "./public/google.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import insta from './logos/amazon_logo.png';

 // import google from './logos/google_logo.png'





const image = {
  logo: {
    position: 'absolute',
    top: '15px',
    left: '30px',
    cursor: 'pointer'
  },
  logo1: {
    position: 'absolute',
    top: '15px',
    left: '155px',
    cursor: 'pointer'
  },
  logo2: {
    position: 'absolute',
    top: '15px',
    left: '285px',
    cursor: 'pointer'
  },
  logo3: {
    position: 'absolute',
    top: '15px',
    left: '415px',
    cursor: 'pointer'
  },
  logo4: {
    position: 'absolute',
    top: '15px',
    left: '545px',
    cursor: 'pointer'
  },
  loginwith: {
    position: 'absolute',
    top: '150px',
    left: '150px'
  }
};
class Demo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      user: {},
      shopURL: 'sociallog.myshopify.com',
      currentProvider: '',
      postDat: {}
    };
    this.nodes = {};
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailure = this.onLoginFailure.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
    this.onLogoutFailure = this.onLogoutFailure.bind(this);
    this.logout = this.logout.bind(this);
  }

  setNodeRef(provider, node) {
    if (node) {
      this.nodes[provider] = node;
    }
  }

  onLoginSuccess(user) {
    const postData = {
      "customer": {
        "first_name": user._profile.firstName,
        "last_name": user._profile.lastName,
        "email": user._profile.email,
        "phone": '',
        "addresses": []
      }
    };
    console.log(user);
    console.log(postData);
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        "customer": {
          "first_name": user._profile.firstName,
          "last_name": user._profile.lastName,
          "email": user._profile.email,
          "phone": '',
          "addresses": []
        }
      })
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  onLoginFailure(err) {
    console.error(err);
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    });
  }

  onLogoutSuccess() {
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    });
  }

  onLogoutFailure(err) {
    console.error(err);
  }

  logout() {
    const {
      logged,
      currentProvider
    } = this.state;

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout();
    }
  }

  render() {
    let children;

    if (this.state.logged) {
      children = __jsx(_Amazon_userCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        user: this.state.user,
        logout: this.logout
      });
    } else {
      children = [__jsx(_Amazon_Social__WEBPACK_IMPORTED_MODULE_2__["default"], {
        provider: "facebook",
        appId: "743738122718119",
        onLoginSuccess: this.onLoginSuccess,
        onLoginFailure: this.onLoginFailure,
        onLogoutSuccess: this.onLogoutSuccess,
        getInstance: this.setNodeRef.bind(this, 'facebook'),
        key: 'facebook'
      }, __jsx("img", {
        style: image.logo,
        src: "https://i.pinimg.com/originals/58/f4/72/58f4723d8f23906bdcb058604075ad2a.png",
        title: "facebook login",
        alt: "facebook",
        height: "150px",
        width: "150px"
      })), __jsx(_Amazon_Social__WEBPACK_IMPORTED_MODULE_2__["default"], {
        provider: "google",
        appId: "555371152154-faiudnv4deckojvcuqsh2kdpf5obe12u.apps.googleusercontent.com",
        onLoginSuccess: this.onLoginSuccess,
        onLoginFailure: this.onLoginFailure,
        onLogoutSuccess: this.onLogoutSuccess,
        onLogoutFailure: this.onLogoutFailure,
        getInstance: this.setNodeRef.bind(this, 'google'),
        key: 'google'
      }, __jsx(_public_google__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(_Amazon_Social__WEBPACK_IMPORTED_MODULE_2__["default"], {
        provider: "amazon",
        appId: "amzn1.application-oa2-client.0623170e36984f82a8b4ed9b1230a1cb",
        onLoginSuccess: this.onLoginSuccess,
        onLoginFailure: this.onLoginFailure,
        onLogoutSuccess: this.onLogoutSuccess,
        getInstance: this.setNodeRef.bind(this, 'amazon'),
        key: 'amazon'
      }, __jsx(_public_amazon__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx("h5", {
        style: image.loginwith
      }, "or login with")];
    }

    return children;
  }

}

/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Amazonlogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Amazonlogin */ "./pages/Amazonlogin.js");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-modal */ "react-awesome-modal");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_modal__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import Demo from './button.liquid'
// import {Provider, Modal} from '@shopify/app-bridge-react';



class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return __jsx("section", null, __jsx("div", null, __jsx("input", {
      type: "button",
      className: "button",
      value: "Login",
      onClick: () => this.openModal()
    }), __jsx(react_awesome_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
      visible: this.state.visible,
      width: "480",
      height: "550",
      effect: "fadeInDown",
      onClickAway: () => this.closeModal()
    }, __jsx("div", {
      className: "App"
    }, __jsx("div", {
      className: "App1"
    }, __jsx("header", {
      className: "App-header1"
    }, __jsx(_Amazonlogin__WEBPACK_IMPORTED_MODULE_2__["default"], null)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./public/amazon.js":
/*!**************************!*\
  !*** ./public/amazon.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const image = {
  logo: {
    position: 'absolute',
    top: '15px',
    left: '30px',
    cursor: 'pointer'
  },
  logo1: {
    position: 'absolute',
    top: '15px',
    left: '155px',
    cursor: 'pointer'
  },
  logo2: {
    position: 'absolute',
    top: '15px',
    left: '285px',
    cursor: 'pointer'
  },
  logo3: {
    position: 'absolute',
    top: '15px',
    left: '415px',
    cursor: 'pointer'
  },
  logo4: {
    position: 'absolute',
    top: '15px',
    left: '545px',
    cursor: 'pointer'
  },
  loginwith: {
    position: 'absolute',
    top: '150px',
    left: '150px'
  }
};

function MyImage() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return __jsx("img", {
    style: image.logo2,
    src: "./amazon_logo.png",
    title: "facebook login",
    alt: "facebook",
    height: "150px",
    width: "150px"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyImage);

/***/ }),

/***/ "./public/google.js":
/*!**************************!*\
  !*** ./public/google.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const image = {
  logo: {
    position: 'absolute',
    top: '15px',
    left: '30px',
    cursor: 'pointer'
  },
  logo1: {
    position: 'absolute',
    top: '15px',
    left: '155px',
    cursor: 'pointer'
  },
  logo2: {
    position: 'absolute',
    top: '15px',
    left: '285px',
    cursor: 'pointer'
  },
  logo3: {
    position: 'absolute',
    top: '15px',
    left: '415px',
    cursor: 'pointer'
  },
  logo4: {
    position: 'absolute',
    top: '15px',
    left: '545px',
    cursor: 'pointer'
  },
  loginwith: {
    position: 'absolute',
    top: '150px',
    left: '150px'
  }
};

function MyImage() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return __jsx("img", {
    style: image.logo1,
    src: "./google_logo.png",
    title: "facebook login",
    alt: "facebook",
    height: "150px",
    width: "150px"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyImage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nua/Desktop/Selvam/testing/finally/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-awesome-modal":
/*!**************************************!*\
  !*** external "react-awesome-modal" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-modal");

/***/ }),

/***/ "react-social-login":
/*!*************************************!*\
  !*** external "react-social-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-social-login");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map