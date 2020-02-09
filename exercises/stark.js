class Stark {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name, location = 'Winterfell') {
      this.name     = name;
      this.location = location;
      this.safe     = false;
    }

  protect(){
    this.safe = true;
  }

  unprotect(){
    this.safe = false;
  }

  houseWords(){
    if (this.safe === false) {
      return 'Winter is Coming';
    } else if(this.safe === true){
      return 'The North Remembers';
    }
  }
}

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Stark;
