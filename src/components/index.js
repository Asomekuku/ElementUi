import tabbarLeft from './layoutChild/tabbarLeft.vue'
import cateSelect from './common/cate/cateSelect.vue'


//管理路由
import Cate from '@/views/good/Cate.vue'
import theQuery from '@/views/good/theQuery.vue'
import mangagement from '@/views/general/mangagement.vue'
import cateList from '@/views/good/cateList.vue'
import addCate from '@/views/good/addCate.vue'
const list=[
    {
        id:1,
        text:'商品管理',
        icon:'el-icon-location',
        children:[
            {id:1-1,text:'商品新增',path:'/cate/:id',component:Cate,icon:'el-icon-circle-plus'},
            {id:1-2,text:'商品列表',path:'/catelist',component:cateList,icon:'el-icon-menu'},
            {id:1-3,text:'商品品类',path:'/addcate',component:addCate,icon:'el-icon-menu'},
            {id:1-4,text:'商品查询',path:'/thequery',component:theQuery,icon:'el-icon-zoom-in'},
        ]
    },
    {
        id:2,
        text:'概况管理',
        icon:'el-icon-s-tools',
        children:[
            {id:2-1,text:'首页管理',path:'/mangagement',component:mangagement,icon:'el-icon-setting'}
        ]
    }
]



export {
    tabbarLeft,
    list,
    cateSelect,
}