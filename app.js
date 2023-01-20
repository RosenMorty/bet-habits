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

function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(2,3));

const poft = (num, power) => num ** power; 
console.log(poft(2,3));