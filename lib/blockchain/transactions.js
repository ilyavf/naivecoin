const Transaction = require('./transaction');
const R = require('ramda');

class Transactions extends Array {
    // todo: add method toHex which will serialize JSON into a hex string.
    static fromJson(data) {
        let transactions = new Transactions();
        R.forEach((transaction) => { transactions.push(Transaction.fromJson(transaction)); }, data);
        return transactions;
    }
}

module.exports = Transactions;