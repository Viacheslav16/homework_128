"use strict";

var _MyCircle = _interopRequireDefault(require("./MyCircle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// console.log('CLASS', Figure);
// import Figure from "./figure.js";
// import Square from "./Square.js";
// import Circle from "./Circle.js";
// import * as CONFIG from "./config.js";
// import { isValidEmail, sum } from "./helpers.js";
// import isVAlidEmail from "./isVAlidEmail.js";
var cr1 = new _MyCircle["default"](230);
console.log('diametr 1 =' + cr1.diametr);
cr1.radius = 340;
console.log('diametr 2 =' + cr1.diametr);
console.log('area =' + cr1.area());
console.log('perim =' + cr1.perim());
var cr2 = new _MyCircle["default"](124);
console.log('diametr =' + cr2.diametr);
console.log('area =' + cr2.area());
console.log('perim =' + cr2.perim());
var marker = new Marker('yellow', 34);
marker.write('fgdfghhfgjhkhkhjghfdgfgfgfggjhkjkj'); // console.log(CONFIG);
// isVAlidEmail();
// const rect1 = new Figure(250, 150, 'lightblue', 100, 150);
// console.log('rect1', rect1);
// rect1.draw();
// const rectRed = new Figure(100, 200, 'red', 300, 200);
// rectRed.draw();
// const greenSq = new Square(400, 'green', 600, 120);
// greenSq.draw();
// const crPink = new Circle(360, 'pink', 1100, 50);
// crPink.draw();