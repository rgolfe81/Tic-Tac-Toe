// Entorno **********************************************

let winner = document.getElementById("nameWinner");
let movesWinner = document.getElementById("movesWinner");

let winnerSessionSymbol = sessionStorage.getItem("winnerSS");
let winnerSessionName = sessionStorage.getItem("winnerNameSS");
let winnerSessionMove = sessionStorage.getItem("winnerMoveSS");
let playerWinner = document.getElementById("imgPlayerWinner");
let createImgPlayerWinner;

// Algoritmo *******************************************

if (winnerSessionSymbol === "X"){
    winner.innerHTML = winnerSessionName;
    movesWinner.innerHTML = winnerSessionMove;
    winner.style.color = "rgb(13, 110, 253)";
    createImgPlayerWinner = '<img src="../img/Logo_Player1.png" alt="Imagen Player1" class="imgWin">';
    playerWinner.innerHTML = createImgPlayerWinner;
}
if (winnerSessionSymbol === "O"){
    winner.innerHTML = winnerSessionName;
    movesWinner.innerHTML = winnerSessionMove;
    winner.style.color = "rgb(220, 53, 69)";
    createImgPlayerWinner = '<img src="../img/Logo_Player2.png" alt="Imagen Player1" class="imgWin">';
    playerWinner.innerHTML = createImgPlayerWinner;
}