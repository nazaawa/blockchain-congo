function Blockchain (){
    this.chain = [];
    this.pendingTransactions = [];

}

Blockchain.prototype.createNewBloc =  function (nounce, previousBlocHash , hash){
    const newBlock = {
        index :this.chain.length + 1,
        timestamp : Date.now(),
        transaction : this.pendingTransactions,
        nounce : nounce ,
        hash : hash,
        previousBlocHash : previousBlocHash,
    }
    this.pendingTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.getlastBlock = function(){
    return this[this.chain.length - 1];
}

Blockchain.prototype.createNewTransactions = function(amount,sender ,recipient){
    const newTransaction = { amount : amount, sender : sender,recipient : recipient};
    this.pendingTransactions.push(newTransaction);

    return this.getlastBlock()['index'] + 1;
}


module.exports = Blockchain;