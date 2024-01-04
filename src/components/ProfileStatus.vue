<script setup>
import { reactive } from 'vue'
import { useLoggedinStore } from '../stores/LoggedinStore'

const state = reactive({
	loggedin: useLoggedinStore(),
	welcometext: 'Log in',
	welcomelink: 'login'
})
// if (state.loggedin.status === true) {
// 	state.welcomelink = '/mubooks'
// }
</script>
<template>
	<div id="profile-status">
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
