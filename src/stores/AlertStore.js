import { defineStore } from 'pinia'

export const useAlertStore = defineStore('AlertStore', {
	state: () => ({
		currentAlert: null,
		active: false
	})
})
