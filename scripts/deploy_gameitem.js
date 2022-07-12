const { ethers } = require("hardhat");

async function main() {

  // Grab the contract factory 
  const GameItem = await ethers.getContractFactory("GameItem");

  // Start deployment, returning a promise that resolves to a contract object
  const gameItem = await GameItem.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", gameItem.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});