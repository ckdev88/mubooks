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
	<div id="welcome-logos">
		<!-- <img id="welcome-logo1" src="../../../../public/img/mubook-logo.png" /> -->
		<!-- <img id="welcome-logo2" src="../../../../public/img/mubook.png" /> -->
		<img id="welcome-logo1" src="/public/img/mubook-logo.png" />
		<img id="welcome-logo2" src="/public/img/mubook.png" />
	</div>
	<article class="card">
		<header>Log in</header>
		<form @submit.prevent="loginAccount">
			<label for="email">Email</label>
			<input type="email" id="email" v-model="email" required />
			<label for="password">Password</label>
			<input type="password" id="password" v-model="password" />
			<button>Log in</button>
		</form>
		<footer><a href="#">Forgot password</a> <a href="#">New here? Join now.</a></footer>
	</article>
	<br style="clear: both" />
	<div class="hidden">
		<br />
		<button @click="toPrefs">To preferences</button>
		<button @click="loginAccount">Login</button>
		<button @click="seeCurrentUser">See user</button>
		<button @click="logoutAccount">Log out</button>
		<br style="clear: both" />
		Or...<br />
		Use google auth, apple id, etc
	</div>
</template>
<style scoped>
/* superexperimenteel, later mooi maken */
#welcome-logos {
	max-height: 4rem;
}
#welcome-logo1,
#welcome-logo2 {
	max-width: 50%;
	display: block;
	margin: 0 auto;
	position: relative;
}
#welcome-logo1 {
	margin-bottom: -2.5rem;
	z-index: 2;
}
#welcome-logo2 {
	margin-top: -3.5rem;
	z-index: 1;
}
.card {
	position: relative;
	z-index: 3;
	margin-top: 7rem;
}
</style>
