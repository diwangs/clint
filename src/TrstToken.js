export {
  "contractName": "TrstToken",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "price",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "balance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "TokenTx",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "PriceChange",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "redeem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "setPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setVaultContractAddr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "setStakeContractAddr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
      "metadata": "{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_price\",\"type\":\"uint256\"}],\"name\":\"setPrice\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"price\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"setVaultContractAddr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"setStakeContractAddr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"redeem\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"balance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"TokenTx\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_price\",\"type\":\"uint256\"}],\"name\":\"PriceChange\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"Senapati Sang Diwangkara, from Affluent team\",\"methods\":{\"burn(address,uint256)\":{\"details\":\"Purge token into the void. Can only be called by root.\",\"params\":{\"_address\":\"Victim's address\",\"_value\":\"The amount to be burned\"}},\"mint(address,uint256)\":{\"details\":\"Create token out of thin air. Can only be called by root.\",\"params\":{\"_address\":\"Destination address\",\"_value\":\"The amount to be minted\"}},\"redeem(uint256)\":{\"details\":\"Redeem some token to ETH, will be sent to sender's address\",\"params\":{\"_value\":\"The amount to be redeemed\"}},\"setPrice(uint256)\":{\"details\":\"Set the Wei/mTrst price. Can only be called by root.\",\"params\":{\"_price\":\"The new price\"}},\"setStakeContractAddr(address)\":{\"details\":\"Set the stake contract's address. Can only be called once\",\"params\":{\"_address\":\"stake contract's address\"}},\"setVaultContractAddr(address)\":{\"details\":\"Set the vault contract's address. Can only be called once.\",\"params\":{\"_address\":\"vault contract's address\"}},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfer some tokens from an account to another. Can only be done by another Clint\\tcontract or root\",\"params\":{\"_from\":\"The address to transfer from\",\"_to\":\"The address to transfer to\",\"_value\":\"The amount to be transferred\"}},\"withdraw(uint256)\":{\"details\":\"Withdraw ETH from the contract into root's account. Can only be called by root\",\"params\":{\"_value\":\"Withdrawal amount\"}}},\"title\":\"The Trst Token Contract TrstToken is a contract for handling Trst transaction and redeeming logic. It also provides the means to monitor and manipulate the token's total supply and value in the system, that can only be done by an administrator account (root). Among the 3 contracts, this contract must be deployed first, because the vault and staking contract depended on it.\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/hafizhbudiman/Documents/Competitions/Finhacks/code/clint-dapp/contracts/TrstToken.sol\":\"TrstToken\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/hafizhbudiman/Documents/Competitions/Finhacks/code/clint-dapp/contracts/TrstToken.sol\":{\"keccak256\":\"0x451564f024f1d8fccd59b2ffa5ce3f3530966351f82f6f6aa339468d17e4cd38\",\"urls\":[\"bzzr://83ca6a56fd2e53f0e592fa86d0ca6abe41e26a1ba80ac14db58e4f271e2946c4\"]}},\"version\":1}",
        "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620186a0600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600560008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546003819055506103e8600481905550611011806101386000396000f3fe60806040526004361061009c5760003560e01c80639dc29fac116100645780639dc29fac14610215578063a035b1fe14610270578063aa3e6a831461029b578063bae88d5b146102ec578063db006a751461033d578063e3d670d7146103785761009c565b806318160ddd1461009e57806323b872dd146100c95780632e1a7d4d1461014457806340c10f191461017f57806391b7f5ed146101da575b005b3480156100aa57600080fd5b506100b36103dd565b6040518082815260200191505060405180910390f35b3480156100d557600080fd5b50610142600480360360608110156100ec57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103e3565b005b34801561015057600080fd5b5061017d6004803603602081101561016757600080fd5b810190808035906020019092919050505061059b565b005b34801561018b57600080fd5b506101d8600480360360408110156101a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106c8565b005b3480156101e657600080fd5b50610213600480360360208110156101fd57600080fd5b8101908080359060200190929190505050610851565b005b34801561022157600080fd5b5061026e6004803603604081101561023857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610954565b005b34801561027c57600080fd5b50610285610add565b6040518082815260200191505060405180910390f35b3480156102a757600080fd5b506102ea600480360360208110156102be57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ae3565b005b3480156102f857600080fd5b5061033b6004803603602081101561030f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610beb565b005b34801561034957600080fd5b506103766004803603602081101561036057600080fd5b8101908080359060200190929190505050610cf3565b005b34801561038457600080fd5b506103c76004803603602081101561039b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d6d565b6040518082815260200191505060405180910390f35b60035481565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061046a5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806104c25750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061051957506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61058b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b610596838383610d85565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461065d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106c4573d6000803e3d6000fd5b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461078a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550806003600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c836040518082815260200191505060405180910390a35050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610913576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b806004819055507ff347ee99503bf19c028bd6b18f3c676e82a9bb5b2bb5225aebe0fd62fd6a0d19816040518082815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a16576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600360008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c836040518082815260200191505060405180910390a35050565b60045481565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ba7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4164647265737320686173206265656e2073657400000000000000000000000081525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610caf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4164647265737320686173206265656e2073657400000000000000000000000081525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610d1f336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683610d85565b3373ffffffffffffffffffffffffffffffffffffffff166108fc60045483029081150290604051600060405180830381858888f19350505050158015610d69573d6000803e3d6000fd5b5050565b60056020528060005260406000206000915090505481565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610fc56021913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115610ec0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c836040518082815260200191505060405180910390a350505056fe44657374696e6174696f6e2061646472657373206d757374206e6f742062652030a165627a7a72305820f4f43d565e5bb1d963024b7f307da5bdb2b583009000849f187707c6326e2e710029",
          "deployedBytecode": "0x60806040526004361061009c5760003560e01c80639dc29fac116100645780639dc29fac14610215578063a035b1fe14610270578063aa3e6a831461029b578063bae88d5b146102ec578063db006a751461033d578063e3d670d7146103785761009c565b806318160ddd1461009e57806323b872dd146100c95780632e1a7d4d1461014457806340c10f191461017f57806391b7f5ed146101da575b005b3480156100aa57600080fd5b506100b36103dd565b6040518082815260200191505060405180910390f35b3480156100d557600080fd5b50610142600480360360608110156100ec57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103e3565b005b34801561015057600080fd5b5061017d6004803603602081101561016757600080fd5b810190808035906020019092919050505061059b565b005b34801561018b57600080fd5b506101d8600480360360408110156101a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106c8565b005b3480156101e657600080fd5b50610213600480360360208110156101fd57600080fd5b8101908080359060200190929190505050610851565b005b34801561022157600080fd5b5061026e6004803603604081101561023857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610954565b005b34801561027c57600080fd5b50610285610add565b6040518082815260200191505060405180910390f35b3480156102a757600080fd5b506102ea600480360360208110156102be57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ae3565b005b3480156102f857600080fd5b5061033b6004803603602081101561030f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610beb565b005b34801561034957600080fd5b506103766004803603602081101561036057600080fd5b8101908080359060200190929190505050610cf3565b005b34801561038457600080fd5b506103c76004803603602081101561039b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d6d565b6040518082815260200191505060405180910390f35b60035481565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061046a5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806104c25750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061051957506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61058b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b610596838383610d85565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461065d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106c4573d6000803e3d6000fd5b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461078a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550806003600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c836040518082815260200191505060405180910390a35050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610913576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b806004819055507ff347ee99503bf19c028bd6b18f3c676e82a9bb5b2bb5225aebe0fd62fd6a0d19816040518082815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a16576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f75277265206e6f7420617574686f72697a6564000000000000000000000081525060200191505060405180910390fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600360008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c836040518082815260200191505060405180910390a35050565b60045481565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ba7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4164647265737320686173206265656e2073657400000000000000000000000081525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610caf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f4164647265737320686173206265656e2073657400000000000000000000000081525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610d1f336000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683610d85565b3373ffffffffffffffffffffffffffffffffffffffff166108fc60045483029081150290604051600060405180830381858888f19350505050158015610d69573d6000803e3d6000fd5b5050565b60056020528060005260406000206000915090505481565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610fc56021913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115610ec0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c836040518082815260200191505060405180910390a350505056fe44657374696e6174696f6e2061646472657373206d757374206e6f742062652030a165627a7a72305820f4f43d565e5bb1d963024b7f307da5bdb2b583009000849f187707c6326e2e710029",
            "sourceMap": "481:4021:3:-;;;762:177;8:9:-1;5:2;;;30:1;27;20:12;5:2;762:177:3;794:10;787:4;;:17;;;;;;;;;;;;;;;;;;824:6;808:7;:13;816:4;;;;;;;;;;;808:13;;;;;;;;;;;;;;;:22;;;;878:7;:13;886:4;;;;;;;;;;;878:13;;;;;;;;;;;;;;;;864:11;:27;;;;904:4;896:5;:12;;;;481:4021;;;;;;",
              "deployedSourceMap": "481:4021:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;589:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;589:26:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1711:123;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1711:123:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1711:123:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3240:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3240:87:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3240:87:3;;;;;;;;;;;;;;;;;:::i;:::-;;2293:173;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2293:173:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2293:173:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2898:100;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2898:100:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2898:100:3;;;;;;;;;;;;;;;;;:::i;:::-;;2621:173;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2621:173:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2621:173:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;657:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;657:20:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3450:176;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3450:176:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3450:176:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;3751;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3751:176:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3751:176:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;1959:136;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1959:136:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1959:136:3;;;;;;;;;;;;;;;;;:::i;:::-;;697:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;697:43:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;697:43:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;589:26;;;;:::o;1711:123::-;1136:4;1114:27;;:10;:27;;;:65;;;;1162:17;;;;;;;;;;;1148:31;;:10;:31;;;1114:65;:103;;;;1200:17;;;;;;;;;;;1186:31;;:10;:31;;;1114:103;:128;;;;1238:4;;;;;;;;;;;1224:18;;:10;:18;;;1114:128;1106:165;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1797:33;1811:5;1818:3;1823:6;1797:13;:33::i;:::-;1711:123;;;:::o;3240:87::-;1021:4;;;;;;;;;;;1007:18;;:10;:18;;;999:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3299:4;;;;;;;;;;;:13;;:21;3313:6;3299:21;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3299:21:3;3240:87;:::o;2293:173::-;1021:4;;;;;;;;;;;1007:18;;:10;:18;;;999:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2384:6;2363:7;:17;2371:8;2363:17;;;;;;;;;;;;;;;;:27;;;;;;;;;;;2409:6;2394:11;;:21;;;;;;;;;;;2445:8;2425:37;;2441:1;2425:37;;;2455:6;2425:37;;;;;;;;;;;;;;;;;;2293:173;;:::o;2898:100::-;1021:4;;;;;;;;;;;1007:18;;:10;:18;;;999:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2959:6;2951:5;:14;;;;2975:19;2987:6;2975:19;;;;;;;;;;;;;;;;;;2898:100;:::o;2621:173::-;1021:4;;;;;;;;;;;1007:18;;:10;:18;;;999:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2712:6;2691:7;:17;2699:8;2691:17;;;;;;;;;;;;;;;;:27;;;;;;;;;;;2737:6;2722:11;;:21;;;;;;;;;;;2779:1;2753:37;;2761:8;2753:37;;;2783:6;2753:37;;;;;;;;;;;;;;;;;;2621:173;;:::o;657:20::-;;;;:::o;3450:176::-;3554:1;3525:31;;:17;;;;;;;;;;;:31;;;3517:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3611:8;3591:17;;:28;;;;;;;;;;;;;;;;;;3450:176;:::o;3751:::-;3855:1;3826:31;;:17;;;;;;;;;;;:31;;;3818:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3912:8;3892:17;;:28;;;;;;;;;;;;;;;;;;3751:176;:::o;1959:136::-;2004:39;2018:10;2030:4;;;;;;;;;;;2036:6;2004:13;:39::i;:::-;2053:10;:19;;:35;2082:5;;2073:6;:14;2053:35;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2053:35:3;1959:136;:::o;697:43::-;;;;;;;;;;;;;;;;;:::o;4184:316::-;4283:1;4268:17;;:3;:17;;;;4260:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4365:7;:14;4373:5;4365:14;;;;;;;;;;;;;;;;4355:6;:24;;4347:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4427:6;4409:7;:14;4417:5;4409:14;;;;;;;;;;;;;;;;:24;;;;;;;;;;;4453:6;4437:7;:12;4445:3;4437:12;;;;;;;;;;;;;;;;:22;;;;;;;;;;;4484:3;4469:27;;4477:5;4469:27;;;4489:6;4469:27;;;;;;;;;;;;;;;;;;4184:316;;;:::o",
                "source": "pragma solidity >=0.4.25 <0.6.0;\n\n/**\n@author Senapati Sang Diwangkara, from Affluent team\n\n@title The Trst Token Contract\n\nTrstToken is a contract for handling Trst transaction and redeeming logic. It also provides\nthe means to monitor and manipulate the token's total supply and value in the system, that\ncan only be done by an administrator account (root).\n\nAmong the 3 contracts, this contract must be deployed first, because the vault and staking\ncontract depended on it.\n\n*/\ncontract TrstToken {\n\taddress payable root;\n    address stakeContractAddr;\n    address vaultContractAddr;\n\n\tuint256 public totalSupply; // total amount of token in the system\n\tuint256 public price; // in Wei/mTrst\n\n\tmapping (address => uint256) public balance; // in milliTrst\n\n\n\n\tconstructor() public {\n\t\troot = msg.sender;\n\t\tbalance[root] = 100000; // hard-coded initial balance\n\t\ttotalSupply = balance[root];\n\n\t\tprice = 1000; // 1000 wei == 1 milliTrst\n\t}\n\n\n\n\t// *** Modifiers ***\n    modifier onlyRoot() {\n        require(msg.sender == root, \"You're not authorized\");\n        _;\n    }\n\n    modifier onlyClint() {\n        require(msg.sender == address(this) ||\n\t\t\tmsg.sender == vaultContractAddr ||\n\t\t\tmsg.sender == stakeContractAddr ||\n\t\t\tmsg.sender == root,\n\t\t\t\"You're not authorized\");\n        _;\n    }\n\n\n\n\t// *** Events ***\n\tevent TokenTx(address indexed _from, address indexed _to, uint _value);\n\tevent PriceChange(uint _price);\n\n\n\n    // *** Operation Methods ***\n    /**\n\t* @dev Transfer some tokens from an account to another. Can only be done by another Clint\n\t* \tcontract or root\n\t* @param _from The address to transfer from\n\t* @param _to The address to transfer to\n\t* @param _value The amount to be transferred\n\t*/\n\tfunction transferFrom(address _from, address _to, uint _value) external onlyClint {\n\t\t_transferFrom(_from, _to, _value);\n\t}\n\n\t/**\n\t* @dev Redeem some token to ETH, will be sent to sender's address\n\t* @param _value The amount to be redeemed\n\t*/\n    function redeem(uint256 _value) external {\n\t\t_transferFrom(msg.sender, root, _value);\n        msg.sender.transfer(_value * price);\n    }\n\n\n\n    // *** Administrative Methods ***\n\t/**\n\t* @dev Create token out of thin air. Can only be called by root.\n\t* @param _address Destination address\n\t* @param _value The amount to be minted\n\t*/\n\tfunction mint(address _address, uint256 _value) external onlyRoot {\n\t\tbalance[_address] += _value;\n\t\ttotalSupply += _value;\n\n\t\temit TokenTx(address(0), _address, _value);\n\t}\n\n\t/**\n\t* @dev Purge token into the void. Can only be called by root.\n\t* @param _address Victim's address\n\t* @param _value The amount to be burned\n\t*/\n    function burn(address _address, uint256 _value) external onlyRoot {\n\t\tbalance[_address] -= _value;\n\t\ttotalSupply -= _value;\n\n\t\temit TokenTx(_address, address(0), _value);\n\t}\n\n\t/**\n\t* @dev Set the Wei/mTrst price. Can only be called by root.\n\t* @param _price The new price\n\t*/\n\tfunction setPrice(uint _price) external onlyRoot {\n\t\tprice = _price;\n\n\t\temit PriceChange(_price);\n\t}\n\n\t/**\n\t* @dev Fallback function. Used to deposit ETH to the contract\n\t*/\n\tfunction() external payable {}\n\n\t/**\n\t* @dev Withdraw ETH from the contract into root's account. Can only be called by root\n\t* @param _value Withdrawal amount\n\t*/\n    function withdraw(uint _value) external onlyRoot {\n        root.transfer(_value);\n    }\n\n\t/**\n\t* @dev Set the vault contract's address. Can only be called once.\n\t* @param _address vault contract's address\n\t*/\n\tfunction setVaultContractAddr(address _address) external {\n        require(vaultContractAddr == address(0), \"Address has been set\");\n        vaultContractAddr = _address;\n    }\n\n\t/**\n\t* @dev Set the stake contract's address. Can only be called once\n\t* @param _address stake contract's address\n\t*/\n    function setStakeContractAddr(address _address) external {\n        require(stakeContractAddr == address(0), \"Address has been set\");\n        stakeContractAddr = _address;\n    }\n\n\n\n\t// *** Internal Methods ***\n    /**\n\t* @dev Internal method for transfering some tokens from an account to another\n\t* @param _from The address to transfer from\n\t* @param _to The address to transfer to\n\t* @param _value The amount to be transferred\n\t*/\n\tfunction _transferFrom(address _from, address _to, uint _value) private {\n\t\trequire(_to != address(0), \"Destination address must not be 0\"); // Prevent burning?\n\t\trequire(_value <= balance[_from], \"Insufficient balance\");\n\n\t\tbalance[_from] -= _value;\n\t\tbalance[_to] += _value;\n\n\t\temit TokenTx(_from, _to, _value);\n\t}\n}",
                  "sourcePath": "/Users/hafizhbudiman/Documents/Competitions/Finhacks/code/clint-dapp/contracts/TrstToken.sol",
                    "ast": {
    "absolutePath": "/Users/hafizhbudiman/Documents/Competitions/Finhacks/code/clint-dapp/contracts/TrstToken.sol",
      "exportedSymbols": {
      "TrstToken": [
        1139
      ]
    },
    "id": 1140,
      "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 831,
            "literals": [
              "solidity",
              ">=",
              "0.4",
              ".25",
              "<",
              "0.6",
              ".0"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:32:3"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": "@author Senapati Sang Diwangkara, from Affluent team\n@title The Trst Token Contract\nTrstToken is a contract for handling Trst transaction and redeeming logic. It also provides\nthe means to monitor and manipulate the token's total supply and value in the system, that\ncan only be done by an administrator account (root).\nAmong the 3 contracts, this contract must be deployed first, because the vault and staking\ncontract depended on it.",
            "fullyImplemented": true,
            "id": 1139,
            "linearizedBaseContracts": [
              1139
            ],
            "name": "TrstToken",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 833,
                "name": "root",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "503:20:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 832,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "503:15:3",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 835,
                "name": "stakeContractAddr",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "529:25:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 834,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "529:7:3",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 837,
                "name": "vaultContractAddr",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "560:25:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 836,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "560:7:3",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 839,
                "name": "totalSupply",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "589:26:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 838,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "589:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 841,
                "name": "price",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "657:20:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 840,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "657:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 845,
                "name": "balance",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "697:43:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 844,
                  "keyType": {
                    "id": 842,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "706:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "697:28:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "717:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 869,
                  "nodeType": "Block",
                  "src": "783:156:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 848,
                          "name": "root",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 833,
                          "src": "787:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 849,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1619,
                            "src": "794:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "794:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "787:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 852,
                      "nodeType": "ExpressionStatement",
                      "src": "787:17:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 857,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 853,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "808:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 855,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 854,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "816:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "808:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "313030303030",
                          "id": 856,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "824:6:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000_by_1",
                            "typeString": "int_const 100000"
                          },
                          "value": "100000"
                        },
                        "src": "808:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 858,
                      "nodeType": "ExpressionStatement",
                      "src": "808:22:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 863,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 859,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "864:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 860,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "878:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 862,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 861,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "886:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "878:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "864:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 864,
                      "nodeType": "ExpressionStatement",
                      "src": "864:27:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 867,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 865,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "896:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "31303030",
                          "id": 866,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "904:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000_by_1",
                            "typeString": "int_const 1000"
                          },
                          "value": "1000"
                        },
                        "src": "896:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 868,
                      "nodeType": "ExpressionStatement",
                      "src": "896:12:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 870,
                "implemented": true,
                "kind": "constructor",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 846,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "773:2:3"
                },
                "returnParameters": {
                  "id": 847,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "783:0:3"
                },
                "scope": 1139,
                "src": "762:177:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 881,
                  "nodeType": "Block",
                  "src": "989:80:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            "id": 876,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 873,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1619,
                                "src": "1007:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 874,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1007:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 875,
                              "name": "root",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 833,
                              "src": "1021:4:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1007:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "596f75277265206e6f7420617574686f72697a6564",
                            "id": 877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1027:23:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            },
                            "value": "You're not authorized"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            }
                          ],
                          "id": 872,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "999:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "999:52:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 879,
                      "nodeType": "ExpressionStatement",
                      "src": "999:52:3"
                    },
                    {
                      "id": 880,
                      "nodeType": "PlaceholderStatement",
                      "src": "1061:1:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 882,
                "name": "onlyRoot",
                "nodeType": "ModifierDefinition",
                "parameters": {
                  "id": 871,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "986:2:3"
                },
                "src": "969:100:3",
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 910,
                  "nodeType": "Block",
                  "src": "1096:193:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 905,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 895,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  "id": 890,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 885,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1619,
                                      "src": "1114:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 886,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1114:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 888,
                                        "name": "this",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1637,
                                        "src": "1136:4:3",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_TrstToken_$1139",
                                          "typeString": "contract TrstToken"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_TrstToken_$1139",
                                          "typeString": "contract TrstToken"
                                        }
                                      ],
                                      "id": 887,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "1128:7:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": "address"
                                    },
                                    "id": 889,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1128:13:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "src": "1114:27:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "||",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "id": 894,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 891,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1619,
                                      "src": "1148:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 892,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1148:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 893,
                                    "name": "vaultContractAddr",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 837,
                                    "src": "1162:17:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "1148:31:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "1114:65:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "||",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 899,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 896,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1619,
                                    "src": "1186:3:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 897,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1186:10:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 898,
                                  "name": "stakeContractAddr",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 835,
                                  "src": "1200:17:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "1186:31:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "1114:103:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              "id": 904,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 901,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1619,
                                  "src": "1224:3:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 902,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1224:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 903,
                                "name": "root",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 833,
                                "src": "1238:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "src": "1224:18:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "1114:128:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "596f75277265206e6f7420617574686f72697a6564",
                            "id": 906,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1247:23:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            },
                            "value": "You're not authorized"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            }
                          ],
                          "id": 884,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "1106:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1106:165:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 908,
                      "nodeType": "ExpressionStatement",
                      "src": "1106:165:3"
                    },
                    {
                      "id": 909,
                      "nodeType": "PlaceholderStatement",
                      "src": "1281:1:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 911,
                "name": "onlyClint",
                "nodeType": "ModifierDefinition",
                "parameters": {
                  "id": 883,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1093:2:3"
                },
                "src": "1075:214:3",
                "visibility": "internal"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 919,
                "name": "TokenTx",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 918,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 913,
                      "indexed": true,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 919,
                      "src": "1327:21:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 912,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1327:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 915,
                      "indexed": true,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 919,
                      "src": "1350:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 914,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1350:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 917,
                      "indexed": false,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 919,
                      "src": "1371:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 916,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1371:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1326:57:3"
                },
                "src": "1313:71:3"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 923,
                "name": "PriceChange",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 922,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 921,
                      "indexed": false,
                      "name": "_price",
                      "nodeType": "VariableDeclaration",
                      "scope": 923,
                      "src": "1404:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 920,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1404:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1403:13:3"
                },
                "src": "1386:31:3"
              },
              {
                "body": {
                  "id": 940,
                  "nodeType": "Block",
                  "src": "1793:41:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 935,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 925,
                            "src": "1811:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 936,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 927,
                            "src": "1818:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 937,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 929,
                            "src": "1823:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 934,
                          "name": "_transferFrom",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1138,
                          "src": "1797:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1797:33:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 939,
                      "nodeType": "ExpressionStatement",
                      "src": "1797:33:3"
                    }
                  ]
                },
                "documentation": "@dev Transfer some tokens from an account to another. Can only be done by another Clint\n\tcontract or root\n@param _from The address to transfer from\n@param _to The address to transfer to\n@param _value The amount to be transferred",
                "id": 941,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 932,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 931,
                      "name": "onlyClint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 911,
                      "src": "1783:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1783:9:3"
                  }
                ],
                "name": "transferFrom",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 930,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 925,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 941,
                      "src": "1733:13:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 924,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1733:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 927,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 941,
                      "src": "1748:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 926,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1748:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 929,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 941,
                      "src": "1761:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 928,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1761:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1732:41:3"
                },
                "returnParameters": {
                  "id": 933,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1793:0:3"
                },
                "scope": 1139,
                "src": "1711:123:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 963,
                  "nodeType": "Block",
                  "src": "2000:95:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 947,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1619,
                              "src": "2018:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2018:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 949,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "2030:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 950,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 943,
                            "src": "2036:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 946,
                          "name": "_transferFrom",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1138,
                          "src": "2004:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 951,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2004:39:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 952,
                      "nodeType": "ExpressionStatement",
                      "src": "2004:39:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 960,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 958,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 943,
                              "src": "2073:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 959,
                              "name": "price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 841,
                              "src": "2082:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2073:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 953,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1619,
                              "src": "2053:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 956,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2053:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 957,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2053:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 961,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2053:35:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 962,
                      "nodeType": "ExpressionStatement",
                      "src": "2053:35:3"
                    }
                  ]
                },
                "documentation": "@dev Redeem some token to ETH, will be sent to sender's address\n@param _value The amount to be redeemed",
                "id": 964,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "redeem",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 944,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 943,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 964,
                      "src": "1975:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 942,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1975:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1974:16:3"
                },
                "returnParameters": {
                  "id": 945,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2000:0:3"
                },
                "scope": 1139,
                "src": "1959:136:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 991,
                  "nodeType": "Block",
                  "src": "2359:107:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 977,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 973,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "2363:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 975,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 974,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 966,
                            "src": "2371:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2363:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 976,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 968,
                          "src": "2384:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2363:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 978,
                      "nodeType": "ExpressionStatement",
                      "src": "2363:27:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 981,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 979,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "2394:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 980,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 968,
                          "src": "2409:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2394:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 982,
                      "nodeType": "ExpressionStatement",
                      "src": "2394:21:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 985,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2441:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 984,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2433:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 986,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2433:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 987,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 966,
                            "src": "2445:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 988,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 968,
                            "src": "2455:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 983,
                          "name": "TokenTx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "2425:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2425:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 990,
                      "nodeType": "EmitStatement",
                      "src": "2420:42:3"
                    }
                  ]
                },
                "documentation": "@dev Create token out of thin air. Can only be called by root.\n@param _address Destination address\n@param _value The amount to be minted",
                "id": 992,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 971,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 970,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "2350:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2350:8:3"
                  }
                ],
                "name": "mint",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 969,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 966,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 992,
                      "src": "2307:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 965,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2307:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 968,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 992,
                      "src": "2325:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 967,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2325:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2306:34:3"
                },
                "returnParameters": {
                  "id": 972,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2359:0:3"
                },
                "scope": 1139,
                "src": "2293:173:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1019,
                  "nodeType": "Block",
                  "src": "2687:107:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1005,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1001,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "2691:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1003,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1002,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 994,
                            "src": "2699:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2691:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1004,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 996,
                          "src": "2712:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2691:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1006,
                      "nodeType": "ExpressionStatement",
                      "src": "2691:27:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1007,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "2722:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1008,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 996,
                          "src": "2737:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2722:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1010,
                      "nodeType": "ExpressionStatement",
                      "src": "2722:21:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1012,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 994,
                            "src": "2761:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 1014,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2779:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 1013,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2771:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 1015,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2771:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1016,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 996,
                            "src": "2783:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1011,
                          "name": "TokenTx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "2753:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 1017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2753:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1018,
                      "nodeType": "EmitStatement",
                      "src": "2748:42:3"
                    }
                  ]
                },
                "documentation": "@dev Purge token into the void. Can only be called by root.\n@param _address Victim's address\n@param _value The amount to be burned",
                "id": 1020,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 999,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 998,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "2678:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2678:8:3"
                  }
                ],
                "name": "burn",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 997,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 994,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 1020,
                      "src": "2635:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 993,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2635:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 996,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 1020,
                      "src": "2653:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 995,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2653:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2634:34:3"
                },
                "returnParameters": {
                  "id": 1000,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2687:0:3"
                },
                "scope": 1139,
                "src": "2621:173:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1035,
                  "nodeType": "Block",
                  "src": "2947:51:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1027,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "2951:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1028,
                          "name": "_price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1022,
                          "src": "2959:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2951:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1030,
                      "nodeType": "ExpressionStatement",
                      "src": "2951:14:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1032,
                            "name": "_price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1022,
                            "src": "2987:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1031,
                          "name": "PriceChange",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 923,
                          "src": "2975:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 1033,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2975:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1034,
                      "nodeType": "EmitStatement",
                      "src": "2970:24:3"
                    }
                  ]
                },
                "documentation": "@dev Set the Wei/mTrst price. Can only be called by root.\n@param _price The new price",
                "id": 1036,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 1025,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 1024,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "2938:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2938:8:3"
                  }
                ],
                "name": "setPrice",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1023,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1022,
                      "name": "_price",
                      "nodeType": "VariableDeclaration",
                      "scope": 1036,
                      "src": "2916:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1021,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2916:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2915:13:3"
                },
                "returnParameters": {
                  "id": 1026,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2947:0:3"
                },
                "scope": 1139,
                "src": "2898:100:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1039,
                  "nodeType": "Block",
                  "src": "3101:2:3",
                  "statements": []
                },
                "documentation": "@dev Fallback function. Used to deposit ETH to the contract",
                "id": 1040,
                "implemented": true,
                "kind": "fallback",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1037,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3081:2:3"
                },
                "returnParameters": {
                  "id": 1038,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3101:0:3"
                },
                "scope": 1139,
                "src": "3073:30:3",
                "stateMutability": "payable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1053,
                  "nodeType": "Block",
                  "src": "3289:38:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1050,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1042,
                            "src": "3313:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1047,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "3299:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 1049,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3299:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 1051,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3299:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1052,
                      "nodeType": "ExpressionStatement",
                      "src": "3299:21:3"
                    }
                  ]
                },
                "documentation": "@dev Withdraw ETH from the contract into root's account. Can only be called by root\n@param _value Withdrawal amount",
                "id": 1054,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 1045,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 1044,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "3280:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "3280:8:3"
                  }
                ],
                "name": "withdraw",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1043,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1042,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 1054,
                      "src": "3258:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1041,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3258:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3257:13:3"
                },
                "returnParameters": {
                  "id": 1046,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3289:0:3"
                },
                "scope": 1139,
                "src": "3240:87:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1072,
                  "nodeType": "Block",
                  "src": "3507:119:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1064,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1060,
                              "name": "vaultContractAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 837,
                              "src": "3525:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1062,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3554:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1061,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3546:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1063,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3546:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3525:31:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4164647265737320686173206265656e20736574",
                            "id": 1065,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3558:22:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            },
                            "value": "Address has been set"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            }
                          ],
                          "id": 1059,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "3517:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1066,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3517:64:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1067,
                      "nodeType": "ExpressionStatement",
                      "src": "3517:64:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1068,
                          "name": "vaultContractAddr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 837,
                          "src": "3591:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1069,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1056,
                          "src": "3611:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3591:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1071,
                      "nodeType": "ExpressionStatement",
                      "src": "3591:28:3"
                    }
                  ]
                },
                "documentation": "@dev Set the vault contract's address. Can only be called once.\n@param _address vault contract's address",
                "id": 1073,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "setVaultContractAddr",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1057,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1056,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 1073,
                      "src": "3480:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1055,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3480:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3479:18:3"
                },
                "returnParameters": {
                  "id": 1058,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3507:0:3"
                },
                "scope": 1139,
                "src": "3450:176:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1091,
                  "nodeType": "Block",
                  "src": "3808:119:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1083,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1079,
                              "name": "stakeContractAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 835,
                              "src": "3826:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1081,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3855:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1080,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3847:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1082,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3847:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3826:31:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4164647265737320686173206265656e20736574",
                            "id": 1084,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3859:22:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            },
                            "value": "Address has been set"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            }
                          ],
                          "id": 1078,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "3818:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1085,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3818:64:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1086,
                      "nodeType": "ExpressionStatement",
                      "src": "3818:64:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1089,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1087,
                          "name": "stakeContractAddr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 835,
                          "src": "3892:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1088,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1075,
                          "src": "3912:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3892:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1090,
                      "nodeType": "ExpressionStatement",
                      "src": "3892:28:3"
                    }
                  ]
                },
                "documentation": "@dev Set the stake contract's address. Can only be called once\n@param _address stake contract's address",
                "id": 1092,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "setStakeContractAddr",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1076,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1075,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 1092,
                      "src": "3781:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1074,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3781:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3780:18:3"
                },
                "returnParameters": {
                  "id": 1077,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3808:0:3"
                },
                "scope": 1139,
                "src": "3751:176:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1137,
                  "nodeType": "Block",
                  "src": "4256:244:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1102,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1096,
                              "src": "4268:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1104,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4283:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1103,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4275:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1105,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4275:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "4268:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "44657374696e6174696f6e2061646472657373206d757374206e6f742062652030",
                            "id": 1107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4287:35:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d30a7a364f86fccb2216b6b687b3cb48a7bc5b978e527ce3257eafe41cfb97bb",
                              "typeString": "literal_string \"Destination address must not be 0\""
                            },
                            "value": "Destination address must not be 0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_d30a7a364f86fccb2216b6b687b3cb48a7bc5b978e527ce3257eafe41cfb97bb",
                              "typeString": "literal_string \"Destination address must not be 0\""
                            }
                          ],
                          "id": 1101,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "4260:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4260:63:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1109,
                      "nodeType": "ExpressionStatement",
                      "src": "4260:63:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 1115,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1111,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1098,
                              "src": "4355:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1112,
                                "name": "balance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 845,
                                "src": "4365:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 1114,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1113,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1094,
                                "src": "4373:5:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4365:14:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4355:24:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "496e73756666696369656e742062616c616e6365",
                            "id": 1116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4381:22:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                              "typeString": "literal_string \"Insufficient balance\""
                            },
                            "value": "Insufficient balance"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                              "typeString": "literal_string \"Insufficient balance\""
                            }
                          ],
                          "id": 1110,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "4347:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4347:57:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1118,
                      "nodeType": "ExpressionStatement",
                      "src": "4347:57:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1119,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "4409:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1121,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1120,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1094,
                            "src": "4417:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "4409:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1122,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1098,
                          "src": "4427:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4409:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1124,
                      "nodeType": "ExpressionStatement",
                      "src": "4409:24:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1125,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "4437:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1127,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1126,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1096,
                            "src": "4445:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "4437:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1128,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1098,
                          "src": "4453:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4437:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1130,
                      "nodeType": "ExpressionStatement",
                      "src": "4437:22:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1132,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1094,
                            "src": "4477:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1133,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1096,
                            "src": "4484:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1134,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1098,
                            "src": "4489:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1131,
                          "name": "TokenTx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "4469:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 1135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4469:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1136,
                      "nodeType": "EmitStatement",
                      "src": "4464:32:3"
                    }
                  ]
                },
                "documentation": "@dev Internal method for transfering some tokens from an account to another\n@param _from The address to transfer from\n@param _to The address to transfer to\n@param _value The amount to be transferred",
                "id": 1138,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "_transferFrom",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1099,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1094,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 1138,
                      "src": "4207:13:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1093,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4207:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1096,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 1138,
                      "src": "4222:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1095,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4222:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1098,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 1138,
                      "src": "4235:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1097,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4235:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "4206:41:3"
                },
                "returnParameters": {
                  "id": 1100,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "4256:0:3"
                },
                "scope": 1139,
                "src": "4184:316:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "private"
              }
            ],
            "scope": 1140,
            "src": "481:4021:3"
          }
        ],
          "src": "0:4502:3"
  },
  "legacyAST": {
    "absolutePath": "/Users/hafizhbudiman/Documents/Competitions/Finhacks/code/clint-dapp/contracts/TrstToken.sol",
      "exportedSymbols": {
      "TrstToken": [
        1139
      ]
    },
    "id": 1140,
      "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 831,
            "literals": [
              "solidity",
              ">=",
              "0.4",
              ".25",
              "<",
              "0.6",
              ".0"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:32:3"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": "@author Senapati Sang Diwangkara, from Affluent team\n@title The Trst Token Contract\nTrstToken is a contract for handling Trst transaction and redeeming logic. It also provides\nthe means to monitor and manipulate the token's total supply and value in the system, that\ncan only be done by an administrator account (root).\nAmong the 3 contracts, this contract must be deployed first, because the vault and staking\ncontract depended on it.",
            "fullyImplemented": true,
            "id": 1139,
            "linearizedBaseContracts": [
              1139
            ],
            "name": "TrstToken",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 833,
                "name": "root",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "503:20:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 832,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "503:15:3",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 835,
                "name": "stakeContractAddr",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "529:25:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 834,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "529:7:3",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 837,
                "name": "vaultContractAddr",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "560:25:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 836,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "560:7:3",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 839,
                "name": "totalSupply",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "589:26:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 838,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "589:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 841,
                "name": "price",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "657:20:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 840,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "657:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 845,
                "name": "balance",
                "nodeType": "VariableDeclaration",
                "scope": 1139,
                "src": "697:43:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 844,
                  "keyType": {
                    "id": 842,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "706:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "697:28:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "717:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 869,
                  "nodeType": "Block",
                  "src": "783:156:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 848,
                          "name": "root",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 833,
                          "src": "787:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 849,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1619,
                            "src": "794:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 850,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "794:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "787:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 852,
                      "nodeType": "ExpressionStatement",
                      "src": "787:17:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 857,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 853,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "808:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 855,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 854,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "816:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "808:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "313030303030",
                          "id": 856,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "824:6:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000_by_1",
                            "typeString": "int_const 100000"
                          },
                          "value": "100000"
                        },
                        "src": "808:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 858,
                      "nodeType": "ExpressionStatement",
                      "src": "808:22:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 863,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 859,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "864:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 860,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "878:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 862,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 861,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "886:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "878:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "864:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 864,
                      "nodeType": "ExpressionStatement",
                      "src": "864:27:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 867,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 865,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "896:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "31303030",
                          "id": 866,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "904:4:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000_by_1",
                            "typeString": "int_const 1000"
                          },
                          "value": "1000"
                        },
                        "src": "896:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 868,
                      "nodeType": "ExpressionStatement",
                      "src": "896:12:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 870,
                "implemented": true,
                "kind": "constructor",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 846,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "773:2:3"
                },
                "returnParameters": {
                  "id": 847,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "783:0:3"
                },
                "scope": 1139,
                "src": "762:177:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 881,
                  "nodeType": "Block",
                  "src": "989:80:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            "id": 876,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 873,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1619,
                                "src": "1007:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 874,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1007:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 875,
                              "name": "root",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 833,
                              "src": "1021:4:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1007:18:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "596f75277265206e6f7420617574686f72697a6564",
                            "id": 877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1027:23:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            },
                            "value": "You're not authorized"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            }
                          ],
                          "id": 872,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "999:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "999:52:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 879,
                      "nodeType": "ExpressionStatement",
                      "src": "999:52:3"
                    },
                    {
                      "id": 880,
                      "nodeType": "PlaceholderStatement",
                      "src": "1061:1:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 882,
                "name": "onlyRoot",
                "nodeType": "ModifierDefinition",
                "parameters": {
                  "id": 871,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "986:2:3"
                },
                "src": "969:100:3",
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 910,
                  "nodeType": "Block",
                  "src": "1096:193:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 905,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "id": 900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "id": 895,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  },
                                  "id": 890,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 885,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1619,
                                      "src": "1114:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 886,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1114:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 888,
                                        "name": "this",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1637,
                                        "src": "1136:4:3",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_TrstToken_$1139",
                                          "typeString": "contract TrstToken"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_TrstToken_$1139",
                                          "typeString": "contract TrstToken"
                                        }
                                      ],
                                      "id": 887,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "1128:7:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": "address"
                                    },
                                    "id": 889,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1128:13:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "src": "1114:27:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "||",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "id": 894,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 891,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1619,
                                      "src": "1148:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 892,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1148:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 893,
                                    "name": "vaultContractAddr",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 837,
                                    "src": "1162:17:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "1148:31:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "src": "1114:65:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "||",
                              "rightExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                "id": 899,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 896,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1619,
                                    "src": "1186:3:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 897,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1186:10:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 898,
                                  "name": "stakeContractAddr",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 835,
                                  "src": "1200:17:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "1186:31:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "src": "1114:103:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "||",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              "id": 904,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 901,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1619,
                                  "src": "1224:3:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 902,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1224:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 903,
                                "name": "root",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 833,
                                "src": "1238:4:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "src": "1224:18:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "1114:128:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "596f75277265206e6f7420617574686f72697a6564",
                            "id": 906,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1247:23:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            },
                            "value": "You're not authorized"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_2931c525f433df083d3131d5b672e188a5aa4bad9ee97271340b06103b5abb4f",
                              "typeString": "literal_string \"You're not authorized\""
                            }
                          ],
                          "id": 884,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "1106:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1106:165:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 908,
                      "nodeType": "ExpressionStatement",
                      "src": "1106:165:3"
                    },
                    {
                      "id": 909,
                      "nodeType": "PlaceholderStatement",
                      "src": "1281:1:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 911,
                "name": "onlyClint",
                "nodeType": "ModifierDefinition",
                "parameters": {
                  "id": 883,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1093:2:3"
                },
                "src": "1075:214:3",
                "visibility": "internal"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 919,
                "name": "TokenTx",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 918,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 913,
                      "indexed": true,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 919,
                      "src": "1327:21:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 912,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1327:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 915,
                      "indexed": true,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 919,
                      "src": "1350:19:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 914,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1350:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 917,
                      "indexed": false,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 919,
                      "src": "1371:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 916,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1371:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1326:57:3"
                },
                "src": "1313:71:3"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 923,
                "name": "PriceChange",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 922,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 921,
                      "indexed": false,
                      "name": "_price",
                      "nodeType": "VariableDeclaration",
                      "scope": 923,
                      "src": "1404:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 920,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1404:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1403:13:3"
                },
                "src": "1386:31:3"
              },
              {
                "body": {
                  "id": 940,
                  "nodeType": "Block",
                  "src": "1793:41:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 935,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 925,
                            "src": "1811:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 936,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 927,
                            "src": "1818:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 937,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 929,
                            "src": "1823:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 934,
                          "name": "_transferFrom",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1138,
                          "src": "1797:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1797:33:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 939,
                      "nodeType": "ExpressionStatement",
                      "src": "1797:33:3"
                    }
                  ]
                },
                "documentation": "@dev Transfer some tokens from an account to another. Can only be done by another Clint\n\tcontract or root\n@param _from The address to transfer from\n@param _to The address to transfer to\n@param _value The amount to be transferred",
                "id": 941,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 932,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 931,
                      "name": "onlyClint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 911,
                      "src": "1783:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1783:9:3"
                  }
                ],
                "name": "transferFrom",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 930,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 925,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 941,
                      "src": "1733:13:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 924,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1733:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 927,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 941,
                      "src": "1748:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 926,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1748:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 929,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 941,
                      "src": "1761:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 928,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1761:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1732:41:3"
                },
                "returnParameters": {
                  "id": 933,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1793:0:3"
                },
                "scope": 1139,
                "src": "1711:123:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 963,
                  "nodeType": "Block",
                  "src": "2000:95:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 947,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1619,
                              "src": "2018:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2018:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 949,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "2030:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 950,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 943,
                            "src": "2036:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 946,
                          "name": "_transferFrom",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1138,
                          "src": "2004:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 951,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2004:39:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 952,
                      "nodeType": "ExpressionStatement",
                      "src": "2004:39:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 960,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 958,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 943,
                              "src": "2073:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 959,
                              "name": "price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 841,
                              "src": "2082:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2073:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 953,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1619,
                              "src": "2053:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 956,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2053:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 957,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2053:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 961,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2053:35:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 962,
                      "nodeType": "ExpressionStatement",
                      "src": "2053:35:3"
                    }
                  ]
                },
                "documentation": "@dev Redeem some token to ETH, will be sent to sender's address\n@param _value The amount to be redeemed",
                "id": 964,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "redeem",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 944,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 943,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 964,
                      "src": "1975:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 942,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1975:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1974:16:3"
                },
                "returnParameters": {
                  "id": 945,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2000:0:3"
                },
                "scope": 1139,
                "src": "1959:136:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 991,
                  "nodeType": "Block",
                  "src": "2359:107:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 977,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 973,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "2363:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 975,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 974,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 966,
                            "src": "2371:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2363:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 976,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 968,
                          "src": "2384:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2363:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 978,
                      "nodeType": "ExpressionStatement",
                      "src": "2363:27:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 981,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 979,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "2394:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 980,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 968,
                          "src": "2409:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2394:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 982,
                      "nodeType": "ExpressionStatement",
                      "src": "2394:21:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 985,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2441:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 984,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2433:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 986,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2433:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 987,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 966,
                            "src": "2445:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 988,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 968,
                            "src": "2455:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 983,
                          "name": "TokenTx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "2425:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2425:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 990,
                      "nodeType": "EmitStatement",
                      "src": "2420:42:3"
                    }
                  ]
                },
                "documentation": "@dev Create token out of thin air. Can only be called by root.\n@param _address Destination address\n@param _value The amount to be minted",
                "id": 992,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 971,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 970,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "2350:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2350:8:3"
                  }
                ],
                "name": "mint",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 969,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 966,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 992,
                      "src": "2307:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 965,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2307:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 968,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 992,
                      "src": "2325:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 967,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2325:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2306:34:3"
                },
                "returnParameters": {
                  "id": 972,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2359:0:3"
                },
                "scope": 1139,
                "src": "2293:173:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1019,
                  "nodeType": "Block",
                  "src": "2687:107:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1005,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1001,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "2691:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1003,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1002,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 994,
                            "src": "2699:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2691:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1004,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 996,
                          "src": "2712:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2691:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1006,
                      "nodeType": "ExpressionStatement",
                      "src": "2691:27:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1009,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1007,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 839,
                          "src": "2722:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1008,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 996,
                          "src": "2737:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2722:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1010,
                      "nodeType": "ExpressionStatement",
                      "src": "2722:21:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1012,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 994,
                            "src": "2761:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 1014,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2779:1:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 1013,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2771:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 1015,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2771:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1016,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 996,
                            "src": "2783:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1011,
                          "name": "TokenTx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "2753:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 1017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2753:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1018,
                      "nodeType": "EmitStatement",
                      "src": "2748:42:3"
                    }
                  ]
                },
                "documentation": "@dev Purge token into the void. Can only be called by root.\n@param _address Victim's address\n@param _value The amount to be burned",
                "id": 1020,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 999,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 998,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "2678:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2678:8:3"
                  }
                ],
                "name": "burn",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 997,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 994,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 1020,
                      "src": "2635:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 993,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2635:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 996,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 1020,
                      "src": "2653:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 995,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2653:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2634:34:3"
                },
                "returnParameters": {
                  "id": 1000,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2687:0:3"
                },
                "scope": 1139,
                "src": "2621:173:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1035,
                  "nodeType": "Block",
                  "src": "2947:51:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1027,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "2951:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1028,
                          "name": "_price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1022,
                          "src": "2959:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2951:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1030,
                      "nodeType": "ExpressionStatement",
                      "src": "2951:14:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1032,
                            "name": "_price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1022,
                            "src": "2987:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1031,
                          "name": "PriceChange",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 923,
                          "src": "2975:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 1033,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2975:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1034,
                      "nodeType": "EmitStatement",
                      "src": "2970:24:3"
                    }
                  ]
                },
                "documentation": "@dev Set the Wei/mTrst price. Can only be called by root.\n@param _price The new price",
                "id": 1036,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 1025,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 1024,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "2938:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2938:8:3"
                  }
                ],
                "name": "setPrice",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1023,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1022,
                      "name": "_price",
                      "nodeType": "VariableDeclaration",
                      "scope": 1036,
                      "src": "2916:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1021,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2916:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2915:13:3"
                },
                "returnParameters": {
                  "id": 1026,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2947:0:3"
                },
                "scope": 1139,
                "src": "2898:100:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1039,
                  "nodeType": "Block",
                  "src": "3101:2:3",
                  "statements": []
                },
                "documentation": "@dev Fallback function. Used to deposit ETH to the contract",
                "id": 1040,
                "implemented": true,
                "kind": "fallback",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1037,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3081:2:3"
                },
                "returnParameters": {
                  "id": 1038,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3101:0:3"
                },
                "scope": 1139,
                "src": "3073:30:3",
                "stateMutability": "payable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1053,
                  "nodeType": "Block",
                  "src": "3289:38:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1050,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1042,
                            "src": "3313:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 1047,
                            "name": "root",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 833,
                            "src": "3299:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 1049,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3299:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 1051,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3299:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1052,
                      "nodeType": "ExpressionStatement",
                      "src": "3299:21:3"
                    }
                  ]
                },
                "documentation": "@dev Withdraw ETH from the contract into root's account. Can only be called by root\n@param _value Withdrawal amount",
                "id": 1054,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 1045,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 1044,
                      "name": "onlyRoot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 882,
                      "src": "3280:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "3280:8:3"
                  }
                ],
                "name": "withdraw",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1043,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1042,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 1054,
                      "src": "3258:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1041,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3258:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3257:13:3"
                },
                "returnParameters": {
                  "id": 1046,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3289:0:3"
                },
                "scope": 1139,
                "src": "3240:87:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1072,
                  "nodeType": "Block",
                  "src": "3507:119:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1064,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1060,
                              "name": "vaultContractAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 837,
                              "src": "3525:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1062,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3554:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1061,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3546:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1063,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3546:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3525:31:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4164647265737320686173206265656e20736574",
                            "id": 1065,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3558:22:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            },
                            "value": "Address has been set"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            }
                          ],
                          "id": 1059,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "3517:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1066,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3517:64:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1067,
                      "nodeType": "ExpressionStatement",
                      "src": "3517:64:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1068,
                          "name": "vaultContractAddr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 837,
                          "src": "3591:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1069,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1056,
                          "src": "3611:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3591:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1071,
                      "nodeType": "ExpressionStatement",
                      "src": "3591:28:3"
                    }
                  ]
                },
                "documentation": "@dev Set the vault contract's address. Can only be called once.\n@param _address vault contract's address",
                "id": 1073,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "setVaultContractAddr",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1057,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1056,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 1073,
                      "src": "3480:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1055,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3480:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3479:18:3"
                },
                "returnParameters": {
                  "id": 1058,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3507:0:3"
                },
                "scope": 1139,
                "src": "3450:176:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1091,
                  "nodeType": "Block",
                  "src": "3808:119:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1083,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1079,
                              "name": "stakeContractAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 835,
                              "src": "3826:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1081,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3855:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1080,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3847:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1082,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3847:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3826:31:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4164647265737320686173206265656e20736574",
                            "id": 1084,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3859:22:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            },
                            "value": "Address has been set"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_60b842a27d0baccbaf2720124fac1f583c2033f0036c1ca55d28c5cdde97502b",
                              "typeString": "literal_string \"Address has been set\""
                            }
                          ],
                          "id": 1078,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "3818:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1085,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3818:64:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1086,
                      "nodeType": "ExpressionStatement",
                      "src": "3818:64:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1089,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1087,
                          "name": "stakeContractAddr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 835,
                          "src": "3892:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1088,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1075,
                          "src": "3912:8:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3892:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1090,
                      "nodeType": "ExpressionStatement",
                      "src": "3892:28:3"
                    }
                  ]
                },
                "documentation": "@dev Set the stake contract's address. Can only be called once\n@param _address stake contract's address",
                "id": 1092,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "setStakeContractAddr",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1076,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1075,
                      "name": "_address",
                      "nodeType": "VariableDeclaration",
                      "scope": 1092,
                      "src": "3781:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1074,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3781:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3780:18:3"
                },
                "returnParameters": {
                  "id": 1077,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "3808:0:3"
                },
                "scope": 1139,
                "src": "3751:176:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "external"
              },
              {
                "body": {
                  "id": 1137,
                  "nodeType": "Block",
                  "src": "4256:244:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1102,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1096,
                              "src": "4268:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 1104,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4283:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 1103,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4275:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 1105,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4275:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "4268:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "44657374696e6174696f6e2061646472657373206d757374206e6f742062652030",
                            "id": 1107,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4287:35:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_d30a7a364f86fccb2216b6b687b3cb48a7bc5b978e527ce3257eafe41cfb97bb",
                              "typeString": "literal_string \"Destination address must not be 0\""
                            },
                            "value": "Destination address must not be 0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_d30a7a364f86fccb2216b6b687b3cb48a7bc5b978e527ce3257eafe41cfb97bb",
                              "typeString": "literal_string \"Destination address must not be 0\""
                            }
                          ],
                          "id": 1101,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "4260:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4260:63:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1109,
                      "nodeType": "ExpressionStatement",
                      "src": "4260:63:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 1115,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 1111,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1098,
                              "src": "4355:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1112,
                                "name": "balance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 845,
                                "src": "4365:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 1114,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1113,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1094,
                                "src": "4373:5:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4365:14:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4355:24:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "496e73756666696369656e742062616c616e6365",
                            "id": 1116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4381:22:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                              "typeString": "literal_string \"Insufficient balance\""
                            },
                            "value": "Insufficient balance"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_47533c3652efd02135ecc34b3fac8efc7b14bf0618b9392fd6e044a3d8a6eef5",
                              "typeString": "literal_string \"Insufficient balance\""
                            }
                          ],
                          "id": 1110,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1622,
                            1623
                          ],
                          "referencedDeclaration": 1623,
                          "src": "4347:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4347:57:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1118,
                      "nodeType": "ExpressionStatement",
                      "src": "4347:57:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1119,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "4409:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1121,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1120,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1094,
                            "src": "4417:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "4409:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1122,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1098,
                          "src": "4427:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4409:24:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1124,
                      "nodeType": "ExpressionStatement",
                      "src": "4409:24:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1125,
                            "name": "balance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 845,
                            "src": "4437:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 1127,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1126,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1096,
                            "src": "4445:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "4437:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1128,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1098,
                          "src": "4453:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4437:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1130,
                      "nodeType": "ExpressionStatement",
                      "src": "4437:22:3"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 1132,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1094,
                            "src": "4477:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1133,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1096,
                            "src": "4484:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1134,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1098,
                            "src": "4489:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1131,
                          "name": "TokenTx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "4469:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,address,uint256)"
                          }
                        },
                        "id": 1135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4469:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1136,
                      "nodeType": "EmitStatement",
                      "src": "4464:32:3"
                    }
                  ]
                },
                "documentation": "@dev Internal method for transfering some tokens from an account to another\n@param _from The address to transfer from\n@param _to The address to transfer to\n@param _value The amount to be transferred",
                "id": 1138,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "_transferFrom",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1099,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1094,
                      "name": "_from",
                      "nodeType": "VariableDeclaration",
                      "scope": 1138,
                      "src": "4207:13:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1093,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4207:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1096,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 1138,
                      "src": "4222:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1095,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4222:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1098,
                      "name": "_value",
                      "nodeType": "VariableDeclaration",
                      "scope": 1138,
                      "src": "4235:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1097,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4235:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "4206:41:3"
                },
                "returnParameters": {
                  "id": 1100,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "4256:0:3"
                },
                "scope": 1139,
                "src": "4184:316:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "private"
              }
            ],
            "scope": 1140,
            "src": "481:4021:3"
          }
        ],
          "src": "0:4502:3"
  },
  "compiler": {
    "name": "solc",
      "version": "0.5.8+commit.23d335f2.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c": {
          "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
              }
            ],
              "name": "TokenTx",
                "type": "event",
                  "signature": "0x4b50c34ca914ed00f92a8ac792b2cdbaec3e692f0857d22ddc591170b5d49e7c"
        },
        "0xf347ee99503bf19c028bd6b18f3c676e82a9bb5b2bb5225aebe0fd62fd6a0d19": {
          "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "_price",
                "type": "uint256"
              }
            ],
              "name": "PriceChange",
                "type": "event",
                  "signature": "0xf347ee99503bf19c028bd6b18f3c676e82a9bb5b2bb5225aebe0fd62fd6a0d19"
        }
      },
      "links": { },
      "address": "0x0F7F9529c238430eD125c4973dC8509f450948d6",
        "transactionHash": "0xb9116f0c33247b22dc8c644907646e5227426eda0f13607fbf0920bbae86693b"
    }
  },
  "schemaVersion": "3.0.17",
    "updatedAt": "2019-11-09T10:23:50.857Z",
      "networkType": "ethereum",
        "devdoc": {
    "author": "Senapati Sang Diwangkara, from Affluent team",
      "methods": {
      "burn(address,uint256)": {
        "details": "Purge token into the void. Can only be called by root.",
          "params": {
          "_address": "Victim's address",
            "_value": "The amount to be burned"
        }
      },
      "mint(address,uint256)": {
        "details": "Create token out of thin air. Can only be called by root.",
          "params": {
          "_address": "Destination address",
            "_value": "The amount to be minted"
        }
      },
      "redeem(uint256)": {
        "details": "Redeem some token to ETH, will be sent to sender's address",
          "params": {
          "_value": "The amount to be redeemed"
        }
      },
      "setPrice(uint256)": {
        "details": "Set the Wei/mTrst price. Can only be called by root.",
          "params": {
          "_price": "The new price"
        }
      },
      "setStakeContractAddr(address)": {
        "details": "Set the stake contract's address. Can only be called once",
          "params": {
          "_address": "stake contract's address"
        }
      },
      "setVaultContractAddr(address)": {
        "details": "Set the vault contract's address. Can only be called once.",
          "params": {
          "_address": "vault contract's address"
        }
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfer some tokens from an account to another. Can only be done by another Clint\tcontract or root",
          "params": {
          "_from": "The address to transfer from",
            "_to": "The address to transfer to",
              "_value": "The amount to be transferred"
        }
      },
      "withdraw(uint256)": {
        "details": "Withdraw ETH from the contract into root's account. Can only be called by root",
          "params": {
          "_value": "Withdrawal amount"
        }
      }
    },
    "title": "The Trst Token Contract TrstToken is a contract for handling Trst transaction and redeeming logic. It also provides the means to monitor and manipulate the token's total supply and value in the system, that can only be done by an administrator account (root). Among the 3 contracts, this contract must be deployed first, because the vault and staking contract depended on it."
  },
  "userdoc": {
    "methods": { }
  }
};