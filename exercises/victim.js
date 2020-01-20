class Victim {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name) {
      this.name   = name;
      this.alive = true;
    }

  eaten(){
    if(this.alive === true){
      this.alive = false;
      }
    }
  }

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Victim;
