let togglebtn = document.querySelector(".togglebtn");
let ul = document.querySelector("ul");


togglebtn.addEventListener("click", ()=>{
    ul.classList.toggle("showNavbar");
})