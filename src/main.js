import './assets/main.css'

import { createApp, reactive } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { routes } from './router'

import { supabase } from './clients/supabase'

const state = reactive({
	userarr: await supabase.auth.getSession()
})

import App from './App.vue'

const app = createApp(App)
let router = createRouter({
	history: createWebHashHistory(),
	routes
})
let isAuthenticated = false
router.beforeEach(async (to) => {
	if (state.userarr.data.session === null) isAuthenticated = false
	else isAuthenticated = true

	if (!isAuthenticated && to.meta.requiresAuth) {
		return { name: 'profile-login' }
	} else if (isAuthenticated && to.meta.requiresNoAuth) {
		return { name: 'profile-preferences' }
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
