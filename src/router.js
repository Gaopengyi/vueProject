

import VueRouter from 'vue-router'

// 导入对应路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"


var router = new VueRouter({
	routes: [
		{ path: '/home', component: HomeContainer},
		{ path: '/member', component: MemberContainer},
		{ path: '/shopcar', component: ShopcarContainer},
		{ path: '/search', component: SearchContainer}
	],
	linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类， 默认的类为 router-link-active
});

export default router