<template>
  <div class="cateSelect">
   
        <el-select :value='value' @change="cateChange" placeholder="请选择">
            <el-option
            v-for="cate in cateList"
            :key="cate._id"
            :label="cate.cate_zh"
            :value="cate.cate">
            </el-option>
        </el-select>
     
  </div>
</template>

<script>

export default {
  props:{
    value:{
      type:String,
      required:true
    }
  },
  computed:{
   
  },
  data(){
    return{
      cateList:[]
    }
  },
  methods:{

    cateChange(val){
      this.$emit('input',val)
    
 
    },
    addCateList(){
      //获取品类
        this.$http.fetchGetCate({}).then(res=>{
          //得到品类
        this.cateList=res.data.data.list   
      })
    },
   
   
  },
  mounted(){
    this.addCateList()
  }
}
</script>

<style>

</style>