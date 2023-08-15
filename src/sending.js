import { sendMessage } from "./socket.js";

const messageElement = document.querySelector("#message");
const sendElement = document.querySelector("#send");

sendElement.addEventListener("click", () => {
    if (messageElement.value) {
        sendMessage(messageElement.value);
        return;
    }

    alert("Нельзя отправить пустое сообщение!");
});
