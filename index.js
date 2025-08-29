// heart count btn event handler
const redHeartCount = document.getElementById("heart-count-btn");
const heartIcons = document.querySelectorAll(".heart-btn");
heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    let count = parseInt(redHeartCount.textContent);
    redHeartCount.textContent = count + 1;
  });
});

// copy button count event handler
const copyCount = document.getElementById("copy-count-btn");
const copyButtons = document.querySelectorAll(".copy-btn");
copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let current = parseInt(copyCount.textContent);
    copyCount.textContent = current + 1;

    const phoneNumber = btn.dataset.number;

    // Copy to clipboard
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert(`Hotline number ${phoneNumber} copied to clipboard!!!!`);
    });
  });
});

// calling alert in call button &
// coin deduct from coin section
const callBtns = document.querySelectorAll(".call-btn");

const coinCnt = document.getElementById("coin-cnt");

const callList = document.getElementById("call-list");
callBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    //alert(`calling omuk`);
    const categoryNAME = btn.dataset.service;
    const phoneNumber = btn.dataset.number;
    let coin = parseInt(coinCnt.textContent);
    if (coin < 20) {
      alert(`You don't have enough coin for calling. Minimum 20 coins needed.`);
      return;
    }
    alert(`calling ${categoryNAME}:: ${phoneNumber}...`);

    coinCnt.textContent = coin - 20;
    // if (coin < 20) {
    //   alert(`You don't have enough coin for calling. Minimum 20 coins needed.`);
    // }

    // call history add
    document.getElementById("default-list").style.display = "none";
    const li = document.createElement("li");
    const realTime = new Date().toLocaleTimeString();
    li.classList.add(
      "space-y-3",
      "text-sm",
      "text-gray-700",
      "bg-[#fafafa]",
      "rounded-lg",
      "p-4",
      "mt-3"
    );
    li.innerHTML = `
    <div class="flex justify-between">
    <div>
    <strong>${categoryNAME}</strong> <br> 
    <p class="text-gray-500 text-xs">${phoneNumber}</p></div>
    <span class="text-sm">${realTime}</span></div>
    `;
    callList.appendChild(li);
  });
});

// call list clear event listener
const clearCallList = document.getElementById("clear-call-list");
clearCallList.addEventListener("click", function () {
  callList.innerHTML = "";
});
