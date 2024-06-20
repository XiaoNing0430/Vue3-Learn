<template>
  <div class = "person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click = "changeName">修改姓名</button>
    <button @click = "changeAge">增加年龄</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref } from 'vue'

  // 数据
  // 此时的name和age是一个RefImpl的实例对象，简称ref对象，它们的value属性是响应式的。
  let name = ref('张三')
  let age = ref(18)

  // 方法
  function changeName() {
    console.log('change name')
    // // JS中操作ref对象时候需要.value
    name.value = '李四'
  }

  function changeAge() {
    age.value++
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