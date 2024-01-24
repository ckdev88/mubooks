<script setup>
import { ref } from 'vue'
// import { useCountStore } from './../stores/CountStore'
// const count = useCountStore()
// console.log('count:', count)

import { useAuthStore } from '../stores/AuthStore'
const authStore = useAuthStore()
// console.log('authStore:', authStore)
let tmpnaam = ref(authStore.username)
</script>
<template>
	<h2>global pinia states / store: useCountStore</h2>
	{{ count.count }}
	<button @click="count.increment">increment</button>
	<h2>global pinia state / store: useAuthStore</h2>
	Loggedstore.status: {{ authStore.status }}<br />
	authStore.username: {{ authStore.username }}<br />
	<button @click="authStore.setLoginStatus(true)">login</button><br />
	<button @click="authStore.setLoginStatus(false)">logout</button><br />
	<button @click="authStore.setUsername('Sjaak')">Change username</button><br />
	tmpnaam: {{ tmpnaam }}<br />
	{{ authStore }}
</template>
