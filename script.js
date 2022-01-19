let jogador = null;
let jogadorSelecionado = document.getElementById(elementid = 'jogador-selecionado');
let quadrados = document.getElementsByClassName(quadrados = 'quadrado')

mudarJogador(valor = '<img src="/img/brasil.png">')

function escolherQuadrado(id) {
    //pegando id colocando na variavel quadrado
    let quadrado = document.getElementById(id);
    //verificação para não trocar jogador
    if (quadrado.innerHTML != '-') {
        return;
    }
    //inserindo a imagem a variavel    quadrado
    quadrado.innerHTML = jogador;

    quadrado.style.color = '#000'

    //verificar qual ojogador da vez
    if (jogador === '<img src="/img/brasil.png">') {

        jogador = '<img src="/img/venezuela.png">';

    } else {

        jogador = '<img src="/img/brasil.png">';
    }

    //ativar a mudança
    mudarJogador(jogador);

}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarGanhador() {
    let quadrado1 = document.getElementById(elementid = 1);
    let quadrado2 = document.getElementById(elementid = 2);
    let quadrado3 = document.getElementById(elementid = 3);
    let quadrado4 = document.getElementById(elementid = 4);
    let quadrado5 = document.getElementById(elementid = 5);
    let quadrado6 = document.getElementById(elementid = 6);
    let quadrado7 = document.getElementById(elementid = 7);
    let quadrado8 = document.getElementById(elementid = 8);
    let quadrado9 = document.getElementById(elementid = 9);

}
 
