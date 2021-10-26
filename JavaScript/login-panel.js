const loginPanel = document.getElementById("login_section");
const registerPanel = document.getElementById("register_section");
const registerLink = document.querySelector("#unregistered");
const loginLink = document.querySelector("#login_link");
const logOutBtn = document.querySelector("#log_out_button");
let userNotConnected = true;

let userIdsTest = [
    login = "test123",
    password = "test123"
]

// Verifying ID's match

const connectBtn = document.querySelector("#connect_button");
connectBtn.addEventListener("click", function connectingTest() {

    if (document.querySelector("#username_field").value === userIdsTest[0] && document.querySelector("#password_field").value === userIdsTest[1]) {
        loginPanel.style.display = "none";
        registerPanel.style.display = "none";
        document.querySelector("#main").style.display = "flex";
        document.querySelector("#contact_list").style.display = "block";
        document.querySelector("#password_field").value = "";
        document.querySelector("#nickname").innerHTML = userIdsTest[0];
        document.querySelector("#profile_img").style.display = "block";
        document.querySelector("#nav_btn").style.display = "flex";
        logOutBtn.style.display = "block";
        document.querySelector("#text_input").focus();
        userNotConnected = false;
    } else {
        alert("Wrong Username or password!");
    }
})

// Log out event button

logOutBtn.addEventListener("click", function clickToLogOut() {
    if (userNotConnected === false) {
        loginPanel.style.display = "block";
        document.querySelector("#main").style.display = "none";
        document.querySelector("#contact_list").style.display = "none";
        document.querySelector("#nickname").innerHTML = "Log in";
        document.querySelector("#profile_img").style.display = "none";
        document.querySelector("#nav_btn").style.display = "none";
        logOutBtn.style.display = "none";
        document.querySelector("#username_field").focus();
    }
})

// If user is not connected, chat box, profile section and contact list is not displayed

if (userNotConnected === true) {
    document.querySelector("#main").style.display = "none";
    document.querySelector("#contact_list").style.display = "none";
    logOutBtn.style.display = "none";
    document.querySelector("#profile_img").style.display = "none";
    document.querySelector("#nickname").innerHTML = "LOG IN";
    document.querySelector("#nav_btn").style.display = "none";
}

// Log in event button

document.querySelector("#nickname").addEventListener("click", function clickToLogIn() {
    document.querySelector("#username_field").focus();
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