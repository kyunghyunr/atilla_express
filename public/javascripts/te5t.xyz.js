const openMenu = document.querySelector(".openMenu");
const mainMenu = document.querySelector(".mainMenu");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("active");
  mainMenu.classList.toggle("active");
})

