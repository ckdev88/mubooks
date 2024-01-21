<script setup>
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()
import { useRouter } from 'vue-router'
const router = useRouter()
console.log('authStore.status (dashboardPage):', authStore.status)
if (authStore.status === false) {
	// TODO: although this check is fine, it shouldnt be needed and caught in main.js, in de
	// beforeEach loop
	router.push({ name: 'login' })
}

console.log('authStore:', authStore)
console.log('authStore.status:', authStore.status)
import Reading from '../../components/dashboard/Reading.vue'
// TODO: make pinia sync with supabase auth.users
import Saved from '../../components/dashboard/Saved.vue'
import Favs from '../../components/dashboard/Favs.vue'
import Wishlist from '../../components/dashboard/Wishlist.vue'
import Tropes from '../../components/dashboard/Tropes.vue'
import Stats from '../../components/dashboard/Stats.vue'
import Explore from '../../components/dashboard/Explore.vue'
import QuoteCard from '../../components/QuoteCard.vue'
</script>
<template>
	<h1>Hi {{ authStore.screenname }},</h1>
	<p>
		MuBOOKS is your journal for your books.<br />
		Let's get started!
	</p>
	<QuoteCard />
	<Reading />
	<Saved @click="$router.push({ name: 'savedbooks' })" />
	<Favs @click="$router.push({ name: 'series' })" />
	<Wishlist @click="$router.push({ name: 'mubooks' })" />
	<Tropes @click="$router.push({ name: 'series' })" />
	<Stats @click="$router.push({ name: 'series' })" />
	<Explore @click="$router.push({ name: 'explore' })" />
</template>
<style scoped></style>
