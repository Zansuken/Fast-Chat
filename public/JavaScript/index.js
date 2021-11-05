import { hideLoginPanel, showLoginPanel } from "./interface-handlers.js"
import { joinListener } from "./event-listeners.js"
import { nickname } from "./dom-references.js";


window.onload = async () => {

    const response = await fetch("/auth/already-logged")

    if (response.status === 400) return alert("Oops...")

    const user = await response.json();
    if (user) {

        hideLoginPanel()


        nickname.textContent = user.username;

    } else {
        showLoginPanel()
    }

    joinListener()
}