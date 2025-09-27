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

  const bankAccount = getNumber("bank-account");

  if (bankAccount.length < 9) {
    alert("invalid bank account");
    return;
  }
  const addAmount = getNumber("add-amnt");

  if (addAmount <= 0) alert("add amount correctly");

  const bankPin = getNumber("bank-pin");
  if (bankPin === 1234) depositAmount(addAmount);
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

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//features or function toggle
// add money
getId("add-money-sec").addEventListener("click", function () {
  handleToggle("add-money");
  const formButton = document.getElementsByClassName("btn1");

  for (const form of formButton) {
    form.classList.remove("border-[#0874F2]", "bg-[#79FF79]");
    form.classList.add("border-gray-300");
  }
  getId("add-money-sec").classList.remove("border-gray-300");
  getId("add-money-sec").classList.add("border-[#0874F2]", "bg-[#79FF79]");
});

// cashout
getId("cashout-sec").addEventListener("click", function () {
  handleToggle("cashOut");
  const formButton = document.getElementsByClassName("btn1");

  for (const form of formButton) {
    form.classList.remove("border-[#0874F2]", "bg-[#79FF79]");
    form.classList.add("border-gray-300");
  }
  getId("cashout-sec").classList.remove("border-gray-300");
  getId("cashout-sec").classList.add("border-[#0874F2]", "bg-[#79FF79]");
});

// Transer Money
getId("transerMoney").addEventListener("click", function () {
  handleToggle("transfer-money");
  const formButton = document.getElementsByClassName("btn1");
  for (const form of formButton) {
    form.classList.remove("border-[#0874F2]", "bg-[#79FF79]");
    form.classList.add("border-gray-300");
  }
  getId("transerMoney").classList.remove("border-gray-300");
  getId("transerMoney").classList.add("border-[#0874F2]", "bg-[#79FF79]");
});

// Get Bonus
getId("getBonus").addEventListener("click", function () {
  handleToggle("get-bonus");
  const formButton = document.getElementsByClassName("btn1");

  for (const form of formButton) {
    form.classList.remove("border-[#0874F2]", "bg-[#79FF79]");
    form.classList.add("border-gray-300");
  }
  getId("getBonus").classList.remove("border-gray-300");
  getId("getBonus").classList.add("border-[#0874F2]", "bg-[#79FF79]");
});

// pay bill
getId("payBill").addEventListener("click", function () {
  handleToggle("pay-bill");
  const formButton = document.getElementsByClassName("btn1");
  for (const form of formButton) {
    form.classList.remove("border-[#0874F2]", "bg-[#79FF79]");
    form.classList.add("border-gray-300");
  }
  getId("payBill").classList.remove("border-gray-300");
  getId("payBill").classList.add("border-[#0874F2]", "bg-[#79FF79]");
});

// Transaction
getId("transaction").addEventListener("click", function () {
  handleToggle("transactionHistory");
  const formButton = document.getElementsByClassName("btn1");
  for (const form of formButton) {
    form.classList.remove("border-[#0874F2]", "bg-[#79FF79]");
    form.classList.add("border-gray-300");
  }
  getId("transaction").classList.remove("border-gray-300");
  getId("transaction").classList.add("border-[#0874F2]", "bg-[#79FF79]");
});
