function Judge (judgeInput,answer) {
  this.judgeInput = judgeInput;
  this.answer = answer;
}

Judge.prototype.getScore = function(){
  var score = 0;

  if(this.judgeInput === this.answer) {
    score += 5;
  }

  return score;
};
module.exports = Judge;
