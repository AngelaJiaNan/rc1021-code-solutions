/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var transaction = new Transaction('deposit');
  for (var i = 0; i < transaction.length; i++) {

 }
  // loop thru transactions adding together all deposits
  // loop thru transactions adding together all withdrawls
  // then return deposits - withdrawls
  var balance = this.deposit - this.withdraw + this.transaction;
  return balance;
};
