<script setup>
// TODO: design & copywrite confirmation email
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()
</script>
<template>
	<h1>Check your email</h1>
	<p>
		You should receive an email on
		<strong
			><u> {{ authStore.email }}</u></strong
		>
		containing a link to verify your account, click it.
	</p>
</template>
