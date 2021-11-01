// Log into an existant user account

import { passwordField, registeringNicknameField, registerPasswordField, retypePasswordField, usernameField } from "./dom-references.js";
import { hideLoginPanel, redirectToLogin, showLoginPanel, usernameFocus } from "./interface-handlers.js";

export async function login(event) {

    event.preventDefault();


    const username = usernameField.value;
    const password = passwordField.value;

    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    const response = await fetch("/auth/login", {
        body: JSON.stringify({
            username,
            password
        }),
        method: "POST",
        headers
    })


    if (response.status === 400) return alert("Wrong Username or Password!")

    hideLoginPanel();

}


// Log out user

export async function logout() {

    const response = await fetch("/auth/logout", {
        method: "POST"
    })

    if (response.status === 400) return alert("Already disconnected!")

    showLoginPanel()

}

// Register a new user

export async function register(event) {


    event.preventDefault();

    const username = registeringNicknameField.value;
    const password = registerPasswordField.value;
    const retypedPassword = retypePasswordField.value;

    if (password != retypedPassword) return alert("Password does not match!")

    if (username === "" || password === "" || retypedPassword === "") return alert("One ore more field are empty!")

    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    const response = await fetch("/register", {
        body: JSON.stringify({
            username,
            password
        }),
        method: "POST",
        headers
    })


    if (response.status === 400) return alert("Username already taken!")


    alert("You are registered, you can now login and chat!")

    redirectToLogin();
}