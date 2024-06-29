<template>
  <div class="love">
    <button @click="getLoveWord">点击获取一句情话</button>
    <ul>
      <li v-for="(loveWord, index) in loveStore.loveWords" :key="loveWord.id">
        {{ loveWord.content }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Love">
  import { reactive } from 'vue'
  import axios from 'axios';
  import { useLoveStore } from '@/store/love';

  const loveStore = useLoveStore()

  /**
   * mutation 本次修改的信息
   * state   本次修改后的状态
   */
  loveStore.$subscribe((mutation, state) => {
    console.log(mutation, state)
    localStorage.setItem('loveWords', JSON.stringify(state.loveWords))
  })

  // 方法
  async function getLoveWord() {
    loveStore.getALovwWord()
  }
</script>

<style scoped>
  .love {
    background-color: pink;
		padding: 10px;
		border-redius: 10px;
		box-shadow: 0 0 10px;  
  }
</style>