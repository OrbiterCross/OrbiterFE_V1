export default {
  // is installmetamask
  updateIsInstallMeta(state, isInstallMeta) {
    state.web3.isInstallMeta = isInstallMeta
  },
  updateWeb3Instance(state, web3Instance) {
    state.web3.web3Instance = web3Instance
  },
  // update mainNet tokenContract Address
  updateMainCoinContractAddress(state, mainCoinAddress) {
    state.mainCoinContractAddress = mainCoinAddress
  },
  // update L2 tokenContract Address
  updateL2CoinContractAddress(state, L2CoinAddress) {
    state.L2CoinContractAddress = L2CoinAddress
  },
  // update receiveToken Address
  updateReceiveCoinAddress(state, receiveAddress) {
    state.receiveCoinAddress = receiveAddress
  },
  // update deployer Address
  updateSenderCoinAddress(state, senderAddress) {
    state.senderCoinAddress = senderAddress
  },
  //
  updateCoinbase(state, coinbase) {
    if (!coinbase || coinbase.length === 0) {
      state.web3.isInjected = false
      coinbase = '0x'
    } else {
      state.web3.isInjected = true
    }
    state.web3.coinbase = coinbase
  },
  //
  updateNetWorkId(state, netWorkId) {
    state.web3.networkId = netWorkId
  },
  //
  setInnerWH(state, {
    innerWidth,
    innerHeight
  }) {
    state.innerWH.innerWidth = innerWidth
    state.innerWH.innerHeight = innerHeight
  }
}
