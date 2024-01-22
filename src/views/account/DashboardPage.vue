<script setup>
import { useRouter } from 'vue-router'
import { useStatusStore } from '../../stores/statusStore'
import { useAuthStore } from '../../stores/AuthStore'
import { supabase } from '../../clients/supabase'
const authStore = useAuthStore()
const router = useRouter()
const statusStore = useStatusStore()

import Reading from '../../components/dashboard/Reading.vue'
import Saved from '../../components/dashboard/Saved.vue'
import Favs from '../../components/dashboard/Favs.vue'
import Wishlist from '../../components/dashboard/Wishlist.vue'
import Tropes from '../../components/dashboard/Tropes.vue'
import Stats from '../../components/dashboard/Stats.vue'
import Explore from '../../components/dashboard/Explore.vue'
import QuoteCard from '../../components/QuoteCard.vue'

if (statusStore.status.screenname !== null && authStore.screenname === undefined) {
	let user = statusStore.status
	authStore.setStatus(true, user.screenname, user.email, user.uid)
}
</script>
<template>
	<h1>Hi {{ authStore.screenname }},</h1>
	<p>
		MuBOOKS is your journal for your books.<br />
		Let's get started!
	</p>
	<QuoteCard />
	<Reading />
	<Saved />
	<Favs @click="$router.push({ name: 'savedbooks' })" />
	<Wishlist @click="$router.push({ name: 'savedbooks' })" />
	<!-- series, mubooks, wishlist -->
	<Tropes @click="$router.push({ name: 'savedbooks' })" />
	<Stats @click="$router.push({ name: 'savedbooks' })" />
	<Explore @click="$router.push({ name: 'explore' })" />
</template>
<style scoped></style>
