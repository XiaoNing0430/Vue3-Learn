<template>
  <div class = "person">
    <h2>品牌：{{ car.brand }}</h2>
    <h2>价格：{{ car.price }}</h2>
    <button @click = "changeBrand">修改品牌</button>
    <button @click = "changePrice">增加价格</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref } from 'vue'

  // 数据
  let car = ref ({
    brand: '奔驰',
    price: 1000000
  })

  function changeBrand() {
    car.value.brand = '宝马'
  }

  function changePrice() {
    car.value.price += 10000
  }



</script>

<style>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 10px;
  }
  button {
    margin: 0 5px;
  }
</style>