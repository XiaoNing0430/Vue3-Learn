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