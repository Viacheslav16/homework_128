"use strict";

function task1() {
  var age = parseInt(prompt("Введіть свій вік"));

  if (isNaN(age)) {
    alert("Age incorrect value. Enter correct age");
    return;
  }

  if (age >= 0 && age <= 11) {
    alert("\u0414\u0438\u0442\u0438\u043D\u0430");
  } else if (age >= 12 && age <= 17) {
    alert("\u043F\u0456\u0434\u043B\u0456\u0442\u043E\u043A");
  } else if (age >= 18 && age <= 59) {
    alert("\u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0439");
  } else if (age >= 60 && age <= 120) {
    alert("\u043F\u0435\u043D\u0441\u0456\u043E\u043D\u0435\u0440");
  } else {
    alert("\u041D\u0435\u0432\u0456\u0440\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0432\u0456\u043A");
  }
}

function My_task1() {
  var age = document.getElementById("age_top").valueAsNumber;
  var rez = '';

  if (isNaN(age)) {
    rez = "Age incorrect value. Enter correct age";
    return;
  }

  if (age >= 0 && age <= 11) {
    rez = "\u0414\u0438\u0442\u0438\u043D\u0430";
  } else if (age >= 12 && age <= 17) {
    rez = "\u043F\u0456\u0434\u043B\u0456\u0442\u043E\u043A";
  } else if (age >= 18 && age <= 59) {
    rez = "\u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0439";
  } else if (age >= 60 && age <= 120) {
    rez = "\u043F\u0435\u043D\u0441\u0456\u043E\u043D\u0435\u0440";
  } else {
    rez = "\u041D\u0435 \u0432\u0456\u0440\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0432\u0456\u043A";
  }

  document.getElementById("age-result").innerHTML = rez;
}

function My_task2() {
  var figure = document.getElementById("figure_top").valueAsNumber;
  var rez = '';

  if (isNaN(figure)) {
    rez = "Number incorrect value. Enter correct number";
    return;
  }

  switch (figure) {
    case 1:
      rez = "!";
      break;

    case 2:
      rez = "@";
      break;

    case 3:
      rez = "#";
      break;

    case 4:
      rez = "$";
      break;

    case 5:
      rez = "%";
      break;

    case 6:
      rez = "^";
      break;

    case 7:
      rez = "&";
      break;

    case 8:
      rez = "*";
      break;

    case 9:
      rez = "()";
      break;

    case 0:
      rez = ")";
      break;

    default:
      rez = "Figure incorrect value. Enter correct figure";
  }

  document.getElementById("figure-result").innerHTML = rez;
}

function My_task3() {
  var n1 = document.getElementById("figures_top").valueAsNumber;
  var n2 = document.getElementById("figures_end").valueAsNumber;
  var sum = 0;
  var from = n1,
      to = n2;

  if (isNaN(n1)) {
    sum = "First number incorrect value. Enter correct first number";
    return;
  }

  if (isNaN(n2)) {
    sum = "Second number incorrect value. Enter correct second number";
    return;
  }

  if (n1 > n2) {
    from = n2;
    to = n1;
  }

  for (var i = from; i <= to; i++) {
    sum += i;
  }

  document.getElementById("figures-result").innerHTML = sum;
}

function My_task4() {
  var n1 = document.getElementById("figures_one").valueAsNumber;
  var n2 = document.getElementById("figures_two").valueAsNumber;
  var totalDivider = 0;

  if (isNaN(n1)) {
    totalDivider = "First number incorrect value. Enter correct first number";
    return;
  }

  if (isNaN(n2)) {
    totalDivider = "Second number incorrect value. Enter correct second number";
    return;
  }

  if (n1 <= 0 && n2 <= 0) {
    totalDivider = "Figures incorrect value. Enter correct figures";
    return;
  }

  var min = n1 < n2 ? n1 : n2;

  for (var i = 0; i <= min; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      totalDivider = i;
    }
  }

  document.getElementById("figure-res").innerHTML = totalDivider;
}

function My_task5() {
  var num1 = document.getElementById("number_one").valueAsNumber;
  var allDivider = 0;

  if (isNaN(num1)) {
    allDivider = "First number incorrect value. Enter correct first number";
    return;
  }

  for (var i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      console.log(i);
      allDivider += ',' + i;
    }
  }

  document.getElementById("number-res").innerHTML = allDivider; // how show all numbers in my (div)
}

function My_task6() {
  var figures = document.getElementById("total_one").valueAsNumber;
  var a = parseInt(figures / 10000);
  var b = parseInt(figures / 1000) % 10;
  var c = parseInt(figures / 100) % 10;
  var d = parseInt(figures / 10) % 10;
  var e = parseInt(figures % 10);
  var polindrom = '';

  if (isNaN(figures)) {
    polindrom = "Figures incorrect value. Enter correct figures";
    return;
  }

  if (a === e && b === d) {
    polindrom = "\u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C";
  } else {
    polindrom = "Figures incorrect value";
  }

  document.getElementById("total_rez").innerHTML = polindrom;
}

function My_task7() {
  var amount = document.getElementById("purchase_one").valueAsNumber;
  var amount_rez = '';

  if (isNaN(amount)) {
    amount_rez = "Amount incorrect value. Enter correct amount";
    return;
  }

  if (amount >= 200 && amount <= 299) {
    amount_rez = "discount 3%";
  } else if (amount >= 300 && amount <= 499) {
    amount_rez = "discount 5%";
  } else if (amount >= 500 && amount <= 4999) {
    amount_rez = "discount 7%";
  } else {
    amount_rez = "Amount incorrect value";
  }

  document.getElementById("purchase_rez").innerHTML = amount_rez;
}

function My_task8() {
  var count = 1;
  var positive = 0;
  var negative = 0;
  var evenNumber = 0;
  var oddNumber = 0;
  var zero = 0;

  while (count <= 10) {
    var amountNumber = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u2116".concat(count, ":")));

    if (!isNaN(amountNumber)) {
      if (amountNumber === 0) {
        zero++;
      } else if (amountNumber > 0) {
        positive++;
      } else {
        negative++;
      }

      if (amountNumber !== 0) {
        if (amountNumber % 2 === 0) {
          evenNumber++;
        } else {
          oddNumber++;
        }
      }

      count++;
    } else {
      alert("Будь ласка, введіть коректне число.");
      return;
    }
  }

  alert("\u0414\u043E\u0434\u0430\u0442\u043D\u0456: ".concat(positive, ", \u0412\u0456\u0434'\u0454\u043C\u043D\u0456: ").concat(negative, ", \u041D\u0443\u043B\u0456: ").concat(zero, ", \u041F\u0430\u0440\u043D\u0456: ").concat(evenNumber, ", \u041D\u0435\u043F\u0430\u0440\u043D\u0456: ").concat(oddNumber));
  console.log("\u0414\u043E\u0434\u0430\u0442\u043D\u0456: ".concat(positive));
  console.log("\u0412\u0456\u0434'\u0454\u043C\u043D\u0456: ".concat(negative));
  console.log("\u041D\u0443\u043B\u0456: ".concat(zero));
  console.log("\u041F\u0430\u0440\u043D\u0456: ".concat(evenNumber));
  console.log("\u041D\u0435\u043F\u0430\u0440\u043D\u0456: ".concat(oddNumber));
}

function My_task9() {
  var currentDayNumber = 0;
  var currentDayName = '';
  var answer = true;

  do {
    switch (currentDayNumber) {
      case 0:
        currentDayName = 'Monday';
        break;

      case 1:
        currentDayName = 'Tuesday';
        break;

      case 2:
        currentDayName = 'Wednesday';
        break;

      case 3:
        currentDayName = 'Thursday';
        break;

      case 4:
        currentDayName = 'Friday';
        break;

      case 5:
        currentDayName = 'Saturday';
        break;

      case 6:
        currentDayName = 'Sunday';
        break;
    }

    answer = confirm("".concat(currentDayName, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));

    if (answer) {
      currentDayNumber++;
    }

    if (currentDayNumber === 7) {
      currentDayNumber = 0;
    }
  } while (answer);
}

function leapYear(y) {
  return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}

function My_task10() {
  var dayIn = document.getElementById("day_one").valueAsNumber;
  var monthIn = document.getElementById("month_one").valueAsNumber;
  var yearIn = document.getElementById("year_one").valueAsNumber;

  var addZero = function addZero(n) {
    return n < 10 ? '0' + n : '' + n;
  };

  var dayOut = 0,
      monthOut = 0,
      yearOut = 0;
  dayOut = dayIn + 1;
  monthOut = monthIn;
  yearOut = yearIn;

  switch (monthIn) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dayIn === 31) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }

      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (dayIn === 30) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }

      break;

    case 2:
      if (leapYear(yearIn)) {
        if (dayIn === 29) {
          dayOut = 1;
          monthOut = monthIn + 1;
        }
      } else {
        if (dayIn === 28) {
          dayOut = 1;
          monthOut = monthIn + 1;
        }
      }

      break;
  }

  if (monthOut === 13) {
    monthOut = 1;
    yearOut = yearIn + 1;
  }

  document.getElementById("rezult_one").innerHTML = "".concat(addZero(dayOut), "/").concat(addZero(monthOut), "/").concat(yearOut);
}

function My_task11() {
  var multy = '';

  for (var i = 2; i <= 10; i++) {
    multy += '<ul>';

    for (var j = 1; j <= 9; j++) {
      multy += "<li>".concat(i, " * ").concat(j, " = ").concat(i * j, "</li>");
    }

    multy += "</ul>";
  }

  document.getElementById('multy_table').innerHTML = multy;
}

function My_task12() {
  var min = 0;
  var max = 100;
  var middleNumber = 0;
  var answer = 0;

  do {
    middleNumber = parseInt((max + min) / 2);

    if (confirm("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435 ".concat(middleNumber, "?"))) {
      min = middleNumber;
      answer = middleNumber + 1;
    } else {
      max = middleNumber;
      answer = middleNumber;
    }
  } while (max - min > 1);

  alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 ".concat(answer));
}