// import needed libs
import Web3 from 'web3';

// ZERO_AMOUNT represents zero amount transferred on some calls.
const ZERO_AMOUNT = '0x0';

// MAINNET_CHAIN_ID is the chain id used by GTON Network blockchain.
const MAINNET_CHAIN_ID = '0x3e8';

// TESTNET_CHAIN_ID is the chain id used by GTON test net.
const TESTNET_CHAIN_ID = '0xc366';

/**
 * erc20IncreaseAllowanceTx creates a transaction for increasing Allowance by the given
 * amount for the ERC20 token and target contract/address.
 *
 * @param {string} erc20Address
 * @param {string} delegatedToAddress
 * @param {string|{BN}} addAmount
 * @return {{data: string, chainId: string, to: string, value: string}}
 */
function erc20IncreaseAllowanceTx(erc20Address, delegatedToAddress, addAmount) {
  // create web3.js instance
  const web3 = new Web3();

  // make the transaction
  return {
    to: erc20Address,
    value: ZERO_AMOUNT,
    data: web3.eth.abi.encodeFunctionCall(
      {
        constant: false,
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'addedValue',
            type: 'uint256',
          },
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      [delegatedToAddress, addAmount]
    ),
    chainId: MAINNET_CHAIN_ID,
  };
}

/**
 * @param {string} tokenAddress
 * @param {string} delegatedToAddress
 * @param {string|{BN}} addAmount
 * @return {{data: string, chainId: string, to, value: string}}
 */
function erc20ApproveTx(tokenAddress, delegatedToAddress, addAmount) {
  // create web3.js instance
  const web3 = new Web3();

  // make the transaction
  return {
    to: tokenAddress,
    value: ZERO_AMOUNT,
    data: web3.eth.abi.encodeFunctionCall(
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        payable: false,
        type: 'function',
      },
      [delegatedToAddress, addAmount]
    ),
    chainId: MAINNET_CHAIN_ID,
  };
}

// what we export here
export default {
  erc20IncreaseAllowanceTx,
  erc20ApproveTx,
  OPERA_CHAIN_ID: MAINNET_CHAIN_ID,
  TESTNET_CHAIN_ID,
};
