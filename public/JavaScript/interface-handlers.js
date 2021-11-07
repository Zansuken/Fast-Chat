import { chatFlow, contactList, contactPanel, logInBtn, loginPanel, logOutBtn, main, navBtn, nickname, passwordField, profileImg, registerPanel, scrollUpdating, showContactBtn, textInput, usernameField } from "./dom-references.js";

export const hideLoginPanel = () => {
    loginPanel.style.display = "none";
    registerPanel.style.display = "none";
    main.style.display = "flex";
    contactList.style.display = "block";
    passwordField.value = "";
    profileImg.style.display = "block";
    navBtn.style.display = "flex";
    logOutBtn.style.display = "block";
    logInBtn.style.display = "none";
    textInput.focus();
}

export const showLoginPanel = () => {
    loginPanel.style.display = "block";
    main.style.display = "none";
    contactList.style.display = "none";
    nickname.innerHTML = "LOG IN";
    profileImg.style.display = "none";
    navBtn.style.display = "none";
    logOutBtn.style.display = "none";
    logInBtn.style.display = "block";
    usernameField.focus();
}

export const moveNavToRight = () => {
    contactPanel.style.transform = "translateX(0)";
    showContactBtn.style.opacity = "0";
}

export const moveNavToLeft = () => {
    contactPanel.style.transform = "translateX(-150%)";
    showContactBtn.style.opacity = "1";
}

export const updateScroll = () => {
    scrollUpdating.scrollTop = scrollUpdating.scrollHeight;
}

export const redirectToLogin = () => {
    registerPanel.style.display = "none";
    loginPanel.style.display = "flex";
}

export const redirectToRegister = () => {
    loginPanel.style.display = "none";
    registerPanel.style.display = "flex";
}
export const usernameFocus = () => {
    usernameField.focus();
}

export const showUserName = () => {
}



// Static chat

export const addMessage = (message) => {


    if (!message.chatLine) {
        return
    }

    const chatLine = document.createElement("li");
    const username = document.createElement("span")
    const messageContent = document.createElement("p")
    const messageDate = document.createElement("p")

    username.textContent = message.user
    messageContent.textContent = " | " + message.chatLine
    messageDate.textContent = "at " + message.sendAt


    chatLine.appendChild(messageContent)
    chatLine.appendChild(messageDate)
    messageContent.appendChild(username)
    chatFlow.appendChild(chatLine)
}

export const refreshChat = (messages) => {

    chatFlow.innerHTML = "";

    if (Array.isArray(messages)) {
        for (const message of messages) {
            addMessage(message)
        }
    } else {
        addMessage(messages)
    }


}