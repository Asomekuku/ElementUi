<template>
  <div class="kk-home">
    <el-container>
      <el-aside width="200px">
        <tabbarLeft />
      </el-aside>

        <el-container>
          <el-header>Header</el-header>

          <el-main>
            <router-view></router-view>
          </el-main>

        </el-container>
    </el-container>
  </div>
</template>

<script>
import {tabbarLeft} from '@/components/'
export default {
  components:{
    tabbarLeft
  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style lang='scss'>
.kk-home{
  // background: pink;
  height: 100%;
  .el-container{
    height: 100%;
  }
}

</style>