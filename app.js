const a = prompt ("Сколько будет 7 + или - 15 ?");
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
}