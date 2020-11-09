var pontuacao = 0;
function Proximaquestao(Nquestao, certo){
    if (certo){
        pontuacao += 1;
    }
    if (Nquestao === 10) {
        resultado();
        top.document.title = ("Covid-Quiz - Resultados");    
    }   
    
    //obtem o id do article da questao e o da proxima juntando "questao" com o numero passado pelo parametro Nquestao
    let questao = document.getElementById('questao' + String(Nquestao));
    let proximaquestao = document.getElementById('questao' + String(Nquestao + 1));

    questao.style.display = 'none';
    proximaquestao.style.display = 'flex';
    top.document.title = "Covid-Quiz - Questão " + (Nquestao + 1);
}

function resultado() {
    alert("Voce fez " + pontuacao + " pontos");
    document.getElementById('resultados').style.display = "flex";
}