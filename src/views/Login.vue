<template>
  <div class="login">
    <div class="form-box">
      <Tabs value="login">
        <TabPane label="登录" name="login">
          <Form class="form" :label-width="60">
            <FormItem label="手机号:">
              <Input required placeholder="请输入手机号"></Input>
            </FormItem>
            <FormItem label="密码:">
              <Input required placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem label="角色:">
              <Select style="width:278px" v-model="selectValue" @on-change="changeProduct">
                <Option
                  v-for="(item,index) in selectList"
                  :value="item.value"
                  :key="index"
                >{{item.label}}</Option>
              </Select>
            </FormItem>
            <Button @click="login()" class="btn login-btn">登录</Button>
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

export default {
  data() {
    return {
      selectList: [
        {
          value: 0,
          label: "管理员"
        },
        {
          value: 1,
          label: "用户"
        }
      ],
      selectValue: 0
    };
  },
  methods: {
    changeProduct(value) {
      this.selectValue = value;
    },
    login() {
      if (this.selectValue === 0) {
        this.$router.push({ path: "/home/adminindex" });
      } else {
        this.$router.push({ path: "/userhome/userindex" });
      }
    }
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
  background-color: orange;
  opacity: 0.8;
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
  width: 275px;
  display: block;
  margin-left: 60px;
  background-color: rgb(252, 134, 8);
  color: black;
  border-radius: 8px;
  font-size: 20px;
}
.btn a {
  color: white;
}
</style>
