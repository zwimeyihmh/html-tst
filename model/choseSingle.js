function ChoseSingle(choiceSingle, answer) {

  this.choiceSingle = choiceSingle;
  this.answer = answer;

}

ChoseSingle.prototype.getScore = function() {
  var score = 0;

  for (var x = 0; x < this.choiceSingle.length; x++) {

    if (this.choiceSingle[x].checked) {

      if (this.choiceSingle[x].value === this.answer) {
        score += 5;
        break;

      }

    }
  }

  return score;
};
