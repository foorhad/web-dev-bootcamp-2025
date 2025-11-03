const students = [
  { id: 1, name: "David", grade: "A" },
  { id: 2, name: "Eve", grade: "C" },
  { id: 3, name: "Frank", grade: "B" }
];

const grade = students.find(element=>element.grade === "B");
console.log(grade.grade);