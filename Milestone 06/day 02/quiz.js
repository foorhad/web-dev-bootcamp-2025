function min(n){
    return Math.min(...n);
}
console.log(min([2,3,1]))

const [a,b,c]  = [1,2,3,4,5];
console.log(a+b+c)

const {x,y,z} = {x1:34, y8:30,z9:4}
console.log(y)

const num = [1,2,3,4,6,5,7];
console.log(num.filter(n=>n%2));

const friends = ['forhad','rahula','toslim','Tania','tahera']
const cha = friends.find(x => x.length === 5);
console.log(cha)

const identity = {
    name:'forhad',
    price:1850,
    brand:'toslim',
    civils:'Tania',
    sister:'tahera'
    }
const {price} = identity;
console.log(price)