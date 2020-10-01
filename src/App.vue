<template>
  <div id="app">
    <Header></Header>

    <section class="section">
            <div class="container">
              <router-view>
                Test
              </router-view>
            </div>
        </section>
    <img alt="Vue logo" src="./assets/logo.png">

  </div>
</template>

<script>
import Header from './layouts/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
  margin-top: 60px;
}
</style>
