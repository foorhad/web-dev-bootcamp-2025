console.log("Mohammad Abdullaha Al Forhad")
console.log(document)
let std={
    name : "forhad",
    roll : 34,
    fnc : function(subject){
        console.log("My eductaion subject type is : ", subject);
    }
}
const listCollection = document.getElementsByTagName('p');
console.log(listCollection)
for(const li of listCollection)console.log(li.textContent);