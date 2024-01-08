<script setup>
import { onMounted, reactive } from 'vue'
import { supabase } from '../clients/supabase'
import { useRouter } from 'vue-router'
const router = useRouter()

const account = reactive({
	screenname: 'scrname',
	username: '',
	email: '',
	password: 'should not show, only push to update'
})

async function showCurrentUser() {
	const { data } = await supabase.auth.getUser()
	console.log('data (profilePreferencesPage):', data.user)
	const u = data.user
	account.email = u.email
	console.log('data.user.email:', data.user.email)
	// TODO: add screen name
}

//logout
async function logoutAccount() {
	console.log('logout account')

	const { error } = await supabase.auth.signOut()
	if (error) console.log('error:', error)
	else {
		console.log('signed out!')
		router.push('profile-login')
	}
}
function goLogin() {
	console.log('go login')
	router.push('profile-login')
}
onMounted(() => {
	showCurrentUser()
})
</script>
<template>
	<h1>ProfilePreferencesPage</h1>
	<dl>
		<dt>Screen name:</dt>
		<dd>{{ account.screenname }}</dd>
		<dt>Email address</dt>
		<dd>{{ account.email }}</dd>
		<dt>Password</dt>
		<dd>****** <button>change</button></dd>
	</dl>
	<button @click="logoutAccount">Log out</button>
	<button @click="goLogin">Log in</button>
</template>
