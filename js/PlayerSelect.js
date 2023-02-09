let players = {
    player1 : "",
    player2 : ""
}

let inputs = Array.from(document.getElementsByClassName("namePlayer"));

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

const ToTableGame = () => {
    if( (players.player1 === '') || (players.player2 === '') ){
        alert("No has introducido los nombres de los jugadores");
        return;
    }
    if ((isNaN(players.player1)===false) || (isNaN(players.player2)===false)) {
        alert("Debes introducir un nombre");
        return;
    }
    sessionStorage.setItem("playersInfo", JSON.stringify(players));
    window.open("../pages/TableGame.html","_self");
}