function layer_case(quantity){
    let price100quantity = 100
    let price200quantity = 90
    let price300Upquantity = 60

    if(quantity <= 100){
        let total100price = quantity*100;
        return total100price;
    }
    else if(quantity <= 200){
        let total100price = 100*price100quantity;
        let remaining = quantity-100;
        let remainingprice = remaining*price200Upquantity
        let toatalprice = total100price+remainingprice;
        return toatalprice
    }
    else{
        let total100price = 100*price100quantity;
        let total200price = 100*price200quantity;
        let remaining = quantity-200;
        let remainingprice = remaining*price300Upquantity
        let toatalprice = total100price+total200price+remainingprice;
        return toatalprice
    }
}
let ans= layer_case(210)
console.log(ans)