<template>
  <div class="kk-cate">
      



      <div class="cate-ble">
          <el-input v-model.trim="category" placeholder="请输入商品"></el-input>
          <el-input v-model.trim="category_name" placeholder="Please enter the goods"></el-input>
          <el-button type="primary" plain @click="submit">添加品类</el-button>
      </div>
    
        <div class="main-table">
            <template>
                <el-table
                    :data="list"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="cate"
                    label="中文品类"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="cate_zh"
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
                    prop="create_time"
                    label="时间">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </el-table-column>
                    
                </el-table>

                
            </template>

        </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.int()
    },
    data(){
        return {
            category:'',//中文商品品类
            category_name:'',//英文商品品类
            list:[],//请求所有数据
            
        }
    },
    methods:{
        submit(){
            if(this.category && this.category_name){
                let data={
                    cate:this.category,
                    cate_zh:this.category_name
                }
                this.$http.fetchAddCate(data).then(()=>{
                    this.$message('添加成功');
                    this.category=''
                    this.category_name=''
                    this.int()
                })
            }         
        },
        int(){
            this.$http.fetchGetCate({}).then(res=>{
                this.list=res.data.data.list
            })
        }
    },

}
</script>

<style lang='scss'>
.kk-cate{
    .cate-ble{
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;
        
    }
    .main-table{
        width: 800px;
    }
}
</style>