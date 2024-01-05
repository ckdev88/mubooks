<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const navExpanded = ref(false)
const router = useRouter()
const goBack = () => {
	router.go(-1)
}
const goForward = () => {
	router.go(1)
}
const goProfile = () => {
	console.log('aaaaaaaa')
}
function goSearch() {
	console.log('go zoek')
	router.push('boekzoek')
	navExpanded.value = false
}
function goLogin() {
	router.push('login')
	navExpanded.value = false
}
function toggleNav() {
	navExpanded.value = !navExpanded.value
	console.log('toggling nav')
	console.log('navExpanded:', navExpanded.value)
}
// const routes = router.getRoutes() // dit is niet nodig als onderstaand commented this.$router wordt
// console.log('router:', router.currentRoute.value.name)
// const navroutes = routes.filter((route) => route.name !== 'login')
// function filterroutes(routes) { // zelfde werking als bovenstaand
// 	return routes.path !== '/login'
// }
</script>

<template>
	<nav id="navIcons">
		<button
			@click="toggleNav"
			id="toggleNavBurger"
			:class="navExpanded ? 'expanded' : 'collapsed'"
		>
			<div class="burger">
				<div class="burgerbar bar1"></div>
				<div class="burgerbar bar2"></div>
				<div class="burgerbar bar2duplo"></div>
				<div class="burgerbar bar3"></div>
			</div>

			<!-- <span class="on">&equiv;</span><span class="off">x</span> -->
		</button>
		<div>
			<button class="toggleZoekNav" @click="goSearch">&#x1F50D;</button>
			<button class="toggleProfileNav" @click="goLogin">👤</button>
		</div>
	</nav>
	<nav
		id="nav"
		:class="navExpanded ? 'expanded' : 'collapsed'"
		:aria-expanded="navExpanded ? 'expanded' : 'collapsed'"
	>
		<ul>
			<li v-for="(route, index) in $router.getRoutes()" :key="index">
				<RouterLink :to="route.path" @click="toggleNav">{{ route.name }}</RouterLink>
			</li>
			<!-- <RouterLink v-for="(route, index) in $router.getRoutes()" :key="index" :to="route.path" -->
			<!-- 	><li>{{ route.name }}</li></RouterLink -->
			<!-- > -->
		</ul>
		<div class="history">
			<button @click="goBack">&lt;</button> <button @click="goForward">&gt;</button>
		</div>
	</nav>
</template>
