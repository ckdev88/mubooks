<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const state = reactive({
	content: 'loginpage content here',
	formNotification: 'Hoe gaan we?',
	loginEmail: null
})

const handleSubmit = () => {
	// if (state.loginEmail.length > 8 && state.loginEmail.includes('@')) {
	// if (state.loginEmail.length > 8) {
	console.log('state.loginEmail:', state.loginEmail)
	if (state.loginEmail.length > 8) {
		state.formNotification = 'submitting form...' + state.loginEmail.length
		if (state.loginEmail === 'dashboard@d.d') {
			router.push('/new')
		} else if (state.loginEmail.includes('ch')) {
			router.push({
				name: 'dashboard',
				params: { username: 'chelsey', userid: 5 }
			})
		} else {
			router.push('/users')
		}
	} else {
		state.formNotification = 'error'
	}
	console.log('state.formNotification:', state.formNotification)
}
</script>
<template>
	<h1>Login ({{ this.$route.name }})</h1>
	<pre>dashboard@d.d -> /new , ch -> /dashboard, else /users</pre>
	<slot subtitel />
	<form @submit.prevent="handleSubmit()">
		<label for="loginEmail"
			><input type="email" v-model="state.loginEmail" />{{ state.loginEmail }}</label
		>
		<div style="color: lime">{{ state.formNotification }}</div>
		<button>Login with email</button>
	</form>
	<br />
	{{ state.content }}
</template>
