// function add(){
//     console.log(arguments)
// }
// add(1,2,4);

//array max

const number = [23,21,22,24,25];
console.log(...number);

const maxNumber = Math.max(...number);
console.log(maxNumber)

let second = [...number,345];
second.push(343);
console.log(second);


//array merged
const a = [1,2,3,4,5,12,34];
const b = [6,7];
const c = [...a, ...b];
console.log(c);


//object merged
const identity = {
    name : "Forhad",
    Profession : "Developer",
    Skill : "Mern-Stack"
    }
const identity1 = {
    name : "Rahim",
    Profession : "Engineers",
    Skill : "Full Stack"
    }
const both = {identity,identity1};
console.log(both)