module.exports={
    //对本地服务器进行配置
    devServer:{
        publicPath:process.env.NDDE_ENV === 'production' ? './' : '/',
        port:'8090',//改端口
        //代理配置
        proxy: {
            '/api': {//端口号后的第一个路径
              target: 'http://localhost:3000',//接口所在的服务器地址
              ws: true,
              changeOrigin: true
            }
          }
    }
}