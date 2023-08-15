"use strict";

import template from "../template.pug";
import { getMessages, getStatus } from "./socket.js";
import "./css/main.css";

const appElement = document.querySelector("#app");

let messages = [];
let isOnline = false;

getStatus((status) => {
    isOnline = status;

    appElement.innerHTML = template({ status: isOnline, messages: messages });
});

getMessages((data) => {
    messages = data;

    appElement.innerHTML = template({
        status: isOnline,
        messages: messages,
    });
});

appElement.innerHTML = template({ status: isOnline, messages: messages });
