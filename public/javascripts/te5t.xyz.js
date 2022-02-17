'use strict'; // vanilla js

// hamburgerMenu
const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".mainMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainMenu.classList.toggle("active");
});

// hamburgerMenu click after remove
document.querySelectorAll(".mainMenu_link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	mainMenu.classList.remove("active");	
	}));

// if mobile client change css to mobile_style.scss

let filter = "win16|win32|win64|mac|macintel";
let css = document.getElementById("css");

if(0 > filter.indexOf(navigator.platform.toLowerCase())){
//	console.log("Client platform : Mobile");
	css.href = "/stylesheets/css/mobile_style.css"
} else {
//	console.log("Client platform : PC");
	css.href = "/stylesheets/css/style.css";
}

