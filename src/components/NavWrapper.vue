<script setup>
import { reactive, ref, onMounted, onUpdated } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '../router'
import { supabase } from '../clients/supabase'
import PostsPage from '../views/PostsPage.vue'

// TODO: nav & nav1 super dirty, make it nice, also in css #nav #nav1
const nav0Expanded = ref(false)
const nav1Expanded = ref(false)
const router = useRouter()
const nav = (nr) => router.options.routes[nr].children
const state = reactive({
	isLoggedin: false
})

const goBack = () => {
	router.go(-1)
}
const goForward = () => {
	router.go(1)
}
function goSearch() {
	console.log('go zoek')
	router.push('boekzoek')
	nav0Expanded.value = false
	nav1Expanded.value = false
}
function toggleNav() {
	nav0Expanded.value = !nav0Expanded.value
	nav1Expanded.value = false
}
function toggleNav1() {
	nav1Expanded.value = !nav1Expanded.value
	nav0Expanded.value = false
}
let nav1loggedin = nav(1).filter((item) => {
	item.meta.requiresAuth === true || item.meta.requiresNoAuth === false
})
let nav1notloggedin = nav(1).filter((item) => {
	item.meta.requiresNoAuth === true || item.meta.requiresAuth === false
})
for (let i = 0; i < nav(1).length; i++) {
	if (nav(1)[i].meta.requiresAuth !== undefined) {
		console.log(nav(1)[i])
		if (nav(1)[i].meta.requiresAuth === true) {
			nav1loggedin[i] = nav(1)[i]
		} else if (nav(1)[i].meta.requiresNoAuth === true) nav1notloggedin[i] = nav(1)[i]
		else {
			nav1loggedin[i] = nav(1)[i]
			nav1notloggedin[i] = nav(1)[i]
		}
	}
	// console.log('A', nav(1)[i].meta.requiresAuth)
}
console.log('nav1loggedin:', nav1loggedin)
console.log('nav1notloggedin:', nav1notloggedin)

async function checkIsLoggedin() {
	const { data } = await supabase.auth.getUser()

	console.log('data (profilePreferencesPage):', data.user)
	if (data.user === null) state.isLoggedin = false
	else state.isLoggedin = true
}
onMounted(() => {
	checkIsLoggedin()
})
onUpdated(() => {
	checkIsLoggedin()
})

// const accountNav = r1c.filter((child) => child.meta.requiresAuth === true)
// console.log('accountNav:', accountNav)
</script>

<template>
	<nav id="navIcons">
		<button
			@click="toggleNav"
			id="toggleNavBurger"
			:class="nav0Expanded ? 'expanded' : 'collapsed'"
		>
			<div class="burger">
				<div class="burgerbar bar1"></div>
				<div class="burgerbar bar2"></div>
				<div class="burgerbar bar2duplo"></div>
				<div class="burgerbar bar3"></div>
			</div>
		</button>
		<div>
			<button class="toggleZoekNav" @click="goSearch">
				<div class="zoekIcon">
					<div class="glass"></div>
					<div class="glassOuter"></div>
					<div class="stick"></div>
				</div>
			</button>
			<button
				id="toggleNavProfile"
				@click="toggleNav1"
				:class="nav1Expanded ? 'expanded' : 'collapsed'"
			>
				<div class="profileIcon">
					<div class="profileIcon-head"></div>
					<div class="profileIcon-body"></div>
				</div>
			</button>
		</div>
	</nav>
	<nav
		id="nav"
		:class="nav0Expanded ? 'expanded' : 'collapsed'"
		:aria-expanded="nav0Expanded ? 'expanded' : 'collapsed'"
	>
		<ul>
			<li v-for="(route, index) in nav(0)" :key="index">
				<RouterLink :to="route.path" @click="toggleNav">{{ route.name }}</RouterLink>
			</li>
		</ul>
		<div class="history">
			<button @click="goBack">&lt;</button> <button @click="goForward">&gt;</button>
		</div>
	</nav>

	<nav
		id="nav1"
		:class="nav1Expanded ? 'expanded' : 'collapsed'"
		:aria-expanded="nav1Expanded ? 'expanded' : 'collapsed'"
	>
		<ul>
			<li
				v-if="state.isLoggedin === true"
				v-for="(route, index) in nav(1).filter(
					(item) => item.meta.requiresAuth === true || item.meta.requiresNoAuth === false
				)"
				:key="index"
			>
				<RouterLink :to="route.path" @click="toggleNav1">{{ route.name }}</RouterLink>
			</li>
			<li
				v-if="state.isLoggedin === false"
				v-for="(route, index) in nav(1).filter(
					(item) => item.meta.requiresAuth === false || item.meta.requiresNoAuth === true
				)"
				:key="index"
			>
				<RouterLink :to="route.path" @click="toggleNav1">{{ route.name }}</RouterLink>
			</li>
		</ul>
	</nav>
</template>
