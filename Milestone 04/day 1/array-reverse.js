const student = ['a','b','c','cgt','dhaka','rangpur','rajshahi'], students=[];
for(let x=0;x<student.length;x++){
    // students.push(student[x]);
    students.unshift(student[x]);
}
console.log(students);

const numbers = [1,2,3,4,5,6,7,8];
numbers.reverse();
console.log(numbers);
