let table = Array.from(document.getElementsByClassName('sizeBoxes'));

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

let turn = true;

let tokenP1 = 0;
let tokenP2 = 0;

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

let movesPlayer1 = document.getElementById("movesPlayer1");
let movesPlayer2 = document.getElementById("movesPlayer2");

let textTurnP1Js = document.getElementById("textTurnP1Html");
let textTurnP2Js = document.getElementById("textTurnP2Html");
textTurnP1Js.innerHTML= "Es tu turno";
textTurnP2Js.innerHTML= "";


const CheckWin = () => {
    console.log (tablePresent)
}

player1.innerHTML = `${datosSesion.player1}`;
player2.innerHTML = `${datosSesion.player2}`;


table.map (cell => {
    cell.addEventListener("click", () => {
        if ((cell.innerHTML === "") && (tokenP1<3 || tokenP2<3)){
            if(turn){
                cell.innerHTML = "X";
                cell.style.color = "rgb(13, 110, 253)";
                tablePresent[cell.id] = "X";
                tokenP1++;
                movesPlayer1.innerHTML = tokenP1;
                textTurnP1Js.innerHTML= "";
                textTurnP2Js.innerHTML= "Es tu turno";
            }
            else{
                cell.innerHTML = "O";
                cell.style.color = "rgb(220, 53, 69)"
                tablePresent[cell.id] = "O";
                tokenP2++;
                movesPlayer2.innerHTML = tokenP2;
                textTurnP1Js.innerHTML= "Es tu turno";
                textTurnP2Js.innerHTML= "";
            }
            CheckWin();
            turn = !turn;
        }
    })
})

