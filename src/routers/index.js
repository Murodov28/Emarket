import { createRouter,createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
export const routers = createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/',name:'Home',component:Home},
		{path:'/Katalog',name:'Katalog',component:() => import('../views/Katalog.vue') },
		{path:'/Korzina',name:'Korzina',component:() => import('../views/Korzina.vue') },
		{path:'/AboutMe',name:'AboutMe',component:() => import('../views/AboutMe.vue') },
		{path:'/Contact',name:'Contact',component:() => import('../views/Contact.vue') },
	]
})