(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Help; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Help = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Help, _React$PureComponent);

  var _super = _createSuper(Help);

  function Help(props) {
    _classCallCheck(this, Help);

    return _super.call(this, props);
  }

  _createClass(Help, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contentBody"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "helpNav"
      }, "\u5E2E\u52A9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "helpHeader"
      }, "\u8425\u9500\u529B\u8BC4\u4F30\u4F53\u7CFB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "helpTableCon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "helpTable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "helptableHeader"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u4E00\u7EA7\u7EF4\u5EA6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u4E8C\u7EA7\u7EF4\u5EA6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        colSpan: "6"
      }, "\u4E09\u7EA7\u7EF4\u5EA6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelpTableData, null))));
    }
  }]);

  return Help;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



var HelpTableData = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(HelpTableData, _React$PureComponent2);

  var _super2 = _createSuper(HelpTableData);

  function HelpTableData(props) {
    var _this;

    _classCallCheck(this, HelpTableData);

    _this = _super2.call(this, props);
    _this.state = {
      data: {
        firName: [{
          name: "产品",
          secName: [{
            name: "外观",
            thiName: [{
              name: "长宽高"
            }, {
              name: "轴距"
            }, {
              name: "轮毂"
            }]
          }, {
            name: "内饰",
            thiName: [{
              name: "仪表盘"
            }, {
              name: "氛围灯"
            }, {
              name: "天窗"
            }]
          }, {
            name: "空间",
            thiName: [{
              name: "头部空间"
            }, {
              name: "腿部空间"
            }, {
              name: "后备箱空间"
            }, {
              name: "空间灵活性"
            }]
          }]
        }]
      }
    };
    return _this;
  }

  _createClass(HelpTableData, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.state.data.firName.map(function (firValue) {
        var firName = firValue.name;
        var firNameRowSpan = firValue.secName.length;
        var row = 0;
        return firValue.secName.map(function (secValue) {
          row += 1;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
            className: "helptableBody"
          }, row === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
            rowSpan: firNameRowSpan
          }, firName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, secValue.name), secValue.thiName.map(function (thrValue) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, thrValue.name);
          }));
        });
      }));
    }
  }]);

  return HelpTableData;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/***/ })

}]);