<script setup>
// go to /users/1

import UsersList from '../components/UsersList.vue'
import { useCount } from '@/composables/useCountStore'

const countStore = useCount()
const props = defineProps({
	title: {
		type: String,
		required: true
	}
})
</script>
<template>
	<RouterLink to="/users/2">Ervin (2)</RouterLink>
	<RouterLink to="/users/7">Kurtis (7)</RouterLink>

	Local: {{ countStore.localCount }}<br />
	<button @click="countStore.incrementLocalCount">+1</button>
	<h1>Users ({{ this.$route.name }})</h1>
	<slot subtitel />
	<Suspense>
		<UsersList />
		<template #fallback>Loading...</template>
	</Suspense>
</template>

<!-- https://jsonplaceholder.typicode.com/users -->
