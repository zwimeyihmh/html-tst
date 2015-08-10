function ChoseMutlity(choiceMutlity, answer) {

  this.choiceMutlity = choiceMutlity;
  this.answer = answer;

}
ChoseMutlity.prototype.getScore = function() {
    var score = 0;
    if (this.choiceMutlity) {
      var temp = 0;
      for (i = 0; i < this.choiceMutlity.length; i++) {
        var index = this.answer.indexOf(this.choiceMutlity[i]);
        if (index !== -1) {
          temp++;
        } else {
          temp = 0;
          break;
        }
      }
      if (temp === this.answer.length) {
        score += 10;
      } else if (temp !== 0) {
        score += 5;
      }
    }

  return score;

};
module.exports = ChoseMutlity;
