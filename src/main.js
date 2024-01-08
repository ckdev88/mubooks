import './assets/main.css'

import { createApp, reactive, watch, ref } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { routes } from './router'

import { supabase } from './clients/supabase'

const state = reactive({
	userarr: await supabase.auth.getSession()
})
watch(state.userarr, () => {
	console.log('userarr changed', state)
})
import App from './App.vue'

const app = createApp(App)
let router = createRouter({
	history: createWebHashHistory(),
	routes
})
let isAuthenticated = ref(false)
router.beforeEach((to) => {
	console.log('isAuthenticated:', isAuthenticated)
	if (state.userarr.data.session === null) isAuthenticated.value = false
	else isAuthenticated.value = true

	if (!isAuthenticated.value && to.meta.requiresAuth) {
		console.log('not authenticated, redirecting to login')
		return { name: 'profile-login' }
	} else if (isAuthenticated.value && to.meta.requiresNoAuth) {
		console.log('already authenticated, redirecting to preferences')
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
