<script setup>
import { onMounted, reactive } from 'vue'
import { supabase } from '../../clients/supabase'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/AuthStore'

const authStore = useAuthStore()

async function showCurrentUser() {
	// TODO: needs proper fix, not dirty like this...  pinia, store, login
	if (authStore.loginStatus !== true) {
		const { data } = await supabase.auth.getUser()

		authStore.email = data.user.email
		authStore.screenname = data.user.email
		authStore.username = data.user.email
		authStore.status = true
	}
	// TODO: add screen name
}

onMounted(() => {
	showCurrentUser()
})
</script>
<template>
	<h1>ProfilePreferencesPage</h1>
	<dl>
		<dt>Screen name:</dt>
		<dd>{{ authStore.screenname }}</dd>
		<dt>Email address</dt>
		<dd>{{ authStore.email }}</dd>
		<dt>Password</dt>
		<dd>****** <button>change</button></dd>
		{{ authStore.status }}
	</dl>
	<RouterLink to="logout">Log out</RouterLink>
</template>
