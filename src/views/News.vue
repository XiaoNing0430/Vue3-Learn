<template>
  <div class="news">
    <ul>
      <li v-for="item in newList" :key="item.id">
        <!-- 第一种写法 -->
        <!-- <router-link :to="`/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{{ item.title }}</router-link> -->

        <button @click="showDetail(item)">查看详情</button>

        <!-- 第二种写法 -->
        <router-link 
          :to="{path: '/news/detail', query: {id: item.id, title: item.title, content: item.content}}"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <div class="news-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup name="News">
  import { reactive } from 'vue'
  import { RouterView, RouterLink, useRouter } from 'vue-router';

  const router = useRouter()

  const newList = reactive([
    {'id': '001', 'title': '新闻1', 'content': '新闻1内容'},
    {'id': '002', 'title': '新闻2', 'content': '新闻2内容'},
    {'id': '003', 'title': '新闻3', 'content': '新闻3内容'}
  ])

  // 方法
  function showDetail(record) {
    router.push({
      path: '/news/detail',
      query: {
        id: record.id,
        title: record.title,
        content: record.content
      }
    })
  }
</script>

<style scoped>
  /* 新闻 */
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>