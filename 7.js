// Задание 8
let $map = new Map();
$map.set(false, 'hello');
$map.set(0, 1);
$map.set(1, true);
for (let item of $map) {
    console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}