class Fairy {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name) {
      this.name          = name;
      this.dust          = 10;
      this.clothes       = {dresses: ['Iris']};
      this.disposition   = 'Good natured';
      this.humanWards    = [];
      this.stolenInfants = 0;
    }

  replaceInfant(infant){
    if (this.disposition === 'Vengeful') {
      infant['disposition'] = 'Malicious';
      this.humanWards.push(infant);
      this.stolenInfants += 1;
      if (this.stolenInfants >= 3) {
        this.disposition = 'Good natured';
      }
    } else {
      return infant;
    }
  }

  provoke(){
    this.disposition = 'Vengeful';
  }

  makeDresses(dresses){
    dresses.forEach(dress => this.clothes['dresses'].push(dress));
  }

  believe(){
    this.dust += 10;
  }

  receiveBelief(){
    this.dust += 1;
  }
}

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Fairy;
