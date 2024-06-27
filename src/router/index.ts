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
		  component: () => import('@/views/News.vue'),
			// 嵌套路由
			children: [
				{
					name: 'news-detail',
					path: 'detail',
					component: () => import('@/views/NewsDetail.vue'),
					// 第一种写法：将路由收到的所有params参数作为props都传递给组件
					// props: true

					// 第二种写法：函数写法，自己决定将什么作为props传给路由组件
					props(route){
						return route.query
					}

					// 第三种写法：对象写法，自己决定将什么作为props传给路由组件
					/* props: {
						id: '111',
						title: '222',
						content: '333'
					} */
				}
			]
		},
		{
			path: '/about',
		  component: () => import('@/views/About.vue')
		}
	]
})

// 3.暴露路由器
export default router