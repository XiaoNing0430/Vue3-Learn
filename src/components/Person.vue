<template>
  <div class = "person">
    <div>姓名：{{ name }}</div>
    <div>姓名：{{ nl }}</div>
    <div>姓名：{{ person.age }}</div>
    <div>年龄：{{ age }}</div>

    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">年龄+1</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { reactive, toRefs, toRef } from 'vue'

  let person = reactive({
    name: '张三',
    age: 18,
    sex: '男'
  })

  let { name, age } = toRefs(person)

  let nl = toRef(person, 'name')
  console.log(nl) 

  function changeName() {
    name.value += '-'
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