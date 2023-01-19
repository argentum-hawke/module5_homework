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