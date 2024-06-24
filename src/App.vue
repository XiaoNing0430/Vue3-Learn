<template>
  <Person v-if="isShow" />

  <button @click="isShow = !isShow">
    {{ isShow ? '隐藏' : '显示' }}
  </button>
</template>

<script lang="ts" setup name="App">
  import { ref } from 'vue'
  import Person from '@/components/Person.vue'

  let isShow = ref(true)

</script>

<style>

</style>