const showContactBtn = document.getElementById("nav_btn");
const hideContactBtn = document.getElementById("nav_btn--close");
const contactPanel = document.getElementById("contact_panel");
const mainBox = document.querySelector("#main"), textBox = document.querySelector("#text_input");

const moveNavToRight = () => {
    contactPanel.style.transform = "translateX(0)";
    showContactBtn.style.opacity = "0";
}

const moveNavToLeft = () => {
    contactPanel.style.transform = "translateX(-150%)";
    showContactBtn.style.opacity = "1";
}

showContactBtn.addEventListener("click", openPanel = () => {
    moveNavToRight();
})

hideContactBtn.addEventListener("click", closePanel = () => {
    moveNavToLeft();
})

mainBox.addEventListener("click", closePanel = () => {
    moveNavToLeft();
})

textBox.addEventListener("click", closePanel = () => {
    moveNavToLeft();
})


