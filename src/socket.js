import { io } from "socket.io-client";

const socket = io("http://84.38.181.252:5000", {
    transports: ["websocket"],
});

export function getStatus(set) {
    socket.on("connect", () => {
        set(true);
    });

    socket.on("disconnect", () => {
        set(false);
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
