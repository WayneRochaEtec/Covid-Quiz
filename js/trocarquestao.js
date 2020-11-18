var questoes = document.getElementsByClassName('questoes');
var pontuacao = 0;
var Nquestao = 0;
function Proximaquestao(certo){
    if (certo){
        pontuacao += 1;
    }
    if (Nquestao === questoes.length - 1){
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
    //temporario
    if (pontuacao < 4) {
        document.getElementById('msg').innerHTML += '\nEstado: ruim';
    }
    if (pontuacao >= 4 && pontuacao <= 7){
        document.getElementById('msg').innerHTML += '\nEstado: medio!';
    }
    if (pontuacao > 7) {
        document.getElementById('msg').innerHTML += '\nEstado: 2 palavras..Para-bens 👏👏)';
    }
}