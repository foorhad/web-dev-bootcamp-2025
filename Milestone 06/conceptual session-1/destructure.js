const [a, ,b,c] = [2,3,45,120]
console.log(c)
const person = {
    name : 'forhad',
    age : 20,
    city : {
        div1 : 'dhaka',
        div2 : 'rangpur',
        total_div : 7
    },
    div : 'ctg'
}
const {name,age,city,div} = {...person};
person.div = 'Dhaka'
console.log(name,age,div,city  );