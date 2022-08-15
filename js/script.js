const btn = document.getElementById("menu-btn");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  overlay.classList.toggle("show-overlay");
  document.body.classList.toggle("stop-scrolling");
  mobileMenu.classList.toggle("show-menu");
});
