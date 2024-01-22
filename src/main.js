import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { routes } from './router'
import { supabase } from '/src/clients/supabase'
import { useStatusStore } from './stores/statusStore'

import App from './App.vue'

const app = createApp(App)
let router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach(async (to, from) => {
	document.body.classList.add(to.name)
	document.body.classList.remove(from.name)

	const localUser = await supabase.auth.getSession() // 1337 deze weg

	if (localUser.data.session === null) {
		// isAuthenticated = false
		useStatusStore.setStatusLogout
		if (to.meta.requiresAuth) return { name: 'login' }
	} else {
		// isAuthenticated = true
		useStatusStore().setStatusLogin(
			localUser.data.session.user.id,
			localUser.data.session.user.email,
			localUser.data.session.user.user_metadata.screenname
		)
	}
})

const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')

// TODO: apply dark mode option when light mode is all pretty and stuff
document.getElementsByTagName('html')[0].classList.add('light-mode')
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 	document.getElementsByTagName('html')[0].classList.add('dark-mode')
// } else {
// }
