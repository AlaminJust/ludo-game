class LudoGame {
    players: Player[];       // Array of players participating in the game
    board: Board;            // Instance of the game board
    dice: Dice;              // Instance of the dice used in the game
    gameController: GameController;  // Instance of the game controller
  
    constructor(playerNames: string[]) {
      this.players = [];
      this.board = new Board();
      this.dice = new Dice();
      this.gameController = new GameController(this.players, this.board, this.dice);
  
      this.initializePlayers(playerNames);
    }
  
    // Method to initialize players based on provided names
    initializePlayers(playerNames: string[]) {
      for (let name of playerNames) {
        const player = new Player(name, "");
        this.players.push(player);
      }
    }
  
    // Method to start the game
    startGame() {
      this.gameController.startGame();
    }
  }
  