<template>
  <div class="login">
    <div class="form-box">
      <Tabs value="login">
        <TabPane label="登录" name="login">
          <Form class="form" :label-width="60" :model="loginForm">
            <FormItem label="手机号:">
              <Input required placeholder="请输入手机号"  v-model="loginForm.tel"></Input>
            </FormItem>
            <FormItem label="密码:">
              <Input required placeholder="请输入密码" v-model="loginForm.pwd"></Input>
            </FormItem>
            <FormItem label="角色:">
              <Select style="width:278px;height:60px" v-model="selectValue" @on-change="changeProduct">
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
          <Form class="form" :label-width="70" :model="registerForm">
            <FormItem label="手机号">
              <Input required placeholder="请输入手机号" v-model="registerForm.tel"></Input>
            </FormItem>
            <FormItem label="密码">
              <Input required placeholder="请输入密码" v-model="registerForm.pwd"></Input>
            </FormItem>
            <FormItem label="验证码">
              <i-input required placeholder="请输入验证码" v-model="registerForm.code">
                <i-button slot="append"  @click="getCode()">获取验证码</i-button>
              </i-input>
            </FormItem>
            <Button class="btn login-btn" @click="register()">注册</Button>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios"
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
      selectValue: 0,
      registerForm:{
        tel:'',
        pwd:'',
        code:null,
      },
      loginForm:{
        tel:'',
        pwd:'',
      },
      yzmCode:'',
    };
  },
  methods: {
    changeProduct(value) {
      this.selectValue = value;
    },
    getCode(){
      var tel = this.registerForm.tel
      axios.post("ssypzmd/user/user/register/yzm", {
        
          "userInfophoneNumber": tel,
        
      }).then((res) => {
        this.yzmCode = res.data.extend.yzmCode
      }).catch((err) => {
          console.log(err)
      })
    },
    register(){
      const code = parseInt(this.registerForm.code)
      if(this.yzmCode === code){
        this.$Message.success('验证码正确')
        axios.post("ssypzmd/user/user/register", {
          "userInfophoneNumber": this.registerForm.tel,
          "userinfoPwd":this.registerForm.pwd,
        }).then((res) => {
          this.$Message.success('注册成功')
        }).catch((err) => {
          this.$Message.error('注册失败')
        })
      }else{
         this.$Message.error('验证码不正确')
      }
    
    },
    login() {
      axios.post("ssypzmd/user/user/login", {
          "userinfoPhoneNumber": this.loginForm.tel,
          "userinfoPwd":this.loginForm.pwd,
        }).then((res) => {
          if(res.data.extend.userinfo.userinfoCode === "000000" && this.selectValue === 0){
            this.$Message.success('管理员登录成功')
            this.$router.push({ path: "/home/adminindex" });
          }else if(res.data.extend.userinfo.userinfoCode === "000000" && this.selectValue === 1){
            this.$Message.error('登录失败，您不是用户。')
          }else if(res.data.extend.userinfo.userinfoCode !== "000000" && this.selectValue === 1){
            this.$Message.success('用户登录成功')
            this.$router.push({ path: "/userhome/userindex" });
            this.$store.commit("setUserInfo", res.data.extend.userinfo)
            sessionStorage.setItem("tel",res.data.extend.userinfo.userinfoPhonenumber)
            sessionStorage.setItem("pwd",res.data.extend.userinfo.userinfoPwd)
          }else if(res.data.extend.userinfo.userinfoCode !== "000000" && this.selectValue === 0){
            this.$Message.error('登录失败，您不是管理员。')
          }
        }).catch((err) => {
          this.$Message.error('登录失败，密码错误')
        })
    
    }
  }
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
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
  width: 401px;
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
