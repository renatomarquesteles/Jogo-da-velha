var canvas, context; // Variáveis para desenhar no canvas
var contO = 0, contX = 0; // Contadores do placar
var linha = 0; // Verifica se a linha que indica o vencedor já foi desenhada
var numero; // Variável que irá determinar se será desenhado bola ou X
var tabuleiro = new Array(9).fill(null); // Cria um vetor com as 9 posições do jogo, receberá 0 para bola e 1 para X
//var x = 0, y = 600; // Utilizado para desenho das linhas
var counterms; // Utilizado para armazenar o setInterval()
window.onload = function () { // Essa função será executada no carregamento da página
    canvas = document.getElementById('jogo1');
    context = canvas.getContext('2d');
    desTabuleiro(); // Desenha o tabuleiro
}
function novoJogo() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    desTabuleiro(); // Desenho do tabuleiro novamente
    // Reseta o vetor
    for (var i = 0; i < 9; i++) {
        tabuleiro[i] = null;
    }
    // Limpas as mensagens
    document.getElementById("WinO").innerHTML = "";
    document.getElementById("WinX").innerHTML = "";
    document.getElementById("msgVencedor").innerHTML = "";
    linha = 0; // Reseta as linhas
    document.getElementById("imgVelha").innerHTML = ""; // Reseta img de empate (Deu velha)
    clearInterval(counterms); //Reseta o setInterval que desenha as linhas
    x = 0; // Reseta o 'x' que é usado para desenhar as linhas de vencedor
}
function zeraPlacar() {
    contO = 0;
    contX = 0;
    document.getElementById("placar").innerHTML = "O:" + contO + " - X:" + contX;
    novoJogo();
}
function posicaoMouse(event) {
    var rect = canvas.getBoundingClientRect(); // Função que vai pegar a posicao do mouse dentro do canvas
    // Irá retornar um objeto
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
function vez(num) {
    numero = num // 0 para bola, 1 para X
    novoJogo();
}
function desenho(event) {
    var posicao = posicaoMouse(event); // Armazena as coordenadas do mouse na variável posicao
    if ((posicao.x >= 0 && posicao.x < 200) && (posicao.y >= 0 && posicao.y < 200) && tabuleiro[0] == null) { // Primeiro quadrado
        if (numero == 0) {
            bola(100, 100);
            tabuleiro[0] = 0;
            numero = 1; // Garante que o próximo desenho será X
        } else {
            xis(100, 100);
            tabuleiro[0] = 1;
            numero = 0; // Garante que o próximo desenho será bola
        }
    }
    else if ((posicao.x > 200 && posicao.x < 400) && (posicao.y >= 0 && posicao.y < 200) && tabuleiro[1] == null) { // Segundo quadrado
        if (numero == 0) {
            bola(300, 100);
            tabuleiro[1] = 0;
            numero = 1;
        } else {
            xis(300, 100);
            tabuleiro[1] = 1;
            numero = 0;
        }
    }
    else if ((posicao.x > 400 && posicao.x < 600) && (posicao.y >= 0 && posicao.y < 200) && tabuleiro[2] == null) { // Terceiro quadrado
        if (numero == 0) {
            bola(500, 100);
            tabuleiro[2] = 0;
            numero = 1;
        } else {
            xis(500, 100);
            tabuleiro[2] = 1;
            numero = 0;
        }
    }
    else if ((posicao.x > 0 && posicao.x < 200) && (posicao.y >= 200 && posicao.y < 400) && tabuleiro[3] == null) { // Quarto quadrado
        if (numero == 0) {
            bola(100, 300);
            tabuleiro[3] = 0;
            numero = 1;
        } else {
            xis(100, 300);
            tabuleiro[3] = 1;
            numero = 0;
        }
    }
    else if ((posicao.x > 200 && posicao.x < 400) && (posicao.y >= 200 && posicao.y < 400) && tabuleiro[4] == null) { // Quinto quadrado
        if (numero == 0) {
            bola(300, 300);
            tabuleiro[4] = 0;
            numero = 1;
        } else {
            xis(300, 300);
            tabuleiro[4] = 1;
            numero = 0;
        }
    }
    else if ((posicao.x > 400 && posicao.x < 600) && (posicao.y >= 200 && posicao.y < 400) && tabuleiro[5] == null) { // Sexto quadrado
        if (numero == 0) {
            bola(500, 300);
            tabuleiro[5] = 0;
            numero = 1;
        } else {
            xis(500, 300);
            tabuleiro[5] = 1;
            numero = 0;
        }
    }
    else if ((posicao.x > 0 && posicao.x < 200) && (posicao.y >= 400 && posicao.y < 600) && tabuleiro[6] == null) { // Sétimo quadrado
        if (numero == 0) {
            bola(100, 500);
            tabuleiro[6] = 0;
            numero = 1;
        } else {
            xis(100, 500);
            tabuleiro[6] = 1;
            numero = 0;
        }
    }
    else if ((posicao.x > 200 && posicao.x < 400) && (posicao.y >= 400 && posicao.y < 600) && tabuleiro[7] == null) { // Oitavo quadrado
        if (numero == 0) {
            bola(300, 500);
            tabuleiro[7] = 0;
            numero = 1;
        } else {
            xis(300, 500);
            tabuleiro[7] = 1;
            numero = 0;
        }
    }
    else if ((posicao.x > 400 && posicao.x < 600) && (posicao.y >= 400 && posicao.y < 600) && tabuleiro[8] == null) { // Nono quadrado
        if (numero == 0) {
            bola(500, 500);
            tabuleiro[8] = 0;
            numero = 1;
        } else {
            xis(500, 500);
            tabuleiro[8] = 1;
            numero = 0;
        }
    }
    verifica();
}
// Função para desenhar a bola
function bola(x, y) {
    context.beginPath();
    context.arc(x, y, 60, 0 * Math.PI, 360 * Math.PI / 180);
    context.lineWidth = 20;
    context.strokeStyle = '#F50057';
    context.stroke();
}
// Função para desenhar o X
function xis(x, y) {
    context.beginPath();
    context.moveTo(x, y)
    context.lineTo(x - 50, y - 50)
    context.moveTo(x, y)
    context.lineTo(x + 50, y - 50)
    context.moveTo(x, y)
    context.lineTo(x + 50, y + 50)
    context.moveTo(x, y)
    context.lineTo(x - 50, y + 50)
    context.lineWidth = 20;
    context.strokeStyle = '#512DA8';
    context.stroke();
}
function naonulo(x) {
    return x != null;
}
// Verificação se ganhou ou não
function verifica() {
    if (linha == 0) { // Verifica se já houve um vencedor
        // Linhas
        if ((tabuleiro[0] == tabuleiro[1]) && (tabuleiro[1] == tabuleiro[2]) && (tabuleiro[0] != null)) {
            if (tabuleiro[1] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(linha1, 1); // Desenho da linha
        }
        else if ((tabuleiro[3] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[5]) && (tabuleiro[3] != null)) {
            if (tabuleiro[3] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(linha2, 1); // Desenho da linha
        }
        else if ((tabuleiro[6] == tabuleiro[7]) && (tabuleiro[7] == tabuleiro[8]) && (tabuleiro[6] != null)) {
            if (tabuleiro[6] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(linha3, 1); // Desenho da linha
        }
        // Colunas
        else if ((tabuleiro[0] == tabuleiro[3]) && (tabuleiro[3] == tabuleiro[6]) && (tabuleiro[0] != null)) {
            if (tabuleiro[0] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(coluna1, 1); // Desenho da linha
        }
        else if ((tabuleiro[1] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[7]) && (tabuleiro[1] != null)) {
            if (tabuleiro[1] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(coluna2, 1); // Desenho da linha
        }
        else if ((tabuleiro[2] == tabuleiro[5]) && (tabuleiro[5] == tabuleiro[8]) && (tabuleiro[2] != null)) {
            if (tabuleiro[2] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(coluna3, 1); // Desenho da linha
        }
        // Diagonais
        else if ((tabuleiro[0] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[8]) && (tabuleiro[0] != null)) {
            if (tabuleiro[0] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(diagonal1, 1); // Desenho da linha
        }
        else if ((tabuleiro[2] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[6]) && (tabuleiro[2] != null)) {
            if (tabuleiro[2] == 0) {
                linha = 1;
                contO++;
            }
            else {
                linha = 2;
                contX++;
            }
            trava();
            counterms = setInterval(diagonal2, 1); // Desenho da linha
        }
        // Empate
        else if (tabuleiro.every(x => x !== null)) {
            document.getElementById("WinX").innerHTML = "";
            document.getElementById("WinO").innerHTML = "";
            document.getElementById("msgVencedor").innerHTML = "Deu velha!";
            document.getElementById("imgVelha").innerHTML = "<img src=\"css/img/granny2.png\">";
            trava();
            linha = 3;
        }
        if (linha == 1) {
            document.getElementById("WinO").innerHTML = "O";
            document.getElementById("WinX").innerHTML = "";
            document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
        }
        else if (linha == 2) {
            document.getElementById("WinX").innerHTML = "X";
            document.getElementById("WinO").innerHTML = "";
            document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
        }
        document.getElementById("placar").innerHTML = "O:" + contO + " - X:" + contX;
    }
}
function trava() { // Impede que o usuário continue jogando após anunciado o vencedor
    for (var i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i] == null) {
            tabuleiro[i] = 3; // Preenche as posições vazias do tabuleiro
        }
    }
}
// Desenhar tabuleiro
function desTabuleiro() {
    context.beginPath(); // Inicia path, apaga desenhos anteriores
    context.moveTo(0, 200); // Determina ponto inicial
    context.lineTo(600, 200); // Faz a linha a partir do ponto inicial até o ponto referenciado
    context.moveTo(0, 400);
    context.lineTo(600, 400);
    context.moveTo(200, 0);
    context.lineTo(200, 600);
    context.moveTo(400, 0);
    context.lineTo(400, 600);
    context.lineWidth = 2; // Largura da linha
    context.strokeStyle = '#757575'; // Estilo da linha
    context.stroke(); // Desenhar linhas
}
function linha(w,x,y,z) {
    context.beginPath(); // Começa o desenho
    context.moveTo(w, x);
    context.lineTo(y, z); 
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function linha1() {
    context.beginPath(); // Começa o desenho
    context.moveTo(0, 100);
    context.lineTo(x, 100); // Final: 600,100
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function linha2() {
    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(x, 300); // Final: 600,300
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function linha3() {
    context.beginPath();
    context.moveTo(0, 500);
    context.lineTo(x, 500); // Final: 600,500
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function coluna1() {
    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(100, x); // Final: 100,600
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function coluna2() {
    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, x);
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function coluna3() {
    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(500, x);
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function diagonal1() {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(x, x);
    x = x + 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function diagonal2() {
    context.beginPath();
    context.moveTo(600, 0);
    context.lineTo(y, x);
    x = x + 5;
    y = y - 5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}