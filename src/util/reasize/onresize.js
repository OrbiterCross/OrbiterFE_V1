import _this from '../../main'

//  init
function init() {
  if (_this) {
    const innerWH = {
      innerWidth: document.documentElement.clientWidth,
      innerHeight: document.documentElement.clientHeight
    }
    _this.$store.commit('setInnerWH', innerWH)
    document.documentElement.style.fontSize = 16 + 'px'
  }
}

//  ms （Trigger interval）
var ms = 300
var lastClick = Date.now() - ms
init()
// Reset rem when changing window size
document.documentElement.style.fontSize = 16 + 'px'

window.onresize = function () {
  // Throttling
  if (Date.now() - lastClick >= ms) {
    init()
    lastClick = Date.now()
  }
}
