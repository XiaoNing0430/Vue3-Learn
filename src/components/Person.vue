<template>
  <div class = "person">
    <h1>中国</h1>
    <h2 ref="title2">上海</h2>
    <h3>浦东新区</h3>

    <button @click="getH2">获取h2</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref } from 'vue'

  // 用于存储ref标记的内容
  let title2 = ref()

  function getH2() {
    console.log(title2.value)
  }

</script>

<style scoped>
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