const today = new Date();
const date = new Date('2062-10-19');
console.log(date.getDate());
console.log(date.getMonth());
const speceficDate = new Date(2025,8,14);
console.log(speceficDate);
speceficDate.setMonth(12);
console.log(speceficDate);
console.log(speceficDate.toLocaleString('en-GB'))
console.log(speceficDate.getDate())
console.log(speceficDate.getMonth())
console.log(speceficDate.getFullYear())