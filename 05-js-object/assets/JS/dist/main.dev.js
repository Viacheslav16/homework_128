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
    setDriverName: function mytask1() {
      var name = document.getElementById("name_one").value;
      this.DriverName += name;
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
    calcFuelForDistance: function mytask2() {
      var distance = document.getElementById("number_one").valueAsNumber;
      var fuel = distance * this.Using / 100;
      var rechargeCnt = Math.trunc(fuel / this.FuelCapacity);
      return {
        fuel: fuel,
        rechargeCnt: rechargeCnt
      };
    }
  };
  document.getElementById('car_table').innerHTML = car.showInfo(), car.setDriverName();
  document.getElementById('fuel_table').innerHTML = fuel, rechargeCnt;
}

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
      return this.h * 3600 + this.m * 60 + s; // функція,що переводить час в секунди
    },
    sec2time: function sec2time(sec) {
      var hours = Math.floor(sec / 3600);
      var minutes = Math.floor(sec / 60);
      var seconds = sec % 60;
      return {
        h: hours,
        m: minutes,
        s: seconds
      };
    },
    // Внутрішня функція для нормалізації часу (перетворення зайвих секунд та хвилин)
    norm2time: function norm2time() {
      if (this.m = 60) {
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
    }
  };

  for (var key in time) {
    if (typeof time[key] !== 'function') {
      return "".concat(key, " = ").concat(time[key]);
    }
  }

  document.getElementById('time-result').innerHTML = time.time2sec(), sec2time(sec);
}