const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
// for(const num of numbers){
//     sum += num
// }

const total = numbers.reduce((a,b) => a + b, 0);
// console.log(sum)
console.log(total)