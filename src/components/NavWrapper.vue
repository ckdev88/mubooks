<script setup>
import { ref, onMounted, onUpdated, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/AuthStore'
const authStore = useAuthStore()

import { useStatusStore } from '../stores/statusStore'
const statusStore = useStatusStore()

if (statusStore.status.loggedin === true) {
	authStore.status = statusStore.status.loggedin
	authStore.email = statusStore.status.email
	authStore.screenname = statusStore.status.screenname
	authStore.username = statusStore.status.username
	authStore.uid = statusStore.status.uid
}

function goSearch() {
	router.push({ name: 'search' })
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
// TODO: nav & nav1 super dirty, make it nice, also in css #nav #nav1
const nav0Expanded = ref(false)
const nav1Expanded = ref(false)
const router = useRouter()

const nav = (nr) => router.options.routes[nr].children
// const nav0 = nav(0).filter((item) => item.meta.includeNav === true)
let nav0
let nav1
function populateNav() {
	// console.log('authStore:', authStore)
	if (authStore.status === true) {
		nav0 = nav(0).filter(
			(item) => item.meta.includeNav === true && item.meta.requiresAuth === true
		)
	} else {
		nav0 = nav(0).filter(
			(item) =>
				item.meta.includeNav === true &&
				(item.meta.requiresAuth === false || item.meta.requiresNoAuth === true)
		)
	}
	if (authStore.status === true) {
		nav1 = nav(1).filter(
			(item) =>
				item.meta.includeNav === true &&
				item.meta.requiresAuth === true &&
				item.meta.requiresNoAuth === false
		)
	} else {
		nav1 = nav(1).filter(
			(item) =>
				item.meta.includeNav === true &&
				item.meta.requiresAuth === false &&
				item.meta.requiresNoAuth === true
		)
	}
}
onMounted(populateNav)
watch(useAuthStore(), populateNav)
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
		id="nav0"
		class="nav-collapsable"
		:class="nav0Expanded ? 'expanded' : 'collapsed'"
		:aria-expanded="nav0Expanded ? 'expanded' : 'collapsed'"
	>
		<ul>
			<li v-for="(route, index) in nav0" :key="index">
				<RouterLink :to="route.path" @click="toggleNav">{{
					route.meta.navName ? route.meta.navName : route.name
				}}</RouterLink>
			</li>
		</ul>
		<div class="history">
			<button @click="router.go(-1)">&lt;</button>
			<button @click="router.go(1)">&gt;</button>
		</div>
	</nav>

	<nav
		id="nav1"
		class="nav-collapsable"
		:class="nav1Expanded ? 'expanded' : 'collapsed'"
		:aria-expanded="nav1Expanded ? 'expanded' : 'collapsed'"
	>
		<ul>
			<li v-for="(route, index) in nav1" :key="index">
				<RouterLink :to="route.path" @click="toggleNav1">{{ route.name }}</RouterLink>
			</li>
		</ul>
	</nav>
</template>
