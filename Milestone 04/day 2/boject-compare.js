function max_value(phones){
    let min = phones[0];
    for(let i of phones){
        if(i.price > min.price)min=i;
    }
    console.log(min)
}
let phones=[
    {name : "xiaomi", price : 270000, company:'use', ram : 12},
    {name : "samsung", price : 280000, company:'use', ram : 12},
    {name : "walton", price : 89000, company:'use', ram : 12},
    {name : "vivo", price : 29000, company:'use', ram : 12},
    {name : "Iphone", price : 1200900, company:'use', ram : 12},
    {name : "Pixel", price : 20000, company:'use', ram : 12},
]
max_value(phones)