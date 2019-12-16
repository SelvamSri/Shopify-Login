webpackHotUpdate("static/development/pages/toogle.js",{

/***/ "./public/google.js":
/*!**************************!*\
  !*** ./public/google.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _codealter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./codealter */ "./public/codealter.js");
/* harmony import */ var _google__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./google */ "./public/google.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_ios_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ios-switch */ "./node_modules/react-ios-switch/lib/index.js");
/* harmony import */ var react_ios_switch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_ios_switch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns_esm_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/esm/locale */ "./node_modules/date-fns/esm/locale/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




 // import amz from '/logos/amazon_logo.png';
// import amz from '.././logos/amazon_logo.png';
// import google from '.././logos/google_logo.png';
// import live from '../image/live.png'


 // for guide...

var hd = {
  pathname: '/index',
  query: {
    name: 'index'
  }
};
var a = {
  pathname: '/index'
}; // for email...

var email = {
  pathname: '/email',
  query: {
    name: 'email'
  }
};
var ema = {
  pathname: '/email'
}; // for toogle...

var toogle = {
  pathname: '/toogle',
  query: {
    name: 'toogle'
  }
};
var too = {
  pathname: '/toogle'
};

var Toogle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Toogle, _Component);

  function Toogle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Toogle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Toogle).call(this, props));
    _this.sec = [];
    _this.state = {
      checked: true,
      check: true,
      amazon: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    console.log(_this.state.checked);
    console.log(_this.state.check);
    console.log(_this.state.amazon);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Toogle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var checked = this.state.checked;
      var check = this.state.check;
      var amazon = this.state.amazon;
      return __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.App1
      }, __jsx("nav", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.head1
      }, __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.col
      }, __jsx("li", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.navi
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: email,
        as: ema
      }, __jsx("a", null, "Contact")))), __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.col1
      }, __jsx("li", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.navi
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: hd,
        as: a
      }, __jsx("a", null, "Guide")))), __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.col2
      }, __jsx("li", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.navi
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: toogle,
        as: too
      }, __jsx("a", null, "Config"))))), __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.Fb
      }, __jsx("h5", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.face
      }, "FACEBOOK"), __jsx(react_ios_switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
        checked: checked,
        className: "switch",
        onChange: function onChange(checked) {
          return _this2.setState({
            checked: checked
          });
        }
      })), __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.Fb1
      }, __jsx("h5", null, "GOOGLE"), __jsx(react_ios_switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
        checked: check,
        className: "switch1",
        onChange: function onChange(check) {
          return _this2.setState({
            check: check
          });
        }
      })), __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.Fb2
      }, __jsx("h5", null, "AMAZON"), __jsx(react_ios_switch__WEBPACK_IMPORTED_MODULE_11___default.a, {
        checked: amazon,
        className: "switch2",
        onChange: function onChange(amazon) {
          return _this2.setState({
            amazon: amazon
          });
        }
      })), __jsx("button", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.tooglebutton,
        onClick: this.handleChange
      }, "Save Changes"), __jsx("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.liverelay
      }, __jsx(_codealter__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx("img", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.facebook,
        src: "https://i.pinimg.com/originals/58/f4/72/58f4723d8f23906bdcb058604075ad2a.png",
        style: {
          visibility: this.state.checked ? 'visible' : 'hidden'
        },
        alt: "",
        height: "100vh",
        width: "100vw"
      }), __jsx("img", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.google,
        src: "./google_logo.png",
        style: {
          visibility: this.state.check ? 'visible' : 'hidden'
        },
        alt: "",
        height: "100vh",
        width: "100vw"
      }), __jsx("img", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.amazon,
        src: "./amazon_logo.png",
        style: {
          visibility: this.state.amazon ? 'visible' : 'hidden'
        },
        alt: "",
        height: "100vh",
        width: "100vw"
      })));
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      console.log(this.state.sec);
      console.log(this.state.checked);
      console.log(this.state.check);
      console.log(this.state.amazon);
    }
  }]);

  return Toogle;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Toogle);

/***/ })

})
//# sourceMappingURL=toogle.js.ec4abc977b24554a3c45.hot-update.js.map