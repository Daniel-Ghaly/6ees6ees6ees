class ForagerBee extends Bee {
  // TODO..

  constructor(age, job, color) {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage() {
    this.treasureChest.push('treasure');
  }

}
