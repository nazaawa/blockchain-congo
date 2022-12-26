function Blockchain (){
    this.chain = [];
    this.newTransactions = [];

}

Blockchain.prototype.createNewBloc =  function (nounce, previousBlocHash , hash){
    const newBlock = {
        index :this.chain.length + 1,
        timestamp : Date.now(),
        transaction : this.newTransactions,
        nounce : nounce ,
        hash : hash,
        previousBlocHash : previousBlocHash,
    }
    this.newTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.lastChainBlock = function(){
    return this[this.chain.length - 1];
}

Blockchain.prototype.createNewTransactions = function(amount,sender ,recipient){
    const newTransaction = { amount : amount, sender : sender,recipient : recipient};
    this.transactions.push(newTransaction);

    return newTransaction;
}


module.exports = Blockchain;