<template>
  <div class = "person">
    <h2>和：{{ sum }}</h2>

    <button @click="changeSum">sum+1</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

  // 数据
  let sum = ref(0);

  // 方法
  function changeSum() {
    sum.value++;
  }

  // 创建
  console.log('创建');

  // 挂载
  onBeforeMount(() => {
    console.log('挂载前');
  });

  onMounted(() => {
    console.log('挂载后');
  });

  // 更新
  onBeforeUpdate(() => {
    console.log('更新前');
  });

  // 卸载
  onBeforeUnmount(() => {
    console.log('卸载前');
  });

  onUnmounted(() => {
    console.log('卸载后');
  });

  onUpdated(() => {
    console.log('更新后');
  });

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