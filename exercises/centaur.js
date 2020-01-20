class Centaur {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name, breed) {
      this.name       = name;
      this.breed      = breed;
      this.cranky     = false;
      this.standing   = true;
      this.layingDown = false;
      this.crankyness = 0;
  }

  layDown(){
    this.standing   = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing   = true;
    this.layingDown = false;
  }

  sleep(){
    if(this.standing === false && this.layingDown === true){
      this.crankyness = 0;
      this.cranky = false;
      return 'ZZZZ';
    } else{
      return 'NO!';
    }
  }

  drinkPotion(){
    if(this.standing === true && this.cranky === true){
      this.cranky     = false;
      this.crankyness = 0;
    } else if(this.standing === true && this.cranky === false){
      this.cranky     = true;
      this.crankyness = 0;
    } else{
      return "Not while I'm laying down!"
    }
  }

  shoot(){
    if(this.cranky === false && this.layingDown === false){
      this.addCrankyness();
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  }

  run(){
    if(this.layingDown === false){
      this.addCrankyness();
      return 'Clop clop clop clop!!!';
    } else{
      return 'NO!'
    }
  }

  addCrankyness(){
    this.crankyness += 1;
    this.validateCranky();
  }

  validateCranky(){
    if(this.crankyness >= 3){
      this.cranky = true;
    }
  }
}

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Centaur;
