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
    // i.classList.remove("title");
}

function getId(id){
    return document.getElementById(id); 
}

getId("btn1").addEventListener("click", function(){

    // price
    const titles= getId("title").innerText;
    const priceOfproduct = getId("price").innerText;
    const currentBalance =  getId("total-money").innerText;
    const totalPrice = Number(priceOfproduct) + Number(currentBalance);
    console.log(totalPrice)
    getId("total-money").innerText = totalPrice;
    let cartContainer = getId("cart-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
                  <div class="cart1 flex justify-between items-center bg-gray-300 p-4 rounded-sm mb-4">
            <img src="assets/kitchen-1.png" alt="">
            <div>
              <h1 class="font-bold">${titles}</h1>
              <h1 class="text-gray-600">${priceOfproduct}</h1>
            </div>
          </div>
    `;
    cartContainer.append(newCart);
})

//total money