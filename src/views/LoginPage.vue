<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLoggedinStore } from '../stores/LoggedinStore'

const loggedIn = useLoggedinStore()
console.log('loggedIn:', loggedIn.status)

const route = useRoute()
const router = useRouter()
const state = reactive({
	content: 'loginpage content here',
	formNotification: 'Hoe gaan we?',
	loginEmail: null
})
console.log('loggedIn.status:', loggedIn.status)
if (loggedIn.status === true) router.push('mubooks')
const handleSubmit = () => {
	// if (state.loginEmail.length > 8 && state.loginEmail.includes('@')) {
	// if (state.loginEmail.length > 8) {
	console.log('state.loginEmail:', state.loginEmail)
	if (state.loginEmail.length > 8) {
		state.formNotification = 'submitting form...' + state.loginEmail.length
		if (state.loginEmail === 'carla@carla.com') {
			loggedIn.username = 'carla'
			loggedIn.status = true
			loggedIn.link = '/mubooks'
			router.push('mubooks')
		}
		if (state.loginEmail === 'routeinfo@d.d') {
			router.push('/new')
		} else if (state.loginEmail.includes('ch')) {
			router.push({
				name: 'routeinfo',
				params: { username: 'chelsey', userid: 5 }
			})
		}
	} else {
		state.formNotification = 'error'
	}
	console.log('state.formNotification:', state.formNotification)
}
</script>
<template>
	<h1>Login ({{ this.$route.name }})</h1>
	<pre>routeinfo@d.d -> /new , ch -> /routeinfo, else /users</pre>
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
