<template>
  <div class="user-manage">
    <div class="new-btn">
      <Button type="warning" @click="modal = true">添加新用户</Button>
    </div>
    <div class="table-box">
      <h3>用户列表</h3>
      <Table :columns="columns1" :data="data1" stripe></Table>
    </div>
    <div>
      <Page :total="data1.length" page-size="6" show-elevator />
    </div>
    <Modal v-model="modal" title="新建/编辑用户" @on-ok="ok" @on-cancel="cancel">
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
                      // console.log(params);
                      // this.show(params.index);
                      this.showModal(params.index);
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
                      // this.remove(params.index);
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
    showModal(index) {
      this.modal = true;
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  background-color: orange;
}
.new-btn {
  height: 50px;
  padding: 40px;
  text-align: left;
}
.table-box {
  padding: 20px 40px;
  /* background-color: red; */
}
.table-box h3 {
  margin: 10px 0;
}
</style>