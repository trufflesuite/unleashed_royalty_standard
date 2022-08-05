const RoyalPets = artifacts.require("RoyalPets");

module.exports = function (deployer) {
  deployer.deploy(RoyalPets);
};
