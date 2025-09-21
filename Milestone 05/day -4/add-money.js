document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = document.getElementById("bank-name").value;
    // console.log(bankName);

    const bankAccount = document.getElementById("bank-account").value;
    // console.log(bankAccount);

    const addAmount = document.getElementById("add-amnt").value;
    const addAmountConvert = parseInt(addAmount);

    const bankPin = document.getElementById("bank-pin").value;

    const availableBal = document.getElementById("total-amount").innerText;
    const availableBalconvert = parseInt(availableBal);
    // console.log(totalBankAmount);
    const presentAmount = addAmountConvert + availableBalconvert;
    document.getElementById("total-amount").innerText = presentAmount;
  });
