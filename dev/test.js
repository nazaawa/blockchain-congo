const Blockchain =  require("./blockchain")
const bitcoin =  new Blockchain();
bitcoin.createNewBloc(234,"erer","ererre")
bitcoin.createNewTransactions(214,"johny","alex")
bitcoin.createNewBloc(234,"erdffer","erzererre")
bitcoin.createNewTransactions(214,"johny","alex")
bitcoin.createNewBloc(234,"erdffer","erzererre")

console.log(bitcoin.chain[1])