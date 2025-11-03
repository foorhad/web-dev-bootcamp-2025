const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Pen", price: 2 }
];

const smallPrice = products.find(x=>x.price<100);
console.log(smallPrice.price);

// for(const element of products){
//     if(element.price < 100)console.log(element.price);
// }