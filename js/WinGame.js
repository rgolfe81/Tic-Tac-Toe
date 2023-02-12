let winner = document.getElementById("nameWinner");
let movesWinner = document.getElementById("movesWinner");

let winnerSessionSymbol = sessionStorage.getItem("winnerSS");
let winnerSessionName = sessionStorage.getItem("winnerNameSS");
let winnerSessionMove = sessionStorage.getItem("winnerMoveSS");

if (winnerSessionSymbol === "X"){
    winner.innerHTML = winnerSessionName;
    movesWinner.innerHTML = winnerSessionMove;
    winner.style.color = "rgb(13, 110, 253)";
}
if (winnerSessionSymbol === "O"){
    winner.innerHTML = winnerSessionName;
    movesWinner.innerHTML = winnerSessionMove;
    winner.style.color = "rgb(220, 53, 69)";
}