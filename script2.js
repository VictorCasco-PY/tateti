let currentPlayer = "X";
let gameEnd = false;

const cells = document.querySelectorAll(".cells");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        gameEnd = true;
        alert(`${currentPlayer} es el ganador!`);
      } else if (checkTie()) {
        gameEnd = true;
        alert("Excelente juego, es un empate!");
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWin() {
  return winConditions.some((condition) => {
    return condition.every((index) => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkTie() {
  return Array.from(cells).every((cell) => {
    return cell.textContent !== "";
  });
}
