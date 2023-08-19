"use strict";

import { getMessages, getStatus } from "./socket.js";
import "./css/main.css";
import { renderApp } from "./render.js";

const appElement = document.querySelector("#app");
const context = {
    messages: [],
    status: false,
};

getStatus((status) => {
    context.status = status;

    renderApp(appElement, context);
});

getMessages((data) => {
    context.messages = data;

    renderApp(appElement, context);
});

renderApp(appElement, context);
