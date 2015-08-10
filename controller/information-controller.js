function Information(sname, sid, grade) {
  this.name = sname;
  this.sid = sid;
  this.grade = grade;
}

Information.prototype.verify = function() {
  if (this.sid === '') {
    alert('请输入学号');
    return 0;
  } else if (this.name === '') {
    alert('请输入姓名');
    return 0;
  } else if (this.grade === '') {
    alert('请输入班级');
    return 0;
  }

  return 1;
};
module.exports = Information;
