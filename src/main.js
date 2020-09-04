import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import router from '@/router/'
import store from '@/store/'

//把调接口方法放在vue原型上
import http from '@/utils/api'
Vue.prototype.$http=http


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
