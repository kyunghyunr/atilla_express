const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".mainMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainMenu.classList.toggle("active");
})

