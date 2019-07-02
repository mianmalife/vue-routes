<template>
  <div id="app">
    <router-link to="/"> Go to Foo</router-link><br>
    <router-link to="/bar">Go to Bar</router-link><br>
    <router-link :to="{ name: 'user', params: { id: 123, nam: 'zhangkx'}}">user</router-link><br>
    <router-link to="/phone/15591523164/query">userquery</router-link><br>
    <router-view></router-view>
    <router-view name="test_view_name"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      user_name: 'zhangkx'
    }
  },
  created() {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>