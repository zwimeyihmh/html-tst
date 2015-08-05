function Information(sname, sid, grade) {
  this.name = sname;
  this.sid = sid;
  this.grade = grade;
}

Information.prototype.verify = function() {

  if (this.sid.value === '') {
    alert('请输入学号');
    return 0;
  } else if (this.name.value === '') {
    alert('请输入姓名');
    return 0;
  } else if (this.grade.value === '') {
    alert('请输入班级');
    return 0;
  }

  return 1;
};
