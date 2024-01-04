import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { routes } from './router'

import App from './App.vue'

const app = createApp(App)
const router = createRouter({
	history: createWebHistory(),
	routes
})
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: adark)').matches) {
	document.getElementsByTagName('html')[0].classList.add('dark-mode')
} else {
	document.getElementsByTagName('html')[0].classList.add('light-mode')
}
