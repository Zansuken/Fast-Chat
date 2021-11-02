import { hideLoginPanel, showLoginPanel } from "./interface-handlers.js"
import { joinListener } from "./event-listeners.js"
import { nickname } from "./dom-references.js";


window.onload = async () => {
    const response = await fetch("/auth/already-logged")
    if (await response.json()) {
        nickname.innerHTML = "Ton pseudo";
        hideLoginPanel()
    } else {
        showLoginPanel()
    }

    joinListener()
}