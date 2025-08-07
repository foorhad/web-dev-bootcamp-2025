const student = ['a','b','c','cgt','dhaka','rangpur','rajshahi'];
console.log(student);
for(let i=0;i<student.length;i++)console.log(i,'-',student[i]);
console.log("=========================");
let i=0;
while(i<student.length){
    console.log(student[i]);i++;
}
console.log("=========================");
for(let i=(student.length)-1;i>=0;i--)console.log(i,'-',student[i]);