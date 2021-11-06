//nav bar

const bar = document.querySelector("#bar");
console.log(bar);
const close = document.querySelector("#close");
console.log(close);
const menubar = document.querySelector(".menubar");
console.log(menubar);

bar.addEventListener("click", function () {
  menubar.classList.add("animation-top-to-bottom");
  menubar.classList.remove("animation-bottom-to-top");
});
close.addEventListener("click", function () {
  menubar.classList.add("animation-bottom-to-top");
  menubar.classList.remove("animation-top-to-bottom");
});
