function ChoseSingle(choiceSingle, answer) {

  this.choiceSingle = choiceSingle;
  this.answer = answer;

}

ChoseSingle.prototype.getScore = function() {
  var score = 0;

  // for (var x = 0; x < this.choiceSingle.length; x++) {
  //   if (this.choiceSingle[x].checked) {
  //     if (this.choiceSingle[x] === this.answer) {
  //       console.log(this.choiceSingle[x]);
  //       score += 5;
  //       break;
  //     }
  //   }
  // }
  if(this.choiceSingle === this.answer){
    score += 5;
  }

  return score;
};

module.exports = ChoseSingle;
