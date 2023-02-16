// Entorno *********************************************

let players = {
    player1 : "",
    player2 : ""
}

let inputs = Array.from(document.getElementsByClassName("namePlayer"));
let modal = document.getElementById("modalError");

// Funciones *********************************************
const ErrorClose = () => {
    modal.classList.remove("show");
    modal.style.display = "none";
}

const ToTableGame = () => {
    if( (players.player1 === '') || (players.player2 === '') || (isNaN(players.player1)===false) || (isNaN(players.player2)===false) ){
        modal.classList.add("show");
        modal.style.display = "block";
        return;
    }
    sessionStorage.setItem("playersInfo", JSON.stringify(players));
    window.open("../pages/TableGame.html","_self");
}

// Algoritmo *********************************************

inputs.map(
    elemento => {
        elemento.addEventListener("input", ()=>{
            for(let jugador in players){
                if(elemento.name == jugador){
                    players[jugador] = elemento.value;
                }
            }
        })
    }
)
