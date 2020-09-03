import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home=()=>import('@/views/Home.vue')
const Login=()=>import('@/components/common/login/login.vue')

const Cate=()=>import('@/views/good/Cate.vue')
const theQuery=()=>import('@/views/good/theQuery.vue')


const router =new VueRouter({
    routes :[
        {path:'/home',component:Home,children:[
            {path:'cate',component:Cate},
            {path:'thequery',component:theQuery}
        ]},
        {path:'/login',component:Login},
        {path:'/*',redirect:'/login'}
    ]
})





// router.beforeEach((to, from, next) => {
//     console.log(to,from,next())
//     //证明登陆了
//     if(from.path==='/login'){
//         let token=localStorage.getItem('token')
//         if(token){
//             next()
//         }
//         console.log(token)
//     }
//     if(to.path==='/home'){
//         let token=localStorage.getItem('token')
//         if(token){
//             next()
//         }else{
//             next('/login')
//         }
//         console.log(token)

//     }
      
    
//   })
export default router