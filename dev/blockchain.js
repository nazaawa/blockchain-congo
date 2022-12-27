const sha256 = requrie("sha256")

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
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransactions = function(amount,sender ,recipient){
    const newTransaction = { amount : amount, sender : sender,recipient : recipient};
    this.pendingTransactions.push(newTransaction);

    return this.getlastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlocHash, currentBlockData , nounces) {
    const dataAsString = previousBlocHash +  nounces.toString() +  JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString)
    return hash;
}


module.exports = Blockchain;