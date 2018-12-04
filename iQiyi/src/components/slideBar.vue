<template>
  <div class="slide-bar">
    <div class="threeButton">
      <a href="javascript:;" style="background-color: #ed6a5e" @click="close"></a>
      <a href="javascript:;" style="background-color: #f6bf4f"></a>
      <a href="javascript:;" style="background-color: #62c554"></a>
    </div>
    <div class="menu">
      <ul id="ul">
        <li v-for="item in menu"
            @click="changeMenu($event, item.name)">
          <span :class=""></span>
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slide-bar',
    data() {
      return {
        menu: [
          {
            id: 1,
            title: '首页',
            name: 'home'
          },
          {
            id: 2,
            title: 'VIP专区',
            name: 'vip'
          },
          {
            id: 3,
            title: '电视剧',
            name: 'tv'
          },
          {
            id: 4,
            title: '电影',
            name: 'movie'
          },
          {
            id: 5,
            title: '综艺'
          },
          {
            id: 6,
            title: '动漫'
          },
          {
            id: 7,
            title: '资讯'
          },
          {
            id: 8,
            title: '娱乐'
          },
          {
            id: 9,
            title: '搞笑'
          },
          {
            id: 10,
            title: '脱口秀'
          },
          {
            id: 11,
            title: '音乐'
          },
          {
            id: 12,
            title: '更多'
          },
        ],
      }
    },
    methods: {
      pageLoad() {
        document.getElementById('ul').children[1].className = 'VIP';
        let lis = this.$el.querySelectorAll('#ul li');
        lis[0].style.color = "#7ee554";
        lis[0].children[0].style.opacity = "1";
      },
      changeMenu(event, route) {
        let lis = this.$el.querySelectorAll('#ul li');
        for (var j = 0; j < lis.length; j++) {
          lis[j].children[0].style.opacity = "0";
          if (j !== 1) {
            lis[j].style.color = "#fff";
          }
        }
        event.path[0].style.color = "#7ee554";
        event.path[0].children[0].style.opacity = "1";
        this.$router.push(route);
      },
      close() {
        window.location.href = 'about:blank';
        window.close();
      }
    },
    mounted() {
      this.pageLoad();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .threeButton {
    position: absolute;
    top: 18px;
    left: 21px;
    z-index: 999;
  }

  .threeButton a {
    width: 12px;
    height: 12px;
    display: block;
    margin-right: 8px;
    float: left;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
  }

  .menu {
    height: 100%;
    width: 115px;
    background-color: #27292d;
    position: absolute;
    left: 0;
    top: 0;
  }

  .menu ul {
    width: 100%;
    margin-top: 78px;
  }

  .menu ul li {
    font-weight: 900;
    line-height: 24px;
    margin-bottom: 26px;
    padding-left: 30px;
    position: relative;
    color: #fff;
    cursor: pointer;
  }

  .menu ul li span {
    display: block;
    width: 12px;
    height: 24px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #7ee554;
    position: absolute;
    left: -6px;
    top: 0;
    opacity: 0;
    transition: all 0.5s;
  }

  .menu ul .active {
    color: #7ee554;
  }

  .menu ul .active span {
    opacity: 1;
  }

  .menu ul .VIP {
    color: #dcbd89 !important;
  }

  .menu ul .VIP span {
    background-color: #dcbd89;
  }
</style>
