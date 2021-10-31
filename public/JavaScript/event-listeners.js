import { hideContactBtn, logInBtn, loginForm, loginLink, loginPanel, logOutBtn, mainBox, nickname, registerLink, registerPanel, showContactBtn, textBox, textInput, usernameField } from "./dom-references.js";
import { login, logout } from "./event-handlers.js";
import { addMessage, moveNavToLeft, moveNavToRight } from "./interface-handlers.js";

export const joinListener = () => {
    loginForm.addEventListener("submit", login);
    logOutBtn.addEventListener("click", logout);

    nickname.addEventListener("click", function clickToLogIn() {
        usernameField.focus();
    })

    logInBtn.addEventListener("click", function clickToLogIn() {
        usernameField.focus();
    })

    registerLink.addEventListener("click", function showRegisterForm() {
        loginPanel.style.display = "none";
        registerPanel.style.display = "flex";
    })

    loginLink.addEventListener("click", function showRegisterForm() {
        registerPanel.style.display = "none";
        loginPanel.style.display = "flex";
    })

    showContactBtn.addEventListener("click", moveNavToRight)

    hideContactBtn.addEventListener("click", moveNavToLeft)

    mainBox.addEventListener("click", moveNavToLeft)

    textBox.addEventListener("click", moveNavToLeft)

    textInput.addEventListener("submit", addMessage);
}