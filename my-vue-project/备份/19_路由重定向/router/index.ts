
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/news',
			name: 'news',
			component: News,
			children: [
				{
					name: 'news-detail',
					path: 'detail/:id/:name',  //只有params参数才能用这种方式传参
					component: Detail,
					// props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
					// props:{a:1,b:2,c:3}, 

					// props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
					 props:true

					// props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
					// props(route) {
					// 	console.log(route) 
					// 	return route.query
					// }
				}
			]
		},
		{
			path: '/',
			name: 'default',
			redirect: '/home'
		}
	]
})
export default router