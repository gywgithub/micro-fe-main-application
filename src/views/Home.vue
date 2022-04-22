<template>
  <div>
    <div style="border: 2px solid red; height: 100px">
      Home Page 主应用区域
      <div>
        <input type="button" value="HelloPage" @click="goHelloPage" />
        <input type="button" value="HelloTwoPage" @click="goHelloTwo" />
        <input type="button" value="子应用主页" @click="goChildAppHome" />
        <input type="button" value="子应用table1" @click="goChildAppTable1" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
    }
  }
}
</script>

<style scoped>
</style>
