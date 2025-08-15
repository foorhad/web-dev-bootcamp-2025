function max_value(phones){
    let min = phones[0];
    for(let i of phones){
        if(i.price > min.price)min=i;
    }
    console.log(min)
}
function total_price(phones){
    let total_price = 0;
    for(let phone of phones){
        total_price+=phone.price*phone.quantity
    }
    console.log("Total price is:- ", total_price);
}
let phones=[
    {name : "xiaomi", price : 27, company:'use', ram : 12, quantity : 2},
    {name : "samsung", price : 400, company:'use', ram : 12, quantity : 3},
    {name : "walton", price : 600, company:'use', ram : 12, quantity : 2},
    {name : "vivo", price : 900, company:'use', ram : 12, quantity : 4},
    {name : "Iphone", price : 120, company:'use', ram : 12, quantity : 5},
    {name : "Pixel", price : 2000, company:'use', ram : 12, quantity : 1},
]
max_value(phones)
total_price(phones)
