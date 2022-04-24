<template>
  <div>
    <div style="border: 2px solid red; height: 100px">
      Home Page 主应用区域
      <div>
        <input type="button" value="HelloPage" @click="goHelloPage" />
        <input type="button" value="HelloTwoPage" @click="goHelloTwo" />
        <input type="button" value="子应用主页" @click="goChildAppHome" />
        <input type="button" value="子应用table1" @click="goChildAppTable1" />
        <input type="button" value="向子应用传值 CN " @click="postMsgToVueAPP" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { initGlobalState } from 'qiankun'
export default {
  name: 'HomePage',
  data () {
    return {
      globalState: null
    }
  },
  mounted () {
    console.log('Main App Home mounted')
    this.globalState = initGlobalState({
      lang: ''
    })
    this.globalState.onGlobalStateChange(state => {
      // 监听全局状态，子应用更新主应用数据后触发
      console.log(state)
    })
  },
  methods: {
    goHelloPage () {
      this.$router.push({
        path: '/hello'
      })
    },
    goHelloTwo () {
      this.$router.push({
        path: '/hellotwo'
      })
    },
    goChildAppHome () {
      this.$router.push({
        path: '/vue-app'
      })
    },
    goChildAppTable1 () {
      this.$router.push({
        path: '/vue-app/table1'
      })
    },
    postMsgToVueAPP () {
      this.globalState.setGlobalState({
        lang: 'CN'
      })
    }
  }
}
</script>

<style scoped>
</style>
