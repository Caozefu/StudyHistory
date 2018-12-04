<template>
  <div class="nav-bar">
    <div class="top clearfix">
      <div class="logo">
        <img src="@/images/aiqiyi-logo.png" alt="" width="83px" height="28px">
      </div>
      <div class="searchBox"
           @mouseenter="mouseChange"
           @mouseleave="mouseChange">
        <input type="url"
               placeholder="热血街舞团"
               :class="{active: isActive}"
               @focus="searchFocus" @blur="searchBlur">
        <button class="iconfont" :class="{active: isActive}">&#xe61c;</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-bar",
    data() {
      return {
        isActive: false,
      }
    },
    methods: {
      mouseChange() {
        this.changeActive();
      },
      changeActive() {
        this.isActive = !this.isActive;
      },
      searchFocus() {
        this.changeActive = () => {};
      },
      searchBlur() {
        this.isActive = !this.isActive;
        this.changeActive = () => {
          this.isActive = !this.isActive;
        };
      }
    }
  }
</script>

<style scoped>
  /*12*24*/
  .top {
    width: 100%;
    background-color: #181a1c;
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

  .top .searchBox input.active {
    background-color: #333335;
    color: #d8d8d8;
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
    cursor: pointer;
  }

  .top .searchBox button.active {
    background-color: #80f651;
    width: 55px;
  }
</style>
