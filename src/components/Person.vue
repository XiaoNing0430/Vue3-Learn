<template>
  <div class = "person">
    <h2>一辆 {{ car.name }} 车，价值 {{ car.price }} 元</h2>
    <button @click="changeCarPrice">加价</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { reactive } from 'vue'

  // 数据
  let car = reactive ({
    name: 'BMW',
    price: 1000000,
    color: 'black'
  })

  // 方法
  function changeCarPrice() {
    car.price += 100000
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