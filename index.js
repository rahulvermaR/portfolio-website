const fristHeaderEl = document.querySelector(".web-cont");
const secondHeaderEl = document.querySelector(".header--option--2");

let isSecondHeaderActive = false;
(function () {
  if (window.innerWidth < 700) {
    isSecondHeaderActive = true;
    fristHeaderEl.classList.add("d--none");
    secondHeaderEl.classList.remove("d--none");
  }
})();

window.addEventListener("resize", function () {
  if (window.innerWidth <= 700 && !isSecondHeaderActive) {
    isSecondHeaderActive = true;
    fristHeaderEl.classList.add("d--none");
    secondHeaderEl.classList.remove("d--none");
    return;
  }

  if (window.innerWidth > 700 && isSecondHeaderActive) {
    isSecondHeaderActive = false;
    fristHeaderEl.classList.remove("d--none");
    secondHeaderEl.classList.add("d--none");
    return;
  }
});

const menuIconEl = document.querySelector(".navi--iconBox");
