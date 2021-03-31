<template>
  <div class="content">
    <el-dialog title="Submitted successfully"
              custom-class="dialogContent"
              :center="true"
              :show-close="false"
              :visible.sync="SubmitSuccessDialogVisible"
              width="90%">
      <span>{{  submitSuccessDesc }}</span>
      <span slot="footer"
            class="dialog-footer">
        <button type="button"
                class="connectDialogBtn"
                @click="clickConfirm">confirm</button>
      </span>
    </el-dialog>
    <!-- bg 2img -->
    <img class="chakra-image upBGImage"
        src="../assets/up-triangle.svg">
    <img class="chakra-image downBGImage"
        src="../assets/down-triangle.svg">
    <!-- navBar -->
    <div class="bar">
      <div class="left">
        <div class="leftContent">
          <img class="leftImage"
              src="../assets/logo_bar.png">
        </div>
      </div>
      <div v-if="isConnect && !isWrongNet"
          class="right">
        <div class="ethNetContent">
          <button type="button"
                  class="addressButton"
                  @click="clickAddress">
            <p style="margin: 0;">{{ showAddress }}</p>
            <div class="networkID">{{ showNetDesc }}</div>
          </button>
        </div>
      </div>
    </div>
    <!-- mainbox -->
    <div class="contentBox">
      <div v-if="!isConnect"
          class="noConnectContent">
        <div class="connectDialogLogo">
          <svg viewBox="0 0 28 28"
              focusable="false"
              class="connectLogo">
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 0C1.79086 0 0 1.79086 0 4V6H20V4C20 1.79086 18.2091 0 16 0H4ZM0 8H24C26.2091 8 28 9.79086 28 12V24C28 26.2091 26.2091 28 24 28H4C1.79086 28 0 26.2091 0 24V8ZM18 18C18 17.4477 18.4477 17 19 17H24C24.5523 17 25 17.4477 25 18C25 18.5523 24.5523 19 24 19H19C18.4477 19 18 18.5523 18 18Z"
                  fill="currentColor">
            </path>
          </svg>
        </div>
        <p class="connectDialogTitle">Connect Wallet</p>
        <p class="connectDialogDesc">Connect wallet to start using</p>
        <button type="button"
                class="connectDialogBtn"
                @click="connectWeb3">Connect</button>
      </div>
      <div v-if="isConnect && isWrongNet"
          class="noConnectContent">
        <div class="connectDialogLogo">
          <svg viewBox="0 0 28 28"
              focusable="false"
              class="connectLogo">
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 0C1.79086 0 0 1.79086 0 4V6H20V4C20 1.79086 18.2091 0 16 0H4ZM0 8H24C26.2091 8 28 9.79086 28 12V24C28 26.2091 26.2091 28 24 28H4C1.79086 28 0 26.2091 0 24V8ZM18 18C18 17.4477 18.4477 17 19 17H24C24.5523 17 25 17.4477 25 18C25 18.5523 24.5523 19 24 19H19C18.4477 19 18 18.5523 18 18Z"
                  fill="currentColor">
            </path>
          </svg>
        </div>
        <p class="connectDialogTitle">Switch to a supported network</p>
        <p class="connectDialogDesc">If you want to submit tokens, please switch to the BSC mainnet</p>
      </div>
      <div v-if="isConnect && !isWrongNet"
          class="transferContent">
          <el-form :label-position="labelPosition" :rules="tokenRules" ref="tokenPair" :model="tokenPair">
            <el-form-item label="Mainnet token contract address" prop="mainAddress">
              <el-input v-model="tokenPair.mainAddress"></el-input>
            </el-form-item>
            <el-form-item label="Mainnet token transfer fee (0~100)" prop="mainTransferFee">
              <el-input v-model.number="tokenPair.mainTransferFee" @paste.native.capture.prevent="handlePaste"></el-input>
            </el-form-item>
            <el-form-item label="BSC network token contract address" prop="bscAddress">
              <el-input v-model="tokenPair.bscAddress"></el-input>
            </el-form-item>
            <el-form-item label="BSC network token transfer fee (0~100)" prop="bscTransferFee">
              <el-input v-model.number="tokenPair.bscTransferFee" @paste.native.capture.prevent="handlePaste"></el-input>
            </el-form-item>
            <el-form-item label="Receiving token address" prop="transferAddress">
              <el-input v-model="tokenPair.transferAddress"></el-input>
            </el-form-item>
            <el-form-item class="itemFooter">
              <el-button type="primary" style="background-color:#444444" @click="submitForm('tokenPair')">Submit</el-button>
              <el-button @click="resetForm('tokenPair')">Reset</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
    <div class="bottom">
      <div>
        <img class="bottomLogo" src="../assets/logo.png">
      </div>
      <div class="bottomContent">
        <div class="github">
          <a href="https://github.com"
            rel="noreferrer noopener"
            target="_blank">
            <svg viewBox="0 0 18 18"
                focusable="false"
                class="githunbIcon">
              <path d="M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.887 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z"
                    fill="currentColor">
              </path>
            </svg>
          </a>
        </div>
        <div class="bottomSep"></div>
        <p style="margin-left:1rem">Build By Orbiter</p>
      </div>
    </div>
  </div>
</template>


<script>
import "../style/home.scss";
import env from '../util/env'
import check from '../util/check/check'
import { Message, Loading } from 'element-ui'
import getContract from '../util/contract/getContract'


export default {
  name: 'Register',
  data() {
    var validateMainAddress = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Mainnet token contract address cannot be empty'));
      } else {
        if (!check.isETHAddres(value)) {
          callback(new Error('The format of contract address is incorrect'));
        }
        callback();
      }
    };
    var validateBSCAddress = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('The BSC network token contract address cannot be empty'));
      } else {
        if (!check.isETHAddres(value)) {
          callback(new Error('The format of contract address is incorrect'));
        }
        callback();
      }
    };
    var validateTransferAddress = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('The receiving token address cannot be empty'));
      } else {
        if (!check.isETHAddres(value)) {
          callback(new Error('The format of the receiving token address is incorrect'));
        }
        callback();
      }
    };
    var validateTransferFee = (rule, value, callback) => {
      if (value === '') {
        callback()
      }
      if (value < 0 || value > 100) {
        callback(new Error('The fee must be between 0 and 100'));
      }
      callback()
    }
    return {
      SubmitSuccessDialogVisible: false,
      successHash: '',
      labelPosition: 'top',
      tokenPair: {
        mainAddress: '',
        mainTransferFee: '',
        bscAddress: '',
        bscTransferFee: '',
        transferAddress: ''
      },
      tokenRules: {
          mainAddress: [
            { validator: validateMainAddress, trigger: 'blur' }
          ],
          bscAddress: [
            { validator: validateBSCAddress, trigger: 'blur' }
          ],
          transferAddress: [
            { validator: validateTransferAddress, trigger: 'blur' }
          ],
          mainTransferFee: [
            { validator: validateTransferFee, trigger: 'blur' }
          ],
          bscTransferFee: [
            { validator: validateTransferFee, trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          var that = this
          if (valid) {
            let loadingInstance = Loading.service({ fullscreen: true });
            var registerContract = getContract.getBSCRegisterContract()
            if (registerContract) {
              var senderAddress = this.$store.state.web3.coinbase
              var transferAddress = this.tokenPair.transferAddress
              var tokenList = [this.tokenPair.mainAddress,this.tokenPair.bscAddress]
              var chainIdList = [env.mainNetChainID,env.L2NetChainID]
              var feeList = [this.tokenPair.mainTransferFee ? this.tokenPair.mainTransferFee : 0, this.tokenPair.bscTransferFee ? this.tokenPair.bscTransferFee : 0]
              var objOption = { from: senderAddress };
              registerContract.methods.sight(transferAddress, tokenList, chainIdList, feeList)
                .send(objOption ,function (error, result) {
                  loadingInstance.close();
                  if (!error) {
                    this.successHash = result
                    that.SubmitSuccessDialogVisible = true
                  } else {
                    Message({
                      showClose: true,
                      duration: 2000,
                      message: error,
                      type: 'error'
                    })
                  }
                })
            } else {
              loadingInstance.close();
              Message({
                showClose: true,
                duration: 2000,
                message: 'Failed to obtain contract information, please refresh and try again',
                type: 'error'
              })
            }
          } else {
            return false;
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    clickConfirm() {
      this.SubmitSuccessDialogVisible = false
      // this.$router.push({
      //     path: `/token?deployer=${this.$store.state.web3.coinbase}&maker=${this.tokenPair.transferAddress}`
      // })
    },
    clickAddress() {
      if (check.checkIsImToken() && !check.checkIsPC()) {
        var that = this
        window.imToken.callAPI('user.showAccountSwitch', { chainType: 'ETHEREUM' }, function (err, address) {
          if (err) {
            Message({
              showClose: true,
              duration: 2000,
              message: err.message,
              type: 'fail'
            })
          } else {
            that.$store.commit('updateCoinbase', address)
          }
        })
      }
    },
    connectWeb3() {
      this.$store.dispatch('registerWeb3').then(() => {
        // if (this.$store.state.web3.isInstallMeta) {
        // }
      })
    },
    handlePaste() {
      // donothing     No paste
    }
  },
  mounted() {
    // if (check.checkIsPC() || check.checkIsImToken()) {
    //   this.$store.dispatch('registerWeb3').then(() => {
    //   })
    // }
  },
  computed: {
    submitSuccessDesc() {
      return `Submitted successfully, and jump to : ${window.location.protocol}//${window.location.host}/token?deployer=${this.$store.state.web3.coinbase}&maker=${this.tokenPair.transferAddress}`
    },
    showAddress() {
      var address = this.$store.state.web3.coinbase
      var subStr1 = address.substr(0, 4)
      var subStr2 = address.substr(address.length - 4, 4)
      return subStr1 + '...' + subStr2
    },
    showNetDesc() {
      if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return 'BSC'
      }
      return ''

    },
    isWrongNet() {
      var netWorkId = this.$store.state.web3.networkId
      if (netWorkId === env.L2NetChainID) {
        return false
      }
      return true
    },
    isConnect() {
      return this.$store.state.web3.isInstallMeta && this.$store.state.web3.isInjected
    },
  }

}
</script>

<style lang="scss" scoped>

.transferContent {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  max-width: 800px;
  width: 80%;
  background: rgb(255, 255, 255);
  box-shadow: rgb(200 200 200 / 80%) 0px 1rem 2rem;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 1rem 3rem;
}

.el-form {
  width: 80%;
}


::v-deep .el-form-item__content {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-around;
}



@media screen and (min-width: 30em) {
  .transferContent {
    width: 80%;
  }
}

@media screen and (min-width: 48em) {
  .transferContent {
    width: 70%;
  }
}

@media screen and (min-width: 62em) {
  .transferContent {
    width: 60%;
  }
}

</style>
