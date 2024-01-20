1.// Напиши всі можливі варіанти створення функцій.
2.// Створи функцію, яка буде виводити кількість переданих їй аргументів.
const f = [1,2,3,4,5,6,7];

function NewFunc(func) {
    console.log(func);
    console.log('arguments', arguments);
}
NewFunc(f);

// Параметри передаються як обʼєкти (деструктиризація обʼєктів)

NewFunc(...f);

const user = {
    firstName: `Anna`,
    age: 21,
    email:`email@ddd.com`
}

function checkUser ({firstName,age}) {
    console.log(firstName,age);
    console.log(arguments);
}
checkUser (user);

checkUser ({firstName: `Max`,age: 27,});

// інші варіанти створення функції
// Анонімна Функція 
(function anonim () {
    console.log('Hello');
})()
// функція expresion(створює змінну)

var d = function sum (a,b) {
    return a + b;
}

// функція declaratioin(автоматично підіймає функцію до гори)

function sum(a,b) {
    return a + b;
}

// функція Call Back(замінює default функцію на кастомну функцію)

function sayMe(name) {
    console.log(`Hello, ${name}`);
}
function getIt(hello = (p)=>{}) {
    const userName = prompt(`enter name`)

    if (user) {
        hello(userName)
    }else {
        alert ('Name is empty')
    }
}
    const hello2 = (p)=>{document.write(`hello,` + p)}
    getIt(hello2);

// стрілкова функція
    let total = (h,k) => h + k;
    alert(total(h,k));

3.// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function My_task1(){
    const p = document.getElementById(`number_one`).valueAsNumber;
    const s = document.getElementById(`number_two`).valueAsNumber;
    const result = sorted(p, s);

    function sorted (firstNum,secondNum){
        if(firstNum > secondNum) {
            return 1;
        }
        if(firstNum < secondNum) {
            return -1;
        }
        if(firstNum === secondNum) {
            return 0;
        }
    }

    document.getElementById('number-result').innerHTML = result;
}

4.// Напиши функцію, яка обчислює факторіал переданого їй числа.

function My_task2(){
    const f = document.getElementById(`number_fact`).valueAsNumber;
    const rez = factorialRez(f);

    function factorialRez (n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorialRez(n - 1);
        }
    }

    document.getElementById('fact-result').innerHTML = rez;
}

5.// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.

function My_task3(){
    const oneNum = document.getElementById(`num_one`).valueAsNumber;
    const twoNum = document.getElementById(`num_two`).valueAsNumber;
    const threeNum = document.getElementById(`num_three`).valueAsNumber;
    const NumRez = totalNumber(oneNum,twoNum,threeNum);

    function totalNumber(total1,total2,total3) {
        const total_rez = total1 *100 + total2 *10 + total3;
        return total_rez;
    }

    document.getElementById('rezult_one').innerHTML = NumRez;
}

6.// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function My_task4(){
    const one_side = document.getElementById(`first_side`).valueAsNumber;
    const second_side = document.getElementById(`second_side`).valueAsNumber;
    let perimetr = totalPerimetr(one_side,second_side);


    if(!isNaN(one_side) && !isNaN(second_side)){
        perimetr = totalPerimetr(one_side,second_side)
    }else if(!isNaN(one_side) && isNaN(second_side)){
        perimetr = totalPerimetr(one_side)
    }else if (isNaN(one_side) && !isNaN(second_side)){
        perimetr = totalPerimetr(second_side)
    }
    
    function totalPerimetr(m,n = m) {
        return m * n;
    }

    document.getElementById('total_side').innerHTML = perimetr;
}

5.// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.

function My_task5() {
    const myNumber = document.getElementById(`num_top`).valueAsNumber;
    const idealRez = perfectNumber(myNumber);

    if (myNumber <= 0) {
        return false; 
    }
    
    function perfectNumber(n) {
        let sum = 0;

        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
    
        return sum === n;
    }

    document.getElementById('top_result').innerHTML = idealRez;

}

6.// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 

function My_task6(){
    const oneNum = document.getElementById(`first_num`).valueAsNumber;
    const twoNum = document.getElementById(`second_num`).valueAsNumber;
    const myRange = perfectFingers(oneNum,twoNum);
    const rezTotal = perfectRange(oneNum,twoNum);
    
    if (oneNum <= 0 && twoNum <= 0) {
        return false; 
    }
    

    function perfectFingers(f) {
        let sum = 0;

        for (let i = 1; i < f; i++) {
            if (f % i === 0) {
                sum += i;
            }
        }
    
        return sum === f;
    }
    
    function perfectRange(oneNum,twoNum) {
        const perfectNumbers = [];

        for (let num = oneNum; num <= twoNum; num++) {
            if (perfectFingers(num)) {
                perfectNumbers.push(num);
            }
        }
    }

    document.getElementById('total_side').innerHTML = `myRange: ${myRange}, rezTotal: ${rezTotal}`;;

}
// need a help, it does't work