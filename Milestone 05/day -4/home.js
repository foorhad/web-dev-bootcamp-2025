document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = document.getElementById("bank-name").value;
    // console.log(bankName);

    const bankAccount = document.getElementById("bank-account").value;
    // console.log(bankAccount);
    if (bankAccount.length < 9) {
      alert("invalid bank account");
      return;
    }

    const addAmount = document.getElementById("add-amnt").value;
    const addAmountConvert = parseInt(addAmount);
    if (addAmountConvert <= 0) alert("add amount correctly");

    const bankPin = parseInt(document.getElementById("bank-pin").value);
    let accountNum = parseInt(123456789),
      bankPins = parseInt(1234);
    // if (bankAccount === accountNum && bankPin === bankPins) {
    const availableBal = document.getElementById("total-amount").innerText;
    const availableBalconvert = parseInt(availableBal);

    const presentAmount = addAmountConvert + availableBalconvert;
    document.getElementById("total-amount").innerText = presentAmount;
    // } else alert("didn't matched information");
  });

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawconvert = parseInt(withdrawAmount.value);

  const availableBal = document.getElementById("total-amount");
  const availableBalconvert = parseInt(availableBal.innerText);

  if (withdrawconvert > availableBalconvert) {
    alert("you have insufficient amount");
    return;
  } else {
    const remainingBal = availableBalconvert - withdrawconvert;
    availableBal.innerText = remainingBal;
  }
});

// logout
document.getElementById("logOut").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// add money
document.getElementById("add-money-sec").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "block";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// cashout
document.getElementById("cashout-sec").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "block";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// Transer Money
document.getElementById("transerMoney").addEventListener("click", function () {
  document.getElementById("transfer-money").style.display = "block";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// Get Bonus
document.getElementById("getBonus").addEventListener("click", function () {
  document.getElementById("get-bonus").style.display = "block";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// pay bill
document.getElementById("payBill").addEventListener("click", function () {
  document.getElementById("pay-bill").style.display = "block";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// Transaction
document.getElementById("transaction").addEventListener("click", function () {
  document.getElementById("transactionHistory").style.display = "block";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
});
