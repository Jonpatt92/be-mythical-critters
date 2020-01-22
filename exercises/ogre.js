class Ogre {
  constructor(name, home = 'Swamp') {
      this.name   = name;
      this.home   = home;
      this.swings = 0;
    }

  swingAt(human) {
    this.swings += 1;
    if (this.swings % 2 === 0 && this.swings > 0) {
      human.knockout();
    }
  }

  encounter(human) {
    human.encounter();
    if (human.noticesOgre() === true) {
      this.swingAt(human);
    }
  }

  apologize(human) {
    human.recover();
  }

}

module.exports = Ogre;
