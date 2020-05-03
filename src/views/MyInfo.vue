<template>
  <div class="my-info">
    <div class="back">
      <router-link to="/userhome/userindex">
        <Button type="primary">返回</Button>
      </router-link>
    </div>
    <div class="info-container">
      <h2>我的信息</h2>
      <div class="operate">
        <Button class="edit-btn" :disabled="isEdit" @click="editBtn">编辑</Button>
        <Button type="primary" :disabled="!isEdit" @click="saveBtn">保存</Button>
      </div>
      <Form class="form" :label-width="100">
        <FormItem label="用户名:">
          <Input :disabled="!isEdit" class="input" required placeholder="请输入用户名" v-model="formLeft.userinfoName"></Input>
        </FormItem>
        <FormItem label="真实姓名:">
          <Input :disabled="!isEdit" required placeholder="请输入真实姓名" v-model="formLeft.userinfoTruename"></Input>
        </FormItem>
        <FormItem label="手机号:">
          <Input :disabled="!isEdit" required placeholder="请输入手机号" v-model="formLeft.userinfoPhonenumber"></Input>
        </FormItem>
        <FormItem label="密码:">
          <Input :disabled="!isEdit" required placeholder="请输入密码" v-model="formLeft.userinfoPwd"></Input>
        </FormItem>
        <FormItem label="性别:">
          <Input :disabled="!isEdit" required placeholder="请输入性别" v-model="formLeft.userinfoSex"></Input>
        </FormItem>
        <FormItem label="邮箱:">
          <Input :disabled="!isEdit" required placeholder="请输入邮箱" v-model="formLeft.userinfoEmail"></Input>
        </FormItem>
      </Form>
    </div>
    <div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import store from '@/store' 
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState(["userInfo"])
  },
  created(){
    const tel = sessionStorage.getItem("tel")   
    const pwd = sessionStorage.getItem("pwd")  
    this.$store.dispatch("queryUserInfo",{tel:tel,pwd:pwd})  
    this.formLeft = this.userInfo
  },
  mounted(){
    this.formLeft = this.userInfo
  },
  data() {
    return {
      isEdit: false,
      formLeft: {
        userinfoName:'',
        userinfoTruename:'',
        userinfoPhonenumber:'',
        userinfoPwd:'',
        userinfoSex:'',
        userinfoEmail:'',
      }
    };
  },
  methods: {
    editBtn() {
      this.isEdit = true;
    },
    saveBtn() {
      this.isEdit = false;
      // 发起请求
      const id = this.userInfo.userinfoId
      const param = {
        userinfoName:this.formLeft.userinfoName,
        userinfoTruename:this.formLeft.userinfoTruename,
        userinfoPhonenumber:this.formLeft.userinfoPhonenumber,
        userinfoPwd:this.formLeft.userinfoPwd,
        userinfoSex:this.formLeft.userinfoSex,
        userinfoEmail:this.formLeft.userinfoEmail,
      }
      this.$store.dispatch("editUserInfo",{param:param,id:id,that:this})
    }
  }
};
</script>

<style scoped>
.my-info {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.back {
  padding: 10px 20px;
}
.info-container {
  width: 500px;
  height: 500px;
  margin: 50px auto;
  padding: 5px 10px;
  border: solid 2px #f3f3f3;
}
h2 {
  margin: 20px;
}
.operate {
  margin: 10px;
}
.edit-btn {
  margin-right: 20px;
}
.iconlabelUrl {
  width: 160px;
  height: 160px;
}
</style>