const menuBtn = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");
const submitBtn = document.querySelector("#form-submit");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");

  const mobileMenu = document.querySelector(".mobile-nav");
  mobileMenu.classList.toggle("is-active");
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
