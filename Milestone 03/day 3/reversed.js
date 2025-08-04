const  name = "i am learning web dev";
console.log(name.length);
let names = '';
for(let i=0;i<name.length; i++){
    let sentence = name[i];
    names = sentence + names;
    console.log(names);
    console.log(sentence)
    console.log("br");
}
// console.log(names);
const sen = "forhad is in dhaka";
const sent = sen.split('').reverse().join('|')
console.log(sent);