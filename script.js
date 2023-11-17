let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(index) {
    if (board[index] == "" && gameActive) {
            board[index] = currentPlayer;
            document.getElementById(index).innerText = currentPlayer;

        if (checkWin()) {
            document.getElementById("result").innerText = `${currentPlayer} nyert!`;
            document.getElementById("restart").style.display = "inline";
            gameActive = false;
        } else if (board.every(cell => cell != "")) {
            document.getElementById("result").innerText = "Döntetlen!";
            gameActive = false;
        } else {
            currentPlayer = (currentPlayer == "X") ? "O" : "X";
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return (board[a] != "" && board[a] == board[b] && board[b] == board[c]);
    });
}