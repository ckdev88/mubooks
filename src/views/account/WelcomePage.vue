<script setup>
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()
console.log('authStore:', authStore)

// TODO: make pinia sync with supabase auth.users
</script>
<template>
	<h1>Welcome {{ authStore.screenname }}!</h1>
	<h2>What do you want to do?</h2>
	<RouterLink to="boekzoek">Find a book</RouterLink>
</template>
