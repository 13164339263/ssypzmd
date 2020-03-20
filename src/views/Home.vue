<template>
  <div class="home">
    <header class="header">
      <div class="logo-box">
        <div class="logo">
          <img src="../assets/logo.jpg" alt />
        </div>
      </div>
      <div>商店管理系统</div>
      <div class="user-box">
        <div class="user-info">我的信息</div>
        <div class="logout">退出登录</div>
      </div>
    </header>
    <div class="main">
      <div class="nav">
        <ul class="nav-ul">
          <li>
            <p class="nav-li-title">分类指南管理</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />查询分类指南
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />垃圾类别管理
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">投放站点管理</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />投放站点
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />投放站点
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">垃圾数量统计</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />查询分类指南
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />垃圾类别管理
              </p>
            </router-link>
          </li>
          <li>
            <p class="nav-li-title">绿色日报管理</p>
            <router-link to="/searchguide">
              <p class="nav-li">
                <Icon type="md-document" />查询分类指南
              </p>
            </router-link>
            <router-link to="/addguide">
              <p class="nav-li">
                <Icon type="md-document" />垃圾类别管理
              </p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  text-align: left;
  padding: 0 30px;
  background-color: #fa0016;
  color: #fff;
  border-bottom: solid 0.5px #fff;
  display: flex;
  justify-content: space-between;
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
}
.user-info {
  font-size: 16px;
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
.main {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
}
.admin-home-menu {
  width: 100%;
  height: 49px;
  color: rgba(255, 255, 255, 0.7);
  padding: 14px 24px;
}
.nav {
  width: 240px;
  height: 100%;
  background-color: #fa0016;
}
.nav-ul {
  margin: 0;
  padding: 0;
}
.nav-ul li {
  padding: 5px 0;
  /* border-bottom: solid 1px #eee; */
}
.nav-ul .nav-li-title {
  padding: 0 30px;
  text-align: left;
  color: #000000;
}
.nav-ul li p {
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
}
.container {
  width: calc(100% - 240px);
  height: 100%;
}
</style>