<template>
  <div class="priv-manage">
    <div class="new-btn">
      <Button type="warning" @click="addGoods()">添加角色</Button>
    </div>
    <div class="table-box">
      <h3>角色列表</h3>
      <Table :columns="columns" :data="data1" stripe></Table>
    </div>
    <div>
      <Page :total="data1.length" page-size="6" show-elevator />
    </div>
    <Modal v-model="modal" :title="titleContent" @on-ok="ok" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="序号">
          <Input v-model="formLeft.input1"></Input>
        </FormItem>
        <FormItem label="名称">
          <Input v-model="formLeft.input2"></Input>
        </FormItem>
        <FormItem label="价格">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
        <FormItem label="数量">
          <Input v-model="formLeft.input3"></Input>
        </FormItem>
        <FormItem label="描述">
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
      titleContent: "",
      modal: false,
      formLeft: {
        input1: "",
        input2: "",
        input3: ""
      },
      columns: [
        {
          title: "序号",
          key: "index"
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "价格",
          key: "price"
        },
        {
          title: "数量",
          key: "number"
        },
        {
          title: "描述",
          key: "descr"
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
                      this.editGoods(params.index);
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
          name: "收纳箱",
          price: "29",
          number: "100",
          descr: "目前价格为最低价"
        },
        {
          index: 2,
          name: "手账本",
          price: "50",
          number: "30",
          descr: "好看精致的手账本"
        },
        {
          index: 3,
          name: "书桌",
          price: "88",
          number: "20",
          descr: "木质书桌"
        },
        {
          index: 4,
          name: "壁纸",
          price: "10",
          number: "100",
          descr: "2元1米"
        }
      ]
    };
  },
  methods: {
    ok() {
      this.$Message.info("添加成功");
    },
    cancel() {
      this.$Message.info("取消");
    },
    addGoods() {
      this.modal = true;
      this.titleContent = "新建订单信息";
    },
    editGoods() {
      this.modal = true;
      this.titleContent = "编辑订单信息";
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
.priv-manage {
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