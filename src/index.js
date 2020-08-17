const Web3 = require('web3');
const contract = require('../build/contracts/ApprovalContract.json');

if(typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
}

// const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

const contractAddress = "<test_contract_address>"  // '0xFB5F9f077779D77E96f69b23f8154074aFdA7697' // address where contract was deployed;

const ApprovalContract = new web3.eth.Contract(contract.abi, contractAddress);


$('#contract-form').submit(() => {
  event.preventDefault();
  const fromAddress = $('#fromAddress').val();
  const toAddress = $('#toAddress').val();
  const amount = $('#amount').val();

  if(web3.utils.isAddress(fromAddress) !== true) {
    alert('Please enter valid ethereum address');
    return;
  }
  if(web3.utils.isAddress(toAddress) !== true) {
    alert('Please enter valid ethereum address');
    return;
  }
  if(amount === 0) {
    alert('Please enter some amount');
    return;
  }

  ApprovalContract.methods.deposit(toAddress).send({
    from: fromAddress,
    value: amount
  }).then((result) => {
    $('#deposit-result').html('<b>Successful TX id: </b>' + result.transactionHash);
  }).catch((err) => {
    console.log(err);
    $('#deposit-result').html('<b>Failure TX id: </b>' + err.message);
  });
});

$('#get-balance-form').submit(() => {
  event.preventDefault();

  web3.eth.getBalance(contractAddress, (err, result) => {
    $('#the-balance').html('<b>Current balance: </b>' + result);
  });
});

$('#get-blocks-form').submit(async () => {
  event.preventDefault();
  let blockCount = await web3.eth.getBlockNumber();
  if(blockCount > 0) {
    for(var i=1; i<= blockCount; i++) {
      const block = await web3.eth.getBlock(i);
      console.log(block);
    }
  }
});


