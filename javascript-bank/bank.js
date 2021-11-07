/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) {
    return null;
  }
  var newAccount = new Account(this.nextAccountNumber, holder);
  newAccount.deposit(balance);
  this.accounts.push(newAccount);
  this.nextAccountNumber += 1;
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  let account = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      account = this.accounts[i];
    }
  }
  return account;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
};
