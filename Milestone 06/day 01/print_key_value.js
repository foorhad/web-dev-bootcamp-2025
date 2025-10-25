const company = {company : 'php', product : 'car', brand : 'Toyoto', Price:19887};
console.log(Object.keys(company))
console.log(Object.values(company))
console.log(Object.entries(company))
company.color = 'yellow';
console.log(company)
delete company.product
company.brand = 'Realmi'
console.log(company)