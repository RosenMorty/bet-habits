/*const a = prompt ("Сколько будет 7 + или - 15 ?");
const num = String(22);
const num2 = String(-8);
switch (a) {
    case num:
        console.log("Успех");
    break;
    case num2:
        console.log("Успех");
    break;
    case "Я не робот":
        console.log("Пиздабол!");
    break;
    default:
        console.log("Долбаеб!");
} */

/*const balance = 1000;
const bonusBalance = 100;
const isBanned = false;
const isErist = false;
const isSelling = true;
if (balance >= 1000 || bonusBalance >= 100 && !isBanned && !isErist && isSelling) {
    console.log("Ты можешь купить игру!");
} else {
    console.log("Нюхуай бебру");
} */

/*function toPower(num, power) {
    const res = num ** power;
    return res;
}
console.log(toPower(2,3));

const poft = (num, power) => num ** power; 
console.log(poft(2,3)); */
/*const age = Number(prompt("Сколько тебе лет ?"));
const work = String(prompt("Есть ли у тебя работа ?"));
let money = Number(prompt("Сколько у тебя денег ?"));
function userData (age, work, money) {
    if (money >= 2000) {
        return console.log(`У тебя хватает денег сумма твоего депозита становится: ${money}$ `, true);
    } 
    if (age >= 24 && work === "да" && money < 2000) {
        money += 500;
        if (money >= 2000) {
            return console.log(`У тебя не хватает денег, но мы выдаем тебе кредит 500$ и сумма твоего депозита становится: ${money}$ `, true);
        } else {
            return console.log("Ты нищий", false);
        }
    } else if (age >= 24){
        money +=100;
        if (money >= 2000) {
            return console.log(`У тебя не хватает денег, но мы выдаем тебе кредит 100$ и сумма твоего депозита становится: ${money}$ `, true);
        } else {
            return console.log("Ты нищий", false);
        }
    } else if (age < 24 && money < 2000) {
        return console.log("Купить не получится!", false)
    }
}
console.log(userData(age,work,money)); */

/*const tasks = ['Задача 1'];
const res = tasks.push('Задача 2', 'Задача 3', 'Задача 4');
console.log(tasks);
const res2 = tasks.splice(1,1);
console.log(tasks);
console.log(res2.concat(tasks));*/

/*function splitTo (url) {
    const mass = url.split('/');
    const [protocol ,_, domen, ...site] = mass;
    const mas = protocol.split(':');
    mas.splice(1,1);
    const sitee = site.join('/');
    console.log(mas[0] + ";", domen + ";", '/' + sitee + ";");
}
splitTo('https://purpleschool.ru/course/javascript'); */

/* const arr = ['!', 'JS', 'люблю', 'я'];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
} */

const operations = [1000, -700, 300, -500, 10000];
let stDohod = 0;
let stRashod = 0;
function myMoney(balance, operations) {
    for (let element of operations) {
        console.log(balance += element);
        if (balance < 0) {
            console.log("False");
        } 
        if (element > 0) {
            stDohod += element;
        } 
        if (element < 0) {
            stRashod += element;
        }
    } 
    console.log(`Итоговый баланс: ${balance}$`);
    console.log(`Средний доход: ${stDohod/3}$`);
    console.log(`Средний расход: ${stRashod/2}$`);
};

myMoney(100, operations);