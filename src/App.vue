<script setup>
import NavWrapper from './components/NavWrapper.vue'

// hacky bit ... TODO: make less hacky
import { useAuthStore } from './stores/AuthStore'
// const localUser = await supabase.auth.getSession()
// console.log('localuser:', localUser)

// const localUser = await supabase.auth.getSession()
// console.log('localuserr2:', localUser)
const authStore = useAuthStore()
if (!authStore.uid) $router.push({ name: 'login' })

// if (localUser.data.session === null) {
// 	console.log('not logged in, redirect to login in case not in logout page')
// } else {
// 	authStore.setStatus(
// 		true,
// 		localUser.data.session.user.user_metadata.screenname,
// 		localUser.data.session.email,
// 		localUser.data.session.email,
// 		localUser.data.session.id
// 	)
// }
// console.log('localuser email:', localUser.data.session.user.email)
// console.log('localuser screenname:', localUser.data.session.user.user_metadata.screenname)
// /hacky bit
</script>

<template>
	<header id="header" v-if="authStore.uid">
		<NavWrapper />
	</header>
	<main id="main">
		<RouterView />
	</main>
	<footer id="footer">
		<!-- <GlobalCounter /> -->
	</footer>
</template>
