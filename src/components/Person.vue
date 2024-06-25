<template>
  <div class = "person">
    <h2>和：{{ sum }}</h2>

    <button @click="changeSum">sum+1</button>

    <hr>
    <img v-for="(dog, index) in dogs" :key="index" :src="dog" alt="">
    <br />
    <button @click="getDog">再来一只修勾</button>
  </div>
</template>

<!-- name属性可以自定义组件的名称，方便调试 -->
<script setup lang="ts" name="Person">
  import useSum from '@/hooks/useSum';
  import useDog from '@/hooks/useDog';

  const { sum, changeSum } = useSum();
  const { dogs, getDog } = useDog();

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
  img {
    height: 200px;
    margin-right: 10px;
  }
</style>