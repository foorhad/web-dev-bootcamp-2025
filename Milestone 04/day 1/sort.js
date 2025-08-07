const numbers=[2,3,4,46,5,6,8,30,89,7,9,10], alpha=['b','e','a','c','d','f'];
alpha.sort();
numbers.sort();
console.log(numbers);
console.log(alpha);
numbers.sort(function(a,b) {return a-b});
console.log(numbers);
numbers.sort(function(a,b) {return b-a});
console.log(numbers);