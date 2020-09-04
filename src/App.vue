<template>
  <div id="app">
    
    <router-view v-if="this.$route.path=='/login'"  name="login"></router-view>
    <Home v-else />
  </div>
</template>

<script>

import Home from '@/views/layout/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  },
  mounted(){
    console.log(this.$route)
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
