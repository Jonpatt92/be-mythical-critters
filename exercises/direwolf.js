class Direwolf {
  // Think of a constructor as being similar to initialize in Ruby
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
      this.name              = name;
      this.home              = home;
      this.size              = size;
      this.starksToProtect   = [];
      this.huntsWhiteWalkers = true;
    }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.protect();
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    var index = this.starksToProtect.indexOf(stark);
    if (index > -1) {
      this.starksToProtect.splice(index, 1);
      stark.unprotect();
      if (this.starksToProtect.length === 0) {
        this.huntsWhiteWalkers = true;
      }
    }
  }

}

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Direwolf;
