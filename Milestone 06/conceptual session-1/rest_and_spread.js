const sum = (...rest) =>{
    console.log(Math.max(...rest))
}
sum(12,1,4,55,21,1);

const ob ={
    name:'istiak',
    age:22,
}
const ob1 ={...ob};
ob1.age = 25
console.log(ob)
console.log(ob1)