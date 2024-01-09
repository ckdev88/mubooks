import { defineStore } from 'pinia'

// TODO: apply supabase to global states
export const useLoggedinStore = defineStore('LoggedinStore', {
	state: () => ({
		status: false,
		username: 'Yuup',
		email: '',
		uid: 1337,
		link: 'login'
	}),
	actions: {
		setusername() {
			this.username = 'Jaap'
			this.status = true
		},
		loginStatus(s = false) {
			this.status = s
		}
	}
})
