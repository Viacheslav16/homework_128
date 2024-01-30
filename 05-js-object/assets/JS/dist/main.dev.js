"use strict";

1.; // Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//1) Метод, який виводить на екран інформацію про автомобіль.
//2) Додавання ім’я водія у список
//3)Перевірка водія на наявність його ім’я у списку
//4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

var car = {
  Brand: 'Skoda',
  Model: 'Oktavia',
  'Year of productin': 2009,
  Color: 'DarkGrey',
  'Max speed': 320,
  Using: 6.5,
  IsNew: false,
  IsMechanic: true,
  FuelCapacity: 55,
  IndentNumber: 'XX0000YY',
  DriverName: 'Viacheslav',
  setDriverName: function setDriverName() {
    var name = document.getElementById('name_one').value;

    if (this.DriverName.includes(name)) {
      alert('This name is already assigned to a driver. Enter another name.');
      return nameInfo;
    }

    if (!isNaN(name) || name === '') {
      alert('Enter a valid name');
      return nameInfo;
    } else {
      this.DriverName += ',' + name;
      return car.showInfo();
    }
  },
  showInfo: function showInfo() {
    var rez = '<ul>';

    for (var key in this) {
      if (typeof this[key] !== 'function') {
        rez += "<li class=\"list-group-item\"><b>".concat(key, ":</b> ").concat(this[key], "</li>");
      }
    }

    rez += '</ul>';
    return rez;
  },
  calcFuelForDistance: function calcFuelForDistance() {
    var distance = document.getElementById("number_one").valueAsNumber;
    var fuel = (distance * this.Using / 100).toFixed(1);
    var rechargeCnt = Math.trunc(fuel / this.FuelCapacity);
    var middleSpeed = 100;
    var normWay = 4;
    var hoursOfDriving = distance / middleSpeed;
    var totalPause = Math.trunc(hoursOfDriving / normWay);

    for (var i = hoursOfDriving; i >= 4; i++) {
      hoursOfDriving += totalPause;
      break;
    }

    return {
      Fuel: fuel,
      RechargeCnt: rechargeCnt,
      HoursOfDriving: hoursOfDriving
    };
  }
};

function My_car() {
  document.getElementById('car_table').innerHTML = car.showInfo();
}

function newService() {
  var fuelInfo = car.calcFuelForDistance();
  document.getElementById('fuel_table').innerHTML = "<p><b>Fuel:</b> ".concat(fuelInfo.Fuel, "</p><p><b>Recharge Count:</b> ").concat(fuelInfo.RechargeCnt, "</p><p><b>HoursOfDriving:</b> ").concat(fuelInfo.HoursOfDriving, "</p>");
}

function newName() {
  var nameInfo = car.setDriverName();

  if (confirm("Do you want to add new name?")) {
    document.getElementById('car_table').innerHTML = nameInfo;
  }
}

1.; // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1)Для виведення часу на екран.
// 2)Зміни часу на передану кількість секунд.
// 3)Зміни часу на передану кількість хвилин.
// 4)Зміни часу на передану кількість годин.
// 5)Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  h: 0,
  m: 0,
  s: 0,
  time2sec: function time2sec() {
    return this.h * 3600 + this.m * 60 + this.s; // функція,що переводить час в секунди
  },
  sec2time: function sec2time(sec) {
    var hours = Math.floor(sec / 3600);
    var minutes = Math.floor(sec / 60) - hours * 60;
    var seconds = sec % 60;
    return {
      h: hours,
      m: minutes,
      s: seconds
    };
  },
  // Внутрішня функція для нормалізації часу (перетворення зайвих секунд та хвилин)
  norm2time: function norm2time() {
    if (this.h === 24 && this.m === 60) {
      this.h = 1;
    }

    if (this.h === 24 && this.m !== 60) {
      this.h = 0;
    }

    if (this.m === 60) {
      this.h += this.m / 60;
    }

    if (this.h >= 24) {
      this.h %= 24;
    }

    if (this.s >= 60) {
      this.m += Math.floor(this.s / 60);
      this.s %= 60;
    }

    if (this.m >= 60) {
      this.h += Math.floor(this.m / 60);
      this.m %= 60;
    }
  },
  addSec: function addSec() {
    var plusSec = 0;

    if (plusSec >= 60) {
      time.norm2time();
    }

    return {
      h: this.h,
      m: this.m,
      s: this.s
    };
  }
};

function installTime() {
  var h = document.getElementById("figures_one").valueAsNumber;
  var m = document.getElementById("figures_two").valueAsNumber;
  var s = document.getElementById("figures_three").valueAsNumber;

  if (h === '' || h < 0 || h > 24 || isNaN(h)) {
    alert('Enter a valid hour (0-23)');
    return;
  }

  if (m === '' || m < 0 || m > 60 || isNaN(m)) {
    alert('Enter a valid minutes (0-60)');
    return;
  }

  if (s === '' || s < 0 || s > 60 || isNaN(s)) {
    alert('Enter a valid seconds (0-60)');
    return;
  } else {
    time.h = h;
    time.m = m;
    time.s = s;
  }
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : '' + n;
};

function myTime() {
  installTime();
  var sec = time.time2sec();
  time.norm2time();
  var showTime = time.sec2time(sec);
  document.getElementById('time-result').innerHTML = "".concat(addZero(showTime.h), ":").concat(addZero(showTime.m), ":").concat(addZero(showTime.s));
}

function instalSec() {
  var plusSec = document.getElementById("name_sec").valueAsNumber;

  if (plusSec === '' || plusSec < 0 || plusSec > 60 || isNaN(plusSec)) {
    alert('Enter a valid seconds (0-60)');
    return;
  } else {
    time.s += plusSec;
  }
}

function myNewsec() {
  instalSec();
  var newSec = time.addSec();
  document.getElementById('time-result').innerHTML = "".concat(addZero(newSec.h), ":").concat(addZero(newSec.m), ":").concat(addZero(newSec.s));
}