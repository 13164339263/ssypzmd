<template>
  <div class="user-index">
    <div class="scroll-container">
      <!-- 搜索框 -->
      <div class="search-box">
        <h2>商品搜索</h2>
        <div class="search">
          <Input search placeholder="搜索您先要的商品" />
        </div>
      </div>
      <!-- 推荐商品 -->
      <div class="rec-goods-box">
        <h2>推荐商品</h2>
        <div class="rec-goods">
          <div class="rec-goods-item">
            <div class="goods-img">
              <img src="../assets/goods1.jpg" alt />
            </div>
            <div class="price">价格：¥99</div>
            <div class="detail">该商品小浣熊宿舍学生电煮锅多功能家用煮面火锅小型1人2迷你小锅小电锅</div>
          </div>
          <div class="rec-goods-item">
            <div class="goods-img">
              <img src="../assets/goods1.jpg" alt />
            </div>
          </div>
          <div class="rec-goods-item">
            <div class="goods-img">
              <img src="../assets/goods1.jpg" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- 所有商品 -->
      <!-- 推荐商品 -->
      <div class="rec-goods-box">
        <h2>所有商品</h2>
        <div class="rec-goods">
          <div class="rec-goods-item">
            <div class="goods-img">
              <img src="../assets/goods1.jpg" alt />
            </div>
            <div class="price">价格：¥99</div>
            <div class="detail">该商品小浣熊宿舍学生电煮锅多功能家用煮面火锅小型1人2迷你小锅小电锅</div>
          </div>
          <div class="rec-goods-item">
            <div class="goods-img">
              <img src="../assets/goods1.jpg" alt />
            </div>
          </div>
          <div class="rec-goods-item">
            <div class="goods-img">
              <img src="../assets/goods1.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scroll-container {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 20px 50px;
}
.search-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.search {
  width: 300px;
}

h2 {
  text-align: left;
  margin: 10px 0;
}
.rec-goods-box {
  padding: 20px 0;
}
.rec-goods {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
.rec-goods-item {
  width: 300px;
  height: 400px;
  border: solid 1px orange;
  margin: 10px 30px;
  box-sizing: border-box;
}
.goods-img {
  width: 300px;
  height: 280px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.goods-img img {
  width: 260px;
  height: 260px;
}
.price {
  color: red;
  font-size: 18px;
}
.detail {
  width: 300px;
  height: 80px;
  padding: 10px 20px;
  text-align: left;
}
</style>