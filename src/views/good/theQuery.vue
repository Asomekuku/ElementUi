<template>
  <div class="kk-query">
      <div class="query">
          <el-input v-model="shop_name"  placeholder="搜索">
              
          </el-input>
          <el-button type="primary" plain @click="search" >查询</el-button>
      </div>


      <div class="main-table">
            <template>
                <el-table
                    :data="list"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="name"
                    label="中文品类"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="cate"
                    label="英文品类"
                    width="180">
                    </el-table-column>

                    <el-table-column
                    width="180"
                    prop="create_time"
                    label="时间">
                    </el-table-column>
                    
                    <el-table-column
                    width="180"
                    
                    label="操作">
                        <el-button type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </el-table-column>
                    
                </el-table>

                
            </template>
        </div>
        
  </div>
</template>

<script>

export default {
  
    data(){
        return{
            shop_name:'',//查询名称
            list:[],//查询到的数据
            
        }
    },
    methods:{
        //查询
        search(){
            this.$http.fetchGetName({name:this.shop_name}).then(res=>{
                if(res.data.err){
                    //有一个错误

                }else{
                    this.list=res.data.data.list
                }
                
            })
        }
    }
}
</script>

<style lang='scss'>
.kk-query{
    
    // height: 100%;
    overflow: auto;
    height: 2000px;

}
.query{
    width: 50%;
    display: flex;
    // background: pink;
    // height: 2000px;
}
</style>