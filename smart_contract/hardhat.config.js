require('@nomiclabs/hardhat-waffle');
const PRIVATE_KEY = "4a322505771009888ad7c1ce2e84a43580a6e0ee600d38e7e95cb631ac1bf19f"

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/5qknrMOzkeoDSTar6bg6g6PYWGesd-Io',
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};