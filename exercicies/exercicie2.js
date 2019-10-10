"use strict";
var bankAccount = {
    balance: 1,
    deposit: function (value) {
        this.balance += value;
    }
};
var accountHolder = {
    name: 'Ana Silva',
    bankAccount: bankAccount,
    contacts: ['34567890', '98765432']
};
accountHolder.bankAccount.deposit(3000);
console.log(accountHolder);
