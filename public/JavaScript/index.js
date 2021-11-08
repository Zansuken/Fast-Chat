import { joinListener } from "./event-listeners.js";
import { hideLoginPanel, hideUsername, refreshChat, showLoginPanel, showUserName, updateScroll } from "./interface-handlers.js";


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
        await fetchMessages()
        setInterval(fetchMessages, 3000)
        hideLoginPanel()
        showUserName();
        updateScroll();

    } else {
        showLoginPanel()
        hideUsername()
    }
}