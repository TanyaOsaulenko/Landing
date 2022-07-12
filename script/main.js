const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("header");
const closeIcon = document.getElementById("close-icon")
const contactForm = document.getElementById("contact-form");

function showHide() {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    closeIcon.classList.toggle("active");
}
    
hamburgerMenu.addEventListener("click", showHide);

// this is a working solution, but better to use classes to keep all styles in css
// function changeHeaderColor() {
//     if (window.scrollY === 0) {
//         header.style.backgroundColor = "#DCE9E2";
//     } else {
//         header.style.backgroundColor = "#00856F";
//     }
// }

function changeHeaderColor() {
    if (window.scrollY === 0) {
        header.classList.remove("scrolled");
        hamburgerMenu.classList.remove("white"); 
    } else {
        header.classList.add("scrolled");
        hamburgerMenu.classList.add("white");
    }
}

window.addEventListener("scroll", changeHeaderColor);


