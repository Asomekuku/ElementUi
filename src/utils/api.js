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

export default {
    fetchLogin,
    fetchAddCate,
    fetchGetCate,
    fetchSearch
}