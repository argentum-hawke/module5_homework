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