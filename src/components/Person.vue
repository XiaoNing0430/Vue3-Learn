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
    data() {
      return {
        name: '张三',
        age: 18
      }
    },
    methods: {
      changeName() {
        this.name = '李四'
      },
      changeAge() {
        this.age++
      }
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