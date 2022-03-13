// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
  const nftContract = await ethers.getContractAt("DynamicNFT", "0xF9C90fAdEBe19117a000588E3ff5D6A8AAF00f57");
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