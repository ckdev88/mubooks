<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '../clients/supabase'

let isLoggedin = ref(false)

async function retrieveUser() {
	const {
		data: { session },
		error
	} = await supabase.auth.getSession()
	console.log('session:', session)
	if (session !== null) isLoggedin.value = true
}
// const isLoggedin = async () => {
// 	const { data, error } = await supabase.auth.getSession()
// 	if (error) {
// 		console.log('error:', error)
// 		false
// 	} else {
// 		console.log('data:', data)
// 		return true
// 	}
// 	// if (error) return false
// 	// return true
// }
onMounted(() => {
	retrieveUser()
})

//get user email address and show on screen
</script>
<template>
	<h1>ProfileSecretPage</h1>
	<p>Secret page, only visible when logged in</p>
	{{ isLoggedin }}
	<div id="account" v-if="isLoggedin">
		Account:
		<p>Protect the secret password: **TMX$$</p>
		<!-- user email address here -->
	</div>
	<div class="unauthorized" v-if="!isLoggedin">
		Not logged in, do that first: <RouterLink to="/profile-login">here</RouterLink>
	</div>
</template>
<style>
#account {
	color: green;
}
</style>
