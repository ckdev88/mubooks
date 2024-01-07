import { defineStore } from 'pinia'
// TODO: apply supabase to global states
export const useLoggedinStore = defineStore('Loggedin', {
	state: () => ({
		status: false,
		username: 'Yuup',
		email: '',
		uid: 1337,
		link: 'login'
	})
})
