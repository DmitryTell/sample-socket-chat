import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
    transports: ["websocket"],
});

export function getStatus(setNewStatus) {
    socket.on("connect", () => {
        setNewStatus(true);
    });

    socket.on("disconnect", () => {
        alert("Связь с сервером потеряна");

        setNewStatus(false);
    });
}

export function getMessages(set) {
    socket.on("message", (data) => {
        set(data);
    });
}

export function sendMessage(message) {
    socket.emit("message", { content: message });
}
