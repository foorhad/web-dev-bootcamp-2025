function add1(a,b){
    console.log(a,b);
}
const add = function(a,b){
    console.log(a,b);
}

// arrow function
const mul = (a,b) => a*b;

add1(23,10)
add(900,800)
console.log(mul(20,9));

// multi line arrow function
const multi = function(x,y){
    const a = x*3, b = y*5;
    return a*b;
}

const result=multi(2,3);
console.log("Multiline result is : ",result);