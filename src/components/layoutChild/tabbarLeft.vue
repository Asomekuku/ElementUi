<template>
  <div class="tabbarLeft">
      <el-row class="tac">
        <el-col :span="24">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                router
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">

                <el-submenu v-for="sub in list" :key="sub.id" :index="sub.id+''">

                    <template slot="title">
                    <i :class="sub.icon"></i>
                    <span v-text="sub.text"></span>
                    </template>

                    <el-menu-item-group v-for="item in sub.children" :key="item.id">
                    <el-menu-item :index="item.path+''" v-text="item.text" :class="item.icon"></el-menu-item>         
                    </el-menu-item-group>

                </el-submenu>

                </el-menu>
            </el-col>

        </el-row>
  </div>
</template>

<script>

import {list} from '@/components/'
export default {
    data(){
        return{
            list,//列表导航

        }
    },
    
}
</script>

<style lang='scss'>
.tabbarLeft{
    height: 100%;
    background: rgba(84,92,100,1);
    .el-menu-item-group ul{
        display: flex;
        justify-items: center;
        .el-icon-location{
            line-height: 50px;
        }
    }
}
</style>