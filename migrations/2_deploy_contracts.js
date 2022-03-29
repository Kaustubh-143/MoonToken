const MoonToken = artifacts.require("MoonToken"); //reading the moontoken contract and storing in a var
   // artifacts allows us to interact with our smart contract in any javascript runtime environment
   
module.exports = function (deployer) {
  deployer.deploy(MoonToken); //deploying
};
