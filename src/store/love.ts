import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

/* 
// 配置式的写法
export const useLoveStore = defineStore("love", {
  state: () => {
    return {
      loveWords: (JSON.parse(localStorage.getItem("loveWords") as string) || []),
    };
  },
	actions: {
		async getALovwWord() {
			// 发请求，下面这行的写法是：连续解构赋值+重命名
			let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
			console.log(result)
			let { content } = result.data
			let loveWord = { id: Date.now(), content }
			this.loveWords.unshift(loveWord)
		}
	}
}); 
*/

// 组合式写法
export const useLoveStore = defineStore("love", () => {
	// loveWords相当于state里的loveWords
	const loveWords = reactive(
		JSON.parse(localStorage.getItem("loveWords") as string) || []
	)

	// getALovwWord函数相当于actions里的getALovwWord
	async function getALovwWord() {
		// 发请求，下面这行的写法是：连续解构赋值+重命名
		let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
		console.log(result)
		let { content } = result.data
		let loveWord = { id: Date.now(), content }
		loveWords.unshift(loveWord)
	}

	return {
		loveWords,
		getALovwWord
	}
}); 