import { defineStore } from "pinia";

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
});