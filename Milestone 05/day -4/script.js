document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("dom connected")

  const phoneNumber = 12345678,
    passNumber = 1234;
  // get phone number and in userInput
  const userPhoneConvert = parseInt(document.getElementById("phone-num").value);
  const userPassConvert = parseInt(document.getElementById("pass-num").value);

  if (phoneNumber === userPhoneConvert && passNumber === userPassConvert) {
    window.location.href = "./home.html";
  } else alert("Invalid");
});
