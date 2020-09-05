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
import {mapMutations, mapState} from 'vuex'
export default {
  props:{
    value:{
      type:String,
      required:true
    }
  },
  computed:{
    ...mapState('good',['cateData'])
  },
  data(){
    return{
      cateList:[]
    }
  },
  methods:{
    //vuex方法
    ...mapMutations('good',['ModifyCateDate']),
    cateChange(val){
      this.$emit('input',val)
    
      //共享品类的cate
        this.ModifyCateDate(val)
    },
    addCateList(){
      //获取品类
        this.$http.fetchGetCate({}).then(res=>{
          //得到品类
        this.cateList=res.data.data.list
        
       
       
      })
    },
    //
   
  },
  mounted(){
    this.addCateList()
  }
}
</script>

<style>

</style>