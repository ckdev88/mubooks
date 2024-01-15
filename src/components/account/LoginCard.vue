<script setup>
import { onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../clients/supabase'
// export default {
import useRotateCard from '../../composables/useCardRotate'
// name: 'LoginCard'
// }
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
	<article class="card">
		<header>Log in</header>
		<form @submit.prevent="loginAccount">
			<label for="email">Email</label>
			<input type="email" id="login-email" v-model="email" required />
			<label for="password">Password</label>
			<input type="password" id="login-password" v-model="password" />
			<button>Log in</button>
		</form>
		<footer>
			<a href="#">Forgot password</a>
			<button class="btn-text" @click="useRotateCard()">New here? Join now.</button>
		</footer>
	</article>
</template>
