let allowredirect;
function permitir(){
    var caixa = document.getElementById('nome').value.trim();
    var botao = document.getElementById('comecar')
    if (caixa != ""){
        botao.disabled = false;
        allowredirect = true;
    }
    else{
        botao.disabled = true;
        allowredirect = false;
    }
}
function enter(tecla){
    if (tecla.which == 13){
        console.log("enter")
    }
}
function comecarquiz(){
    if (allowredirect){
        redirect();
    }
}
function redirect(){
    let nome = JSON.stringify(document.getElementById('nome').value);
    sessionStorage.setItem('nome', nome);
    window.location = "quiz.html";
}
function resgatarnome(){
    let nome = JSON.parse(sessionStorage.getItem('nome'));
    document.getElementById('estado').innerHTML = nome;
}
document.getElementById('nome').addEventListener('keypress', function(tecla){
    if(tecla.which === 13){
        comecarquiz();
    }
}, false);
document.getElementById('nome').addEventListener('input', permitir);
document.getElementById('comecar').addEventListener('click', comecarquiz);