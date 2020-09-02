import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from '@/router/'
import vuex from '@/store/'

new Vue({
  router,
  vuex,
  render: h => h(App),
}).$mount('#app')
