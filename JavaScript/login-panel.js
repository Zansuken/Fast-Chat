const loginPanel = document.getElementById("login_section");
const registerPanel = document.getElementById("register_section");
const registerLink = document.querySelector("#unregistered");
const loginLink = document.querySelector("#login_link");
document.querySelector("#password_field").value;
let userConnected = false;

const userIdsTest = [
    login = "Zansuken",
    password = "test123"
]

// Verifying ID's match

const connectBtn = document.querySelector("#connect_button");
connectBtn.addEventListener("click", function connectingTest() {
    if (userConnected != true && document.querySelector("#username_field").value === userIdsTest[0] && document.querySelector("#password_field").value === userIdsTest[1]) {
        console.log("User connected!");
        loginPanel.style.display = "none";
        registerPanel.style.display = "none";
        document.querySelector("#main").style.display = "flex";
        userConnected = true;
    } else {
        console.log("Wrong Username or password!");
    }
})

// If user is connected, chat box is displayed

if (userConnected != true) {
    document.querySelector("#main").style.display = "none";
}


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