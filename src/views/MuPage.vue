<script>
import MuUserCard from '../components/MuUserCard.vue'
import MuBookOverview from '../components/MuBookOverview.vue'
import { useAuthStore } from '../stores/AuthStore'

const loggedIn = useAuthStore()

export default {
	name: 'MuPage',
	components: { MuUserCard, MuBookOverview },
	data() {
		return {
			user: {
				firstname: 'Jan',
				age: 23
			}
		}
	},
	methods: {
		changeFirstName() {
			console.log('useAuthStore:', loggedIn)
			console.log('useAuthStore:', loggedIn.status)
			this.user.firstname = 'Klaas'
		}
	}
}
</script>
<template>
	---
	{{ loggedInStatus }}
	===
	<MuUserCard :user="user" @change-name="changeFirstName" />
	<MuBookOverview />
</template>
