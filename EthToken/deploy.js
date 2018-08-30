const HDWalletProvider = require('truffle-hdwallet-provider');

const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider  = new HDWalletProvider(
  'tooth wheel mushroom pottery number flight dismiss genius audit pony price all',
  'https://rinkeby.infura.io/v3/8eee6c40cf204f6abf74cc62585c4125'
);
const web3  = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]); // address of the deployer

  const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({ data: '0x' + bytecode,arguments:['100', 'BCCoint','2','BCC','1']})
.send({ gas: '500000', from: accounts[0]});
  console.log('Contract deployed to', result.options.address); //address of the deployed contract
};
deploy();
