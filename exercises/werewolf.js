class Werewolf {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name, location) {
      this.name     = name;
      this.location = location;
      this.human    = true;
      this.wolf     = false;
      this.hungry   = false;
    }

  change(){
    if(this.human === true && this.wolf === false){
      this.human  = false;
      this.wolf   = true;
      this.hungry = true;
    } else if(this.human === false && this.wolf === true){
        this.human = true;
        this.wolf  = false;
        this.hungry = false;
    }
  }

  eat(victim){
    if(this.wolf === true && victim.alive === true){
      victim.eaten();
      this.change();
      return 'YUM!'
    } else if(this.hungry === false){
      return 'I cannot eat because I am not hungry.';
    }
  }
}

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Werewolf;
