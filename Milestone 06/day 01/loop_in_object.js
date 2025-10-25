const company = {
    name :"php",
    brand:'toyoto',
    price:13000,
    product:'car'
}

for(const i in company){
    const value = company[i];
    console.log(i,value);
}