import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ELEMENT from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import formCreate from "@form-create/element-ui";
import FcDesigner from '../fcDesigner/index'
Vue.component('FcDesigner', FcDesigner)

import './css/element-variables.scss';


Vue.use(ELEMENT);
Vue.use(formCreate);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
