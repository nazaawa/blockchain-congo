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
