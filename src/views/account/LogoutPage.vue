<script setup>
import { supabase } from '../../clients/supabase'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()

const router = useRouter()
let errorMsg = ref('Just one moment...')

async function logoutAccount() {
	console.log('logout account')

	const { error } = await supabase.auth.signOut()
	if (error !== null) {
		errorMsg.value = error
		return false
	} else {
		console.log('loggingout "logoutpage.vue"')
		authStore.setLoginStatus(false) // TODO: vervangen door doLogout, cleanup
		authStore.doLogout()
		return true
	}
}
onMounted(async () => {
	await logoutAccount()
	router.push({ name: 'login' })
})
</script>
<template>
	<h1>Logging out...</h1>
	<p>{{ errorMsg }}</p>
</template>
