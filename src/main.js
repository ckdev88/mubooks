import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { routes } from './router'

import App from './App.vue'

const app = createApp(App)
const router = createRouter({
	history: createWebHashHistory(),
	routes
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
