<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Home />
    <!--  -->
    <div id="vue-app">
      
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import Home from './views/Home'
import { registerMicroApps, start } from 'qiankun'
export default {
  name: 'App',
  components: {
    Home
  },
  mounted () {
    registerMicroApps([
      {
        name: 'vue-app',
        entry: 'http://localhost:8081',
        container: '#vue-app',
        activeRule: '/vue-app'
      }
    ])
    start()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
