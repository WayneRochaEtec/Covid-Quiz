//essa função só deixa o botão habilitado, caso tenha um algo dentro do input. a pessoa não vai poder continuar sem colocar algo.

function permitir() {
    if (document.getElementById('nome').value != "") {
        document.getElementById('comecar').disabled = false;
    }
    else {
        document.getElementById('comecar').disabled = true;
    }
}