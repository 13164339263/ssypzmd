<template>
  <div class="login">
    <div class="form-box">
      <Tabs value="login">
        <TabPane label="登录" name="login">
          <Form class="form" :label-width="60">
            <FormItem label="手机号">
              <Input required placeholder="请输入手机号"></Input>
            </FormItem>
            <FormItem label="密码">
              <Input required placeholder="请输入密码"></Input>
            </FormItem>
            <router-link to="/home">
              <Button class="btn login-btn">登录</Button>
            </router-link>
          </Form>
        </TabPane>
        <TabPane label="注册" name="register">
          <Form class="form" :label-width="70">
            <FormItem label="手机号">
              <Input required placeholder="请输入手机号"></Input>
            </FormItem>
            <FormItem label="密码">
              <Input required placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem label="确认密码">
              <Input required placeholder="再次输入密码"></Input>
            </FormItem>
            <FormItem label="验证码">
              <Input required placeholder="请输入验证码">
                <div>获取验证码</div>
              </Input>
            </FormItem>
            <router-link to="/home">
              <Button class="btn login-btn">注册</Button>
            </router-link>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "login",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.login {
  /* display: flex; */
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #505970;
}
.form-box {
  width: 400px;
  height: 420px;
  border: solid 1px #fff;
  border-radius: 10px;
  padding: 40px 30px;
  background-color: #fff;
}
.form {
  margin-top: 10px;
}

.ivu-form {
  font-size: 16px;
}
.btn {
  width: 100%;
  display: block;
  margin: 40px auto;
  /* background-color: #505970; */
  border-radius: 8px;
  font-size: 20px;
}
.btn a {
  color: white;
}
</style>
