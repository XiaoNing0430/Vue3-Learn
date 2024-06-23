<template>
  <div class = "person">
    <ul>
      <li v-for="person in persons" :key="person.id">
        姓名：{{ person.name + '，年龄：' + person.age }}
      </li>
    </ul>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { type Persons } from '@/types'
  import { defineProps, withDefaults } from 'vue'


  // defineProps(['persons'])

  // 接收persons + 限制类型
  // defineProps<{persons: Persons}>()

  // 接收persons + 限制类型
  // defineProps<{persons: Persons}>()

  // 接收persons + 限制类型 + 限制必要性 + 默认值
  withDefaults(defineProps<{persons?: Persons}>(), {
    persons: () => [
      { id: '1', name: 'default1', age: 18 },
      { id: '2', name: 'default2', age: 20 },
      { id: '3', name: 'default3', age: 22 }
    ]
  })

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