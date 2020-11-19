var questoes = $(".questoes");
for (let i = 0; i < questoes.length; i++) {
    let lugar = Math.floor(Math.random() * questoes.length -1) + 1;
    let lugar2 = Math.floor(Math.random() * questoes.length -1) + 1;
    questoes.eq(lugar).before(questoes.eq(lugar2));
}