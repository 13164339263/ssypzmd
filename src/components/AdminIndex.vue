<template>
  <div class="admin-index">
    <h1>管理员使用说明手册</h1>
    <div class="content">
    <ul>
      <li>
      1.用户管理功能	管理用户的相关信息，一般情况下用户可以对自己的信息进行修改，特殊需要时才用到管理员对用户的管理。
      </li>
      <li>
      2.订单管理功能	展示所有订单信息，对订单进行更新和删除。
      </li>
      <li>
      3.商品管理功能	展示所有商品，对商品进行增添，商品信息的更新和删除。
      </li>
      <li>
      4.物流管理功能	展示用户订单的物流信息，对物流信息进行更新和删除
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.admin-index {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
h1 {
  text-align: center;
  padding: 40px 0;
}
.content {
  padding: 0px 40px;
  font-size: 20px;
  text-align: left;
  text-indent: 2em;
}
.title{
  text-align: center;
}
.content ul{
  list-style: none;
  margin: 0;
  padding: 10px;
}
.content ul li {
  padding: 10px;
}
</style>