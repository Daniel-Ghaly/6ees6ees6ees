class RetiredForagerBee extends ForagerBee {
  constructor(age, job, honeyPot) {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  giveHoney() {
    this.honeyPot -= 1;
  }
  gamble() {
    this.treasureChest.push('treasure');
  }
}
