const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");



hamburger.addEventListener("click", ()=>{

    hamburger.classList.toggle("fa-square-xmark");
    list.classList.toggle("navlist-active");

})