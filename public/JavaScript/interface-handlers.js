import { chatFlow, contactList, contactPanel, linkToLog, logInBtn, loginPanel, logOutBtn, main, navBtn, passwordField, profileSection, registerPanel, showContactBtn, textInput, userImg, usernameField } from "./dom-references.js";

export const hideLoginPanel = () => {
    loginPanel.style.display = "none";
    registerPanel.style.display = "none";
    main.style.display = "flex";
    contactList.style.display = "block";
    passwordField.value = "";
    navBtn.style.display = "flex";
    logInBtn.style.display = "none";
    textInput.focus();
}

export const showLoginPanel = () => {
    loginPanel.style.display = "block";
    main.style.display = "none";
    contactList.style.display = "none";
    navBtn.style.display = "none";
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

export const stopAutoScroll = () => {
    console.log("trying to stop scrolling");
}


export const updateScroll = () => {

    chatFlow.scrollTop = chatFlow.scrollHeight;
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

    while (profileSection.hasChildNodes()) {
        profileSection.removeChild(profileSection.firstChild);
    }

    const username = document.createElement("span");
    userImg.id = "profile_img"
    const userPicture = userImg

    logOutBtn.type = "button";

    username.textContent = usernameField.value;



    profileSection.appendChild(userPicture);
    profileSection.appendChild(username);
    profileSection.appendChild(logOutBtn);

}

export const hideUsername = () => {
    while (profileSection.hasChildNodes()) {
        profileSection.removeChild(profileSection.firstChild);
    }



    // linkToLog

    logInBtn.type = "button";

    logInBtn.id = "log_in_button"

    linkToLog.innerText = "Log In"


    profileSection.appendChild(linkToLog);
    profileSection.appendChild(logInBtn);
}

// Static chat

export const addMessage = (message) => {


    if (!message.chatLine) {
        return
    }

    const chatLine = document.createElement("li")
    const userDiv = document.createElement("div")
    const username = document.createElement("span")
    const messageContent = document.createElement("p")
    const messageDate = document.createElement("p")


    username.textContent = message.user
    messageContent.textContent = message.chatLine
    messageDate.textContent = "at " + message.sendAt


    chatFlow.appendChild(chatLine)

    chatLine.appendChild(userDiv)
    chatLine.appendChild(messageDate)
    userDiv.appendChild(messageContent)
    userDiv.appendChild(username)
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