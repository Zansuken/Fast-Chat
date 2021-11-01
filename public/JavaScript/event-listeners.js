import { hideContactBtn, logInBtn, loginForm, loginLink, loginPanel, logOutBtn, mainBox, nickname, registerBtn, registerLink, registerPanel, sendBtn, showContactBtn, textBox, textInput, usernameField } from "./dom-references.js";
import { login, logout, register, sendChat } from "./event-handlers.js";
import { addMessage, moveNavToLeft, moveNavToRight, redirectToLogin, redirectToRegister, usernameFocus } from "./interface-handlers.js";

export const joinListener = () => {
    loginForm.addEventListener("submit", login);
    logOutBtn.addEventListener("click", logout);
    registerBtn.addEventListener("click", register);
    sendBtn.addEventListener("click", sendChat)

    nickname.addEventListener("click", usernameFocus);

    logInBtn.addEventListener("click", usernameFocus);

    registerLink.addEventListener("click", redirectToRegister);

    loginLink.addEventListener("click", redirectToLogin);

    showContactBtn.addEventListener("click", moveNavToRight);

    hideContactBtn.addEventListener("click", moveNavToLeft);

    mainBox.addEventListener("click", moveNavToLeft);

    textBox.addEventListener("click", moveNavToLeft);

    textInput.addEventListener("submit", addMessage);
}