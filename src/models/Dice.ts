class Dice {
    sides: number;    // The number of sides on the dice
  
    constructor(sides: number = 6) {
      this.sides = sides;
    }
  
    // Method to roll the dice and return a random value between 1 and the number of sides
    roll(): number {
      return Math.floor(Math.random() * this.sides) + 1;
    }
  
    // Additional methods and functionality specific to the Dice class can be added here
  }
  