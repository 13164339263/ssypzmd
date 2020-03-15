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
        <Menu theme="dark">
          <div class="admin-home-menu">
            <router-link to="/home/adminindex">
              <Icon style="margin-right:8px;" type="md-home" />管理员首页
            </router-link>
          </div>
          <div class="admin-home-menu">
            <router-link to="/home/usermanage">
              <Icon style="margin-right:8px;" type="md-home" />会员管理
            </router-link>
          </div>
          <!-- <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />权限管理
            </template>
            <MenuItem name="1-1">新增</MenuItem>
            <MenuItem name="1-2">删除</MenuItem>
            <MenuItem name="1-3">修改</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />用户管理
            </template>
            <router-link to="usermanage">
              <MenuItem name="2-1">用户管理</MenuItem>
            </router-link>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />订单管理
            </template>
            <MenuItem name="3-1">订单管理</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-stats" />商品管理
            </template>
            <MenuItem name="4-1">商品上传</MenuItem>
            <MenuItem name="4-2">商品审核</MenuItem>
          </Submenu>-->
        </Menu>
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
  background-color: #505970;
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
  background-color: #505970;
}
.container {
  width: calc(100% - 240px);
  height: 100%;
}
</style>