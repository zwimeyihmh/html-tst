function Judge (judgeInput,answer) {
  this.judgeInput = judgeInput;
  this.answer = answer;
}

Judge.prototype.getScore = function(){
  var score = 0;

  for(var i = 0; i < this.judgeInput.length; i++) {
    if(this.judgeInput[i].checked && this.judgeInput[i].value === this.answer){
      score += 5;
      break;
    }
  }
  
  return score;
};
