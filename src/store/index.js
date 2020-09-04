import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import good from './good/good'
const vuex = new Vuex.Store({
    modules:{
        good
    }
})

export default vuex