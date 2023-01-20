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
const age = Number(prompt("Сколько тебе лет ?"));
const work = prompt("Есть ли у тебя работа ?");
const money = Number(prompt("Сколько у тебя денег ?"));
function userData (age, work, money) {
    if (money >= 2000) {
        return console.log(`У тебя хватает денег сумма твоего депозита становится: ${money} $ `, true);
    } if (age >= 24 && work.toLowerCase === "да" && money < 2000) {
        money += 500;
        if (money >= 2000) {
            return console.log(`У тебя не хватает денег, но мы выдаем тебе кредит 500$ и сумма твоего депозита становится: ${money} $ `, true);
        } else {
            return console.log("Ты нищий", false);
        }
    } else if (age >= 24){
        money +=100;
        if (money >= 2000) {
            return console.log(`У тебя не хватает денег, но мы выдаем тебе кредит 100$ и сумма твоего депозита становится: ${money} $ `, true);
        } else {
            return console.log("Ты нищий", false);
        }
    } else if (age < 24 && money < 2000) {
        return console.log("Купить не получится!", false)
    }
}
console.log(userData(age,work,money));


