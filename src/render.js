import { initEvent } from "./event.js";
import template from "./template.pug";

export function renderApp(appElement, context) {
    const content = template({
        status: context.status,
        messages: context.messages,
    });

    appElement.innerHTML = content;

    initEvent();
}
