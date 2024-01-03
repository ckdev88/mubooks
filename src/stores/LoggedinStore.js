import { defineStore } from 'pinia'
export const useLoggedinStore = defineStore('Loggedin', {
	state: () => ({
		status: false,
		username: 'carla',
		uid: 1337,
		link: 'login'
	})
})
