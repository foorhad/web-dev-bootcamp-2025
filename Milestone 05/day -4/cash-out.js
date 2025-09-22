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
