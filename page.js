window.onload = function () {

    const button = document.querySelector("#hello-button");

    button.onclick = function () {
        const input = document.querySelector("#name-input");
        const text = input.value;
        console.log("input" + text);

        const div = document.querySelector("#message-div");
        div.innerHTML = "Hello " + text + "!";
        return false;
    };

};