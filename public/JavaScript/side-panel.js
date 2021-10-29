const showContactBtn = document.getElementById("nav_btn");
const hideContactBtn = document.getElementById("nav_btn--close");
const contactPanel = document.getElementById("contact_panel");
const mainBox = document.querySelector("#main"), textBox = document.querySelector("#text_input");

showContactBtn.addEventListener("click", function openPanel() {
    contactPanel.style.transform = "translateX(0)";
    showContactBtn.style.opacity = "0";
})

hideContactBtn.addEventListener("click", function closePanel() {
    contactPanel.style.transform = "translateX(-150%)";
    showContactBtn.style.opacity = "1";
})

mainBox.addEventListener("click", function closePanel() {
    contactPanel.style.transform = "translateX(-150%)";
    showContactBtn.style.opacity = "1";
})

textBox.addEventListener("click", function closePanel() {
    contactPanel.style.transform = "translateX(-150%)";
    showContactBtn.style.opacity = "1";
})


