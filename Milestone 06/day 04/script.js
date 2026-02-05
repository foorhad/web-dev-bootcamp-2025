const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((d) => console.log(d))

}

const loadfetch = () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then((res)=>res.json())
    .then((data) =>{
        displayPost(data)
        console.log(data)
    })
}

const displayPost=(post)=>{
    post.forEach(element => {
      console.log(element)  
    });
}
// console.log("Explore Api")

// const person={
//     name : 'forhad',
//     gender : 'male',
//     roll : 33,
//     skills : true,
// }
// console.log(person, typeof person);
// //convert string
// const personJson = JSON.stringify(person);
// console.log(personJson)
// console.log(typeof personJson)

// // //convert object
// const parseJson = JSON.parse(personJson)
// console.log(parseJson)
// console.log(typeof parseJson)
