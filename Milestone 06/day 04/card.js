const card=()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then((res) => res.json())
    .then((data) =>cardfnc(data))

}


const cardfnc=(cart)=>{
    
    //get parent
    const parent = document.getElementById("list-container")

    cart.forEach(element => {
        // console.log(element)

        //create element
        const li = document.createElement('li')
        li.innerText = element.name
        parent.appendChild(li)
    });

}