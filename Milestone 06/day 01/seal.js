const identity = {company : 'php', product : 'car', brand : 'Toyoto', Price:19887}
Object.freeze(identity);
console.log(identity)
identity.company = 'ksrm'
console.log(identity)