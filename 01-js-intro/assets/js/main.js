function a () {
    let userLastname = 'My name';
    let phone = 'iPhone';
    let car =  'Skoda';
    let myText = 'Chapter2000';
    // let name = 'Bob';
    // let your lastname = 'Ivanov';
    // let 11car = 'Audi';
    // let admin = 'Charli';
    // let іʼмя = 'Bob';
}

function b () {
    let userLastname = 'camelCase';
    let user_email = 'snake_case';
    // let user-tel = 'kebab-case';

}

// let
/* var */ 

function task1() {
    const userName = prompt("What is your name?");
    alert(`Hello, ${userName}!`);
}

function task2() {
    const birthYear = parseInt(prompt("Enter your birth year"));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    alert(`You are ${age} years old`);
}

function task3() {
    const sideLength = parseInt(prompt("Side of a square"));
    const square = sideLength * 4;  
    alert(`Perimeter of a square ${square}`);
}

function task4() {
    const radius = parseInt(prompt("Radius of the circle"));
    const areaCircle = Math.PI * Math.pow(radius, 2);
    alert(`Area of the circle ${areaCircle}`);
}

function task5() {
    const myWay = parseInt(prompt("Distance between cities"));
    const myTime = parseInt(prompt("Time on the way"));
    const mySpeed = myWay / myTime;
    alert(`Speed on the way ${mySpeed}`);
}

function task6() {
    const dollar = 37.4;
    const euro = 41.5;
    const coefficient = euro / dollar;
    const myMoney = parseInt(prompt("My dollar's"));
    const currency = myMoney / coefficient;
    const trueCurrency = Math.round(currency);
    alert(`You euro's ${trueCurrency}`);
}