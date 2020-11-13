function permitir() {
    let caixa = document.getElementById('nome')
    let botao = document.getElementById('comecar')
    if (caixa.value != "") {
        botao.disabled = false;
    }
    else {
        botao.disabled = true;
    }
}