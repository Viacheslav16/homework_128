"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Figure =
/*#__PURE__*/
function () {
  function Figure(width, height, color, left, top) {
    _classCallCheck(this, Figure);

    this.width = width;
    this.height = height;
    this._color = color;
    this.left = left;
    this.top = top;
  }

  _createClass(Figure, [{
    key: "draw",
    value: function draw() {
      var element = "\n        <div style=\"width:".concat(this.width, "px;height:").concat(this.height, "px;background:").concat(this.color, ";left:").concat(this.left, "px;top:").concat(this.top, "px;position:absolute\"></div>\n        ");
      document.body.insertAdjacentHTML('afterbegin', element);
    }
  }, {
    key: "area",
    get: function get() {
      return this.width * this.height;
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    } //incupsuliacia
    ,
    set: function set(newColor) {
      if (newColor === '') {
        return alert('set color');
      }

      this._color = newColor;
    }
  }]);

  return Figure;
}();

exports["default"] = Figure;