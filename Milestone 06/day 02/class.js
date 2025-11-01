class Player{
    constructor(name,age){
        this.name = name;
        this.age = age; 
        this.location = 'bangaldesh'
        // console.log("Calling the constructor method",name)
    }
    person(){
        console.log("hello class")
    }
    getTeamName(){
        return 'Forhad';
    }
}

const player1 = new Player('rahim',25);
// player1.person();
// console.log(player1.getTeamName())
console.log(player1 instanceof Player)