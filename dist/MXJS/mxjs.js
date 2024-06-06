const $ = (el) => {
    let element = document.querySelector(el);

    element.on = (ev, func) => {
        element.addEventListener(ev, func);
    };

    return element;
}

export default $;