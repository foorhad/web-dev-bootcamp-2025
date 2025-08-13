function oddsum(num){
    let sum = 0
    for(let i=0;i<num.length;i++){
        if(num[i]%2==1)sum+=num[i];
    }
    return sum;
}

let num = [1,3,50,6,12,18,10]
console.log("sum of odd numbers: ",oddsum(num));