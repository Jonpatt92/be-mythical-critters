class Fairy {
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

module.exports = Fairy;
