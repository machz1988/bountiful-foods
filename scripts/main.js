/** Hamburguer button changing class */
function toggleMenu(){
    document.querySelector(".hamButton").classList.toggle("open");
    document.querySelector(".mainNav").classList.toggle("open");
}

const x = document.querySelector(".hamButton");
x.onclick = toggleMenu;

/** Showing current year */
const now = new Date();
const year = now.getFullYear();

const showyear = document.querySelector("#currentYear");
showyear.textContent = year;

/** Showing date last modified */
const dateLastModified = document.lastModified;
const showLastModified = document.querySelector("#lastModified");
showLastModified.textContent = dateLastModified;