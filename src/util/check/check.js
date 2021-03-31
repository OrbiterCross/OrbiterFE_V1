var WAValidator = require('wallet-address-validator')
import Web3 from 'web3'
import env from '../env'


export default {
  async isContractAddress(address,chianId) {
    var providerUrl = ''
    if (chianId === env.mainNetChainID) {
      providerUrl = env.mainNetProiver
    } else if (chianId === env.L2NetChainID) {
      providerUrl = env.L2NetProiver
    } else {
      return false
    }
    const provider = new Web3.providers.HttpProvider(
      providerUrl
    )
    const web3 = new Web3(provider)
    const result = await web3.eth.getCode(address)
    if (result === '0x' || !result || result === '') {
      return false
    } else {
      return true
    }
  },
  isETHAddres: function (address) {
    if (address && address.length !== 0) {
      var valid = WAValidator.validate(address, 'ETH')
      if (valid) {
        return true
      } else return false
    }
    return false
  },
  checkIsPC: function () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return false
    } else {
      return true
    }
  },
  checkIsImToken: function () {
    if (window.ethereum) {
      if (window.ethereum.isImToken) {
        return true
      }
    }
    return false
  },
  // Regularly related judgments are placed here
  checkPrice: function (text) {
    var reg = /^(?!0$|0\.$|0\.0$|0\.00$)(?![1-9]\d*\.$)(0?|[1-9]\d*)(\.\d{0,8})?$/
    // Match positive integers and two decimal places or less. Various format checks 0 0. 0.0 0.00 1. 222. None of them pass
    if (reg.test(text)) { // Regular matching is passed, and valid text is extracted
      return true
    } else { // If the match is not passed, it will be cleared directly
      return false
    }
  }
}
