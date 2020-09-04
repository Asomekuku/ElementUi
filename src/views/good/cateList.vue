<template>
  <div class="cateList">
      <h1>商品列表页</h1>
      <!-- 品类赛选 -->
       <div>
            <cateSelect/>
       </div>
  </div>
</template>

<script>
import {cateSelect} from '@/components/' //下拉品类组件

export default {
    components:{
        cateSelect
    }
}
</script>

<style lang='scss'>
.el-col{
    text-align: center;
}

</style>