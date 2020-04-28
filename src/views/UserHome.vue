<template>
  <div class="user-home">
    <header class="header">
      <div class="logo-box">
        <div class="logo">
          <img src="../assets/logo.jpg" alt />
        </div>
      </div>
      <div class="shop-name">雅舍专卖店</div>
      <div class="user-box">
        <div class="shop-car">
          <Button>购物车</Button>
        </div>
        <div class="my-collection">
          <Button>我的收藏</Button>
        </div>
        <router-link to="/myinfo">
          <div class="user-info">
            <Button>我的信息</Button>
          </div>
        </router-link>
        <div class="logout">
          <Poptip
            confirm
            title="确认退出登录吗？"
            word-wrap
            width="200"
            @on-ok="ok"
            @on-cancel="cancel"
            style="textAlign:left"
          >
            <Button>退出登录</Button>
          </Poptip>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="nav">
        <ul class="ul-nav">
          <router-link to="/userhome/userindex">
            <li>
              <Icon type="ios-home-outline" />首页
            </li>
          </router-link>
          <router-link to="/userhome/allgoods/0">
            <li>
              <Icon type="ios-search-outline" />所有商品
            </li>
          </router-link>
          <router-link to="/userhome/allgoods/1">
            <li>
              <Icon type="ios-square-outline" />宿舍壁纸
            </li>
          </router-link>
          <router-link to="/userhome/allgoods/2">
            <li>
              <Icon type="ios-pricetags-outline" />宿舍地垫
            </li>
          </router-link>
          <router-link to="/userhome/allgoods/3">
            <li>
              <Icon type="ios-hammer" />收纳整理
            </li>
          </router-link>
          <router-link to="/userhome/allgoods/4">
            <li>
              <Icon type="ios-hand-outline" />文具手账
            </li>
          </router-link>
          <router-link to="/userhome/allgoods/5">
            <li>
              <Icon type="ios-restaurant-outline" />餐具杯具
            </li>
          </router-link>
          <router-link to="/userhome/allgoods/6">
            <li>
              <Icon type="ios-medical-outline" />少女装饰
            </li>
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
  methods: {
    ok() {
      this.$router.push({
        path: "/" //跳转的路径
      });
    },
    cancel() {
      this.$Message.info("取消退出登录");
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
  padding: 0 60px 0 40px;
}
.logo-box {
  width: 150px;
  height: 60px;
  display: flex;
}
.user-box {
  width: 500px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 0 20px;
}
.shop-car {
  height: 60px;
  font-size: 16px;
  line-height: 60px;
}
.my-collection {
  height: 60px;
  font-size: 16px;
  line-height: 60px;
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
.container {
  width: calc(100vw - 240px);
}
</style>