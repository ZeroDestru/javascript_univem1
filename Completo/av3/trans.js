function carregarConteudo() {
    let path = window.location.pathname;
    let html = "";
    switch (path) {
        case "/":
            html = "pag.html";
            break;
        case "/registrar":
            html = "formulario.html"
            break
    }

    let container = document.getElementById("container");

    if (html != "") {
        fetch(html)
            .then(
                resposta => resposta.text()
            )
            .then(function (texto) {
                container.innerHTML = texto;
            });
    }
}

function transitionTo(event, path) {
    event.preventDefault();
    window.history.pushState("", "", path);
    carregarConteudo();
}

window.addEventListener("load", () => carregarConteudo());