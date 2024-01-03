<script>
import MuUserCard from '../components/MuUserCard.vue'
import MuBookOverview from '../components/MuBookOverview.vue'
import { useLoggedinStore } from '../stores/LoggedinStore'

const loggedIn = useLoggedinStore()

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
			console.log('useLoggedinStore:', loggedIn)
			console.log('useLoggedinStore:', loggedIn.status)
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
