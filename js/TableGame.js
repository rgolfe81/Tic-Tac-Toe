// Entorno *****************************************************

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

let tableView = Array.from(document.getElementsByClassName('sizeBoxes'));

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let movesPlayer1 = document.getElementById("movesPlayer1");
let movesPlayer2 = document.getElementById("movesPlayer2");

let textTurnP1Js = document.getElementById("textTurnP1Html");
let textTurnP2Js = document.getElementById("textTurnP2Html");

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

let turn = true;

let tokenP1 = 0;
let tokenP2 = 0;

let winner;
let inDelete = 10;

// Funciones ********************************************************

const CheckWin = () => {
    for (let i = 0; i < tableWin.length; i++) {
        let [a, b, c] = tableWin[i];
        if (tablePresent[a] === tablePresent[b] && tablePresent[b] === tablePresent[c]) {
            return tablePresent[a];
        }
    }
    return null;
}

const Reset = () => {
    textTurnP1Js.innerHTML= "Es tu turno";
    textTurnP2Js.innerHTML= "";
    movesPlayer1.innerHTML = 0;
    movesPlayer2.innerHTML = 0;
    tokenP1 = 0;
    tokenP2 = 0;
    turn = true;
    tableView.map (cell => {
        cell.innerHTML = "";
        tablePresent[cell.id] = "";
    })
}

const SendWinner = () => {
    if (winner === "X"){
        sessionStorage.setItem("winnerSS", winner);
        sessionStorage.setItem("winnerNameSS", player1.innerHTML);
        sessionStorage.setItem("winnerMoveSS", movesPlayer1.innerHTML);
        setTimeout(()=>{
            window.open("../pages/WinGame.html","_self");
            },500);
    }
    if (winner === "O"){
        sessionStorage.setItem("winnerSS", winner);
        sessionStorage.setItem("winnerNameSS", player2.innerHTML);
        sessionStorage.setItem("winnerMoveSS", movesPlayer1.innerHTML);
        setTimeout(()=>{
            window.open("../pages/WinGame.html","_self");
            },500);
    }
}


// Algoritmo ********************************************************

player1.innerHTML = `${datosSesion.player1}`;
player2.innerHTML = `${datosSesion.player2}`;
textTurnP1Js.innerHTML= "Es tu turno";
textTurnP2Js.innerHTML= "";
movesPlayer1.innerHTML = 0;
movesPlayer2.innerHTML = 0;
console.log ("el primer indelete es "+inDelete);


tableView.map (cell => {
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
                cell.style.color = "rgb(220, 53, 69)";
                tablePresent[cell.id] = "O";
                tokenP2++;
                movesPlayer2.innerHTML = tokenP2;
                textTurnP1Js.innerHTML= "Es tu turno";
                textTurnP2Js.innerHTML= "";
            }
            winner=CheckWin();
            SendWinner();    
            turn = !turn;
        }
    })
})

console.log("InDelete es : "+inDelete);

tableView.map (cell => {
    cell.addEventListener("click", () => {
        console.log ("InDelete es "+inDelete);
        console.log ("movimientos p1 "+tokenP1);
        console.log ("movimientos p2 "+tokenP2);
        console.log ("turno "+turn);
        console.log ("celda "+cell.innerHTML);
        if ((cell.innerHTML === "X") && (cell.innerHTML !== "") && (tokenP1>=3 && tokenP2>=3) && (turn) && (inDelete === 10)){
            cell.innerHTML = "";
            tablePresent[cell.id] = "";
            inDelete = 5;
            console.log ("indelete dentro del borrado : "+inDelete);
        } else {
            if ((cell.innerHTML !== "O") && (cell.innerHTML !== "X") && (tokenP1>=3 && tokenP2>=3) && (turn) && (inDelete === 5) && (cell.innerHTML === "")){
                cell.innerHTML = "X";
                cell.style.color = "rgb(13, 110, 253)";
                tablePresent[cell.id] = "X";
                console.log ("Ha entrado en el if pintar X azul");
                tokenP1++;
                movesPlayer1.innerHTML = tokenP1;
                textTurnP1Js.innerHTML= "";
                textTurnP2Js.innerHTML= "Es tu turno";
        
            
            winner=CheckWin();
            SendWinner();    
            turn = !turn;
            inDelete = 10;
        }
    }


        if ((cell.innerHTML === "O") && (cell.innerHTML !== "") && (tokenP1>=3 && tokenP2>=3) && (!turn) && (inDelete === 10)){
            cell.innerHTML = "";
            tablePresent[cell.id] = "";
            inDelete = 5;
            console.log ("indelete dentro del borrado : "+inDelete);
        } else {
            if ((cell.innerHTML !== "O") && (cell.innerHTML !== "X") && (tokenP1>=3 && tokenP2>=3) && (!turn) && (inDelete === 5) && (cell.innerHTML === "")){
                cell.innerHTML = "O";
                cell.style.color = "rgb(220, 53, 69)";
                tablePresent[cell.id] = "O";
                tokenP2++;
                movesPlayer2.innerHTML = tokenP2;
                textTurnP1Js.innerHTML= "Es tu turno";
                textTurnP2Js.innerHTML= "";
        
            

                winner=CheckWin();
                SendWinner();    
                turn = !turn;
                inDelete = 10;
            }
        }
    
    })
})
