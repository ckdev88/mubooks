<script setup>
import { onBeforeMount } from 'vue'
import { supabase } from '../../clients/supabase'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/AuthStore'

const router = useRouter()
const authStore = useAuthStore()

async function showCurrentUser() {
	// TODO: needs proper fix, not dirty like this...  pinia, store, login
	if (authStore.status !== true) {
		const { data, error } = await supabase.auth.getUser()
		if (error) {
			router.push('login')
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
</script>
<template>
	<h1>My preferences</h1>
	<dl>
		<dt>Screen name:</dt>
		<dd>{{ authStore.screenname }}</dd>
		<dt>Email address</dt>
		<dd>{{ authStore.email }}</dd>
		<dt>Password</dt>
		<dd>****** <button>change</button></dd>
	</dl>
	<RouterLink to="logout">Log out</RouterLink>
</template>
