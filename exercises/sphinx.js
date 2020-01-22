class Sphinx {
  constructor(name) {
      this.name        = name;
      this.riddles     = [];
      this.heroesEaten = 0;
    }

  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else if (this.riddles.length > 2) {
      this.riddles.shift();
      this.riddles.push(riddle)
    }
  }

  attemptAnswer(answer) {
    var solvedRiddles = 0

    this.riddles.forEach(function(riddle) {
      var correct_answer = riddle['answer'];
      if (correct_answer === answer) {
        var index = this.riddles.indexOf(riddle);
        this.riddles.splice(index, 1);
        solvedRiddles += 1
      }
    }, this);

    if (solvedRiddles === 0) {
      this.heroesEaten += 1
    } else if (this.riddles.length > 0) {
      return "That wasn't that hard, I bet you don't get the next one"
    } else if (this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
    }
  }
}

module.exports = Sphinx;
