//Game: This class will manage the overall game logic, including the game state, checking for wins, 
//and resetting the game.

//Board: This class will handle the game board, updating the UI, and managing the board state.

//Player: This class will represent a player, keeping track of their symbol (X or O).

//score: Keeping tack of score if the game is played more than once.

//Game: This class will manage the overall game logic, including the game state, checking for wins, 
//and resetting the game.

class Game {
    constructor() {
      this.players = [
        new Player('Player 1', 'X'),
        new Player('Player 2', 'O')
      ];
      this.currentPlayerIndex = 0;
      this.board = new Board();
      this.score = new Score(this.players);
    }
  
    startGame() {
      this.board.resetBoard();
      this.currentPlayerIndex = 0;
      this.updateScoreUI();
      this.bindEvents();
    }
  
    bindEvents() {
      const squares = document.querySelectorAll('.square');
      squares.forEach((square, index) => {
        square.addEventListener('click', () => this.handleMove(index));
      });
    }
  
    handleMove(position) {
      const currentPlayer = this.players[this.currentPlayerIndex];
      // set the symbol
      if (this.board.makeMove(position, currentPlayer.symbol)) {
        if (this.checkWin()) {
          alert(`${currentPlayer.name} wins!`);
          this.score.incrementScore(currentPlayer);
          this.updateScoreUI();
          this.board.resetBoard();
        } else if (this.checkDraw()) {
          alert('It\'s a draw!');
          this.board.resetBoard();
        } else {
          this.switchPlayer();
        }
      }
    }
  
    switchPlayer() {
      this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }
  
    checkWin() {
        const winPatterns = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6]            // Diagonals
        ];
      
        const board = this.board.board;
        
        // Iterate over each win pattern
        for (const pattern of winPatterns) {
          const [a, b, c] = pattern;
          // Check if all three positions have the same non-null symbol
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true; // If a winning combination is found, return true
          }
        }
        
        return false; // If no winning combination is found, return false
      }
  
    checkDraw() {
      return this.board.board.every(cell => cell !== null);
    }
  
    updateScoreUI() {
      const score = this.score.getScore();
      document.getElementById('scorep1').textContent = 
        `${this.players[0].name}: ${score[this.players[0].name]}`
      document.getElementById('scorep2').textContent = 
        `${this.players[1].name}: ${score[this.players[1].name]}`
    }
  }

//Board: This class will handle the game board, updating the UI, and managing the board state.

class Board{
    constructor(){
        this.board = Array(9).fill(null) // Make an array that represent each square in the grid
    }
    resetBoard() {
        if (window.confirm("Do you want to play again?")) {
            this.board = Array(9).fill(null); // Reset the board
          } 
        
      }
    
    renderBoard() {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square, index) => {
          square.textContent = this.board[index];
        });
      }
    makeMove(position, symbol) {
        if (this.board[position] === null) {
          this.board[position] = symbol;
          this.renderBoard();
          console.log(this.board)
          return true;
        }
        return false;
}
}

//Player: This class will represent a player, keeping track of their symbol (X or O).

class Player{
    constructor(name, symbol){
        this.name = name
        this.symbol = symbol
    }
}

//score: Keeping tack of score if the game is played more than once.

class Score {
    constructor(players) {
      this.playerScores = {};
      players.forEach(player => {
        this.playerScores[player.name] = 0;
      });
    }
  
    incrementScore(player) {
      this.playerScores[player.name]++;
    }
  
    resetScores() {
      for (let player in this.playerScores) {
        this.playerScores[player] = 0;
      }
    }
  
    getScore() {
      return this.playerScores;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.startGame();
  });
  
