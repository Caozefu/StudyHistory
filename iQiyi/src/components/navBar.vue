<template>
  <div class="navBar">
    <div class="top">
      <div class="logo">
        <img src="images/aiqiyi-logo.png" alt="" width="83px" height="28px">
      </div>
      <div class="searchBox" id="search">
        <input type="url" value="热血街舞团">
        <button class="iconfont">&#xe61c;</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar"
  }
</script>

<style scoped>
  /*12*24*/
  .top {
    width: 100%;
    height: 55px;
    background-color: #181a1c;
    position: absolute;
    left: 115px;
  }

  .top .logo {
    width: 83px;
    height: 28px;
    padding: 14px 22px;
    float: left;
  }

  .top .searchBox {
    width: 247px;
    height: 38px;
    margin: 8px 254px;
  }

  .top .searchBox input {
    width: 190px;
    height: 38px;
    -webkit-border-radius: 19px 0 0 19px;
    -moz-border-radius: 19px 0 0 19px;
    border-radius: 19px 0 0 19px;
    background-color: #1f2124;
    float: left;
    line-height: 38px;
    color: #8e8f90;
    padding-left: 21px;
    cursor: text;
    transition: all 0.3s;
  }

  .top .searchBox button {
    width: 38px;
    height: 38px;
    -webkit-border-radius: 19px;
    -moz-border-radius: 19px;
    border-radius: 19px;
    background-color: #333334;
    float: left;
    margin-left: -19px;
    color: #fff;
    transition: all 0.3s;
  }
</style>
