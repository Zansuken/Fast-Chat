const usernameField = document.querySelector("#register_username_field");
const passwordField = document.querySelector("#register_password_field");
const retypePasswordField = document.querySelector("#retype_password");
const registerBtn = document.querySelector("#register_button");

let username;
let password;
let passwordCheck;


function registerIds() {
    username = usernameField.value;
    password = passwordField.value;
    passwordCheck = retypePasswordField.value;
    console.log(username);
    console.log(password);
    console.log(passwordCheck);
}
