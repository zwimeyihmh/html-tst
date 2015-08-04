window.onload = function() {
  var fm = document.getElementById('fm');
  var sname = document.getElementById('sname');
  var sid = document.getElementById('sid');
  var sclass = document.getElementById('sclass');
  var answer1 = document.getElementById('answer1');
  var fill2 = document.getElementsByName('fill2');
  var choice1 = document.getElementsByName('choice1');
  var choice2 = document.getElementsByName('choice2');
  var choice3 = document.getElementsByName('choice3');
  var choice4 = document.getElementsByName('choice4');
  var chose4A = document.getElementById('chose4A');
  var chose4B = document.getElementById('chose4B');
  var chose4C = document.getElementById('chose4C');
  var judge2 = document.getElementById('judge2');
  var judge3 = document.getElementById('judge3');
  var result = document.getElementById('score');
  fm.onsubmit = function() {
    var score = 0;
    if (sid.value === '') {
      alert('请输入学号');
    } else if (sname.value === '') {
      alert('请输入姓名');
    } else if (sclass.value === '') {
      alert('请输入班级');
    } else {
    if (answer1.value === '统一建模语言') {
      score += 5;
    }
    var fill = ['封装性', '继承性', '多态性'];
    var index;
    for (var i = 0; i < fill2.length; i++) {
      var index1 = fill.indexOf(fill2[i].value);
      if (index1 != -1) {
        fill.splice(index1, 1);
        score += 5;
      }
    }

    for (var x = 0; x < choice1.length; x++) {
      if (choice1[x].checked) {
        if (choice1[x].value === 'B') {
          score += 5;
          break;
        }
      }
    }
    for (var y = 0; y < choice2.length; y++) {
      if (choice2[y].checked) {
        if (choice2[y].value === 'C') {
          score += 5;
          break;
        }
      }
    }

    var choice11 = ['A', 'B', 'D'];
    var temp = 0;
    for( i = 0; i < choice3.length;i++){
      if(choice3[i].checked){
        index = choice11.indexOf(choice3[i].value);
        if(index !== -1){
          temp++;
        }else {
          temp = 0;
          break;
        }
      }
    }
    if(temp === choice11.length){
      score +=10;
    }else if(temp !==0) {
      score += 5;
    }
    choice11 = ['A', 'B', 'C'];
    temp = 0;
    for( i = 0; i < choice4.length;i++){
      if(choice4[i].checked){
        index = choice11.indexOf(choice4[i].value);
        if(index !== -1){
          temp++;
        }else {
          temp = 0;
          break;
        }
      }
    }
    if(temp === choice11.length){
      score +=10;
    }else if(temp !==0) {
      score += 5;
    }


    if (judge2.checked) {
      score += 3;
    }
    if (judge3.checked) {
      score += 3;
    }

    alert(score);
    result.value = score;
       }
    return false;
  };
};
