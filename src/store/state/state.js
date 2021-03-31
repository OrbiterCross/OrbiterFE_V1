const state = {
  web3: {
    isInstallMeta: false, // is have metamask
    isInjected: false, // metamask is injected
    web3Instance: null, // web3instance
    networkId: null, //
    coinbase: null, //
    error: null
  },
  mainCoinContractAddress: '',
  L2CoinContractAddress: '',
  receiveCoinAddress: '',
  senderCoinAddress: '',
  innerWH: {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }
}
export default state
