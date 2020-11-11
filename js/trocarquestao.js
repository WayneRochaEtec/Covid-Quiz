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
    if (pontuacao < 4) {
        //se a pontuação for menor que 4...
        alert("ruim!");
    }
    if (pontuacao >= 4 && pontuacao <= 7){
        //se a pontuação estiver entre 4 e 7...
        alert("Bom, mas fique atento!");
    }
    if (pontuacao > 7) {
        //se a pontuação for maior que 7...
        alert("ótimo");
    }
    document.getElementById('resultado').style.display = "flex";
}