import {fetchGetCate} from '@/utils/api'

export default{
    namespaced:true,
    state:{
        list:[]
    },
    mutations:{
        mu_list(state,payload){
            state.list=payload.data.data.list
        }
    },
    actions:{
        ac_list(store,data){
            fetchGetCate(data).then(res=>{
                store.commit('mu_list',res)
            })
        }
    }

}