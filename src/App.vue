<template>
  <div id="app">
    <Header/>
    <Platform />
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Platform from '@/components/Platform'

export default {
  name: 'App',
  components: {
    Header,
    Platform
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}
</style>
