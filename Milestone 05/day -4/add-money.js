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
