<script setup>
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()
console.log('authStore:', authStore)

// TODO: make pinia sync with supabase auth.users
</script>
<template>
	<h3>Hi {{ authStore.screenname }}, welcome to MuBOOKS</h3>
	<p>
		your journal for your books.<br />
		Let's get started!
	</p>
	<RouterLink to="boekzoek">Find a book</RouterLink>
</template>
<style scoped>
h3 {
	margin-bottom: 0;
	display: inline;
}
p {
	margin-top: 0;
	display: inline;
}
</style>
