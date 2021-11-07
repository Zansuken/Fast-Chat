import { hideLoginPanel, refreshChat, showLoginPanel } from "./interface-handlers.js"
import { joinListener } from "./event-listeners.js"
import { nickname } from "./dom-references.js";


export const fetchMessages = async () => {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    const responseChat = await fetch("/chat", { headers, method: "GET" })
    const chatMessages = await responseChat.json()

    refreshChat(chatMessages)
}

window.onload = async () => {

    joinListener()


    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    const response = await fetch("/auth/already-logged", { headers, method: "GET" })
    const user = await response.json();

    if (response.status === 400) return alert("Oops...")

    if (user) {
        fetchMessages()
        setInterval(fetchMessages, 3000)
        hideLoginPanel()

        nickname.textContent = user.username;

    } else {
        showLoginPanel()
    }
}