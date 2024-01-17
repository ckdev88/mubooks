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

async function handleSubmit(e) {
	console.log(e)
	useCardRotate()
}
onBeforeMount(() => {
	showCurrentUser()
})
onMounted(() => {
	console.log(authStore.username)
})
</script>
<template>
	<div class="card">
		<header>My account</header>
		<main>
			<form @submit.prevent="handleSubmit">
				<label>Screen name</label>
				<input type="text" id="account-screenname" v-model="authStore.screenname" />
				<label for="account-email">Email address</label>
				<input type="email" :value="authStore.email" id="account-email" />
				<label for="account-password">Password (leave empty to keep current)</label>
				<input type="password" value="" id="account-password" />
				<button>Save and return</button>
			</form>
		</main>
		<footer>
			<a @click="useCardRotate">Return without saving</a>
		</footer>
	</div>
</template>
