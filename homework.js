// Задание 1
let str = prompt("Пожалуйста, введите любое число");

if (!str.trim()) {
    console.log("Упс, кажется, вы ошиблись");
} else {
    let x = +str;

    if (typeof x === 'number' && !isNaN(x)) {
        if (x % 2 === 0) {
            console.log("Это число чётное")
        } else {
            console.log("Это число нечётное")
        }
    } else {
        console.log("Упс, кажется, вы ошиблись")
    }
}

// Задание 2
const x = null;
console.log(typeof x);
switch(typeof x) {
    case "number":
        console.log (x + ' число ');
        break;
    case "string":
        console.log (x + ' строка');
        break;
    case "boolean":
        console.log (x + ' логический тип ');
        break;
    default:
        console.log ("Тип не определен");
}

// Задание 3
let str = prompt('Пожалуйста, введите слово');
let strReverse = str.split('').reverse().join('')
console.log(strReverse);
alert(strReverse);

// Задание 4
let x = Math.floor((Math.random()*101))
console.log(x);

// Задание 5
let arr = [100, 'blabla', 0o0, 'text', 67];
let arrCount = arr.length;
console.log('Элементов: ' + arrCount);
for (let i = 0; i < arrCount; i++) {
    console.log(arr[i]);
}

// Задание 6
let arr1 = [1, 1, 1, 1,];
let arr = [1, 1, 1, 2];
let arg;

for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    for (let j = 0; j < arr.length; j++) {
        const elem = arr[j];
        if (elem === el) {
            arg = true
        } else {
            arg = false
            break
        }
    }
}

// Задание 7
const arr2 = [5,1,6,'hello',null,202,0];
let even = 0;
let odd = 0;
let count0 = 0;
arr.forEach(function(item,index,array) {
    if(typeof(item) == "number") {
        if (item ===0) {
            count0++
        } else if(item %2 == 0) {
            even++
        } else if (item %2 !=0) {
            odd++
        }
    }
});
console.log("Количество четных - "+even);
console.log("Количество нечетных - "+odd);
console.log("Количество нулей - "+count0);

// Задание 8
let $map = new Map();
$map.set(false, 'hello');
$map.set(0, 1);
$map.set(1, true);
for (let item of $map) {
    console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}