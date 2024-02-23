"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyCircle =
/*#__PURE__*/
function () {
  function MyCircle(radius) {
    _classCallCheck(this, MyCircle);

    this._radius = radius;
  }

  _createClass(MyCircle, [{
    key: "area",
    value: function area() {
      return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
    }
  }, {
    key: "perim",
    value: function perim() {
      return (Math.PI * this.diametr).toFixed(2);
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(newRadius) {
      this._radius = newRadius;
    }
  }, {
    key: "diametr",
    get: function get() {
      return this._radius * 2;
    }
  }]);

  return MyCircle;
}();

exports["default"] = MyCircle;