<template>
  <div id="app">
    <div class="main">
      <Header/>
      <GameArea />
    </div>

    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import GameArea from '@/components/GameArea'

export default {
  name: 'App',
  components: {
    Header,
    GameArea
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
    width:100%;
    height:100%;
    position:fixed;
  }
  .main{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
