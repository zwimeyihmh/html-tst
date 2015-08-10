var express = require('express');
var MainController = require('../controller/main-controller.js');
var router = express.Router();
var mainController = new MainController();

router.get('/', function(req, res, next) {
  res.render('index',{scorea:'',
  classa:'',
  ida:'',
  namea:'',
  fill1:''}
);

});
router.post('/aaa',function(req,res){
  var score = mainController.getInfo(req,res);
   var body = req.body;
  console.log(req.body.sname);
  res.render('index',{scorea:score,
    classa:body.sclass,
    ida:body.sid,
    namea:body.sname,
    fill1:body.fill_1
  });
});

module.exports = router;
