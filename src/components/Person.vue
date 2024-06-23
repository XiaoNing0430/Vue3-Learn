<template>
  <div class = "person">
    <h2>水温：{{ temperature }}</h2>
    <h2>水位：{{ height }}cm</h2>
    <button @click="addTemperature">水温+10</button>
    <button @click="addHeight">水位+10</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref, watch, watchEffect } from 'vue'

  // 数据
  let temperature = ref(0)
  let height = ref(0)

  // 方法
  function addTemperature() {
    temperature.value += 10
  }

  function addHeight() {
    height.value += 10
  }

  // 监视
  /* watch([temperature, height], (newValue) => {
    console.log('temperature、height变化了', newValue)
    let [newTemperature, newHeight] = newValue
    if(newTemperature >= 60 || newHeight >= 80) {
      alert('报警')
    }
  }) */

  watchEffect(() => {
    if(temperature.value >= 60 || height.value >= 80) {
      alert('报警')
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