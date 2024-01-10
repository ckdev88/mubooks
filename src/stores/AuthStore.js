import { defineStore } from 'pinia'

// TODO: apply supabase to global states

export const useAuthStore = defineStore('AuthStore', {
	state: () => ({
		status: false,
		screenname: '',
		username: '',
		email: '',
		uid: '',
		link: 'login'
	}),
	actions: {
		setUsername(s = '') {
			this.username = s
		},
		setLoginStatus(s = false) {
			// user.role: authenticated / user.aud: authenticated
			console.log('set loginStatus to ', s)
			this.status = s
			if (s === false) {
				this.setUsername()
			}
		},
		setEmail(s = '') {
			// user.email
			this.email = s
		},
		setScreenname(s = '') {
			// user.user_metadata.screenname
			this.screenname = s
		},
		setUid(s = '') {
			// user.id
			this.uid = s
		}
	}
})
