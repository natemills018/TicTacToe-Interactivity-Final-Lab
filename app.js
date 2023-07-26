let cells = document.querySelectorAll('.row > div')
let board = document.getElementById('board')
let player = document.querySelector('.player')
let restartButton = document.getElementById('restartBtn')
let statusText = document.getElementById('statusText')

const O = "O";
const X = "X";

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

startGame();


function startGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', cellClicked);
    }
    restartButton.addEventListener('click', restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
    
}
function checkWinner() {
    let setWon = false;
    for (let j = 0; j < winConditions.length; j++) {
        let condition = winConditions[j];
        let a = options[condition[0]];
        let b = options[condition[1]];
        let c = options[condition[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        } 
        if (a === b && b === c) {
            setWon = true;
            break;  
        }
    }
    if(setWon){
        statusText.textContent = `${currentPlayer} wins!`
        running = false;
        return;

    } else if(!options.includes("")) {
        statusText.textContent = "You both lose!"
        running = false;
        return;
    }
    else{
        changePlayer();
    }
}



function endgame(draw) {
    if (draw) {
        statusText.textContent = "You both lose!"
    } else {
        statusText.textContent = `${currentPlayer} wins!`
    }
}

function restartGame() {
    running = true;
    currentPlayer = "X"
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}s turn`;
    cells.forEach(cell => cell.textContent = "");


}
function cellClicked(event) {

    let cellText = event.target.textContent;

    if (cellText !== "") return;

    event.target.textContent = currentPlayer;

    checkWinner();

}


function changePlayer() {
    if (currentPlayer === "X")
        currentPlayer = "0"
    else {
        currentPlayer = "X"
    };
    statusText.textContent = `${currentPlayer}'s turn`;
}