const retypePasswordField = document.querySelector("#retype_password");
const registerBtn = document.querySelector("#register_button");


async function registerIds(event) {

    event.preventDefault();

    const username = event.target["username"].value;
    const password = event.target["password"].value;
    const retypedPassword = event.target["retyped-password"].value;


    if (password != retypedPassword) return alert("Password does not match!")

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

    // const data = await response.json()

    console.log(response.status);
    console.log("User registered");

    if (response.status === 400) return alert("Username already taken!")

    alert("You are registered, you can now login and chat!")
}

registerForm.addEventListener("submit", registerIds);