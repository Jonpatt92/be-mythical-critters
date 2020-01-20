class Medusa {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name) {
      this.name = name;
      this.statues = [];
    }

  stare(victim){
    if(this.statues.length < 3){
      this.statues.push(victim);
      victim.stone();
      }
    if(this.statues.length >= 3){
      var unstoned_person = this.statues.shift();
      unstoned_person.unstone();
      this.statues.push(victim);
      victim.stone();
      }
    }
  }


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Medusa;
