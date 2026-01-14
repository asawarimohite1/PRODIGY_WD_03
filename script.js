let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Handle cell click
function makeMove(cell) {
    if (cell.innerText !== "" || !gameActive) return;

    cell.innerText = currentPlayer;
    checkWinner();

    if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.innerText = `Player ${currentPlayer}'s Turn`;
    }
}

// Check winner
function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;

        if (
            cells[a].innerText &&
            cells[a].innerText === cells[b].innerText &&
            cells[a].innerText === cells[c].innerText
        ) {
            statusText.innerText = `Player ${cells[a].innerText} Wins!`;
            gameActive = false;
            return;
        }
    }

    // Check draw
    let isDraw = true;
    cells.forEach(cell => {
        if (cell.innerText === "") isDraw = false;
    });

    if (isDraw) {
        statusText.innerText = "It's a Draw!";
        gameActive = false;
    }
}

// Reset game
function resetGame() {
    cells.forEach(cell => cell.innerText = "");
    currentPlayer = "X";
    gameActive = true;
    statusText.innerText = "Player X's Turn";
}
