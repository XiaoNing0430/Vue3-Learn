<template>
  <div class="count">
		<h2>当前求和为：{{ sum }}</h2>
		<select v-model.number="selectNum">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="add">加</button>
		<button @click="div">减</button>
  </div>
</template>

<script lang="ts" setup name="Count">
	import { computed, ref } from 'vue'

	const sum = ref(0)
	const selectNum = ref(1)

	function add() {
		sum.value += selectNum.value
	}

	function div() {
		sum.value -= selectNum.value
	}
</script>

<style scoped>
	.count {
		background-color: skyblue;
		padding: 10px;
		border-redius: 10px;
		box-shadow: 0 0 10px;
	}
	select, button {
		margin: 0 5px;
		height: 25px;
	}
</style>