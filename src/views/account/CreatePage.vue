<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../clients/supabase'
import { useAuthStore } from '../../stores/AuthStore'

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
	<h1>Let me join</h1>
	<form @submit.prevent="createAccount">
		<label for="screenname">Screen name</label>
		<input type="text" id="screenname" v-model="f.screenname" />
		<label for="email">Email address: *</label>
		<input type="email" id="email" v-model="f.email" required />
		<label for="password">Password: *</label>
		<input id="password" type="password" v-model="f.password" required />
		<button>Vamos</button>
	</form>
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
h1 {
	margin-bottom: 1rem;
}
button {
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
</style>
