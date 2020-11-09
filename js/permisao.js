//essa função só deixa o botão habilitado, caso tenha um algo dentro do input. a pessoa não vai poder continuar sem colocar algo.

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