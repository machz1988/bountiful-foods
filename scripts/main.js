/** Hamburguer button changing class */
function toggleMenu(){
    document.querySelector(".ham-button").classList.toggle("open");
    document.querySelector(".main-nav").classList.toggle("open");
}

const x = document.querySelector(".ham-button");
x.onclick = toggleMenu;

/** Showing current year */
const now = new Date();
const year = now.getFullYear();

const showYear = document.querySelector("#current-year");
showYear.textContent = year;

/** Showing date last modified */
const dateLastModified = document.lastModified;
const showLastModified = document.querySelector("#last-modified");
showLastModified.textContent = dateLastModified;