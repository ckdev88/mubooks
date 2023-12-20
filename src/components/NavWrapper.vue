<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
	router.go(-1)
}
const goForward = () => {
	router.go(1)
}
// const routes = router.getRoutes() // dit is niet nodig als onderstaand commented this.$router wordt
// console.log('router:', router.currentRoute.value.name)
// const navroutes = routes.filter((route) => route.name !== 'login')
// function filterroutes(routes) { // zelfde werking als bovenstaand
// 	return routes.path !== '/login'
// }
</script>
<template>
	<nav id="nav">
		<RouterLink v-for="(route, index) in $router.getRoutes()" :key="index" :to="route.path">{{
			route.name
		}}</RouterLink>
		<button @click="goBack">&lt;</button>
		<button @click="goForward">&gt;</button>
	</nav>
</template>
