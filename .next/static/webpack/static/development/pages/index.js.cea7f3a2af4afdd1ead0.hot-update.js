webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Jumbotron.js":
/*!***************************************!*\
  !*** ./pages/components/Jumbotron.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var JumboTron =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JumboTron, _React$Component);

  function JumboTron() {
    _classCallCheck(this, JumboTron);

    return _possibleConstructorReturn(this, _getPrototypeOf(JumboTron).apply(this, arguments));
  }

  _createClass(JumboTron, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "jumbotron"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Bootstrap Tutorial"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is some text."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is another text."));
    }
  }]);

  return JumboTron;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Jumbotron")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MyLayout.js */ "./pages/components/MyLayout.js");
/* harmony import */ var _components_AllTenders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AllTenders.js */ "./pages/components/AllTenders.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header.js */ "./pages/components/Header.js");
/* harmony import */ var _components_CallToAction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CallToAction.js */ "./pages/components/CallToAction.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Footer.js */ "./pages/components/Footer.js");
/* harmony import */ var _components_Jumbotron_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Jumbotron.js */ "./pages/components/Jumbotron.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2586360253" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Jumbotron_js__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CallToAction_js__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AllTenders_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tenders: props.tenders
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2586360253"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2586360253",
    css: "body{padding-top:54px;}@media (min-width:992px){body{padding-top:56px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb290YS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvTmV4dEpTL3Rtcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnFCLEFBR3NCLEFBS0UsaUJBSmxCLEFBS0QiLCJmaWxlIjoiL1VzZXJzL3Jvb3RhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9OZXh0SlMvdG1zL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgQWxsVGVuZGVycyBmcm9tICcuL2NvbXBvbmVudHMvQWxsVGVuZGVycy5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQmFubmVySGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIuanMnXG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9DYWxsVG9BY3Rpb24uanMnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXIuanMnXG5pbXBvcnQgSnVtYm9Ucm9uIGZyb20gJy4vY29tcG9uZW50cy9KdW1ib3Ryb24uanMnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiBcblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHR7LyogPEJhbm5lckhlYWRlcj48L0Jhbm5lckhlYWRlcj4gKi99XG5cdFx0PEp1bWJvVHJvbj48L0p1bWJvVHJvbj5cblx0XHQ8Q2FsbFRvQWN0aW9uPjwvQ2FsbFRvQWN0aW9uPlxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8QWxsVGVuZGVycyB0ZW5kZXJzPXtwcm9wcy50ZW5kZXJzfT48L0FsbFRlbmRlcnM+XG5cdFx0PC9MYXlvdXQ+XG5cdFx0PGJyLz5cblx0XHQ8Rm9vdGVyPjwvRm9vdGVyPlxuXHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRib2R5IHtcblx0XHRcdFx0cGFkZGluZy10b3A6IDU0cHg7XG5cdFx0XHQgIH1cblx0XHRcdCAgXG5cdFx0XHQgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXHRcdFx0XHRib2R5IHtcblx0XHRcdFx0ICBwYWRkaW5nLXRvcDogNTZweDtcblx0XHRcdFx0fVxuXHRcdFx0ICB9XG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cblx0XG5cdEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vMC4wLjAuMDo2MDAwL2FwaS92MS90ZW5kZXJzJylcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdGNvbnNvbGUubG9nKGRhdGEuanNvbilcblx0XHRjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cdFxuXHRcdHJldHVybiB7XG5cdFx0XHR0ZW5kZXJzOiBkYXRhXG5cdFx0fVxuXHR9XG5cdFxuXHRleHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=/Users/roota/Documents/Development/NextJS/tms/pages/index.js */"
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://0.0.0.0:6000/api/v1/tenders');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log(data.json);
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            tenders: data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.cea7f3a2af4afdd1ead0.hot-update.js.map