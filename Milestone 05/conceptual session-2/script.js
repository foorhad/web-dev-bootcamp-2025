document.getElementById("btn1").addEventListener("mousemove", function(){
    // alert("added to cart")
    // console.log("added to cart")
})

const titles = document.getElementsByClassName("title");
// console.log(titles)

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

// traditional technique
// getId("btn1").addEventListener("click", function(){

//     // price
//     const titles= getId("title").innerText;
//     const priceOfproduct = getId("price").innerText;
//     const currentBalance =  getId("total-money").innerText;
//     const totalPrice = Number(priceOfproduct) + Number(currentBalance);
//     console.log(totalPrice)
//     getId("total-money").innerText = totalPrice;
//     let cartContainer = getId("cart-container");
//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//                   <div class="cart1 flex justify-between items-center bg-gray-300 p-4 rounded-sm mb-4">
//             <img src="assets/kitchen-1.png" alt="">
//             <div>
//               <h1 class="font-bold">${titles}</h1>
//               <h1 class="text-gray-600">${priceOfproduct}</h1>
//             </div>
//           </div>
//     `;
//     cartContainer.append(newCart);
// })

//total money

//delegation technique
getId("product-container").addEventListener("click",function(e){
    if(e.target.className.includes("cart-btn")){
        const cartButton = e.target;
    //get product details
        const productImage= cartButton.parentNode.childNodes[1].childNodes[1].src;
        const productTitle = cartButton.parentNode.childNodes[5].innerText
        const productPrice = cartButton.parentNode.childNodes[7].innerText


    //update price
        const currentBalance =  getId("total-money").innerText;
        const totalPrice = Number(productPrice) + Number(currentBalance);
        getId("total-money").innerText = totalPrice;
    
    //create new div
        let cartContainer = getId("cart-container");
        const newCart = document.createElement("div");
        newCart.innerHTML = `
        <div class="h-[120px] flex justify-between items-center bg-gray-300 py-10 px-2 rounded-sm mb-4">
            <img  src="${productImage}" alt="">
            <div>
              <h1 class="font-bold">${productTitle}</h1>
              <h1 class="text-gray-600">${productPrice}</h1>
            </div>
        </div>
        `;
        const currentQuantity = Number(getId("quantity-items").innerText) + 1;
        getId("quantity-items").innerText = currentQuantity;

     //append new div in parent div   
    cartContainer.append(newCart);
        
    }
})

//traverse technique
// const cartSbutton = document.getElementsByClassName("cart-btn");

// for(let cartButton of cartSbutton){



//     cartButton.addEventListener("click",function(){
//     //get product details
//         const productImage= cartButton.parentNode.childNodes[1].childNodes[1].src;
//         const productTitle = cartButton.parentNode.childNodes[5].innerText
//         const productPrice = cartButton.parentNode.childNodes[7].innerText


//     //update price
//         const currentBalance =  getId("total-money").innerText;
//         const totalPrice = Number(productPrice) + Number(currentBalance);
//         console.log(totalPrice)
//         getId("total-money").innerText = totalPrice;
    
//     //create new div
//         let cartContainer = getId("cart-container");
//         const newCart = document.createElement("div");
//         newCart.innerHTML = `
//         <div class="h-[120px] flex justify-between items-center bg-gray-300 py-10 px-2 rounded-sm mb-4">
//             <img  src="${productImage}" alt="">
//             <div>
//               <h1 class="font-bold">${productTitle}</h1>
//               <h1 class="text-gray-600">${productPrice}</h1>
//             </div>
//         </div>
//         `;
//         const currentQuantity = Number(getId("quantity-items").innerText) + 1;
//         getId("quantity-items").innerText = currentQuantity;

//      //append new div in parent div   
//     cartContainer.append(newCart);
//     });
// }

getId("clr").addEventListener("click",function(){
    getId("cart-container").innerHTML = "";
    getId("total-money").innerText = 0;
    getId("quantity-items").innerText = 0;
})