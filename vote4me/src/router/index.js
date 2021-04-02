import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Vote from '../views/Vote.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/vote',
		name: 'Vote',
		component: Vote
	},
	{
		path: '/vote/:next',
		name: 'CastVote',
		component: Vote
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
