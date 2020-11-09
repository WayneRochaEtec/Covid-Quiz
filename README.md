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
