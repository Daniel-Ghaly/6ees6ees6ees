class HoneyMakerBee extends Bee {
  // TODO..

  constructor(age, job, honeyPot) {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot += 1;
  }
  giveHoney() {
    this.honeyPot -= 1;
  }
}
