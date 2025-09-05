console.log("Mohammad Abdullaha Al Forhad")
console.log(document)
let std={
    name : "forhad",
    roll : 34,
    fnc : function(subject){
        console.log("My eductaion subject type is : ", subject);
    }
}

//get by tag
// const listCollection = document.getElementsByTagName('p');

// get by id
// const listCollection = document.getElementById('ctg');


//get by class
// const listCollection = document.getElementsByClassName('dis')

//get by queryselectorAll
const listCollection = document.querySelectorAll("#bdy p span")
console.log(listCollection);
for(const li of listCollection)console.log(li.innerText);