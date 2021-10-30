const sendBtn = document.querySelector("#send_button");
const textArea = document.querySelector("#text_input");
const chatFlow = document.querySelector("#chat_flow");
const scrollUpdating = document.querySelector("#main");
const userImg = document.querySelector("#profile_img");
const textInput = document.querySelector("#text_input_area");



const updateScroll = () => {
    scrollUpdating.scrollTop = scrollUpdating.scrollHeight;
}


const addMessage = (event) => {

    event.preventDefault();

    if (textArea.value != "") {


        const chatLine = document.createElement("li");
        chatLine.textContent = (document.createElement("div").style.content = userImg.style.content) + " : " + textArea.value;

        const chatImg = document.createElement("img");
        chatImg.src = userImg.src;

        let inputTime = document.createElement("span");
        inputTime.textContent = new Date().toLocaleString({
            hour: "numeric",
            minute: "numeric",
            second: "",
            weekday: "short",
            day: "numeric",
            month: "numeric",
        });

        chatFlow.appendChild(chatLine);
        chatLine.append(inputTime);
        chatLine.append(chatImg);
        textArea.value = "";
        textArea.focus();
        updateScroll();
    }

    console.log(usernameField.value + " has sent a message!");
}

textInput.addEventListener("submit", addMessage);