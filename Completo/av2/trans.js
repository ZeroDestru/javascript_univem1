function carcont(){
    let path = window.location.pathname;
    let html = "";

    switch(path){
        case "/":
            html = "av2.html";
            break;

        case "/pag2":
            html = "av2pg.html";
            break;
    }

    let container = document.getElementById("container");

    if(html != ""){
        fetch(html)
            .then(function(resposta){
                return resposta.text();
            })
            .then(function(texto){
                container.innerHTML = texto;
            })
    }
    console.log()
}

function transi(event, path){
    event.preventDefault();
    window.history.pushState("", "", path);
    carcont();
}

window.addEventListener("load", function(){
    carcont();
})