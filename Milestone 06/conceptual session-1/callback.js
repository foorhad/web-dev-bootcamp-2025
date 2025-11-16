const person = name =>{
    const ex = `hi ${name}! how are you?`
    return ex;
}

const person2 = (country,age,city,name) =>console.log(`${name} is a citizen of ${country} and him dis is ${city} and her age is ${age}`)

person2("Bangladesh",25,"Dhaka",person("shahil"));