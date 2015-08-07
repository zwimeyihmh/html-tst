$(function() {
  var fm = $("#fm")[0];
  var sname = $("#sname")[0];
  var sid = $("#sid")[0];
  var sclass = $("#sclass")[0];
  var fill1 = $("[name = 'fill_1']");
  var fill2 = $("[name = 'fill2']");
  var choice1 = $("[name = 'choice1']");
  var choice2 = $("[name = 'choice2']");
  var choice3 = $("[name = 'choice3']");
  var choice4 = $("[name = 'choice4']");
  var judge1 = $("[name = 'judge_1']");
  var judge2 = $("[name = 'judge_2']");
  var result = $("#score")[0];



  $("form").submit(function() {
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
      result.value = score + '分';
    }
    return false;
  });
});
