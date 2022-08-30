const menu = document.querySelector(".nav__menu");
const burguer =  document.querySelector("#burguer");

burguer.addEventListener("click", ()=>{

    menu.classList.toggle("menu__visible");

});