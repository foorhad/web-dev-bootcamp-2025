function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str === "string") {
    let str2 = "";
    for (let i of str) {
      if (i == " ") continue;
      else str2 += i.toUpperCase();
    }
    return str2;
  } else return "Invalid";
}
// console.log(onlyCharacter(true))
