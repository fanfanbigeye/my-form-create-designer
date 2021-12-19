import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import FcDesigner from '../fcDesigner/index'
Vue.component('FcDesigner', FcDesigner)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
