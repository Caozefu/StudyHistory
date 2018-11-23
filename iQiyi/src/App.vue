<template>
  <div id="app">
    <slide-bar></slide-bar>
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
  import slideBar from '@/components/slideBar.vue';
  import navBar from '@/components/navBar.vue';

  export default {
    name: 'App',
    components: {
      slideBar,
      navBar,
    }
  }
</script>

<style>
  #app {
    font-family: "Microsoft YaHei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    width: 1155px;
    height: 712px;
    margin: auto;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #1f2124;
  }
</style>
