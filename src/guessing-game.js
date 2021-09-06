class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.low = min;
    this.great = max;
  }

  guess() {
    this.trying = Math.round((this.great + this.low) / 2);
    return this.trying;
  }

  lower() {
    this.great = this.trying;
  }

  greater() {
    this.low = this.trying;
  }
}

module.exports = GuessingGame;
