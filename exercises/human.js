class Human {
  constructor(name) {
      this.name             = name;
      this.encounterCounter = 0;
      this.knockedOut       = false;
    }

  knockout(){
    this.knockedOut = true;
  }

  recover(){
    this.knockedOut = false;
  }

  encounter() {
    this.encounterCounter += 1;
  }

  noticesOgre() {
    if (this.encounterCounter % 3 === 0 && this.encounterCounter > 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;
