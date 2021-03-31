<template>
  <div class="content">
    <!-- warning dialog -->
    <el-dialog title="WARNING"
              custom-class="unsafeContent"
              :center="true"
              top="10vh"
              :show-close="false"
              :visible.sync="warningDialogVisable"
              :close-on-click-modal="false">
      <div class="unsafeNative">
        <div class="unsafeSep"></div>
        <div class="unsafeBox">
          <div class="unsafeTokenBox">
            <div class="unsafeTokenBoxNative">
              <div class="tokenNameBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div v-if="mainCoinNameLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px;margin-left:30px"></div>
                <div class="tokenName">{{ mainCoinName }} (MainNet)</div>
              </div>
              <div class="tokenContractAddress">
                {{ this.$store.state.mainCoinContractAddress }}
              </div>
              <div class="tokenNameBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div v-if="L2CoinNameLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px;margin-left:30px"></div>
                <div class="tokenName">{{ L2CoinName }} (BSC)</div>
              </div>
              <div class="tokenContractAddress">
                {{ this.$store.state.L2CoinContractAddress }}
              </div>
              <div class="tokenNameBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div v-if="L2CoinNameLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px;margin-left:30px"></div>
                <div class="tokenName">deployerAddress</div>
              </div>
              <div class="tokenContractAddress">
                {{ this.$store.state.senderCoinAddress }}
              </div>
              <div class="tokenNameBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div v-if="L2CoinNameLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px;margin-left:30px"></div>
                <div class="tokenName">MakerAddress</div>
              </div>
              <div class="tokenContractAddress">
                {{ this.$store.state.receiveCoinAddress }}
              </div>
              <div class="tokenWarningBox">
                <div class="tokenWarning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 24 24" fill="none" stroke="#FD4040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div class="tokenWarningDesc">Unknown Source</div>
                </div>
              </div>
            </div>
          </div>
          <div class="unsafeContentBox">
            <div class="unsafeContentTop">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FD4040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <div class="unsafeContentTitle">
                Trade at your own risk!
              </div>
            </div>
            <div class="unsafeContentMid">
              <div class="unsafeContentMidTitle">
                Anyone can create a token, including creating fake versions of existing tokens that claim to represent projects.
              </div>
              <div class="unsafeContentMidDesc">
                If you purchase this token, you may not be able to sell it back.
              </div>
            </div>
            <div class="unsafeContentBottom">
              <input class="unsafeCheckBox" v-model="confirmCheck" type="checkbox">
                <div class="unsafeCheckBoxDesc">I understand</div>
            </div>
          </div>
          <button class="unsafeBtn" :disabled="!confirmCheck" @click="confirmWarning">Confirm</button>
        </div>
      </div>
    </el-dialog>
    <!-- tx success dialog -->
    <el-dialog title="Transaction sent successfully"
              custom-class="dialogContent"
              :center="true"
              :show-close="false"
              :visible.sync="TransationSuccessDialogVisible"
              width="90%"
              :before-close="handleClose">
      <a :href="jumpInToTXExplore" target="_blank">{{ `TxHash : ${transactionHash}` }}</a>
      <span slot="footer"
            class="dialog-footer">
        <button type="button"
                class="connectDialogBtn"
                @click="clickTransationOK">confirm</button>
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
    <!-- main box -->
    <div class="contentBox">
      <!-- no web3 connect connect -->
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
      <!-- wrong networkid content -->
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
        <p class="connectDialogDesc">If you want to use Orbiter, please switch to BSC Chain or ETH Mainnet</p>
      </div>
      <!-- connect correct networkid content -->
      <div v-if="isConnect && !isWrongNet"
          class="transferContent">
        <!-- pc page (from to title content) -->
        <div v-if="isWeb"
            class="transfer_top">
          <div class="transfer_top_left">
            <div class="transfer_top_top">From</div>
            <div class="transfer_top_bottom">{{ fromObj.netWork }}</div>
          </div>
          <div class="transfer_top_right">
            <div class="transfer_top_top">To</div>
            <div class="transfer_top_bottom">{{ toObj.netWork }}</div>
          </div>
        </div>
        <!-- PC page (transfer content) -->
        <div class="transferOperating">
          <!-- mobile page from title -->
          <div v-if="!isWeb"
              class="mobile_transferFromContent">
            <div class="transfer_top_top">From</div>
            <div class="transfer_top_bottom">{{ fromObj.netWork }}</div>
          </div>
          <!-- transfer -> from content -->
          <div :class="isWeb ? 'transferOperating_left' : 'mobile_transferOperatingFrom'">
            <svg v-if="isWeb"
                width="100%"
                viewBox="0 0 381 94"
                fill="none">
              <path d="M359.745 4.703A7.5 7.5 0 00353.008.5H8A7.5 7.5 0 00.5 8v78A7.5 7.5 0 008 93.5h345.008a7.5 7.5 0 006.737-4.203l19.085-39a7.499 7.499 0 000-6.594l-19.085-39z"
                    fill="#fff"
                    stroke="#F2F2F2">
              </path>
            </svg>
            <div class="transferOperating_left_content">
              <div class="transferOperating_content_top">
                <div class="transferCoin">
                  <div class="transferCoin_icon">
                    <div  v-if="!isDefaultTokenPair" style="width:25px;height:25px;font-size:25px;line-height:25px">
                      🤔
                    </div>
                    <img v-else style="width:24px;height:26px"
                        src="../assets/logo.png">
                  </div>
                  <div v-if="fromCoinNameLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px"></div>
                  <p v-else class="transferCoin_coinName"
                            @click="clickCoinName(fromObj)"
                    style="margin-top:0;margin-bottom:0">{{ fromObj.Coin }}</p>
                </div>
                <div class="transferBalance">
                  <div v-if="fromBalanceLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px"></div>
                  <div v-if="isWeb && !fromBalanceLoading"
                      class="transferBalance_balance">{{ `Balance: ${fromBalance}` }}</div>
                  <div v-if="!isWeb && !fromBalanceLoading"
                      class="mobile_transferBalance_balance">{{ `Balance: ${fromBalance}` }}</div>
                </div>
              </div>
              <div :class="isWeb ? 'transferOperating_left_content_bottom' : 'mobile_transferOperating_left_content_bottom'">
                <input type="text"
                      v-model="transferValue"
                      class="transferOperating_input"
                      @input="checkTransferValue()"
                      placeholder="0.0">
                <button type="button"
                        @click="clickMax"
                        class="transferOperating_maxButton">Max
                </button>
              </div>
            </div>
          </div>
          <!-- transfer -> midButton content  (pc = mobile) -->
          <div class="transferButtonContent">
              <button class="transferButton"
                    style="color: #e7575b"
                    @click="showWarning">
                <svg width="100%"
                    viewBox="0 0 156 42"
                    fill="none">
                  <path d="M139.086 39.72a4 4 0 01-3.612 2.28H20.526a4 4 0 01-3.612-2.28l-16.19-34C-.54 3.065 1.395 0 4.335 0h147.33c2.94 0 4.875 3.065 3.611 5.72l-16.19 34z" 
                    fill="currentColor">
                  </path>
                </svg>
              <div class="transferButton_inside">
                <p class="transferButtonTitle">Information</p>
                <img class="transferButtonImage"
                    src="../assets/unlock.svg">
              </div>
            </button>
            <button class="transferButton"
                    @click="transferMoney"
                    :disabled="transferDisabled">
              <svg width="100%"
                  viewBox="0 0 156 42"
                  fill="none">
                <path d="M16.914 2.28A4 4 0 0120.526 0h114.948a4 4 0 013.612 2.28l16.19 34c1.264 2.655-.671 5.72-3.611 5.72H4.335C1.395 42-.54 38.935.724 36.28l16.19-34z"
                      fill="currentColor">
                </path>
              </svg>
              <div class="transferButton_inside">
                <div v-if="transferLoading"
                    class="loader-wheel"
                    style="width:20px;height:20px"></div>
                <p v-if="!transferLoading"
                  class="transferButtonTitle">Transfer</p>
                <img v-if="!transferLoading"
                     class="transferButtonImage"
                    src="../assets/transfer.svg">
              </div>
            </button>
            <div v-if="!isWeb && handlingFee" style="margin-top:8px" class="transferFee">
              Maker(<span style="color:#75818d;cursor: pointer" @click="jumpMaker()">{{showHandlingAddress}}</span>) {{ handlingFee }}
            </div>
            <!-- <div v-if="!isWeb"
                class="transferFee">{{ transferFee }}</div> -->
          </div>
          <!-- mobile page (to title) -->
          <div v-if="!isWeb"
              class="mobile_transferToContent">
            <div class="transfer_top_top">To</div>
            <div class="transfer_top_bottom">{{ toObj.netWork }}</div>
          </div>
          <!-- transfer (to content) -->
          <div :class="isWeb ? 'transferOperating_right': 'mobile_transferOperatingTo'">
            <svg v-if="isWeb"
                width="100%"
                viewBox="0 0 381 94"
                fill="none">
              <path d="M20.806 4.484A8 8 0 0127.992 0H373a8 8 0 018 8v78a8 8 0 01-8 8H27.992a8 8 0 01-7.186-4.484l-19.085-39a8 8 0 010-7.032l19.085-39z"
                    fill="#F2F2F2">
              </path>
            </svg>
            <div class="transferOperating_right_content">
              <div class="transferOperating_content_top">
                <div class="transferCoin">
                  <div class="transferCoin_icon">
                    <div v-if="!isDefaultTokenPair" style="width:25px;height:25px;font-size:25px;line-height:25px">
                      🤔
                    </div>
                    <img v-else style="width:24px;height:26px"
                        src="../assets/logo.png">
                  </div>
                  <div v-if="toCoinNameLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px"></div>
                  <p class="transferCoin_coinName"
                      @click="clickCoinName(toObj)"
                    style="margin-top:0;margin-bottom:0">{{ toObj.Coin }}</p>
                </div>
                <div class="transferBalance">
                  <div v-if="toBalanceLoading"
                      class="loader-wheel"
                      style="width:20px;height:20px"></div>
                  <div v-if="isWeb && !toBalanceLoading"
                      class="transferBalance_balance">{{ `Balance: ${toBalance}` }}</div>
                  <div v-if="!isWeb && !toBalanceLoading"
                      class="mobile_transferBalance_balance">{{ `Balance: ${toBalance}` }}</div>
                </div>
              </div>
              <div :class="isWeb ? 'transferOperating_right_content_bottom' : 'mobile_transferOperating_right_content_bottom'">
                <p class="transferOperating_toNum">{{ transferToValue ? transferToValue : 0.0 }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- transferFee (pc) -->
        <!-- <div v-if="isWeb"
            class="transferFee">{{ transferFee }}
        </div> -->
        <div v-if="isWeb && handlingFee" style="margin-top:8px" class="transferFee">
          Maker(<span style="color:blue;cursor: pointer" @click="jumpMaker()">{{showHandlingAddress}}</span>) {{ handlingFee }}
        </div>
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
import check from '../util/check/check'
import getContract from '../util/contract/getContract'
import { Message, Loading } from 'element-ui'
import env from '../util/env'
import BigNumber from "bignumber.js";


export default {
  name: 'Home',
  data() {
    return {
      // notice user token warning dialog
      warningDialogVisable: false,
      // warning checkbox
      confirmCheck: false,
      // Control the warning box will not pop up multiple times
      needShowWarning: false,
      // isDefaultToken
      isDefaultTokenPair: true,
      // tx success dialog
      TransationSuccessDialogVisible: false,
      // Raw transfer data（from amount） =>  get toAmount from computed : transferToValue（include serviceFee）
      transferValue: '',
      // The transfer contract is calling  （default false）
      transferLoading: false,

      // Mainnet token balance requesting
      CoinBalanceLoading: false,
      // L2 token balance requesting
      L2CoinBalanceLoading: false,
      CoinBalance: 0,
      L2CoinBalance: 0,

      mainCoinName: '',
      L2CoinName: '',
      mainCoinNameLoading: false,
      L2CoinNameLoading: false,

      //service Fee
      mainHandlingFee: 0,
      L2HandlingFee: 0,

      // success tx hash
      transactionHash: '',

      transferAddress: '',
      senderAddress: '',
    }
  },
  watch: {
    // address changed
    '$store.state.web3.coinbase': {
      handler(val, old) {
        // console.log('coinbase', val, 'XXX', old)
        // old '0x' -> 'address'  Manual login succeeded
        if (old !== val && val !== '0x') {
          // console.log('now =', val)
          this.CoinBalance = 0
          this.L2CoinBalance = 0
          this.getAddressBalance(true)
        } else if (old !== val && val === '0x') {
          // the user has disconnected the authorized connection         
          this.CoinBalance = 0
          this.L2CoinBalance = 0
        }
      }
    },
    // net changed
    '$store.state.web3.networkId': {
      handler(val, old) {
        // console.log('networkId', val, 'XXX', old)
        // old 'null' -> 'networkid'  Manual login succeeded
        if (old !== val && val === null) {
          //disconnect
        } else if (old !== val && val !== null) {
          if (val === env.mainNetChainID || val === env.L2NetChainID) {
            this.CoinBalance = 0
            this.L2CoinBalance = 0
            if (this.needShowWarning) {
              this.warningDialogVisable = true
              this.needShowWarning = false
            }
            this.getAddressBalance(true)
          }
        }
      }
    }
  },
  destroyed() {
    // Clear important data
    this.clearState()
  },
  created() {
    // Clear important data
    this.clearState()
    var routeName = this.$route.name
    if (routeName === 'token') {
      var transferAddress = this.$route.query.maker
      var senderAddress = this.$route.query.deployer
      if (!check.isETHAddres(transferAddress) || !check.isETHAddres(senderAddress)) {
        var message = (check.isETHAddres(transferAddress) || check.isETHAddres(senderAddress))
                        ? (check.isETHAddres(transferAddress)
                            ? 'The format of the sender address is incorrect, please check and try again'
                            : 'The format of the transfer address is incorrect, please check and try again')
                        : 'The format of the address is incorrect, please check and try again'
        this.errorDefault(message)
      } else {
        this.senderAddress = senderAddress
        this.transferAddress = transferAddress
        this.$store.commit('updateReceiveCoinAddress', transferAddress)
        this.$store.commit('updateSenderCoinAddress', senderAddress)
        this.getCoinAddressPair(true)
      }
    } else {
      // default Token
      this.setCoinAddressPair()
      this.getCoinAddressPair(false)
    }
  },
  mounted() {
    // if (check.checkIsPC() || check.checkIsImToken()) {
    //   this.$store.dispatch('registerWeb3').then(() => {
    //   })
    // }
  },
  methods: {
    // Page logic error, need to jump back to the home page for processing
    errorDefault(message) {
      this.$router.replace({
          path: '/'
      })
      this.setCoinAddressPair()
      this.getCoinAddressPair(false)
      Message({
        showClose: true,
        duration: 2000,
        message: message,
        type: 'error'
      })
    },
    // Clear important data when entering the page or exiting the page
    clearState() {
      this.$store.commit('updateMainCoinContractAddress', '')
      this.$store.commit('updateL2CoinContractAddress', '')
      this.$store.commit('updateReceiveCoinAddress', '')
      this.$store.commit('updateSenderCoinAddress', '')
    },
    // Set the default token related address
    setCoinAddressPair() {
      this.$store.commit('updateMainCoinContractAddress', env.mainNetContractAddress)
      this.$store.commit('updateL2CoinContractAddress', env.L2NetContractAddress)
      this.$store.commit('updateReceiveCoinAddress', env.mainNetReceiveAddress)
      this.$store.commit('updateSenderCoinAddress', env.mainNetSenderAddress)
    },
    // Get relevant information through deployer and maker Address
    getCoinAddressPair(val) {
      var that = this
      if (!val) {
        // Default token No need to request contract
        this.getTokenInfo(val)
      } else {
        var transfer = this.$route.query.maker
        var sender = this.$route.query.deployer
        var registerContract = getContract.getBSCRegisterProviderContract()
        let loadingInstance = Loading.service({ fullscreen: true });
        registerContract.methods.getOneMaker(sender,transfer).call(
          {}, async(err, result) => {
                if (!err) {
                  // success
                  // console.log('tokenList =', result.tokenList, 'chainIdList =', result.chainIdList,'feeList =', result.feeList)
                  var tokenList = result.tokenList
                  var chainIdList = result.chainIdList
                  var feeList = result.feeList
                  if (tokenList.length === chainIdList.length && tokenList.length === feeList.length && tokenList.length === 2) {
                    var checkAddress1 = await check.isContractAddress(tokenList[0],chainIdList[0])
                    var checkAddress2 = await check.isContractAddress(tokenList[1],chainIdList[1])
                    if (checkAddress1 && checkAddress2) {
                      loadingInstance.close();
                      that.$store.commit('updateMainCoinContractAddress', tokenList[0])
                      that.$store.commit('updateL2CoinContractAddress', tokenList[1])
                      // Determine whether the two addresses are contract addresses
                      that.mainHandlingFee = feeList[0]
                      that.L2HandlingFee = feeList[1]
                      that.getTokenInfo(val)
                    } else {
                      loadingInstance.close();
                      that.errorDefault('The contract address provided by token vendor is incorrect, jump to the default page')
                      return
                    }
                  } else {
                    loadingInstance.close();
                    // Error handling， replace to default homepage
                    that.errorDefault('There is no matching trading pair, jump to the default page')
                  }
                } else { // get Contract failed，replace to default homepage
                  loadingInstance.close();
                  that.errorDefault(err)
                }
            })
      }
    },
    // Obtain the token information of the two tokens on the main chain and L2
    getTokenInfo(val) {
      var that = this
      if (val) {
        this.needShowWarning = true
        this.isDefaultTokenPair = false
      }
      if (this.$store.state.web3.networkId === env.mainNetChainID || this.$store.state.web3.networkId === env.L2NetChainID) {
        this.warningDialogVisable = true
        this.needShowWarning = false
      }
      this.getAddressBalance(true)
      //Request the current balance every 15 seconds (will block the user's operation)
      const timer = setInterval(() => {
          that.getAddressBalance(false)
      }, 15000);
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer);
      })
      var mainCoinAddress = this.$store.state.mainCoinContractAddress
      var L2CoinAddress = this.$store.state.L2CoinContractAddress
      if (!mainCoinAddress || mainCoinAddress === '' || !L2CoinAddress || L2CoinAddress === ''){
        // no way
      } else {
      // Get mainnet token information
        var mainNetContract = getContract.getMainCoinContract()
        if (!mainNetContract || mainNetContract === null || mainNetContract === undefined) {
            Message({
              showClose: true,
              duration: 2000,
              message: 'Failed to obtain contract information, please refresh and try again',
              type: 'error'
            })
        } else {
        this.mainCoinNameLoading = true
        mainNetContract.methods.symbol().call(
          {}, (err, result) => {
            if (err === null) {
              that.mainCoinNameLoading = false
              that.mainCoinName = result
            } else {
              Message({
                showClose: true,
                duration: 2000,
                message: err,
                type: 'error'
              })
            }
          })
        }
        // Get L2 network token information
        var L2Contract = getContract.getL2CoinContract()
        if (L2Contract === null || !L2Contract || L2Contract === undefined) {
            Message({
              showClose: true,
              duration: 2000,
              message: 'Failed to obtain contract information, please refresh and try again',
              type: 'error'
            })
        } else {
        this.L2CoinNameLoading = true
        L2Contract.methods.symbol().call(
          {}, (err, result) => {
            if (err === null) {
              that.L2CoinNameLoading = false
              that.L2CoinName = result
            } else {
              Message({
                showClose: true,
                duration: 2000,
                message: err,
                type: 'error'
              })
            }
          }
        )
        }
      }
    },
    // Call the balance contract method to get the amount
    getAddressBalance(val) {
      // The val parameter indicates whether or not loaidng ，blocks the user process
      if (!this.$store.state.L2CoinContractAddress ||
          this.$store.state.L2CoinContractAddress === '' ||
          !this.$store.state.mainCoinContractAddress ||
          this.$store.state.mainCoinContractAddress === '') {
        return
      }
      // get mainnet token balance
      var mainNetContract = getContract.getMainCoinContract()
      if (!mainNetContract || mainNetContract === null || mainNetContract === undefined) {
          Message({
            showClose: true,
            duration: 2000,
            message: 'Failed to obtain contract information, please refresh and try again',
            type: 'error'
          })
      } else {
        if (this.$store.state.web3.coinbase === '0x' || !this.$store.state.web3.coinbase) {
          return
        }
        if (val) {
          this.CoinBalanceLoading = true
        }
        mainNetContract.methods.balanceOf(this.$store.state.web3.coinbase).call(
          {}, (err, result) => {
            // console.log('result =', result, 'err =', err)
            this.CoinBalanceLoading = false
            if (err === null) {
              this.CoinBalance = (BigInt(result) / 10000000000n).toString() / 100000000
            } else {
              Message({
                showClose: true,
                duration: 2000,
                message: 'Failed to obtain contract information, please refresh and try again',
                type: 'error'
              })
            }
          }
        )
      }
      // Get L2 network token balance
      var L2Contract = getContract.getL2CoinContract()
      if (L2Contract === null || !L2Contract || L2Contract === undefined) {
          Message({
            howClose: true,
            duration: 2000,
            message: 'Failed to obtain contract information, please refresh and try again',
            type: 'error'
          })
      } else {
        if (val) {
          this.L2CoinBalanceLoading = true
        }
        L2Contract.methods.balanceOf(this.$store.state.web3.coinbase).call(
          {}, (err, result) => {
            // console.log('result =', result, 'err =', err)
            this.L2CoinBalanceLoading = false
            if (err === null) {
              this.L2CoinBalance = (BigInt(result) / 10000000000n).toString() / 100000000
            } else {
              Message({
                showClose: true,
                duration: 2000,
                message: 'Failed to obtain contract information, please refresh and try again',
                type: 'error'
              })
            }
          }
        )
      }
    },
    // Click txSuccess dialog Confirm btn
    clickTransationOK() {
      this.TransationSuccessDialogVisible = false
      this.CoinBalance = 0
      this.L2CoinBalance = 0
      this.transferValue = 0
      this.transactionHash = ''
      this.getAddressBalance(true)
    },
    // click Maker from serviceFee
    jumpMaker() {
      var urlPrex = ''
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        urlPrex = env.mainNetScanNet
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        urlPrex = env.L2NetScanNet
      } else {
        return null
      }
      var jumpUrl = `${urlPrex}address/${this.transferToAddress}`
      window.open(jumpUrl,'_blank')
    },
    //Click on the currency name of the from and to modules
    clickCoinName(val) {
      var clickNetId = val.netWorkId
      if (clickNetId === '') {
        return
      }
      var urlPrex = ''
      var contractAddress = ''
      if (clickNetId === env.mainNetChainID) {
        urlPrex = env.mainNetScanNet
        contractAddress = this.$store.state.mainCoinContractAddress
      } else if (clickNetId === env.L2NetChainID) {
        urlPrex = env.L2NetScanNet
        contractAddress = this.$store.state.L2CoinContractAddress
      } else {
        return
      }
      window.open(`${urlPrex}token/${contractAddress}`,'_blank')
    },
    // Click the Information button
    showWarning() {
      this.warningDialogVisable = true
    },
    // Transfer amount input verification
    checkTransferValue() {
      this.transferValue = this.transferValue.replace(/^\D*(\d*(?:\.\d{0,8})?).*$/g, '$1')
      if (this.transferValue > this.fromBalance) {
        this.transferValue = this.fromBalance
      }
    },
    // Link to metamask or imtoken
    connectWeb3() {
      this.$store.dispatch('registerWeb3').then(() => {
        // if (this.$store.state.web3.isInstallMeta) {
        // }
      })
    },
    // Click the max button
    clickMax() {
      this.transferValue = this.fromBalance
    },
    // Click the navBar address button to trigger the address change in imtoken
    clickAddress() {
      if (check.checkIsImToken() && !check.checkIsPC()) {
        var that = this
        window.imToken.callAPI('user.showAccountSwitch', { chainType: 'ETHEREUM' }, function (err, address) {
          if (err) {
            Message({
              showClose: true,
              duration: 2000,
              message: err.message,
              type: 'error'
            })
          } else {
            that.$store.commit('updateCoinbase', address)
          }
        })
      }
    },
    confirmWarning() {
      this.warningDialogVisable = false
      this.confirmCheck = false
    },
    // Click transfer to call the transfer contract
    async transferMoney() {
      if (!check.checkPrice(this.transferValue)) {
        Message({
          showClose: true,
          duration: 2000,
          message: 'The format of input amount is incorrect',
          type: 'error'
        })
        return
      }
      var that = this
      var transferContract = getContract.getTransferContract();
      if (transferContract === null || !transferContract || transferContract === undefined) {
        Message({
          showClose: true,
          duration: 2000,
          message: 'Failed to obtain contract information, please refresh and try again',
          type: 'error'
        })
      } else {
        this.transferLoading = true;
        var to = this.transferToAddress
        var var1 = new BigNumber(this.transferValue).multipliedBy(new BigNumber(10000000000))
        var value = (var1.multipliedBy(new BigNumber(100000000))).toString()
        var account = this.$store.state.web3.coinbase
        var gasLimit = await getContract.getTransferGasLimit(account, to, value)
        if (gasLimit === null || !gasLimit) {
          // default 55000
          gasLimit = 55000
        }
        var objOption = { from: account, gas: gasLimit, data: {"1":"2"} };
        transferContract.methods.transfer(to, value)
          .send(objOption, function (error, transactionHash) {
            that.transferLoading = false;
            if (!error) {
              that.TransationSuccessDialogVisible = true;
              that.transactionHash = transactionHash
            } else {
              Message({
                showClose: true,
                duration: 2000,
                message: error,
                type: 'error'
              })
            }
          });
      }
    },
    // dialog clicks on the blank area
    handleClose() {
    },
  },
  computed: {
    // Click on the URL of the successful hash redirect
    jumpInToTXExplore() {
      var urlPrex = ''
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        urlPrex = env.mainNetScanNet
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        urlPrex = env.L2NetScanNet
      } else {
        return null
      }
      var jumpUrl = `${urlPrex}tx/${this.transactionHash}`
      return jumpUrl
    },
    // Address to transfer money to（MakerAddress）
    transferToAddress() {
      return this.$store.state.receiveCoinAddress
    },
    transferToValue() {
      var originValue = this.transferValue
      var serviceFee = this.currentHandlingFee
      if (!serviceFee || serviceFee > 100 || serviceFee < 0) {
        return originValue
      } else {
        var var1 = new BigNumber(originValue).dividedBy(new BigNumber(100))
        var var2 = new BigNumber(100).minus(new BigNumber(serviceFee))
        var var3 = new BigNumber(var1).multipliedBy(new BigNumber(var2))
        var result = var3.decimalPlaces(8)
        if (!result || isNaN(result)) {
          return 0
        }
        return result
      }
    },
    // serviceFee  makerAddress
    showHandlingAddress() {
      var address = this.transferToAddress
      var subStr1 = address.substr(0, 4)
      var subStr2 = address.substr(address.length - 4, 4)
      return subStr1 + '...' + subStr2
    },
    // serviceFee desc
    handlingFee() {
      if (!this.currentHandlingFee) {
        return null
      } else {
        return `service fee ${this.currentHandlingFee}%`
      }
    },
    // current serviceFee
    currentHandlingFee() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        if (!this.L2HandlingFee || this.L2HandlingFee === '0') {
          return null
        }
        return this.L2HandlingFee
      } else {
        if (!this.mainHandlingFee || this.mainHandlingFee === '0') {
          return null
        }
        return this.mainHandlingFee
      }
    },
    // Whether the transfer button can be clicked
    transferDisabled() {
      if (this.transferLoading || this.fromBalanceLoading) {
        return true
      }
      if (!this.transferToAddress) {
        return true
      }
      if (!this.fromBalance || !this.transferValue) {
        return true
      }
      if (parseFloat(this.fromBalance) === 0 || parseFloat(this.transferValue) === 0) {
        return true
      }
      return false
    },
    fromBalance() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return this.CoinBalance
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return this.L2CoinBalance
      } else {
        return 0
      }
    },
    toBalance() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return this.L2CoinBalance
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return this.CoinBalance
      } else {
        return 0
      }
    },
    fromBalanceLoading() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return this.CoinBalanceLoading
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return this.L2CoinBalanceLoading
      } else {
        return false
      }
    },
    toBalanceLoading() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return this.L2CoinBalanceLoading
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return this.CoinBalanceLoading
      } else {
        return false
      }
    },
    fromCoinNameLoading() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return this.mainCoinNameLoading
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return this.L2CoinNameLoading
      } else {
        return false
      }
    },
    toCoinNameLoading() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return this.L2CoinNameLoading
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return this.mainCoinNameLoading
      } else {
        return false
      }
    },
    fromObj() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return {
          netWork: 'ETH Mainnet',
          netWorkId: env.mainNetChainID,
          Coin: this.mainCoinName,
        }
      } else if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return {
          netWork: 'BSC Chain',
          netWorkId: env.L2NetChainID,
          Coin: this.L2CoinName,
        }
      }
      return {
        netWork: '',
        netWorkId: '',
        Coin: ''
      }
    },
    toObj() {
      if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return {
          netWork: 'ETH Mainnet',
          netWorkId: env.mainNetChainID,
          Coin: this.mainCoinName,
        }
      } else if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return {
          netWork: 'BSC Chain',
          netWorkId: env.L2NetChainID,
          Coin: this.L2CoinName,
        }
      }
      return {
        netWork: '',
        netWorkId: '',
        Coin: ''
      }
    },
    showAddress() {
      var address = this.$store.state.web3.coinbase
      var subStr1 = address.substr(0, 4)
      var subStr2 = address.substr(address.length - 4, 4)
      return subStr1 + '...' + subStr2
    },
    showNetDesc() {
      if (this.$store.state.web3.networkId === env.mainNetChainID) {
        return 'Mainnet'
      }
      if (this.$store.state.web3.networkId === env.L2NetChainID) {
        return 'BSC'
      }
      return ''

    },
    isWrongNet() {
      var netWorkId = this.$store.state.web3.networkId
      if (netWorkId === env.mainNetChainID || netWorkId === env.L2NetChainID) {
        return false
      }
      return true
    },
    isConnect() {
      return this.$store.state.web3.isInstallMeta && this.$store.state.web3.isInjected
    },
    isWeb() {
      if (this.$store.state.innerWH.innerWidth > 991) {
        return true
      }
      return false
    },
    isPC() {
      if (check.checkIsPC()) {
        return true
      }
      return false
    },
    isIm() {
      if (check.checkIsImToken()) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
@import "../style/home.scss";

.unsafeContent {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: rgb(47 128 237 / 5%) 0px 4px 8px 0px;
    padding: 0px;
    width: 50vw;
    overflow: auto;
    align-self: center;
    max-width: 420px;
    max-height: 80vh;
    min-height: 40vh;
    border-radius: 20px;
    position: relative;
    .unsafeNative {
      width: 100%;
      overflow: auto;
      .unsafeSep {
        height: 1px;
        width: 100%;
        background-color: rgb(237, 238, 242);
      }
      .unsafeBox {
        display: grid;
        grid-auto-rows: auto;
        row-gap: 12px;
        padding: 20px;
        .unsafeTokenBox {
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          background-color: rgb(247, 248, 250);
          width: 100%;
          border-radius: 16px;
          padding: 1.25rem;
          .unsafeTokenBoxNative {
            display: grid;
            grid-auto-rows: auto;
            row-gap: 10px;
            .tokenNameBox {
              box-sizing: border-box;
              margin: 0px;
              min-width: 0px;
              width: 100%;
              display: flex;
              padding: 0px;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: start;
              justify-content: flex-start;
              flex-wrap: wrap;
              .tokenName {
                box-sizing: border-box;
                margin: 0px 8px;
                min-width: 0px;
                font-weight: 500;
                font-size: 16px;
              }
            }
            .tokenContractAddress {
              box-sizing: border-box;
              margin: 0px;
              min-width: 0px;
              font-weight: 500;
            }
            .tokenWarningBox {
              box-sizing: border-box;
              margin: 0px;
              min-width: 0px;
              padding: 4px;
              border-radius: 4px;
              background-color: rgba(253, 64, 64, 0.2);
              width: fit-content;
              .tokenWarning {
                box-sizing: border-box;
                margin: 0px;
                min-width: 0px;
                display: flex;
                padding: 0px;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: start;
                justify-content: flex-start;
                width: fit-content;
                .tokenWarningDesc {
                  box-sizing: border-box;
                  margin: 0px 0px 0px 4px;
                  min-width: 0px;
                  font-weight: 500;
                  font-size: 10px;
                  color: rgb(253, 64, 64);
                }
              }
            }
          }
        }
        .unsafeContentBox {
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          width: 100%;
          border-radius: 16px;
          padding: 1.25rem;
          background-color: rgba(253, 64, 64, 0.2);
          .unsafeContentTop {
            display: grid;
            grid-auto-rows: auto;
            justify-items: center;
            text-align: center;
            gap: 16px;
            margin-bottom: 12px;
            .unsafeContentTitle {
              box-sizing: border-box;
              margin: 0px;
              min-width: 0px;
              font-weight: 600;
              font-size: 20px;
              color: rgb(253, 64, 64);
            }
          }
          .unsafeContentMid {
              display: grid;
              grid-auto-rows: auto;
              text-align: center;
              gap: 16px;
              margin-bottom: 12px;
              box-sizing: border-box;
              min-width: 0px;
              font-size: 16px;
              color: rgb(253, 64, 64);
              .unsafeContentMidTitle {
                font-weight: 400;
              }
              .unsafeContentMidDesc {
                font-weight: 600;
              }
          }
          .unsafeContentBottom {
              box-sizing: border-box;
              margin: 0px;
              min-width: 0px;
              width: 100%;
              display: flex;
              padding: 0px;
              -webkit-box-align: center;
              align-items: center;
              flex-wrap: wrap;
              -webkit-box-pack: center;
              justify-content: center;
              .unsafeCheckBox {
                border: 1px solid rgb(214, 0, 0);
                height: 20px;
                margin: 0px;
              }
              .unsafeCheckBoxDesc {
                box-sizing: border-box;
                margin: 0px 0px 0px 10px;
                min-width: 0px;
                font-weight: 500;
                font-size: 16px;
                color: rgb(253, 64, 64);
              }
          }
        }
        .unsafeBtn {
          padding: 10px 1rem;
          width: 100%;
          font-weight: 500;
          text-align: center;
          border-radius: 20px;
          outline: none;
          border: 1px solid transparent;
          text-decoration: none;
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          flex-wrap: nowrap;
          -webkit-box-align: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          z-index: 1;
          background-color: rgb(255, 0, 122);
          color: white;
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          appearance: none;
        }
        .unsafeBtn:disabled {
          background-color: rgb(237, 238, 242);
          color: rgb(136, 141, 155);
          cursor: auto;
          box-shadow: none;
          border: 1px solid transparent;
          outline: none;
          opacity: 0.5;
        }
      }
    }
    .el-dialog__body {
      left: 0;
      top: 54px;
      bottom: 0;
      right: 0;
      padding: 0;
      z-index: 1;
      overflow: hidden;
      overflow-y: auto;
    }
}

@media (max-width: 960px) {
  .unsafeContent {
    width: 65vw;
    // margin: 0px;
  }
}

@media (max-width: 720px) {
  .unsafeContent {
    width: 85vw;
  }
}
</style>
