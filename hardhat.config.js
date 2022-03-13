require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const POLYGON_API_KEY_URL = process.env.POLYGON_API_KEY_URL;

const POLYGON_PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    polygon: {
      url: POLYGON_API_KEY_URL,
      accounts: [POLYGON_PRIVATE_KEY],
      gas: 2100000, gasPrice: 8000000000
    },
  },
};