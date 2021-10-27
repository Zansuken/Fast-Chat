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
        chatLine.textContent = (document.createElement("div").style.content = userImg.style.content) + textArea.value;
        chatFlow.appendChild(chatLine);
        textArea.value = "";
        textArea.focus();
        updateScroll();
    }
})


const chatImg = document.createElement("img")

chatImg.src = "./Images/Profile\ picture3.jpg"

console.dir(chatImg.src);
console.dir(userImg);
// document.createElement("div").style.content = userImg.style.content