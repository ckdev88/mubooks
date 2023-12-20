<script setup>
import BaseCounter from '../components/BaseCounter.vue'
import UserCard from '../components/user-card.vue'
const props = defineProps({
	title: {
		type: String,
		required: false
	}
})
</script>

<template>
	<h1>Compo ({{ this.$route.name }})</h1>
	<u><slot subtitel /></u>
	<BaseCounter />
	<hr style="margin-top: 1rem; margin-bottom: 0.5rem" />
	<UserCard :user="{ name: 'Benny', food: 'Sashimi' }" />
</template>
