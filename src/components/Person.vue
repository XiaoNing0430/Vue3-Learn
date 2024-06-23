<template>
  <div class = "person">
    <h1>情况四：</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车品牌：{{ person.car.brand }}</h2>
    <h2>汽车价格：{{ person.car.price }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCarBrand">修改汽车品牌</button>
    <button @click="changeCarPrice">修改汽车价格</button>
    <button @click="changeCar">修改汽车</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref, reactive, watch } from 'vue'

  // 数据
  let person = reactive({
    name: '张三',
    age: 18,
    car: {
      brand: '奔驰',
      price: 100000
    }
  })

  // 方法
  function changeName() {
    person.name += '~'
  }

  function changeAge() {
    person.age += 1
  }

  function changeCarBrand() {
    person.car.brand += '~'
  }

  function changeCarPrice() {
    person.car.price += 10000
  }

  function changeCar() {
    person.car = {
      brand: '宝马',
      price: 200000
    }
  }

  // 监视
  watch([() => person.name, () => person.car.brand], (newValue, oldValue) => {
    console.log('姓名和汽车品牌发生变化', newValue, oldValue)
  }, { deep: true })

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