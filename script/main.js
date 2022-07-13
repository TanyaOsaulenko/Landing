const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("header");
const contactFormCloseBtn = document.getElementById("close-icon")
const contactForm = document.getElementById("contact-form");
const contactFormButtons = document.getElementsByClassName("contact-form-button")


function showHideMenu() {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
}
    
hamburgerMenu.addEventListener("click", showHideMenu);


function closeContactForm() {
    contactForm.classList.remove("active");
}
contactFormCloseBtn.addEventListener("click", closeContactForm);

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

function showContuctForm() {
    contactForm.classList.add("active");
}

for (let i=0; i < contactFormButtons.length; i++) {
    contactFormButtons[i].addEventListener("click", showContuctForm);   
}