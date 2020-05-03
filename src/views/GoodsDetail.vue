<template>
  <div class="goods-detail">
    <div class="back">
      <router-link to="/userhome">
        <Button type="primary">返回</Button>
      </router-link>
    </div>
    <h2>商品详情</h2>
    <div class="detail-box">
      <div class="goods-img-box">
        <img src="../assets/avatar1.jpg" alt />
      </div>
      <div class="goods-info-box">
        <div class="detail-item">
          <div class="detail-item-label">商品名：</div>
          <div class="detail-item-info">简易收纳盒</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">商品价格：</div>
          <div class="detail-item-info">¥100</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">商品描述：</div>
          <div class="detail-item-info">这是一款简约款的收纳盒</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">已销售数量：</div>
          <div class="detail-item-info">100</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-label">当前库存：</div>
          <div class="detail-item-info">122</div>
        </div>
        <div class="purchase-box">
          <div class="purchase">立即购买</div>
          <div class="add-car">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {}
};
</script>

<style scoped>
.goods-detail {
  width: 100vw;
  height: 100vh;
}
.back {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
}
h2 {
  padding: 0 120px;
  text-align: left;
}
.detail-box {
  display: flex;
  padding: 20px 100px;
}

.goods-img-box {
  width: 400px;
  height: 500px;
  border: solid 1px #000;
  margin-left: 20px;
}
.goods-img-box img {
  width: 360px;
  height: 360px;
  margin: 20px;
}
.goods-info-box {
  width: 500px;
  height: 500px;
  border: solid 1px #000;
}
.detail-item {
  display: flex;
  height: 60px;
  font-size: 16px;
  padding: 10px 20px;
  border: solid 1px #f3f3f3;
}
.detail-item-label {
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: left;
}
.detail-item-info {
  width: 360px;
  height: 60px;
  line-height: 60px;
  text-align: left;
}
.purchase-box {
  display: flex;
  justify-content: space-around;
  height: 120px;
  align-items: center;
}
.purchase {
  width: 180px;
  height: 40px;
  background-color: #ffecec;
  color: #ff0002;
  line-height: 40px;
  border-radius: 5px;
  border: solid 1px #ff0002;
}
.add-car {
  width: 180px;
  height: 40px;
  background-color: #ff0002;
  color: #ffffff;
  line-height: 40px;
  border-radius: 5px;
}
</style>