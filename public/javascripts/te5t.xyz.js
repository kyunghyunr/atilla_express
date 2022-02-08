// hamburgerMenu
const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".mainMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainMenu.classList.toggle("active");
})

// hamburgerMenu click after remove
document.querySelectorAll(".mainMenu_link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	mainMenu.classList.remove("active");	
	}))
