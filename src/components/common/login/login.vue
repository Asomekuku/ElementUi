<!--  -->
<template>
<div class='login'>
    <!-- 登录开始 -->
    <div class="login-sign">

        <el-form  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="pass">
                <el-input type="text" v-model="account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="pwd" autocomplete="off" ></el-input>
            </el-form-item>
    
            <el-form-item>
                <el-button type="primary" @click="submitForm" >登录</el-button>
            </el-form-item>
        </el-form>
    </div>
    <!-- 登录结束 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    account:'',//账号
    pwd:''//密码
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //登录
    submitForm(){
        let data={
            username:this.account,
            password:this.pwd
        }
        this.$http.fetchLogin(data).then(res=>{
            console.log(res)
            //登录成功
            if(res.status==200){
                if(res.data.err==0){
                    this.$router.push('/cate')
                    localStorage.setItem('token',res.data.data.token)
                    localStorage.setItem('name',res.data.data.username)
                    console.log(res)
                }else{
                    alert('账号密码错误')
                }
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped lang='scss'>

.login{
    background: #cccccc;
    display: flex;
    width: 100%;
    height: 100%;
    .login-sign{
        margin: auto;
        padding: 50px;
        color: #ffffff;
        .el-button{
            width: 100%;
        }
    }
}
</style>