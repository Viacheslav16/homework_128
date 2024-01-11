function task1() {
    const money = parseInt(prompt("Введіть суму грошей в гаманці"));
    const chocolate = parseFloat(prompt("Введіть ціну однієї шоколадки"));
    const pieces = parseInt(money / chocolate);
    const remainder = parseFloat(money % chocolate).toFixed(2);
    alert (`${pieces} шоколадок може купити користувач і ${remainder} здачі залишиться.
    `)
}

function task2() {
    const d = parseInt(prompt("Введіть тризначне число"));
    const a = parseInt(d / 100);
    const b = parseInt(d / 10) % 10;
    const c = d % 10;
    const rez = c *100 + b *10 + a;
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
function task4() {
    const k = parseInt(prompt("Користувач вказує обсяг флешки в Гб"));
    const p = parseInt(k * 1024)
    const l = 850;
    const g = (p / l);
    const n = parseInt(g);
    alert (`${n} файлів розміром в 820 Мб поміщається на флешку`)
}