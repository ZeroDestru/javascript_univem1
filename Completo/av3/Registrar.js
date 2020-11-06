async function buscarCep(event) {
    let input = event.target.value;
    let cep = input.match(/\d+/g).join('');

    let res = await fetch("https://viacep.com.br/ws/" + cep + "/json");
    if (res.status == 200) {
        let endereco = await res.json();

        let cidade = document.querySelector("form input[name=cidade]");
        cidade.value = endereco.localidade;

        let bairro = document.querySelector("form input[name=bairro]");
        bairro.value = endereco.bairro;

        let uf = document.querySelector("form input[name=uf]");
        uf.value = endereco.uf;

        let logradouro = document.querySelector("form input[name=logradouro]");
        logradouro.value = endereco.logradouro;

        let numero = document.querySelector("form input[name=numero]");
        numero.focus();
    }

}