import { chatFlow, contactList, contactPanel, logInBtn, loginPanel, logOutBtn, main, navBtn, nickname, passwordField, profileImg, registerPanel, scrollUpdating, showContactBtn, textArea, textInput, userImg, usernameField } from "./dom-references.js";

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
    nickname.innerHTML = usernameField.value;
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

export const addMessage = (event) => {

    event.preventDefault();

    if (textArea.value != "") {


        const chatLine = document.createElement("li");
        chatLine.textContent = (nickname.innerText + " : " + textArea.value);


        let inputTime = document.createElement("span");
        inputTime.textContent = new Date().toLocaleString({
            hour: "numeric",
            minute: "numeric",
            second: "",
            weekday: "short",
            day: "numeric",
            month: "numeric",
        });

        chatFlow.appendChild(chatLine);
        chatLine.append(inputTime);
        textArea.value = "";
        textArea.focus();
        updateScroll();
    }

}