<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../clients/supabase'

const router = useRouter()
//connect inputs
let email = ref('')
let password = ref('')

//create account
async function createAccount() {
	console.log('create account')
	console.log('email,password:', email.value, password.value)
	const { data, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value
	})
	if (error) {
		console.log(error)
	} else {
		console.log('data:', data)
	}
}
//login
async function loginAccount() {
	console.log('login account')
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	})
	if (error) console.log(error)
	else {
		console.log('loginaccount data:', data)
		router.push('profile-preferences')
	}
}

//see currentuser
async function seeCurrentUser() {
	console.log('see current user')
	// const {data,error}=await supabase.auth.getSession()
	const { data, error } = await supabase.auth.getSession()

	if (error) console.log('error:', error)
	else console.log('data:', data)
	// const { data: { user } } = await supabase.auth.getUser()
}

//logout
async function logoutAccount() {
	console.log('logout account')

	const { error } = await supabase.auth.signOut()
	if (error) console.log('error:', error)
	else console.log('signed out!')
}

function toPrefs() {
	router.push('profile-preferences')
}
//ilike.espressoalot
</script>
<template>
	<h1>ProfileLoginPage</h1>

	<form @submit="loginAccount">
		<label for="email">Email</label>
		<input type="email" id="email" v-model="email" required />
		<label for="password">Password</label>
		<input type="password" id="password" v-model="password" />
		<button>Log in</button>
	</form>
	<br style="clear: both" />
	<br />
	<button @click="toPrefs">To preferences</button>
	<button @click="createAccount">Create</button>
	<button @click="loginAccount">Login</button>
	<button @click="seeCurrentUser">See user</button>
	<button @click="logoutAccount">Log out</button>
	<br style="clear: both" />
	Or...<br />
	Use google auth, apple id, etc
	<!-- <RouterLink :to="profileCreate" /> -->
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
