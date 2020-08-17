# Blockchain-Ethereum-Starter

This contains a starter pack for building and deploying smart contracts on Ethereum Network.

## Local development

- Install the necessary packages:
```npm install```

- Bring up truffle development environment:
```npm run truffle```

- Add the required smart contracts:
The smart contracts reside in the `/contracts` folder and you can add a new one. Smart contracts are written using `Solidity`.

- Compile the smart contract: Go to the truffle<develop> shell and use command:

```truffle compile```

- Add Migration scripts:
The migration scripts are the scripts used to deploy a compiled smart contract into the ethereum network. The file containing migration script should use the following naming convention: ```<number>_<actionname>_<contractname>.js```

- Truffle config:
The truffle config holds the details on the network to be used for deploying the smart contract. Configure this file based on the type of network you want to deploy your smart contract to. Remember that deploying smart contract to the Ethereum main network requires "Ether"

- Deploy/Migrate the smart contract:
Use the following command to migrate the smart contract to the required network.
```truffle migrate <network_name>```

For dev environment, use the command
```truffle migrate development```

- Testing your smart contracts:
Before deploying smart contract into the main Ethereum network test it locally.

All tests reside under `/test` directory. To run the tests use
```npm run test``` 

- Install metamask chrome extension using the link: https://metamask.io/

Click on `Custom RPC`, 
Network name: "Sample local network"
New RPC URL: "http://127.0.0.1:9545/"

Click on `save`

- Adding test networks. 
Configure one of the test network in metamask which were given as part of truffle development server. Note that in the project there are many places where this address must be replaced with. Simply replace <test_account_address> with the address you configure meta mask with. The <test_account_address> should also be connected from metamask on the given webpage. 

- Adding contract address.
Note that the contract address must be added to your client to connect to the right contract and make any transactions. Please replace <test_contract_address> with the valid contract address.

## Making a transaction

Once the contract is deployed, start the web server:
```npm run start```

Add the transaction address to which you have to send the transaction. The from address should be the test address you have added to metamask <test_account_address>.

Now add the amount of ether you want to transfer and submit. The transaction ID will be sent back as a result of successful transaction.

