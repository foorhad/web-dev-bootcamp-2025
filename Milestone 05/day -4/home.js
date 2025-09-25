// getValue
function getNumber(id) {
  return parseInt(document.getElementById(id).value);
}

function getInnerText(id) {
  return parseInt(document.getElementById(id).innerText);
}

function depositAmount(addedAmount) {
  const availableBal = getInnerText("total-amount");
  const presentAmount = addedAmount + availableBal;
  document.getElementById("total-amount").innerText = presentAmount;
}

function withdrawAmount(withdraw) {
  const availableBal = getInnerText("total-amount");
  const presentAmount = availableBal - withdraw;
  document.getElementById("total-amount").innerText = presentAmount;
}
function getId(id) {
  return document.getElementById(id);
}

// ADD Amount
getId("add-money-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const bankName = getvalue("bank-name");
  const bankAccount = getNumber("bank-account");

  if (bankAccount.length < 9) {
    alert("invalid bank account");
    return;
  }
  const addAmountConvert = getNumber("add-amnt");

  if (addAmountConvert <= 0) alert("add amount correctly");

  const bankPin = getNumber("bank-pin");
  if (bankPin === 1234) depositAmount(addAmountConvert);
  else {
    alert("invalid your pin");
    return;
  }
});

// Withdraw Amount/ Cashout Amount
getId("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdraw = getNumber("withdraw-amount");

  if (withdraw > getInnerText("total-amount")) {
    alert("you have insufficient amount");
    return;
  } else if (getNumber("account-pin") === 1234) withdrawAmount(withdraw);
  else {
    alert("invalid pin");
    return;
  }
});
// Transfer Money
getId("transferMoney-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdraw = getNumber("transfer-amount");

  if (withdraw > getInnerText("total-amount")) {
    alert("you have insufficient amount");
    return;
  } else if (getNumber("accounts-pin") === 1234) withdrawAmount(withdraw);
  else {
    alert("invalid pin");
    return;
  }
});

// Get Bonus
getId("getBonus-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const couponNumber = getNumber("coupon-number");

  if (couponNumber === 123456) {
    depositAmount(5001);
    alert("Coupon Code Successfuly Submitted");
  } else {
    alert("Coupon isn't Availble");
    return;
  }
});

// Pay bill
getId("paybill-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdraw = getNumber("pay-amount");

  if (withdraw > getInnerText("total-amount")) {
    alert("you have insufficient amount");
    return;
  } else if (getNumber("bkash-pin") === 1234) withdrawAmount(withdraw);
  else {
    alert("invalid pin");
    return;
  }
});
// logout
getId("logOut").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// add money
getId("add-money-sec").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "block";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// cashout
getId("cashout-sec").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "block";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// Transer Money
getId("transerMoney").addEventListener("click", function () {
  document.getElementById("transfer-money").style.display = "block";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// Get Bonus
getId("getBonus").addEventListener("click", function () {
  document.getElementById("get-bonus").style.display = "block";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// pay bill
getId("payBill").addEventListener("click", function () {
  document.getElementById("pay-bill").style.display = "block";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
});

// Transaction
getId("transaction").addEventListener("click", function () {
  getId("transactionHistory").style.display = "block";
  getId("pay-bill").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("add-money").style.display = "none";
});
