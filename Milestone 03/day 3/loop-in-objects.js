const info={
    name:"forhad",
    qualification:'bsc',
    institute:'bspi',
    maritalStatus:'single',
    company:'quaderia',
    color:{
        front:'white',
        back:'green',
        middle:'red'
    }
}
// console.log(info); //print all property
// console.log(Object.keys(info)); //print key only
// console.log(Object.values(info)) //print value only

for(const x in info){
    console.log(x);
    console.log(info[x]);
    console.log(" ")
}