function task1() {
    const age = parseInt(prompt("Введіть свій вік"));

    if(isNaN(age)){
        alert (`Age incorrect value. Enter correct age`);
        return;
    }

    if (age>=0 && age<=11){
        alert(`Дитина`);
    }
    else if (age>=12 && age<=17){
        alert(`підліток`);
    }
    else if (age>=18 && age<=59){
        alert(`дорослий`);
    }
    else if (age>=60 && age<=120){
        alert(`пенсіонер`);
    }
    else{
        alert(`Невірно введений вік`);
    }
}

function My_task1() {
    const age = document.getElementById(`age_top`).valueAsNumber;
    let rez = '';

    if(isNaN(age)){
        rez = `Age incorrect value. Enter correct age`;
        return;
    }

    if (age>=0 && age<=11) {
        rez = (`Дитина`);
    }
    else if (age>=12 && age<=17) {
        rez = (`підліток`);
    }
    else if (age>=18 && age<=59) {
        rez = (`дорослий`);
    }
    else if (age>=60 && age<=120) {
        rez = (`пенсіонер`);
    }
    else {
        rez = (`Не вірно введений вік`);
    }
    document.getElementById(`age-result`).innerHTML = rez
}

function My_task2() {
    const figure = document.getElementById(`figure_top`).valueAsNumber;
    let rez = '';

    if(isNaN(figure)){
        rez = `Number incorrect value. Enter correct number`;
        return;
    }
    switch(figure){
        case 1:
            rez = (`!`);
            break;
        case 2:
            rez = (`@`);
            break;
        case 3:
            rez = (`#`);
            break;
        case 4:
            rez = (`$`);
            break;
        case 5:
            rez = (`%`);
            break;
        case 6:
            rez = (`^`);
            break;
        case 7:
            rez = (`&`);
            break;
        case 8:
            rez = (`*`);
            break;
        case 9:
            rez = (`()`);
            break;
        case 0:
            rez = (`)`);
            break;
        default:
            rez = (`Figure incorrect value. Enter correct figure`);
    }
    
    document.getElementById(`figure-result`).innerHTML = rez
}

function My_task3() {
    const n1 = document.getElementById("figures_top").valueAsNumber;
    const n2 = document.getElementById("figures_end").valueAsNumber;
    let sum = 0;
    let from = n1,
        to = n2;

    if(isNaN(n1)){
        sum = "First number incorrect value. Enter correct first number";
        return;
    }
    if(isNaN(n2)){
        sum = "Second number incorrect value. Enter correct second number";
        return;
    }
    if (n1 > n2) {
        from = n2;
        to = n1;
    }

    for(let i = from;i<=to;i++) {
        sum += i;
    }

    document.getElementById("figures-result").innerHTML = sum
}

function My_task4() {
    const n1 = document.getElementById("figures_one").valueAsNumber;
    const n2 = document.getElementById("figures_two").valueAsNumber;
    let totalDivider = 0;
    
    if(isNaN(n1)){
        totalDivider = "First number incorrect value. Enter correct first number";
        return;
    }
    if(isNaN(n2)){
        totalDivider = "Second number incorrect value. Enter correct second number";
        return;
    }
    if(n1<=0 && n2<=0){
        totalDivider = "Figures incorrect value. Enter correct figures";
        return;
    }
    
    const min = n1 < n2 ? n1 : n2;
    
     for(let i=0;i<=min;i++){
        if(n1 % i === 0 && n2 % i === 0){
            totalDivider = i;
        }
     }

    document.getElementById("figure-res").innerHTML = totalDivider
}

function My_task5() {
    const num1 = document.getElementById("number_one").valueAsNumber;
    let allDivider = 0;
    
    if(isNaN(num1)){
        allDivider = "First number incorrect value. Enter correct first number";
        return;
    }
    
     for(let i = 1;i<=num1;i++){
        if(num1 % i === 0){
            console.log(i);
            allDivider += ',' + i;
        }
     }

    document.getElementById("number-res").innerHTML = allDivider
    // how show all numbers in my (div)
}
 
function My_task6() {
    const figures = document.getElementById(`total_one`).valueAsNumber;
    const a = parseInt(figures / 10000);
    const b = parseInt(figures / 1000) % 10;
    const c = parseInt(figures / 100) % 10;
    const d = parseInt(figures / 10) % 10;
    const e = parseInt(figures % 10);
    let polindrom = '';


    if(isNaN(figures)){
        polindrom = `Figures incorrect value. Enter correct figures`;
        return;
    }

    if (a === e && b === d) {
        polindrom = (`паліндромом`);
    }
    else {
        polindrom = (`Figures incorrect value`);
    }
    document.getElementById(`total_rez`).innerHTML = polindrom
}

function My_task7() {
    const amount = document.getElementById(`purchase_one`).valueAsNumber;
    let amount_rez = '';

    if(isNaN(amount)){
        amount_rez = `Amount incorrect value. Enter correct amount`;
        return;
    }

    if (amount>=200 && amount<=299) {
        amount_rez = (`discount 3%`);
    }
    else if (amount>=300 && amount<=499) {
        amount_rez = (`discount 5%`);
    }
    else if (amount>=500 && amount<=4999) {
        amount_rez = (`discount 7%`);
    }
    else {
        amount_rez = (`Amount incorrect value`);
    }
    document.getElementById(`purchase_rez`).innerHTML = amount_rez
}

function My_task8() {
    let count = 1;
    let positive = 0;
    let negative = 0;
    let evenNumber = 0;
    let oddNumber = 0;
    let zero = 0;
    
   while(count<=10){
    let amountNumber = parseInt(prompt(`Введіть число №${count}:`));

        if(!isNaN(amountNumber)){
            if(amountNumber ===0){
                zero++;
            }else if(amountNumber > 0){
                positive++;
            }else {
                negative++;
            }

            if(amountNumber !== 0) {
                if(amountNumber % 2 === 0){
                    evenNumber++; 
                }else{
                    oddNumber++;
                }
            }
            count++;
        }else {
            alert("Будь ласка, введіть коректне число.");
            return;
        }
    }
    alert(`Додатні: ${positive}, Від'ємні: ${negative}, Нулі: ${zero}, Парні: ${evenNumber}, Непарні: ${oddNumber}`);
    console.log(`Додатні: ${positive}`);
    console.log(`Від'ємні: ${negative}`);
    console.log(`Нулі: ${zero}`);
    console.log(`Парні: ${evenNumber}`);
    console.log(`Непарні: ${oddNumber}`);
}

function My_task9(){
    let currentDayNumber = 0;
    let currentDayName = '';
    let answer = true;
    do {
        switch(currentDayNumber) {
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
        
        answer = confirm(`${currentDayName}. Хочеш побачити наступний день?`)
        if(answer){
            currentDayNumber++
        }
        if(currentDayNumber===7){
            currentDayNumber = 0;
        }
    }while (answer) 
}

function leapYear (y){
    return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}

function My_task10(){
    const dayIn = document.getElementById(`day_one`).valueAsNumber;
    const monthIn = document.getElementById(`month_one`).valueAsNumber;
    const yearIn = document.getElementById(`year_one`).valueAsNumber;
    const addZero = n => n<10?'0'+n:''+n;
    
    let dayOut = 0,
        monthOut = 0,
        yearOut = 0;

    dayOut = dayIn + 1;
    monthOut = monthIn;
    yearOut = yearIn;
   

    switch(monthIn) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if(dayIn === 31){
                dayOut = 1;
                monthOut = monthIn + 1;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(dayIn === 30){
                dayOut = 1;
                monthOut = monthIn + 1;
            }
            break;
        case 2:
            if(leapYear(yearIn)){
                if(dayIn === 29) {
                    dayOut = 1;
                    monthOut = monthIn + 1;
                }
            } else {
                if(dayIn === 28) {
                    dayOut = 1;
                    monthOut = monthIn + 1;
                }
            }
            break;
    }
    if (monthOut === 13){
        monthOut = 1;
        yearOut = yearIn + 1;
    }
  
    document.getElementById(`rezult_one`).innerHTML = `${addZero(dayOut)}/${addZero(monthOut)}/${yearOut}`;
}

function My_task11(){
    let multy = '';
    for(let i = 2;i<=10;i++){
        multy += '<ul>';
        for(let j = 1;j<=9;j++){
           multy += `<li>${i} * ${j} = ${i*j}</li>`;
        }
        multy += `</ul>`;
    }
    document.getElementById('multy_table').innerHTML = multy
}

function My_task12(){
    let min = 0;
    let max = 100;
    let middleNumber = 0;
    let answer = 0;

    do {
        middleNumber = parseInt((max + min) / 2);
        if (confirm(`Ваше число більше ${middleNumber}?`)){
            min = middleNumber
            answer = middleNumber + 1
        } else {
            max = middleNumber
            answer = middleNumber 
        }
    }
    while ( max - min > 1);
    alert(`Ви ввели ${answer}`)
}
