const showContactBtn = document.getElementById("nav_btn");
const hideContactBtn = document.getElementById("nav_btn--close");
const contactPanel = document.getElementById("contact_panel");

console.log(hideContactBtn);

showContactBtn.addEventListener("click", function openPanel() {
    contactPanel.style.transform = "translateX(0)";
    showContactBtn.style.opacity = "0";
})

hideContactBtn.addEventListener("click", function closePanel() {
    contactPanel.style.transform = "translateX(-150%)";
    showContactBtn.style.opacity = "1";
})