import { defineStore } from "pinia";
import axios from "axios";

export const useLoveStore = defineStore("love", {
  state: () => {
    return {
      loveWords: [
				{id: 1, content: "I love you"}, 
				{id: 2, content: "I miss you"}, 
				{id: 3, content: "I hate you"}
			],
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