const numbers=[2,4,1,12,43,99,64,100,64,3,21];
const srt=[];
for(let i=0;i<=100;i++){
    srt.push(0);
}
for(let i=0;i<numbers.length;i++){
    srt[numbers[i]]=numbers[i];
}
for(let x of srt){
    if(x!=0)console.log(x);
}
