import Vue from 'vue'
import App from './App.vue'
import {
  store
} from './store'
import '../src/util/reasize/onresize'
import {
  Form,
  Dialog,
  FormItem,
  Input,
  Button
} from 'element-ui'
import router from './router'


const defaultTitle = 'Orbiter-cross rollups'
router.beforeEach((to, from, next) => {
  // console.log('to=====', to)
  document.title = to.meta.title ? to.meta.title : defaultTitle
  next()
})


Vue.config.productionTip = false
Vue.use(Form)
Vue.use(Dialog)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)


export default new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
