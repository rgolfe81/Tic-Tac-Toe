let table = Array.from(document.getElementsByClassName('sizeBoxes'));

let turn = true;

let tokenP1 = 3;
let tokenP2 = 3;

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

table.map (cell => {
    cell.addEventListener("click", () => {
        if ((cell.innerHTML === "") && (tokenP1>0 || tokenP2>0)){
            if(turn){
                cell.innerHTML = "X";
                tablePresent[cell.id] = "X";
                tokenP1--;
            }
            else{
                cell.innerHTML = "O";
                tablePresent[cell.id] = "O";
                tokenP2--;
            }
            CheckWin();
            turn = !turn;
        }
    })
})