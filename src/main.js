import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
console.log('-main.js-', router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
