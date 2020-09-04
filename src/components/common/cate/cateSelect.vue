<template>
  <div class="cateSelect">
      <template>
        <el-select :value='value' @change="cateChange" placeholder="请选择">
            <el-option
            v-for="cate in cateList"
            :key="cate._id"
            :label="cate.cate_zh"
            :value="cate.cate">
            </el-option>
        </el-select>
        </template>
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
  data(){
    return{
      cateList:[]
    }
  },
  methods:{
    cateChange(val){
      this.$emit('input',val)
      console.log(val)
    },
    addCateList(){
        this.$http.fetchGetCate({}).then(res=>{
        this.cateList=res.data.data.list
        console.log(res,this.cateList)
      })
    }
  },
  mounted(){
    this.addCateList()
  }
}
</script>

<style>

</style>