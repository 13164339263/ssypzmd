<template>
  <div class="user-manage">
    <div class="new-btn">
      <Button type="warning" @click="addUser()">添加新用户</Button>
    </div>
    <div class="table-box">
      <h3>用户列表</h3>
      <Table :columns="userColumns" :data="userInfoList" stripe></Table>
    </div>
    
    <Modal v-model="modal" :title="titleContent" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="用户名">
          <Input v-model="formLeft.userinfoName"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input v-model="formLeft.userinfoPwd"></Input>
        </FormItem>
        <FormItem label="真实姓名">
          <Input v-model="formLeft.userinfoTruename"></Input>
        </FormItem>
        <FormItem label="性别">
          <Input v-model="formLeft.userinfoSex"></Input>
        </FormItem>
        <FormItem label="手机号">
          <Input v-model="formLeft.userinfoPhonenumber"></Input>
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="formLeft.userinfoEmail"></Input>
        </FormItem>
         <FormItem label="角色编码">
          <Input v-model="formLeft.userinfoCode"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import axios from "axios"
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState(["userInfoList","msg"])
  },
  data() {
    return {
      modal: false,
      titleContent: "",
      editId:'',
      formLeft: {
        userinfoName: "",
        userinfoPwd: "",
        userinfoTruename: "",
        userinfoSex: "",
        userinfoPhonenumber: "",
        userinfoEmail: "",
        userinfoCode:""
      },
      userColumns: [
        {
          title: "用户名",
          key: "userinfoName"
        },
        {
          title: "密码",
          key: "userinfoPwd"
        },
        {
          title: "真实姓名",
          key: "userinfoTruename"
        },
        {
          title: "性别",
          key: "userinfoSex"
        },
        {
          title: "手机号",
          key: "userinfoPhonenumber"
        },
        {
          title: "邮箱",
          key: "userinfoEmail"
        },
        {
          title: "操作",
          key: "operation",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "warning",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.editUser(params.row);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "warning",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.deleteConfirm(params.row.userinfoId);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
    };
  },
  created (){
    // 请求用户信息
    this.$store.dispatch("queryUserInfo");
  },
  mounted(){
   
  },
  methods: {
    handleForm() {
      const param = {
        userinfoName: this.formLeft.userinfoName,
        userinfoPwd: this.formLeft.userinfoPwd,
        userinfoTruename: this.formLeft.userinfoTruename,
        userinfoSex: this.formLeft.userinfoSex,
        userinfoPhonenumber: this.formLeft.userinfoPhonenumber,
        userinfoEmail: this.formLeft.userinfoEmail,
        userinfoCode: this.formLeft.userinfoCode,
      }
      if(this.titleContent === "新建用户"){
        // 添加用户信息
        this.$store.dispatch("newUserInfo",{param:param,that:this});
        this.formLeft = {}
      }else{
        // 编辑用户信息
        this.$store.dispatch("editUserInfo",{param:param,id:this.editId,that:this});
        this.formLeft = {}
      }
    },
    cancel() {
      this.$Message.info("取消");
    },
    addUser() {
      this.modal = true;
      this.titleContent = "新建用户";
    },
    editUser(row) {
      this.modal = true;
      this.titleContent = "编辑用户信息";
      this.editId = row.userinfoId;
      this.formLeft.userinfoName = row.userinfoName
      this.formLeft.userinfoPwd = row.userinfoPwd
      this.formLeft.userinfoTruename = row.userinfoTruename
      this.formLeft.userinfoSex = row.userinfoSex
      this.formLeft.userinfoPhonenumber = row.userinfoPhonenumber
      this.formLeft.userinfoEmail = row.userinfoEmail
      this.formLeft.userinfoCode = row.userinfoCode
    },
    deleteConfirm(id) {
      this.$Modal.confirm({
        title: "你确定删除该条用户信息吗？",
        onOk: () => {
          // 删除用户信息
          this.$store.dispatch("deleteUserInfo",{id:id,that:this});
        },
        onCancel: () => {
          this.$Message.info("取消");
        }
      });
    }
  }
};
</script>

<style scoped>
.user-manage {
  width: 100%;
  height: 100%;
}
.new-btn {
  height: 50px;
  padding: 40px;
  text-align: left;
}
.table-box {
  padding: 20px 40px;
  height: 570px;
  overflow-y: scroll;
}
.table-box h3 {
  margin: 10px 0;
}
</style>