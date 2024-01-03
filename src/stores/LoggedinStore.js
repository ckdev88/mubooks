import { defineStore } from 'pinia'
export const useLoggedinStore = defineStore('Loggedin', {
	state: () => ({
		status: false,
		username: 'pietjebell',
		uid: 1337
	})
})
