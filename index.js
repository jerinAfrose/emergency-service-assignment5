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
  });
});

// calling alert in call button
const callBtns = document.querySelectorAll(".call-btn");
callBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    //alert(`calling omuk`);
    const service = btn.dataset.service;
    const number = btn.dataset.number;
    alert(`calling ${service}:: ${number}...`);
  });
});
