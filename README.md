# Covid-Quiz

[Covid-Quiz.com](https://waynerocha.github.io/Covid-Quiz/)
## objetivo

Trabalho escolar feito por metade do 1º DS AMS - Etec ZL, baseado na ideia do "Genio-quiz" feito pelo André Birnfield.

O objetivo do quiz é acertar o máximo de alternativas possivel. Quanto mais pontos forem feitos, mais conciente você é quanto aos cuidados do Covid-19.

## Desenvolvimento

<br>

* Obrigando a digitar o nome

É preciso um script que não deixe o úsuario continuar sem digitar um nick no input.

Para isso foi feito um script que habilita e desabilita o botão.

**HTML**
```html
<input id="nome" type="text" oninput="permitir();">

<button id="comecar" disabled>começar</button>
```

**JavaScript**
```js
let allowredirect;
function permitir(){
    let caixa = document.getElementById('nome').value.trim();
    let botao = document.getElementById('comecar')
    if (caixa != ""){
        botao.disabled = false;
        allowredirect = true;
    }
    else{
        botao.disabled = true;
        allowredirect = false;
    }
}
```

<br>

* passando dados usando o Storage

<br>

O HTML5 tem novo um recurso chamado de [Storage](https://www.html5rocks.com/en/features/storage) que permite que um dado seja guardado do lado do cliente. Isso faz que nessa situação não precisemos ter um back-end.<br><br>
E esse foi o método usado para passar o nome da pagina inicial para a página do quiz.

```js
//Usa o Storage para guardar o dado
function redirect(){
    let nome = JSON.stringify(document.getElementById('nome').value);
    sessionStorage.setItem('nome', nome);
}

//Usa o Storage para resgatar o dado guardado
function resgatarnome(){
    let nome = JSON.parse(sessionStorage.getItem('nome'));
}
```

<br>

* Embaralhando as questões

<br>


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
let Nquestao = 0;
function Proximaquestao(){
    if (Nquestao === questoes.length - 1){
        resultado();
    }
    else{
        questoes[Nquestao].classList.remove('questoes-visivel');
        questoes[Nquestao].classList.add('questoes-invisivel');
        questoes[Nquestao + 1].classList.add('questoes-visivel');
        Nquestao += 1;
    }
}
```

* Computando pontos

a função recebe o paramentro booleano "certo", que quando for passado para esse parametro o valor True, é incrementado um ponto.

```HTML
<article class="questoes">
    <button onclick="Proximaquestao()">alternativa errada</button>
    <button onclick="Proximaquestao(true)">alternativa certa</button>
</article>
```

```JS
let pontuacao = 0;
function Proximaquestao(certo){
    if (certo){
        pontuacao += 1;
    }
}
```
