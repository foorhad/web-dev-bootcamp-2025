document.getElementById("btn1").addEventListener("mousemove", function(){
    // alert("added to cart")
    // console.log("added to cart")
})

const titles = document.getElementsByClassName("title");
console.log(titles)

function capitalLetter(str){
    return str.toUpperCase();
}

for(let i of titles){
    // i.innerHTML = `<span class="text-pink-600">${capitalLetter(i.innerText)}</span>`;
    // i.innerHTML = `<span class="text-pink-600">We are PH Student</span>`;
    i.classList.remove("title");
}