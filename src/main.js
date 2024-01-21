import './assets/main.css'

import { createApp, ref } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { routes } from './router'
import { supabase } from '/src/clients/supabase'

import App from './App.vue'
import { useAuthStore } from './stores/AuthStore'
// import { useAuthStore } from './stores/AuthStore' // 1337 deze erin

const app = createApp(App)
let router = createRouter({
	history: createWebHashHistory(),
	routes
})

// ---------------------------------------------------------------
//
// router.beforeEach(async (to) => {
// 	// clear alert on route change
// 	const alertStore = useAlertStore()
// 	alertStore.clear()
//
// 	// redirect to login page if not logged in and trying to access a restricted page
// 	const publicPages = ['/account/login', '/account/register']
// 	const authRequired = !publicPages.includes(to.path)
// 	const authStore = useAuthStore()
//
// 	if (authRequired && !authStore.user) {
// 		authStore.returnUrl = to.fullPath
// 		return '/account/login'
// 	}
// })

// ---------------------------------------------------------------

let isAuthenticated = ref(false)

router.beforeEach(async (to, from) => {
	document.body.classList.add(to.name)
	document.body.classList.remove(from.name)

	// 1337 deze erin
	/*
	// hacky bit ... TODO: make less hacky
	const authStore = useAuthStore()
	const localUser = await supabase.auth.getSession()
	console.log('localuser:', localUser)

	if (localUser.data.session === null) {
		console.log('not logged in, redirect to login in case not in logout page')
	} else {
		authStore.setStatus(
			true,
			localUser.data.session.user.user_metadata.screenname,
			localUser.data.session.email,
			localUser.data.session.email,
			localUser.data.session.id
		)
	}
	console.log('localuser email:', localUser.data.session.user.email)
	console.log('localuser screenname:', localUser.data.session.user.user_metadata.screenname)
	// /hacky bit

*/
	// /1337 deze erin
	console.log('to:', to)
	console.log('to.meta', to.meta)
	if (to.meta.requiresAuth || to.meta.requiresNoAuth) {
		// if (to.meta.requiresAuth === true && isAuthenticated === false) {
		// 	console.log('go login already!')
		// 	return { name: 'login' }
		// }
		console.log('to.meta.requiresAuth:', to.meta.requiresAuth)
		console.log(
			'isAuthenticated',
			isAuthenticated,
			'isAuthenticated.value',
			isAuthenticated.value
		)
		const localUser = await supabase.auth.getSession() // 1337 deze weg
		console.log('localUser (main.js):', localUser)
		if (localUser.data.session === null) isAuthenticated = false
		else isAuthenticated = true

		// 1337 dit moet veel netter
		console.log('isAuthenticated vauit bla:', isAuthenticated)
		useAuthStore().status = isAuthenticated
		useAuthStore().screenname = localUser.data.session.user.user_metadata.screenname
		useAuthStore().email = localUser.data.session.user.email
		useAuthStore().username = localUser.data.session.user.email
		useAuthStore().uid = localUser.data.session.user.uid
		// 1337 /dit moet veel netter

		if (isAuthenticated.value === false && to.meta.requiresAuth) {
			// not authenticated, redirect to login'
			return { name: 'login' }
		} else if (isAuthenticated === true && to.meta.requiresNoAuth) {
			// already authenticated, redirect to profile
			return { name: 'dashboard' }
		}
	}
})

const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')

// TODO: apply dark mode option when light mode is all pretty and stuff
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 	document.getElementsByTagName('html')[0].classList.add('dark-mode')
// } else {
document.getElementsByTagName('html')[0].classList.add('light-mode')
// }
