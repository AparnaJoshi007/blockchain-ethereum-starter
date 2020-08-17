var ApprovalContract = artifacts.require('ApprovalContract');

module.exports = function(deployer) {
  deployer.deploy(ApprovalContract);
}