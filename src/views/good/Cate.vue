<template>
  <div class="kk-cate">
      <!--  -->
      <h1>新增商品页面</h1>
      <!-- 1 -->
      <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>商品名称:</span>
        </el-col>
        <el-col :span="8">
            <el-input  placeholder="请输入商品名称" v-model="info.name"></el-input>
        </el-col>
      </el-row>
      <!-- 2 -->
      <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>商品简介:</span>
        </el-col>
        <el-col :span="8">
            <el-input
                v-model="info.desc"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                >
            </el-input>
        </el-col>
      </el-row>
      <!-- 3 -->
        <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>商品价格:</span>
        </el-col>
        <el-col :span="8">
            <el-input  placeholder="请输入商品价格" v-model.number="info.price"></el-input>
        </el-col>
      </el-row>
      <!-- 4 -->
      <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>商品品类:</span>
        </el-col>
        <el-col :span="8">
            <cateSelect v-model="info.cate" />
        </el-col>
      </el-row>
      <!-- 5 -->
        <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>商品图片:</span>
        </el-col>
        <el-col :span="8">
            <el-input v-model="info.img" placeholder="图片"></el-input>
        </el-col>
      </el-row>
      <!-- 6 -->
        <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>是否热销:</span>
        </el-col>
        <el-col :span="8">
            <el-switch
                v-model="info.hot"
                active-color="#13ce66"
                inactive-color="#ff4949">
            </el-switch>
        </el-col>
      </el-row>
       <!-- 7 -->
        <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
            <span>商品排名:</span>
        </el-col>
        <el-col :span="8">
            <el-input-number 
            v-model.number="info.rank"
             :min="1" 
             :max="10" 
             label="描述文字"></el-input-number>
        </el-col>
      </el-row>
      <!-- 8 -->
        <el-row type='flex' align='middle'>
        <el-col :span="2" :offset='5'>
        </el-col>
        <el-col :span="8">
                <el-button type="primary" @click="catesubmit">提交</el-button>
        </el-col>
      </el-row>

  </div>
</template>

<script>
import {mapActions , mapState} from 'vuex'
import {cateSelect} from '@/components/'
export default {
    components:{
        cateSelect
    },
    mounted(){
        this.int()
    },
    computed:{
        ...mapState('good',['list'])
    },
    data(){
        return {
            category:'',//中文商品品类
            category_name:'',//英文商品品类     
            value:'123',
            bol:false,
            info:{
                name:'',
                cate:'',
                img:'',
                desc:'',
                hot:false,
                rank:'',
                price:''
            }
        }
    },
    methods:{
        //找到状态管理 good子模块，actions方法里面的ac_list
        ...mapActions('good',['ac_list']),
        //提交
        catesubmit(){
            //需要封装到状态管理里面
            this.$http.fetchAddShop(this.info).then(res=>{
                console.log(res)
                this.info
            })
                     
        },
        int(){
            //如果list列表有数据不用重新调接口
            if(this.list.length==0){
                 this.ac_list({})
            }     
        },
        
     
       
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
    .el-row {
        margin-top: 20px;
    }
}
</style>