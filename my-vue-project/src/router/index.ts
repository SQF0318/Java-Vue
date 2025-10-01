
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
					path: 'detail/:id/:name',
					name: 'news-detail',
					component: Detail
				}
			]
		},
		{
			path: '/',
			name: 'default',
			component: Home
		}
	]
})
export default router