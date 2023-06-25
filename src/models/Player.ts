class Player {
    name: string;             // The name of the player
    score: number;            // The current score of the player
    tokens: Token[];          // An array of tokens owned by the player
    isActive: boolean;        // Indicates whether the player is currently active or not
    icon: string;

    constructor(name: string, icon: string) {
      this.name = name;
      this.score = 0;
      this.tokens = [];
      this.isActive = false;
      this.icon = icon;
    }
  
    // Additional methods and functionality specific to the Player class can be added here
  }
  