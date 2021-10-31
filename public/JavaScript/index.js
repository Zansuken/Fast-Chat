import { hideLoginPanel, showLoginPanel } from "./interface-handlers.js"
import { joinListener } from "./event-listeners.js"


window.onload = async () => {
    const response = await fetch("/auth/already-logged")
    if (await response.json()) {
        hideLoginPanel()
    } else {
        showLoginPanel()
    }

    joinListener()
}