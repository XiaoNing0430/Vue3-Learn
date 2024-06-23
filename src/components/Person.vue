<template>
  <div class = "person">

  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { reactive } from 'vue'
  import { type Person, type Persons } from '@/types'

  let person:Person = reactive({
    id: '001',
    name: '张三',
    age: 18
  })

  let persons:Persons = reactive([
    {
      id: '001',
      name: '张三',
      age: 18
    },
    {
      id: '002',
      name: '李四',
      age: 20
    },
    {
      id: '003',
      name: '王五',
      age: 22
    }
  ])

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