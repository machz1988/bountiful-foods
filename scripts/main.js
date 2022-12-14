function toggleMenu(){
    document.querySelector(".hamButton").classList.toggle("open");
    document.querySelector(".mainNav").classList.toggle("open");
}

const x = document.querySelector(".hamButton");
x.onclick = toggleMenu;