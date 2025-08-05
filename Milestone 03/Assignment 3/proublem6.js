/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
for(var i=0; i<experience; i++){
    var salary = startingSalary * (5/100);
    startingSalary += salary;
}
console.log(startingSalary.toFixed(2));
