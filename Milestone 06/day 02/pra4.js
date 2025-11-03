// Task: Create a new array of employee names with their salaries increased by 10%.
const employees = [
  { id: 1, name: "Sam", salary: 5000 },
  { id: 2, name: "John", salary: 7000 },
  { id: 3, name: "Sara", salary: 4000 }
];

const increment = employees.map(element=>({
    id : element.id,
    name : element.name,
    salary: element.salary*(10/100) + element.salary
}))
console.log(increment)