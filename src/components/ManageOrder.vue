<template>
  <div class="order-manage">
    <div class="table-box">
      <h3>订单列表</h3>
      <Table :columns="orderColumns" :data="orderInfoList" stripe></Table>
    </div>
    <Modal v-model="modal" :title="titleContent" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="订单编号">
          <Input v-model="formLeft.orderinfoNumber"></Input>
        </FormItem>
        <FormItem label="收货人">
          <Input v-model="formLeft.orderinfoConsignee"></Input>
        </FormItem>
        <FormItem label="收货地址">
          <Input v-model="formLeft.orderinfoAddress"></Input>
        </FormItem>
        <FormItem label="收货人手机号">
          <Input v-model="formLeft.orderinfoConsigneephone"></Input>
        </FormItem>
        <FormItem label="订单状态">
          <Input v-model="formLeft.orderinfoStatus"></Input>
        </FormItem>
        <FormItem label="下单时间">
          <Input v-model="formLeft.orderinfoOrdertime" disabled></Input>
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
    ...mapState(["orderInfoList"])
  },
  data() {
    return {
      modal: false,
      titleContent: "",
      editId:'',
      formLeft: {
        orderinfoNumber: "",
        orderinfoConsignee: "",
        orderinfoAddress: "",
        orderinfoConsigneephone: "",
        orderinfoStatus: "",
        orderinfoOrdertime: "",
      },
      orderColumns: [
        {
          title: "订单编号",
          key: "orderinfoNumber",
          width:140,
        },
        {
          title: "收货人",
          key: "orderinfoConsignee",
          width:140,
        },
        {
          title: "收获地址",
          key: "orderinfoAddress",
          // width:250,
        },
        {
          title: "手机号",
          key: "orderinfoConsigneephone",
          width:180,
        },
        {
          title: "订单状态",
          key: "orderinfoStatus",
          width:140,
        },
        {
          title: "下单时间",
          key: "orderinfoOrdertime",
          render:(h,params)=>{
            return h("span", this.timeChange(params.row.orderinfoOrdertime));
          },
          width:250,
        },
        {
          title: "操作",
          key: "operation",
           width:200,
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
                      this.editOrder(params.row);
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
                      this.deleteConfirm(params.row.orderinfoId);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      orderList:[],
    };
  },
  created (){
    // 请求订单信息
    this.$store.dispatch("queryOrderInfo");
  },
  mounted(){
   
  },
  methods: {
    handleForm() {
      const param = {
        orderinfoNumber: this.formLeft.orderinfoNumber,
        orderinfoConsignee: this.formLeft.orderinfoConsignee,
        orderinfoAddress: this.formLeft.orderinfoAddress,
        orderinfoConsigneephone: this.formLeft.orderinfoConsigneephone,
        orderinfoStatus: this.formLeft.orderinfoStatus,
        orderinfoOrdertime: this.formLeft.orderinfoOrdertime,
      }
      if(this.titleContent === "新建订单"){
        // 添加订单信息
        this.$store.dispatch("newUserInfo",{param:param,that:this});
        this.formLeft = {}
      }else{
        // 编辑订单信息
        this.$store.dispatch("editOrderInfo",{param:param,id:this.editId,that:this});
        this.formLeft = {}
      }
    },
    cancel() {
      this.$Message.info("取消");
    },
    // addOrder() {
    //   this.modal = true;
    //   this.titleContent = "新建订单";
    // },
    editOrder(row) {
      this.modal = true;
      this.titleContent = "编辑订单信息";
      this.editId = row.orderinfoId;
      this.formLeft.orderinfoNumber = row.orderinfoNumber
      this.formLeft.orderinfoConsignee= row.orderinfoConsignee
      this.formLeft.orderinfoAddress= row.orderinfoAddress
      this.formLeft.orderinfoConsigneephone= row.orderinfoConsigneephone
      this.formLeft.orderinfoStatus= row.orderinfoStatus
      this.formLeft.orderinfoOrdertime= row.orderinfoOrdertime
    },
    deleteConfirm(id) {
      this.$Modal.confirm({
        title: "你确定删除该条订单信息吗？",
        onOk: () => {
          // 删除订单信息
          this.$store.dispatch("deleteOrderInfo",{id:id,that:this});
        },
        onCancel: () => {
          this.$Message.info("取消");
        }
      });
    },
    // 时间转换
    timeChange(time){
      var now = new Date(time)
      var year=now.getFullYear(); 
      var month=now.getMonth()+1; 
      var date=now.getDate(); 
      var hour=now.getHours(); 
      var minute=now.getMinutes(); 
      var second=now.getSeconds(); 
      return year+"年"+month+"月"+date+"日 "+hour+":"+minute+":"+second; 
    }
  }
};
</script>

<style scoped>
.order-manage {
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