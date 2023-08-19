import { sendMessage } from "./socket.js";

export function initEvent() {
    const sendElement = document.querySelector("#send");

    sendElement.addEventListener("click", () => {
        const message = document.querySelector("#message").value;

        if (message) {
            sendMessage(message);
        }
    });
}
