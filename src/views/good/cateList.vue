<template>
  <div class="cateList">
      <h1>商品列表页</h1>
      <!-- 品类赛选 -->
       <div>
            <cateSelect v-model="cateValue" />
       </div>
       <!-- 商品列表 表格 -->
       <div class="list">     
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                    align='center'
                    label="商品"
                    width="180">
                    <template slot-scope="scope">
                        <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
                        <img :src="'http://localhost:3000'+scope.row.img" alt="">
                        <p>{{scope.row.name}}</p>
                    </template>
                    </el-table-column>

                    <el-table-column
                    label="商品描述"
                    width="150">
                    <template slot-scope="scope">
                       <span>{{scope.row.desc}}</span>
                    </template>
                    </el-table-column>

                    <el-table-column
                    label="价格"
                    width="150">
                    <template slot-scope="scope">   
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.price }}</el-tag>
                        </div>                    
                    </template>
                    </el-table-column>

                    <el-table-column
                    label="品类"
                    width="150">
                    <template slot-scope="scope">   
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.cate }}</el-tag>
                        </div>                    
                    </template>
                    </el-table-column>

                    <el-table-column
                    label="是否热销"
                    width="150">
                    <template slot-scope="scope">   
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.hot }}</el-tag>
                        </div>                    
                    </template>
                    </el-table-column>

                    <el-table-column
                    label="商品排名"
                    width="150">
                    <template slot-scope="scope">   
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.rank }}</el-tag>
                        </div>                    
                    </template>
                    </el-table-column>

                    <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="delClick1(scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
       </div>
       <!-- 商品列表结束 -->
       <!-- 分页器 -->
       <div class="fenYe">
           <el-row type="flex" justify='center'>
            <el-col :span="12" >
              
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size='2'
                    :total='total'
                    @current-change='pageChange'>
                </el-pagination>
                
            </el-col>
            </el-row>
           
       </div>
  </div>
</template>

<script>
import {cateSelect} from '@/components/' //下拉品类组件

export default {
    components:{
        cateSelect
    },
    computed:{
     
    },
    data(){
        return {
            cateValue:'',//品类值
            tableData:[],//商品列表数据
            page:1,
            total:1,
           
        }
    },
    methods:{
        //调接口
        LonkingCate(){
            let params={
                cate:this.cateValue,
                page:this.page,
               
            }
            this.$http.fetchLonkingCate(params).then(res=>{
              
                //拿到商品列表数据
                this.tableData=res.data.data.list
                //拿到页码
                this.total=res.data.data.total
                // console.log(this.total,res.data.data.total)
            })
        },
        //改变页码触发
        pageChange(page){
            this.page=page
            this.LonkingCate()
        },
        //删除
        delClick1(row){
      
            this.$http.fetchDelCate({id:row._id}).then(res=>{
                console.log(res)
                this. LonkingCate()
            })
        },
        //编辑
        handleEdit(row){     
            //跳转带上id
            this.$router.push('/cate/'+row._id)         
        },
     
    },
    //监听器
    watch:{
        cateValue(){
            this.page=1//调接口先把页码归位
            this.LonkingCate()
           
        }
    },
    mounted(){
        this.LonkingCate()
    }
}
</script>

<style lang='scss'>
.list{
    img{
        width: 100px;
        height: 100px;
    }
}
.fenYe{
    padding-top: 20px;
}
</style>