<template>
  <div class="goods-manage">
    <div class="new-btn">
      <Button type="warning" @click="addGoods()">添加新商品</Button>
    </div>
    <div class="table-box">
      <h3>商品列表</h3>
      <Table :columns="orderColumns" :data="goodsInfoList" stripe></Table>
    </div>
    <Modal v-model="modal" :title="titleContent" @on-ok="handleForm()" @on-cancel="cancel">
      <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="商品名称">
          <Input v-model="formLeft.goodsinfoName"></Input>
        </FormItem>
        <FormItem label="商品描述">
          <Input v-model="formLeft.goodsinfoDescription"></Input>
        </FormItem>
        <FormItem label="商品数量">
          <Input v-model="formLeft.goodsinfoAmount"></Input>
        </FormItem>
        <FormItem label="已售数量">
          <Input v-model="formLeft.goodsinfoSellamount"></Input>
        </FormItem>
        <FormItem label="商品价格">
          <Input v-model="formLeft.goodsinfoPrice"></Input>
        </FormItem>
      </Form>
      <form action="" method="post" enctype="multipart/form-data" v-show="isShow">
          <span>商品图片</span>
          <input type="file" name="file" @change="preview($event)">
      </form>
    </Modal>
  </div>
</template>

<script>
import axios from "axios"
import {mapState} from "vuex"
import moment from 'moment'
export default {
  computed:{
    ...mapState(["goodsInfoList"])
  },
  data() {
    return {
      isShow:false,
      modal: false,
      titleContent: "",
      editId:'',
      fileName:'',
      formLeft: {
        goodsinfoName: "",
        goodsinfoDescription: "",
        goodsinfoAmount: "",
        goodsinfoSellamount: "",
        goodsinfoPrice: "",
        goodsinfoOnlinetime: "",
      },
      orderColumns: [
        {
          title: "商品名称",
          key: "goodsinfoName"
        },
        {
          title: "商品描述",
          key: "goodsinfoDescription"
        },
        {
          title: "商品数量",
          key: "goodsinfoAmount"
        },
        {
          title: "已售数量",
          key: "goodsinfoSellamount"
        },      
        {
          title: "商品价格",
          key: "goodsinfoPrice"
        },
        {
          title: "上线时间",
          key: "goodsinfoOnlinetime",
           render:(h,params)=>{
            return h("span", this.timeChange(params.row.goodsinfoOnlinetime));
          },
          width:200
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
                      this.editGoods(params.row);
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
                      this.deleteConfirm(params.row.goodsinfoId);
                    }
                  }
                },
                "删除"
              ),
            ]);
          }
        }
      ],
      orderList:[],
    };
  },
  created (){
    // 请求订单信息
    this.$store.dispatch("queryGoodsInfo");
  },
  mounted(){
   
  },
  methods: {
    handleForm() {
      const formData = new FormData();
      formData.append('file',this.fileName)
      let time = new Date()
      let date = moment(time).format('YYYY-MM-DD h:mm:ss')
      const param = {
        goodsinfoName:this.formLeft.goodsinfoName,
        goodsinfoDescription:this.formLeft.goodsinfoDescription,
        goodsinfoAmount:this.formLeft.goodsinfoAmount,
        goodsinfoSellamount:this.formLeft.goodsinfoSellamount,
        goodsinfoPrice:this.formLeft.goodsinfoPrice,
      }
      formData.append('goodsinfoName', this.formLeft.goodsinfoName)
      formData.append('goodsinfoDescription',this.formLeft.goodsinfoDescription)
      formData.append('goodsinfoAmount',this.formLeft.goodsinfoAmount)
      formData.append('goodsinfoSellamount',this.formLeft.goodsinfoSellamount)
      formData.append('goodsinfoPrice',this.formLeft.goodsinfoPrice)
      if(this.titleContent === "新建商品"){
        // 添加商品信息
        this.$store.dispatch("newGoodsInfo",formData);
      }else{
        // 编辑商品信息
        this.$store.dispatch("editGoodsInfo",{param:param,id:this.editId,that:this});
      }
    },
    cancel() {
      this.$Message.info("取消");
    },
    addGoods() {
      this.modal = true;
      this.titleContent = "新建商品";
      this.isShow = true;
    },
    editGoods(row) {
      this.modal = true;
      this.titleContent = "编辑商品信息";
      this.isShow = false;
      this.editId = row.goodsinfoId;
      this.formLeft.goodsinfoName = row.goodsinfoName
      this.formLeft.goodsinfoDescription= row.goodsinfoDescription
      this.formLeft.goodsinfoAmount= row.goodsinfoAmount
      this.formLeft.goodsinfoSellamount= row.goodsinfoSellamount
      this.formLeft.goodsinfoPrice= row.goodsinfoPrice
    },
    deleteConfirm(id) {
      this.$Modal.confirm({
        title: "你确定删除该条商品信息吗？",
        onOk: () => {
          // 删除订单信息
          this.$store.dispatch("deleteGoodsInfo",{id:id,that:this});
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
    },
    preview(event){
      this.fileName = event.target.files[0]
    }
  }
};
</script>

<style scoped>
.goods-manage {
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