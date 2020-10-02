//--------------menu mobile----------

document.addEventListener("DOMContentLoaded", function(event) {

    const menuIcon = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');


    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("switch");

    })

});


//-------------------Pmenu-------------------

window.onscroll = function() {
    pMenu()
};

function pMenu() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("pmenu").className = "active";
    } else {
        document.getElementById("pmenu").className = "";
    }
}