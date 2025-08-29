// heart count btn event handler
const redHeartCount = document.getElementById("heart-count-btn");
const heartIcons = document.querySelectorAll(".heart-btn");
heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    let count = parseInt(redHeartCount.textContent);
    redHeartCount.textContent = count + 1;
  });
});
