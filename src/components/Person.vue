<template>
  <div class = "person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click = "changeName">修改姓名</button>
    <button @click = "changeAge">增加年龄</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    setup() {
      // 数据
      // 此时的name和age不是响应式的
      let name = '张三'
      let age = 18

      // 方法
      function changeName() {
        console.log('change name')
        // 这样修改 name，页面没有变化
        name = '李四'
        // name 改了，但 name 不是响应式的
        console.log(name)
      }

      function changeAge() {
        age++
      }

      // 将数据、方法返回，模版才能使用
      return { name, age, changeName, changeAge }

      // setup 的返回值也可以是一个渲染函数
      // return function() {
      //   return '哈哈'
      // }
    }
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