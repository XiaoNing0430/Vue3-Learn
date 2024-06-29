import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
	// 真正存储数据的地方
  state: () => {
    return {
      count: 0
    }
  },
	// 放的是一个一个方法用于响应组件中的动作
	actions: {
		increment(n: number) {
			this.count + n
		}
	}
})