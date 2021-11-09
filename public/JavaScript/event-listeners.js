import { chatFlow, hideContactBtn, linkToLog, logInBtn, loginForm, loginLink, logOutBtn, mainBox, registerBtn, registerLink, sendBtn, showContactBtn, textBox, textInput } from "./dom-references.js";
import { login, logout, register, sendChat } from "./event-handlers.js";
import { addMessage, moveNavToLeft, moveNavToRight, redirectToLogin, redirectToRegister, stopAutoScroll, usernameFocus } from "./interface-handlers.js";

export const joinListener = () => {
    loginForm.addEventListener("submit", login);
    registerBtn.addEventListener("click", register);
    sendBtn.addEventListener("click", sendChat)
    sendBtn.addEventListener("click", addMessage)

    logInBtn.addEventListener("click", usernameFocus);
    linkToLog.addEventListener("click", usernameFocus);
    logOutBtn.addEventListener("click", logout)

    registerLink.addEventListener("click", redirectToRegister);

    loginLink.addEventListener("click", redirectToLogin);

    showContactBtn.addEventListener("click", moveNavToRight);

    hideContactBtn.addEventListener("click", moveNavToLeft);

    mainBox.addEventListener("click", moveNavToLeft);

    chatFlow.addEventListener("scroll", stopAutoScroll)

    textBox.addEventListener("click", moveNavToLeft);

    textInput.addEventListener("submit", addMessage);
}