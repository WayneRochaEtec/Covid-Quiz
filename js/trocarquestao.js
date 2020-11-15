var questoes = document.getElementsByClassName('questoes');
var pontuacao = 0;
var Nquestao = 0;
function Proximaquestao(certo){
    if (certo){
        pontuacao += 1;
    }
    if (Nquestao === questoes.length){
        resultado();
    }
    else{
        questoes[Nquestao].style.display = 'none';
        questoes[Nquestao + 1].style.display = 'block';
        Nquestao += 1;
        top.document.title = "Covid-Quiz - Questão " + (Nquestao + 1);
    }
}
function resultado(){
    top.document.title = ("Covid-Quiz - Resultados");
    questoes[Nquestao].style.display = 'none';
    document.getElementById('resultados').style.display = 'flex';
    if (pontuacao < 4) {
        //se a pontuação for menor que 4...
    }
    if (pontuacao >= 4 && pontuacao <= 7){
        //se a pontuação estiver entre 4 e 7...
    }
    if (pontuacao > 7) {
        //se a pontuação for maior que 7...
    }
}