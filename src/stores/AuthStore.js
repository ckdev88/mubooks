import { defineStore } from 'pinia'

// TODO: apply supabase to global states

export const useAuthStore = defineStore('AuthStore', {
	state: () => ({
		status: false,
		screenname: '',
		username: '',
		email: '',
		uid: 1337,
		link: 'login'
	}),
	actions: {
		setUsername(s = '') {
			this.username = s
		},
		setLoginStatus(s = false) {
			console.log('set loginStatus to ', s)
			this.status = s
			if (s === false) {
				this.setUsername()
			}
		}
	}
})
