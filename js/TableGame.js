let table = Array.from(document.getElementsByClassName('sizeBoxes'));

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

let turn = true;

let tokenP1 = 3;
let tokenP2 = 3;

let numMovesTotal = 0;
let numMovesP1 = 0;
let numMovesP2 = 0;


let tablePresent = ["","","","","","","","",""];

let tableWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const CheckWin = () => {
    console.log (tablePresent)
}

player1.innerHTML = `${datosSesion.player1}`;
player2.innerHTML = `${datosSesion.player2}`;

let movesPlayer1 = document.getElementById("movesPlayer1");
let movePlusP1 = numMovesP1;
let movesPlayer2 = document.getElementById("movesPlayer2");
let movePlusP2 = numMovesP2;
    

table.map (cell => {
    cell.addEventListener("click", () => {
        if ((cell.innerHTML === "") && (tokenP1>0 || tokenP2>0)){
            if(turn){
                cell.innerHTML = "X";
                tablePresent[cell.id] = "X";
                tokenP1--;
                numMovesP1++;

                movesPlayer1 = document.getElementById("movesPlayer1");
                movePlusP1 = numMovesP1;
                movesPlayer1.innerHTML = movePlusP1;
            }
            else{
                cell.innerHTML = "O";
                tablePresent[cell.id] = "O";
                tokenP2--;
                numMovesP2++;

                movesPlayer2 = document.getElementById("movesPlayer2");
                movePlusP2 = numMovesP2;
                movesPlayer2.innerHTML = movePlusP2;
            }
            CheckWin();
            turn = !turn;
        }
    })
})

