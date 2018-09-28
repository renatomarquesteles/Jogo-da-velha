var canvas, context;
var contO = 0,contX = 0; // contadores do placar
var linha = 0;  // verifica se a linha que indica o vencedor já foi desenhada
var numero;     // variável que irá determinar se será desenhado bola ou X
var tabuleiro = new Array(9).fill(null); // cria um vetor com as 9 posições do jogo, receberá 0 para bola e 1 para X
window.onload = function () {   // essa função será executada no carregamento da página
    canvas = document.getElementById('jogo1');
    context = canvas.getContext('2d');
    // Desenha o tabuleiro
    desTabuleiro();
}

function novoJogo(){
    // Limpa o canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Desenho do tabuleiro novamente
    desTabuleiro();
    // Reseta o vetor
    for(var i=0;i<9;i++){
        tabuleiro[i] = null;
    }
    // Limpas as mensagens
    document.getElementById("WinO").innerHTML = "";
    document.getElementById("WinX").innerHTML = "";
    document.getElementById("msgVencedor").innerHTML = "";
    // Reseta as linhas
    linha = 0;
    // Reseta img de empate (Deu velha)
    document.getElementById("imgVelha").innerHTML = "";
    //Reseta o setInterval das linhas
    clearInterval(counterms);
}
function zeraPlacar (){
    contO = 0;
    contX = 0;
    document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
    novoJogo();
}


function posicaoMouse(canvas, event) {       
    var rect = canvas.getBoundingClientRect();  // função que vai pegar a posicao do mouse dentro do canvas
    return {    // irá retornar um objeto
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function vez(num) {
    numero = num        // 0 para bola, 1 para X
    novoJogo();
}

function desenho(event) {
    var posicao = posicaoMouse(canvas, event);  // armazena as coordenadas do mouse na variável posicao
    console.log(posicao);
    if ((posicao.x >= 0 && posicao.x < 200) && (posicao.y >= 0 && posicao.y < 200) && tabuleiro[0] == null) {      // primeiro quadrado
        if (numero == 0) {
            bola(100, 100);
            tabuleiro[0] = 0;
            numero = 1; // garante que o próximo desenho será X
        } else {
            xis(100, 100);
            tabuleiro[0] = 1;
            numero = 0; // garante que o próximo desenho será bola
        }
    }
    else if ((posicao.x > 200 && posicao.x < 400) && (posicao.y >= 0 && posicao.y < 200) && tabuleiro[1] == null) {    // segundo quadrado
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
    else if ((posicao.x > 400 && posicao.x < 600) && (posicao.y >= 0 && posicao.y < 200) && tabuleiro[2] == null) {    // terceiro quadrado
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
    else if ((posicao.x > 0 && posicao.x < 200) && (posicao.y >= 200 && posicao.y < 400) && tabuleiro[3] == null) {    // quarto quadrado
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
    else if ((posicao.x > 200 && posicao.x < 400) && (posicao.y >= 200 && posicao.y < 400) && tabuleiro[4] == null) {    // quinto quadrado
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
    else if ((posicao.x > 400 && posicao.x < 600) && (posicao.y >= 200 && posicao.y < 400) && tabuleiro[5] == null) {    // sexto quadrado
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
    else if ((posicao.x > 0 && posicao.x < 200) && (posicao.y >= 400 && posicao.y < 600) && tabuleiro[6] == null) {    // sétimo quadrado
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
    else if ((posicao.x > 200 && posicao.x < 400) && (posicao.y >= 400 && posicao.y < 600) && tabuleiro[7] == null) {    // oitavo quadrado
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
    else if ((posicao.x > 400 && posicao.x < 600) && (posicao.y >= 400 && posicao.y < 600) && tabuleiro[8] == null) {    // nono quadrado
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


function bola(x, y) {    // função pra desenhar a bola
    context.beginPath();
    context.arc(x, y, 60, 0 * Math.PI, 360 * Math.PI / 180);
    context.lineWidth = 20;
    context.strokeStyle = '#F50057';
    context.stroke();
}

function xis(x, y) {     // função pra desenhar o X
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
    if(linha == 0){     // Verifica se já houve um vencedor
    // linhas
        if((tabuleiro[0] == tabuleiro[1]) && (tabuleiro[1] == tabuleiro[2]) && (tabuleiro[0] != null)){
            if(tabuleiro[1] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            counterms = setInterval(linha1,1);
            linha = 1;
        }
        else if((tabuleiro[3] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[5]) && (tabuleiro[3] != null)){
            if(tabuleiro[3] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            linha2();
            linha = 1;
        }
        else if((tabuleiro[6] == tabuleiro[7]) && (tabuleiro[7] == tabuleiro[8]) && (tabuleiro[6] != null)){
            if(tabuleiro[6] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            linha3();
            linha = 1;
        }
        // colunas
        else if((tabuleiro[0] == tabuleiro[3]) && (tabuleiro[3] == tabuleiro[6]) && (tabuleiro[0] != null)){
            if(tabuleiro[0] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            coluna1();
            linha = 1;
        }
        else if((tabuleiro[1] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[7]) && (tabuleiro[1] != null)){
            if(tabuleiro[1] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            coluna2();
            linha = 1;
        }
        else if((tabuleiro[2] == tabuleiro[5]) && (tabuleiro[5] == tabuleiro[8]) && (tabuleiro[2] != null)){
            if(tabuleiro[2] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            coluna3();
            linha = 1;
        }
        // diagonais
        else if((tabuleiro[0] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[8]) && (tabuleiro[0] != null)){
            if(tabuleiro[0] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            diagonal1();
            linha = 1;
        }
        else if((tabuleiro[2] == tabuleiro[4]) && (tabuleiro[4] == tabuleiro[6]) && (tabuleiro[2] != null)){
            if(tabuleiro[2] == 0){
                document.getElementById("WinO").innerHTML = "O";
                document.getElementById("WinX").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contO++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            else{
                document.getElementById("WinX").innerHTML = "X";
                document.getElementById("WinO").innerHTML = "";
                document.getElementById("msgVencedor").innerHTML = "VENCEDOR!";
                contX++;
                document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
                trava();
            }
            //Desenho da linha
            diagonal2();
            linha = 1;
        }
        //Empate
        else if (tabuleiro.every(x => x !== null)){
            document.getElementById("WinX").innerHTML = "";
            document.getElementById("WinO").innerHTML = "";
            document.getElementById("msgVencedor").innerHTML = "Deu velha!";
            document.getElementById("imgVelha").innerHTML = "<img src=\"css/img/granny2.png\">";
            document.getElementById("placar").innerHTML = "O:"+contO+" - X:"+contX;
            trava();
            linha = 1;
        }
    }
}

function trava() {      // impede que o usuário continue jogando após anunciado o vencedor
    for(var i = 0; i<tabuleiro.length; i++) {
        if(tabuleiro[i] == null){
            tabuleiro[i] = 3;       // preenche as posições vazias do tabuleiro
        }
    }
}
function desTabuleiro(){
    // Inicia path, apaga desenhos anteriores 
    context.beginPath();
    //Desenhar tabuleiro
    context.moveTo(0, 200);     // determina ponto inicial
    context.lineTo(600, 200);   // faz a linha a partir do ponto inicial até o ponto referenciado
    context.moveTo(0, 400);
    context.lineTo(600, 400);
    context.moveTo(200, 0);
    context.lineTo(200, 600);
    context.moveTo(400, 0);
    context.lineTo(400, 600);
    context.lineWidth = 2;      // largura da linha
    context.strokeStyle = '#757575';        // estilo da linha
    //Desenhar linhas
    context.stroke();
}
var x=0;
var counterms;
function linha1() {
    // context.save(); //salva o canvas
    // context.clearRect(0, 0,canvas.width, canvas.height) // limpa o canvas
    // desTabuleiro();
    context.beginPath();    //começa o desenho
    context.moveTo(0, 100);
    context.lineTo(x, 100); // final: 600,100
    x=x+5;
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
    // context.restore();  //restaura o canvas
}
function linha2() {
    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(600, 300);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function linha3() {
    context.beginPath();
    context.moveTo(0, 500);
    context.lineTo(600, 500);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function coluna1() {
    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(100, 600);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function coluna2() {
    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, 600);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function coluna3() {
    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(500, 600);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function diagonal1() {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(600, 600);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}
function diagonal2() {
    context.beginPath();
    context.moveTo(600, 0);
    context.lineTo(0, 600);
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.stroke();
}