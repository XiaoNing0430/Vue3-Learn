import { defineStore } from "pinia";
import axios from "axios";

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