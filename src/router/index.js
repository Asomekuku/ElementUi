import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Login=()=>import('@/components/common/login/login.vue')
const Cate=()=>import('@/views/good/Cate.vue')
//路由管理
let arr=[]
import {list} from '@/components/'

console.log(list)
list.map(item=>{
    if(item.children){
        item.children.map(li=>{
            arr.push({path:li.path,component:li.component})

        })
    }
})
console.log(arr)
// console.log(this.$store)
const router =new VueRouter({
    routes :[

        ...arr,
        {path:'/cate',component:Cate},
        {path:'/login',components:{'login':Login}},
        {path:'*',redirect:'/login'}
    ]
})

//解决router版本过高 重复点击路由控制台报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}

//判断是否有token
router.beforeEach((to, from, next) => {
 
    if(to.path=='/cate'){
        let token=localStorage.getItem('token')
        if(token){
            next()
        }else(
            next('/login')
        )
    }
        next()

    
    
})




export default router