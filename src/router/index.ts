// 创建一个路由器，并暴露出去
// 1. 引入 createRouter
import { createRouter, createWebHistory } from "vue-router"

// 2.创建路由器
const router = createRouter({
	// 路由器的工作模式
	history: createWebHistory(),
	// 一个一个路由规则
  routes: [
		{
			name: 'home',
			path: '/home',
		  component: () => import('@/views/Home.vue')
		},
		{
			name: 'news',
			path: '/news',
		  component: () => import('@/views/News.vue')
		},
		{
			path: '/about',
		  component: () => import('@/views/About.vue')
		}
	]
})

// 3.暴露路由器
export default router