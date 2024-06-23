<template>
  <div class = "person">
    <h1>情况一：监视 ref 定义的基本类型</h1>
    <h2>当前和为：{{ sum }}</h2>
    <button @click="changeSum">sum + 1</button>
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