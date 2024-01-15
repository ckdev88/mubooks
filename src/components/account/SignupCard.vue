<script setup>
// export default {
// 	name: 'SignupCard'
// }
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../clients/supabase'
import { useAuthStore } from '../../stores/AuthStore'
import useCardRotate from '../../composables/useCardRotate'

const authStore = useAuthStore()
const router = useRouter()
const f = reactive({
	screenname: '',
	email: '',
	password: ''
})

async function createAccount() {
	console.log('create account')
	console.log('email,password:', f.email, f.password)
	const { data, error } = await supabase.auth.signUp({
		email: f.email,
		password: f.password,
		options: {
			data: { screenname: f.screenname }
		}
	})
	if (error) {
		console.log(error)
	} else {
		console.log('adding user:', data)
		console.log(' user:', data.user.id)
		authStore.setEmail(f.email)
		authStore.setScreenname(f.screenname)
		authStore.setUid(data.user.id)
		console.log('Account created, referring...')
		router.push({ name: 'checkmail' })
	}
}
</script>

<template>
	<article class="card">
		<header>Let me join</header>
		<form @submit.prevent="createAccount">
			<label for="screenname">Screen name</label>
			<input type="text" id="signup-screenname" v-model="f.screenname" />
			<label for="email">Email address: *</label>
			<input type="email" id="signup-email" v-model="f.email" required />
			<label for="password">Password: *</label>
			<input type="password" id="signup-password" v-model="f.password" required />
			<button>Vamos</button>
		</form>
		<footer><button class="btn-text" @click="useCardRotate">login</button></footer>
	</article>
</template>
