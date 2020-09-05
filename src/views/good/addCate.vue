<template>
  <div class="addcate">
      <!-- 添加品类 -->
      <h1>添加品类</h1>
       <!-- 3 -->
        <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>cate_zh:</span>
        </el-col>
        <el-col :span="8">
            <el-input  placeholder="请输入商品名称" v-model="catezh"></el-input>
        </el-col>
      </el-row>
      <!-- 4 -->
        <el-row type='flex' align='middle' class="addcareRow">
        <el-col :span="2" :offset='5'>
            <span>cate:</span>
        </el-col>
        <el-col :span="8">
            <el-input  placeholder="请输入商品品类" v-model="cateen"></el-input>
        </el-col>
      </el-row>

       <!-- 4 -->
        <el-row type='flex' align='middle' class="addcareRow">
        <el-col :span="2" :offset='5'>
            
        </el-col>
        <el-col :span="8">
            <el-button type="primary" @click="add">添加</el-button>
        </el-col>
      </el-row>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            catezh:'',
            cateen:''
        }
    },
    methods:{
        add(){
            let data={
                cate_zh:this.catezh,
                cate:this.cateen
            }
            this.$http.fetchAddCate(data).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style lang='scss'>
.addcareRow{
    margin: 20px 0;
}
</style>