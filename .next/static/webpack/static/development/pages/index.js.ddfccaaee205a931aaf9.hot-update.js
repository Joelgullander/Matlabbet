webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel/index.js");
/* harmony import */ var _components_RecipeCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/RecipeCard */ "./components/RecipeCard/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Container */ "./components/Container/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");





var _jsxFileName = "/Users/joelgullander/joels/bara-recept-client/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      this.timer = Object(_store__WEBPACK_IMPORTED_MODULE_8__["startClock"])(dispatch);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var test = [1, 2, 3];
      return __jsx("div", {
        className: "jsx-3066247409" + " " + "p-startpage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-3066247409" + " " + "c-reciperow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-3066247409",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Popul\xE4ra recept"), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, test.map(function (x) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Col"], {
          span: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx(_components_RecipeCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }));
      })))), __jsx("div", {
        className: "jsx-3066247409" + " " + "c-reciperow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-3066247409",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Nyligen bes\xF6kta"), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, test.map(function (x) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Col"], {
          span: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, __jsx(_components_RecipeCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }));
      })))), __jsx("div", {
        className: "jsx-3066247409" + " " + "c-reciperow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-3066247409",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Senaste upplagda"), __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, test.map(function (x) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Col"], {
          span: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx(_components_RecipeCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }));
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3066247409",
        __self: this
      }, ".c-reciperow.jsx-3066247409{margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsZ3VsbGFuZGVyL2pvZWxzL2JhcmEtcmVjZXB0LWNsaWVudC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWtCLEFBRzJCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvam9lbGd1bGxhbmRlci9qb2Vscy9iYXJhLXJlY2VwdC1jbGllbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzdGFydENsb2NrLCBzZXJ2ZXJSZW5kZXJDbG9jayB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwnXG5pbXBvcnQgUmVjaXBlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1JlY2lwZUNhcmQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdhbnRkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVkdXhTdG9yZSwgcmVxIH0pIHtcbiAgICBjb25zdCBpc1NlcnZlciA9ICEhcmVxXG4gICAgcmVkdXhTdG9yZS5kaXNwYXRjaChzZXJ2ZXJSZW5kZXJDbG9jayhpc1NlcnZlcikpXG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy50aW1lciA9IHN0YXJ0Q2xvY2soZGlzcGF0Y2gpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB0ZXN0ID0gWzEsIDIsIDNdXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicC1zdGFydHBhZ2VcIj5cbiAgICAgIDxDYXJvdXNlbCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtcmVjaXBlcm93XCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGgyPlBvcHVsw6RyYSByZWNlcHQ8L2gyPlxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XG4gICAgICAgICAgICB7dGVzdC5tYXAoeCA9PiA8Q29sIHNwYW49ezh9PlxuICAgICAgICAgICAgICAgIDxSZWNpcGVDYXJkIC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLXJlY2lwZXJvd1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxoMj5OeWxpZ2VuIGJlc8O2a3RhPC9oMj5cbiAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxuICAgICAgICAgICAge3Rlc3QubWFwKHggPT4gPENvbCBzcGFuPXs4fT5cbiAgICAgICAgICAgICAgICA8UmVjaXBlQ2FyZCAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1yZWNpcGVyb3dcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8aDI+U2VuYXN0ZSB1cHBsYWdkYTwvaDI+XG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cbiAgICAgICAgICAgIHt0ZXN0Lm1hcCh4ID0+IDxDb2wgc3Bhbj17OH0+XG4gICAgICAgICAgICAgICAgPFJlY2lwZUNhcmQgLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jLXJlY2lwZXJvdyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShJbmRleClcbiJdfQ== */\n/*@ sourceURL=/Users/joelgullander/joels/bara-recept-client/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req;
      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["serverRenderClock"])(isServer));
      return {};
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])()(Index));

/***/ })

})
//# sourceMappingURL=index.js.ddfccaaee205a931aaf9.hot-update.js.map