const loginPanel = document.getElementById("login_section");
const registerPanel = document.getElementById("register_section");
const registerLink = document.querySelector("#unregistered");
const loginLink = document.querySelector("#login_link");
const logOutBtn = document.querySelector("#log_out_button");
let userNotConnected = true;

const loginForm = document.querySelector("#login_form");
const registerForm = document.querySelector("#register_form");
const chatInput = document.querySelector("#text_input_area");
const main = document.querySelector("#main");
const contactList = document.querySelector("#contact_list");
const usernameField = document.querySelector("#username_field");
const passwordField = document.querySelector("#password_field");
const connectBtn = document.querySelector("#connect_button");
const nickname = document.querySelector("#nickname");
const profileImg = document.querySelector("#profile_img");
const navBtn = document.querySelector("#nav_btn");
const logInBtn = document.querySelector("#log_in_button");

let userIdsTest = [
    username = "test123",
    password = "test123"
]


// Verifying ID's match

function connectingTest(event) {

    event.preventDefault();

    if (usernameField.value === userIdsTest[0] && passwordField.value === userIdsTest[1]) {
        loginPanel.style.display = "none";
        registerPanel.style.display = "none";
        main.style.display = "flex";
        contactList.style.display = "block";
        passwordField.value = "";
        nickname.innerHTML = userIdsTest[0];
        profileImg.style.display = "block";
        navBtn.style.display = "flex";
        logOutBtn.style.display = "block";
        logInBtn.style.display = "none";
        textInput.focus();
        userNotConnected = false;
    } else {
        alert("Wrong Username or password!");
    }
    console.log("test form");
}

loginForm.addEventListener("submit", connectingTest);

// Log out event button

logOutBtn.addEventListener("click", function clickToLogOut() {
    if (userNotConnected === false) {
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
})

// If user is not connected, chat box, profile section and contact list is not displayed

if (userNotConnected === true) {
    main.style.display = "none";
    contactList.style.display = "none";
    logOutBtn.style.display = "none";
    profileImg.style.display = "none";
    nickname.innerHTML = "LOG IN";
    nickname.style.display = "block";
    navBtn.style.display = "none";
}

// Log in event button

nickname.addEventListener("click", function clickToLogIn() {
    usernameField.focus();
})

logInBtn.addEventListener("click", function clickToLogIn() {
    usernameField.focus();
})


// Register link redirection click (show registering panel)

registerLink.addEventListener("click", function showRegisterForm() {
    loginPanel.style.display = "none";
    registerPanel.style.display = "flex";
})

// Register click event



// Login link redirection click (show login panel)

loginLink.addEventListener("click", function showRegisterForm() {
    registerPanel.style.display = "none";
    loginPanel.style.display = "flex";
})
