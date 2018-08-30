import Web3 from 'web3';

/*const HDWalletProvider = require('truffle-hdwallet-provider');

const provider  = new HDWalletProvider(
  'tooth wheel mushroom pottery number flight dismiss genius audit pony price all',
  'https://rinkeby.infura.io/v3/8eee6c40cf204f6abf74cc62585c4125'
);*/
const web3  = new Web3(window.web3.currentProvider);
export default web3;