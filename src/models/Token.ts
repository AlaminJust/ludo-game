class Token {
    color: string;           // The color of the token
    position: number;        // The current position of the token on the game board
    isHome: boolean;         // Indicates whether the token is at its home position
    isFinished: boolean;     // Indicates whether the token has reached the finish position
  
    constructor(color: string) {
      this.color = color;
      this.position = -1;    // -1 represents that the token is not on the board yet
      this.isHome = true;
      this.isFinished = false;
    }
  
    // Method to move the token to a specific position on the game board
    move(position: number) {
      this.position = position;
      this.isHome = false;
      // Additional logic to check if the token has reached the finish position can be added here
    }
  
    // Method to reset the token to its home position
    reset() {
      this.position = -1;
      this.isHome = true;
      this.isFinished = false;
    }
  
    // Additional methods and functionality specific to the Token class can be added here
  }
  