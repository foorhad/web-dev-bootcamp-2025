document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("dom connected")

  const phoneNumber = 12345678,
    passNumber = 1234;
  // get phone number and in userInput
  const userPhone = document.getElementById("phone-num").value;
  const userPhoneConvert = parseInt(userPhone);
  const userPass = document.getElementById("pass-num").value;
  const userPassConvert = parseInt(userPass);

  if (phoneNumber === userPhoneConvert && passNumber === userPassConvert) {
    window.location.href = "./add-money.html";
  } else alert("Invalid");
});
// document.getElementById("add-money").addEventListener("click", function(e){
//     window.location.href="./add-money.html"
// })
