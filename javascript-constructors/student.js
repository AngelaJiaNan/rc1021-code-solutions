/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  var FullName = this.firstName + ' ' + this.lastName;
  return FullName;
};

Student.prototype.getIntroduction = function () {
  var introduction = 'Hello, my name is ' + this.getFullName() + ' ' + 'and I am studying ' + this.subject + '.';
  return introduction;
};
