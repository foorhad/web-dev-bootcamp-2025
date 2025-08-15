let arr = [0,3,12,34,1,90];
let max = arr[0];
for(let i of arr){
    if(i < max)max=i
}
console.log(max);