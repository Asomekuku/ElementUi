<template>
  <div class="kk-home">
    <!-- 左边分类开始 -->
      <el-container>
          <el-aside width="200px">
              <el-row class="tac">
                <h1 class="tac_h1">logo</h1>
              <el-col :span="24">
                <el-menu router
                  default-active="2"
                  class="el-menu-vertical-demo"
                
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>首页管理</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    
                  </el-submenu>

                  <el-submenu index="2" >
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>商品管理</span>
                    </template>
                    <el-menu-item-group >
                      <el-menu-item  index="/home/cate">新增</el-menu-item>
                      <el-menu-item index="2-2">文章</el-menu-item>
                      <el-menu-item index="2-2">品类</el-menu-item>
                      <el-menu-item index="/home/theQuery">查询</el-menu-item>
                    </el-menu-item-group>
                    
                  </el-submenu>

                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-document"></i>
                      <span>广告中心</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="3-1">选项1</el-menu-item>
                      <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    
                  </el-submenu>

                  <el-submenu index="">
                    <template slot="title">
                      <i class="el-icon-setting"></i>
                      <span>聊天室</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="">选项1</el-menu-item>
                      <el-menu-item index="">选项2</el-menu-item>
                    </el-menu-item-group>
                    
                    
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
        </el-aside>

        <el-container>
    <!-- 左边分类结束 -->

          <!-- 头部开始 -->
          <el-header>
            <div class="kk-header">
              <i class="el-icon-user-solid"></i>

              <span>{{kk_name}}</span>
              <b @click="exit">退出 <i class="el-icon-folder-delete"></i></b>
            </div>
          </el-header>
          <!-- 头部结束 -->

          <!-- 内容开始 -->
          <el-main>
            <!-- 二级路由 -->
            <router-view></router-view>
          </el-main>
          <!-- 内容结束 -->
        </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  mounted(){
    let name=localStorage.getItem('name')
    this.kk_name=name
  },
  data(){
    return{
      kk_name:''
    }
  },
  methods:{
    //退出
    exit(){
      
     
      localStorage.removeItem('name')
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss'>
.kk-home{
  height: 100%;
  .el-aside{
    .tac{
      height: 100%;
      background: #545C64;
      .tac_h1{
        color: #fff;
        text-align: center;
        padding: 20px 0;
        
      }
    }
  }
  .el-container{
    height: 100%;
  
    .el-header{
      background: #545C64;
      .kk-header{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        &>b{
          margin: 0 30px;
          cursor: pointer;
        }
        &>span{
          margin: 0 10px;
        }
      }
    }
  }
 
}

</style>