require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox")

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.15",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [process.env.MUMBAI_DEPLOYER_PRIVATE_KEY],
    },
  }
}
