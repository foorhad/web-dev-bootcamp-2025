console.log("Explore Api")

const person={
    name : 'forhad',
    gender : 'male',
    roll : 33,
    skills : true,
}
console.log(person);
//convert string
const personJson = JSON.stringify(person);
console.log(personJson)
console.log(typeof personJson)

//convert object
const parseJson = JSON.parse(personJson)
console.log(parseJson)
console.log(typeof parseJson)
