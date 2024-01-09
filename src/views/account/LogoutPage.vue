<script setup>
import { supabase } from '../../clients/supabase'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useLoggedinStore } from '../../stores/LoggedinStore'
const loggedinstore = useLoggedinStore()

const router = useRouter()
let errorMsg = ref('Just one moment...')
async function logoutAccount() {
	console.log('logout account')

	const { error } = await supabase.auth.signOut()
	if (error !== null) {
		errorMsg.value = error
		return false
	} else {
		loggedinstore.loginStatus(false)
		return true
	}
}
onMounted(async () => {
	await logoutAccount()
	router.push('login')
})
</script>
<template>
	<h1>Logging out...</h1>
	<p>{{ errorMsg }}</p>
</template>
