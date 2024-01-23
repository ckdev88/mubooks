<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { supabase } from '../../clients/supabase'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useAuthStore } from '../../stores/AuthStore'
import useCardRotate from '../../composables/useCardRotate'
const authStore = useAuthStore()

async function showCurrentUser() {
	// TODO: needs proper fix, not dirty like this...  pinia, store, login
	if (authStore.status !== true) {
		const { data, error } = await supabase.auth.getUser()
		if (error) {
			router.push({ name: 'login' })
			console.log('error:', error)
		} else {
			authStore.email = data.user.email
			authStore.screenname = data.user.user_metadata.screenname
			authStore.username = data.user.email
			authStore.status = true
			authStore.uid = data.user.id
		}
	}
	// TODO: add screen name
	// TODO: add possibilities to modify data
}
onBeforeMount(() => {
	showCurrentUser()
})
onMounted(() => {
	console.log('mounted', authStore.username)
})
</script>
<template>
	<div class="card">
		<header>My account</header>
		<main>
			<dl>
				<dt>Screen name:</dt>
				<dd>{{ authStore.screenname }}</dd>
				<dt>Email address</dt>
				<dd>{{ authStore.email }}</dd>
				<dt>Password</dt>
				<dd>******</dd>
			</dl>
		</main>
		<footer>
			<button @click="useCardRotate">change</button>
		</footer>
	</div>
</template>
