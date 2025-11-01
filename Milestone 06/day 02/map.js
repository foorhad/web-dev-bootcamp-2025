const num = [2,3,4,5,6];
// const doubled = [];
// for(const i of num)doubled.push(i*2);
// console.log(doubled);

// const doubledIt = 

const doubled = num.map(x => x*3);

console.log(doubled);

const language = ['python','c','c++','javaScript','Laravel','php']
const length = language.map(x=>x.length)
const getFirstchar = language.map(x=>x[0].toUpperCase());
console.log(length)
console.log(getFirstchar)

const idx = language.map(index=> console.log(index));