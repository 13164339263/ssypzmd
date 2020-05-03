<template>
  <div class="home">
    <header class="header">
      <div class="logo-box">
        <div class="logo">
          <img src="../assets/logo.jpg" alt />
        </div>
      </div>
      <div class="shop-name">雅舍宿舍用品专卖店</div>
      <div class="user-box">
        <div class="user-info">我的信息</div>
        <div class="logout">
          <Poptip
            confirm
            title="确认退出登录吗？"
            word-wrap
            width="200"
            @on-ok="ok"
            @on-cancel="cancel"
            style="textAlign:left;color:black"
          >
            <Button>退出登录</Button>
          </Poptip>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="nav">
        <ul class="ul-nav">
          <router-link to="/home/adminindex">
            <li :class="{'nav-active':activeIndex === 1}" @click="navClick(1)">管理员首页</li>
          </router-link>
          <router-link to="/home/usermanage">
            <li :class="{'nav-active':activeIndex === 2}" @click="navClick(2)">用户管理</li>
          </router-link>
          <router-link to="/home/ordermanage">
            <li :class="{'nav-active':activeIndex === 3}" @click="navClick(3)">订单管理</li>
          </router-link>
          <router-link to="/home/goodsmanage">
            <li :class="{'nav-active':activeIndex === 4}" @click="navClick(4)">商品管理</li>
          </router-link>
          <router-link to="/home/logomanage">
            <li :class="{'nav-active':activeIndex === 5}" @click="navClick(5)">物流管理</li>
          </router-link>
        </ul>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      activeIndex:0,
    }
  },
  methods: {
    ok() {
      this.$router.push({
        path: "/" //跳转的路径
      });
    },
    cancel() {
      this.$Message.info("取消退出登录");
    },
    navClick(n){
      this.activeIndex = n;
      console.log(this.activeIndex)
    }
  }
};
</script>

<style scoped>
.header {
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  border-bottom: solid 1px red;
  padding: 0 40px;
}
.logo-box {
  width: 150px;
  height: 60px;
  display: flex;
}
.user-box {
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 0 20px;
}
.user-info {
  height: 60px;
  font-size: 16px;
  line-height: 60px;
}
.logout {
  height: 60px;
  font-size: 16px;
  line-height: 60px;
}
.logo {
  padding: 5px;
  margin-right: 10px;
}
.logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.shop-name {
  height: 60px;
  font-size: 25px;
  line-height: 60px;
}
.main {
  width: 100vw;
  min-height: 640px;
  height: calc(100vh - 60px);
  display: flex;
}
.nav {
  width: 240px;
  height: 100%;
  /* background-color: #fa0016; */
  border: solid 1px red;
  border-top: none;
  padding: 40px 20px;
}
.nav ul {
  list-style: none;
}
.nav ul a {
  color: black;
}
.nav ul li {
  height: 40px;
  background-color: orange;
  line-height: 40px;
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.nav ul .nav-active{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: rgb(255, 136, 0);
}
.container {
  width: calc(100vw - 240px);
}
</style>