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
      <el-row type='flex' justify="start" align='middle'>
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
            <!-- <el-input v-model="info.img" placeholder="图片"></el-input> -->
            <el-upload
                class="avatar-uploader"
                action="http://localhost:8090/api/upload/img"
                :show-file-list="false"
                :on-success="imgUpload"
                >
                <img v-if="info.img" :src='"http://localhost:3000"+info.img' class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
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
                <el-button type="primary" @click="catesubmit">修改</el-button>
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
        let id=this.$route.params.id
        if(id){
            //存在id
            this.$http.fetchDetail({id}).then(res=>{
                console.log(res)
            })
        }
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
            },
           
        }
    },
    methods:{
        //找到状态管理 good子模块，actions方法里面的ac_list
        ...mapActions('good',['ac_list']),
        //提交
        catesubmit(){
        //   let id =this.$route.params.id
        //   if(id){

        //   }else{

        //   }
            this.$http.fetchAddShop(this.info).then(res=>{
                console.log(res)
                    this.info={
                    name:'',
                    cate:'',
                    img:'',
                    desc:'',
                    hot:false,
                    rank:'',
                    price:''
                }
            })
                     
        },
        //图片上传成功
        imgUpload(res){
            console.log(res,'成功')
            this.info.img=res.data.url
            console.log(res.data.url)
        }
        
     
       
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
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>