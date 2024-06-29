// 引入 createApp 创建应用
import { createApp } from 'vue'
// 引入 App 根组件
import App from './App.vue'
// 1、引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)

// 2、创建pinia实例
const pinia = createPinia()
// 3、挂载pinia
app.use(pinia)

// 挂载整个应用到app根元素上
app.mount('#app')
