function Fill(fillInput, answer) {
  this.fillInput = fillInput;
  this.answer = answer;
}

Fill.prototype.getScore = function() {

  var score = 0;

  if (this.fillInput.length === 1) {
    if(this.fillInput[0].value === this.answer) {
      score += 5;
    }

  } else {

    for (var i = 0; i < this.fillInput.length; i++) {
      var index1 = this.answer.indexOf(this.fillInput[i].value);

      if (index1 != -1) {
        this.answer.splice(index1, 1);
        score += 5;
      }

    }

  }

  return score;
};
