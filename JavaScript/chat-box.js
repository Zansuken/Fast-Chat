const sendBtn = document.querySelector("#send_button");
const textArea = document.querySelector("#text_input");
const chatFlow = document.querySelector("#chat_flow");
const scrollUpdating = document.querySelector("#main");
const userImg = document.querySelector("#profile_img");

function updateScroll() {
    scrollUpdating.scrollTop = scrollUpdating.scrollHeight;
}


sendBtn.addEventListener("click", function addMessage() {
    if (textArea.value != "") {
        const chatLine = document.createElement("li");
        const chatImg = document.createElement("img");
        chatImg.src = userImg.src;
        chatLine.textContent = (document.createElement("div").style.content = userImg.style.content) + textArea.value;
        chatLine.append(chatImg);
        chatFlow.appendChild(chatLine);
        textArea.value = "";
        textArea.focus();
        updateScroll();
    }
})




