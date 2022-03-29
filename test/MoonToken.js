var MoonToken = artifacts.require("./MoonToken.sol");

contract('MoonToken',(accounts) => {
  it('sets the total supply upon deployment', () => {
    return MoonToken.deployed().then(instance => {
     tokenInstance = instance;
     return tokenInstance.totalSupply();
    }).then((totalSupply) => {
     assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 1000000')
    })
     
  })
})