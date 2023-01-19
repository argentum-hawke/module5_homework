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