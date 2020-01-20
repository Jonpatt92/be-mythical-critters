class Person {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name) {
      this.name   = name;
      this.stoned = false;
    }

  stone(){
    if(this.stoned === false){
      this.stoned = true
      }
    }

  unstone(){
    if(this.stoned === true){
      this.stoned = false
      }
    }
  }


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Person;
