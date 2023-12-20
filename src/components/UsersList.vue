<script setup>
import { RouterLink } from 'vue-router'
// import UserCard from './UserCard.vue'
// import { useRoute } from 'vue-router'

const userslist = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
	res.json()
)
</script>

<template>
	<ul v-if="userslist.length > 0">
		<li v-for="user in userslist" :key="user.id">
			<RouterLink :to="`/users/${user.id}`">{{ user.name }}</RouterLink>
		</li>
	</ul>
	<div v-else>No users found</div>
</template>
