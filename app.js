let cells = document.querySelectorAll('.row > div')
let board = document.getElementById('board')
let player = document.querySelector('.player')
let restartButton = document.getElementById('restartBtn')
let statusText = document.getElementById('statusText')

const O = "O";
const X = "X";

// I'll need placeholders for each cell, as well as winCondiitions stated
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

// What actions can a user can take when playing the game?
// 1. A player can select a box 2. A player can end the game either through a win or a draw 3. A player can press the button to restart the game

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



// To check for the winner we have to use the winning combinations, and use that information against the textContent within the cells to tell if the player has won or not
function checkWinner() {

}

function endgame(draw) {
    if(draw) {
        statusText.innerText = "You both lose!"
    } else {
        statusText.innerText = currentPlayer + 'Player wins!'
    }
}

function restartGame() {

}
function cellClicked () {
    // I also want to apply functionality so that once I click on a cell during the game, I won't be able to click on the cell again if it's already filled
    id = event.target.textContent;
    if(currentPlayer === O)
    currentPlayer = X
    else {
        currentPlayer = O
    };
    
} 