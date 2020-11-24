var questoes = document.getElementsByClassName('questoes');
let pontuacao = 0;
let Nquestao = 0;

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
    let estado = document.getElementById('estado');
    let mensagem = document.getElementById('mensagem');
    let img_finais = [
        document.getElementById('final1'),
        document.getElementById('final2'),
        document.getElementById('final3')
    ];
    let covides = document.getElementById('covides');
    if (pontuacao < 4) {
        mensagem.innerHTML = 'Voce foi infectado e nao resistiu';
        img_finais[0].style.display = 'block';
        estado.innerHTML = "Game-Over " + estado.innerText;
    }
    if (pontuacao >= 4 && pontuacao <= 7){
        mensagem.innerHTML = 'Voce foi infectado. Mas sobreviveu';
        img_finais[1].style.display = 'block';
        estado.innerHTML = "Muito bem " + estado.innerText;
    }
    if (pontuacao > 7) {
        mensagem.innerHTML = 'Voce nao se infectou durante a pandemia!';
        img_finais[2].style.display = 'block';
        estado.innerHTML = "parabens " + estado.innerText + "!";
        if (pontuacao === 10){
            img_finais[2].style.display = 'none';
            covides.style.display = 'block';
        }
    }
    document.getElementById('pontuacao').innerHTML = pontuacao + "/10"
}
