var questoes = document.getElementsByClassName('questoes');
var pontuacao = 0;
var Nquestao = 0;
//função principal
function Proximaquestao(certo){
    if (certo){
        pontuacao += 1;
    }
    if (Nquestao === questoes.length - 1){
        resultado();
    }
    else{
        questoes[Nquestao].classList.remove('questoes-visivel');
        questoes[Nquestao].classList.add('questoes-invisivel');
        questoes[Nquestao + 1].classList.add('questoes-visivel');
        Nquestao += 1;
        top.document.title = "Covid-Quiz - Questão " + (Nquestao + 1);
    }
}
function iniciar(){
    questoes[Nquestao].classList.add('questoes-visivel');
}
function resultado(){
    top.document.title = ("Covid-Quiz - Resultados");
    questoes[Nquestao].style.display = 'none';
    document.getElementById('resultados').style.display = 'flex';
    //temporario
    if (pontuacao < 4) {
        document.getElementById('msg').innerHTML += ', Você foi infectado e não resistiu';
    }
    if (pontuacao >= 4 && pontuacao <= 7){
        document.getElementById('msg').innerHTML += ', Você foi infectado. Mas sobreviveu';

    }
    if (pontuacao > 7) {
        document.getElementById('msg').innerHTML += ', Você não se infectou durante a pandemia!';
    }
}