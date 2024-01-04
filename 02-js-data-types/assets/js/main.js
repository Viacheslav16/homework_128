function task1() {
    const money = parseInt(prompt("Введіть суму грошей в гаманці"));
    const chocolate = parseInt(prompt("Введіть ціну однієї шоколадки"));
    const pieces = parseInt(money / chocolate);
    const remainder = parseInt(money % chocolate);
    alert (`${pieces} шоколадок може купити користувач і ${remainder} здачі залишиться.
    `)
}

function task2() {
    const d = parseInt(prompt("Введіть тризначне число"));
    const a = parseInt(d / 100);
    const b = parseInt(d / 10) % 10;
    const c = d % 10;
    const rez = c + "" + b + "" + a;
    alert(`Число задом наперед ${rez}`);
}

function task3() {
    const myMoney = parseInt(prompt("Введіть суму вкладу в банк"));
    const bankPercent = 5;
    const newPercent = (myMoney / 100) * bankPercent;
    const cashMonth = (newPercent / 12) * 2;
    const newMoney = parseInt(cashMonth);
    alert(`Суму нарахованих відсотків за 2 місяці є ${newMoney}`);
}