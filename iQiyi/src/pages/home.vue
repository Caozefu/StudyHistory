<template>
  <div class="mainWindow">
    <slide-bar></slide-bar>
    <nav-bar></nav-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import slideBar from '@/components/slideBar.vue';
  import navBar from '@/components/navBar.vue';

  export default {
    name: "home",
    components: {
      slideBar,
      navBar,
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .mainWindow {
    width: 100%;
    height: 100%;
  }
  .slide-bar {
    width: 115px;
    height: 100%;
    float: left;
  }
  .nav-bar {
    width: 1040px;
    height: 55px;
    float: left;
  }
  .content {
    box-sizing: border-box;
    width: 1040px;
    padding: 10px;
    float: left;
  }
</style>
