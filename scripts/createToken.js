// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
  const nftContract = await ethers.getContractAt("DynamicNFT", "0x751E0640396B6bd28C202FA1681E956e75410570");
  const txn = await nftContract.createToken("ipfs://QmcNdbbkzeVQBj9MyTonG5u2Nok9DhR2LorAXSXqCFK8qJ");
  console.log("token created");
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });