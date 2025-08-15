let num = [12,13,14,12,15,7,14,7], nums=[];
for(let i=0;i<num.length;i++){
    if(nums.includes(num[i]))continue
    else nums.push(num[i])
}
console.log(nums);
