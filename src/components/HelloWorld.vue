<template>
  <div class="hello">
    <h1>hello world{{username}}</h1>
    <button @click="test">路由器测试</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
      // window.console.log(window.history.length)
  },
  computed: {
    username () {
      return this.$route.params
    }
  },
  methods: {
    test() {
      // window.console.log(window.history.length)
      window.history.length > 1 
      ? this.$router.go(-1)
      : this.$router.push('/')
    }
  },
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
