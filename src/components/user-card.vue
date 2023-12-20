<script>
import BaseCounter from './BaseCounter.vue'
export default {
	components: { BaseCounter },
	props: {
		user: {
			name: {
				type: String
			},
			food: { type: String }
		}
	},
	methods: {
		tellParentChangeName(x) {
			console.log('change name to ', x)
			// this.user.name = 'Klaas Jansen'
			// $emit('tell-parent-change-name')
		}
	},
	emits: ['tellParentChangeName', 'tell-parent-change-name']
}
</script>
<template>
	<h1>User {{ user.name }}</h1>
	<p>Favorite food: {{ user.food }}</p>
	<BaseCounter :nc="12" />
</template>
