const displaypost = () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        postfnc(data)
        console.log(data)})
}

const postfnc =(post)=>{

    //1-get container using id
    const container = document.getElementById("list-container")

    post.forEach(element => {
    //2-create html element
    const li = document.createElement('li')
    li.innerText = element.id
    console.log(li);

    //li add to parent container
    container.appendChild(li)


        // console.log(element.body)
    });
}