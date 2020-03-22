<template>
  <div class="home">
    <header class="header">
      <div class="logo-box">
        <div class="logo">
          <img src="../assets/logo.jpg" alt />
        </div>
      </div>
      <div class="shop-name">小赵雅舍专卖店</div>
      <div class="user-box">
        <div class="user-info">我的信息</div>
        <div class="logout">退出登录</div>
      </div>
    </header>
    <div class="main">
      <div class="nav">
        <ul class="ul-nav">
          <router-link to="/home/adminindex">
            <li>管理员首页</li>
          </router-link>
          <router-link to="/home">
            <li>权限管理</li>
          </router-link>
          <router-link to="/home/usermanage">
            <li>用户管理</li>
          </router-link>
          <router-link to="/home/">
            <li>订单管理</li>
          </router-link>
          <router-link to="/home">
            <li>商品管理</li>
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
export default {};
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
.container {
  width: calc(100vw - 240px);
}
</style>