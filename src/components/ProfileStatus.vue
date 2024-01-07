<script setup>
import { reactive } from 'vue'
import { useLoggedinStore } from '../stores/LoggedinStore'
// TODO: apply supabase account management

const state = reactive({
	loggedin: useLoggedinStore(),
	welcometext: 'Log in',
	welcomelink: 'login'
})
</script>
<template>
	<div id="profile-status">
		<!-- <div class="supabase-test"> -->
		<!-- 	<h1>Profile</h1> -->
		<!-- 	<p>Email: {{ email }}</p> -->
		<!-- </div> -->
		<RouterLink :to="state.loggedin.link">
			👤{{ state.loggedin.status === true ? state.loggedin.username : state.welcometext }}
		</RouterLink>
	</div>
</template>
<style type="scoped">
#profile-status {
	border: 1px solid darkseagreen;
}
</style>
