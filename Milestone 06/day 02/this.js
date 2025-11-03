class vehicle{
    #tin
    constructor(brand,type,price){
        this.brand =brand
        this.type = type
        this.price = price
        this.#tin = 369782
    }
    getThis(){
        console.log(this)
    }
    
    getTin(){
        console.log(`${this.#tin}`)
    }
}
const car1 = new vehicle('Honda','Car',34598);
car1.getThis()
car1.getTin()
// car1.types()


const student  = {
    name : 'Rahul',
    score : 2000,
    arrowfnc:()=>{console.log(this)},
    getScore:function(){
        console.log(this)
    }
}
// student.getScore();
student.arrowfnc()