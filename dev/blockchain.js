const sha256 = require("sha256")

function Blockchain (){
    this.chain = [];
    this.pendingTransactions = [];
    this.createNewBloc(100,"0","0");

}

Blockchain.prototype.createNewBloc =  function (nonce, previousBlocHash , hash){
    const newBlock = {
        index :this.chain.length + 1,
        timestamp : Date.now(),
        transaction : this.pendingTransactions,
        nonce : nonce ,
        hash : hash,
        previousBlocHash : previousBlocHash,
    }
    this.pendingTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransactions = function(amount,sender ,recipient){
    const newTransaction = { amount : amount, sender : sender,recipient : recipient};
    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlocHash, currentBlockData , nonces) {
    const dataAsString = previousBlocHash +  nonces.toString() +  JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString)
    return hash;
}

Blockchain.prototype.proofOfProof = function (previousBlocHash , currentBlockData) {
let nonce =  0;
let hash = this.hashBlock(previousBlocHash, currentBlockData,nonce)

while (hash.substring(0,4) !== '00000'){
    nonce++;
    hash = this.hashBlock(previousBlocHash, currentBlockData,nonce)
    console.log(hash)
}
    return nonce;
}

module.exports = Blockchain;