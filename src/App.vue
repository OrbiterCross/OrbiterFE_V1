<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

* {
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
  line-height: 1.5;
}
</style>
