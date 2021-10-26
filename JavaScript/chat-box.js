const sendBtn = document.querySelector("#send_button");
const textArea = document.querySelector("#text_input");
const chatFlow = document.querySelector("#chat_flow");

console.dir(textArea)

sendBtn.addEventListener("click", function addMessage() {
    if (textArea.value != "") {
        const chatLine = document.createElement("li")
        chatLine.textContent = textArea.value
        chatFlow.appendChild(chatLine)
        textArea.value = ""
    }
})