<template>
  <div class="kk-home">
    <el-container>
      <el-aside width="200px">
        <tabbarLeft />
      </el-aside>

        <el-container>
          <el-header>
            <el-row type="flex" align="middle" justify="end">
              <el-col :span="1">
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </el-col>
              <el-col :span="1">
                  <span class="tuichi" @click="out">退出<i class="el-icon-error"></i></span>
              </el-col>
            </el-row>
                            
                  
                
                
          </el-header>

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
    
  },
  methods:{
    //退出
    out(){
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      this.$router.push('/login')
    }
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
  .tuichi{
    cursor: pointer;
  }
}

</style>