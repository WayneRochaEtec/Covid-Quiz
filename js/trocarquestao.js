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
    if (pontuacao < 4) {
        document.getElementById('mensagem').innerHTML = 'Voce foi infectado e nao resistiu';
        document.getElementById('final1').style.display = 'block';
    }
    if (pontuacao >= 4 && pontuacao <= 7){
        document.getElementById('mensagem').innerHTML = 'Voce foi infectado. Mas sobreviveu';
        document.getElementById('final2').style.display = 'block';
    }
    if (pontuacao > 7) {
        document.getElementById('mensagem').innerHTML = 'Voce não se infectou durante a pandemia!';
        document.getElementById('final3').style.display = 'block';
    }
    document.getElementById('pontuacao').innerHTML = pontuacao + "/10"
}