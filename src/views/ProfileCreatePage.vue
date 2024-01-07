<script setup>
import { ref } from 'vue'

let username = ref('')
let email = ref('')
let password = ref('')
let screenname = ref('')

function addUsername() {
	console.log('username.value:', username.value)
}
</script>
<template>
	<h1>Create account</h1>
	<form>
		<label for="username">Username:</label>
		<input type="text" id="username" v-model="username" />
		<label for="email">Email address:</label>
		<input type="email" id="email" v-model="email" />
		<label for="password">Password:</label>
		<input id="password" type="password" v-model="password" />
		<label></label>
		<label for="screenname">Screen name:</label>
		<input type="text" id="screenname" v-model="screenname" />
		<button>Create account</button>
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
