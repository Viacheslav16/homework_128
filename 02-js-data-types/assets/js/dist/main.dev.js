"use strict";

function task1() {
  var money = parseInt(prompt("Введіть суму грошей в гаманці"));
  var chocolate = parseInt(prompt("Введіть ціну однієї шоколадки"));
  var pieces = parseInt(money / chocolate);
  var remainder = parseInt(money % chocolate);
  alert("".concat(pieces, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u043C\u043E\u0436\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0456 ").concat(remainder, " \u0437\u0434\u0430\u0447\u0456 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F.\n    "));
}

function task2() {
  var d = parseInt(prompt("Введіть тризначне число"));
  var a = parseInt(d / 100);
  var b = parseInt(d / 10) % 10;
  var c = d % 10;
  var rez = c + "" + b + "" + a;
  alert("\u0427\u0438\u0441\u043B\u043E \u0437\u0430\u0434\u043E\u043C \u043D\u0430\u043F\u0435\u0440\u0435\u0434 ".concat(rez));
}

function task3() {
  var myMoney = parseInt(prompt("Введіть суму вкладу в банк"));
  var bankPercent = 5;
  var newPercent = myMoney / 100 * bankPercent;
  var cashMonth = newPercent / 12 * 2;
  var newMoney = parseInt(cashMonth);
  alert("\u0421\u0443\u043C\u0443 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0437\u0430 2 \u043C\u0456\u0441\u044F\u0446\u0456 \u0454 ".concat(newMoney));
}