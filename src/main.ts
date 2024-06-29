// 引入 createApp 创建应用
import { createApp } from 'vue'
// 引入 App 根组件
import App from './App.vue'

const app = createApp(App)

// 挂载整个应用到app根元素上
app.mount('#app')
