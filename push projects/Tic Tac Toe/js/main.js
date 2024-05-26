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
      this.score = new Score(this.players, this);
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
          this.score.incrementScore(currentPlayer);
          this.updateScoreUI();
          alert(`${currentPlayer.name} wins!`);
          this.promptPlayAgain();
        } else if (this.checkDraw()) {
          alert('It\'s a draw!');
          this.promptPlayAgain();
        } else {
          this.switchPlayer();
        }
      }
    }
  
    switchPlayer() {
      this.currentPlayerIndex = 1 - this.currentPlayerIndex;
      document.querySelector('#turn').textContent = `Player ${this.currentPlayerIndex+1}'s turn`
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
        // when we update the Score for user to see, we also save it in localstorage
      this.score.saveScore()
    }

    promptPlayAgain() {
      if (window.confirm("Do you want to play again?")) {
          this.board.resetBoard();
      }
  }
  }

//Board: This class will handle the game board, updating the UI, and managing the board state.

class Board {
  constructor() {
    const storedBoard = localStorage.getItem('board');
      if (localStorage.getItem('board')) {
          this.board = JSON.parse(storedBoard);
          this.renderBoard();
      } else {
          this.board = Array(9).fill(null);
      }
  }

  resetBoard() {
      this.board = Array(9).fill(null); // Reset the board
      this.renderBoard();
      this.saveBoard();
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
          this.saveBoard();
          return true;
      }
      return false;
  }

  saveBoard() {
      localStorage.setItem('board', JSON.stringify(this.board));
  }

  /*loadBoard() {
      const storedBoard = localStorage.getItem('board');
      if (storedBoard) {
          this.board = JSON.parse(storedBoard);
          this.renderBoard();
      } else {
          this.board = Array(9).fill(null);
      }
  }*/
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
  constructor(players, game) {
      this.game = game; // <-- Added reference to the Game instance
      if (JSON.parse(localStorage.getItem('score'))) {
          this.playerScores = JSON.parse(localStorage.getItem('score'));
      } else {
          this.playerScores = {};
          players.forEach(player => {
              this.playerScores[player.name] = 0;
          });
      }
      this.bindClearScoreButton();
  }

  incrementScore(player) {
      this.playerScores[player.name]++;
      this.saveScore();
  }

  clearScoreboard() {
      for (let player in this.playerScores) {
          this.playerScores[player] = 0;
      }
      this.saveScore();
      this.game.updateScoreUI(); // <-- Call updateScoreUI from Game instance
  }

  bindClearScoreButton() {
      const clearButton = document.querySelector('#clearScoreboard');
      if (clearButton) {
          clearButton.addEventListener('click', () => {
              this.clearScoreboard();
          });
      }
  }

  getScore() {
      return this.playerScores;
  }

  saveScore() {
      localStorage.setItem('score', JSON.stringify(this.playerScores));
  }
}


document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.startGame();
    score = new Score([
      new Player('Player 1', 'X'),
      new Player('Player 2', 'O')
    ])
  });
  
