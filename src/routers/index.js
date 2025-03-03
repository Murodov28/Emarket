import { createRouter,createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
export const routers = createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/emarket',name:'Home',component:Home},
		{path:'/emarket/Katalog',name:'Katalog',component:() => import('../views/Katalog.vue') },
		{path:'/emarket/Korzina',name:'Korzina',component:() => import('../views/Korzina.vue') },
		{path:'/emarket/AboutMe',name:'AboutMe',component:() => import('../views/AboutMe.vue') },
		{path:'/emarket/Contact',name:'Contact',component:() => import('../views/Contact.vue') },
	]
})