import { reactive } from 'vue'
import axios from 'axios'

export default function (){
	// 数据
	let dogs = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_209.jpg'
  ])
  
  // 方法
  async function getDog() {
    try {      
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogs.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

	return {dogs, getDog}
}