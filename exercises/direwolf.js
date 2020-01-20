class Direwolf {
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

module.exports = Direwolf;
