<script setup>
// TODO: make useful or remove, probably just remove
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

const userStore = useUserStore()

const userslist = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
	res.json()
)
userStore.userList = userslist
console.log('userStore.userList:', userStore.userList)
console.log('shortuserlist', userStore.shortUserList)
</script>

<template>
	<h3>Users ( {{ userStore.userList.length }} )</h3>
	<ul v-if="userStore.userList.length > 0">
		<li v-for="user in userStore.userList" :key="user.id">
			<RouterLink :to="`/users/${user.id}`">{{ user.name }} </RouterLink>
		</li>
	</ul>
	<div v-else>No users found</div>
	<h3>Short user list ( {{ userStore.shortUserList.length }} )</h3>
	<ul v-if="userStore.shortUserList.length > 0">
		<li v-for="user in userStore.shortUserList" :key="user.id">
			<RouterLink :to="`/users/${user.id}`">{{ user.name }} </RouterLink>
		</li>
	</ul>
	<div v-else>No users found</div>
</template>
