window.onload = function() {
  var fm = document.getElementById('fm');
  var sname = document.getElementById('sname');
  var sid = document.getElementById('sid');
  var sclass = document.getElementById('sclass');
  var fill1 = document.getElementsByName('fill_1');
  var fill2 = document.getElementsByName('fill2');
  var choice1 = document.getElementsByName('choice1');
  var choice2 = document.getElementsByName('choice2');
  var choice3 = document.getElementsByName('choice3');
  var choice4 = document.getElementsByName('choice4');
  var judge1 = document.getElementsByName('judge_1');
  var judge2 = document.getElementsByName('judge_2');

  var result = document.getElementById('score');

  fm.onsubmit = function() {
    var score = 0;

    var information = new Information(sname, sid, sclass);
    var verifed = information.verify();
    if (verifed === 1) {

      var fill_1 = new Fill(fill1, '统一建模语言');
      score += fill_1.getScore();
      var fill_2 = new Fill(fill2, ['封装性', '继承性', '多态性']);
      score += fill_2.getScore();

      var choiceSingle_1 = new ChoseSingle(choice1, 'B');
      score += choiceSingle_1.getScore();
      var choiceSingle_2 = new ChoseSingle(choice2, 'A');
      score += choiceSingle_2.getScore();

      var choiceMutlity_1 = new ChoseMutlity(choice3, ['A', 'B', 'D']);
      score += choiceMutlity_1.getScore();
      var choiceMutlity_2 = new ChoseMutlity(choice4, ['A', 'B', 'C']);
      score += choiceMutlity_2.getScore();

      var judge_1 = new Judge(judge1, '错误');
      score += judge_1.getScore();
      var judge_2 = new Judge(judge2, '正确');
      score += judge_2.getScore();

      alert(score);
      result.value = score;
    }
    return false;
  };
};
