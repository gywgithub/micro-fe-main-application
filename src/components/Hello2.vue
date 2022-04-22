<template>
  <div class="hello">

    <h1>主应用 Hello2</h1>
    
    <!-- <input type="button" value="go home" @click="goHelloWorld" /> -->
  </div>
</template>

<script>
export default {
  name: 'HelloTwo',
  methods: {
    goHelloWorld() {
      this.$router.push({
        path: '/hello'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
