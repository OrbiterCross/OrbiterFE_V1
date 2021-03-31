import Web3 from 'web3'
import env from '../env'

import {
  Coin_ABI,
  Register_ABI
} from './contract.js'
import {
  store
} from '../../store'


export default {
  // Get a token contract on the L2 network
  getL2CoinContract() {
    const provider = new Web3.providers.HttpProvider(env.L2NetProiver)
    const web3 = new Web3(provider)
    const ecourseContractInstance = new web3.eth.Contract(Coin_ABI, store.state.L2CoinContractAddress)
    if (!ecourseContractInstance) {
      return null
    }
    return ecourseContractInstance
  },
  // Get the token contract on the main network
  getMainCoinContract() {
    const provider = new Web3.providers.HttpProvider(
      env.mainNetProiver
    )
    const web3 = new Web3(provider)
    const ecourseContractInstance = new web3.eth.Contract(Coin_ABI, store.state.mainCoinContractAddress)
    if (!ecourseContractInstance) {
      return null
    }
    return ecourseContractInstance
  },
  // To obtain the token contract on the current network, use metamask as a provider to initiate a transaction
  getTransferContract() {
    if (store.state.web3.isInstallMeta) {
      const web3 = new Web3(window.ethereum)
      var netWorkId = store.state.web3.networkId
      var ABI = Coin_ABI
      var Address = null
      if (netWorkId === env.mainNetChainID) {
        Address = store.state.mainCoinContractAddress
      } else if (netWorkId === env.L2NetChainID) {
        Address = store.state.L2CoinContractAddress
      } else {
        return null
      }
      const ecourseContractInstance = new web3.eth.Contract(ABI, Address)
      if (!ecourseContractInstance) {
        // console.log('no airDropContract instance build')
        return null
      }
      return ecourseContractInstance
    } else {
      //  console.log('no web3')
      return null
    }
  },
  // To obtain the submission token pair contract on the main network, you need to submit the token pair on the register page. Use metamask as a provider
  getBSCRegisterContract() {
    if (store.state.web3.isInstallMeta) {
      const web3 = new Web3(window.ethereum)
      const ecourseContractInstance = new web3.eth.Contract(Register_ABI, env.L2NetRegisterContractAddress)
      if (!ecourseContractInstance) {
        return null
      }
      return ecourseContractInstance
    } else {
      return null
    }
  },
  // Obtain the submitted token pair contract on the main network The home page does not need to submit the token pair Use third-party nodes as providers
  getBSCRegisterProviderContract() {
      const provider = new Web3.providers.HttpProvider(
        env.L2NetProiver
      )
      const web3 = new Web3(provider)
      const ecourseContractInstance = new web3.eth.Contract(Register_ABI, env.L2NetRegisterContractAddress)
      if (!ecourseContractInstance) {
        return null
      }
      return ecourseContractInstance
  },
  async getTransferGasLimit(from, to, value) {
    if (store.state.web3.isInstallMeta) {
      const web3 = new Web3(window.ethereum)
      var netWorkId = store.state.web3.networkId
      var ABI = Coin_ABI
      var Address = null
      if (netWorkId === env.mainNetChainID) {
        Address = store.state.mainCoinContractAddress
      } else if (netWorkId === env.L2NetChainID) {
        Address = store.state.L2CoinContractAddress
      } else {
        return null
      }
      const ecourseContractInstance = new web3.eth.Contract(ABI, Address)
      if (!ecourseContractInstance) {
        // console.log('no airDropContract instance build')
        return null
      }
      try {
        var gasLimit = await ecourseContractInstance
          .methods.transfer(to, value)
          .estimateGas({
            "from": from,
          })
          // console.log('gasLimit =',gasLimit)
        return gasLimit
      } catch(err) {
        // default
        return 55000
      }
    }
  }
}