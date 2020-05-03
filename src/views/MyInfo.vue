<template>
  <div class="my-info">
    <div class="back">
      <router-link to="/userhome">
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
          <Input :disabled="!isEdit" class="input" required placeholder="请输入手机号"></Input>
        </FormItem>
        <FormItem label="真实姓名:">
          <Input :disabled="!isEdit" required placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="手机号:">
          <Input :disabled="!isEdit" required placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="密码:">
          <Input :disabled="!isEdit" required placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="收获地址:">
          <Input :disabled="!isEdit" required placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="上传图片:">
          <Tooltip content="点击图片进行图片上传">
            <Upload
              :disabled="!isEdit"
              action
              :before-upload="handleUploadicon"
              :show-upload-list="false"
              :format="['jpg','jpeg','png', 'gif']"
              :on-format-error="handleFormatError1"
            >
              <img class="iconlabelUrl" :src="formValidate.labelUrl" alt />
              <!-- <Input
              v-model="formValidate.productlogo"
              disabled
              style="width: 120px;margin-top:24px"
              class="left ml5 hidden"
              value="点击上传图片"
              ></Input>-->
            </Upload>
          </Tooltip>
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
      isEdit: false,
      formValidate: {
        productlogo: "",
        templatename: "",
        templatetype: "1",
        openrange: "1",
        labelUrl: require("../assets/logo.jpg")
      }
    };
  },
  methods: {
    handleUploadicon(file) {
      let BASE_URL = "../assets/";
      let splic = file.name.split(".");
      if (
        splic[splic.length - 1] == "png" ||
        splic[splic.length - 1] == "jpg" ||
        splic[splic.length - 1] == "gif" ||
        splic[splic.length - 1] == "jpeg"
      ) {
        let formData = new FormData();
        console.log(formData);
        formData.append("file", file);
        let config = {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        };
        console.log(formData.get("file"));
        axios
          .post(BASE_URL + "/fileUpload", formData, config)
          .then(res => {
            if (res.code == "success") {
              this.formValidate.labelUrl = res.data;
              this.formValidate.productlogo = res.data;
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
    editBtn() {
      this.isEdit = true;
    },
    saveBtn() {
      this.isEdit = false;
      // 发起请求
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
  height: 600px;
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