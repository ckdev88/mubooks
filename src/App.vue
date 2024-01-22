<script setup>
import NavWrapper from './components/NavWrapper.vue'
import { useRouter } from 'vue-router'

// hacky bit ... TODO: make less hacky
import { useAuthStore } from './stores/AuthStore'
const authStore = useAuthStore()
import { useStatusStore } from './stores/statusStore'
// const statusStore = useStatusStore()
// import { supabase } from './clients/supabase'

// supabase.auth.getUser().then(
// 	(value) => {
// 		useStatusStore().setStatusLogin(
// 			value.data.user.id,
// 			value.data.user.email,
// 			value.data.user.user_metadata.screenname
// 		)
//
// 		console.log('222222222222222222222222222222222')
// 		authStore.setStatus(
// 			useStatusStore.loggedin,
// 			useStatusStore.screenname,
// 			useStatusStore.username,
// 			useStatusStore.email,
// 			useStatusStore.uid
// 		)
// 	},
// 	(error) => {
// 		console.log('error:', error)
// 		useStatusStore().setStatusLogout()
// 	}
// )
//
// useAuthStore().screenname = statusStore.status.screenname
let loggedIn
if (localStorage.getItem('user') === null) loggedIn = false
else {
	if (JSON.parse(localStorage.getItem('user')).loggedin !== null) {
		loggedIn = JSON.parse(localStorage.getItem('user')).loggedin
	}
}
</script>

<template>
	<header id="header" v-if="authStore.status === true || loggedIn === true">
		<NavWrapper />
	</header>
	<main id="main">
		<RouterView />
	</main>
	<footer id="footer">
		<!-- <GlobalCounter /> -->
	</footer>
</template>
