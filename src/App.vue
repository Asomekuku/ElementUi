<template>
  <div id="app">
    <!-- <router-link to='/home'>123</router-link>
    <router-link to="/login">登录</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
html,body{
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
 /* background: red; */
}
</style>
