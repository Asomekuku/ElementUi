import axios from './fech'

//登录
export function fetchLogin(data){
    return axios({
        url:'/users/cms/login',
        method:'POST',
        data
    })
}
//新增品类
export function fetchAddCate(data){
    return axios({
        url:'/cates/add',
        method:'POST',
        data
    })
}
//获取所有品类
export function fetchGetCate(params){
    return axios({
        url:'/cates/all',
        method:'GET',
        params
    })
}
//查询商品
export function fetchSearch(data){
    return axios({
        url:'cates/query',
        method:'POST',
        data
    })
}
//添加商品
export function fetchAddShop(data){
    return axios({
        url:'goods/addshop',
        method:'POST',
        data
    })
}
//获取商品列表
export function fetchLonkingCate(params){
    return axios({
        url:'goods/lonkingCate',
        method:'GET',
        params
    })
}
//获取商品详情
export function fetchDetail(params){
    return axios({
        url:'goods/detail',
        method:'GET',
        params
    })
}
export default {
    fetchLogin,
    fetchAddCate,
    fetchGetCate,
    fetchSearch,
    fetchAddShop,
    fetchLonkingCate,
    fetchDetail
}