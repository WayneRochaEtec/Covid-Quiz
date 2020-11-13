# Covid-Quiz
 
## objetivo

Trabalho escolar baseado na ideia do "Genio-quiz" feito pelo André Birnfield.

O objetivo do quiz é acertar o máximo de alternativas possivel. Quanto mais pontos forem feitos, mais conciente você é quanto aos cuidados do Covid-19.

## Desenvolvimento

<br>

* Obrigando a digitar o nome

É preciso um script que não deixe o úsuario continuar sem digitar um nick no input.

Para isso foi feito um script que habilita e desabilita o botão

**HTML**
```html
<input id="nome" type="text" onblur="permitir();">

<button id="comecar" disabled>começar</button>
```

**JavaScript**
```js
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
```

* Embaralhando as questões

Para embaralhar as questões foi usado um script em Jquery que guarda todas as questões em um `array` e os embaralha de forma aleatória usando o métodos `Math.floor()` e `Math.random()`.

```JS
var questoes = $(".questoes");
for (let i = 0; i < questoes.length; i++) {
    let lugar = Math.floor(Math.random() * questoes.length -1) + 1;
    let lugar2 = Math.floor(Math.random() * questoes.length -1) + 1;
    questoes.eq(lugar).before(questoes.eq(lugar2));
}
```

* trocando as questões

Para mostrar uma questão por vez, o JS guarda todas as questões em um `array`, e ao clicar em uma alternativa o `display` esconde a alternativa e mostra a próxima até que acabem as questões.

```JS
var questoes = document.getElementsByClassName('questoes');
var Nquestao = 0;
function Proximaquestao(){
    if (Nquestao === 9){
        resultado();
    }
    else{
        questoes[Nquestao].style.display = 'none';
        questoes[Nquestao + 1].style.display = 'block';
        Nquestao += 1;
    }
}
```

* Computando pontos

a função recebe o paramentro booleano "certo", que quando for passado para esse parametro o valor True, é incrementado um ponto.

```HTML
<article class="questoes">
    <button onclick="Proximaquestao()">errado</button>
    <button onclick="Proximaquestao(true)">certo</button>
</article>
```

```JS
var pontuacao = 0;
function Proximaquestao(certo){
    if (certo){
        pontuacao += 1;
    }
}
```
