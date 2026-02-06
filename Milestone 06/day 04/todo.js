const todo=()=>{

    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        todofnc(data)
    })
}

//  "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false

const todofnc=(todo)=>{

    //get container
    const container = document.getElementById("todo-container")
    // container.innerHTML = "";
    todo.forEach(element => {
        
        const dv = document.createElement("div")
        dv.innerHTML = `
        <div class="todo-card">
        <h4>${element.title}</h4>
        </div>
        `;
        container.append(dv)
    });

}