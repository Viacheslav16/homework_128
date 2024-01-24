"use strict";

1.; // Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//1) Метод, який виводить на екран інформацію про автомобіль.
//2) Додавання ім’я водія у список
//3)Перевірка водія на наявність його ім’я у списку
//4)Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

function My_task1() {
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
      var name = document.getElementById("name_one").value;

      for (var key in this) {
        if (this[key] === name && key === 'DriverName') {
          alert('This name is already assigned to a driver. Enter another name.');
          return;
        }
      }

      if (!isNaN(name) || name === '') {
        alert('Enter a valid name');
        return;
      } else {
        this.DriverName += ',' + name;
      }
    },
    showInfo: function showInfo() {
      var rez = '<ul>';

      for (var key in this) {
        if (typeof this[key] !== 'function') {
          rez += "<li><b>".concat(key, ":</b> ").concat(this[key], "</li>");
        }
      }

      rez += '</ul>';
      return rez;
    },
    calcFuelForDistance: function calcFuelForDistance() {
      var distance = document.getElementById("number_one").valueAsNumber;
      var fuel = distance * this.Using / 100;
      var rechargeCnt = Math.trunc(fuel / this.FuelCapacity);
      var middleSpeed = 100;
      var normWay = 4;
      var hoursOfDriving = distance / middleSpeed;
      var totalPause = Math.trunc(hoursOfDriving / normWay);

      for (var i = hoursOfDriving; i >= 4; i++) {
        hoursOfDriving += totalPause;
        break;
      }

      this.Fuel = fuel;
      this.RechargeCnt = rechargeCnt;
      this.HoursOfDriving = hoursOfDriving;
      return {
        Fuel: fuel,
        RechargeCnt: rechargeCnt,
        HoursOfDriving: hoursOfDriving
      };
    }
  };
  var nameInfo = car.setDriverName(); // I don't know how show information about (new name and fuel) use different button. I can user only first button 

  document.getElementById('car_table').innerHTML = car.showInfo(), nameInfo;
  var fuelInfo = car.calcFuelForDistance();
  document.getElementById('fuel_table').innerHTML = "<p><b>Fuel:</b> ".concat(fuelInfo.Fuel, "</p><p><b>Recharge Count:</b> ").concat(fuelInfo.RechargeCnt, "</p><p><b>HoursOfDriving:</b> ").concat(fuelInfo.HoursOfDriving, "</p>");
} // function addName(car,name) {
//     const nameInfo = car.setDriverName();
//     if(confirm(`Do you want to add ${name}?`)){
//         document.getElementById('car_table').innerHTML = nameInfo;
//     }
// }


1.; // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1)Для виведення часу на екран.
// 2)Зміни часу на передану кількість секунд.
// 3)Зміни часу на передану кількість хвилин.
// 4)Зміни часу на передану кількість годин.
// 5)Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

function myTime() {
  var addZero = function addZero(n) {
    return n < 10 ? '0' + n : '' + n;
  };

  var time = {
    h: document.getElementById("figures_one").valueAsNumber,
    m: document.getElementById("figures_two").valueAsNumber,
    s: document.getElementById("figures_three").valueAsNumber,
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
      if (this.m === 60) {
        this.h += this.m / 60;
      }

      if (this.h >= 24) {
        this.h % 24;
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
      var plusSec = document.getElementById("name_sec").valueAsNumber;

      if (plusSec >= 60) {
        this.m += Math.floor(plusSec / 60);
        this.s += plusSec %= 60;
      } else {
        this.s += plusSec;
      }

      return showTime; // I have problem with with function to add new seconds
    }
  };
  var sec = time.time2sec();
  time.norm2time();
  var showTime = time.sec2time(sec);
  var newSec = time.addSec();
  document.getElementById('time-result').innerHTML = "".concat(addZero(showTime.h), ":").concat(addZero(showTime.m), ":").concat(addZero(showTime.s));
  document.getElementById('sec-result').innerHTML = "".concat(addZero(newSec.h), ":").concat(addZero(newSec.m), ":").concat(addZero(newSec.s));
}