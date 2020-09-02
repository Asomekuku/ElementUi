import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home=()=>import('@/views/Home.vue')

const routes=[
    {path:'/home',component:Home}

]




const router =new VueRouter({
    routes
})
export default router