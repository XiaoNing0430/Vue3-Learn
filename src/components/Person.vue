<template>
  <div class = "person">
    <h1>情况一：监视 ref 定义的基本类型</h1>
    <h2>当前和为：{{ sum }}</h2>
    <button @click="changeSum">sum + 1</button>

    <hr />

    <h1>情况二：监视 ref 定义的对象类型数据</h1>
    <h2>当前姓名：{{ person.name }}</h2>
    <h2>当前年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="changePerson">修改person</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref, watch } from 'vue'

  // 数据
  const sum = ref(0)

  // 方法
  const changeSum = () => {
    sum.value += 1
  }

  // 监视
  const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log('sum变化了', newValue, oldValue)
    if (newValue > 10) {
      stopWatch()
    }
  })

  /* 监视对象类型数据 */

  // 数据
  const person = ref({
    name: '张三',
    age: 18,
  })

  // 方法
  function changeName() {
    person.value.name += '~'
  }

  function changeAge() {
    person.value.age += 1
  }

  function changePerson() {
    person.value = {
      name: '李四',
      age: 20,
    }
  }

  // 监视。监视的是对象的引用地址。若想监视对象内部的属性，需要使用deep选项
  watch(
    // 监视的数据
    person, 
    // 回调函数
    (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue)
    }, 
    // 配置对象
    { 
      // 开启深度监视
      deep: true 
    }
  )

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