<template>
  <div id="app">
    <!--<TopHeader></TopHeader>-->
    <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
// import SideBar from './components/SideBar.vue'

export default {
  components: {
    'TopHeader': TopHeader
    // 'SideBar': SideBar
  }
}
</script>

<style>
@import './assets/css/base.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100%;
}
</style>
