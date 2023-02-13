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

// const operations = [1000, -700, 300, -500, 10000];
// let stDohod = 0;
// let stRashod = 0;
// function myMoney(balance, operations) {
//     for (let element of operations) {
//         console.log(balance += element);
//         if (balance < 0) {
//             console.log("False");
//         } 
//         if (element > 0) {
//             stDohod += element;
//         } else if (element < 0) {
//             stRashod += element;
//         }
//     } 
//     console.log(`Итоговый баланс: ${balance}$`);
//     console.log(`Средний доход: ${stDohod/3}$`);
//     console.log(`Средний расход: ${stRashod/2}$`);
// };

//myMoney(100, operations); 

// const power = pow => num => num**pow;
// console.log(power(2)(3));

// const prices = [[100, 200], [120, 100], [200,350]];
// let con = prices
//     .map(el => { if (el[0] < el[1]) {
//         return el[1] - el[0];
//     }
// }).filter(price => {
//         return price > 0;
//     });
// console.log(con);
 
// const arr = [1, 4, 4, 10];
// let res = arr.reduce((acc, value) => {
//     return acc+=value/arr.length;
// }, 0);  
// console.log(res)

// const arr = [2, 4, 4, 10, 20];
//     function some(array, element) {
//         const res = arr.find( el => el === element);
//         return res == undefined ? false : true;
//     }
// console.log(some(arr,0));

// const userName = 'Вася aka Terminator Пупкин';
// let un = userName.slice(0, 4);
// let sn = userName.slice(userName.length - 6);
// console.log(un,sn);
// let second = userName['Пупкин'];

// const num1 = '89103235356';
// const num2 = '+79103235356';
// const num3 = '+7(910)3235356';
// const num4 = '+7(910) 323-53-56';
// const num5 = '   +7(910) 323-53-56   ';
// const num6 = ' asdfghjkla ';
// function check(num) {
//     num.trim()
//     .replace('+7', '8')
//     .replace(/()- /g)
//     if (num[0] === '8' && num.lenght == 11) {
//         console.log('Правильный номер:', num,); 
//     } else { 
//         console.log('Это не номер!');
//     }
// }
// console.log(check(num1))
// console.log(num1.length)

// const card = '2342834503458353'
// console.log(card.slice(-4).padStart(card.length, '*'));

// const users = [
//     {name: 'Вася', age: 30},
//     {name: 'Катя', age: 18},
//     {name: 'Аня', age: 40},
//     {name: 'Петя', age: 25}
// ];
// users.sort(function (min,max) {
//     if (min.age > max.age) {
//         return 1;
//     } if (min.age < max.age) {
//         return -1;
//     } else {
//         return;
//     }
// })
// console.log(users);

// console.log(users.sort((a, b) => a.age - b.age));

// const users = [
//     {
//     name: 'Вася',
//     surname: 'Пупкин',
//     age: 30,
//     skills: ['Разработка', 'DevOps']
// }, 
// {
//     name: 'Катя',
//     surname: 'Белова',
//     age: 18,
//     skills: ['Дизайн']  
// },
// ];
// users[0]['fullname'] = `${users[0].name} ${users[0].surname}`;
// users[1]['fullname'] = `${users[1].name} ${users[1].surname}`;
// users[0]['skillNum'] = Number(users[0].skills.length);
// users[1]['skillNum'] = Number(users[1].skills.length);
// console.log(users)

// const walet = {
//     balance: 0,
//     operation: [],
//         increase: function (sum,reason){
//         this.balance+=sum;
//         this.operation.push({
//             reason: reason,
//             sum: sum
//         })
//             return true;
//         },
//         decrease: function (sum,reason){
//         if(this.balance < sum){
//             console.log('Не хватает денег');
//             return false;
//         }
//         this.balance-=sum;
//         this.operation.push({
//             reason: reason,
//             sum: sum
//         })
//             return true;
//         },
//         getOperationLenght: function (){
//         return this.operation.length;
//         }
//     }
// console.log(walet.increase(1000, 'sads'));
// console.log(walet.getOperationLenght());
// console.log(walet.decrease(5000,'sfads'));
// console.log(walet.getOperationLenght());
// console.log(walet.increase(500,'ssdasdaads'));
// console.log(walet.getOperationLenght());

// const wareHouse = {
//     goods: [],
//     findGoodById: function (name) {
//         return name.id;
//     },
//     addGood: function (name) {
//         this.goods.push({name: name, id: this.goods.length+1});
//         this.goods.push(...name);
//     },
//     getWeightKg: function (name) {
//         let sum = 0;
//         console.log(name?.weight?.kg);
//     }
// };

// const car = {
//     id: 1,
//     weight: {
//         kg: 1000
//     },
//     brand: 'Ford'
// };

// const chair = {
//     id: 2,
//     weight: {
//         kg: 2
//     },
// };

// const paper = {
//     id: 3,
//     color: 'red'
// }

// console.log(wareHouse.addGood('car'));
// console.log(wareHouse.goods);

// const company = {
//     name: 'ООО Агро',
//     getName: function () {
//         return this.name
//     },
//     empliyees: [
//         {
//             name: 'Света',
//             getEmp: function () {
//                 return this.name
//             }
//         }
//     ],
//     ceo: {
//         name: 'Вася',
//         getCeo: function () {
//             return this.name
//         }
//     }
// }

// console.log(company.getName())
// console.log(company.ceo.getCeo())
// console.log(company.empliyees.map((el) => {return el.name}).join())


const namePas = {
    name: name,
    password: "0b"
} 
function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const p = removePassword.bind(namePas)
console.log(p(true))
console.log(namePas.password)