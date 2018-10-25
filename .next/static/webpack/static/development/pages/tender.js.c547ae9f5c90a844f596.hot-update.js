webpackHotUpdate("static/development/pages/tender.js",{

/***/ "./pages/tender.js":
/*!*************************!*\
  !*** ./pages/tender.js ***!
  \*************************/
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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header.js */ "./pages/components/Header.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer.js */ "./pages/components/Footer.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var Tender = function Tender(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2586360253" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2586360253"
  }, props.tender.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-2586360253"
  }, props.tender.description.replace(/<[/]?p>/g, ''))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "2586360253",
    css: "body{padding-top:54px;}@media (min-width:992px){body{padding-top:56px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb290YS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvTmV4dEpTL3Rtcy9wYWdlcy90ZW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3FCLEFBR3NCLEFBS0UsaUJBSmxCLEFBS0QiLCJmaWxlIjoiL1VzZXJzL3Jvb3RhL0RvY3VtZW50cy9EZXZlbG9wbWVudC9OZXh0SlMvdG1zL3BhZ2VzL3RlbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBCYW5uZXJIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci5qcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlci5qcydcblxuXG5jb25zdCBUZW5kZXIgPSAocHJvcHMpID0+IFxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdDxCYW5uZXJIZWFkZXI+PC9CYW5uZXJIZWFkZXI+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDE+e3Byb3BzLnRlbmRlci50aXRsZX08L2gxPlxuXHRcdFx0XHQ8cD57cHJvcHMudGVuZGVyLmRlc2NyaXB0aW9uLnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDxGb290ZXI+PC9Gb290ZXI+XG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdGJvZHkge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogNTRweDtcblx0XHRcdCAgfVxuXHRcdFx0ICBcblx0XHRcdCAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cdFx0XHRcdGJvZHkge1xuXHRcdFx0XHQgIHBhZGRpbmctdG9wOiA1NnB4O1xuXHRcdFx0XHR9XG5cdFx0XHQgIH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvZGl2PlxuXG5UZW5kZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcblx0Y29uc3Qge3B1YmxpY19pZH0gPSBjb250ZXh0LnF1ZXJ5XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMC4wLjAuMDo2MDAwL2FwaS92MS90ZW5kZXJzLyR7cHVibGljX2lkfWApXG5cdGNvbnN0IHRlbmRlciA9IGF3YWl0IHJlcy5qc29uKClcblx0Y29uc29sZS5sb2coYEZldGNoZWQgdGVuZGVyOiAke3RlbmRlci50aXRsZX1gKVxuXHRyZXR1cm4geyB0ZW5kZXIgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW5kZXIiXX0= */\n/*@ sourceURL=/Users/roota/Documents/Development/NextJS/tms/pages/tender.js */"
  }));
};

Tender.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var public_id, res, tender;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            public_id = context.query.public_id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://0.0.0.0:6000/api/v1/tenders/".concat(public_id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            tender = _context.sent;
            console.log("Fetched tender: ".concat(tender.title));
            return _context.abrupt("return", {
              tender: tender
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Tender);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tender")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=tender.js.c547ae9f5c90a844f596.hot-update.js.map