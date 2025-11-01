const students = [
    {id:1, name:'forhad',marks:60},
    {id:2, name:'nabil',marks:70},
    {id:3, name:'Rohoman',marks:65},
    {id:4, name:'Kaiser',marks:70},
]

const names = students.map(student => student.name);
const goodStudents = students.filter(student => student.marks > 69);
const goodStudent = students.find(student => student.marks >= 70)
console.log(names)
console.log(goodStudents);
console.log(goodStudent)