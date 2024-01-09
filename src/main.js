import './assets/main.css'

import { createApp, ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { routes } from './router'

import { supabase } from './clients/supabase'

import App from './App.vue'

const app = createApp(App)
let router = createRouter({
	history: createWebHistory(),
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

router.beforeEach(async (to) => {
	if (to.meta.requiresAuth || to.meta.requiresNoAuth) {
		const localUser = await supabase.auth.getSession()
		if (localUser.data.session === null) isAuthenticated = false
		else isAuthenticated = true
		if (isAuthenticated.value === false && to.meta.requiresAuth) {
			// not authenticated, redirect to login')
			return { name: 'login' }
		} else if (isAuthenticated === true && to.meta.requiresNoAuth) {
			// already authenticated, redirect to preferences
			return { name: 'profile-preferences' }
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
