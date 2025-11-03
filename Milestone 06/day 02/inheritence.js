class Player{
    constructor(name,skill,address){
        this.name = name;
        this.skill = skill
        this.address = address
    }
    skilled(){
        console.log(`he good at ${this.skill}`);
    }
}

class Player1 extends Player{
    constructor(name,skill,address){
       super(name,skill,address)
       this.blood = "AB+"
    }

}
const player = new Player('Forhad','Python',"Chattogram");
// console.log(player)
const player1 = new Player1('Jashim','Java','Dhaka')
player1.skilled()
console.log(player1)