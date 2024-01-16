<script setup>
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()
console.log('authStore:', authStore)
import Reading from '../../components/dashboard/Reading.vue'
// TODO: make pinia sync with supabase auth.users
import Saved from '../../components/dashboard/Saved.vue'
import Favs from '../../components/dashboard/Favs.vue'
import Wishlist from '../../components/dashboard/Wishlist.vue'
import Tropes from '../../components/dashboard/Tropes.vue'
import Stats from '../../components/dashboard/Stats.vue'
import Explore from '../../components/dashboard/Explore.vue'
</script>
<template>
	<h3>Hi {{ authStore.screenname }}, welcome to MuBOOKS</h3>
	<p>
		your journal for your books.<br />
		Let's get started!
	</p>
	<br />
	<br />
	<Reading />
	<Saved @click="$router.push('series')" />
	<Favs />
	<Wishlist @click="$router.push('mubooks')" />
	<Tropes />
	<Stats />
	<Explore />
</template>
<style scoped>
h3 {
	margin-bottom: 0;
	display: inline;
}
p {
	margin-top: 0;
	display: inline;
}
</style>
