import {
  getWeb3
} from '../../util/web3/getWeb3'

export default {
  async registerWeb3() {
    await getWeb3()
  }
}