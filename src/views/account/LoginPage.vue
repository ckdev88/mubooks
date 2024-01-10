<script setup>
import { onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../clients/supabase'

import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()

const router = useRouter()

let email = ref('')
let password = ref('')

//login
async function loginAccount() {
	console.log('login account')
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error) console.log(error)
	else {
		// TODO: convert to object and update the 1 object in 1 function
		authStore.setLoginStatus(true)
		authStore.setEmail(data.session.user.email)
		authStore.setUsername(data.session.user.email)
		authStore.setUid(data.session.user.id)
		authStore.setScreenname(data.session.user.user_metadata.screenname)
		router.push('welcome')
	}
}

//see currentuser
async function seeCurrentUser() {
	console.log('see current user')
	const { data, error } = await supabase.auth.getSession()

	if (error) console.log('error:', error)
	else console.log('data:', data)
}

//logout
async function logoutAccount() {
	console.log('logout account')

	const { error } = await supabase.auth.signOut()
	if (error) console.log('error:', error)
	else {
		authStore.setLoginStatus(false)
		console.log('signed out!')
	}
}

function toPrefs() {
	router.push('profile-preferences')
}
onUpdated(() => {
	console.log('loginstatus in loginpage.vue:', authStore.status)
})
</script>
<template>
	<h1>Let yourself in mladay</h1>
	<form @submit.prevent="loginAccount">
		<label for="email">Email</label>
		<input type="email" id="email" v-model="email" required />
		<label for="password">Password</label>
		<input type="password" id="password" v-model="password" />
		<button>Log in</button>
	</form>
	<br style="clear: both" />
	<br />
	<button @click="toPrefs">To preferences</button>
	<button @click="loginAccount">Login</button>
	<button @click="seeCurrentUser">See user</button>
	<button @click="logoutAccount">Log out</button>
	<br style="clear: both" />
	Or...<br />
	Use google auth, apple id, etc
</template>
<style scoped>
h1,
form,
label,
input,
button {
	display: block;
	text-align: left;
}
button {
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
</style>
