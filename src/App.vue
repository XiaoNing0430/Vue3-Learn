<template>
  <div class = "app">
    <h1>你好啊</h1>
    <Person />
  </div>
</template>

<script lang="ts">
  import Person from './components/Person.vue'

  export default {
    name: 'App',
    components: {
      // 注册组件
      Person
    }
  }
</script>

<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 10px;
  }
</style>