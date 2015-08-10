var Information = require('./information-controller.js');
var Fill = require('./fill-controller.js');
var ChoseSingle = require('./single-controller.js');
var ChoseMutlity = require('./mutlity-controller.js');
var Judge = require('./judge-controller.js');
function MainController() {}

MainController.prototype.getInfo = function(req, res) {
  console.log(req.body);
  var sname = req.body.sname;
  var sid = req.body.sid;
  var sclass = req.body.sclass;
  var fill1 = req.body.fill_1;
  var fill2 = req.body.fill2;
  var choice1 = req.body.choice1;
  var choice2 = req.body.choice2;
  var choice3 = req.body.choice3;
  var choice4 = req.body.choice4;
  var judge1 = req.body.judge_1;
  var judge2 = req.body.judge_2;
  var result = req.body.score;
  var score = 0;
  // this.confirmation(sname, sid, sclass);
  score += this.fillBlack(fill1,fill2,score);
  score += this.singleChose(choice1,choice2,score);
  score += this.mutlityChose(choice3,choice4,score);
  score += this.judger(judge1,judge2,score);
  console.log("s"+score);
  return score;
};
MainController.prototype.confirmation = function(sname, sid, sclass) {
  var information = new Information(sname, sid, sclass);
  var verifed = information.verify();
};

MainController.prototype.fillBlack = function(fill1,fill2) {
  var score = 0;
  var fill_1 = new Fill(fill1,'统一建模语言');
  score += fill_1.getScore();
  var fill_2 = new Fill(fill2, ['封装性', '继承性', '多态性']);
  score += fill_2.getScore();
  console.log('a'+score);

  return score;
};

MainController.prototype.singleChose = function(choice1,choice2) {
  var score = 0;
  var choiceSingle_1 = new ChoseSingle(choice1, 'B');
  score += choiceSingle_1.getScore();
  var choiceSingle_2 = new ChoseSingle(choice2, 'A');
  score += choiceSingle_2.getScore();
   console.log('b'+score);
  return score;
};

MainController.prototype.mutlityChose = function(choice3,choice4) {
  var score = 0;
  var choiceMutlity_1 = new ChoseMutlity(choice3, ['A', 'B', 'D']);
  score += choiceMutlity_1.getScore();

  var choiceMutlity_2 = new ChoseMutlity(choice4, ['A', 'B', 'C']);
  score += choiceMutlity_2.getScore();
  console.log('c'+score);

  return score;
};

MainController.prototype.judger = function(judge1,judge2) {
  var score = 0;
  var judge_1 = new Judge(judge1, '错误');
  score += judge_1.getScore();
  var judge_2 = new Judge(judge2, '正确');
  score += judge_2.getScore();
  console.log('d'+score);

  return score;
};

module.exports = MainController;
