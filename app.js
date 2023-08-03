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
        let cella = options[condition[0]];
        let cellb = options[condition[1]];
        let cellc = options[condition[2]];

        if (cella === "" || cellb === "" || cellc === "") {
            continue;
        } 
        if ((cella === cellb) && (cellb === cellc)) {
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



function restartGame() {
    running = true;
    currentPlayer = "X"
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}s turn`;
    cells.forEach(cell => cell.textContent = "");


}
function cellClicked() {
    
    let cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);

    checkWinner();

}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

// I need something that keeps the cells index once a cell is clicked



function changePlayer() {
    if (currentPlayer === "X")
        currentPlayer = "O"
    else {
        currentPlayer = "X"
    };
    statusText.textContent = `${currentPlayer}'s turn`;
}
