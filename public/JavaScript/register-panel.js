const retypePasswordField = document.querySelector("#retype_password");
const registerBtn = document.querySelector("#register_button");


async function registerIds(event) {

    event.preventDefault();

    const username = event.target["username"].value;
    const password = event.target["password"].value;
    const retypedPassword = event.target["retyped-password"].value;


    if (password != retypedPassword) return alert("Password does not match!")

    console.log("username: " + username);
    console.log("password: " + password);
    console.log("retyped password: " + retypedPassword);

    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    await fetch("/register", {
        body: JSON.stringify({
            username,
            password
        }),
        method: "POST",
        headers
    })

    console.log("User registered");
}

registerForm.addEventListener("submit", registerIds);