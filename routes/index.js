var express = require('express');
var MainController = require('../controller/main-controller.js');
var router = express.Router();
var mainController = new MainController();

router.get('/', function(req, res, next) {
  res.render('index',{scorea:'',
  classa:'',
  ida:'',
  namea:'',
  fills:[{order:1,black:'.UML的中文全称是：',count:1},{order:2,black:'.对象最突出的特征是：',count:3}],
  singleChoices:[{order:1,problem:'UML与软件工程的关系是：',choice:['（A）UML就是软件工程','（B）UML参与到软件工程中软件开发过程的几个阶段','（C）UML与软件工程无关','（D）UML是软件工程的一部分']},
  {order:2,problem:'Java语言支持：',choice:['（A）单继承','（B）多继承','（C）单继承和多继承支持','（D）单继承和多继承都不支持']}],
  fill1:'',

  }
);

});
router.post('/aaa',function(req,res){
  var score = mainController.getInfo(req,res);
   var body = req.body;
  //  mainController.
  res.render('index',{scorea:score,
    classa:body.sclass,
    ida:body.sid,
    namea:body.sname,
    fill1:body.fill_1
  });
});

module.exports = router;
