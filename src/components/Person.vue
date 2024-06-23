<template>
  <div class = "person">
    姓：<input type="text" v-model="lastName" /> <br />
    名：<input type="text" v-model="firstName" /> <br />
    姓名：<span>{{ fullName }}</span>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import { ref, computed } from 'vue'

  const lastName = ref('')
  const firstName = ref('')

  // 只读的计算属性
  const fullName = computed(() => {
    return lastName.value + '-' + firstName.value
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