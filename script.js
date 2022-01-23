let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById(elementid = 'jogador-selecionado');
let vencedorSelecionado = document.getElementById(elementid = 'vencedor-selecionado');
let quadrados = document.getElementsByClassName(className = 'quadrado')
let jogador1 = document.querySelector('.jogador1');
let jogador2 = document.querySelector('.jogador2')

mudarJogador(valor = '<img src ="/img/brasil.png">')

function escolherQuadrado(id) {
    if (vencedor != null) {
        return;
    }
    //pegando id colocando na variavel quadrado
    let quadrado = document.getElementById(id);

    //verificação para não trocar jogador
    if (quadrado.innerHTML != '-') {
        return;
    }


    //inserindo a imagem a variavel    quadrado
    quadrado.innerHTML = jogador;

    quadrado.style.color = '#000';

    //verificar qual ojogador da vez
    if (jogador === '<img src ="/img/brasil.png">') {

        jogador = '<img src="/img/venezuela.png">';
        
    } else {

        jogador = '<img src ="/img/brasil.png">';
        
    }

    //ativar a mudança
    mudarJogador(jogador);
    checaVencedor();

}

function mudarJogador(valor, nome) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    let quadrado1 = document.getElementById(elementid = 1);
    let quadrado2 = document.getElementById(elementid = 2);
    let quadrado3 = document.getElementById(elementid = 3);
    let quadrado4 = document.getElementById(elementid = 4);
    let quadrado5 = document.getElementById(elementid = 5);
    let quadrado6 = document.getElementById(elementid = 6);
    let quadrado7 = document.getElementById(elementid = 7);
    let quadrado8 = document.getElementById(elementid = 8);
    let quadrado9 = document.getElementById(elementid = 9);

    if (checarSequencia(quadrado1, quadrado2, quadrado3)) {

        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);

        return;
    }
    if (checarSequencia(quadrado4, quadrado5, quadrado6)) {

        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if (checarSequencia(quadrado7, quadrado8, quadrado9)) {

        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado9);
        return;
    }
    if (checarSequencia(quadrado1, quadrado4, quadrado7)) {

        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if (checarSequencia(quadrado2, quadrado5, quadrado8)) {

        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if (checarSequencia(quadrado3, quadrado6, quadrado9)) {

        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if (checarSequencia(quadrado1, quadrado5, quadrado9)) {

        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado5);
        return;
    }
    if (checarSequencia(quadrado3, quadrado5, quadrado7)) {

        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado7);


    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
    
}


function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#00BFFF';
    quadrado2.style.background = '#00BFFF';
    quadrado3.style.background = '#00BFFF';
    quadrado1.style.border = '2px solid #FFFF00';
    quadrado2.style.border = '2px solid #FFFF00';
    quadrado3.style.border = '2px solid #FFFF00';
    quadrado1.classList.add('pisca');
    quadrado2.classList.add('pisca');
    quadrado3.classList.add('pisca');
   
}


function checarSequencia(quadrado1, quadrado2, quadrado3) {

    let eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;

    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.style.border = '';
        quadrado.innerHTML = '-';
        quadrado.classList.remove('pisca');
       
    }

    mudarJogador(valor = '<img src ="/img/brasil.png">')
}