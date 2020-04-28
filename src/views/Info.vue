<template>
  <div>
    <div class="navigation">
      <p>
        <span>管理首页&nbsp;>&nbsp;应用&nbsp;>&nbsp;抢单侠>&nbsp;信贷管理>&nbsp;{{title}}</span>
      </p>
    </div>
    <div class="clearfix contentcss sales-statis">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="模板名称:" prop="templatename">
          <Input v-model="formValidate.templatename" placeholder="请输入模板名称" style="width:240px"></Input>
        </FormItem>
        <FormItem label="模板类别:" prop="templatetype">
          <Select v-model="formValidate.templatetype" placeholder="请选择模板类别" style="width:240px;">
            <Option
              v-for="item in templateList"
              :value="item.templateCode"
              :key="item.templateCode"
            >{{ item.templateName }}</Option>
          </Select>
        </FormItem>

        <FormItem label="开放范围:" prop="openrange">
          <Select v-model="formValidate.openrange" placeholder="请选择开放范围" style="width:240px;">
            <Option
              v-for="item in openrangeList"
              :value="item.openrangeCode"
              :key="item.openrangeCode"
            >{{ item.openrangeName }}</Option>
          </Select>
        </FormItem>
        <FormItem label="上传图片:" prop="productlogo">
          <Upload
            action
            :before-upload="handleUploadicon"
            :show-upload-list="false"
            :format="['jpg','jpeg','png', 'gif']"
            :on-format-error="handleFormatError1"
          >
            <img class="iconlabelUrl" :src="formValidate.labelUrl" alt />
            <Input
              v-model="formValidate.productlogo"
              disabled
              style="width: 120px;margin-top:24px"
              class="left ml5 hidden"
            ></Input>
            <!-- <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button> -->
          </Upload>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')" style="width:100px">保存</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px;width:100px">返回</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      openrangeList: [
        { openrangeCode: "1", openrangeName: "全部用户" },
        { openrangeCode: "2", openrangeName: "会员用户" }
      ],
      templateList: [
        { templateCode: "1", templateName: "海报" },
        { templateCode: "2", templateName: "名片" }
      ],
      formValidate: {
        productlogo: "",
        templatename: "",
        templatetype: "1",
        openrange: "1",
        labelUrl: require("../assets/logo.jpg")
      },
      ruleValidate: {
        templatename: [
          { required: true, message: "请输入模板名称", trigger: "change" }
        ],
        productlogo: [
          { required: true, message: "请上传图片", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleUploadicon(file) {
      let splic = file.name.split(".");
      if (
        splic[splic.length - 1] == "png" ||
        splic[splic.length - 1] == "jpg" ||
        splic[splic.length - 1] == "gif" ||
        splic[splic.length - 1] == "jpeg"
      ) {
        let formData = new FormData();
        formData.append("file", file);
        let config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        axios
          .post(BASE_URL + "/fileUpload", formData, config)
          .then(resp => {
            if (resp.code == "success") {
              this.formValidate.labelUrl = resp.data;
              this.formValidate.productlogo = resp.data;
            } else {
            }
          })
          .catch(() => {});
        return false;
      }
    },
    handleFormatError1(file) {
      this.$Message.info("图片格式不正确,请上传正确的图片格式");
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if ((this.title = "添加模板")) {
            this.$Modal.confirm({
              title: "温馨提示",
              content: "<p>确认添加该模板？</p>",
              onOk: () => {
                let data = {
                  exhibitionName: this.formValidate.templatename,
                  exhibitionType: this.formValidate.templatetype,
                  openType: this.formValidate.openrange,
                  exhibitionPath: this.formValidate.productlogo
                };
                axios
                  .post(BASE_URL + "后台保存接口", data)
                  .then(data => {
                    if (data.code == "success") {
                      this.$Message.success("添加成功");
                      this.$router.push("/exhibition");
                    } else {
                      this.$Message.error("添加失败");
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              },
              onCancel: () => {}
            });
          } else {
            this.$Modal.confirm({
              title: "温馨提示",
              content: "<p>确认修改该模板？</p>",
              onOk: () => {
                let data = {
                  exhibitionName: this.formValidate.templatename,
                  exhibitionType: this.formValidate.templatetype,
                  openType: this.formValidate.openrange,
                  exhibitionPath: this.formValidate.productlogo
                };
                axios
                  .post(BASE_URL + "后台修改接口", data)
                  .then(data => {
                    if (data.data == "success") {
                      this.$Message.success("修改成功");
                      this.$router.push("/exhibition");
                    } else {
                      this.$Message.error("修改失败");
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              },
              onCancel: () => {}
            });
          }
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
      this.$router.push("/exhibition");
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.title = "添加模板";
    } else {
      this.title = "编辑模板";
      let data = {
        exhibitionCode: this.$route.query.exhibitionCode
      };
      axios.post(BASE_URL + "/loan/exhibition/getByCode", data).then(data => {
        if (data.code == "success") {
          (this.formValidate.templatename = data.data.exhibitionName),
            (this.formValidate.templatetype = data.data.exhibitionType),
            (this.formValidate.openrange = data.data.openType),
            (this.formValidate.labelUrl = data.data.exhibitionPath),
            (this.formValidate.productlogo = data.data.exhibitionPath);
        }
      });
    }
  }
};
</script>
<style scoped>
.title {
  height: 60px;
  line-height: 60px;
  background: #fff;
  font-size: 20px;
  text-indent: 20px;
}
.ivu-form .ivu-form-item-label {
  text-align: justify !important;
}
.iconlabelUrl {
  width: 240px;
  height: 120px;
}
</style>