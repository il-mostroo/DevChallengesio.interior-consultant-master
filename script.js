const navIcon = document.querySelector(".wrap__header__icon");
const nav = document.querySelector(".wrap__header__nav");
const elements = document.querySelectorAll(
  "body *:not(.wrap__header__nav,.wrap,.wrap__header,.wrap__header__nav__link,.wrap__header__icon)"
);
navIcon.addEventListener("click", () => {
  for (let element of elements) {
    element.classList.toggle("hide");
  }
  nav.classList.toggle("hide");
  navIcon.innerText = navIcon.innerText === "\u2630" ? "\u2613" : "\u2630";
});
