console.log("Event handler connected")

document.getElementById("events")
        .addEventListener('click', function(){
            console.log("connected");
            const title = document.getElementById("title-text");
            title.innerText = 'Events Manipulations' 
            title.style.background = 'green'
            console.log(title);
        })

document.getElementById('log-in')
    .addEventListener('click', function(){
        const msg = document.getElementById('user-text')
        msg.innerText = 'User login sucessfully'
        msg.style.color = 'green'
        msg.style.backgroundColor = 'pink'
    })