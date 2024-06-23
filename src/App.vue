<template>
  <Person :persons="persons" />
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import { reactive } from 'vue';
  import { type Persons } from '@/types';

  let persons = reactive<Persons>([
    {
      id: '1',
      name: '张三',
      age: 18
    },
    {
      id: '2',
      name: '李四',
      age: 20
    },
    {
      id: '3',
      name: '王五',
      age: 22
    }
  ])
</script>

<style>

</style>