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
    document.getElementById('msg').innerHTML = nome;
}