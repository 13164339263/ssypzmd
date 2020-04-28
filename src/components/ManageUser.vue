<template>
  <div class="user-manage">
    <div class="new-btn">
      <Button type="warning" @click="addUser()">添加新用户</Button>
    </div>
    <div class="table-box">
      <h3>用户列表</h3>
      <Table :columns="columns1" :data="data1" stripe></Table>
    </div>
    <div>
      <Page :total="data1.length" page-size="6" show-elevator />
    </div>
    <Modal v-model="modal" :title="titleontent" @on-ok="ok" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="序号">
          <Input v-model="formLeft.input1"></Input>
        </FormItem>
        <FormItem label="用户名">
          <Input v-model="formLeft.input2"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
        <FormItem label="真实姓名">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
        <FormItem label="手机号">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      titleContent: "",
      formLeft: {
        input1: "",
        input2: "",
        input3: ""
      },
      columns1: [
        {
          title: "序号",
          key: "index"
        },
        {
          title: "用户名",
          key: "username"
        },
        {
          title: "密码",
          key: "password"
        },
        {
          title: "真实姓名",
          key: "name"
        },
        {
          title: "手机号",
          key: "phone"
        },
        {
          title: "邮箱",
          key: "email"
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
                      this.editUser(params.index);
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
                      this.deleteConfirm(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        },
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        },
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        },
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        },
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        },
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        },
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        },
        {
          index: 1,
          username: "tianxin",
          password: "999999",
          name: "John Brown",
          phone: "13164339130",
          email: "123@qq.com",
          operation: ""
        }
      ]
    };
  },
  methods: {
    ok() {
      this.$Message.info("新建成功");
    },
    cancel() {
      this.$Message.info("取消");
    },
    addUser() {
      this.modal = true;
      this.titleContent = "新建用户";
    },
    editUser() {
      this.modal = true;
      this.titleContent = "编辑用户信息";
    },
    deleteConfirm() {
      this.$Modal.confirm({
        title: "你确定删除该条商品信息吗？",
        onOk: () => {
          this.$Message.info("删除");
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
}
.table-box h3 {
  margin: 10px 0;
}
</style>