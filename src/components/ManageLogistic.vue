<template>
  <div class="logistic-manage">
    <div class="table-box">
      <h3>物流列表</h3>
      <Table :columns="logColumns" :data="logInfoList" stripe></Table>
    </div>
    <Modal v-model="modal" :title="titleContent" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="120">
        <FormItem label="地址">
          <Input v-model="formLeft.logisticsLocation"></Input>
        </FormItem>
        <FormItem label="物流单号">
          <Input v-model="formLeft.logisticsNumber"></Input>
        </FormItem>
        <FormItem label="快递员联系方式">
          <Input v-model="formLeft.logisticsPostmanphone"></Input>
        </FormItem>
        <FormItem label="物流状态">
          <Input v-model="formLeft.logisticsStatus"></Input>
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
    ...mapState(["logInfoList"])
  },
  data() {
    return {
      modal: false,
      titleContent: "",
      editId:'',
      formLeft: {
        logisticsLocation: "",
        logisticsNumber: "",
        logisticsPostmanphone: "",
        logisticsStatus: "",
      },
      logColumns: [
        {
          title: "地址",
          key: "logisticsLocation"
        },
        {
          title: "物流单号",
          key: "logisticsNumber"
        },
        {
          title: "快递员联系方式",
          key: "logisticsPostmanphone"
        },
        {
          title: "物流状态",
          key: "logisticsStatus"
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
                      this.deleteConfirm(params.row.logisticsId);
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
    this.$store.dispatch("queryLogInfo");
  },
  mounted(){
   
  },
  methods: {
    handleForm() {
      const param = {
        logisticsLocation: this.formLeft.logisticsLocation,
        logisticsNumber: this.formLeft.logisticsNumber,
        logisticsPostmanphone: this.formLeft.logisticsPostmanphone,
        logisticsStatus: this.formLeft.logisticsStatus,
      }
      if(this.titleContent === "新建物流信息"){
        // 添加订单信息
        // this.$store.dispatch("newUserInfo",{param:param,that:this});
      }else{
        // 编辑订单信息
        this.$store.dispatch("editLogInfo",{param:param,id:this.editId,that:this});
      }
    },
    cancel() {
      this.$Message.info("取消");
    },
    editOrder(row) {
      this.modal = true;
      this.titleContent = "编辑物流信息";
      this.editId = row.logisticsId;
      this.formLeft.logisticsLocation = row.logisticsLocation
      this.formLeft.logisticsNumber= row.logisticsNumber
      this.formLeft.logisticsPostmanphone= row.logisticsPostmanphone
      this.formLeft.logisticsStatus= row.logisticsStatus
    },
    deleteConfirm(id) {
      this.$Modal.confirm({
        title: "你确定删除该条订单信息吗？",
        onOk: () => {
          // 删除订单信息
          this.$store.dispatch("deleteLogInfo",{id:id,that:this});
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
.logistic-manage {
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