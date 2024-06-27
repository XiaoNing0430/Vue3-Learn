<template>
  <div class="home">
    首页
  </div>
</template>

<script lang="ts" setup name="Home">
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  onMounted(() => {
    setTimeout(() => {
      router.push('/news')
    }, 3000)
  })
</script>

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>