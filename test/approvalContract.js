const ApprovalContract = artifacts.require('../contract/ApprovalContract.sol');

contract('ApprovalContract', function (accounts) {

  it('initiates contract', async function() {
    const contract = await ApprovalContract.deployed();
    const approver = await contract.approver.call();
    assert.equal(approver, 0x7Fd26F292815819b55e676886966acBD9A39f9cb, "approvers dont match");
  });

  it('takes a deposit', async function() {
    const contract = await ApprovalContract.deployed();
    await contract.deposit(accounts[0], {value: 1e+2, from: accounts[1]});
    assert.equal(await web3.eth.getBalance(contract.address), 1e+2, "amount did not match");
  });
});